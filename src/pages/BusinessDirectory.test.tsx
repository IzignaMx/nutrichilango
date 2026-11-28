// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import BusinessDirectory from './BusinessDirectory';

afterEach(cleanup);

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
  it('presenta la primera ficha con fotografía local y fuentes originales', () => {
    render(<BusinessDirectory />);
    expect(screen.getByRole('heading', { name: 'Nómada psy kitchen' })).toBeTruthy();
    expect(screen.getByRole('img', { name: /charolas de comida/i }).getAttribute('src')).toBe('/images/emprendimientos/nomada-psy-kitchen.jpg');
    expect(screen.getByRole('link', { name: 'Ver Instagram' }).getAttribute('href')).toBe('https://www.instagram.com/nomada_dark_kitchen_/');
    expect(screen.getByRole('link', { name: 'Ver menú publicado' }).getAttribute('href')).toContain('DeXnG93lDwT');
    expect(screen.getByRole('link', { name: 'Ver publicación original' }).getAttribute('href')).toContain('Df0VwRpgDnA');
    expect(screen.getByText(/zona de atención por confirmar/i)).toBeTruthy();
    expect(screen.queryByText(/antes del lanzamiento/i)).toBeNull();
  });
});

