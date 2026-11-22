import { describe, expect, it, vi } from 'vitest';
import { filterProductsByPreferences, generateBalancedPantryList, PANTRY_PRODUCTS, type PantryItem } from './products';

const base = { category: 'Prueba', quantity: '1', price: 1, unit: 'kg' };
const candidate = (id: string, flags: Partial<PantryItem>): PantryItem => ({ ...base, id, name: id, ...flags });
const fixtures = [
  candidate('económico con marca', { isGlutenFree: true, isEconomical: true }),
  candidate('fácil con marca', { isGlutenFree: true, isEasyPrep: true }),
  candidate('marca sin otras preferencias', { isGlutenFree: true }),
  candidate('fácil sin marca', { isEasyPrep: true }),
  candidate('económico con marca negativa', { isEconomical: true, isGlutenFree: false }),
];
const ids = (items: PantryItem[]) => items.map(({ id }) => id);

describe('Elegibilidad del catálogo de despensa', () => {
  it('Sin gluten sin preferencias adicionales solo incluye marcas afirmativas', () => {
    expect(ids(filterProductsByPreferences(fixtures, ['Sin gluten']))).toEqual(ids(fixtures.slice(0, 3)));
  });

  it('restringe primero las opciones y conserva la unión de los criterios restantes', () => {
    expect(ids(filterProductsByPreferences(fixtures, ['Sin gluten', 'Económico', 'Fácil preparación']))).toEqual(ids(fixtures.slice(0, 2)));
  });

  it('no amplía una lista sin coincidencias ni ante una preferencia no reconocida', () => {
    const unmarked = fixtures.slice(3);
    expect(filterProductsByPreferences(unmarked, ['Sin gluten', 'Económico'])).toEqual([]);
    expect(filterProductsByPreferences(unmarked, ['Sin gluten', 'Preferencia desconocida'])).toEqual([]);
    expect(filterProductsByPreferences(fixtures, ['Sin gluten', 'Orgánico'])).toEqual([]);
  });

  it('conserva el resultado sin preferencias y la unión habitual sin Sin gluten', () => {
    expect(filterProductsByPreferences(fixtures, [])).toBe(fixtures);
    expect(ids(filterProductsByPreferences(fixtures, ['Económico', 'Fácil preparación'])))
      .toEqual(ids([fixtures[0], fixtures[1], fixtures[3], fixtures[4]]));
  });

  it('las 32 combinaciones del catálogo con Sin gluten excluyen Bulgur y otras opciones sin marca', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.01);
    const optional = ['Alto en proteína', 'Económico', 'Orgánico', 'Fácil preparación', 'Rica en hierro'];
    try {
      expect(PANTRY_PRODUCTS.find(({ name }) => name === 'Bulgur')?.isGlutenFree).not.toBe(true);
      for (let mask = 0; mask < 2 ** optional.length; mask++) {
        const prefs = ['Sin gluten', ...optional.filter((_, i) => (mask & (1 << i)) !== 0)];
        const list = generateBalancedPantryList(2, 'weekly', prefs);
        expect(list.filter(({ isGlutenFree }) => isGlutenFree !== true).map(({ name }) => name), prefs.join(', ')).toEqual([]);
        if (prefs.length === 1) expect(list.length).toBeGreaterThan(0);
      }
    } finally {
      random.mockRestore();
    }
  });
});
