import { comparableUnitPrice, economicOffers, economicGroups, rankOffers } from '@/data/prices/economicOffers';
import type { EconomicOffer, EconomicGroup } from '@/data/prices/economicOffers';

const money = (value: number) => '$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false }).format(value) + ' MXN';

function Offer({ offer, label }: { offer: EconomicOffer; label: string }) {
  const unit = comparableUnitPrice(offer);
  return <div className="rounded-lg border p-3 space-y-1 min-w-0">
    <p className="text-xs font-medium text-muted-foreground">{label}</p>
    <p className="font-semibold">{offer.name}</p>
    <p className="text-sm">{offer.presentation}</p>
    <p className="font-semibold">{money(offer.priceMXN)} por presentación</p>
    {unit !== null && <p className="text-sm">{money(unit)}/{offer.basis}{offer.preparation === 'powder' ? ' preparado' : ''}</p>}
    <a className="text-sm underline text-primary" href={offer.url} target="_blank" rel="noopener noreferrer">{offer.source}: ver oferta</a>
    <p className="text-xs text-muted-foreground">Consulta: {offer.consultedOn}</p>
    {offer.note && <p className="text-xs text-muted-foreground">{offer.note}</p>}
    {offer.yieldSource && <a className="text-xs underline" href={offer.yieldSource} target="_blank" rel="noopener noreferrer">Rendimiento del fabricante</a>}
  </div>;
}

export default function EconomicOptions({ group }: { group: EconomicGroup }) {
  const { basis, unitLabel, measure, animalLabel } = economicGroups[group];
  const animalPurchase = rankOffers(economicOffers, group, 'animal', basis, 'purchase')[0];
  const animal = rankOffers(economicOffers, group, 'animal', basis, 'unit')[0];
  const purchase = rankOffers(economicOffers, group, 'plant', basis, 'purchase')[0];
  const unit = rankOffers(economicOffers, group, 'plant', basis, 'unit')[0];
  if (!animalPurchase || !animal || !purchase || !unit) return null;
  const animalUnit = comparableUnitPrice(animal)!;
  const plantUnit = comparableUnitPrice(unit)!;
  const difference = ((plantUnit / animalUnit - 1) * 100).toFixed(1);
  const others = economicOffers.filter(offer => offer.group === group && ![animalPurchase.id, animal.id, purchase.id, unit.id].includes(offer.id));
  return <section aria-label="Opciones económicas observadas" className="space-y-4">
    <h4 className="font-semibold">Opciones económicas observadas</h4>
    <p className="text-sm text-muted-foreground">Mínimos entre las ofertas consultadas, no de todo el mercado. Precios en línea, disponibilidad y entrega sujetas a tu código postal. No se incluye envío. Comparamos {measure}, no equivalencia nutricional.</p>
    <div className="grid gap-3 md:grid-cols-3">
      <Offer offer={animal} label={`Menor costo por ${unitLabel} de ${animalLabel}`} />
      {animalPurchase.id !== animal.id && <Offer offer={animalPurchase} label="Menor desembolso animal" />}
      {purchase.id !== unit.id && <Offer offer={purchase} label="Menor desembolso vegetal" />}
      <Offer offer={unit} label={purchase.id === unit.id ? `Menor desembolso y costo vegetal por ${unitLabel}` : `Menor costo vegetal por ${unitLabel}`} />
    </div>
    <p className="text-sm">En esta muestra, la alternativa vegetal de menor costo por {unitLabel} tiene una diferencia de {difference}% frente al producto animal de menor costo por {unitLabel}. El costo de preparación y envío puede cambiar el resultado.</p>
    <details>
      <summary className="cursor-pointer text-sm font-medium">Ver otras ofertas consultadas</summary>
      <div className="grid gap-3 sm:grid-cols-2 mt-3">
        {others.map(offer => <Offer key={offer.id} offer={offer} label={offer.availability === 'unavailable' ? 'Agotado en la consulta' : offer.availability === 'unknown' ? 'Disponibilidad sin confirmar (fuera del ranking)' : 'Otra opción observada'} />)}
      </div>
    </details>
  </section>;
}

