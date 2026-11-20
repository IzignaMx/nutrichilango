// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useNutriStore } from '@/store/useNutriStore';
import PantryCreator from './PantryCreator';

const { notify } = vi.hoisted(() => ({ notify: { success: vi.fn(), error: vi.fn() } }));
vi.mock('sonner', () => ({ toast: notify }));

function openPantry(path = '/despensa') {
  return render(<MemoryRouter initialEntries={[path]}><PantryCreator /></MemoryRouter>);
}

function createPantry() {
  openPantry();
  fireEvent.click(screen.getByRole('button', { name: '4' }));
  fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
  fireEvent.click(screen.getByRole('button', { name: 'Económico' }));
  fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
  fireEvent.click(screen.getByText('Quincenal', { exact: true }));
  fireEvent.click(screen.getByRole('button', { name: 'Generar lista' }));
}

const originalClipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
function setClipboard(writeText: (text: string) => Promise<void>) {
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
}

beforeEach(() => {
  useNutriStore.getState().resetPantry();
  vi.clearAllMocks();
});
afterEach(() => {
  cleanup();
  if (originalClipboard) Object.defineProperty(navigator, 'clipboard', originalClipboard);
  else Reflect.deleteProperty(navigator, 'clipboard');
});

describe('Enlace de configuración de despensa', () => {
  it('copia los parámetros existentes y confirma solo cuando se escribe el enlace', async () => {
    let finish!: () => void;
    const writeText = vi.fn((_text: string) => new Promise<void>(resolve => { finish = resolve; }));
    setClipboard(writeText);
    createPantry();

    fireEvent.click(screen.getByRole('button', { name: 'Compartir configuración' }));
    const [[link]] = writeText.mock.calls;
    const url = new URL(link);
    expect(url.pathname).toBe('/despensa');
    expect(Object.fromEntries(url.searchParams)).toEqual({ size: '4', prefs: 'Económico', freq: 'biweekly' });
    expect(notify.success).not.toHaveBeenCalled();
    finish();
    await waitFor(() => expect(notify.success).toHaveBeenCalledWith('Enlace copiado', expect.any(Object)));
  });

  it('abre enlaces anteriores sin sobrescribir la despensa hasta que se decide usar la configuración', () => {
    useNutriStore.getState().setPantryParams(3, 'monthly', ['Orgánico']);
    const saved = localStorage.getItem('nutrichilango-storage');
    openPantry('/despensa?size=4&prefs=Econ%C3%B3mico%2CSin+gluten&freq=biweekly');
    expect(localStorage.getItem('nutrichilango-storage')).toBe(saved);

    fireEvent.click(screen.getByRole('button', { name: 'Usar configuración compartida' }));
    expect(useNutriStore.getState()).toMatchObject({
      householdSize: 4, frequency: 'biweekly', preferences: ['Económico', 'Sin gluten'],
    });
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
    fireEvent.click(screen.getByRole('button', { name: 'Generar lista' }));
    expect(screen.getByText('Tu despensa personalizada')).toBeTruthy();
    expect(useNutriStore.getState().generatedPantry.length).toBeGreaterThan(0);
  });

  it('acepta enlaces sin preferencias y descarta parámetros inválidos', () => {
    const { unmount } = openPantry('/despensa?size=6&prefs=&freq=weekly');
    fireEvent.click(screen.getByRole('button', { name: 'Usar configuración compartida' }));
    expect(useNutriStore.getState()).toMatchObject({ householdSize: 6, frequency: 'weekly', preferences: [] });
    unmount();

    const saved = localStorage.getItem('nutrichilango-storage');
    openPantry('/despensa?size=2&size=3&prefs=&freq=weekly');
    expect(screen.queryByRole('button', { name: 'Usar configuración compartida' })).toBeNull();
    expect(localStorage.getItem('nutrichilango-storage')).toBe(saved);
  });

  it('informa si no se pudo copiar el enlace y conserva las otras exportaciones', async () => {
    setClipboard(() => Promise.reject(new Error('Permiso denegado')));
    createPantry();
    fireEvent.click(screen.getByRole('button', { name: 'Compartir configuración' }));
    await waitFor(() => expect(notify.error).toHaveBeenCalledWith('No se pudo copiar el enlace', expect.any(Object)));
    expect(notify.success).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Copiar' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'PDF' })).toBeTruthy();
  });
});
