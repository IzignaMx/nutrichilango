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

describe('Estimado a partir de las piezas mostradas', () => {
  it.each([
    [1, '2', 30],
    [2, '3', 45],
    [3, '5', 75],
    [5, '8', 120],
  ])('usa la base del catálogo para Brócoli, hogar de %s', (household, quantity, price) => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.41);
    try {
      expect(generateBalancedPantryList(household, 'weekly', ['Económico']).find(({ name }) => name === 'Brócoli'))
        .toMatchObject({ quantity, price });
    } finally {
      random.mockRestore();
    }
  });

  it('mantiene las cantidades mostradas y la regla anterior para kg, g y ml, y nunca cotiza cero piezas en el catálogo actual', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.41);
    const seen = new Set<string>();
    try {
      for (const [frequency, factor] of [['weekly', 1], ['biweekly', 2], ['monthly', 4]] as const) {
        for (let household = 1; household <= 6; household++) {
          for (const item of generateBalancedPantryList(household, frequency, [])) {
            const catalog = PANTRY_PRODUCTS.find(({ id }) => id === item.id)!;
            const scale = (household / 2) * factor;
            const precision = item.unit === 'kg' || item.unit === 'ml' ? 1 : 0;
            expect(item.quantity).toBe((Number(catalog.quantity) * scale).toFixed(precision));
            seen.add(item.unit);
            if (item.unit === 'piezas') {
              expect(Number(item.quantity)).toBeGreaterThan(0);
              expect(item.price).toBe(Math.round(catalog.price * Number(item.quantity) / Number(catalog.quantity)));
            } else {
              expect(item.price).toBe(Math.round(catalog.price * scale));
            }
          }
        }
      }
    } finally {
      random.mockRestore();
    }
    expect([...seen].sort()).toEqual(['g', 'kg', 'ml', 'piezas']);
  });
});
