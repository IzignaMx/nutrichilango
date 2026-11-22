import type { PantryItem } from '@/data/pantry/products';

const frequencyLabels = {
  weekly: 'Semanal',
  biweekly: 'Quincenal',
  monthly: 'Mensual',
} as const;

type ExportFrequency = keyof typeof frequencyLabels | '';

const site = 'nutrichilango.izignamx.com';

export function buildPantryExport(
  items: readonly PantryItem[],
  householdSize: number,
  frequency: ExportFrequency,
  preferences: readonly string[],
  totalPrice: number,
  date = new Date(),
) {
  const categories = new Map<string, { id: string; name: string; quantity: string; price: string }[]>();
  for (const item of items) {
    const rows = categories.get(item.category) ?? [];
    rows.push({
      id: item.id,
      name: item.name,
      quantity: `${item.quantity} ${item.unit}`,
      price: `$${item.price.toFixed(2)}`,
    });
    categories.set(item.category, rows);
  }
  return {
    title: 'Lista de Despensa Vegana',
    subtitles: [
      `Personalizada para ${householdSize} persona${householdSize === 1 ? '' : 's'}`,
      `Frecuencia: ${frequencyLabels[frequency || 'weekly']}`,
      ...(preferences.length ? [`Preferencias: ${preferences.join(', ')}`] : []),
    ],
    metadata: `Generada el ${date.toLocaleDateString('es-MX', {
      year: 'numeric', month: 'long', day: 'numeric',
    })} • ${site}`,
    categories: Array.from(categories, ([name, rows]) => ({ name, rows })),
    total: `Total estimado: $${totalPrice.toFixed(2)} MXN`,
    notes: [
      'Los precios son estimados basados en datos de mercados locales de la CDMX.',
      'Esta lista fue generada con NutriChilango para promover una alimentación vegana accesible.',
      `Visita ${site} para comparar precios de referencia.`,
    ],
  };
}

export type PantryExport = ReturnType<typeof buildPantryExport>;
