import type { DishCategory } from './types';

export const dishCategoryLabels: Record<DishCategory, string> = {
  all: 'Todas las categorías',
  mexican: 'Mexicano',
  popular: 'Popular',
  pastas: 'Pastas',
  'plato-fuerte': 'Plato fuerte',
  ensaladas: 'Ensaladas',
  postres: 'Postres',
  cremas: 'Cremas y lácteos',
  salsas: 'Salsas y aderezos',
  aperitivos: 'Aperitivos',
  bebidas: 'Bebidas',
};

// The numeric prefix is the stated preparation time. Unquantified waiting
// (marinado, fermentación, reposo, etc.) is not counted as zero total time.
export function statedPreparationMinutes(value: string): number {
  const match = /^(\d+(?:[.,]\d+)?)\s*(min(?:utos)?|horas?)\b/i.exec(value);
  if (!match) return Number.POSITIVE_INFINITY;
  const amount = Number(match[1].replace(',', '.'));
  return amount * (match[2].toLowerCase().startsWith('hora') ? 60 : 1);
}
