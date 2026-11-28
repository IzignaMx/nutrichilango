import type { PromotionEvidence } from '@/data/promotionEvidence';

export default function PromotionNotice({ promotion }: { promotion: PromotionEvidence }) {
  return <div className="rounded-lg border border-primary/20 bg-muted/30 p-3 text-sm space-y-1">
    <p className="font-semibold">Promoción documentada: {promotion.description}</p>
    <p>{promotion.conditions}</p>
    <p className="text-xs text-muted-foreground">Consultada el {promotion.observedOn}. Vigencia publicada: {promotion.validFrom} a {promotion.validThrough}. Confirma con la tienda antes de comprar.</p>
    <a className="underline text-primary" href={promotion.sourceUrl} target="_blank" rel="noopener noreferrer">Consultar condiciones y fuente original</a>
  </div>;
}
