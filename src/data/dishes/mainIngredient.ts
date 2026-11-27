import type { DishComparison } from './types';

export const mainIngredientLabels = {
  'soya-texturizada': 'Soya texturizada',
  seitan: 'Seitán (gluten de trigo)',
  tofu: 'Tofu',
  lentejas: 'Lentejas',
  frijoles: 'Frijoles',
  setas: 'Setas',
  yaca: 'Yaca (jackfruit)',
  anacardos: 'Nuez de la India (anacardos)',
  aquafaba: 'Aquafaba (agua de garbanzo)',
  coco: 'Coco',
  quinoa: 'Quinoa',
  berenjena: 'Berenjena',
  coliflor: 'Coliflor',
  platano: 'Plátano',
} as const;

export type MainIngredient = keyof typeof mainIngredientLabels;

// Editorial classification, not a keyword search or nutritional ranking.
// Prefer the protagonist of the vegetable adaptation/filling, or the base
// that defines a sauce, dessert or drink. The exact ingredient name is evidence
// within the currently published recipe, not a claim of nutrient equivalence.
type Classification = { id: MainIngredient; ingredientName: string };
const mainIngredients: Record<string, Classification> = {
  'mexican/carnitas-tacos': { id: 'seitan', ingredientName: 'Gluten vital (seitán)' },
  'mexican/cochinita-pibil': { id: 'yaca', ingredientName: 'Jackfruit joven en agua' },
  'mexican/enchiladas': { id: 'soya-texturizada', ingredientName: 'Soya texturizada fina' },
  'mexican/pozole': { id: 'setas', ingredientName: 'Setas ostra frescas' },
  'popular/pizza': { id: 'anacardos', ingredientName: 'Queso vegano casero (cashews)' },
  'popular/hamburguesa': { id: 'frijoles', ingredientName: 'Frijoles bayos cocidos' },
  'mexican/tamales': { id: 'frijoles', ingredientName: 'Frijoles negros cocidos' },
  'mexican/mole-pollo': { id: 'seitan', ingredientName: 'Gluten vital para seitán' },
  'mexican/chiles-rellenos': { id: 'anacardos', ingredientName: 'Queso vegano casero (cashews)' },
  'mexican/barbacoa-tacos': { id: 'yaca', ingredientName: 'Jackfruit joven escurrido' },
  'mexican/picadillo-soya': { id: 'soya-texturizada', ingredientName: 'Soya texturizada gruesa' },
  'mexican/chiles-rellenos-soya': { id: 'soya-texturizada', ingredientName: 'Soya texturizada fina' },
  'mexican/tacos-pastor-soya': { id: 'soya-texturizada', ingredientName: 'Soya texturizada gruesa' },
  'mexican/sopes-soya': { id: 'soya-texturizada', ingredientName: 'Soya texturizada fina' },
  'mexican/milanesas-soya': { id: 'soya-texturizada', ingredientName: 'Soya texturizada gruesa' },
  'mexican/albondigas-soya': { id: 'soya-texturizada', ingredientName: 'Soya texturizada fina' },
  'mexican/tinga-soya': { id: 'soya-texturizada', ingredientName: 'Soya texturizada gruesa' },
  'mexican/machaca-soya': { id: 'soya-texturizada', ingredientName: 'Soya texturizada gruesa' },
  'mexican/flautas-soya': { id: 'soya-texturizada', ingredientName: 'Soya texturizada fina' },
  'cremas/crema-acida-tradicional': { id: 'anacardos', ingredientName: 'Anacardos crudos' },
  'salsas/mayonesa-tradicional': { id: 'aquafaba', ingredientName: 'Aquafaba (agua de garbanzo)' },
  'cremas/crema-para-batir': { id: 'coco', ingredientName: 'Leche de coco espesa (lata)' },
  'cremas/queso-crema-philadelphia': { id: 'anacardos', ingredientName: 'Anacardos crudos premium' },
  'pastas/espagueti-bolonesa': { id: 'lentejas', ingredientName: 'Lentejas rojas' },
  'pastas/lasana-carne': { id: 'tofu', ingredientName: 'Tofu firme' },
  'pastas/fettuccine-alfredo': { id: 'anacardos', ingredientName: 'Anacardos crudos' },
  'plato-fuerte/milanesa-pollo': { id: 'berenjena', ingredientName: 'Berenjena grande' },
  'plato-fuerte/mole-pollo': { id: 'seitan', ingredientName: 'Seitán casero' },
  'plato-fuerte/pescado-veracruzana': { id: 'setas', ingredientName: 'Setas king oyster' },
  'plato-fuerte/chiles-quinoa-plato-fuerte': { id: 'quinoa', ingredientName: 'Quinoa cocida' },
  'ensaladas/ensalada-cesar': { id: 'tofu', ingredientName: 'Tofu firme' },
  'postres/tiramisu-tradicional': { id: 'anacardos', ingredientName: 'Anacardos crudos' },
  'salsas/salsa-ranch': { id: 'anacardos', ingredientName: 'Anacardos crudos' },
  'aperitivos/alitas-buffalo': { id: 'coliflor', ingredientName: 'Coliflor grande' },
  'bebidas/licuado-platano': { id: 'platano', ingredientName: 'Plátanos maduros' },
};

export function getMainIngredient(dish: DishComparison): Classification | undefined {
  return mainIngredients[`${dish.category}/${dish.id}`];
}

export function getMainIngredientOptions(dishes: DishComparison[]): MainIngredient[] {
  const ids = dishes.flatMap(dish => {
    const ingredient = getMainIngredient(dish);
    return ingredient ? [ingredient.id] : [];
  });
  return [...new Set(ids)].sort((a, b) => mainIngredientLabels[a].localeCompare(mainIngredientLabels[b], 'es-MX'));
}
