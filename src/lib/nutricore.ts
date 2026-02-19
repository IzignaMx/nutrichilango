
import { NutritionInfo } from '@/data/types';
import { z } from 'zod';

/**
 * NUTRICORE ENGINE
 * Unified computation logic for scientific accuracy and fullstack congruency.
 */

// Daily Intake Reference Constants (Scientific Baseline)
export const IDR = {
  protein: 50,       // g
  carbs: 275,        // g
  fat: 78,           // g
  calories: 2000,    // kcal
  iron: 18,          // mg
  calcium: 1000,     // mg
  fiber: 28,         // g
  sugar: 50          // g (limit)
};

/**
 * Price Difference Calculation (Congruent with update-data.mjs)
 */
export function calculatePriceDiff(traditional: number, plantBased: number): number {
  if (traditional <= 0) return 0;
  return Math.round(((plantBased - traditional) / traditional) * 100);
}

/**
 * Scoring Configuration
 * Weights refined for plant-based nutritional priorities.
 */
export const ScoreConfig = {
  protein: 10,
  fiber: 5,
  sugar: -2,
  fat: -1,
  // Base score to start from (neutral)
  base: 50
};

/**
 * Health Score Logic (NutriChilango Algorithm v2)
 * Normalized scoring system favoring high protein/fiber and penalizing excess sugar/fat.
 * Ranges from 0 to 100.
 */
export function calculateHealthScore(nutrition: NutritionInfo): number {
  const { protein, sugar, fiber = 0, fat } = nutrition;
  
  // Calculate raw impact
  const positiveScore = (protein * ScoreConfig.protein) + (fiber * ScoreConfig.fiber);
  const negativeScore = (sugar * ScoreConfig.sugar) + (fat * ScoreConfig.fat);
  
  // Combine with base score
  const totalScore = ScoreConfig.base + positiveScore + negativeScore;
  
  // Clamp between 0 and 100
  return Math.max(0, Math.min(100, Math.round(totalScore)));
}

/**
 * Data Confidence Metric
 * a 0-1 scale indicating how complete the nutritional data is.
 */
export function calculateDataConfidence(nutrition: NutritionInfo | undefined): number {
  if (!nutrition) return 0;
  
  const fields = ['calories', 'protein', 'carbs', 'fat', 'sugar', 'fiber', 'iron', 'calcium'];
  let present = 0;
  
  fields.forEach(field => {
    if (nutrition[field as keyof NutritionInfo] !== undefined) present++;
  });
  
  return Math.round((present / fields.length) * 100) / 100;
}

/**
 * IDR Normalization for Charts
 */
export function getNormalizationFactor(nutrient: string, value: number): number {
  const idr_value = IDR[nutrient as keyof typeof IDR] || 100;
  return (value / idr_value) * 100;
}

/**
 * Zod Schema for UI-Side Protection
 */
export const ProductUIValidator = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  traditional: z.object({ price: z.number().positive() }),
  plantBased: z.object({ price: z.number().positive() }),
  nutrition: z.object({
    calories: z.number().nonnegative(),
    protein: z.number().nonnegative(),
    carbs: z.number().nonnegative(),
    fat: z.number().nonnegative(),
    sugar: z.number().nonnegative(),
    fiber: z.number().optional(),
  })
});
