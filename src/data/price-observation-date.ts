const mexicoCityDate = new Intl.DateTimeFormat('es-MX', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'America/Mexico_City',
});

export function formatPriceObservationDate(value: string): string {
  const date = new Date(value);
  return Number.isFinite(date.getTime()) ? mexicoCityDate.format(date) : 'no disponible';
}
