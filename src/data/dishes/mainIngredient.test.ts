import { describe, expect, it } from 'vitest';
import { dishesData } from './index';
import { getMainIngredient, getMainIngredientOptions, mainIngredientLabels } from './mainIngredient';

describe('Clasificación editorial de ingredientes principales', () => {
  it('clasifica cada receta con un ingrediente presente en su lista', () => {
    for (const dish of dishesData) {
      const entry = getMainIngredient(dish);
      expect(entry, dish.veganVersion.name).toBeDefined();
      expect(dish.veganVersion.ingredients.some(ingredient => ingredient.name === entry?.ingredientName)).toBe(true);
    }
  });

  it('distingue protagonistas de ingredientes secundarios y no inventa opciones', () => {
    const lookup = (id: string) => getMainIngredient(dishesData.find(dish => dish.id === id)! )?.id;
    expect(lookup('machaca-soya')).toBe('soya-texturizada');
    expect(lookup('ensalada-cesar')).toBe('tofu');
    expect(lookup('espagueti-bolonesa')).toBe('lentejas');
    expect(lookup('hamburguesa')).toBe('frijoles');
    expect(lookup('cochinita-pibil')).toBe('yaca');
    expect(lookup('milanesa-pollo')).toBe('berenjena');
    const options = getMainIngredientOptions(dishesData);
    expect(options).toHaveLength(Object.keys(mainIngredientLabels).length);
    expect(options).not.toContain('tempeh');
  });
});
