/**
 * NutriChilango Autonomous Price Scraper v3
 *
 * Multi-source, resilient scraper with:
 * - Auto-discovery of all branded products from the store catalog
 * - Multiple retailer fallback (Soriana → Chedraui → HEB)
 * - Vegan specialty store sources (Mr. Tofu, Vegan Label, Green Paradise, etc.)
 * - Product-name validation to prevent wrong-product price matches
 * - Category-aware price guardrails
 * - Retry logic with exponential backoff per target
 * - Structured reporting
 *
 * Exit code 1 if zero prices were scraped.
 */

import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

chromium.use(stealth());

const STORES_DIR = path.join(process.cwd(), 'src/data/stores');
const UPDATES_DIR = path.join(process.cwd(), 'data/updates');
const REPORT_PATH = path.join(UPDATES_DIR, 'scrape-report.json');
const OUTPUT_PATH = path.join(UPDATES_DIR, 'scraped-prices.json');

// ---------------------------------------------------------------------------
// Retail search sources — ordered by reliability (best first)
// ---------------------------------------------------------------------------
const RETAIL_SOURCES = [
  {
    name: 'Soriana',
    buildUrl: (query) => `https://www.soriana.com/buscar?q=${encodeURIComponent(query)}`,
    selector: '.product-price, .price',
  },
  {
    name: 'Chedraui',
    buildUrl: (query) => `https://www.chedraui.com.mx/search?q=${encodeURIComponent(query)}`,
    selector: '.product-price, .price, .vtex-product-price',
  },
  {
    name: 'HEB',
    buildUrl: (query) => `https://www.heb.com.mx/buscar?q=${encodeURIComponent(query)}`,
    selector: '.product-price, .price',
  },
  {
    name: 'Walmart',
    buildUrl: (query) => `https://www.walmart.com.mx/productos?Ntt=${encodeURIComponent(query)}`,
    selector: '.product-price, .price, .price-main',
  },
];

// ---------------------------------------------------------------------------
// Vegan specialty store sources — for plant-based / specialty products
// ---------------------------------------------------------------------------
const VEGAN_RETAIL_SOURCES = [
  {
    name: 'Mr. Tofu',
    buildUrl: (query) => `https://mrtofu.com/search?q=${encodeURIComponent(query)}`,
    selector: '.product-price, .price, .money',
  },
  {
    name: 'Vegan Label',
    buildUrl: (query) => `https://www.veganlabel.mx/search?q=${encodeURIComponent(query)}`,
    selector: '.product-price, .price, .money',
  },
  {
    name: 'Green Paradise',
    buildUrl: (query) => `https://greenparadise.com.mx/search?q=${encodeURIComponent(query)}`,
    selector: '.product-price, .price, .money',
  },
  {
    name: 'Veggicano',
    buildUrl: (query) => `https://veggicano.com.mx/search?q=${encodeURIComponent(query)}`,
    selector: '.product-price, .price, .money',
  },
  {
    name: 'Abasto Vegano',
    buildUrl: (query) => `https://abastovegano.com/search?q=${encodeURIComponent(query)}`,
    selector: '.product-price, .price, .money',
  },
  {
    name: 'Sano Mundo',
    buildUrl: (query) => `https://sanomundo.mx/search?q=${encodeURIComponent(query)}`,
    selector: '.product-price, .price, .money',
  },
];

// ---------------------------------------------------------------------------
// Store types that should use vegan sources instead of conventional
// ---------------------------------------------------------------------------
const VEGAN_STORE_TYPES = ['vegan', 'vegetarian', 'naturist'];

// ---------------------------------------------------------------------------
// Category-aware price ranges (MXN) — prevents accepting wildly wrong prices
// ---------------------------------------------------------------------------
const CATEGORY_PRICE_RANGES = {
  dairy:             { min: 20, max: 400 },    // leches, yogurts, quesos
  proteins:          { min: 30, max: 600 },    // carnes veg, tofu, tempeh, proteina
  eggs:              { min: 25, max: 500 },    // sustitutos de huevo
  pantry:            { min: 15, max: 600 },    // levadura nutricional, condimentos
  snacks:            { min: 15, max: 300 },    // galletas, snacks
  'prepared-dishes': { min: 20, max: 300 },    // tacos, sopas
  default:           { min: 5, max: 2000 },    // fallback
};

// ---------------------------------------------------------------------------
// Auto-discover all branded products from the store catalog
// ---------------------------------------------------------------------------
function discoverTargets() {
  const targets = [];
  const files = fs.readdirSync(STORES_DIR).filter(f => f.endsWith('.json'));

  for (const file of files) {
    const stores = JSON.parse(fs.readFileSync(path.join(STORES_DIR, file), 'utf-8'));
    for (const store of stores) {
      for (const product of store.products || []) {
        for (const side of ['traditional', 'plantBased']) {
          const sideData = product[side];
          if (!sideData) continue;

          const brand = sideData.brand || '';
          const name = sideData.name || '';
          const category = product.category || 'default';

          // Only scrape products with known commercial brands
          if (isScrapable(brand, name)) {
            const targetKey = `${store.id}/${product.id}/${side}`;
            targets.push({
              storeId: store.id,
              storeType: store.storeType || 'conventional',
              productId: product.id,
              category,
              side,
              brand,
              productName: name,
              unit: sideData.unit || '',
              currentPrice: sideData.price,
              searchQuery: buildSearchQuery(brand, name, sideData.unit, targetKey),
              altQueries: getAltQueries(targetKey),
            });
          }
        }
      }
    }
  }

  return targets;
}

// ---------------------------------------------------------------------------
// Brand remapping — translates generic/placeholder brands to real brands
// ---------------------------------------------------------------------------
const BRAND_REMAP = {
  'marca comercial': 'Dolores',      // generic tuna → Dolores (top MX brand)
  'a granel':        '',              // skip brand in search, just use name
  'preparado local': '',              // skip brand in search
};

// ---------------------------------------------------------------------------
// Query overrides — custom search terms for specific products that need them.
// Key format: "storeId/productId/side"
// ---------------------------------------------------------------------------
const QUERY_OVERRIDES = {
  'walmart-1/chicken-vs-tempeh-1/plantBased':          'tempeh soya tofupac',
  'central-abastos-1/tuna-vs-homemade-chickpea-tuna-1/traditional': 'atun en lata dolores 140g',
  'por-amor-1/vegan-yogurt-1/traditional':             'silk yogurt soya natural',
  'forever-vegano-1/vegan-eggs-1/plantBased':           'just egg plant based scramble',
  'forever-vegano-1/vegan-eggs-1/traditional':          'ener-g egg replacer sustituto huevo',
};

// ---------------------------------------------------------------------------
// Alternative search queries — tried when primary query returns no price.
// ---------------------------------------------------------------------------
const ALT_QUERIES = {
  'walmart-1/chicken-vs-tempeh-1/plantBased':          ['tempeh soya', 'tempeh natural'],
  'central-abastos-1/tuna-vs-homemade-chickpea-tuna-1/traditional': ['atun dolores lata', 'atun en agua dolores'],
  'por-amor-1/vegan-yogurt-1/traditional':             ['yogurt silk soya', 'yogurt soya'],
  'forever-vegano-1/vegan-eggs-1/plantBased':           ['just egg vegano', 'sustituto huevo just'],
  'forever-vegano-1/vegan-eggs-1/traditional':          ['ener-g sustituto huevo', 'egg replacer'],
};

/**
 * Determines if a product can be scraped from online retailers.
 * Skip artisan/local/homemade products that only exist in physical stores.
 */
function isScrapable(brand, name) {
  const localBrands = [
    'casero', 'local', 'a granel', 'preparado local',
  ];
  const lowerBrand = brand.toLowerCase().trim();
  if (!lowerBrand || localBrands.includes(lowerBrand)) return false;
  return true;
}

/**
 * Builds a clean search query for online retailers.
 * Applies brand remapping and query overrides.
 */
function buildSearchQuery(brand, name, unit, targetKey) {
  // 1) Check for exact query override
  if (QUERY_OVERRIDES[targetKey]) return QUERY_OVERRIDES[targetKey];

  // 2) Remap brand if needed
  const remappedBrand = BRAND_REMAP[brand.toLowerCase().trim()] ?? brand;

  // 3) Avoid duplicating brand in name (e.g. "JUST" brand + "JUST Egg" name)
  let fullName = name;
  if (remappedBrand && fullName.toLowerCase().startsWith(remappedBrand.toLowerCase())) {
    fullName = fullName.slice(remappedBrand.length).trim();
  }

  // 4) Build query: brand + product name + unit for specificity
  const parts = [remappedBrand, fullName].filter(Boolean);
  if (unit) parts.push(unit);

  const cleaned = parts.join(' ')
    .replace(/\b(de|para|en|con|y|la|el|los|las|del)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned;
}

/**
 * Gets alternative search queries for a target.
 */
function getAltQueries(targetKey) {
  return ALT_QUERIES[targetKey] || [];
}

// ---------------------------------------------------------------------------
// Price extraction — universal fallback
// ---------------------------------------------------------------------------
function extractPriceFromPage(page, selector) {
  return page.evaluate((sel) => {
    // 1) Specific selector
    const el = document.querySelector(sel);
    let text = el ? (el.innerText || el.textContent || '') : '';

    // 2) Fallback: full body scan
    if (!text.trim()) text = document.body.innerText || '';

    // 3) Match MXN price patterns
    const matches = text.match(/\$\s*([0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{1,2})?)/g);
    if (!matches) return null;

    for (const m of matches) {
      const num = parseFloat(m.replace('$', '').replace(/,/g, '').trim());
      if (!isNaN(num) && num > 1 && num < 15_000) return num;
    }
    return null;
  }, selector);
}

/**
 * Validates the scraped page contains the expected product.
 * Checks page title/first product result for brand or product name keywords.
 */
async function validateProductMatch(page, brand, productName) {
  try {
    const pageText = await page.evaluate(() => {
      // Get the first product card title or the page <title>
      const productTitle = document.querySelector(
        '.product-name, .product-title, .vtex-product-summary-2-x-productBrand, h1, h2, .product-card__name'
      );
      const titleText = productTitle ? productTitle.innerText : '';
      const pageTitle = document.title || '';
      return (titleText + ' ' + pageTitle).toLowerCase();
    });

    // At least one keyword from brand or product name must appear
    const keywords = [
      ...brand.toLowerCase().split(/\s+/),
      ...productName.toLowerCase().split(/\s+/).filter(w => w.length > 3),
    ].filter(w => w.length > 2);

    const matchCount = keywords.filter(kw => pageText.includes(kw)).length;
    return matchCount >= 1; // At least one keyword match
  } catch {
    return true; // If validation fails, don't block
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const randomDelay = (min, max) => delay(min + Math.floor(Math.random() * (max - min)));

/**
 * Get the appropriate sources for a target based on store type
 */
function getSourcesForTarget(target) {
  if (VEGAN_STORE_TYPES.includes(target.storeType)) {
    // For vegan store products, try vegan sources first, then conventional
    return [...VEGAN_RETAIL_SOURCES, ...RETAIL_SOURCES];
  }
  return RETAIL_SOURCES;
}

/**
 * Get price range for a product category
 */
function getPriceRange(category) {
  return CATEGORY_PRICE_RANGES[category] || CATEGORY_PRICE_RANGES.default;
}

// ---------------------------------------------------------------------------
// Scrape a single target with multi-source + multi-query fallback
// ---------------------------------------------------------------------------
async function scrapeTarget(context, target) {
  const MAX_RETRIES = 2;
  const queries = [target.searchQuery, ...(target.altQueries || [])];
  const sources = getSourcesForTarget(target);
  const priceRange = getPriceRange(target.category);

  for (const query of queries) {
    for (const source of sources) {
      for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        const page = await context.newPage();
        const url = source.buildUrl(query);

        try {
          const resp = await page.goto(url, {
            waitUntil: 'domcontentloaded',
            timeout: 25_000,
          });

          if (resp && (resp.status() === 404 || resp.status() === 403)) {
            throw new Error(`HTTP ${resp.status()}`);
          }

          await randomDelay(2500, 4500);

          // Validate that results contain the expected product
          const isMatch = await validateProductMatch(page, target.brand, target.productName);
          if (!isMatch) {
            throw new Error(`Product mismatch: page does not contain "${target.brand}" or "${target.productName}"`);
          }

          const price = await extractPriceFromPage(page, source.selector);

          if (price === null) {
            throw new Error('No price found');
          }

          // Category-aware price range check
          if (price < priceRange.min || price > priceRange.max) {
            throw new Error(`Price $${price} outside category range [$${priceRange.min}-$${priceRange.max}] for "${target.category}"`);
          }

          // Ratio sanity check vs current price
          if (target.currentPrice > 0) {
            const ratio = price / target.currentPrice;
            if (ratio > 3 || ratio < 0.3) {
              throw new Error(`Price $${price} suspicious vs current $${target.currentPrice} (ratio: ${ratio.toFixed(2)})`);
            }
          }

          return { price, source: source.name, query };
        } catch {
          if (attempt < MAX_RETRIES) await randomDelay(1000, 2000);
        } finally {
          await page.close();
        }
      }
    }
  }

  return null; // All queries, sources, and retries exhausted
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function run() {
  const targets = discoverTargets();

  console.log('🤖 NutriChilango Autonomous Price Scraper v3');
  console.log(`   Discovered: ${targets.length} scrapable products`);
  console.log(`   Conventional sources: ${RETAIL_SOURCES.map(s => s.name).join(', ')}`);
  console.log(`   Vegan sources: ${VEGAN_RETAIL_SOURCES.map(s => s.name).join(', ')}`);
  console.log(`   Date:       ${new Date().toISOString()}\n`);

  if (targets.length === 0) {
    console.log('ℹ️  No scrapable products found in catalog.');
    process.exit(0);
  }

  fs.mkdirSync(UPDATES_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    locale: 'es-MX',
    timezoneId: 'America/Mexico_City',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
  });

  const results = [];
  const failures = [];

  for (const target of targets) {
    const tag = `[${target.storeId}/${target.productId}/${target.side}]`;
    const sourceType = VEGAN_STORE_TYPES.includes(target.storeType) ? '🌱' : '🏪';
    console.log(`🔍 ${sourceType} ${tag} ${target.brand} ${target.productName}`);
    console.log(`   Search: "${target.searchQuery}" | Category: ${target.category}`);

    const result = await scrapeTarget(context, target);

    if (result) {
      console.log(`   ✅ $${result.price} (via ${result.source})\n`);
      results.push({
        storeId: target.storeId,
        productId: target.productId,
        side: target.side,
        price: result.price,
        source: result.source,
        scrapedAt: new Date().toISOString(),
      });
    } else {
      console.log(`   ❌ All sources failed\n`);
      failures.push({
        storeId: target.storeId,
        productId: target.productId,
        side: target.side,
        label: `${target.brand} ${target.productName}`,
        searchQuery: target.searchQuery,
        category: target.category,
        storeType: target.storeType,
      });
    }

    await randomDelay(1500, 3500);
  }

  await browser.close();

  // ── Report ────────────────────────────────────────────────────────────────
  const report = {
    date: new Date().toISOString(),
    totalTargets: targets.length,
    successes: results.length,
    failures: failures.length,
    successRate: `${((results.length / targets.length) * 100).toFixed(1)}%`,
    failureDetails: failures,
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`\n📊 Report: ${report.successes}/${report.totalTargets} (${report.successRate})`);

  if (results.length > 0) {
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2));
    console.log(`💾 Saved ${results.length} price updates to ${OUTPUT_PATH}`);
  }

  if (failures.length > 0) {
    console.log(`\n⚠️  ${failures.length} targets failed:`);
    for (const f of failures) console.log(`   - ${f.label}: "${f.searchQuery}" [${f.storeType}/${f.category}]`);
  }

  if (results.length === 0) {
    console.error('\n🛑 Zero prices scraped. Exiting with error.');
    process.exit(1);
  }

  console.log('\n✨ Scraping complete.');
}

run().catch((err) => {
  console.error('❌ Scraper crashed:', err);
  process.exit(1);
});
