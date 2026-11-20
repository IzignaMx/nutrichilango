import { chromium } from 'playwright';

// Comprobar el navegador sin contactar proveedores ni escribir datos.
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.setContent('<title>NutriChilango CI</title>');
  if (await page.title() !== 'NutriChilango CI') {
    throw new Error('Chromium no pudo renderizar la prueba local.');
  }
  console.log(`Chromium ${browser.version()}: inicio y renderizado correctos.`);
} finally {
  await browser.close();
}
