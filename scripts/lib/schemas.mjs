
import { z } from 'zod';

/**
 * NutriChilango Strict Data Schemas
 * Enforces consistency and congruency across all data types.
 * All prices are in Mexican Pesos (MXN).
 */

export const PriceSchema = z.object({
  price: z.number().positive().min(1).max(5000), // MXN range
  unit: z.string().min(1),
  lastUpdated: z.string().optional(),
});

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  category: z.string(),
  traditional: PriceSchema,
  plantBased: PriceSchema,
  nutrition: z.object({
    calories: z.number().nonnegative(),
    protein: z.number().nonnegative(),
    carbs: z.number().nonnegative(),
    fat: z.number().nonnegative(),
    sugar: z.number().nonnegative(),
    fiber: z.number().optional(),
  }),
  benefits: z.array(z.string()).optional(),
});

export const StoreSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  type: z.enum(['conventional', 'naturist', 'organic', 'vegetarian', 'vegan', 'market', 'wholesale']),
  products: z.array(ProductSchema),
});

export const RecipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  ingredients: z.array(z.object({
    productId: z.string(),
    amount: z.number().positive(),
    unit: z.string(),
  })),
  steps: z.array(z.string()),
});

/**
 * Business Logic Utilities
 */
export function calculatePriceDiff(traditional, plantBased) {
  if (traditional <= 0) return 0;
  return Math.round(((plantBased - traditional) / traditional) * 1000) / 10;
}

/**
 * Statistical Outlier Detection Logic
 */
export function isOutlier(price, historicalPrices, threshold = 3) {
  if (historicalPrices.length < 5) return false;
  
  const n = historicalPrices.length;
  const mean = historicalPrices.reduce((a, b) => a + b) / n;
  const std = Math.sqrt(historicalPrices.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
  
  if (std === 0) return false;
  const zScore = Math.abs(price - mean) / std;
  
  return zScore > threshold;
}

/**
 * Schema for price-only updates produced by the scraper.
 * Does NOT require the full store/product structure.
 */
export const PriceUpdateSchema = z.object({
  storeId: z.string(),
  productId: z.string(),
  side: z.enum(['traditional', 'plantBased']),
  price: z.number().positive().min(1).max(5000), // MXN range guard
  source: z.string().optional(),
  scrapedAt: z.string(),
});

/**
 * Category-aware price validation
 */
const CATEGORY_PRICE_RANGES = {
  dairy:             { min: 20, max: 400 },
  proteins:          { min: 30, max: 600 },
  eggs:              { min: 25, max: 500 },
  pantry:            { min: 15, max: 600 },
  snacks:            { min: 15, max: 300 },
  'prepared-dishes': { min: 20, max: 300 },
};

export function validatePriceForCategory(price, category) {
  const range = CATEGORY_PRICE_RANGES[category];
  if (!range) return true; // unknown category, allow
  return price >= range.min && price <= range.max;
}
