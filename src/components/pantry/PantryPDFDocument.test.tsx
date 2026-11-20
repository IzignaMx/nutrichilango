// @vitest-environment jsdom
import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import PantryPDFDocument from './PantryPDFDocument';

vi.mock('@react-pdf/renderer', () => {
  const Wrapper = ({ children }: { children: ReactNode }) => <div>{children}</div>;
  return { Document: Wrapper, Page: Wrapper, Text: Wrapper, View: Wrapper, StyleSheet: { create: (styles: unknown) => styles } };
});

it('distingue las estimaciones de despensa de precios observados dentro del PDF', () => {
  render(<PantryPDFDocument
    items={[{ id: 'leg', name: 'Lentejas', category: 'Leguminosas', quantity: '2', unit: 'kg', price: 90 }]}
    householdSize={2}
    frequency="weekly"
    preferences={[]}
    totalPrice={90}
  />);
  expect(screen.getByText('Lentejas')).toBeTruthy();
  expect(screen.getByText('Total estimado: $90.00 MXN')).toBeTruthy();
  expect(screen.getByText(/tabla fija de despensa/i)).toBeTruthy();
  expect(screen.queryByText(/basados en datos de mercados locales/i)).toBeNull();
});
