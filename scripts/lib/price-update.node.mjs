import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const updater = fileURLToPath(new URL('../update-data.mjs', import.meta.url));
const originalDate = '2026-10-19T02:59:02.760Z';
const stores = [{
  id: 'vegan-label-1',
  products: [{
    id: 'imported-vegan-meat-1',
    traditional: { price: 109, unit: '2 piezas (227g)', pricePerUnit: 480.18, lastUpdated: originalDate },
    plantBased: { price: 20, unit: 'paquete', pricePerUnit: null },
    priceDifferencePercent: -81.7,
  }],
}];
const sameTarget = { storeId: stores[0].id, productId: stores[0].products[0].id };
const authorized = {
  ...sameTarget,
  side: 'traditional',
  observedUnit: '2 piezas (227g)',
  currency: 'MXN',
  source: {
    merchant: 'Comercio sintético A',
    channel: 'Tienda web sintética',
    productUrl: 'https://catalogo.example.test/productos/a',
    sku: 'fixture-a',
  },
};
const otherSide = {
  ...authorized,
  side: 'plantBased',
  observedUnit: 'paquete',
  source: { ...authorized.source, productUrl: 'https://catalogo.example.test/productos/b', sku: 'fixture-b' },
};
const registry = { version: 1, bindings: [authorized, otherSide] };
const validObservation = { ...authorized, price: 110, scrapedAt: '2026-10-20T10:11:12.123Z' };

function withFixture(observations, verify, { allowlist = registry, args = ['--apply'], repeat = false, catalog = stores } = {}) {
  const cwd = mkdtempSync(join(tmpdir(), 'nutrichilango-price-'));
  try {
    const store = join(cwd, 'src/data/stores/catalog.json');
    const metadata = join(cwd, 'src/data/metadata.ts');
    const payload = join(cwd, 'data/updates/scraped-prices.json');
    mkdirSync(join(cwd, 'src/data/stores'), { recursive: true });
    mkdirSync(join(cwd, 'data/updates'), { recursive: true });
    const storeBefore = JSON.stringify(catalog, null, 2);
    const metadataBefore = `export const siteMetadata = { lastUpdated: "${originalDate}" };`;
    writeFileSync(store, storeBefore);
    writeFileSync(metadata, metadataBefore);
    if (allowlist !== null) {
      writeFileSync(join(cwd, 'data/price-source-allowlist.json'), JSON.stringify(allowlist));
    }
    const payloadBefore = observations === undefined ? undefined : JSON.stringify(observations);
    if (payloadBefore !== undefined) writeFileSync(payload, payloadBefore);
    const result = spawnSync(process.execPath, [updater, ...args], { cwd, encoding: 'utf8' });
    const after = readFileSync(store, 'utf8');
    const metadataAfter = readFileSync(metadata, 'utf8');
    const rerun = repeat ? spawnSync(process.execPath, [updater, ...args], { cwd, encoding: 'utf8' }) : null;
    verify({
      result, after: JSON.parse(after), metadataAfter, payloadExists: existsSync(payload),
      payloadUnchanged: existsSync(payload) && readFileSync(payload, 'utf8') === payloadBefore,
      unchanged: after === storeBefore && metadataAfter === metadataBefore,
      rerun,
      rerunUnchanged: readFileSync(store, 'utf8') === after && readFileSync(metadata, 'utf8') === metadataAfter,
    });
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
}

function expectRejected(observations, allowlist = registry) {
  withFixture(observations, ({ result, unchanged, payloadExists }) => {
    assert.equal(result.status, 1, result.stderr || result.stdout);
    assert.equal(unchanged, true, 'Catálogo y metadatos quedan intactos, byte por byte');
    assert.equal(payloadExists, true, 'Se conserva la entrada rechazada para investigar');
  }, { allowlist });
}

test('rechaza Mr. Tofu para otra tienda aun con coincidencia exacta de presentación', () => {
  expectRejected([{ ...validObservation, source: 'Mr. Tofu' }]);
  expectRejected([{
    ...validObservation,
    source: {
      merchant: 'Mr. Tofu', channel: authorized.source.channel,
      productUrl: 'https://otro.example.test/productos/a', sku: authorized.source.sku,
    },
  }]);
});

test('rechaza toda la tanda antes de escribir si una procedencia o variante no coincide', () => {
  const wrongRows = [
    { ...validObservation, observedUnit: undefined },
    { ...validObservation, observedUnit: '250g' },
    { ...validObservation, currency: 'USD' },
    { ...validObservation, currency: undefined },
    { ...validObservation, source: undefined },
    { ...validObservation, source: { ...authorized.source, merchant: 'Otro comercio' } },
    { ...validObservation, source: { ...authorized.source, channel: 'Otra ubicación' } },
    { ...validObservation, source: { ...authorized.source, productUrl: authorized.source.productUrl + '-otro' } },
    { ...validObservation, source: { ...authorized.source, productUrl: authorized.source.productUrl + '?otro=true' } },
    { ...validObservation, source: { ...authorized.source, sku: 'otro' } },
    { ...validObservation, source: { ...authorized.source, sku: authorized.source.sku + ' ' } },
    { ...validObservation, storeId: 'ausente' },
    { ...validObservation, productId: 'ausente' },
    { ...validObservation, side: 'plantBased' },
    { ...validObservation, scrapedAt: 'invalid' },
    { ...validObservation, scrapedAt: '2026-10-32T10:11:12.123Z' },
  ];
  for (const wrong of wrongRows) {
    expectRejected([validObservation, wrong]);
  }
});

test('falla sin registro, con registro vacío o con vinculaciones duplicadas/inválidas', () => {
  for (const allowlist of [
    null, { version: 1, bindings: [] },
    { version: 1, bindings: [authorized, authorized] },
    { version: 1, bindings: [{ ...authorized, observedUnit: '250g' }] },
    { version: 1, bindings: [{ ...authorized, source: { ...authorized.source, productUrl: 'http://catalogo.example.test/productos/a' } }] },
  ]) {
    expectRejected([validObservation], allowlist);
  }
});

test('el modo de revisión valida el registro sin observar ni cambiar precios', () => {
  for (const [allowlist, status] of [[registry, 0], [null, 1], [{ version: 1, bindings: [authorized, authorized] }, 1]]) {
    withFixture(undefined, ({ result, unchanged }) => {
      assert.equal(result.status, status, result.stderr || result.stdout);
      assert.equal(unchanged, true);
    }, { allowlist, args: ['--check-allowlist'] });
  }
});

test('el registro no puede atribuir la misma oferta a dos tiendas', () => {
  const alternateStore = { ...stores[0], id: 'otra-tienda' };
  const allowlist = { version: 1, bindings: [authorized, { ...authorized, storeId: alternateStore.id }] };
  withFixture(undefined, ({ result, unchanged }) => {
    assert.equal(result.status, 1);
    assert.match(result.stderr, /misma oferta/);
    assert.equal(unchanged, true);
  }, { allowlist, args: ['--check-allowlist'], catalog: [...stores, alternateStore] });
});

test('dos importes para el mismo instante abortan sin importar el orden de entrada', () => {
  const conflicting = { ...validObservation, price: 999 };
  expectRejected([validObservation, conflicting]);
  expectRejected([conflicting, validObservation]);
  expectRejected([{ ...validObservation, scrapedAt: originalDate }]);
});

test('no declara válida una tanda si falta el archivo de observaciones', () => {
  withFixture(undefined, ({ result, unchanged, payloadExists }) => {
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Sin archivo de observaciones/);
    assert.doesNotMatch(result.stdout, /Tanda válida/);
    assert.equal(unchanged, true);
    assert.equal(payloadExists, false);
  }, { args: ['--check-only'] });
});

test('el modo de planificación conserva bytes y evidencia tanto al aceptar como al rechazar', () => {
  for (const [observations, status, count] of [
    [[validObservation], 0, 1],
    [[{ ...validObservation, price: 109, scrapedAt: originalDate }], 0, 0],
    [[{ ...validObservation, currency: 'USD' }], 1, null],
    [[validObservation, { ...validObservation, price: 999 }], 1, null],
  ]) {
    withFixture(observations, ({ result, unchanged, payloadExists }) => {
      assert.equal(result.status, status, result.stderr || result.stdout);
      assert.equal(unchanged, true);
      assert.equal(payloadExists, true);
      if (count !== null) assert.ok(result.stdout.includes(`${count} aplicables`));
    }, { args: ['--check-only'] });
  }
});

test('la invocación implícita solo valida aunque haya una observación apta', () => {
  withFixture([validObservation], ({ result, unchanged, payloadExists }) => {
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /1 aplicables/);
    assert.equal(unchanged, true);
    assert.equal(payloadExists, true);
  }, { args: [] });
});

test('no cambia precios ni fecha sin observaciones o con observaciones repetidas del mismo importe', () => {
  for (const observations of [undefined, []]) {
    withFixture(observations, ({ result, unchanged }) => {
      assert.equal(result.status, 0, result.stderr);
      assert.equal(unchanged, true);
    });
  }
  withFixture([validObservation, validObservation], ({ result, after, metadataAfter }) => {
    assert.equal(result.status, 0, result.stderr);
    assert.equal(after[0].products[0].traditional.price, 110);
    assert.ok(metadataAfter.includes(validObservation.scrapedAt));
  });
});

test('recalcula equivalencia y usa la observación más reciente, no el orden o la ejecución', () => {
  const old = { ...validObservation, price: 90, scrapedAt: '2026-10-20T10:11:11.123Z' };
  const newerOtherSide = { ...otherSide, price: 25, scrapedAt: '2026-10-21T10:11:12.123Z' };
  for (const rows of [[validObservation, old, newerOtherSide], [old, newerOtherSide, validObservation]]) {
    withFixture(rows, ({ result, after, metadataAfter, payloadUnchanged, rerun, rerunUnchanged }) => {
      assert.equal(result.status, 0, result.stderr);
      const product = after[0].products[0];
      assert.deepEqual(product.traditional, { price: 110, pricePerUnit: 484.58, unit: authorized.observedUnit, lastUpdated: validObservation.scrapedAt });
      assert.equal(product.plantBased.price, 25);
      assert.equal(product.plantBased.pricePerUnit, null);
      assert.equal(product.priceDifferencePercent, -77.3);
      assert.ok(metadataAfter.includes(newerOtherSide.scrapedAt));
      assert.equal(payloadUnchanged, true);
      assert.equal(rerun.status, 0, rerun.stderr);
      assert.match(rerun.stdout, /Sin observaciones posteriores/);
      assert.equal(rerunUnchanged, true);
    }, { repeat: true });
  }
});
