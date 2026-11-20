// El denominador siempre se obtiene de la presentación declarada, nunca del precio previo.
export function parsePackage(unit) {
  if (typeof unit !== 'string') return null;
  const label = unit.trim().toLowerCase();
  const measured = /^(?:(?:[1-9]\d*)\s+piezas?\s*\()?([0-9]+(?:[.,][0-9]+)?)?\s*(kg|g|l|ml)(\))?$/.exec(label);
  if (measured) {
    const [, quantity, measure, closing] = measured;
    const bundled = label.includes('(');
    if (bundled !== Boolean(closing) || (bundled && !quantity)
        || (!quantity && measure !== 'kg' && measure !== 'l')) return null;
    const amount = quantity ? Number(quantity.replace(',', '.')) : 1;
    const size = ['g', 'ml'].includes(measure) ? amount / 1000 : amount;
    if (!Number.isFinite(size) || size <= 0) return null;
    return { size, basis: ['kg', 'g'].includes(measure) ? 'kg' : 'L' };
  }
  const count = /^([1-9]\d*)\s+(piezas?|tacos?|equivalentes?)$/.exec(label);
  if (!count || !Number.isSafeInteger(Number(count[1]))) return null;
  return { size: Number(count[1]), basis: count[2].replace(/s$/, '') };
}

export function toUnitPrice(price, label) {
  const pkg = parsePackage(label);
  if (!pkg || !Number.isFinite(price) || price <= 0) return null;
  const result = price / pkg.size;
  return Number.isFinite(result) ? Number(result.toFixed(2)) : null;
}

export function compareSameBasis(a, b) {
  const left = parsePackage(a.unit);
  if (!left || left.basis !== parsePackage(b.unit)?.basis
      || !Number.isFinite(a.pricePerUnit) || !Number.isFinite(b.pricePerUnit)) return null;
  return a.pricePerUnit - b.pricePerUnit;
}

// El orden visual agrupa las unidades, sin clasificar litros frente a kilogramos.
export function compareGroupedUnitPrice(a, b) {
  const basis = (product) => Number.isFinite(product.pricePerUnit) ? parsePackage(product.unit)?.basis : null;
  const left = basis(a);
  const right = basis(b);
  if (!left || !right) return Number(!left) - Number(!right);
  return left.localeCompare(right) || (compareSameBasis(a, b) ?? 0);
}
