// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import DataConfidenceIndicator from './DataConfidenceIndicator';

it('declara completitud de campos y no confianza científica', () => {
  render(<DataConfidenceIndicator nutrition={{ calories: 1, protein: 1, fat: 1, carbs: 1, sugar: 0, fiber: 0 }} />);
  expect(screen.getByRole('button', { name: 'Campos: 75%' })).toBeTruthy();
  expect(screen.queryByText(/Alta|Confianza/)).toBeNull();
});
