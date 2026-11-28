import { PANTRY_PRODUCTS, type PantryItem } from '../pantry/products';
import { getMainIngredient } from './mainIngredient';
import type { DishComparison } from './types';

type Link = { id: string; note?: string };

// Explicit catalog identities, not fuzzy search or quantity conversions.
// A note indicates a related product requiring preparation or variant review.
export const pantryIngredientLinks: Readonly<Record<string, Link>> = {
  'Lentejas rojas': { id: 'leg-001' },
  'Frijoles negros cocidos': { id: 'leg-004', note: 'Hay que cocinar los frijoles y comprobar la cantidad resultante.' },
  'Aquafaba (agua de garbanzo)': { id: 'leg-003', note: 'Se requiere el líquido de cocción, no los garbanzos directamente.' },
  'Aquafaba (agua de garbanzos)': { id: 'leg-003', note: 'Se requiere el líquido de cocción, no los garbanzos directamente.' },
  'Quinoa cocida': { id: 'gra-001', note: 'Hay que cocinar la quinoa y comprobar la cantidad resultante.' },
  'Espinacas frescas': { id: 'veg-001' },
  'Coliflor grande': { id: 'veg-005', note: 'Comprueba el tamaño y la cantidad necesarios.' },
  'Betabel pequeño': { id: 'veg-006', note: 'Comprueba el tamaño y la cantidad necesarios.' },
  'Almendras': { id: 'nut-002' },
  'Almendras crudas': { id: 'nut-002', note: 'Comprueba que sean crudas.' },
  'Semillas de calabaza': { id: 'nut-004' },
  'Semillas de chía': { id: 'nut-005' },
  'Semillas de girasol': { id: 'nut-003' },
  'Semillas de sésamo': { id: 'nut-006' },
  'Ajonjolí': { id: 'nut-006' },
  'Cúrcuma en polvo': { id: 'esp-001' },
  'Comino molido': { id: 'esp-002' },
  'Pimentón dulce': { id: 'esp-003' },
  'Orégano seco': { id: 'esp-004' },
  'Levadura nutricional': { id: 'esp-006' },
  'Aceite de oliva extra virgen': { id: 'ace-001' },
  'Aceite de coco': { id: 'ace-002' },
  'Tofu firme': { id: 'pro-001' },
  'Tofu firme natural': { id: 'pro-001', note: 'Comprueba que el tofu sea natural, sin saborizantes.' },
  'Soya texturizada fina': { id: 'pro-003', note: 'Comprueba que la soya sea de textura fina.' },
  'Soya texturizada gruesa': { id: 'pro-003', note: 'Comprueba que la soya sea de textura gruesa.' },
};

type MatchStatus = 'listed' | 'related' | 'not-listed' | 'unmapped';
type Match = { name: string; status: MatchStatus; productName?: string; note?: string };

export function matchPantryIngredients(dish: DishComparison, list: readonly PantryItem[]) {
  const listed = new Set(list.map(item => item.id));
  const ingredients: Match[] = dish.veganVersion.ingredients.map(({ name }) => {
    const link = Object.hasOwn(pantryIngredientLinks, name) ? pantryIngredientLinks[name] : undefined;
    const product = link && PANTRY_PRODUCTS.find(p => p.id === link.id);
    if (!product) return { name, status: 'unmapped' };
    const status = listed.has(product.id) ? (link.note ? 'related' : 'listed') : 'not-listed';
    return { name, status, productName: product.name, note: link.note };
  });
  const main = getMainIngredient(dish);
  return {
    ingredients,
    principal: ingredients.find(i => i.name === main?.ingredientName),
  };
}
