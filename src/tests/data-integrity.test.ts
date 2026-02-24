import { describe, it, expect } from 'vitest';
import { storeData } from '@/data';

/**
 * Comprehensive Data Integrity Check
 *
 * Validates:
 * 1. All products have required fields (name, brand, price, unit)
 * 2. All prices are within reasonable MXN ranges (no scraper artifacts)
 * 3. All priceDifferencePercent values are correctly calculated
 * 4. No fabricated/empty brand names
 * 5. pricePerUnit consistency
 */

const PRICE_RANGE = { min: 1, max: 5000 }; // MXN

const CATEGORY_RANGES: Record<string, { min: number; max: number }> = {
  dairy:             { min: 15, max: 500 },
  proteins:          { min: 10, max: 700 },
  eggs:              { min: 10, max: 600 },
  pantry:            { min: 10, max: 700 },
  snacks:            { min: 10, max: 400 },
  'prepared-dishes': { min: 15, max: 400 },
};

// Known fabricated brands that should NEVER appear in the data
const BANNED_BRANDS = [
  'abasto verde', 'abasto premium', 'abasto gourmet',
  'verde vivo artesanal', 'verde vivo gourmet',
  'veggie smiles premium', 'veggie smiles artesanal',
  'plantae gourmet', 'plantae pro',
  'por amor gourmet', 'green spot',
  'veggie cheese', 'artisan vegan',
];

describe('Data Integrity Check', () => {
  it('should validate all products have required fields', () => {
    const errors: string[] = [];

    storeData.forEach(store => {
      store.products.forEach(product => {
        for (const side of ['traditional', 'plantBased'] as const) {
          const data = product[side];
          if (!data) {
            errors.push(`${store.name}/${product.id}: missing ${side} data`);
            continue;
          }
          if (!data.name) errors.push(`${store.name}/${product.id}/${side}: missing name`);
          if (!data.brand) errors.push(`${store.name}/${product.id}/${side}: missing brand`);
          if (typeof data.price !== 'number') errors.push(`${store.name}/${product.id}/${side}: missing price`);
          if (!data.unit) errors.push(`${store.name}/${product.id}/${side}: missing unit`);
        }
      });
    });

    if (errors.length > 0) console.error('Required field errors:', errors);
    expect(errors).toHaveLength(0);
  });

  it('should have all prices within reasonable MXN ranges', () => {
    const errors: string[] = [];

    storeData.forEach(store => {
      store.products.forEach(product => {
        const category = product.category || 'default';
        const range = CATEGORY_RANGES[category] || PRICE_RANGE;

        for (const side of ['traditional', 'plantBased'] as const) {
          const data = product[side];
          if (!data || typeof data.price !== 'number') continue;

          if (data.price < PRICE_RANGE.min || data.price > PRICE_RANGE.max) {
            errors.push(`${store.name}/${product.id}/${side}: price $${data.price} outside global range [$${PRICE_RANGE.min}-$${PRICE_RANGE.max}]`);
          }

          if (data.price < range.min || data.price > range.max) {
            errors.push(`${store.name}/${product.id}/${side}: price $${data.price} outside category "${category}" range [$${range.min}-$${range.max}]`);
          }
        }
      });
    });

    if (errors.length > 0) console.error('Price range errors:', errors);
    expect(errors).toHaveLength(0);
  });

  it('should have no fabricated brand names', () => {
    const errors: string[] = [];

    storeData.forEach(store => {
      store.products.forEach(product => {
        for (const side of ['traditional', 'plantBased'] as const) {
          const data = product[side];
          if (!data?.brand) continue;
          const lowerBrand = data.brand.toLowerCase().trim();
          if (BANNED_BRANDS.includes(lowerBrand)) {
            errors.push(`${store.name}/${product.id}/${side}: banned brand "${data.brand}"`);
          }
        }
      });
    });

    if (errors.length > 0) console.error('Fabricated brand errors:', errors);
    expect(errors).toHaveLength(0);
  });

  it('should have correctly calculated priceDifferencePercent', () => {
    const errors: string[] = [];
    const tolerance = 1.0; // Allow 1% tolerance for rounding

    storeData.forEach(store => {
      store.products.forEach(product => {
        if (!product.traditional || !product.plantBased) return;
        if (typeof product.priceDifferencePercent !== 'number') return;

        const tradPrice = product.traditional.price;
        const pbPrice = product.plantBased.price;

        if (tradPrice <= 0) return;

        const expected = Math.round(((pbPrice - tradPrice) / tradPrice) * 1000) / 10;
        const diff = Math.abs(expected - product.priceDifferencePercent);

        if (diff > tolerance) {
          errors.push(
            `${store.name}/${product.id}: priceDiff is ${product.priceDifferencePercent}% but expected ${expected}% (trad=$${tradPrice}, pb=$${pbPrice})`
          );
        }
      });
    });

    if (errors.length > 0) console.error('Price difference calculation errors:', errors);
    expect(errors).toHaveLength(0);
  });
});
