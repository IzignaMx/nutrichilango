import { describe, expect, it } from 'vitest';
import { documentedPromotions, todayInMexicoCity, type PromotionEvidence } from './promotionEvidence';

const evidence: PromotionEvidence = {
  id: 'test', productIds: ['sku-1'], description: '2 por $50', conditions: 'Solo en sucursal anunciada.',
  sourceUrl: 'https://example.com/promocion', observedOn: '2026-11-27',
  validFrom: '2026-11-25', validThrough: '2026-11-30',
};
describe('Promociones con evidencia', () => {
  it('admite solo fechas y alcance explícitos, incluyendo el final de vigencia', () => {
    expect(documentedPromotions([evidence], ['sku-1'], '2026-11-30')).toEqual([evidence]);
    expect(documentedPromotions([evidence], ['sku-2'], '2026-11-28')).toEqual([]);
    expect(documentedPromotions([evidence], ['sku-1'], '2026-12-01')).toEqual([]);
    expect(documentedPromotions(undefined, ['sku-1'], '2026-11-28')).toEqual([]);
  });
  it('rechaza futuros, fechas imposibles, fuentes no HTTPS y condiciones vacías', () => {
    const bad = [
      { ...evidence, observedOn: '2026-11-29' },
      { ...evidence, validThrough: '2026-11-31' },
      { ...evidence, sourceUrl: 'javascript:alert(1)' },
      { ...evidence, sourceUrl: 'https://name:secret@example.com' },
      { ...evidence, conditions: ' ' },
      { ...evidence, validFrom: '2026-11-29' },
    ];
    expect(documentedPromotions(bad, ['sku-1'], '2026-11-28')).toEqual([]);
  });
  it('usa fecha de Ciudad de México, no medianoche UTC', () => {
    expect(todayInMexicoCity(new Date('2026-11-28T05:59:00Z'))).toBe('2026-11-27');
    expect(todayInMexicoCity(new Date('2026-11-28T06:00:00Z'))).toBe('2026-11-28');
  });
});
