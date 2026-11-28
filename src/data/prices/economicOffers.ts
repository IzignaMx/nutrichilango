export type OfferSide = 'animal' | 'plant';
export type OfferBasis = 'L' | 'kg' | 'pieza';
export interface EconomicOffer {
  id: string;
  group: string;
  side: OfferSide;
  name: string;
  presentation: string;
  priceMXN: number;
  quantity: number;
  basis: OfferBasis;
  preparation: 'ready' | 'powder';
  source: string;
  url: string;
  consultedOn: string;
  availability: 'listed' | 'unavailable' | 'unknown';
  yieldSource?: string;
  note?: string;
}

export function comparableUnitPrice(offer: EconomicOffer): number | null {
  if (!Number.isFinite(offer.priceMXN) || offer.priceMXN <= 0 ||
      !Number.isFinite(offer.quantity) || offer.quantity <= 0 ||
      (offer.preparation === 'powder' && !offer.yieldSource)) return null;
  const value = offer.priceMXN / offer.quantity;
  return Number.isFinite(value) ? value : null;
}

export function rankOffers(
  offers: readonly EconomicOffer[], group: string, side: OfferSide, basis: OfferBasis,
  mode: 'purchase' | 'unit', budget = Infinity,
): EconomicOffer[] {
  return offers.filter(offer => offer.group === group && offer.side === side && offer.basis === basis &&
    offer.availability === 'listed' && offer.priceMXN <= budget && comparableUnitPrice(offer) !== null)
    .sort((a, b) => {
      const unitDifference = comparableUnitPrice(a)! - comparableUnitPrice(b)!;
      return (mode === 'purchase' ? a.priceMXN - b.priceMXN || unitDifference :
        unitDifference || a.priceMXN - b.priceMXN) || a.id.localeCompare(b.id);
    });
}

const group = 'milk-soy';
const consultedOn = '2026-11-27';
export const economicOffers: readonly EconomicOffer[] = [
  { id: 'walmart-gv-milk-1l', group, side: 'animal', name: 'Great Value leche entera', presentation: '1 L', priceMXN: 20, quantity: 1, basis: 'L', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/leche-great-value-entera-1-l/00750649501422', consultedOn, availability: 'listed' },
  { id: 'walmart-lala-milk-1l', group, side: 'animal', name: 'Lala leche entera UHT', presentation: '1 L', priceMXN: 30, quantity: 1, basis: 'L', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/leche-lala-entera-1-l/00750102056593', consultedOn, availability: 'listed' },
  { id: 'walmart-gv-soy-1l', group, side: 'plant', name: 'Great Value soya sin azúcar', presentation: '1 L', priceMXN: 35, quantity: 1, basis: 'L', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/alimento-liquido-great-value-soya-sin-azucar-1-l/00750649500695?classType=REGULAR', consultedOn, availability: 'listed' },
  { id: 'walmart-ades-946', group, side: 'plant', name: 'AdeS soya natural', presentation: '946 ml', priceMXN: 40, quantity: 0.946, basis: 'L', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/alimento-liquido-ades-de-soya-sabor-natural-946-ml/00750100510272', consultedOn, availability: 'listed', note: 'Presentación natural con sellos de exceso de azúcares y sodio.' },
  { id: 'walmart-silk-946', group, side: 'plant', name: 'Silk soya sin azúcar', presentation: '946 ml', priceMXN: 47, quantity: 0.946, basis: 'L', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/bebida-vegetal-silk-sabor-soya-sin-azucar-946-ml/00750103239986', consultedOn, availability: 'listed' },
  { id: 'soyamigo-symken-1080', group, side: 'plant', name: 'Symkën soya natural en polvo', presentation: '1,080 g (rinde 12 L según fabricante)', priceMXN: 298.38, quantity: 12, basis: 'L', preparation: 'powder', source: 'Soyamigo (fabricante)', url: 'https://soyamigo.com/products/symken-natural-1080g', consultedOn, availability: 'listed', yieldSource: 'https://soyamigo.com/products/symken-natural-1080g', note: 'Requiere agua y preparación; no incluye el envío ni el costo del agua.' },
  { id: 'walmart-symken-1080', group, side: 'plant', name: 'Symkën soya natural en polvo', presentation: '1,080 g (rinde 12 L según fabricante)', priceMXN: 235, quantity: 12, basis: 'L', preparation: 'powder', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/bebida-en-polvo-symken-soya-natural-1-080-g/00066195173210', consultedOn, availability: 'unavailable', yieldSource: 'https://soyamigo.com/products/symken-natural-1080g', note: 'La ficha consultada mostraba agotado; excluida de las recomendaciones.' },
];

export function economicGroup(product: { category: string; comparisonType: string; traditional: { name: string }; plantBased: { name: string } }): string | null {
  return product.category === 'dairy' && product.comparisonType === 'animal-vs-commercial' &&
    product.traditional.name === 'Leche Entera' && product.plantBased.name === 'Leche de Soya' ? group : null;
}
