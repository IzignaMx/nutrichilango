
/**
 * Shared Data Utilities for NutriChilango
 * Used by both the frontend and automated scripts for consistent calculations.
 */

export interface PriceMetrics {
  traditional: number;
  plantBased: number;
  difference: number;
}

/**
 * Calculates the percentage difference between traditional and plant-based prices.
 * Positive value means plant-based is more expensive.
 */
export function calculatePriceDiff(traditional: number, plantBased: number): number {
  if (traditional <= 0) return 0;
  return Math.round(((plantBased - traditional) / traditional) * 100);
}

/**
 * Calculates a 'Health Score' based on nutritional density.
 * (Conceptual implementation for high-consistency logic)
 */
export function calculateHealthScore(calories: number, protein: number, sugar: number): number {
  if (calories === 0) return 0;
  // Simple ratio: high protein, low sugar per 100kcal
  const score = (protein * 2) - (sugar / 2);
  return Math.max(0, Math.min(100, Math.round(score)));
}

/**
 * Formats ISO date to Spanish locale for consistency.
 */
export function formatUpdateDate(isoDate: string): string {
  try {
    return new Date(isoDate).toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  } catch (e) {
    return 'Fecha no disponible';
  }
}
