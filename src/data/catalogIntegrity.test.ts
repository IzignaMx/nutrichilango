import { describe, expect, it } from 'vitest';
import { storeData } from './index';
import { dishesData } from './dishes';
import { PANTRY_PRODUCTS } from './pantry/products';
import { siteMetadata } from './metadata';
import { auditCatalog } from './catalogIntegrity';
import legacyNotices from './catalogIntegrity.legacy.json';

const fixture = () => structuredClone({
  stores: storeData, dishes: dishesData, pantry: PANTRY_PRODUCTS,
  lastUpdated: siteMetadata.lastUpdated,
});
const run = (input = fixture()) => auditCatalog(input, new Date());

describe('NUT-001: contrato de integridad del catálogo', () => {
  it('valida datos versionados y conserva explícitamente limitaciones históricas', () => {
    const result = run();
    expect(result.errors).toEqual([]);
    expect(result.counts.stores).toBeGreaterThan(0);
    expect(result.counts.dishes).toBeGreaterThan(0);
    expect(result.counts.pantry).toBeGreaterThan(0);
    // Existing limitations are tracked individually. Resolving an exception
    // is allowed; a newly introduced exception must be reviewed explicitly.
    expect(result.notices.filter(notice => !legacyNotices.includes(notice))).toEqual([]);
    expect(new Set(legacyNotices).size).toBe(legacyNotices.length);
  });

  it('rechaza identidad repetida, fechas futuras, precio normalizado incoherente y unidades sin base', () => {
    const input = fixture();
    input.stores.push(input.stores[0]);
    const p = input.stores[0].products[0];
    p.traditional.lastUpdated = '2099-01-01T00:00:00.000Z';
    p.traditional.pricePerUnit = 1;
    p.plantBased.unit = 'paquete desconocido';
    const result = run(input);
    expect(result.errors.some(e => e.startsWith('ID duplicado:'))).toBe(true);
    expect(result.errors.some(e => e.startsWith('Fecha de observación inválida:'))).toBe(true);
    expect(result.errors.some(e => e.startsWith('Precio normalizado inconsistente:'))).toBe(true);
    expect(result.errors.some(e => e.startsWith('Unidad sin base normalizable:'))).toBe(true);
  });

  it('rechaza porciones, cantidades y precios inválidos sin cambiar entrada', () => {
    const input = fixture();
    input.dishes[0].veganVersion.servings = 0;
    input.pantry[0].quantity = '0';
    input.stores[0].products[0].traditional.price = -1;
    const before = structuredClone(input);
    const result = run(input);
    expect(result.errors.some(e => e.includes('servings'))).toBe(true);
    expect(result.errors.some(e => e.includes('quantity'))).toBe(true);
    expect(result.errors.some(e => e.includes('price'))).toBe(true);
    expect(input).toEqual(before);
  });

  it('detecta una nueva discrepancia aunque se resuelva otra histórica', () => {
    const input = fixture();
    const known = input.dishes.find(d => d.id === 'tamales')!;
    const next = input.dishes.find(d => d.id !== 'tamales' &&
      !legacyNotices.some(n => n.startsWith(`Subtotal diferente: ${d.category}/${d.id} (`)))!;
    known.veganVersion.estimatedPrice = known.veganVersion.ingredients.reduce((sum, item) => sum + item.totalCost, 0);
    known.priceDifferencePercent = (known.veganVersion.estimatedPrice / known.veganVersion.servings / (known.traditional.estimatedPrice / known.traditional.servings) - 1) * 100;
    next.veganVersion.ingredients[0].totalCost += 1;
    const result = run(input);
    expect(result.notices.some(n => n.startsWith('Subtotal diferente: mexican/tamales'))).toBe(false);
    expect(result.notices.filter(n => !legacyNotices.includes(n)).some(n => n.startsWith(`Subtotal diferente: ${next.category}/${next.id}`))).toBe(true);
  });

  it('no acepta una fecha global nueva sin observación nueva', () => {
    const input = fixture();
    input.lastUpdated = '2026-11-01T00:00:00.000Z';
    expect(run(input).errors).toContain('Fecha global distinta de la última observación registrada');
  });
});
