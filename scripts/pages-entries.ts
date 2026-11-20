import { load } from 'cheerio';
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
      const template = typeof entry.source === 'string' ? entry.source : Buffer.from(entry.source).toString('utf8');
      const $ = load(template);
      const canonical = $('head link[rel="canonical"]');
      const openGraphUrl = $('head meta[property="og:url"]');
      const homepage = canonical.attr('href');
      if (!homepage || canonical.length !== 1 || openGraphUrl.length !== 1) {
        this.error('Las entradas de GitHub Pages requieren una URL canónica y una etiqueta og:url.');
      }
      for (const route of pagesRoutes) {
        const url = new URL(route + '/', homepage).href;
        canonical.attr('href', url);
        openGraphUrl.attr('content', url);
        this.emitFile({ type: 'asset', fileName: `${route.slice(1)}/index.html`, source: $.html() });
      }
    },
  };
}
