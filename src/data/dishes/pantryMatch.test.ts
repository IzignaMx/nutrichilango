import { describe, expect, it } from 'vitest';
import { dishesData } from './index';
import { PANTRY_PRODUCTS } from '../pantry/products';
import { pantryIngredientLinks, matchPantryIngredients } from './pantryMatch';

const dish = (category: string, id: string) => dishesData.find(d => d.category === category && d.id === id)!;
const items = (...ids: string[]) => PANTRY_PRODUCTS.filter(p => ids.includes(p.id));

describe('Vínculos editoriales de despensa', () => {
  it('usa nombres exactos del catálogo e identificadores de productos existentes', () => {
    const names = new Set(dishesData.flatMap(d => d.veganVersion.ingredients.map(i => i.name)));
    for (const [name, link] of Object.entries(pantryIngredientLinks)) {
      expect(names.has(name)).toBe(true);
      expect(PANTRY_PRODUCTS.some(p => p.id === link.id)).toBe(true);
    }
  });
  it('distingue tofu de soya texturizada y no confunde ingredientes secundarios', () => {
    const result = matchPantryIngredients(dish('mexican', 'machaca-soya'), items('pro-001'));
    expect(result.principal?.status).toBe('not-listed');
    expect(matchPantryIngredients(dish('pastas', 'lasana-carne'), items('pro-001')).principal?.status).toBe('listed');
  });
  it('distingue variantes y preparación sin presentar equivalencia cuantitativa', () => {
    expect(matchPantryIngredients(dish('mexican', 'tamales'), items('leg-004')).principal?.status).toBe('related');
    expect(matchPantryIngredients(dish('popular', 'hamburguesa'), items('leg-005')).principal?.status).toBe('unmapped');
    expect(matchPantryIngredients(dish('plato-fuerte', 'chiles-quinoa-plato-fuerte'), items('gra-001')).principal?.status).toBe('related');
  });
  it('mantiene todos los ingredientes y los no mapeados', () => {
    for (const d of dishesData) {
      const result = matchPantryIngredients(d, []);
      expect(result.ingredients.map(i => i.name)).toEqual(d.veganVersion.ingredients.map(i => i.name));
      expect(result.ingredients.every(i => ['not-listed', 'unmapped'].includes(i.status))).toBe(true);
    }
  });
});

it('separa disponibilidad declarada de lista de compra y no cuenta variantes como coincidencias exactas', () => {
  const tofu = dish('pastas', 'lasana-carne');
  const absent = matchPantryIngredients(tofu, items('pro-001'));
  expect(absent.principal?.availability).toBe('unknown');
  const confirmed = matchPantryIngredients(tofu, [], { 'pro-001': 'available' });
  expect(confirmed.principal?.availability).toBe('available');
  expect(confirmed.principal?.status).toBe('not-listed');
  expect(confirmed.confirmedCount).toBeGreaterThan(0);
  const related = matchPantryIngredients(dish('mexican', 'tamales'), [], { 'leg-004': 'available' });
  expect(related.principal?.availability).toBe('related-available');
  expect(related.confirmedCount).toBe(0);
  const missing = matchPantryIngredients(tofu, items('pro-001'), { 'pro-001': 'missing' });
  expect(missing.principal?.availability).toBe('missing');
  expect(missing.confirmedCount).toBe(0);
});
