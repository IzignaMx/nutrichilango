// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import PromotionNotice from './PromotionNotice';

afterEach(cleanup);
describe('Aviso de promoción documentada', () => {
  it('muestra fuente, condiciones e intervalo sin garantía de vigencia', () => {
    render(<PromotionNotice promotion={{
      id: 'test', productIds: ['product-1'], description: '2 por $50', conditions: 'Solo sucursal anunciada.',
      sourceUrl: 'https://example.com/promocion', observedOn: '2026-11-27',
      validFrom: '2026-11-25', validThrough: '2026-11-30',
    }} />);
    expect(screen.getByText('Promoción documentada: 2 por $50')).toBeTruthy();
    expect(screen.getByText('Solo sucursal anunciada.')).toBeTruthy();
    expect(screen.getByText(/2026-11-25 a 2026-11-30/)).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Consultar condiciones y fuente original' }).getAttribute('href')).toBe('https://example.com/promocion');
  });
});
