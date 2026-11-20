import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const workflow = readFileSync(new URL('../.github/workflows/weekly-update.yml', import.meta.url), 'utf8');

describe('Contrato de validación semanal de precios', () => {
  it('ejecuta el mismo verificador local en horario fijo, a demanda y al revisar cambios', () => {
    expect(workflow).toContain('schedule:');
    expect(workflow).toContain('workflow_dispatch:');
    expect(workflow).toContain('pull_request:');
    expect(workflow).toContain('runs-on: ubuntu-24.04');
    expect(workflow).toContain('node-version: "22"');
    expect(workflow).toContain('node --test scripts/lib/price-*.node.mjs');
    expect(workflow).toContain('node scripts/update-data.mjs --check-allowlist');
  });

  it('no conserva un camino configurable a un extractor, un PR automático o un despliegue', () => {
    expect(workflow).toContain('permissions:\n  contents: read');
    expect(workflow).toContain('persist-credentials: false');
    expect(workflow).not.toMatch(/\b(?:contents|pull-requests|pages): write/);
    expect(workflow).not.toMatch(/PRICE_SCRAPING_ENABLED|scrape-data\.mjs|create-pull-request|deploy-pages|GITHUB_TOKEN/);
    expect(workflow.match(/run: node scripts\/update-data\.mjs[^\n]*/g)).toEqual([
      'run: node scripts/update-data.mjs --check-allowlist',
    ]);
    expect(workflow).toContain('git diff --exit-code -- src/data/stores src/data/metadata.ts');
  });
});
