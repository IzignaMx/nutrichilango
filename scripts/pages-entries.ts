import type { Plugin } from 'vite';

// Solo rutas públicas conocidas: no convertir los errores 404 en respuestas 200.
export const pagesRoutes = [
  '/dishes-comparison', '/about', '/how-it-works', '/data-sources', '/guide',
  '/privacy', '/terms', '/accessibility', '/despensa', '/emprendimientos',
] as const;

export function pagesEntries(): Plugin {
  return {
    name: 'pages-route-entries',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const entry = bundle['index.html'];
      if (!entry || entry.type !== 'asset') {
        this.error('Falta index.html para generar las entradas de GitHub Pages.');
      }
      for (const route of pagesRoutes) {
        this.emitFile({ type: 'asset', fileName: `${route.slice(1)}/index.html`, source: entry.source });
      }
    },
  };
}
