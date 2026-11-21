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
await assert.rejects(stat(path.join(dist, '404.html')), { code: 'ENOENT' });
await new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(0, '127.0.0.1', resolve);
});
const origin = `http://127.0.0.1:${server.address().port}`;
const unknown = origin + '/ruta-inexistente-para-prueba';

let browser;
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

    const pantryContext = await browser.newContext({
      serviceWorkers: 'block',
      viewport: { width: 390, height: 844 },
    });
    await pantryContext.route('**/*', (route) =>
      new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    await pantryContext.grantPermissions(['clipboard-read', 'clipboard-write'], { origin });
    const pantryPage = await pantryContext.newPage();
    assert.equal((await pantryPage.goto(origin + '/despensa')).status(), 200);
    await pantryPage.getByRole('heading', { name: 'Creador de Despensa Vegana', level: 1 }).waitFor();
    assert.equal(new URL(pantryPage.url()).search, '', 'El recorrido de teclado no usa un enlace compartido.');
    assert.equal(await pantryPage.evaluate(() => localStorage.getItem('nutrichilango-storage')), null);
    const pantryButton = (name) => pantryPage.getByRole('button', { name, exact: true });
    async function tabTo(target, name) {
      const focused = target.and(pantryPage.locator(':focus'));
      for (let attempt = 0; attempt < 40; attempt++) {
        if (await focused.count() === 1) return;
        await pantryPage.keyboard.press('Tab');
      }
      assert.equal(await focused.count(), 1, `Tab debe alcanzar ${name}.`);
    }
    async function activateWithEnter(name) {
      await tabTo(pantryButton(name), name);
      await pantryPage.keyboard.press('Enter');
    }

    await activateWithEnter('4');
    await activateWithEnter('Siguiente');
    await activateWithEnter('Económico');
    await activateWithEnter('Siguiente');
    const frequency = pantryPage.getByRole('group', { name: 'Frecuencia de compras' });
    const weekly = frequency.getByRole('radio', { name: 'Semanal' });
    const biweekly = frequency.getByRole('radio', { name: 'Quincenal' });
    assert.equal(await pantryButton('Generar lista').isDisabled(), true);
    await tabTo(weekly, 'Semanal en el grupo Frecuencia de compras');
    assert.equal(await weekly.isChecked(), false, 'Recibir el foco no debe seleccionar una frecuencia.');
    await pantryPage.keyboard.press('ArrowRight');
    assert.equal(await biweekly.isChecked(), true, 'Una flecha a la derecha debe seleccionar Quincenal.');
    assert.equal(await biweekly.evaluate((radio) => radio.matches(':focus-visible')), true);
    assert.notEqual(await biweekly.evaluate((radio) => getComputedStyle(radio.labels[0]).boxShadow), 'none');
    await activateWithEnter('Generar lista');
    await pantryPage.getByText('Para 4 personas • Quincenal', { exact: true }).waitFor();
    console.log('Chromium: frecuencia seleccionada y lista generada solo con teclado desde /despensa sin parámetros.');
    await activateWithEnter('Compartir configuración');
    await pantryPage.getByText('Enlace copiado', { exact: true }).waitFor();
    const sharedUrl = new URL(await pantryPage.evaluate(() => navigator.clipboard.readText()));
    assert.equal(sharedUrl.origin + sharedUrl.pathname, origin + '/despensa');
    assert.deepEqual(Object.fromEntries(sharedUrl.searchParams), { size: '4', prefs: 'Económico', freq: 'biweekly' });
    await pantryContext.close();

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
    assert.equal(await sharedPage.getByRole('radio', { name: 'Quincenal' }).isChecked(), true);
    await sharedPage.getByRole('button', { name: 'Generar lista' }).click();
    await sharedPage.getByRole('heading', { name: 'Tu despensa personalizada' }).waitFor();
    await sharedPage.getByRole('button', { name: 'Nueva lista' }).click();
    await sharedPage.getByRole('button', { name: '4', exact: true }).click();
    await sharedPage.getByRole('button', { name: 'Siguiente' }).click();
    await sharedPage.getByRole('button', { name: 'Siguiente' }).click();
    assert.equal(await sharedPage.getByRole('radio', { checked: true }).count(), 0);
    assert.equal(await sharedPage.getByRole('button', { name: 'Generar lista' }).isDisabled(), true);
    await reader.close();
    console.log('Chromium: enlace de despensa copiado y aplicado en otro perfil tras abrirlo y recargarlo.');

    assert.equal((await page.goto(unknown)).status(), 404);
    assert.equal(page.url(), unknown);
    await page.getByText('No encontrado', { exact: true }).waitFor();
    assert.equal(await page.locator('#root').count(), 0, 'La ruta desconocida no monta el SPA.');
    console.log('Chromium: URL desconocida 404 sin fallback del SPA.');
  }
} finally {
  try {
    await browser?.close();
  } finally {
    server.closeAllConnections();
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
}
