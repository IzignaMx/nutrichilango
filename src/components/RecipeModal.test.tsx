// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { storeData } from '@/data';
import RecipeModal from './RecipeModal';

it('no atribuye una tarifa por kg a piezas ni a una base no documentada', () => {
  const product = storeData.flatMap(store => store.products).find(p => p.plantBased.recipe)!;
  const recipe = product.plantBased.recipe!;
  render(<RecipeModal recipe={recipe} isOpen onClose={() => {}} />);
  expect(screen.getByText(/base original del precio por unidad no está documentada/)).toBeTruthy();
  expect(screen.queryByText(/\/kg/)).toBeNull();
  expect(screen.getAllByText('Estimación de la cantidad indicada')).toHaveLength(recipe.ingredients.length);
});
