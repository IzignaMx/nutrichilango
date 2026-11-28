import { describe, expect, it } from 'vitest';
import { recipeCostEvidence, recipeIngredientMatches } from './recipeCostEvidence';

const recipe = {
  id: 'homemade-tofu-1',
  ingredients: recipeIngredientMatches.map(match => ({
    name: match.name, amount: match.amount, unit: match.unit, pricePerUnit: 0, totalCost: 0, source: '',
  })),
};
describe('Estimaciones de receta con fuentes', () => {
  it('separa costo consumido y compra de paquetes; descarta opción agotada', () => {
    const result = recipeCostEvidence(recipe)!;
    expect(result.complete).toBe(true);
    expect(result.subtotal).toBeCloseTo(16.63636, 4);
    expect(result.basketCost).toBeCloseTo(112.2);
    expect(result.rows[2].offer?.id).toBe('walmart-cj-vinegar-1l');
  });
  it('no infiere otra receta, ni transforma unidades ni cantidades alteradas', () => {
    expect(recipeCostEvidence({ ...recipe, id: 'other' })).toBeNull();
    const partial = recipeCostEvidence({ ...recipe, ingredients: [{ ...recipe.ingredients[0], unit: 'kg' }, ...recipe.ingredients.slice(1)] })!;
    expect(partial.complete).toBe(false);
    expect(partial.matched).toBe(3);
  });
});
