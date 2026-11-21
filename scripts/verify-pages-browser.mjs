import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { pagesRoutes } from './pages-entries.ts';

// Cada entrada debe ser reconocible en el navegador, no solo devolver HTTP 200.
const headings = new Map([
  ['/', { name: 'Comparaciones de Productos', level: 2 }],
  ['/dishes-comparison', { name: '🌮 ¡Revoluciona Tu Cocina Mexicana!' }],
  ['/about', { name: 'Acerca de Nosotros' }],
  ['/how-it-works', { name: 'Cómo Funciona' }],
  ['/data-sources', { name: 'Fuentes de Datos' }],
  ['/guide', { name: 'Guía de Uso' }],
  ['/privacy', { name: 'Política de Privacidad' }],
  ['/terms', { name: 'Términos de Uso' }],
  ['/accessibility', { name: 'Accesibilidad' }],
  ['/despensa', { name: 'Creador de Despensa Vegana' }],
  ['/emprendimientos', { name: /^Directorio de Emprendimientos\s*Plant-Based$/ }],
]);
assert.deepEqual([...headings.keys()].sort(), ['/', ...pagesRoutes].sort());

// Solo observación en Chromium: no cambiar CSP, respuestas, ni el resultado de las API.
async function observePdf(page) {
  const counts = {};
  const count = (key) => { counts[key] = (counts[key] ?? 0) + 1; };
  const classify = (message) => {
    if (/wasm|webassembly/i.test(message)) {
      return /content security policy|csp|unsafe-eval/i.test(message) ? 'wasm-csp' : 'wasm';
    }
    return /content security policy|csp/i.test(message) ? 'csp' : 'other';
  };
  page.on('pageerror', (error) => count('pageerror:' + classify(error.message)));
  page.on('console', (message) => {
    if (['error', 'warning'].includes(message.type())) count('console:' + classify(message.text()));
  });
  page.on('framenavigated', (frame) => {
    if (frame !== page.mainFrame() && frame.url().startsWith('blob:')) count('frame:blob');
  });
  page.on('download', () => count('download'));
  await page.addInitScript(() => {
    const events = [];
    Object.defineProperty(globalThis, '__pantryPdfSmokeEvents', { value: events });
    const append = (event) => { if (events.length < 60) events.push(event); };
    document.addEventListener('securitypolicyviolation', ({ effectiveDirective, blockedURI, disposition }) => {
      const directive = /^(script-src(?:-elem)?|frame-src|child-src|default-src)$/.test(effectiveDirective)
        ? effectiveDirective : 'other';
      const blocked = /^(wasm-eval|eval|inline)$/.test(blockedURI) ? blockedURI
        : blockedURI.startsWith('blob') ? 'blob' : 'other';
      append({ kind: 'csp', directive, blocked, disposition: disposition === 'enforce' ? 'enforce' : 'report' });
    });
    const createObjectURL = URL.createObjectURL;
    URL.createObjectURL = function (value) {
      if (value instanceof Blob && value.type === 'application/pdf') {
        append({ kind: 'pdf-blob-at-object-url', size: value.size });
      }
      return Reflect.apply(createObjectURL, this, arguments);
    };
  });
  return {
    reset() { for (const key of Object.keys(counts)) delete counts[key]; },
    async report(mode, stage) {
      const events = await page.evaluate(() => globalThis.__pantryPdfSmokeEvents ?? [])
        .catch(() => null);
      // No registrar URLs, identificadores blob, texto generado, consola bruta ni errores con stack.
      console.log('Diagnóstico PDF:', JSON.stringify({ mode, stage, counts, events }));
    },
  };
}

const dist = path.resolve('dist');
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
};

const fixturePagePath = '/_test-pantry-preview.html';
const fixturePdfPath = '/_test-pantry-preview.pdf';

// One synthetic, valid PDF page. Fixed ASCII bytes and computed PDF offsets.
function previewPdfFixture() {
  const content = 'BT /F1 20 Tf 30 100 Td (Preview fixture) Tj ET';
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 300 150] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>',
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  ];
  let body = '%PDF-1.4\n';
  const offsets = objects.map((object, i) => {
    const offset = body.length;
    body += `${i + 1} 0 obj\n${object}\nendobj\n`;
    return String(offset).padStart(10, '0') + ' 00000 n \n';
  });
  const xref = body.length;
  return body + `xref\n0 6\n0000000000 65535 f \n${offsets.join('')}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
}

async function verifyPreviewFixture(context, origin) {
  const specimen = await context.newPage();
  try {
    const assetUrl = origin + fixturePdfPath;
    const asset = specimen.waitForResponse((candidate) => candidate.url() === assetUrl, { timeout: 8000 })
      .then((hit) => hit.status() === 200 && hit.headers()['content-type'] === 'application/pdf', () => false);
    assert.equal((await specimen.goto(origin + fixturePagePath, { waitUntil: 'domcontentloaded' })).status(), 200);
    const capability = await specimen.evaluate(() => ({
      secureContext: globalThis.isSecureContext === true,
      nativePdfViewer: typeof navigator.pdfViewerEnabled === 'boolean' ? navigator.pdfViewerEnabled : null,
    }));
    const inlinePdfResponse = await asset;
    console.log('Control PDF del mismo origen:', JSON.stringify({ ...capability, inlinePdfResponse }));
  } finally {
    await specimen.close();
  }
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    if (url.pathname === fixturePdfPath) {
      response.writeHead(200, { 'Content-Type': 'application/pdf', 'Content-Disposition': 'inline' })
        .end(previewPdfFixture());
      return;
    }
    if (url.pathname === fixturePagePath) {
      const html = await readFile(path.join(dist, 'index.html'), 'utf8');
      const policy = html.match(/<meta\b[^>]*http-equiv="Content-Security-Policy"[^>]*>/i)?.[0];
      assert.ok(policy, 'Falta la CSP del artefacto para el control PDF');
      response.writeHead(200, { 'Content-Type': contentTypes['.html'] })
        .end(`<!doctype html><html><head>${policy}</head><body><iframe title="Synthetic PDF" src="${fixturePdfPath}"></iframe></body></html>`);
      return;
    }
    let file = path.resolve(dist, '.' + decodeURIComponent(url.pathname));
    if (file !== dist && !file.startsWith(dist + path.sep)) {
      response.writeHead(404).end('No encontrado');
      return;
    }
    if ((await stat(file)).isDirectory()) {
      if (!url.pathname.endsWith('/')) {
        response.writeHead(301, { Location: url.pathname + '/' + url.search }).end();
        return;
      }
      file = path.join(file, 'index.html');
    }
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': contentTypes[path.extname(file)] ?? 'application/octet-stream' });
    response.end(body);
  } catch (error) {
    if (['ENOENT', 'ENOTDIR'].includes(error.code)) {
      response.writeHead(404).end('No encontrado');
    } else {
      response.writeHead(500).end('Error en la prueba estática');
      console.error(error);
    }
  }
});

await readFile(path.join(dist, 'index.html'));
await assert.rejects(stat(path.join(dist, '404.html')), { code: 'ENOENT' });
await new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(0, '127.0.0.1', resolve);
});
const origin = `http://127.0.0.1:${server.address().port}`;
const unknown = origin + '/ruta-inexistente-para-prueba';

let browser;
let previewBrowser;
try {
  const domain = await fetch(origin + '/CNAME', { redirect: 'error' });
  assert.equal(domain.status, 200, 'El build debe incluir CNAME.');
  assert.equal((await domain.text()).trim(), 'nutrichilango.izignamx.com');
  for (const route of headings.keys()) {
    const direct = await fetch(origin + route + '?verify=direct');
    const canonical = route === '/' ? '/' : `${route}/`;
    assert.equal(direct.status, 200, `Entrada estática ${route}`);
    assert.equal(direct.url, `${origin}${canonical}?verify=direct`);
    assert.match(await direct.text(), /id="root"/, `HTML de entrada ${route}`);
  }
  const missing = await fetch(unknown, { redirect: 'error' });
  assert.equal(missing.status, 404);
  assert.equal(await missing.text(), 'No encontrado');
  if (process.argv[2] === '--http-only') {
    console.log(`${headings.size} entradas estáticas 200 y URL desconocida 404 (sin Chromium).`);
  } else {
    const { chromium } = await import('playwright');
    browser = await chromium.launch();
    const context = await browser.newContext({
      serviceWorkers: 'block',
      timezoneId: 'UTC',
      viewport: { width: 390, height: 844 },
    });
    // Verificar solo dist: bloquear conectores, tiendas y demás solicitudes remotas.
    await context.route('**/*', (route) =>
      new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    const page = await context.newPage();
    for (const [route, { name, level = 1 }] of headings) {
      const canonical = route === '/' ? '/' : `${route}/`;
      const expectedUrl = `${origin}${canonical}?verify=direct`;
      const heading = page.getByRole('heading', { name, level, exact: true });
      assert.equal((await page.goto(origin + route + '?verify=direct')).status(), 200, `Navegación ${route}`);
      await heading.waitFor();
      assert.equal(page.url(), expectedUrl);
      assert.equal((await page.reload()).status(), 200, `Recarga ${route}`);
      await heading.waitFor();
      assert.equal(page.url(), expectedUrl);
      console.log(`Chromium: entrada y recarga verificadas para ${route}.`);
    }

    await page.goto(origin + '/');
    // Tomar los valores de la fuente versionada; no inmovilizar una observación futura válida.
    const stores = JSON.parse(await readFile(new URL('../src/data/stores/conventional.json', import.meta.url), 'utf8'));
    const store = stores.find(({ id }) => id === 'soriana-1');
    const pair = store?.products.find(({ id }) => id === 'beef-vs-tofu-1');
    assert.ok(pair, 'Falta la comparación histórica representativa');
    await page.getByRole('textbox', { name: 'Buscar productos' }).fill(pair.traditional.name);
    for (const { name, unit, price, lastUpdated } of [pair.traditional, pair.plantBased]) {
      assert.ok(Number.isFinite(price) && price > 0, `Importe inválido: ${name}`);
      // Calcular el precio por kg sin compartir el normalizador de la aplicación.
      const pack = /^(\d+(?:[.,]\d+)?)\s*(kg|g)$/i.exec(unit);
      assert.ok(pack && Number(pack[1].replace(',', '.')) > 0, `Presentación inválida: ${name}`);
      const quantity = Number(pack[1].replace(',', '.'));
      const kilograms = pack[2].toLowerCase() === 'g' ? quantity / 1000 : quantity;
      assert.match(lastUpdated ?? '', /^\d{4}-\d{2}-\d{2}T/, `Falta fecha ISO: ${name}`);
      const observed = new Date(lastUpdated);
      assert.ok(Number.isFinite(observed.getTime()), `Fecha de observación inválida: ${name}`);
      // Chromium corre en UTC; la fecha visible debe corresponder a Ciudad de México.
      const date = new Intl.DateTimeFormat('es-MX', {
        day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Mexico_City',
      }).format(observed);

      const product = page.getByRole('heading', { name, level: 3, exact: true }).locator('xpath=../..');
      await product.getByText(`$${price.toFixed(2)}`, { exact: true }).waitFor();
      await product.getByText(unit, { exact: true }).waitFor();
      await product.getByText(`$${(price / kilograms).toFixed(2)}/kg`, { exact: true }).waitFor();
      await product.getByText(`Observación: ${date}`, { exact: true }).waitFor();
    }
    await page.getByText(/Última observación publicada:.+Cada producto puede tener una fecha distinta/).waitFor();
    console.log('Chromium: importes, presentaciones y fechas históricas verificados en la comparación pública.');

    await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin });
    const downloadDiagnostics = await observePdf(page);
    await page.goto(origin + '/despensa');
    await page.getByRole('button', { name: '4', exact: true }).click();
    await page.getByRole('button', { name: 'Siguiente' }).click();
    await page.getByRole('button', { name: 'Económico', exact: true }).click();
    await page.getByRole('button', { name: 'Siguiente' }).click();
    await page.getByText('Quincenal', { exact: true }).click();
    await page.getByRole('button', { name: 'Generar lista' }).click();
    await page.getByRole('button', { name: 'Compartir configuración' }).click();
    await page.getByText('Enlace copiado', { exact: true }).waitFor();
    const sharedUrl = new URL(await page.evaluate(() => navigator.clipboard.readText()));
    assert.equal(sharedUrl.origin + sharedUrl.pathname, origin + '/despensa');
    assert.deepEqual(Object.fromEntries(sharedUrl.searchParams), { size: '4', prefs: 'Económico', freq: 'biweekly' });
    await page.getByRole('button', { name: 'Copiar', exact: true }).click();
    await page.getByText('Lista copiada', { exact: true }).waitFor();
    const listText = await page.evaluate(() => navigator.clipboard.readText());
    assert.match(listText, /.+: .+ - \$\d+\.\d{2}/);

    const reader = await browser.newContext({ serviceWorkers: 'block', viewport: { width: 390, height: 844 } });
    await reader.route('**/*', (route) =>
      new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    const sharedPage = await reader.newPage();
    assert.equal((await sharedPage.goto(sharedUrl.href)).status(), 200);
    const useShared = sharedPage.getByRole('button', { name: 'Usar configuración compartida' });
    await useShared.waitFor();
    assert.equal(await sharedPage.evaluate(() => localStorage.getItem('nutrichilango-storage')), null);
    assert.equal((await sharedPage.reload()).status(), 200);
    await useShared.click();
    await sharedPage.getByRole('button', { name: 'Siguiente' }).click();
    await sharedPage.getByRole('button', { name: 'Siguiente' }).click();
    await sharedPage.getByRole('button', { name: 'Generar lista' }).click();
    await sharedPage.getByRole('heading', { name: 'Tu despensa personalizada' }).waitFor();
    await reader.close();
    console.log('Chromium: enlace de despensa copiado y aplicado en otro perfil tras abrirlo y recargarlo.');

    // El fallo de una operación no oculta la otra. La vista previa parte de
    // otra página y contexto, sin reutilizar la instancia Yoga de la descarga.
    const pdfFailures = [];
    downloadDiagnostics.reset();
    let downloadStage = 'download-event';
    try {
      const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'PDF', exact: true }).click(),
      ]);
      downloadStage = 'filename';
      assert.equal(download.suggestedFilename(), 'despensa-vegana-4personas-biweekly.pdf');
      downloadStage = 'file-header';
      assert.equal((await readFile(await download.path())).subarray(0, 5).toString(), '%PDF-');
      downloadStage = 'notice';
      await page.getByText('PDF preparado', { exact: true }).waitFor();
      downloadStage = 'complete';
      console.log('Chromium: texto copiado y archivo PDF real verificado.');
    } catch {
      pdfFailures.push('No se verificó la descarga PDF: ' + downloadStage + '.');
    } finally {
      await downloadDiagnostics.report('download', downloadStage);
    }

    // Mantener descarga/compartir en el navegador previo; usar Chromium completo para la vista previa nativa.
    previewBrowser = await chromium.launch({ channel: 'chromium' });
    const preview = await previewBrowser.newContext({ serviceWorkers: 'block', viewport: { width: 390, height: 844 } });
    await preview.route('**/*', (route) =>
      new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    await verifyPreviewFixture(preview, origin);
    const previewPage = await preview.newPage();
    const previewDiagnostics = await observePdf(previewPage);
    let previewStage = 'setup';
    let previewFailure = null;
    const results = previewPage.getByRole('heading', { name: 'Tu despensa personalizada', exact: true });
    const button = previewPage.getByRole('button', { name: 'Vista Previa', exact: true });
    const rawDialog = previewPage.locator('[role="dialog"]');
    const dialog = previewPage.getByRole('dialog', { name: 'Vista Previa de tu Despensa', exact: true });
    const fallback = previewPage.getByRole('heading', { name: 'Algo salió mal', exact: true });
    const blobIframe = dialog.locator('iframe[src^="blob:"]');
    try {
      assert.equal((await previewPage.goto(sharedUrl.href)).status(), 200);
      await previewPage.getByRole('button', { name: 'Usar configuración compartida' }).click();
      await previewPage.getByRole('button', { name: 'Siguiente' }).click();
      await previewPage.getByRole('button', { name: 'Siguiente' }).click();
      await previewPage.getByRole('button', { name: 'Generar lista' }).click();
      previewDiagnostics.reset();
      previewStage = 'results';
      await results.waitFor();
      previewStage = 'preview-button-click';
      await button.click();
      previewStage = 'wait-dialog-mounted';
      await rawDialog.or(fallback).first().waitFor({ state: 'attached' });
      if (await fallback.isVisible()) {
        previewStage = 'app-error-boundary';
        throw new Error('La aplicación mostró su pantalla de error tras el clic');
      }
      previewStage = 'wait-dialog-accessible';
      await dialog.or(fallback).first().waitFor();
      if (await fallback.isVisible()) {
        previewStage = 'app-error-boundary';
        throw new Error('La aplicación mostró su pantalla de error al abrir el diálogo');
      }
      previewStage = 'wait-iframe-src';
      // Un src asignado no demuestra que el navegador cargó ni dibujó el PDF.
      // La navegación y posibles rechazos CSP se reportan por separado.
      await blobIframe.or(fallback).first().waitFor({ state: 'attached', timeout: 10000 });
      if (await fallback.isVisible()) {
        previewStage = 'app-error-boundary';
        throw new Error('La aplicación mostró su pantalla de error antes del iframe');
      }
      previewStage = 'iframe-src-assigned';
      // Dar tiempo para que Chromium comunique un rechazo de frame tras asignar src.
      const blockedFrame = await previewPage.waitForFunction(() =>
        globalThis.__pantryPdfSmokeEvents.some((event) => event.kind === 'csp' &&
          event.disposition === 'enforce' && event.blocked === 'blob' &&
          ['frame-src', 'child-src', 'default-src'].includes(event.directive)),
      undefined, { timeout: 2500 }).then(() => true, (error) => {
        if (error.name !== 'TimeoutError') throw error;
        return false;
      });
      assert.equal(blockedFrame, false);
      console.log('Chromium: la vista previa asignó un PDF blob al iframe; consultar el diagnóstico de navegación.');
    } catch (error) {
      // Clasificación cerrada: no imprimir el mensaje, DOM ni URLs de Playwright.
      previewFailure = error.name !== 'TimeoutError' ? 'other'
        : /intercepts pointer events/i.test(error.message) ? 'pointer-intercepted'
        : 'timeout';
      pdfFailures.push('No se verificó la preparación de la vista previa PDF: ' + previewStage + '.');
    } finally {
      const snapshot = await Promise.all([
        results.count(), button.count(), rawDialog.count(), dialog.count(), fallback.count(),
        rawDialog.locator('iframe').count(), rawDialog.locator('iframe[src^="blob:"]').count(),
        previewPage.evaluate(() => ({
          secureContext: globalThis.isSecureContext === true,
          nativePdfViewer: typeof navigator.pdfViewerEnabled === 'boolean' ? navigator.pdfViewerEnabled : null,
        })),
      ]).then(([resultCount, buttonCount, dialogCount, namedVisibleDialogCount, fallbackCount, iframeCount, blobIframeCount, capabilities]) => ({
        resultCount, buttonCount, dialogCount, namedVisibleDialogCount, fallbackCount, iframeCount, blobIframeCount,
        expectedRoute: new URL(previewPage.url()).pathname === sharedUrl.pathname, ...capabilities,
      })).catch(() => null);
      console.log('Estado de vista previa PDF:', JSON.stringify({ stage: previewStage, failure: previewFailure, snapshot }));
      await previewDiagnostics.report('preview', previewStage);
      await preview.close();
    }

    assert.equal((await page.goto(unknown)).status(), 404);
    assert.equal(page.url(), unknown);
    await page.getByText('No encontrado', { exact: true }).waitFor();
    assert.equal(await page.locator('#root').count(), 0, 'La ruta desconocida no monta el SPA.');
    console.log('Chromium: URL desconocida 404 sin fallback del SPA.');
    assert.equal(pdfFailures.length, 0, pdfFailures.join(' '));
  }
} finally {
  try {
    await Promise.all([browser?.close(), previewBrowser?.close()]);
  } finally {
    server.closeAllConnections();
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
}
