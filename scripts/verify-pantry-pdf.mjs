import assert from 'node:assert/strict';
import { open } from 'node:fs/promises';

// Se instala antes de navegar para observar las restricciones del HTML de producción.
export async function assertPantryPDF(page) {
  await page.addInitScript(() => {
    window.pantryPDFViolations = [];
    document.addEventListener('securitypolicyviolation', ({ effectiveDirective, blockedURI }) => {
      if (['script-src', 'frame-src', 'child-src', 'object-src'].includes(effectiveDirective)) {
        window.pantryPDFViolations.push([effectiveDirective, blockedURI]);
      }
    });
  });
  const requests = [];
  const failures = [];
  page.on('request', request => requests.push(new URL(request.url()).pathname));
  page.on('pageerror', error => failures.push(error.message));

  return async ({ activateWithEnter, expectedFilename }) => {
    const clipboard = (await page.evaluate(() => navigator.clipboard.readText())).split('\n');
    const names = clipboard.map(line => line.split(': ', 1)[0]);
    const prompt = page.getByRole('button', { name: 'Vista Previa', exact: true });
    await activateWithEnter('Vista Previa');
    const dialog = page.getByRole('dialog', { name: 'Vista Previa de tu Despensa' });
    await dialog.getByRole('heading', { name: 'Lista de Despensa Vegana' }).waitFor();
    assert.equal(await dialog.locator('iframe, object, embed').count(), 0);
    assert.equal(await dialog.getByText(/^Total estimado: \$\d+\.\d{2} MXN$/).count(), 1);
    for (const name of names) {
      assert.equal(await dialog.getByText(name, { exact: true }).count(), 1, name);
    }
    assert.equal(requests.some(path => path.includes('/pantry-pdf-')), false);
    await page.keyboard.press('Escape');
    await dialog.waitFor({ state: 'hidden' });
    await prompt.and(page.locator(':focus')).waitFor();

    const [download] = await Promise.all([
      page.waitForEvent('download', { timeout: 10000 }),
      activateWithEnter('PDF'),
    ]);
    assert.equal(download.suggestedFilename(), expectedFilename);
    const file = await open(await download.path(), 'r');
    try {
      const bytes = Buffer.alloc(5);
      await file.read(bytes, 0, bytes.length, 0);
      assert.equal(bytes.toString('ascii'), '%PDF-');
      assert.ok((await file.stat()).size > 1000);
    } finally {
      await file.close();
    }
    assert.equal(requests.some(path => /\.wasm(?:$|\?)/.test(path)), false);
    assert.deepEqual(failures, []);
    assert.deepEqual(await page.evaluate(() => window.pantryPDFViolations), []);
    console.log('Chromium: vista accesible, retorno de foco y descarga nativa del PDF con la CSP vigente.');
  };
}
