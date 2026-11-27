import { describe, expect, it } from 'vitest';
import type { PantryItem } from '@/data/pantry/products';
import { buildPantryExport } from './pantry-export';

describe('documento de despensa compartido por PDF y vista', () => {
  it('mantiene orden, cantidades, importes, total y referencias', () => {
    const rows: PantryItem[] = [
      { id: '1', category: 'Granos', name: 'Maíz', quantity: '1.5', unit: 'kg', price: 54 },
      { id: '2', category: 'Vegetales', name: 'Coliflor', quantity: '3', unit: 'piezas', price: 90 },
      { id: '3', category: 'Granos', name: 'Quínoa', quantity: '1', unit: 'kg', price: 49.5 },
    ];
    const model = buildPantryExport(rows, 4, 'monthly', ['Fácil preparación'], 193.5, new Date(2026, 10, 22, 12));
    expect(model.categories).toMatchObject([
      { name: 'Granos', rows: [
        { id: '1', name: 'Maíz', quantity: '1.5 kg', price: '$54.00' },
        { id: '3', name: 'Quínoa', quantity: '1 kg', price: '$49.50' },
      ] },
      { name: 'Vegetales', rows: [{ id: '2', name: 'Coliflor', quantity: '3 piezas', price: '$90.00' }] },
    ]);
    expect(model.subtitles).toEqual(['Personalizada para 4 personas', 'Frecuencia: Mensual', 'Preferencias: Fácil preparación']);
    expect(model.metadata).toBe('Generada el 22 de noviembre de 2026 • nutrichilango.izignamx.com');
    expect(model.total).toBe('Total estimado: $193.50 MXN');
    expect(model.notes).toHaveLength(3);
    expect(model.notes[2]).toContain('nutrichilango.izignamx.com');
    expect(rows.map(({ id }) => id)).toEqual(['1', '2', '3']);
  });

  it('omite preferencias vacías y ajusta singular sin introducir filas', () => {
    const model = buildPantryExport([], 1, 'weekly', [], 0);
    expect(model.subtitles).toEqual(['Personalizada para 1 persona', 'Frecuencia: Semanal']);
    expect(model.categories).toMatchObject([]);
    expect(model.total).toBe('Total estimado: $0.00 MXN');
  });
});

it('conserva la referencia comercial y la orientación de compra en PDF y vista previa', () => {
  const model = buildPantryExport([{ id: 'gra-006', name: 'Bulgur', category: 'Granos', quantity: '500', unit: 'g', price: 35 }], 2, 'weekly', [], 35);
  const row = model.categories[0].rows[0];
  expect(row.name).toBe('Trigo partido precocido (bulgur)');
  expect(row.quantity).toBe('500 g');
  expect(row.price).toBe('$35.00');
  expect(row.shopping.priceOrigin).toContain('$70.00 MXN por 1 kg');
  expect(row.shopping.reference?.url).toContain('sinaidelibakery.com');
  expect(model.notes[0]).toContain('no son cotizaciones');
  expect(model.recipesUrl).toBe('https://nutrichilango.izignamx.com/dishes-comparison');
});
