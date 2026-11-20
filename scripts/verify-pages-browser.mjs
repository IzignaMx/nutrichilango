import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
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
await new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(0, '127.0.0.1', resolve);
});
const origin = `http://127.0.0.1:${server.address().port}`;
const entry = origin + '/emprendimientos?verify=direct';
const unknown = origin + '/ruta-inexistente-para-prueba';

let browser;
try {
  const direct = await fetch(entry);
  assert.equal(direct.status, 200);
  assert.equal(direct.url, origin + '/emprendimientos/?verify=direct');
  assert.match(await direct.text(), /id="root"/);
  assert.equal((await fetch(unknown)).status, 404);
  if (process.argv[2] === '--http-only') {
    console.log('Entrada estática 200 y URL desconocida 404 (sin Chromium).');
  } else {
    const { chromium } = await import('playwright');
    browser = await chromium.launch();
    const context = await browser.newContext({ serviceWorkers: 'block' });
    // Verificar solo dist: bloquear conectores, tiendas y demás solicitudes remotas.
    await context.route('**/*', (route) =>
      new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    const page = await context.newPage();
    const heading = page.getByRole('heading', { name: 'Directorio de Emprendimientos', level: 1 });
    assert.equal((await page.goto(entry)).status(), 200);
    await heading.waitFor();
    assert.equal(page.url(), origin + '/emprendimientos/?verify=direct');
    assert.equal((await page.reload()).status(), 200);
    await heading.waitFor();
    assert.equal(page.url(), origin + '/emprendimientos/?verify=direct');
    assert.equal((await page.goto(unknown)).status(), 404);
    console.log('Chromium: entrada y recarga correctas, ruta desconocida 404.');
  }
} finally {
  try {
    await browser?.close();
  } finally {
    server.closeAllConnections();
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
}
