/**
 * NutriChilango Autonomous Price Scraper v2
 *
 * Multi-source, resilient scraper with:
 * - Auto-discovery of all branded products from the store catalog
 * - Multiple retailer fallback (Soriana → Chedraui → HEB)
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
    selector: '.price',
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
];

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

          // Skip homemade/artisan products (brand === 'Casero' or local-only)
          const brand = sideData.brand || '';
          const name = sideData.name || '';

          // Only scrape products with known commercial brands or recognizable names
          if (isScrapable(brand, name)) {
            targets.push({
              storeId: store.id,
              productId: product.id,
              side,
              brand,
              productName: name,
              unit: sideData.unit || '',
              currentPrice: sideData.price,
              searchQuery: buildSearchQuery(brand, name, sideData.unit),
            });
          }
        }
      }
    }
  }

  return targets;
}

/**
 * Determines if a product can be scraped from online retailers.
 * Skip artisan/local/homemade products that only exist in physical stores.
 */
function isScrapable(brand, name) {
  const localBrands = [
    'casero', 'local', 'a granel', 'por amor', 'por amor gourmet',
    'green corner', 'mr. tofu', 'mr. tofu gourmet', 'abasto verde',
    'abasto premium', 'abasto gourmet', 'verde vivo', 'verde vivo artesanal',
    'verde vivo gourmet', 'veggie smiles', 'veggie smiles premium',
    'veggie smiles artesanal', 'plantae', 'plantae gourmet', 'plantae pro',
    'vegan label', 'veggie cheese', 'artisan vegan', 'verde vida',
    'green spot',
  ];
  const lowerBrand = brand.toLowerCase().trim();
  if (!lowerBrand || localBrands.includes(lowerBrand)) return false;
  return true;
}

/**
 * Builds a clean search query for online retailers.
 */
function buildSearchQuery(brand, name, unit) {
  // Combine brand + product name, remove redundant terms
  const cleaned = `${brand} ${name}`
    .replace(/\b(de|para|en|con|y|la|el|los|las|del)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned;
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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const randomDelay = (min, max) => delay(min + Math.floor(Math.random() * (max - min)));

// ---------------------------------------------------------------------------
// Scrape a single target with multi-source fallback and retry
// ---------------------------------------------------------------------------
async function scrapeTarget(context, target) {
  const MAX_RETRIES = 2;

  for (const source of RETAIL_SOURCES) {
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      const page = await context.newPage();
      const url = source.buildUrl(target.searchQuery);

      try {
        const resp = await page.goto(url, {
          waitUntil: 'domcontentloaded',
          timeout: 25_000,
        });

        if (resp && (resp.status() === 404 || resp.status() === 403)) {
          throw new Error(`HTTP ${resp.status()}`);
        }

        await randomDelay(2500, 4500);

        const price = await extractPriceFromPage(page, source.selector);

        if (price === null) {
          throw new Error('No price found');
        }

        // Sanity check: price should be in a reasonable range vs current
        if (target.currentPrice > 0) {
          const ratio = price / target.currentPrice;
          if (ratio > 5 || ratio < 0.1) {
            throw new Error(`Price $${price} is suspiciously different from current $${target.currentPrice} (ratio: ${ratio.toFixed(2)})`);
          }
        }

        return { price, source: source.name };
      } catch (err) {
        // On last retry of this source, move to next source
        if (attempt === MAX_RETRIES) {
          // Silent — try next source
        } else {
          await randomDelay(1000, 2000); // Brief pause before retry
        }
      } finally {
        await page.close();
      }
    }
  }

  return null; // All sources and retries exhausted
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function run() {
  const targets = discoverTargets();

  console.log('🤖 NutriChilango Autonomous Price Scraper v2');
  console.log(`   Discovered: ${targets.length} scrapable products`);
  console.log(`   Sources:    ${RETAIL_SOURCES.map(s => s.name).join(', ')}`);
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
    console.log(`🔍 ${tag} ${target.brand} ${target.productName}`);
    console.log(`   Search: "${target.searchQuery}"`);

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
    for (const f of failures) console.log(`   - ${f.label}: "${f.searchQuery}"`);
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
