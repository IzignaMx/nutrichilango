import { describe, expect, it } from 'vitest';
import { dishesData } from './index';
import { dishCategoryLabels, statedPreparationMinutes } from './display';

describe('Datos de presentación de recetas', () => {
  it('compara minutos y horas de manera consistente sin inventar tiempo de espera', () => {
    expect(statedPreparationMinutes('1.5 horas')).toBe(90);
    expect(statedPreparationMinutes('2.5 horas + marinado')).toBe(150);
    expect(statedPreparationMinutes('15 min + fermentado')).toBe(15);
    expect(statedPreparationMinutes('desconocido')).toBe(Infinity);
    expect(statedPreparationMinutes('35 min')).toBeLessThan(statedPreparationMinutes('1.5 horas'));
  });

  it('reconoce todos los tiempos y categorías del catálogo y usa una identidad compuesta única', () => {
    for (const dish of dishesData) {
      expect(Number.isFinite(statedPreparationMinutes(dish.veganVersion.prepTime))).toBe(true);
      expect(dishCategoryLabels[dish.category]).toBeTruthy();
    }
    expect(new Set(dishesData.map(dish => `${dish.category}/${dish.id}`)).size).toBe(dishesData.length);
  });
});
