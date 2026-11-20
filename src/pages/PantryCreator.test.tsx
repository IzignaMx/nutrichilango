// @vitest-environment jsdom
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useNutriStore } from '@/store/useNutriStore';
import PantryCreator from './PantryCreator';

const { toast } = vi.hoisted(() => ({ toast: vi.fn() }));
vi.mock('@/hooks/use-toast', () => ({ useToast: () => ({ toast }) }));
vi.mock('@/data/pantry/products', () => ({
  generateBalancedPantryList: (size: number) => [
    { id: 'test-legume', name: 'Lentejas', category: 'Leguminosas', quantity: String(size), unit: 'kg', price: size * 45 },
    { id: 'test-grain', name: 'Avena', category: 'Cereales', quantity: '1', unit: 'kg', price: 45.5 },
  ],
}));

const originalClipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
const exactList = 'Importes estimados en MXN; no son precios observados ni cotizaciones.\n\nLentejas: 2 kg - $90.00\nAvena: 1 kg - $45.50';

function setClipboard(value: { writeText: (text: string) => Promise<void> } | undefined) {
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value });
}

function finishWizard(size = 2) {
  fireEvent.click(screen.getByRole('button', { name: new RegExp('^' + size + '$') }));
  fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
  fireEvent.click(screen.getByRole('button', { name: 'Siguiente' }));
  fireEvent.click(screen.getByText('Semanal', { exact: true }));
  fireEvent.click(screen.getByRole('button', { name: 'Generar lista' }));
}

function openResults() {
  render(<PantryCreator />);
  finishWizard();
}

const copyAction = () => screen.getByRole('button', { name: /^Copiar(?: lista)?$/ });

beforeEach(() => {
  useNutriStore.getState().resetPantry();
  toast.mockClear();
});
afterEach(() => {
  cleanup();
  if (originalClipboard) Object.defineProperty(navigator, 'clipboard', originalClipboard);
  else Reflect.deleteProperty(navigator, 'clipboard');
});

describe('Exportación de la lista de despensa', () => {
  it('mantiene copia y PDF, retira el vínculo que no reconstruye la lista y aclara los importes', () => {
    openResults();
    expect(copyAction()).toBeTruthy();
    expect(screen.getByRole('button', { name: 'PDF' })).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Compartir' })).toBeNull();
    expect(screen.getByText(/tabla fija de despensa/i)).toBeTruthy();
    expect(screen.getByText(/no son precios observados en tiendas ni cotizaciones/i)).toBeTruthy();
  });

  it('copia exactamente lo generado y espera la confirmación del portapapeles', async () => {
    let resolveCopy!: () => void;
    const pending = new Promise<void>((resolve) => { resolveCopy = resolve; });
    const writeText = vi.fn(() => pending);
    setClipboard({ writeText });
    openResults();
    fireEvent.click(copyAction());
    expect(writeText).toHaveBeenCalledExactlyOnceWith(exactList);
    expect(toast).not.toHaveBeenCalledWith(expect.objectContaining({ title: 'Lista copiada' }));
    expect(screen.queryByText(/lista copiada/i)).toBeNull();
    expect(screen.getByRole('status').textContent).toMatch(/copiando/i);
    expect(copyAction().hasAttribute('disabled')).toBe(true);
    await act(async () => { resolveCopy(); await pending; });
    expect(screen.getByRole('status').textContent).toMatch(/lista copiada/i);
  });

  it('muestra el fallo sin inventar éxito cuando el permiso se rechaza', async () => {
    let denyCopy!: (error: Error) => void;
    const pending = new Promise<void>((_, reject) => { denyCopy = reject; });
    void pending.catch(() => {});
    setClipboard({ writeText: () => pending });
    openResults();
    fireEvent.click(copyAction());
    await act(async () => { denyCopy(new Error('Permiso denegado')); await pending.catch(() => {}); });
    expect(screen.getByRole('status').textContent).toMatch(/no se pudo copiar/i);
    expect(screen.queryByText(/lista copiada/i)).toBeNull();
    expect(screen.getByRole('button', { name: 'PDF' })).toBeTruthy();
  });

  it('no superpone escrituras del portapapeles al generar otra lista', async () => {
    let resolveCopy!: () => void;
    const pending = new Promise<void>((resolve) => { resolveCopy = resolve; });
    const writeText = vi.fn<(text: string) => Promise<void>>()
      .mockImplementationOnce(() => pending)
      .mockResolvedValueOnce(undefined);
    setClipboard({ writeText });
    openResults();
    fireEvent.click(copyAction());
    fireEvent.click(screen.getByRole('button', { name: 'Nueva lista' }));
    finishWizard(3);
    expect(copyAction().hasAttribute('disabled')).toBe(true);
    fireEvent.click(copyAction());
    expect(writeText).toHaveBeenCalledTimes(1);

    await act(async () => { resolveCopy(); await pending; });
    expect(screen.getByRole('status').textContent).toBe('');
    expect(copyAction().hasAttribute('disabled')).toBe(false);

    await act(async () => { fireEvent.click(copyAction()); });
    expect(writeText.mock.calls[1]?.[0]).toContain('Lentejas: 3 kg - $135.00');
    expect(screen.getByRole('status').textContent).toMatch(/lista copiada/i);
  });

  it('no promete copia si el navegador no ofrece portapapeles', () => {
    setClipboard(undefined);
    openResults();
    fireEvent.click(copyAction());
    expect(screen.getByRole('status').textContent).toMatch(/portapapeles no está disponible/i);
    expect(screen.queryByText(/lista copiada/i)).toBeNull();
  });
});
