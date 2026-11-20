// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Index from './Index';

describe('Portada de NutriChilango', () => {
  it('presenta precios de referencia sin atribuir ahorros ni resultados de salud a usuarios', () => {
    const { container } = render(<MemoryRouter><Index /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1, name: 'Compara precios y alimentos de origen vegetal' })).toBeTruthy();
    expect(screen.getByText(/no son cotizaciones vigentes/i)).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Cómo se hacen las comparaciones' }).getAttribute('href')).toBe('/how-it-works');
    expect(container.textContent).not.toMatch(/3X más beneficios|40%|\$2,500|5,000 familias|Resultados reales de personas reales/i);
  });
});
