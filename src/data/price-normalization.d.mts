export type PriceBasis = 'kg' | 'L' | 'pieza' | 'taco' | 'equivalente';
type ComparablePrice = { unit: string; pricePerUnit: number | null };

export function parsePackage(unit: unknown): { size: number; basis: PriceBasis } | null;
export function toUnitPrice(price: number, label: unknown): number | null;
export function compareSameBasis(a: ComparablePrice, b: ComparablePrice): number | null;
export function compareGroupedUnitPrice(a: ComparablePrice, b: ComparablePrice): number;
