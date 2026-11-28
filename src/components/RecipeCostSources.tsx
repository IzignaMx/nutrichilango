import { recipeCostEvidence } from '@/data/prices/recipeCostEvidence';
import type { Recipe } from '@/data/types';

const money = (value: number) => '$' + new Intl.NumberFormat('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value) + ' MXN';

export default function RecipeCostSources({ recipe }: { recipe: Recipe }) {
  const result = recipeCostEvidence(recipe);
  if (!result) return null;
  return <section className="rounded-lg border p-4 space-y-3" aria-label="Costos con referencias consultadas">
    <h3 className="font-semibold text-lg">Costos con referencias consultadas</h3>
    <p className="text-sm text-muted-foreground">{result.matched} de {result.rows.length} ingredientes con referencia directa. Se usa el menor costo unitario observado para cada ingrediente, no el mínimo de todo el mercado. Precios sin envío y sujetos a código postal, vigencia y existencias.</p>
    <ul className="space-y-3">
      {result.rows.map(({ ingredient, offer, proportionalCost }, index) => <li key={index} className="border-b pb-2">
        <p className="font-medium">{ingredient.name}: {ingredient.amount} {ingredient.unit}</p>
        {offer && proportionalCost !== null ? <>
          <p className="text-sm">{offer.name}: {money(offer.priceMXN)} por {offer.amount} {offer.unit} · cantidad usada: {money(proportionalCost)}</p>
          <a href={offer.url} target="_blank" rel="noopener noreferrer" className="text-sm underline text-primary">{offer.source}: ficha consultada el {offer.consultedOn}</a>
        </> : <p className="text-sm text-muted-foreground">Sin referencia comparable.</p>}
      </li>)}
    </ul>
    <p className="font-semibold">{result.complete ? 'Subtotal de los ingredientes indicados' : 'Subtotal parcial de ingredientes documentados'}: {money(result.subtotal)}</p>
    <p className="text-sm">{result.complete ? 'Desembolso si compras todos estos paquetes desde cero' : 'Desembolso parcial por paquetes documentados'}: {money(result.basketCost)}</p>
    <p className="text-xs text-muted-foreground">Estimación, no cotización. No incluye energía, tiempo, envío, agua adicional del remojo ni pérdidas. El rendimiento final no se ha medido; no se presenta como costo por kilo de tofu ni como comparación directa con una presentación comercial.</p>
  </section>;
}
