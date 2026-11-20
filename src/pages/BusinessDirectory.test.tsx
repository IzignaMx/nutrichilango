// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BusinessDirectory from './BusinessDirectory';

describe('Directorio de emprendimientos', () => {
  it('explica el alcance de la beta y conserva la postulación por correo', () => {
    render(<BusinessDirectory />);

    expect(screen.getByText(/no garantiza visitas ni ventas/i)).toBeTruthy();
    expect(screen.queryByText(/visibilidad garantizada/i)).toBeNull();

    const firstLink = screen.getByRole('link', { name: 'Quiero postular mi emprendimiento' });
    const secondLink = screen.getByRole('link', { name: 'Enviar postulación por correo' });
    const href = firstLink.getAttribute('href') ?? '';
    expect(secondLink.getAttribute('href')).toBe(href);
    expect(href).toMatch(/^mailto:[^?]+\?subject=/);
    expect(decodeURIComponent(href)).toContain('Nombre del emprendimiento:');
    expect(decodeURIComponent(href)).toContain('Idea de colaboración');
  });
});
