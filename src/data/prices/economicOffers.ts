export type OfferSide = 'animal' | 'plant' | 'plant-standard' | 'plant-organic' | 'plant-natural' | 'plant-smoked';
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
  pricing?: 'package' | 'variable-weight';
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
    offer.availability === 'listed' && (offer.pricing === 'variable-weight' ? mode === 'unit' && budget === Infinity : offer.priceMXN <= budget) && comparableUnitPrice(offer) !== null)
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
  { id: 'walmart-marketside-beef-500', group: 'ground-meat', side: 'animal', name: 'Marketside res molida 80/20', presentation: '500 g', priceMXN: 62, quantity: 0.5, basis: 'kg', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/molida-de-res-80-20-marketside-500-g/00750649506996', consultedOn: '2026-11-28', availability: 'listed' },
  { id: 'walmart-beyond-beef-453', group: 'ground-meat', side: 'plant', name: 'Beyond Beef molida vegetal', presentation: '453 g', priceMXN: 222, quantity: 0.453, basis: 'kg', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/Alimento-Vegano-Beyond-Beef-Tipo-Carne-Molida-Congelada-453-g/00085000420709', consultedOn: '2026-11-28', availability: 'listed' },
  { id: 'veganlabel-veggie-express-molida', group: 'ground-meat', side: 'plant', name: 'Veggie Express molida de quinoa y soya', presentation: '450 g', priceMXN: 105, quantity: 0.45, basis: 'kg', preparation: 'ready', source: 'Vegan Label', url: 'https://www.veganlabel.mx/collections/veggie-express/products/carne-molida-de-quinooa-veggie-express-450-g', consultedOn: '2026-11-28', availability: 'listed' },
  { id: 'mrtofu-colpac-molida-500', group: 'ground-meat', side: 'plant', name: 'Colpac carne molida vegetal', presentation: '500 g', priceMXN: 114, quantity: 0.5, basis: 'kg', preparation: 'ready', source: 'Mr. Tofu', url: 'https://mrtofu.com/products/colpac-carne-molida', consultedOn: '2026-11-28', availability: 'unknown', note: 'Copia de la ficha antigua; confirmar precio, ingredientes y existencia.' },
  { id: 'walmart-bachoco-nuggets-500', group: 'nuggets', side: 'animal', name: 'Bachoco nuggets de pollo', presentation: '500 g', priceMXN: 109, quantity: 0.5, basis: 'kg', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/nuggets-de-pechuga-de-pollo-bachoco-500g/00750110154633', consultedOn: '2026-11-28', availability: 'listed' },
  { id: 'walmart-pilgrims-nuggets-700', group: 'nuggets', side: 'animal', name: "Pilgrim’s nuggets de pollo", presentation: '700 g', priceMXN: 119, quantity: 0.7, basis: 'kg', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/nuggets-de-pollo-pilgrim-s-700-g/00750200471661', consultedOn: '2026-11-28', availability: 'listed', note: 'La ficha consultada mostraba una rebaja; no consta su vigencia.' },
  { id: 'walmart-beyond-nuggets-250', group: 'nuggets', side: 'plant', name: 'Beyond Meat nuggets veganos', presentation: '250 g', priceMXN: 162, quantity: 0.25, basis: 'kg', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/Nuggets-Veganos-Sabor-Pollo-Beyond-Meat-Congelados-250-g/00750046227557', consultedOn: '2026-11-28', availability: 'listed' },
  { id: 'walmart-notco-nuggets-400', group: 'nuggets', side: 'plant', name: 'NotCo NotChicken nuggets', presentation: '400 g', priceMXN: 36, quantity: 0.4, basis: 'kg', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/Nuggets-a-base-de-vegetales-NotCo-Not-Chicken-sabor-pollo-400-g/00750046483930', consultedOn: '2026-11-28', availability: 'unavailable', note: 'Agotado en la ficha consultada.' },
  { id: 'abasto-futopia-nuggets-750', group: 'nuggets', side: 'plant', name: 'Futopia Mega Nuggets', presentation: '750 g', priceMXN: 185, quantity: 0.75, basis: 'kg', preparation: 'ready', source: 'Abasto Vegano', url: 'https://abastovegano.com/products/mega-nuggets-750g-futopia', consultedOn: '2026-11-28', availability: 'unknown', note: 'La ficha contiene señales contradictorias de inventario; confirmar antes de comprar.' },
  { id: 'abasto-plantsquad-nuggets-460', group: 'nuggets', side: 'plant', name: 'Plant Squad nuggets sin pollo', presentation: '460 g', priceMXN: 162, quantity: 0.46, basis: 'kg', preparation: 'ready', source: 'Abasto Vegano', url: 'https://abastovegano.com/collections/sustitutos-de-pollo-y-huevo/products/nuggets-sin-pollo-460g-plant-squad', consultedOn: '2026-11-28', availability: 'unknown', note: 'La ficha contiene señales contradictorias de inventario; confirmar antes de comprar.' },
  { id: 'veganlabel-notco-nuggets-400', group: 'nuggets', side: 'plant', name: 'NotCo NotChicken nuggets', presentation: '400 g', priceMXN: 139, quantity: 0.4, basis: 'kg', preparation: 'ready', source: 'Vegan Label', url: 'https://www.veganlabel.mx/products/nuggets-veganos-not-chicken-nuggest-notco-300-g', consultedOn: '2026-11-28', availability: 'unknown', note: 'Copia de la ficha antigua; confirmar importe y existencia.' },
  { id: 'walmart-chicken-breast-kg', group: 'chicken-tempeh', side: 'animal', name: 'Pechuga de pollo importada sin hueso', presentation: 'Charola de peso variable (aprox. 700–800 g)', priceMXN: 155, quantity: 1, basis: 'kg', preparation: 'ready', pricing: 'variable-weight', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/pechuga-sin-hueso-importada-por-kg/00020127400000?classType=REGULAR', consultedOn: '2026-11-28', availability: 'listed', note: 'Importe final según el peso real; no es precio de una charola.' },
  { id: 'greenparadise-tempeh-250', group: 'chicken-tempeh', side: 'plant', name: 'Rusto’s tempeh Bintang', presentation: '250 g', priceMXN: 89, quantity: 0.25, basis: 'kg', preparation: 'ready', source: 'Green Paradise (Santa Cruz Atoyac, CDMX)', url: 'https://greenparadise.com.mx/catalogo/tempeh-bintag-rusto-s-250-g-.html', consultedOn: '2026-11-28', availability: 'listed', note: 'La copia consultada indicaba 19 en existencia; puede haber cambiado.' },
  { id: 'veganlabel-tempeh-500', group: 'chicken-tempeh', side: 'plant', name: 'Bintang tempeh de soya', presentation: '500 g', priceMXN: 145, quantity: 0.5, basis: 'kg', preparation: 'ready', source: 'Vegan Label', url: 'https://www.veganlabel.mx/products/tempeh-bintang-500-g', consultedOn: '2026-11-28', availability: 'listed', note: 'La copia consultada indicaba 12 en existencia; confirma precio y stock.' },
  { id: 'abasto-tempeh-250', group: 'chicken-tempeh', side: 'plant', name: 'Rusto’s tempeh', presentation: '250 g', priceMXN: 91, quantity: 0.25, basis: 'kg', preparation: 'ready', source: 'Abasto Vegano', url: 'https://abastovegano.com/products/tempeh-250-g-rusto-s', consultedOn: '2026-11-28', availability: 'unknown', note: 'La ficha muestra señales contradictorias de existencia.' },
  { id: 'walmart-gv-almond-1l', group: 'almond-milk', side: 'plant-standard', name: 'Great Value almendra sin azúcar', presentation: '1 L', priceMXN: 35, quantity: 1, basis: 'L', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/alimento-liquido-de-almendra-great-value-sin-azucar-1-l/00750179161417', consultedOn: '2026-11-28', availability: 'listed', note: 'Bebida de almendra sin azúcar según la ficha; no se comprobó certificación vegana.' },
  { id: 'walmart-silk-almond-946', group: 'almond-milk', side: 'plant-standard', name: 'Silk almendra sin azúcar', presentation: '946 ml', priceMXN: 48, quantity: 0.946, basis: 'L', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/bebida-vegetal-silk-sabor-almendra-sin-azucar-946-ml/00002529300292', consultedOn: '2026-11-28', availability: 'listed' },
  { id: 'walmart-gud-almond-organic-1l', group: 'almond-milk', side: 'plant-organic', name: 'Güd almendras orgánica', presentation: '1 L', priceMXN: 55, quantity: 1, basis: 'L', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/alimento-liquido-de-almendras-gud-organico-1-l/00750163930841?classType=REGULAR', consultedOn: '2026-11-28', availability: 'listed', note: 'Orgánica según la ficha de la tienda; no se verificó certificado independiente.' },
  { id: 'veganlabel-gud-almond-1l', group: 'almond-milk', side: 'plant-organic', name: 'Güd almendra sin azúcar', presentation: '1 L', priceMXN: 65, quantity: 1, basis: 'L', preparation: 'ready', source: 'Vegan Label', url: 'https://www.veganlabel.mx/products/leche-de-almendra-sin-azucar-gud-1-l', consultedOn: '2026-11-28', availability: 'unknown', note: 'Ficha antigua con stock sin confirmar; ingredientes indican pasta de almendras orgánica.' },
  { id: 'veganlabel-house-tofu-396', group: 'tofu-varieties', side: 'plant-natural', name: 'House Foods tofu firme', presentation: '396 g', priceMXN: 69, quantity: 0.396, basis: 'kg', preparation: 'ready', source: 'Vegan Label', url: 'https://www.veganlabel.mx/products/tofu-organico-firme-house-food-396-g', consultedOn: '2026-11-28', availability: 'listed', note: 'La copia consultada tenía existencia; peso de la ficha individual, no del listado de colección.' },
  { id: 'walmart-house-tofu-396', group: 'tofu-varieties', side: 'plant-natural', name: 'House Foods tofu firme', presentation: '396 g', priceMXN: 79, quantity: 0.396, basis: 'kg', preparation: 'ready', source: 'Walmart en línea', url: 'https://www.walmart.com.mx/ip/tofu-de-soya-house-foods-firme-396-g/00007637101109', consultedOn: '2026-11-28', availability: 'listed' },
  { id: 'greenparadise-vegami-500', group: 'tofu-varieties', side: 'plant-natural', name: 'Vegami tofu extra firme artesanal', presentation: '500 g', priceMXN: 89, quantity: 0.5, basis: 'kg', preparation: 'ready', source: 'Green Paradise (CDMX)', url: 'https://greenparadise.com.mx/catalogo/tofu-extra-firme-artesanal-vegami-500-g-.html', consultedOn: '2026-11-28', availability: 'listed' },
  { id: 'veganlabel-empatika-natural-1kg', group: 'tofu-varieties', side: 'plant-natural', name: 'Empátika tofu natural', presentation: '1 kg', priceMXN: 159, quantity: 1, basis: 'kg', preparation: 'ready', source: 'Vegan Label', url: 'https://www.veganlabel.mx/products/tofu-natural-empatika-1-kg', consultedOn: '2026-11-28', availability: 'listed', note: 'El fabricante describe su tofu natural como extra firme: https://empatika.shop/.' },
  { id: 'veganlabel-empatika-natural-400', group: 'tofu-varieties', side: 'plant-natural', name: 'Empátika tofu natural', presentation: '400 g', priceMXN: 75, quantity: 0.4, basis: 'kg', preparation: 'ready', source: 'Vegan Label', url: 'https://www.veganlabel.mx/products/tofu-natural-empatika-400-g', consultedOn: '2026-11-28', availability: 'listed' },
  { id: 'veganlabel-empatika-smoked-400', group: 'tofu-varieties', side: 'plant-smoked', name: 'Empátika tofu ahumado', presentation: '400 g', priceMXN: 75, quantity: 0.4, basis: 'kg', preparation: 'ready', source: 'Vegan Label', url: 'https://www.veganlabel.mx/products/tofu-ahumado-empatika-400-g', consultedOn: '2026-11-28', availability: 'listed' },
  { id: 'veganlabel-empatika-smoked-1kg', group: 'tofu-varieties', side: 'plant-smoked', name: 'Empátika tofu ahumado', presentation: '1 kg', priceMXN: 159, quantity: 1, basis: 'kg', preparation: 'ready', source: 'Vegan Label', url: 'https://www.veganlabel.mx/products/tofu-ahumado-empatika-1-kg', consultedOn: '2026-11-28', availability: 'listed', note: 'Precio regular de referencia; la ficha mostraba $143.10 sin vigencia verificable. No se incorpora esa rebaja al ranking.' },
];

export const economicGroups = {
  'almond-milk': { basis: 'L', unitLabel: 'litro', measure: 'volumen de bebida de almendra', plantSides: ['plant-standard', 'plant-organic'], firstLabel: 'bebida de almendra sin azúcar', secondLabel: 'bebida anunciada como orgánica', caveat: 'No se certificó su carácter orgánico o vegano de manera independiente.' },
  'tofu-varieties': { basis: 'kg', unitLabel: 'kilogramo', measure: 'peso comercial de tofu natural firme o ahumado', plantSides: ['plant-natural', 'plant-smoked'], firstLabel: 'tofu natural firme', secondLabel: 'tofu ahumado', caveat: 'El contenido de agua y la textura pueden variar; no se comparan proteínas ni peso escurrido.' },
  'milk-soy': { basis: 'L', unitLabel: 'litro', measure: 'volumen de bebida', animalLabel: 'leche animal' },
  'ground-meat': { basis: 'kg', unitLabel: 'kilogramo', measure: 'peso del producto en su presentación comercial', animalLabel: 'carne molida animal' },
  'nuggets': { basis: 'kg', unitLabel: 'kilogramo', measure: 'peso de nuggets comerciales antes de cocinar', animalLabel: 'nuggets de pollo' },
  'chicken-tempeh': { basis: 'kg', unitLabel: 'kilogramo', measure: 'peso de la pechuga sin hueso y del tempeh antes de cocinar', animalLabel: 'pechuga de pollo' },
} as const;

export type EconomicGroup = keyof typeof economicGroups;

export function economicGroup(product: { category: string; comparisonType: string; traditional: { name: string }; plantBased: { name: string } }): EconomicGroup | null {
  if (product.comparisonType === 'commercial-vs-commercial' && product.category === 'dairy' && product.traditional.name === 'Leche de Almendra Sin Azúcar' && product.plantBased.name === 'Leche de Almendra Orgánica') return 'almond-milk';
  if (product.comparisonType === 'commercial-vs-commercial' && product.category === 'proteins' && product.traditional.name === 'Tofu Natural Firme' && product.plantBased.name === 'Tofu Ahumado') return 'tofu-varieties';
  if (product.comparisonType !== 'animal-vs-commercial') return null;
  if (product.category === 'dairy' && product.traditional.name === 'Leche Entera' && product.plantBased.name === 'Leche de Soya') return 'milk-soy';
  if (product.category === 'proteins' && product.traditional.name === 'Carne de Res Molida' && product.plantBased.name === 'Carne Plant-Based') return 'ground-meat';
  if (product.category === 'proteins' && product.traditional.name === 'Pechuga de Pollo' && product.plantBased.name === 'Tempeh de Soya') return 'chicken-tempeh';
  if (product.category === 'proteins' && product.traditional.name === 'Pollo para Nuggets' && product.plantBased.name === 'Nuggets Plant-Based') return 'nuggets';
  return null;
}


