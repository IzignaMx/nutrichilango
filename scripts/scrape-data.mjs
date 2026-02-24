/**
 * Autonomous Price Scraper for NutriChilango
 *
 * Reads the existing store catalog, builds scraping targets for products
 * that have real online counterparts, extracts current prices, and writes
 * a price-only update file consumed by update-data.mjs.
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
// Scraping target map
// Each entry maps a (storeId, productId, side) in our catalog to a real URL.
// The `searchUrl` points to the retailer's search so we don't depend on
// exact product paths that go stale.
// ---------------------------------------------------------------------------
const SCRAPING_TARGETS = [
  // ── Soriana ──────────────────────────────────────────────────────────────
  {
    storeId: 'soriana-1',
    productId: 'beef-vs-tofu-1',
    side: 'traditional',
    label: 'Carne de Res Molida SuKarne 500g',
    searchUrl: 'https://www.soriana.com/buscar?q=carne+molida+sukarne',
    selector: '.price',
  },
  {
    storeId: 'soriana-1',
    productId: 'beef-vs-tofu-1',
    side: 'plantBased',
    label: 'NotCo Carne Plant-Based 500g',
    searchUrl: 'https://www.soriana.com/buscar?q=notco+carne+plant+based',
    selector: '.price',
  },
  {
    storeId: 'soriana-1',
    productId: 'milk-vs-soy-1',
    side: 'traditional',
    label: 'Leche Entera Lala 1L',
    searchUrl: 'https://www.soriana.com/buscar?q=leche+lala+entera+1+litro',
    selector: '.price',
  },
  {
    storeId: 'soriana-1',
    productId: 'milk-vs-soy-1',
    side: 'plantBased',
    label: 'Leche de Soya Silk 1L',
    searchUrl: 'https://www.soriana.com/buscar?q=leche+soya+silk',
    selector: '.price',
  },

  // ── Walmart ──────────────────────────────────────────────────────────────
  {
    storeId: 'walmart-1',
    productId: 'chicken-vs-tempeh-1',
    side: 'traditional',
    label: 'Pechuga de Pollo Tyson 500g',
    searchUrl: 'https://super.walmart.com.mx/search?q=pechuga+pollo+tyson',
    selector: '[data-testid="price"], .price-main, .product-price',
  },
  {
    storeId: 'walmart-1',
    productId: 'chicken-vs-tempeh-1',
    side: 'plantBased',
    label: 'Tempeh Natural',
    searchUrl: 'https://super.walmart.com.mx/search?q=tempeh',
    selector: '[data-testid="price"], .price-main, .product-price',
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const randomDelay = (min, max) => delay(min + Math.floor(Math.random() * (max - min)));

/**
 * Extracts the first reasonable MXN price from the body text.
 * This is the universal fallback that works regardless of DOM structure.
 */
function extractPriceFromPage(page, targetSelector) {
  return page.evaluate((sel) => {
    // 1) Try the specific selector first
    const el = document.querySelector(sel);
    let text = el ? (el.innerText || el.textContent || '') : '';

    // 2) Fallback: scan the whole body
    if (!text.trim()) text = document.body.innerText || '';

    // 3) Match MXN price patterns: $149.50, $2,190.00, $25.5
    const matches = text.match(/\$\s*([0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{1,2})?)/g);
    if (!matches) return null;

    for (const m of matches) {
      const num = parseFloat(m.replace('$', '').replace(/,/g, '').trim());
      if (!isNaN(num) && num > 1 && num < 15_000) return num;
    }
    return null;
  }, targetSelector);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function run() {
  console.log('🤖 NutriChilango Autonomous Price Scraper');
  console.log(`   Targets: ${SCRAPING_TARGETS.length}`);
  console.log(`   Date:    ${new Date().toISOString()}\n`);

  fs.mkdirSync(UPDATES_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    locale: 'es-MX',
    timezoneId: 'America/Mexico_City',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
  });

  const results = [];  // successful price updates
  const failures = []; // failed scrapes

  for (const target of SCRAPING_TARGETS) {
    const page = await context.newPage();
    const tag = `[${target.storeId}/${target.productId}/${target.side}]`;
    console.log(`🔍 ${tag} ${target.label}`);
    console.log(`   URL: ${target.searchUrl}`);

    try {
      const resp = await page.goto(target.searchUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 30_000,
      });

      if (resp && (resp.status() === 404 || resp.status() === 403)) {
        throw new Error(`HTTP ${resp.status()}`);
      }

      // Give the page time to render dynamic content
      await randomDelay(2000, 4000);

      const price = await extractPriceFromPage(page, target.selector);

      if (price === null) {
        throw new Error('No valid price pattern found on page');
      }

      console.log(`   ✅ $${price}\n`);
      results.push({
        storeId: target.storeId,
        productId: target.productId,
        side: target.side,
        price,
        scrapedAt: new Date().toISOString(),
      });
    } catch (err) {
      console.error(`   ❌ ${err.message}\n`);
      failures.push({
        storeId: target.storeId,
        productId: target.productId,
        side: target.side,
        label: target.label,
        error: err.message,
      });
    } finally {
      await page.close();
      await randomDelay(2000, 5000); // Human-like gap between pages
    }
  }

  await browser.close();

  // ── Write outputs ────────────────────────────────────────────────────────
  const report = {
    date: new Date().toISOString(),
    totalTargets: SCRAPING_TARGETS.length,
    successes: results.length,
    failures: failures.length,
    failureDetails: failures,
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`📊 Report: ${report.successes}/${report.totalTargets} prices scraped`);

  if (results.length > 0) {
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2));
    console.log(`💾 Saved ${results.length} price updates to ${OUTPUT_PATH}`);
  }

  if (failures.length > 0) {
    console.log(`⚠️  ${failures.length} targets failed:`);
    for (const f of failures) console.log(`   - ${f.label}: ${f.error}`);
  }

  // ── Exit code ────────────────────────────────────────────────────────────
  if (results.length === 0) {
    console.error('\n🛑 Zero prices scraped. Exiting with error.');
    process.exit(1);
  }
}

run().catch((err) => {
  console.error('❌ Scraper crashed:', err);
  process.exit(1);
});
