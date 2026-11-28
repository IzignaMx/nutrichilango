// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useNutriStore } from '@/store/useNutriStore';
import PantryCreator from './PantryCreator';
import { getPantryShoppingInfo } from '@/data/pantry/shopping';

const { notify } = vi.hoisted(() => ({ notify: { success: vi.fn(), error: vi.fn() } }));
vi.mock('sonner', () => ({ toast: notify }));

function openPantry(path = '/despensa') {
  return render(<MemoryRouter initialEntries={[path]}><PantryCreator /></MemoryRouter>);
}

function createPantry(preferences = ['Económico']) {
  openPantry();
  fireEvent.click(screen.getByRole('button', { name: '4' }));
  fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
  for (const name of preferences) fireEvent.click(screen.getByRole('button', { name }));
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

describe('Frecuencia de compras', () => {
  it('permite elegir una opción mediante su etiqueta y borra la selección al crear otra lista', () => {
    openPantry();
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));

    const group = () => within(screen.getByRole('group', { name: 'Frecuencia de compras' }));
    const monthly = group().getByRole<HTMLInputElement>('radio', { name: 'Mensual' });
    expect(monthly.checked).toBe(false);
    fireEvent.click(screen.getByText('Compras una vez al mes', { exact: true }));
    expect(monthly.checked).toBe(true);
    expect(group().getAllByRole('radio', { checked: true })).toEqual([monthly]);
    fireEvent.click(screen.getByRole('button', { name: 'Generar lista' }));
    expect(screen.getByText('Para 4 personas • Mensual')).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Nueva lista' }));
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
    expect(group().getAllByRole('radio')).toHaveLength(3);
    expect(group().queryByRole('radio', { checked: true })).toBeNull();
    expect(screen.getByRole<HTMLButtonElement>('button', { name: 'Generar lista' }).disabled).toBe(true);
  });
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
    expect(screen.getByRole<HTMLInputElement>('radio', { name: 'Quincenal' }).checked).toBe(true);
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

describe('Exclusión por Sin gluten', () => {
  it('conserva la exclusión al crear y copiar, y al aplicar el enlace compartido', async () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.01);
    const writeText = vi.fn<(text: string) => Promise<void>>().mockResolvedValue(undefined);
    setClipboard(writeText);
    const assertExactCopy = () => {
      const list = useNutriStore.getState().generatedPantry;
      expect(list.length).toBeGreaterThan(0);
      expect(list.filter(({ isGlutenFree }) => isGlutenFree !== true)).toEqual([]);
      expect(screen.queryByText(/trigo partido precocido/i)).toBeNull();
      expect(screen.getByText(/contacto cruzado/i)).toBeTruthy();
      fireEvent.click(screen.getByRole('button', { name: 'Copiar' }));
      const rows = writeText.mock.lastCall![0].split('\n');
      expect(rows.map(line => line.split(' | ')[0])).toEqual(
        list.map(item => `${getPantryShoppingInfo(item).name}: ${item.quantity} ${item.unit} - $${item.price.toFixed(2)}`),
      );
      expect(rows.every(row => row.includes('Origen: Estimación de NutriChilango') && row.includes('Buscar: https://'))).toBe(true);
    };
    try {
      createPantry(['Sin gluten', 'Económico', 'Fácil preparación']);
      assertExactCopy();
      fireEvent.click(screen.getByRole('button', { name: 'Compartir configuración' }));
      const url = new URL(writeText.mock.lastCall![0]);
      expect(Object.fromEntries(url.searchParams)).toEqual({
        size: '4', prefs: 'Sin gluten,Económico,Fácil preparación', freq: 'biweekly',
      });
      await waitFor(() => expect(notify.success).toHaveBeenCalled());
      cleanup();
      useNutriStore.getState().resetPantry();
      openPantry(url.pathname + url.search);
      fireEvent.click(screen.getByRole('button', { name: 'Usar configuración compartida' }));
      fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
      fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
      fireEvent.click(screen.getByRole('button', { name: 'Generar lista' }));
      assertExactCopy();
    } finally {
      random.mockRestore();
    }
  });

  it('explica que no hay coincidencias, sin conservar una lista anterior ni exportarla', () => {
    createPantry();
    expect(useNutriStore.getState().generatedPantry.length).toBeGreaterThan(0);
    cleanup();
    const writeText = vi.fn<(text: string) => Promise<void>>().mockResolvedValue(undefined);
    setClipboard(writeText);
    openPantry('/despensa?size=4&prefs=Sin+gluten%2COrg%C3%A1nico&freq=biweekly');
    fireEvent.click(screen.getByRole('button', { name: 'Usar configuración compartida' }));
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
    fireEvent.click(screen.getByRole('button', { name: 'Generar lista' }));
    expect(useNutriStore.getState().generatedPantry).toEqual([]);
    expect(screen.getByText(/No hay productos del catálogo que coincidan/i)).toBeTruthy();
    for (const name of ['Copiar', 'PDF', 'Vista Previa']) {
      expect(screen.getByRole<HTMLButtonElement>('button', { name }).disabled).toBe(true);
    }
    expect(screen.getByRole<HTMLButtonElement>('button', { name: 'Compartir configuración' }).disabled).toBe(false);
    expect(writeText).not.toHaveBeenCalled();
  });
});

it('muestra y copia el precio de las piezas visibles y las incluye en el total', () => {
  const random = vi.spyOn(Math, 'random').mockReturnValue(0.41);
  const writeText = vi.fn<(text: string) => Promise<void>>().mockResolvedValue(undefined);
  setClipboard(writeText);
  try {
    openPantry('/despensa?size=1&prefs=Econ%C3%B3mico&freq=weekly');
    fireEvent.click(screen.getByRole('button', { name: 'Usar configuración compartida' }));
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
    fireEvent.click(screen.getByRole('button', { name: 'Generar lista' }));
    const row = screen.getByText('Brócoli', { exact: true }).parentElement?.parentElement;
    expect(row).toBeTruthy();
    expect(within(row!).getByText('2 piezas')).toBeTruthy();
    expect(within(row!).getByText('$30.00')).toBeTruthy();
    const otherPrices = useNutriStore.getState().generatedPantry
      .filter(({ name }) => name !== 'Brócoli').map(({ price }) => price);
    const expectedTotal = (30 + otherPrices.reduce((sum, price) => sum + price, 0)).toFixed(2);
    const total = screen.getByText('Total estimado:', { exact: true });
    expect(within(total).getByText(`$${expectedTotal}`)).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Copiar' }));
    expect(writeText.mock.lastCall?.[0].split('\n').map(line => line.split(' | ')[0])).toContain('Brócoli: 2 piezas - $30.00');
  } finally {
    random.mockRestore();
  }
});

it('muestra origen de precio y búsqueda para cada producto y accesos a todas las recetas y al filtro opcional', () => {
  createPantry();
  const products = useNutriStore.getState().generatedPantry;
  expect(screen.getAllByText(/Origen del precio: estimación de NutriChilango/i)).toHaveLength(products.length);
  expect(screen.getAllByRole('link', { name: /Buscar .* en CDMX/ })).toHaveLength(products.length);
  const recipes = screen.getByRole('link', { name: 'Explorar recetas vegetales' });
  expect(recipes.getAttribute('href')).toBe('/dishes-comparison');
  expect(screen.getByRole('link', { name: 'Recetas según mi despensa' }).getAttribute('href')).toBe('/dishes-comparison?despensa=1');
  expect(screen.getByText(/revisa los demás ingredientes y las cantidades/i)).toBeTruthy();
});
