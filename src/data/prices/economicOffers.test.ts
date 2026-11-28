import { describe, expect, it } from 'vitest';
import { comparableUnitPrice, economicOffers, economicGroup, rankOffers } from './economicOffers';

describe('Ofertas económicas observadas', () => {
  it('elige la menor inversión y el menor precio por litro por separado', () => {
    expect(rankOffers(economicOffers, 'milk-soy', 'plant', 'L', 'purchase')[0].id).toBe('walmart-gv-soy-1l');
    expect(rankOffers(economicOffers, 'milk-soy', 'plant', 'L', 'unit')[0].id).toBe('soyamigo-symken-1080');
    expect(rankOffers(economicOffers, 'milk-soy', 'animal', 'L', 'unit')[0].id).toBe('walmart-gv-milk-1l');
  });
  it('normaliza 946 ml y el rendimiento de una bolsa, no sus gramos', () => {
    expect(comparableUnitPrice(economicOffers[3])).toBeCloseTo(42.2833, 3);
    expect(comparableUnitPrice(economicOffers[5])).toBeCloseTo(24.865, 3);
    expect(comparableUnitPrice({ ...economicOffers[5], yieldSource: undefined })).toBeNull();
  });
  it('excluye agotados, sin datos, no equivalentes y fuera del presupuesto', () => {
    const cheapest = rankOffers(economicOffers, 'milk-soy', 'plant', 'L', 'unit', 50);
    expect(cheapest.map(x => x.id)).toEqual(['walmart-gv-soy-1l', 'walmart-ades-946', 'walmart-silk-946']);
    expect(rankOffers(economicOffers, 'milk-soy', 'plant', 'kg', 'unit')).toEqual([]);
    expect(rankOffers(economicOffers, 'milk-soy', 'plant', 'L', 'unit', 1)).toEqual([]);
    expect(comparableUnitPrice({ ...economicOffers[0], quantity: 0 })).toBeNull();
  });
  it('elige molida vegetal por kg y no mezcla ofertas de familias', () => {
    expect(rankOffers(economicOffers, 'ground-meat', 'plant', 'kg', 'unit')[0].id).toBe('veganlabel-veggie-express-molida');
    expect(rankOffers(economicOffers, 'ground-meat', 'animal', 'kg', 'unit')[0].id).toBe('walmart-marketside-beef-500');
    expect(rankOffers(economicOffers, 'nuggets', 'animal', 'kg', 'purchase')[0].id).toBe('walmart-bachoco-nuggets-500');
    expect(rankOffers(economicOffers, 'nuggets', 'animal', 'kg', 'unit')[0].id).toBe('walmart-pilgrims-nuggets-700');
    expect(rankOffers(economicOffers, 'nuggets', 'plant', 'kg', 'unit').map(x => x.id)).toEqual(['walmart-beyond-nuggets-250']);
  });
  it('no confunde carne comercial con sustituto casero ni cambia la familia por coincidencia parcial', () => {
    const product = { category: 'proteins', comparisonType: 'animal-vs-commercial', traditional: { name: 'Carne de Res Molida' }, plantBased: { name: 'Carne Plant-Based' } };
    expect(economicGroup(product)).toBe('ground-meat');
    expect(economicGroup({ ...product, comparisonType: 'animal-vs-homemade' })).toBeNull();
    expect(economicGroup({ ...product, plantBased: { name: 'Carne Plant-Based Casera' } })).toBeNull();
  });
  it('compara bebidas vegetales sin clasificar ninguna como animal', () => {
    const pair = { category: 'dairy', comparisonType: 'commercial-vs-commercial', traditional: { name: 'Leche de Almendra Sin Azúcar' }, plantBased: { name: 'Leche de Almendra Orgánica' } };
    expect(economicGroup(pair)).toBe('almond-milk');
    expect(economicGroup({ ...pair, comparisonType: 'animal-vs-commercial' })).toBeNull();
    expect(rankOffers(economicOffers, 'almond-milk', 'animal', 'L', 'unit')).toEqual([]);
    expect(rankOffers(economicOffers, 'almond-milk', 'plant-standard', 'L', 'unit')[0].id).toBe('walmart-gv-almond-1l');
    expect(rankOffers(economicOffers, 'almond-milk', 'plant-organic', 'L', 'unit')[0].id).toBe('walmart-gud-almond-organic-1l');
  });
  it('no confunde una tarifa por kilo con el desembolso por charola', () => {
    expect(rankOffers(economicOffers, 'chicken-tempeh', 'animal', 'kg', 'unit')[0].id).toBe('walmart-chicken-breast-kg');
    expect(rankOffers(economicOffers, 'chicken-tempeh', 'animal', 'kg', 'purchase')).toEqual([]);
    expect(rankOffers(economicOffers, 'chicken-tempeh', 'animal', 'kg', 'unit', 500)).toEqual([]);
    expect(rankOffers(economicOffers, 'chicken-tempeh', 'plant', 'kg', 'purchase')[0].id).toBe('greenparadise-tempeh-250');
    expect(rankOffers(economicOffers, 'chicken-tempeh', 'plant', 'kg', 'unit')[0].id).toBe('veganlabel-tempeh-500');
  });
});


