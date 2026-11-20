import fs from 'node:fs';
import path from 'node:path';
import { auditPriceUpdate } from './lib/schema-check.mjs';
import { admittedPriceUpdates, validatedBindings } from './lib/price-provenance.mjs';
import { toUnitPrice } from '../src/data/price-normalization.mjs';

const STORES_DIR = path.join(process.cwd(), 'src/data/stores');
const METADATA_FILE = path.join(process.cwd(), 'src/data/metadata.ts');
const SCRAPED_FILE = path.join(process.cwd(), 'data/updates/scraped-prices.json');
const ALLOWLIST = path.join(process.cwd(), 'data/price-source-allowlist.json');

function ingestPriceUpdates() {
  if (!fs.existsSync(SCRAPED_FILE)) return null;
  const raw = JSON.parse(fs.readFileSync(SCRAPED_FILE, 'utf8'));
  return Array.isArray(raw) ? raw : [raw];
}

function loadCatalog() {
  const index = new Map();
  for (const file of fs.readdirSync(STORES_DIR).filter((name) => name.endsWith('.json'))) {
    const filePath = path.join(STORES_DIR, file);
    const original = fs.readFileSync(filePath, 'utf8');
    const stores = JSON.parse(original);
    const entry = { filePath, original, stores };
    for (const store of stores) {
      if (index.has(store.id)) throw new Error(`Tienda duplicada en catálogo: ${store.id}`);
      index.set(store.id, { store, entry });
    }
  }
  return ({ storeId, productId, side }) => {
    const located = index.get(storeId);
    const products = located?.store.products?.filter((product) => product.id === productId);
    if (!products || products.length !== 1 || !products[0][side]) return undefined;
    return { entry: located.entry, product: products[0], variant: products[0][side] };
  };
}

function updateMetadata(observedAt) {
  if (!fs.existsSync(METADATA_FILE)) return;
  let content = fs.readFileSync(METADATA_FILE, 'utf8');
  const previous = content.match(/lastUpdated: "([^"]+)"/)?.[1];
  if (!previous || Date.parse(previous) >= Date.parse(observedAt)) return;
  content = content.replace(/lastUpdated: "[^"]+"/, `lastUpdated: "${observedAt}"`);
  fs.writeFileSync(METADATA_FILE, content);
  console.log('✅ Fecha de observación publicada actualizada.');
}

function mergePriceIntoStores(updates, locateTarget) {
  const changedFiles = new Set();
  for (const update of updates) {
    const { entry, product, variant } = locateTarget(update);
    const previous = variant.price;
    variant.price = update.price;
    variant.pricePerUnit = toUnitPrice(update.price, variant.unit);
    variant.lastUpdated = update.scrapedAt;
    if (product.traditional?.price > 0 && product.plantBased) {
      const traditional = product.traditional.price;
      const plantBased = product.plantBased.price;
      product.priceDifferencePercent = Math.round(((plantBased - traditional) / traditional) * 1000) / 10;
    }
    changedFiles.add(entry);
    console.log(`   ✅ ${update.storeId}/${update.productId} [${update.side}]: $${previous} → $${update.price}`);
  }
  for (const { filePath, original, stores } of changedFiles) {
    const output = JSON.stringify(stores, null, 2) + (original.endsWith('\n') ? '\n' : '');
    fs.writeFileSync(filePath, original.includes('\r\n') ? output.replaceAll('\n', '\r\n') : output);
  }
}

function runPipeline(args) {
  const checkAllowlist = args.length === 1 && args[0] === '--check-allowlist';
  const checkOnly = args.length === 0 || (args.length === 1 && args[0] === '--check-only');
  const apply = args.length === 1 && args[0] === '--apply';
  if (!checkAllowlist && !checkOnly && !apply) throw new Error('Argumentos no reconocidos');
  const priceUpdates = checkAllowlist ? [] : ingestPriceUpdates();

  const locateTarget = loadCatalog();
  const findVariant = (target) => locateTarget(target)?.variant;
  const bindings = validatedBindings(JSON.parse(fs.readFileSync(ALLOWLIST, 'utf8')), findVariant);
  if (checkAllowlist) {
    console.log(`Registro válido: ${bindings.size} vinculaciones. No se leyeron ni aplicaron observaciones.`);
    return;
  }

  if (priceUpdates === null) {
    console.log('Sin archivo de observaciones. No se validaron ni aplicaron precios.');
    return;
  }

  // Primero comprobar TODA la tanda. Las discrepancias no dejan una actualización parcial.
  const parsed = priceUpdates.map((item, index) => {
    const audit = auditPriceUpdate(item);
    if (!audit.valid) throw new Error(`Observación ${index + 1} inválida: ${audit.errors.join('; ')}`);
    return audit.data;
  });
  const admitted = admittedPriceUpdates(parsed, bindings, findVariant);
  if (checkOnly) {
    console.log(`Tanda válida: ${parsed.length} observaciones leídas, ${admitted.length} aplicables. No se modificaron archivos.`);
    return;
  }
  if (admitted.length === 0) {
    console.log('ℹ️  Sin observaciones posteriores. Se conservan los precios y la fecha publicados.');
    return;
  }

  mergePriceIntoStores(admitted, locateTarget);
  updateMetadata(admitted.map(({ scrapedAt }) => scrapedAt).sort().at(-1));
  // Conservar el archivo de observaciones fechado para revisión y repetición idempotente.
  console.log(`✨ Se aplicaron ${admitted.length} observaciones de precios.`);
}

try {
  runPipeline(process.argv.slice(2));
} catch (error) {
  console.error('❌ Actualización de precios detenida:', error.message);
  process.exitCode = 1;
}
