import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const workflow = readFileSync(new URL('../.github/workflows/weekly-update.yml', import.meta.url), 'utf8');

const archiveWorkflow = readFileSync(new URL('../.github/workflows/profeco-archive-audit.yml', import.meta.url), 'utf8');

describe('Contrato de actualización semanal', () => {
  it('consolida la programación en un solo workflow y conserva la auditoría bajo demanda', () => {
    expect(workflow).not.toMatch(/^\s*schedule:/m);
    expect(workflow).toContain('workflow_dispatch:');
    expect(archiveWorkflow).toContain('schedule:\n    - cron: "23 12 * * 1"');
    expect(archiveWorkflow.match(/^\s*cron:/gm) ?? []).toHaveLength(0);
    expect(archiveWorkflow.match(/- cron:/g) ?? []).toHaveLength(1);
    expect(archiveWorkflow).toContain('permissions:\n  contents: read');
    expect(archiveWorkflow).toContain('persist-credentials: false');
    expect(archiveWorkflow).toContain('steps.cache-read.outputs.reused != \'true\'');
    expect(archiveWorkflow).toContain('name: price-source-report');
    expect(archiveWorkflow).not.toContain('create-pull-request');
    expect(archiveWorkflow).not.toContain('contents: write');
  });

  it('usa runner hospedado y no instala Chromium para la consulta CSV', () => {
    expect(workflow).toContain('runs-on: ubuntu-24.04');
    expect(workflow).toContain('timeout-minutes: 5');
    expect(workflow).not.toContain('playwright install');
  });

  it('mantiene recolección independiente de publicación y sin permisos de escritura', () => {
    expect(workflow).toContain('permissions:\n  contents: read');
    expect(workflow).toContain('persist-credentials: false');
    expect(workflow).not.toContain('scripts/scrape-data.mjs');
    expect(workflow).not.toContain('scripts/update-data.mjs');
    expect(workflow).not.toContain('create-pull-request');
    expect(workflow).not.toContain('contents: write');
  });

  it('prueba el contrato en PR y conserva evidencia limitada de las consultas programadas', () => {
    expect(workflow).toContain('pull_request:');
    expect(workflow).toContain('python3 -m unittest discover');
    expect(workflow).toContain("if: github.event_name != 'pull_request'");
    expect(workflow).toContain('actions/upload-artifact@v4');
    expect(workflow).toContain('retention-days: 14');
  });
});
