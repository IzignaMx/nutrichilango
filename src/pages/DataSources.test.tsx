// @vitest-environment jsdom
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, it } from 'vitest';
import DataSources from './DataSources';
afterEach(cleanup);

it('distingue las fuentes de referencia de una actualización de precios activa', () => {
  render(<DataSources />);
  const prices = screen.getByRole('region', { name: 'Fuentes de Precios' });
  expect(prices.textContent).toMatch(/actualización automática de precios está en pausa/i);
  expect(prices.textContent).toMatch(/ni garantizamos una frecuencia de actualización/i);
  expect(prices.textContent).not.toMatch(/actualización (diaria|semanal)/i);
  expect(prices.textContent).toContain('Chedraui');
});

it('permite abrir fuentes oficiales y distingue referencias de verificación individual', () => {
  render(<DataSources />);
  expect(screen.getByRole('link', { name: 'Profeco QQP' }).getAttribute('href')).toBe('https://datos.profeco.gob.mx/index.php');
  expect(screen.getByRole('link', { name: 'USDA FoodData Central' }).getAttribute('href')).toBe('https://fdc.nal.usda.gov/');
  expect(screen.getByText(/esa trazabilidad está pendiente/i)).toBeTruthy();
  expect(screen.queryByText(/recetas validadas por la comunidad/i)).toBeNull();
});
