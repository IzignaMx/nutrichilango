import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { pagesRoutes } from './pages-entries.ts';
import { PANTRY_PRODUCTS } from '../src/data/pantry/products.ts';
import { getPantryShoppingInfo } from '../src/data/pantry/shopping.ts';
import { assertPantryPDF } from './verify-pantry-pdf.mjs';

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
  '.jpg': 'image/jpeg',
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

    await page.goto(origin + '/emprendimientos/');
    await page.getByRole('heading', { name: 'Nómada psy kitchen', exact: true }).waitFor();
    const nomadaPhoto = page.getByRole('img', { name: /charolas de comida/i });
    await nomadaPhoto.scrollIntoViewIfNeeded();
    await page.waitForFunction(() => [...document.images].some(img => img.alt.includes('Charolas de comida') && img.complete && img.naturalWidth === 480 && img.naturalHeight === 640));
    assert.equal(await page.getByRole('link', { name: 'Ver publicación original' }).getAttribute('href'), 'https://www.instagram.com/nomada_dark_kitchen_/p/Df0VwRpgDnA/');
    assert.equal(await page.getByRole('link', { name: 'Ver menú publicado' }).getAttribute('href'), 'https://www.instagram.com/nomada_dark_kitchen_/p/DeXnG93lDwT/');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
    console.log('Chromium: primera ficha, foto local y enlaces de Nómada verificados.');

    await page.goto(origin + '/dishes-comparison/');
    const ingredientFilter = page.getByRole('combobox', { name: 'Ingrediente principal' });
    const categoryFilter = page.getByRole('combobox', { name: 'Categoría' });
    await ingredientFilter.click();
    await page.getByRole('option', { name: 'Tofu', exact: true }).click();
    await page.getByText('2 platillos encontrados', { exact: true }).waitFor();
    assert.equal(await page.getByText('Principal: Tofu', { exact: true }).count(), 2);
    assert.equal(await page.getByText('Principal: Soya texturizada', { exact: true }).count(), 0);
    await categoryFilter.click();
    await page.getByRole('option', { name: '🌮 Platillos Mexicanos', exact: true }).click();
    await page.getByText('No se encontraron platillos', { exact: true }).waitFor();
    await ingredientFilter.click();
    await page.getByRole('option', { name: 'Soya texturizada', exact: true }).click();
    await page.getByText('10 platillos encontrados', { exact: true }).waitFor();
    assert.equal(await page.getByText('Principal: Soya texturizada', { exact: true }).count(), 10);
    await ingredientFilter.click();
    await page.getByRole('option', { name: 'Todos los ingredientes', exact: true }).click();
    await page.getByText('17 platillos encontrados', { exact: true }).waitFor();
    console.log('Chromium: filtro de ingrediente principal, composición con categoría, estado vacío y restablecimiento verificados.');

    await page.goto(origin + '/');
    // Tomar los valores de la fuente versionada; no inmovilizar una observación futura válida.
    const stores = JSON.parse(await readFile(new URL('../src/data/stores/conventional.json', import.meta.url), 'utf8'));
    const store = stores.find(({ id }) => id === 'soriana-1');
    const pair = store?.products.find(({ id }) => id === 'beef-vs-tofu-1');
    assert.ok(pair, 'Falta la comparación histórica representativa');
    await page.getByRole('textbox', { name: 'Buscar productos' }).fill(pair.traditional.name);
    await page.getByRole('heading', { name: `${pair.traditional.name} vs ${pair.plantBased.name}`, exact: true }).locator('xpath=../../../..').getByText('Ver comparación histórica de Soriana Hiper Santa Fe', { exact: true }).click();
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

    await page.getByText('Veggie Express molida de quinoa y soya', { exact: true }).waitFor();
    await page.getByText('$233.33 MXN/kg', { exact: true }).waitFor();
    await page.getByRole('textbox', { name: 'Buscar productos' }).fill('Nuggets Plant-Based');
    await page.getByText('Pilgrim’s nuggets de pollo', { exact: true }).waitFor();
    await page.getByText('$170.00 MXN/kg', { exact: true }).waitFor();
    await page.getByRole('textbox', { name: 'Buscar productos' }).fill('Tempeh de Soya');
    await page.getByText('Bintang tempeh de soya', { exact: true }).waitFor();
    await page.getByText('$155.00 MXN/kg', { exact: true }).waitFor();
    await page.getByRole('textbox', { name: 'Buscar productos' }).fill('Symken');
    const economy = page.getByRole('region', { name: 'Opciones económicas observadas' }).filter({ hasText: 'Great Value leche entera' });
    await economy.getByText('Great Value soya sin azúcar', { exact: true }).waitFor();
    await economy.getByText('Symkën soya natural en polvo', { exact: true }).filter({ visible: true }).waitFor();
    await economy.getByText('$35.00 MXN/L', { exact: true }).waitFor();
    await economy.getByText('$24.87 MXN/L preparado', { exact: true }).waitFor();
    await economy.getByText('Ver otras ofertas consultadas', { exact: true }).click();
    await economy.getByText('Agotado en la consulta', { exact: true }).waitFor();
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
    console.log('Chromium: selección económica, rendimiento y agotados verificados.');

    const pantryContext = await browser.newContext({
      serviceWorkers: 'block',
      viewport: { width: 390, height: 844 },
      acceptDownloads: true,
    });
    await pantryContext.route('**/*', (route) =>
      new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    await pantryContext.grantPermissions(['clipboard-read', 'clipboard-write'], { origin });
    await pantryContext.addInitScript(() => { Math.random = () => 0.01; });
    const pantryPage = await pantryContext.newPage();
    const pdfCheck = await assertPantryPDF(pantryPage);
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
    await activateWithEnter('Sin gluten');
    await activateWithEnter('Fácil preparación');
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
    const eligibleNames = new Set(PANTRY_PRODUCTS.filter(({ isGlutenFree }) => isGlutenFree === true).map(item => getPantryShoppingInfo(item).name));
    async function assertRestrictedCopy(page) {
      await page.getByText(/no verifica productos empacados ni el contacto cruzado/i).waitFor();
      assert.equal(await page.getByText(/trigo partido precocido/i).count(), 0);
      await page.waitForFunction(async () => (await navigator.clipboard.readText()).length > 0);
      const copied = await page.evaluate(() => navigator.clipboard.readText());
      assert.ok(copied.length > 0, 'La lista copiada no debe estar vacía.');
      const names = copied.split('\n').map((line) => {
        assert.match(line, /^.+: .+ - \$\d+\.\d{2} \| Origen: Estimación de NutriChilango/);
        assert.ok(line.includes('Buscar: https://www.google.com/search?q='));
        return line.split(': ', 1)[0];
      });
      assert.ok(names.every((name) => eligibleNames.has(name)), 'Copiar no debe incluir productos sin marca afirmativa.');
    }
    await pantryPage.evaluate(() => navigator.clipboard.writeText(''));
    await activateWithEnter('Copiar');
    await assertRestrictedCopy(pantryPage);
    await pdfCheck({ activateWithEnter, expectedFilename: 'despensa-vegana-4personas-biweekly.pdf' });
    await activateWithEnter('Compartir configuración');
    await pantryPage.getByText('Enlace copiado', { exact: true }).waitFor();
    await pantryPage.getByText('Enlace copiado', { exact: true }).waitFor();
    const sharedUrl = new URL(await pantryPage.evaluate(() => navigator.clipboard.readText()));
    assert.equal(sharedUrl.origin + sharedUrl.pathname, origin + '/despensa');
    assert.deepEqual(Object.fromEntries(sharedUrl.searchParams), { size: '4', prefs: 'Económico,Sin gluten,Fácil preparación', freq: 'biweekly' });
    await pantryContext.close();

    const reader = await browser.newContext({ serviceWorkers: 'block', viewport: { width: 390, height: 844 } });
    await reader.route('**/*', (route) =>
      new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    await reader.grantPermissions(['clipboard-read', 'clipboard-write'], { origin });
    await reader.addInitScript(() => { Math.random = () => 0.01; });
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
    await sharedPage.evaluate(() => navigator.clipboard.writeText(''));
    await sharedPage.getByRole('button', { name: 'Copiar', exact: true }).click();
    await assertRestrictedCopy(sharedPage);

    // Conservar el mismo perfil y su lista previa al abrir una combinación sin coincidencias.
    const unmatched = new URL(sharedUrl);
    unmatched.searchParams.set('prefs', 'Sin gluten,Orgánico');
    assert.equal((await sharedPage.goto(unmatched.href)).status(), 200);
    await useShared.click();
    await sharedPage.getByRole('button', { name: 'Siguiente' }).click();
    await sharedPage.getByRole('button', { name: 'Siguiente' }).click();
    await sharedPage.getByRole('button', { name: 'Generar lista' }).click();
    await sharedPage.getByText(/No hay productos del catálogo que coincidan/i).waitFor();
    for (const name of ['Copiar', 'PDF', 'Vista Previa']) {
      assert.equal(await sharedPage.getByRole('button', { name, exact: true }).isDisabled(), true);
    }
    assert.equal(await sharedPage.getByRole('button', { name: 'Compartir configuración' }).isEnabled(), true);
    const persisted = await sharedPage.evaluate(() => JSON.parse(localStorage.getItem('nutrichilango-storage')).state);
    assert.deepEqual(persisted.generatedPantry, []);
    console.log('Chromium: exclusión preservada al crear, copiar y aplicar un enlace; sin lista anterior si no hay coincidencias.');
    await sharedPage.getByRole('button', { name: 'Nueva lista' }).click();
    await sharedPage.getByRole('button', { name: '4', exact: true }).click();
    await sharedPage.getByRole('button', { name: 'Siguiente' }).click();
    await sharedPage.getByRole('button', { name: 'Siguiente' }).click();
    assert.equal(await sharedPage.getByRole('radio', { checked: true }).count(), 0);
    assert.equal(await sharedPage.getByRole('button', { name: 'Generar lista' }).isDisabled(), true);
    // Sin restricciones: el nombre local, la referencia del precio y la guía son visibles.
    const unrestricted = new URL(origin + '/despensa?size=2&prefs=&freq=weekly');
    assert.equal((await sharedPage.goto(unrestricted.href)).status(), 200);
    await useShared.click();
    await sharedPage.getByRole('button', { name: 'Siguiente' }).click();
    await sharedPage.getByRole('button', { name: 'Siguiente' }).click();
    await sharedPage.getByRole('button', { name: 'Generar lista' }).click();
    const bulgur = sharedPage.getByText('Trigo partido precocido (bulgur)', { exact: true });
    await bulgur.waitFor();
    const bulgurCard = bulgur.locator('../../..');
    assert.equal(await bulgurCard.getByText('$35.00', { exact: true }).count(), 1);
    assert.equal(await bulgurCard.getByText(/contiene gluten/i).count(), 1);
    assert.equal(await bulgurCard.getByText(/\$70.00 MXN por 1 kg/).count(), 1);
    assert.equal(await bulgurCard.getByRole('link', { name: 'Sinai Deli: bulgur Krinos, 1 kg' }).getAttribute('href'), 'https://shop.sinaidelibakery.com/producto/bulgur-krinos-1-kg-8535');
    const generated = await sharedPage.evaluate(() => JSON.parse(localStorage.getItem('nutrichilango-storage')).state.generatedPantry);
    assert.equal(await sharedPage.getByRole('link', { name: /Buscar .* en CDMX/ }).count(), generated.length);
    assert.equal(await sharedPage.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
    await sharedPage.getByRole('button', { name: 'Copiar', exact: true }).click();
    await sharedPage.waitForFunction(async () => (await navigator.clipboard.readText()).includes('Trigo partido precocido (bulgur): 500 g - $35.00'));
    await sharedPage.getByRole('button', { name: 'Vista Previa', exact: true }).click();
    const preview = sharedPage.getByRole('dialog');
    await preview.getByRole('link', { name: 'Sinai Deli: bulgur Krinos, 1 kg' }).waitFor();
    await sharedPage.keyboard.press('Escape');
    await preview.waitFor({ state: 'hidden' });
    assert.equal(await sharedPage.getByRole('link', { name: 'Explorar recetas vegetales', exact: true }).getAttribute('href'), '/dishes-comparison');
    await sharedPage.getByRole('link', { name: 'Recetas según mi despensa', exact: true }).click();
    await sharedPage.getByRole('heading', { name: headings.get('/dishes-comparison').name, exact: true }).waitFor();
    assert.equal(new URL(sharedPage.url()).searchParams.get('despensa'), '1');
    const pantryFilter = sharedPage.getByRole('checkbox', { name: /ingrediente principal de mi lista/i });
    assert.equal(await pantryFilter.isChecked(), true);
    assert.equal(await sharedPage.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
    await pantryFilter.click();
    await sharedPage.waitForURL(url => !url.searchParams.has('despensa'));
    await sharedPage.getByRole('checkbox', { name: /ingrediente principal de mi lista/i, checked: false }).waitFor();
    await sharedPage.getByText('Principal: Tofu', { exact: true }).first().waitFor();
    assert.equal(new URL(sharedPage.url()).searchParams.has('despensa'), false);
    assert.equal(await sharedPage.getByText('Principal: Tofu', { exact: true }).count(), 2);
    // General access is preserved; removing the optional filter returns to it.
    await sharedPage.getByRole('heading', { name: headings.get('/dishes-comparison').name, exact: true }).waitFor();
    assert.equal(new URL(sharedPage.url()).pathname, '/dishes-comparison');
    console.log('Chromium: orientación de compra, fuente proporcional de bulgur, copia, vista previa y enlace de recetas verificados.');
    await sharedPage.getByText('Confirmar lo que tengo en casa (opcional)', { exact: true }).click();
    const availableTofu = sharedPage.getByRole('combobox', { name: 'Disponibilidad: Tofu firme' });
    assert.equal(await availableTofu.inputValue(), 'unknown');
    await availableTofu.selectOption('available');
    await sharedPage.getByText(/Revisar ingredientes frente a mi lista · Coincidencias exactas: 1/).first().waitFor();
    await sharedPage.getByText(/Revisar ingredientes frente a mi lista · Coincidencias exactas: 1/).first().click();
    await sharedPage.getByText('Producto confirmado por ti; cantidad sin comprobar.', { exact: true }).filter({ visible: true }).first().waitFor();
    assert.equal(await sharedPage.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
    await availableTofu.selectOption('missing');
    await sharedPage.getByText('Producto declarado como faltante.', { exact: true }).filter({ visible: true }).first().waitFor();
    await sharedPage.getByRole('button', { name: 'Borrar confirmaciones' }).click();
    assert.equal(await availableTofu.inputValue(), 'unknown');
    assert.deepEqual(await sharedPage.evaluate(() => JSON.parse(localStorage.getItem('nutrichilango-storage')).state.generatedPantry), generated);
    console.log('Chromium: confirmación voluntaria, faltante y borrado sin modificar lista de compras.');
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




