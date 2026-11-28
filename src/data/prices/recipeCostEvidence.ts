import type { Recipe } from '@/data/types';

export interface IngredientOffer {
  id: string;
  name: string;
  priceMXN: number;
  amount: number;
  unit: 'g' | 'ml' | 'pieza';
  source: string;
  url: string;
  consultedOn: string;
  availability: 'listed' | 'unknown' | 'unavailable';
}

interface IngredientMatch {
  recipeId: string;
  name: string;
  amount: number;
  unit: string;
  offers: readonly IngredientOffer[];
}

const date = '2026-11-28';
export const recipeIngredientMatches: readonly IngredientMatch[] = [
  { recipeId: 'homemade-tofu-1', name: 'Frijol de soya seco', amount: 200, unit: 'g', offers: [
    { id: 'clickabasto-soya-1kg', name: 'Frijol de soya Click Abasto', priceMXN: 43.2, amount: 1000, unit: 'g', source: 'Click Abasto', url: 'https://clickabasto.com/products/frijol-soya-por-1-kg', consultedOn: date, availability: 'listed' },
    { id: 'consuma-soya-1kg', name: 'Frijol de soya Ser Orgánico', priceMXN: 81, amount: 1000, unit: 'g', source: 'ConSuma Conciencia', url: 'https://consumaconciencia.com/producto/frijol-soya-500gr-agroecologico-granel-copia/', consultedOn: date, availability: 'listed' },
  ] },
  { recipeId: 'homemade-tofu-1', name: 'Agua', amount: 1500, unit: 'ml', offers: [
    { id: 'walmart-epura-5l', name: 'Agua purificada Epura', priceMXN: 23, amount: 5000, unit: 'ml', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/Agua-Epura-5-l/00750108680113', consultedOn: date, availability: 'listed' },
  ] },
  { recipeId: 'homemade-tofu-1', name: 'Vinagre blanco o limón', amount: 60, unit: 'ml', offers: [
    { id: 'walmart-cj-vinegar-1l', name: 'Vinagre blanco Clemente Jacques', priceMXN: 16, amount: 1000, unit: 'ml', source: 'Walmart en línea', url: 'https://kiosco.www.walmart.com.mx/ip/vinagre-blanco-clemente-jacques-de-alcohol-de-cana-1-l/00750105247501?classType=REGULAR', consultedOn: date, availability: 'listed' },
    { id: 'walmart-gv-vinegar-1l', name: 'Vinagre blanco Great Value', priceMXN: 13.5, amount: 1000, unit: 'ml', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/vinagre-blanco-great-value-de-cana-1-l/00750649500817', consultedOn: date, availability: 'unavailable' },
  ] },
  { recipeId: 'homemade-tofu-1', name: 'Sal', amount: 5, unit: 'g', offers: [
    { id: 'walmart-lafina-salt-1100', name: 'Sal yodada La Fina', priceMXN: 30, amount: 1100, unit: 'g', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/sal-yodada-la-fina-fluorurada-natural-1-1-kg/00003458709158?classType=REGULAR', consultedOn: date, availability: 'listed' },
  ] },
];

export function recipeCostEvidence(recipe: Pick<Recipe, 'id' | 'ingredients'>, matches = recipeIngredientMatches) {
  const rows = recipe.ingredients.map(ingredient => {
    const match = matches.find(item => item.recipeId === recipe.id && item.name === ingredient.name && item.amount === ingredient.amount && item.unit === ingredient.unit);
    const candidates = (match?.offers ?? []).filter(offer => offer.availability === 'listed' &&
      offer.unit === ingredient.unit && Number.isFinite(offer.priceMXN) && offer.priceMXN > 0 &&
      Number.isFinite(offer.amount) && offer.amount > 0 && Number.isFinite(ingredient.amount) && ingredient.amount > 0);
    candidates.sort((a, b) => a.priceMXN / a.amount - b.priceMXN / b.amount || a.priceMXN - b.priceMXN || a.id.localeCompare(b.id));
    const offer = candidates[0];
    return { ingredient, offer, proportionalCost: offer ? ingredient.amount * offer.priceMXN / offer.amount : null };
  });
  const matched = rows.filter(row => row.offer !== undefined);
  if (matched.length === 0) return null;
  const subtotal = matched.reduce((sum, row) => sum + (row.proportionalCost ?? 0), 0);
  const requirements = new Map<string, { offer: IngredientOffer; amount: number }>();
  for (const row of matched) {
    if (!row.offer) continue;
    const previous = requirements.get(row.offer.id);
    requirements.set(row.offer.id, { offer: row.offer, amount: (previous?.amount ?? 0) + row.ingredient.amount });
  }
  const basketCost = [...requirements.values()].reduce((sum, { offer, amount }) =>
    sum + Math.ceil(amount / offer.amount) * offer.priceMXN, 0);
  return { rows, matched: matched.length, complete: matched.length === rows.length, subtotal, basketCost };
}
