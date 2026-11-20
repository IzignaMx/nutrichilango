import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { compareGroupedUnitPrice, compareSameBasis, parsePackage, toUnitPrice } from '../../src/data/price-normalization.mjs';

test('normaliza pesos y volúmenes sin mezclar denominadores', () => {
  assert.equal(toUnitPrice(109, '500g'), 218);
  assert.equal(toUnitPrice(20, '1L'), 20);
  assert.equal(toUnitPrice(89, '1L'), 89);
  assert.equal(toUnitPrice(55, '946ml'), 58.14);
  assert.equal(toUnitPrice(42, 'kg'), 42);
  assert.equal(toUnitPrice(42, 'L'), 42);
  assert.equal(toUnitPrice(169, '2 piezas (227g)'), 744.49);
  assert.equal(toUnitPrice(22, '2 piezas'), 11);
  assert.deepEqual(parsePackage('4 tacos'), { size: 4, basis: 'taco' });
  assert.deepEqual(parsePackage('12 equivalentes'), { size: 12, basis: 'equivalente' });
});

test('omite equivalencias ambiguas y no las ordena como si fueran cero', () => {
  for (const label of ['paquete', '500–600g', '1 pieza aprox.', '0g', 'ml', '2 piezas (kg)', '2 piezas (500g', '500g)']) {
    assert.equal(toUnitPrice(10, label), null, label);
  }
  assert.equal(toUnitPrice(Infinity, '500g'), null);
  const weight = { unit: '500g', pricePerUnit: 218 };
  const volume = { unit: '1L', pricePerUnit: 20 };
  const unknown = { unit: 'paquete', pricePerUnit: null };
  assert.equal(compareSameBasis(weight, volume), null);
  assert.equal(compareSameBasis(weight, unknown), null);
  assert.equal(compareSameBasis(weight, { unit: '1kg', pricePerUnit: 200 }), 18);
  assert.equal(compareGroupedUnitPrice(unknown, volume), 1);
});

test('todas las variantes de catálogo concuerdan con su presentación publicada', () => {
  const dir = new URL('../../src/data/stores/', import.meta.url);
  let checked = 0;
  for (const file of readdirSync(dir).filter((path) => path.endsWith('.json'))) {
    for (const store of JSON.parse(readFileSync(new URL(file, dir), 'utf8'))) {
      for (const product of store.products) {
        for (const [side, variant] of Object.entries({ traditional: product.traditional, plantBased: product.plantBased })) {
          assert.equal(variant.pricePerUnit, toUnitPrice(variant.price, variant.unit), [store.id, product.id, side].join('/'));
          checked++;
        }
      }
    }
  }
  assert.ok(checked > 0);
});
