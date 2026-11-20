# Despliegue y Construcción - NutriChilango

Para detalles sobre la configuración del entorno local, consulta la [Guía de Desarrollo](docs/DEVELOPMENT_GUIDE.md).

## 🤖 Automatización con GitHub Actions (CI/CD)

NutriChilango utiliza **GitHub Actions** para automatizar el control de calidad y el despliegue a producción. Cada vez que realizas un `push` a la rama `main`, el pipeline ejecuta:

1. **Linting**: Verificación de estándares de código con ESLint.
2. **Pruebas**: Ejecución de tests unitarios con Vitest.
3. **Construcción**: Generación del bundle de producción optimizado.
4. **Despliegue**: Los archivos resultantes se suben automáticamente a la rama `gh-pages` para ser servidos por GitHub Pages.

### Requisitos del Repositorio en GitHub

Para asegurar que el despliegue automático funcione correctamente:

1. Ve a la pestaña **Settings** de tu repositorio.
2. Navega a **Actions > General**.
3. En la sección **Workflow permissions**, selecciona **"Read and write permissions"**.
4. Haz clic en **Save**.

## 📦 Build de Producción Local

Si necesitas generar el build manualmente en tu máquina:

```bash
npm run build
```

## 🚀 Despliegue en GitHub Pages

Una vez que el pipeline ha creado la rama `gh-pages`:

1. Ve a **Settings > Pages**.
2. En **Build and deployment > Branch**, selecciona `gh-pages` y la carpeta `/(root)`.
3. Haz clic en **Save**.

## 🌐 Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto para desarrollo local:

```env
# Ejemplo de variables
VITE_APP_TITLE=NutriChilango
VITE_DEV_MODE=true
```

## 🔧 Configuración de TypeScript

El proyecto utiliza una configuración estricta para garantizar la integridad de los datos nutricionales. Consulta `tsconfig.json` para más detalles.
## Entradas directas y recargas en GitHub Pages

El plugin `scripts/pages-entries.ts` genera un `index.html` por cada ruta pública
conocida durante `npm run build`. Así GitHub Pages puede servir, por ejemplo,
`/emprendimientos/` y `/despensa/` sin depender de una navegación previa desde el
inicio. Una dirección sin barra final puede redirigir a la misma ruta con barra.
BrowserRouter conserva los enlaces limpios y los parámetros de consulta.
No se genera un `404.html` que convierta direcciones desconocidas en éxitos.
Las entradas, Open Graph y el sitemap usan la dirección canónica de cada ruta.

El archivo `public/CNAME` se copia a `dist/CNAME`. Consérvalo para que la
publicación desde la rama `gh-pages` no elimine la configuración del dominio
personalizado. Tras un despliegue autorizado, comprueba en el dominio público
que `/CNAME` conserva `nutrichilango.izignamx.com`, que una ruta directa abre y
recarga, y que una dirección desconocida responde 404.

Al agregar una ruta pública, actualizar `pagesRoutes` y el sitemap. La prueba contrasta esa lista con
las rutas de `App.tsx` y comprueba el HTML emitido por Vite. Para verificar el
resultado, servir `dist` con un servidor estático **sin fallback SPA** y comprobar
entrada directa y recarga, además de un 404 para una ruta inexistente.

## Validación semanal de precios

El workflow `weekly-update.yml` usa Ubuntu 24.04 y Node 22. Valida el registro
de fuentes y ejecuta pruebas sintéticas que aíslan el catálogo en directorios
temporales. Se ejecuta semanalmente, a demanda y en PR que tocan la ruta de
actualización. Tiene permisos de lectura y no abre PR, escribe en ramas ni
despliega. Comprueba que los precios y la fecha del checkout quedan intactos.

Se retiró el extractor anterior: buscaba en comercios alternativos y no
demostraba que la oferta correspondiera a la sucursal y presentación del catálogo.
Chromium se sigue verificando en `pages-smoke.yml` para el build web; que funcione
no demuestra que una fuente de precios esté disponible ni que pueda reutilizarse.

Antes de habilitar una carga real, aplicar los pasos de
[reactivación controlada](docs/precios-y-fechas.md#reactivación-controlada).
