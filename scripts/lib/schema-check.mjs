
import { StoreSchema, RecipeSchema, calculatePriceDiff } from './schemas.mjs';

/**
 * Integrated validation engine for high consistency
 */

export function auditData(data) {
  const audit = {
    valid: true,
    errors: [],
    warnings: [],
    stats: {
      itemsChecked: 0,
      outliersDetected: 0
    }
  };

  try {
    // Schema Check (using Zod)
    const result = StoreSchema.safeParse(data);
    if (!result.success) {
      audit.valid = false;
      audit.errors.push(...result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`));
      return audit; // Stop here if schema is invalid
    }

    // Business Logic Checks (Congruency)
    data.products?.forEach(product => {
      audit.stats.itemsChecked++;
      
      // Verification of Price Stoichiometry
      const diff = calculatePriceDiff(product.traditional.price, product.plantBased.price);
      
      // Nutrition stoichiometric check: 4kcal/g protein, 4kcal/g carbs, 9kcal/g fat
      const expectedKcal = (product.nutrition.protein * 4) + (product.nutrition.carbs * 4) + (product.nutrition.fat * 9);
      if (Math.abs(expectedKcal - product.nutrition.calories) > 20) {
        audit.warnings.push(`Nutrition mismatch for ${product.id}: expected ~${Math.round(expectedKcal)}kcal, found ${product.nutrition.calories}kcal`);
      }
    });

  } catch (err) {
    audit.valid = false;
    audit.errors.push(`Critical audit failure: ${err.message}`);
  }

  return audit;
}
