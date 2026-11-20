import { PriceSourceAllowlistSchema } from './schemas.mjs';

export function priceTargetKey({ storeId, productId, side }) {
  return JSON.stringify([storeId, productId, side]);
}

export function samePresentation(left, right) {
  return typeof right === 'string' && left.trim().toLowerCase() === right.trim().toLowerCase();
}

export function validatedBindings(raw, findVariant) {
  const result = PriceSourceAllowlistSchema.safeParse(raw);
  if (!result.success) {
    throw new Error(`Registro de fuentes inválido: ${result.error.issues.map(({ path }) => path.join('.')).join(', ')}`);
  }
  const bindings = new Map();
  const storesByOffer = new Map();
  for (const binding of result.data.bindings) {
    const key = priceTargetKey(binding);
    if (bindings.has(key)) throw new Error(`Vinculación duplicada: ${key}`);
    if (!samePresentation(binding.observedUnit, findVariant(binding)?.unit)) {
      throw new Error(`Destino o presentación de la vinculación no coincide con el catálogo: ${key}`);
    }
    const { merchant, channel, productUrl, sku } = binding.source;
    const offer = JSON.stringify([merchant, channel, productUrl, sku]);
    if (storesByOffer.has(offer) && storesByOffer.get(offer) !== binding.storeId) {
      throw new Error(`El registro atribuye la misma oferta a dos tiendas: ${key}`);
    }
    storesByOffer.set(offer, binding.storeId);
    bindings.set(key, binding);
  }
  return bindings;
}

export function admittedPriceUpdates(observations, bindings, findVariant) {
  const seenInstants = new Map();
  const newest = new Map();
  for (const obs of observations) {
    const key = priceTargetKey(obs);
    const binding = bindings.get(key);
    if (!binding || obs.currency !== binding.currency || obs.observedUnit !== binding.observedUnit ||
      !['merchant', 'channel', 'productUrl', 'sku'].every((field) => obs.source[field] === binding.source[field])) {
      throw new Error(`Procedencia o presentación no autorizada: ${key}`);
    }
    const instant = JSON.stringify([key, obs.scrapedAt]);
    if (seenInstants.has(instant) && seenInstants.get(instant) !== obs.price) {
      throw new Error(`Importes contradictorios para un mismo instante: ${key}`);
    }
    seenInstants.set(instant, obs.price);
    const current = findVariant(obs);
    const observedMs = Date.parse(obs.scrapedAt);
    const publishedMs = Date.parse(current.lastUpdated);
    if (observedMs === publishedMs && obs.price !== current.price) {
      throw new Error(`El importe contradice la observación ya publicada para ese instante: ${key}`);
    }
    if (observedMs <= publishedMs) continue;

    const previous = newest.get(key);
    // Fechas canónicas UTC de formato idéntico; el resultado no depende del orden de entrada.
    if (!previous || obs.scrapedAt > previous.scrapedAt) newest.set(key, obs);
  }
  return [...newest.entries()].sort(([left], [right]) => left.localeCompare(right)).map(([, obs]) => obs);
}
