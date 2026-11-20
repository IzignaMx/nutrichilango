import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { load } from 'cheerio';
import { describe, expect, it } from 'vitest';
import { build } from 'vite';
import { pagesEntries, pagesRoutes } from './pages-entries';

describe('Entradas estáticas de GitHub Pages', () => {
  it('cubre todas las rutas declaradas sin incluir el comodín', async () => {
    const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8');
    const routes = [...app.matchAll(/<Route\s+path="([^"]+)"/g)]
      .map((match) => match[1]).filter((route) => route !== '/' && route !== '*');
    expect([...pagesRoutes].sort()).toEqual(routes.sort());
  });

  it('publica en el sitemap las mismas URLs canónicas sin prometer frecuencia', async () => {
    const xml = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
    const $ = load(xml, { xml: true });
    const origin = 'https://nutrichilango.izignamx.com';
    const urls = ['/', ...pagesRoutes.map((route) => route + '/')].map((route) => origin + route);
    expect($('url > loc').map((_, loc) => $(loc).text()).get().sort()).toEqual(urls.sort());
    expect($('changefreq')).toHaveLength(0);
  });

  it('genera el HTML construido para cada ruta y no crea un fallback 404', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'nutri-pages-'));
    try {
      const template = await readFile(new URL('../index.html', import.meta.url), 'utf8');
      await writeFile(path.join(root, 'index.html'), template.replace('/src/main.tsx', '/entry.js'));
      await mkdir(path.join(root, 'public'));
      await writeFile(path.join(root, 'public', 'CNAME'), await readFile(new URL('../public/CNAME', import.meta.url)));
      await writeFile(path.join(root, 'entry.js'), 'document.getElementById("root").textContent = "Entrada";');
      await build({ root, configFile: false, plugins: [pagesEntries()], logLevel: 'silent' });
      const output = path.join(root, 'dist');
      const entry = load(await readFile(path.join(output, 'index.html'), 'utf8'));
      const moduleAsset = entry('script[type="module"]').attr('src');
      expect(moduleAsset).toMatch(/^\/assets\//);
      const origin = 'https://nutrichilango.izignamx.com';
      expect((await readFile(path.join(output, 'CNAME'), 'utf8')).trim()).toBe(new URL(origin).hostname);
      for (const route of ['/', ...pagesRoutes]) {
        const routeHtml = await readFile(path.join(output, route, 'index.html'), 'utf8');
        const $ = load(routeHtml);
        const expectedUrl = route === '/' ? origin + '/' : origin + route + '/';
        expect($('link[rel="canonical"]').attr('href')).toBe(expectedUrl);
        expect($('meta[property="og:url"]').attr('content')).toBe(expectedUrl);
        expect($('script[type="module"]').attr('src')).toBe(moduleAsset);
        expect($('#root')).toHaveLength(1);
        for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
          expect($(selector).attr('content')).toMatch(/precios de referencia/i);
          expect($(selector).attr('content')).not.toMatch(/tiempo real|40%|duplica/i);
        }
      }
      expect((await readdir(output)).sort()).toEqual(['CNAME', 'assets', 'index.html', ...pagesRoutes.map((route) => route.slice(1))].sort());
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });
});
