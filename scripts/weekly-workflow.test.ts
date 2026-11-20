import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const workflow = readFileSync(new URL('../.github/workflows/weekly-update.yml', import.meta.url), 'utf8');

describe('Contrato de actualización semanal', () => {
  it('usa el entorno compatible y comprueba Chromium antes de consultar fuentes', () => {
    expect(workflow).toContain('runs-on: ubuntu-24.04');
    expect(workflow).toContain('node-version: "22"');
    expect(workflow).toContain('npm exec --no -- playwright install chromium --with-deps');
    expect(workflow.indexOf('node scripts/verify-chromium.mjs')).toBeLessThan(workflow.indexOf('node scripts/scrape-data.mjs'));
  });

  it('mantiene explícitamente pausado el scraper sin unidad observada', () => {
    expect(workflow).toContain("PRICE_SCRAPING_ENABLED: 'false'");
    for (const step of ['Scrape Real Prices', 'Run Pipeline']) {
      expect(workflow).toContain(`- name: ${step}\n        if: env.PRICE_SCRAPING_ENABLED == 'true'`);
    }
  });

  it('excluye reportes y cambios de fecha sin cambios de precios del PR', () => {
    expect(workflow).toContain('node scripts/update-data.mjs > "$RUNNER_TEMP/pipeline_report.txt"');
    expect(workflow).toContain("git diff --quiet -- 'src/data/stores/*.json'");
    expect(workflow).toContain("- name: Create Pull Request\n        if: steps.data-changes.outputs.changed == 'true'");
    expect(workflow).toContain('add-paths: |\n            src/data/stores/*.json\n            src/data/metadata.ts');
    expect(workflow).not.toContain('> pipeline_report.txt');
  });
});
