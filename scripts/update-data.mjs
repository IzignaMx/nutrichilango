
import fs from 'fs';
import path from 'path';
import { auditPriceUpdate } from './lib/schema-check.mjs';

/**
 * Advanced Modular Data Pipeline - Two-Phase Commit
 *
 * DESIGN PRINCIPLES:
 * 1. ACID-like Consistency: Audit before Apply.
 * 2. High Congruency: Shared Zod-based validation.
 * 3. Surgical Price Merge: only price fields are updated; all other
 *    store/product metadata is preserved.
 * 4. Human Transparency: Generating human-readable reports.
 */

const STORES_DIR = path.join(process.cwd(), 'src/data/stores');
const UPDATES_DIR = path.join(process.cwd(), 'data/updates');
const METADATA_FILE = path.join(process.cwd(), 'src/data/metadata.ts');
const SCRAPED_FILE = path.join(UPDATES_DIR, 'scraped-prices.json');

// ---------------------------------------------------------------------------
// Ingest price updates produced by scrape-data.mjs
// ---------------------------------------------------------------------------
function ingestPriceUpdates() {
  if (!fs.existsSync(SCRAPED_FILE)) return [];
  const raw = JSON.parse(fs.readFileSync(SCRAPED_FILE, 'utf-8'));
  return Array.isArray(raw) ? raw : [raw];
}

// ---------------------------------------------------------------------------
// Update the metadata timestamp
// ---------------------------------------------------------------------------
function updateMetadata() {
  if (!fs.existsSync(METADATA_FILE)) return;
  let content = fs.readFileSync(METADATA_FILE, 'utf-8');
  const now = new Date().toISOString();
  content = content.replace(/lastUpdated: ".*"/, `lastUpdated: "${now}"`);
  fs.writeFileSync(METADATA_FILE, content);
  console.log('✅ Metadata timestamp updated.');
}

// ---------------------------------------------------------------------------
// Surgical price merge
// ---------------------------------------------------------------------------
function mergePriceIntoStores(updates) {
  const applied = [];
  const notFound = [];

  // Load all stores into memory indexed by storeId
  const storeFiles = fs.readdirSync(STORES_DIR).filter(f => f.endsWith('.json'));
  const fileMap = {}; // storeId -> { filePath, stores[] }

  for (const file of storeFiles) {
    const filePath = path.join(STORES_DIR, file);
    const stores = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    for (const store of stores) {
      fileMap[store.id] = { filePath, stores, file };
    }
  }

  for (const upd of updates) {
    const entry = fileMap[upd.storeId];
    if (!entry) {
      notFound.push(upd);
      continue;
    }

    const store = entry.stores.find(s => s.id === upd.storeId);
    if (!store) { notFound.push(upd); continue; }

    const product = store.products?.find(p => p.id === upd.productId);
    if (!product) { notFound.push(upd); continue; }

    const side = product[upd.side]; // 'traditional' or 'plantBased'
    if (!side) { notFound.push(upd); continue; }

    const oldPrice = side.price;
    side.price = upd.price;
    side.lastUpdated = upd.scrapedAt;

    // Recalculate priceDifferencePercent if both sides are present
    if (product.traditional && product.plantBased) {
      const tradPrice = product.traditional.price;
      const pbPrice = product.plantBased.price;
      if (tradPrice > 0) {
        product.priceDifferencePercent = Math.round(((pbPrice - tradPrice) / tradPrice) * 1000) / 10;
      }
    }

    applied.push({ ...upd, oldPrice });
  }

  // Write back modified files (deduplicate by filePath)
  const writtenPaths = new Set();
  for (const entry of Object.values(fileMap)) {
    if (writtenPaths.has(entry.filePath)) continue;
    writtenPaths.add(entry.filePath);
    fs.writeFileSync(entry.filePath, JSON.stringify(entry.stores, null, 2));
  }

  return { applied, notFound };
}

// ---------------------------------------------------------------------------
// Main pipeline
// ---------------------------------------------------------------------------
async function runPipeline() {
  console.log('🏗️  Starting Advanced 2-Phase Data Pipeline...');

  // Phase 1: Ingest & Audit
  console.log('\n🔍 Phase 1: Auditing Scraped Price Updates...');
  const priceUpdates = ingestPriceUpdates();

  if (priceUpdates.length === 0) {
    console.log('ℹ️  No scraped price data found. Updating metadata timestamp only.');
    updateMetadata();
    return;
  }

  console.log(`   Found ${priceUpdates.length} price updates.`);

  const auditResults = { passed: 0, failed: 0, errors: [] };

  const validUpdates = [];
  for (const item of priceUpdates) {
    const audit = auditPriceUpdate(item);
    if (audit.valid) {
      auditResults.passed++;
      validUpdates.push(item);
    } else {
      auditResults.failed++;
      auditResults.errors.push(...audit.errors);
      console.error(`   ❌ Invalid update [${item.storeId}/${item.productId}]:`, audit.errors);
    }
  }

  console.log(`   Audit: ${auditResults.passed} passed, ${auditResults.failed} failed.`);

  if (validUpdates.length === 0) {
    console.error('🛑 Pipeline Aborted. No valid price updates survived audit.');
    process.exit(1);
  }

  // Phase 2: Commit (Surgical Merge)
  console.log('\n🚀 Phase 2: Committing Price Changes...');
  const { applied, notFound } = mergePriceIntoStores(validUpdates);

  for (const a of applied) {
    console.log(`   ✅ ${a.storeId}/${a.productId} [${a.side}]: $${a.oldPrice} → $${a.price}`);
  }
  for (const nf of notFound) {
    console.log(`   ⚠️  Not found: ${nf.storeId}/${nf.productId} [${nf.side}]`);
  }

  updateMetadata();

  // Clean up scraped file after successful merge
  if (fs.existsSync(SCRAPED_FILE)) fs.unlinkSync(SCRAPED_FILE);

  console.log(`\n✨ Pipeline finished. Applied ${applied.length} price updates, ${notFound.length} not found.`);
}

runPipeline().catch(err => {
  console.error('❌ Pipeline failed:', err);
  process.exit(1);
});
