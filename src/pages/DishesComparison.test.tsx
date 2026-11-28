// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it } from 'vitest';
import { dishesData } from '@/data/dishes';
import { MemoryRouter } from 'react-router-dom';
import { useNutriStore } from '@/store/useNutriStore';
import { PANTRY_PRODUCTS } from '@/data/pantry/products';
import DishesComparison from './DishesComparison';

it('distingue el costo estimado por porción de un ahorro o beneficio garantizado', () => {
  render(<MemoryRouter><DishesComparison /></MemoryRouter>);

  expect(screen.getByText(String(dishesData.length), { exact: true })).toBeTruthy();
  expect(screen.getByRole('combobox', { name: 'Ingrediente principal' })).toBeTruthy();
  expect(screen.getAllByText('Principal: Tofu', { exact: true })).toHaveLength(2);
  expect(screen.getByText('Alternativas de origen vegetal', { exact: true })).toBeTruthy();
  expect(screen.getByRole('alert').textContent).toMatch(/costo estimado.*por porción.*precios de referencia/i);
  expect(screen.queryByText(/duplica los beneficios|cuestan hasta 40% menos|Mejor Opción|Cargando la comparación/i)).toBeNull();
  expect(screen.getAllByText('Mole Poblano con Pollo', { exact: true })).toHaveLength(2);
  expect(screen.getAllByText('Pastas', { exact: true })).toHaveLength(3);
});

afterEach(() => { cleanup(); useNutriStore.getState().resetPantry(); });

it('filtra por el principal de la lista, sin confundir tofu con soya texturizada', () => {
  useNutriStore.getState().setGeneratedPantry(PANTRY_PRODUCTS.filter(p => p.id === 'pro-001'));
  render(<MemoryRouter initialEntries={['/dishes-comparison?despensa=1']}><DishesComparison /></MemoryRouter>);
  expect(screen.getAllByText('Principal: Tofu', { exact: true })).toHaveLength(2);
  expect(screen.queryAllByText('Principal: Soya texturizada', { exact: true })).toHaveLength(0);
  expect(screen.getByText(/no demuestra que tengas los productos/i)).toBeTruthy();
  fireEvent.click(screen.getByRole('checkbox', { name: /ingrediente principal de mi lista/i }));
  expect(screen.getAllByText('Principal: Soya texturizada', { exact: true }).length).toBeGreaterThan(0);
});

it('permite volver a todas las recetas si no existe una lista guardada', () => {
  render(<MemoryRouter initialEntries={['/dishes-comparison?despensa=1']}><DishesComparison /></MemoryRouter>);
  expect(screen.getByText(/todavía no hay una lista de despensa/i)).toBeTruthy();
  expect(screen.getAllByText('Principal: Tofu', { exact: true })).toHaveLength(2);
});

it('explica las variantes de soya y mantiene los ingredientes sin vínculo', () => {
  useNutriStore.getState().setGeneratedPantry(PANTRY_PRODUCTS.filter(p => p.id === 'pro-003'));
  render(<MemoryRouter initialEntries={['/dishes-comparison?despensa=1']}><DishesComparison /></MemoryRouter>);
  expect(screen.getAllByText('Principal: Soya texturizada', { exact: true })).toHaveLength(10);
  expect(screen.getAllByText(/requiere revisar presentación o preparación/i)).toHaveLength(10);
  expect(screen.getAllByText(/comprueba que la soya sea de textura/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/sin vínculo verificado/i).length).toBeGreaterThan(0);
});

it('no inventa recetas de tempeh cuando no hay correspondencias del principal', () => {
  useNutriStore.getState().setGeneratedPantry(PANTRY_PRODUCTS.filter(p => p.id === 'pro-002'));
  render(<MemoryRouter initialEntries={['/dishes-comparison?despensa=1']}><DishesComparison /></MemoryRouter>);
  expect(screen.getByText(/no hay coincidencias con el ingrediente principal/i)).toBeTruthy();
  expect(screen.queryAllByText('Principal: Tofu', { exact: true })).toHaveLength(0);
});

it('permite declarar disponibilidad sin cambiar la lista y muestra cantidades originales', () => {
  useNutriStore.getState().setGeneratedPantry(PANTRY_PRODUCTS.filter(p => p.id === 'pro-001'));
  render(<MemoryRouter initialEntries={['/dishes-comparison?despensa=1']}><DishesComparison /></MemoryRouter>);
  fireEvent.click(screen.getByText('Confirmar lo que tengo en casa (opcional)'));
  const control = screen.getByRole('combobox', { name: 'Disponibilidad: Tofu firme' });
  expect((control as HTMLSelectElement).value).toBe('unknown');
  fireEvent.change(control, { target: { value: 'available' } });
  expect(screen.getAllByText(/producto confirmado por ti; cantidad sin comprobar/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/cantidad de receta:/i).length).toBeGreaterThan(0);
  expect(useNutriStore.getState().generatedPantry.map(p => p.id)).toEqual(['pro-001']);
  fireEvent.change(control, { target: { value: 'missing' } });
  expect(screen.getAllByText(/producto declarado como faltante/i).length).toBeGreaterThan(0);
  fireEvent.click(screen.getByRole('button', { name: 'Borrar confirmaciones' }));
  expect((control as HTMLSelectElement).value).toBe('unknown');
});

it('prioriza coincidencias exactas por decisión voluntaria sin necesitar lista de compras', () => {
  render(<MemoryRouter><DishesComparison /></MemoryRouter>);
  fireEvent.click(screen.getByText('Confirmar lo que tengo en casa (opcional)'));
  fireEvent.change(screen.getByRole('combobox', { name: 'Disponibilidad: Tofu firme' }), { target: { value: 'available' } });
  fireEvent.click(screen.getByRole('checkbox', { name: /priorizar recetas con más productos confirmados/i }));
  expect(screen.getAllByRole('heading', { level: 3 })[0].textContent).toMatch(/Lasaña|César/i);
  expect(screen.getAllByText(/Coincidencias exactas:/).length).toBeGreaterThan(1);
  expect(useNutriStore.getState().generatedPantry).toEqual([]);
});
