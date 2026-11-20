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

Al agregar una ruta, actualizar `pagesRoutes`. La prueba contrasta esa lista con
las rutas de `App.tsx` y comprueba el HTML emitido por Vite. Para verificar el
resultado, servir `dist` con un servidor estático **sin fallback SPA** y comprobar
entrada directa y recarga, además de un 404 para una ruta inexistente.

## Entorno de la actualización semanal

La actualización semanal usa `ubuntu-24.04` y Node 22, con la versión de Playwright
resuelta por `package-lock.json` (actualmente 1.58.2). Se evita `ubuntu-latest`
porque puede cambiar de distribución sin que cambien las dependencias nativas
del navegador. Después de instalar Chromium, `scripts/verify-chromium.mjs`
comprueba su inicio y renderizado local antes de contactar fuentes de precios.
Esto valida el navegador, no la disponibilidad ni la calidad de las fuentes.
