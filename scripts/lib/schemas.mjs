
import { z } from 'zod';

/**
 * NutriChilango Strict Data Schemas
 * Enforces consistency and congruency across all data types.
 */

export const PriceSchema = z.object({
  price: z.number().positive(),
  unit: z.string(),
  lastUpdated: z.string().optional(),
});

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
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
  type: z.enum(['conventional', 'naturist', 'organic', 'vegetarian', 'vegan', 'market']),
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
  return Math.round(((plantBased - traditional) / traditional) * 100);
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
