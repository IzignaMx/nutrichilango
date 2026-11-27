import { describe, expect, it } from 'vitest';
import { PANTRY_PRODUCTS } from './products';
import { getPantryShoppingInfo } from './shopping';

describe('Orientación de compra de despensa', () => {
  it('cada producto identifica el origen estimado y proporciona una búsqueda específica en CDMX', () => {
    for (const item of PANTRY_PRODUCTS) {
      const info = getPantryShoppingInfo(item);
      expect(info.priceOrigin).toMatch(/estimación de NutriChilango/i);
      if (item.id !== 'gra-006') expect(info.priceOrigin).toMatch(/sin cotización/i);
      expect(info.where).not.toBe('');
      const url = new URL(info.searchUrl);
      expect(url.protocol).toBe('https:');
      expect(url.searchParams.get('q')).toContain('CDMX');
      expect(url.searchParams.get('q')).toContain(info.searchTerm);
    }
  });

  it('explica el bulgur sin confundirlo con trigo crudo ni con un producto sin gluten', () => {
    const item = PANTRY_PRODUCTS.find(({ id }) => id === 'gra-006')!;
    const info = getPantryShoppingInfo({ ...item, name: 'Bulgur' });
    expect(info.name).toBe('Trigo partido precocido (bulgur)');
    expect(info.description).toMatch(/contiene gluten/i);
    expect(info.reference?.url).toBe('https://shop.sinaidelibakery.com/producto/bulgur-krinos-1-kg-8535');
    expect(info.reference?.label).toContain('1 kg');
    expect(info.priceOrigin).toContain('$70.00 MXN por 1 kg');
    expect(info.priceOrigin).toContain('27/11/2026');
    expect(info.priceOrigin).toContain('proporcional');
    expect(item.isGlutenFree).not.toBe(true);
    expect(item.price).toBe(35);
  });

  it('usa una búsqueda, no una tienda inventada, cuando no hay ficha comercial', () => {
    const info = getPantryShoppingInfo({ id: 'test', name: 'Producto de prueba', category: 'Otro' });
    expect(info.reference).toBeUndefined();
    expect(new URL(info.searchUrl).searchParams.get('q')).toContain('Producto de prueba');
  });
});
