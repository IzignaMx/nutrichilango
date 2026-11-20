import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
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

  it('genera el HTML construido para cada ruta y no crea un fallback 404', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'nutri-pages-'));
    try {
      await writeFile(path.join(root, 'index.html'), '<html><head></head><body><div id="root"></div><script type="module" src="/entry.js"></script></body></html>');
      await writeFile(path.join(root, 'entry.js'), 'document.getElementById("root").textContent = "Entrada";');
      await build({ root, configFile: false, plugins: [pagesEntries()], logLevel: 'silent' });
      const output = path.join(root, 'dist');
      const entry = await readFile(path.join(output, 'index.html'), 'utf8');
      expect(entry).toMatch(/src="\/assets\//);
      for (const route of pagesRoutes) {
        expect(await readFile(path.join(output, route, 'index.html'), 'utf8')).toBe(entry);
      }
      expect((await readdir(output)).sort()).toEqual(['assets', 'index.html', ...pagesRoutes.map((route) => route.slice(1))].sort());
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });
});
