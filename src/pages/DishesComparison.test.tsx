// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { dishesData } from '@/data/dishes';
import DishesComparison from './DishesComparison';

it('distingue el costo estimado por porción de un ahorro o beneficio garantizado', () => {
  render(<DishesComparison />);

  expect(screen.getByText(String(dishesData.length), { exact: true })).toBeTruthy();
  expect(screen.getByRole('combobox', { name: 'Ingrediente principal' })).toBeTruthy();
  expect(screen.getAllByText('Principal: Tofu', { exact: true })).toHaveLength(2);
  expect(screen.getByText('Alternativas de origen vegetal', { exact: true })).toBeTruthy();
  expect(screen.getByRole('alert').textContent).toMatch(/costo estimado.*por porción.*precios de referencia/i);
  expect(screen.queryByText(/duplica los beneficios|cuestan hasta 40% menos|Mejor Opción|Cargando la comparación/i)).toBeNull();
  expect(screen.getAllByText('Mole Poblano con Pollo', { exact: true })).toHaveLength(2);
  expect(screen.getAllByText('Pastas', { exact: true })).toHaveLength(3);
});
