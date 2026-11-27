import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const args = process.argv.slice(2).filter((arg) => arg !== '--http-only');
const html = await readFile(args[0] ?? 'dist/despensa/index.html', 'utf8');
// Inherit the exact built meta policy. Fail on unexpected policies rather than rewriting them.
const policies = html.match(/<meta\b[^>]*http-equiv=["']Content-Security-Policy["'][^>]*>/gi) ?? [];
assert.equal(policies.length, 1, 'Se necesita exactamente una meta CSP del build de Despensa.');
const [policy] = policies;

// Archivo de prueba: 84 filas inventadas, fuera de dist.
const pdf = await readFile(new URL('./fixtures/pantry-84-rows.pdf', import.meta.url));
assert.equal(pdf.subarray(0, 5).toString(), '%PDF-', 'La muestra debe ser un PDF.');
const fixtureSha256 = createHash('sha256').update(pdf).digest('hex');
assert.equal(fixtureSha256, '781a7d83527ab6ee8ea480a466d89065714ccc29540d79f379518b3a036e0398',
  'El control debe usar los bytes conocidos de la muestra.');
const policySha256 = createHash('sha256').update(policy).digest('hex');
const frameOptions = 'SAMEORIGIN';
const fixtureScript = `
  const violations = [];
  window.fixture = { violations, created: false, failed: false };
  document.addEventListener('securitypolicyviolation', ({ effectiveDirective, blockedURI, disposition }) => {
    if (violations.length >= 20) return;
    const directive = ['frame-src', 'child-src', 'default-src', 'script-src'].includes(effectiveDirective)
      ? effectiveDirective : 'other';
    const blocked = blockedURI.startsWith('blob') ? 'blob' : blockedURI === 'wasm-eval' ? 'wasm-eval' : 'other';
    violations.push({ directive, blocked, enforced: disposition === 'enforce' });
  });
  const button = document.querySelector('button');
  if (button) button.addEventListener('click', () => {
    try {
      const blob = new Blob([Uint8Array.from(atob('${pdf.toString('base64')}'), (byte) => byte.charCodeAt(0))],
        { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.fixture.created = true;
      if (location.pathname === '/download') {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'fixture.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        document.querySelector('iframe').src = url;
      }
      // El documento dueño de la URL se cierra al terminar su caso.
    } catch {
      window.fixture.failed = true;
    }
  });
`;
const routes = {
  '/inline': '<iframe title="PDF HTTP" src="/fixture.pdf"></iframe>',
  '/preview': '<button type="button">Abrir archivo PDF Blob</button><iframe title="PDF Blob"></iframe>',
  '/download': '<button type="button">Descargar archivo PDF Blob</button>',
};
const server = createServer((request, response) => {
  const route = request.url;
  if (route === '/fixture.pdf') {
    response.writeHead(200, { 'Content-Type': 'application/pdf', 'Content-Disposition': 'inline',
      'X-Frame-Options': frameOptions }).end(pdf);
  } else if (route === '/fixture.js') {
    response.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' }).end(fixtureScript);
  } else if (Object.hasOwn(routes, route)) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'X-Frame-Options': frameOptions })
      .end(`<!doctype html><html><head>${policy}<meta charset="utf-8"></head><body>${routes[route]}<script src="/fixture.js"></script></body></html>`);
  } else {
    response.writeHead(404).end();
  }
});
await new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(0, '127.0.0.1', resolve);
});
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
const report = {};
try {
  for (const path of Object.keys(routes)) {
    const response = await fetch(origin + path);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('x-frame-options'), frameOptions);
    assert.equal(response.headers.get('content-security-policy'), null);
    assert.ok((await response.text()).includes(policy), 'La meta CSP debe ser idéntica en cada caso.');
  }
  const fixture = await fetch(origin + '/fixture.pdf');
  assert.equal(fixture.headers.get('content-type'), 'application/pdf');
  assert.equal(fixture.headers.get('x-frame-options'), frameOptions);
  assert.deepEqual(Buffer.from(await fixture.arrayBuffer()), pdf);
  const javascript = await fetch(origin + '/fixture.js');
  assert.match(javascript.headers.get('content-type'), /^text\/javascript/);
  assert.equal(await javascript.text(), fixtureScript);
  console.log('HTTP: política exacta, script y bytes de la muestra verificados.', JSON.stringify({ fixtureSha256, fixtureBytes: pdf.length, policySha256, frameOptions }));
  if (process.argv.includes('--http-only')) process.exitCode = 0;
  else {
    const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;
    browser = await chromium.launch(executablePath ? { executablePath } : { channel: 'chromium' });
    async function runCase(test) {
      const context = await browser.newContext({ serviceWorkers: 'block' });
      await context.route(/^https?:\/\//, (route) =>
        new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
      const page = await context.newPage();
      page.setDefaultTimeout(5000);
      try {
        return await test(page);
      } catch (error) {
        return { result: error?.name === 'TimeoutError' ? 'timeout' : 'unclassified-error',
          ...(await page.evaluate(() => window.fixture).catch(() => ({}))) };
      } finally {
        await context.close();
      }
    }
    const goto = async (page, path) => {
      assert.equal((await page.goto(origin + path, { waitUntil: 'domcontentloaded' })).status(), 200);
      await page.waitForFunction(() => !!window.fixture);
    };
    report.inline = await runCase(async (page) => {
      const response = page.waitForResponse((candidate) => candidate.url() === origin + '/fixture.pdf')
        .then((hit) => hit.status() === 200 && hit.headers()['content-type'] === 'application/pdf', () => false);
      await goto(page, '/inline');
      const nativeViewer = await page.evaluate(() => navigator.pdfViewerEnabled === true);
      const inlineResponse = await response;
      return { result: inlineResponse && nativeViewer ? 'positive-control' : 'control-unverified', inlineResponse, nativeViewer };
    });
    report.download = await runCase(async (page) => {
      await goto(page, '/download');
      const download = page.waitForEvent('download', { timeout: 5000 }).catch(() => null);
      await page.getByRole('button', { name: 'Descargar archivo PDF Blob' }).click();
      const event = await download;
      const state = await page.evaluate(() => window.fixture);
      if (!event) return { result: 'no-download-event', ...state };
      const sameBytes = (await readFile(await event.path())).equals(pdf);
      return { result: state.created && !state.failed && sameBytes && event.suggestedFilename() === 'fixture.pdf' ? 'exact-bytes' : 'wrong-download', ...state };
    });
    report.preview = await runCase(async (page) => {
      await goto(page, '/preview');
      const nativeViewer = await page.evaluate(() => navigator.pdfViewerEnabled === true);
      const blobFrame = page.waitForEvent('framenavigated', {
        predicate: (frame) => frame !== page.mainFrame() && frame.url().startsWith('blob:'),
        timeout: 5000,
      }).then(() => true, () => false);
      await page.getByRole('button', { name: 'Abrir archivo PDF Blob' }).click();
      const committed = await blobFrame;
      const state = await page.evaluate(() => window.fixture);
      const enforced = state.violations.some(({ enforced, blocked, directive }) => enforced && blocked === 'blob'
        && ['frame-src', 'child-src', 'default-src'].includes(directive));
      const result = enforced && !committed ? 'csp-blocked-blob-frame'
        : state.created && !state.failed && nativeViewer && committed && !enforced ? 'blob-frame-committed'
          : 'preview-unverified';
      return { result, nativeViewer, committed, ...state };
    });
    // Solo categorías; no volcar URLs blob, consola cruda ni errores no clasificados.
    // La navegación y el anuncio de visor nativo no demuestran renderizado visual.
    console.log(JSON.stringify(report, null, 2));
    if (report.inline.result !== 'positive-control' || report.download.result !== 'exact-bytes'
      || report.preview.result !== 'blob-frame-committed') process.exitCode = 1;
  }
} finally {
  try {
    await browser?.close();
  } finally {
    server.closeAllConnections();
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
}
