import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const updater = fileURLToPath(new URL('../update-data.mjs', import.meta.url));
const originalDate = '2026-10-19T02:59:02.760Z';
const stores = [{
  id: 'test-shop',
  products: [{
    id: 'p',
    traditional: { price: 109, unit: '500g', pricePerUnit: 218 },
    plantBased: { price: 20, unit: 'paquete', pricePerUnit: null },
    priceDifferencePercent: -81.7,
  }],
}];
const validObservation = {
  storeId: 'test-shop',
  productId: 'p',
  side: 'traditional',
  price: 110,
  observedUnit: '500g',
  scrapedAt: '2026-10-20T10:11:12.123Z',
};

function withFixture(observations, verify) {
  const cwd = mkdtempSync(join(tmpdir(), 'nutrichilango-price-'));
  try {
    const store = join(cwd, 'src/data/stores/catalog.json');
    const metadata = join(cwd, 'src/data/metadata.ts');
    mkdirSync(join(cwd, 'src/data/stores'), { recursive: true });
    mkdirSync(join(cwd, 'data/updates'), { recursive: true });
    writeFileSync(store, JSON.stringify(stores, null, 2));
    writeFileSync(metadata, `export const siteMetadata = { lastUpdated: "${originalDate}" };`);
    if (observations !== undefined) {
      writeFileSync(join(cwd, 'data/updates/scraped-prices.json'), JSON.stringify(observations));
    }
    const result = spawnSync(process.execPath, [updater], { cwd, encoding: 'utf8' });
    verify(result, JSON.parse(readFileSync(store, 'utf8')), readFileSync(metadata, 'utf8'));
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
}

test('no cambia precios ni fecha si falta una observación válida y aplicable', () => {
  for (const observations of [
    undefined, [],
    [{ ...validObservation, observedUnit: undefined }],
    [{ ...validObservation, observedUnit: '250g' }],
    [{ ...validObservation, storeId: 'ausente' }],
    [{ ...validObservation, scrapedAt: 'invalid' }],
    [{ ...validObservation, scrapedAt: '2026-10-32T10:11:12.123Z' }],
  ]) {
    withFixture(observations, (result, after, metadata) => {
      assert.ok([0, 1].includes(result.status), result.stderr);
      assert.deepEqual(after, stores);
      assert.ok(metadata.includes(originalDate));
    });
  }
});

test('recalcula equivalencia y conserva la fecha de observación, no la hora de ejecución', () => {
  withFixture([
    validObservation,
    { ...validObservation, price: 90, scrapedAt: '2026-10-20T10:11:11.123Z' },
    { ...validObservation, side: 'plantBased', observedUnit: 'paquete', price: 25, scrapedAt: '2026-10-21T10:11:12.123Z' },
  ], (result, after, metadata) => {
    assert.equal(result.status, 0, result.stderr);
    const product = after[0].products[0];
    assert.deepEqual(product.traditional, { price: 110, pricePerUnit: 220, unit: '500g', lastUpdated: validObservation.scrapedAt });
    assert.equal(product.plantBased.price, 25);
    assert.equal(product.plantBased.pricePerUnit, null);
    assert.equal(product.priceDifferencePercent, -77.3);
    assert.ok(metadata.includes('2026-10-21T10:11:12.123Z'));
  });
});
