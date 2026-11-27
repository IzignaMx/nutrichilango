# Documentación de Flujos de Trabajo (GitHub Actions)

Los flujos de GitHub Actions están en `.github/workflows`. Comprueban la aplicación, publican el sitio y verifican el entorno del actualizador de precios.

---

## 1. Flujo de Despliegue (\`deploy.yml\`)

Este flujo de trabajo implementa las prácticas de Integración Continua (CI) y Despliegue Continuo (CD) para la aplicación web.

### 🎯 Objetivo General
Asegurar que cualquier código que llegue a producción pase por controles estrictos de calidad y publicar la aplicación automáticamente en GitHub Pages.

### ⚡ Disparadores (Triggers)
- **\`push\` a la rama \`main\`:** Se ejecuta automáticamente cada vez que se hace merge de un Pull Request o un push directo hacia la rama principal.

### ⚙️ Secuencia de Ejecución (Jobs)
Corre en un entorno \`ubuntu-24.04\` bajo Node.js versión 22. Comprende los siguientes pasos clave, en un modelo de falla rústico (si un paso falla, se detiene el despliegue):

1. **Checkout & Setup (\`actions/checkout@v4\`, \`actions/setup-node@v4\`):** Clona el repositorio y prepara Node 22 utilizando caché de \`npm\` para agilizar las descargas en futuras ejecuciones.
2. **Instalación de Dependencias:** Ejecuta \`npm ci\` (Clean Install), lo que asegura que las dependencias instaladas sean idénticas a las almacenadas en \`package-lock.json\`, garantizando congruencia en el build y evitando vulnerabilidades introducidas por subversiones (semver).
3. **Control de Calidad (Linting & Testing):**
   - Corre \`npm run lint\` (ESLint) para verificar estilos y convenciones estáticas en TypeScript/React.
   - Corre \`npm test\` (Vitest) para asegurar que la lógica de negocio, cálculos y reglas de integridad de datos pasen con éxito.
4. **Construcción (Build):** Compila la aplicación de React y Vite hacia la carpeta \`dist\`.
5. **Despliegue (\`peaceiris/actions-gh-pages@v4\`):** Publica el contenido de la carpeta \`/dist\` en la rama \`gh-pages\` utilizando un token nativo de GitHub, lo cual hace que GitHub Pages sirva la última versión viva del sitio.

---

## 2. Auditoría semanal de fuentes (`weekly-update.yml`)

Se programa los lunes a las 12:23 UTC (06:23 CDMX), con ejecución manual disponible.
Utiliza Ubuntu 24.04 y Python, sin instalar Chromium ni dependencias de npm. Verifica metadatos,
diccionario y cabeceras de la fuente oficial Profeco QQP. Guarda un reporte temporal como
artefacto por 14 días. Las pruebas locales del contrato se ejecutan en PRs que modifican
el monitor; las consultas externas sólo ocurren fuera de PR.

La publicación automática permanece detenida. No ejecuta el extractor anterior ni el actualizador,
no crea PRs de datos y tiene permisos de sólo lectura. Ver
[automatización de fuentes](fuentes-precios-automatizacion.md) para criterios de reactivación.

## 3. Verificación de rutas en PR (`pages-smoke.yml`)

En PR hacia `main`, ejecuta lint, Vitest, las pruebas nativas de precios y los dos proyectos TypeScript con
Ubuntu 24.04 y Node.js 22. Construye el sitio, comprueba que incluye `CNAME` y verifica en Chromium las
entradas directas y recargas de todas las rutas públicas, un HTTP 404 real y una comparación con sus
importes, precios normalizados y fechas de observación. Sirve el build local, no consulta tiendas ni despliega.
