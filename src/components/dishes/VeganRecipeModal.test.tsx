// @vitest-environment jsdom
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { dishesData } from '@/data/dishes';
import VeganRecipeModal from './VeganRecipeModal';

it('distingue el subtotal de ingredientes de la estimación de la receta', () => {
  const recipe = dishesData.find(dish => dish.id === 'tamales')!.veganVersion;
  render(<VeganRecipeModal isOpen onClose={() => {}} recipe={recipe} />);
  expect(screen.getByText('Subtotal de ingredientes', { exact: true })).toBeTruthy();
  expect(screen.getByText(/Estimación del platillo en el comparador: \$98\.50 MXN.*\$134\.45 MXN/i)).toBeTruthy();
  expect(screen.getByText(/no cotizaciones actuales/i)).toBeTruthy();
});
