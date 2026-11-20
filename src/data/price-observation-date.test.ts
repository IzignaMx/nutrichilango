import { describe, expect, it } from 'vitest';
import { formatPriceObservationDate } from './price-observation-date';

describe('fecha de observación de precios', () => {
  it('usa la fecha de Ciudad de México y no el día de la visita', () => {
    expect(formatPriceObservationDate('2026-10-19T02:59:02.760Z')).toBe('18 de octubre de 2026');
  });

  it('no reemplaza una fecha desconocida por la hora actual', () => {
    expect(formatPriceObservationDate('fecha inválida')).toBe('no disponible');
  });
});
