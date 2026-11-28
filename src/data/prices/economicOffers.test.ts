import { describe, expect, it } from 'vitest';
import { comparableUnitPrice, economicOffers, rankOffers } from './economicOffers';

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
});
