// @vitest-environment jsdom
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import DataSources from './DataSources';

it('distingue las fuentes de referencia de una actualización de precios activa', () => {
  render(<DataSources />);
  const prices = screen.getByRole('region', { name: 'Fuentes de Precios' });
  expect(prices.textContent).toMatch(/actualización automática de precios está en pausa/i);
  expect(prices.textContent).toMatch(/ni garantizamos una frecuencia de actualización/i);
  expect(prices.textContent).not.toMatch(/actualización (diaria|semanal)/i);
  expect(prices.textContent).toContain('Chedraui');
});
