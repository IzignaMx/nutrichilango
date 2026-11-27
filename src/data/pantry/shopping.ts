import type { PantryItem } from './products';

type ShoppingReference = { label: string; url: string; priceBasis?: string };
type ShoppingDetails = {
  name?: string;
  description?: string;
  searchTerm?: string;
  where?: string;
  reference?: ShoppingReference;
};

const categoryLocations: Record<string, string> = {
  Leguminosas: 'Mercados públicos, tiendas de granos a granel y supermercados.',
  Granos: 'Tiendas de semillas y cereales a granel, supermercados y tiendas naturistas.',
  Vegetales: 'Tianguis, mercados públicos y fruterías.',
  'Frutos secos': 'Tiendas de semillas a granel, mercados y supermercados.',
  Especias: 'Puestos de especias en mercados y supermercados.',
  Aceites: 'Supermercados y tiendas naturistas.',
  'Proteínas vegetales': 'Tiendas veganas, naturistas y supermercados con sección vegetal.',
};

// Fichas comerciales revisadas el 27-11-2026. Son ejemplos para localizar
// productos: no acreditan el origen del importe estimado ni disponibilidad.
const details: Record<string, ShoppingDetails> = {
  'leg-004': {
    reference: { label: 'Walmart: frijol negro La Sierra, 1 kg', url: 'https://www.walmart.com.mx/ip/frijol-negro-la-sierra-1-kg/00750105242031' },
  },
  'leg-006': { name: 'Frijoles blancos (alubias)', searchTerm: 'frijol blanco alubias secas' },
  'gra-001': {
    reference: { label: 'Súper Naturista: quinoa Wands, 350 g', url: 'https://supernaturista.com/products/semilla-de-quinoa-400-g-wands' },
  },
  'gra-006': {
    name: 'Trigo partido precocido (bulgur)',
    description: 'Trigo quebrado, precocido y secado, usado en ensaladas como el tabule. Contiene gluten; no es lo mismo que trigo quebrado crudo.',
    searchTerm: 'trigo bulgur partido precocido',
    where: 'Tiendas de alimentos árabes o mediterráneos, importados y naturistas.',
    reference: {
      label: 'Sinai Deli: bulgur Krinos, 1 kg',
      url: 'https://shop.sinaidelibakery.com/producto/bulgur-krinos-1-kg-8535',
      priceBasis: '$70.00 MXN por 1 kg (Sinai Deli, consulta del 27/11/2026); cálculo proporcional, no precio de caja ni disponibilidad garantizada',
    },
  },
  'gra-007': { description: 'Cereal de grano pequeño. Pídelo de grado alimenticio, no como alimento para aves.', searchTerm: 'mijo pelado consumo humano', where: 'Tiendas de granos y semillas de grado alimenticio y naturistas.' },
  'veg-003': { name: 'Col rizada (kale)', searchTerm: 'col rizada kale fresca' },
  'nut-004': { name: 'Pepitas (semillas de calabaza)', searchTerm: 'pepitas de calabaza naturales' },
  'esp-003': { name: 'Paprika (pimentón dulce)', searchTerm: 'paprika pimentón dulce' },
  'esp-006': {
    description: 'Levadura inactiva en hojuelas o polvo; no es levadura para hornear.',
    where: 'Tiendas veganas y naturistas.',
    reference: { label: 'Súper Naturista: levadura nutricional Natural Wisdom, 150 g', url: 'https://supernaturista.com/products/levadura-nutricional-sab-queso-150-g-natural-wisdom' },
  },
  'ace-003': {
    name: 'Pasta de ajonjolí (tahini)',
    searchTerm: 'tahini tahine pasta de ajonjolí',
    where: 'Tiendas de alimentos árabes o mediterráneos, naturistas y supermercados.',
    reference: { label: 'Sinai Deli: tahine, 500 ml', url: 'https://shop.sinaidelibakery.com/producto/tahine-sinai-500-ml-2749' },
  },
  'pro-001': {
    description: 'Bloque de soya cuajada, busca la variedad firme.',
    reference: { label: 'Walmart: tofu firme Mori-Nu, 307 g', url: 'https://www.walmart.com.mx/ip/tofu-mori-nu-morinaga-307-g/00008569600045?classType=REGULAR' },
  },
  'pro-002': {
    name: 'Tempeh (soya fermentada)',
    description: 'Bloque de granos de soya fermentados; se prepara cocido, dorado o marinado.',
    searchTerm: 'tempeh soya fermentada',
    where: 'Tiendas veganas y productores de alimentos fermentados.',
    reference: { label: 'Vegami: tempeh de soya Rusto’s', url: 'https://vegami.com.mx/products/tempeh-rusto-s' },
  },
  'pro-003': { name: 'Soya texturizada (proteína vegetal)', searchTerm: 'soya texturizada seca', where: 'Tiendas de granos a granel, mercados y supermercados.' },
};

export function getPantryShoppingInfo(item: Pick<PantryItem, 'id' | 'name' | 'category'>) {
  const extra = details[item.id];
  const name = extra?.name ?? item.name;
  const searchTerm = extra?.searchTerm ?? name;
  return {
    name,
    searchTerm,
    description: extra?.description,
    where: extra?.where ?? categoryLocations[item.category] ?? 'Mercados, supermercados y tiendas especializadas.',
    priceOrigin: extra?.reference?.priceBasis
      ? `Estimación de NutriChilango respaldada por ${extra.reference.priceBasis}`
      : 'Estimación de NutriChilango sin cotización individual documentada',
    searchUrl: `https://www.google.com/search?q=${encodeURIComponent(`${searchTerm} comprar CDMX`)}`,
    reference: extra?.reference,
  };
}

export const PANTRY_RECIPES_PATH = '/dishes-comparison';

export type PantryShoppingInfo = ReturnType<typeof getPantryShoppingInfo>;
