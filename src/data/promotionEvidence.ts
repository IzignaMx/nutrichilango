export interface PromotionEvidence {
  id: string;
  productIds: readonly string[];
  description: string;
  conditions: string;
  sourceUrl: string;
  observedOn: string;
  validFrom: string;
  validThrough: string;
}

function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + 'T00:00:00.000Z');
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function validSource(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !!url.hostname && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function todayInMexicoCity(now = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Mexico_City', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const get = (kind: string) => parts.find(part => part.type === kind)?.value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}

/** A legacy flag is not evidence. Only a dated, explicitly scoped source qualifies. */
export function documentedPromotions(
  entries: readonly PromotionEvidence[] | undefined,
  productIds: readonly string[],
  today = todayInMexicoCity(),
): PromotionEvidence[] {
  if (!validDate(today)) return [];
  return (entries ?? []).filter(entry =>
    !!entry.id.trim() && !!entry.description.trim() && !!entry.conditions.trim() &&
    validSource(entry.sourceUrl) &&
    [entry.observedOn, entry.validFrom, entry.validThrough].every(validDate) &&
    entry.validFrom <= today && today <= entry.validThrough &&
    entry.observedOn <= today && entry.observedOn >= entry.validFrom &&
    entry.productIds.some(id => productIds.includes(id))
  );
}
