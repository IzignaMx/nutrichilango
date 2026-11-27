import type { PantryItem } from '@/data/pantry/products';
import { getPantryShoppingInfo, PANTRY_RECIPES_PATH, type PantryShoppingInfo } from '@/data/pantry/shopping';

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
  const categories = new Map<string, { id: string; name: string; quantity: string; price: string; shopping: PantryShoppingInfo }[]>();
  for (const item of items) {
    const rows = categories.get(item.category) ?? [];
    const shopping = getPantryShoppingInfo(item);
    rows.push({
      id: item.id,
      name: shopping.name,
      shopping,
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
    recipesUrl: `https://${site}${PANTRY_RECIPES_PATH}`,
    total: `Total estimado: $${totalPrice.toFixed(2)} MXN`,
    notes: [
      'Los precios son estimaciones de NutriChilango, no son cotizaciones ni disponibilidad garantizada. Las fichas de compra no acreditan el precio salvo cuando se indique una referencia proporcional.',
      'Esta lista fue generada con NutriChilango para promover una alimentación vegana accesible.',
      `Visita ${site} para comparar precios de referencia.`,
    ],
  };
}

export type PantryExport = ReturnType<typeof buildPantryExport>;

export function formatPantryCopy(items: readonly PantryItem[]) {
  return items.map(item => {
    const info = getPantryShoppingInfo(item);
    return [
      `${info.name}: ${item.quantity} ${item.unit} - $${item.price.toFixed(2)}`,
      `Origen: ${info.priceOrigin}`,
      ...(info.description ? [info.description] : []),
      `Dónde buscar: ${info.where}`,
      `Buscar: ${info.searchUrl}`,
      ...(info.reference ? [`${info.reference.label} (${info.reference.priceBasis ? 'referencia del estimado' : 'ficha, no fuente del estimado'}): ${info.reference.url}`] : []),
    ].join(' | ');
  }).join('\n');
}
