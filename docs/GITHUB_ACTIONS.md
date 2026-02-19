# Documentación de Flujos de Trabajo (GitHub Actions)

El proyecto Nutrichilango cuenta con dos flujos de trabajo (*workflows*) principales automatizados mediante GitHub Actions, ubicados en `.github/workflows`. Su objetivo es garantizar la calidad del código, el despliegue continuo (CI/CD) y la actualización automatizada y verificable de datos.

---

## 1. Flujo de Despliegue (\`deploy.yml\`)

Este flujo de trabajo implementa las prácticas de Integración Continua (CI) y Despliegue Continuo (CD) para la aplicación web.

### 🎯 Objetivo General
Asegurar que cualquier código que llegue a producción pase por controles estrictos de calidad y publicar la aplicación automáticamente en GitHub Pages.

### ⚡ Disparadores (Triggers)
- **\`push\` a la rama \`main\`:** Se ejecuta automáticamente cada vez que se hace merge de un Pull Request o un push directo hacia la rama principal.

### ⚙️ Secuencia de Ejecución (Jobs)
Corre en un entorno \`ubuntu-latest\` bajo Node.js versión 20. Comprende los siguientes pasos clave, en un modelo de falla rústico (si un paso falla, se detiene el despliegue):

1. **Checkout & Setup (\`actions/checkout@v4\`, \`actions/setup-node@v4\`):** Clona el repositorio y prepara Node 20 utilizando caché de \`npm\` para agilizar las descargas en futuras ejecuciones.
2. **Instalación de Dependencias:** Ejecuta \`npm ci\` (Clean Install), lo que asegura que las dependencias instaladas sean idénticas a las almacenadas en \`package-lock.json\`, garantizando congruencia en el build y evitando vulnerabilidades introducidas por subversiones (semver).
3. **Control de Calidad (Linting & Testing):**
   - Corre \`npm run lint\` (ESLint) para verificar estilos y convenciones estáticas en TypeScript/React.
   - Corre \`npm test\` (Vitest) para asegurar que la lógica de negocio, cálculos y reglas de integridad de datos pasen con éxito.
4. **Construcción (Build):** Compila la aplicación de React y Vite hacia la carpeta \`dist\`.
5. **Despliegue (\`peaceiris/actions-gh-pages@v4\`):** Publica el contenido de la carpeta \`/dist\` en la rama \`gh-pages\` utilizando un token nativo de GitHub, lo cual hace que GitHub Pages sirva la última versión viva del sitio.

---

## 2. Flujo de Actualización Semanal de Datos (\`weekly-update.yml\`)

Este flujo representa el componente fundamental de la arquitectura de "Datos Confiables y Dinámicos" del proyecto, implementando un Data Pipeline.

### 🎯 Objetivo General
Automatizar la ingestión, auditoría y propuesta de actualización de precios e información nutricional sin dependencia de intervención manual, manteniendo un modelo descentralizado de "Actualización en dos fases".

### ⚡ Disparadores (Triggers)
- **\`schedule\` (Cron):** Se ejecuta periódicamente basado en el cron \`0 0 * * 1\` (Todos los lunes a las 00:00 UTC).
- **\`workflow_dispatch\`:** Permite ejecución manual desde la interfaz de GitHub Actions por parte de los administradores.

### ⚙️ Secuencia de Ejecución (Jobs)
Corre en \`ubuntu-latest\` con Node 20 y requiere permisos elevados de \`write\` en pull-requests y en contenido del repositorio temporalmente.

1. **Instalación (\`npm ci\`):** Clona y asegura las dependencias del script procesador de datos.
2. **Pipeline de Datos (\`scripts/update-data.mjs\`):**
   - Se ejecuta el script de actualización en Node (\`node scripts/update-data.mjs\`).
   - El script captura las entradas JSON colocadas en \`data/updates/\` (generalmente agregadas vía otros jobs o scrapers en el ecosistema).
   - Realiza la **Fase 1 (Ingesta y Auditoría)** donde evalúa la estructura contra un esquema de ZOD (\`schema-check.mjs\`) determinando la precisión técnica y la congruencia científica (ej. cálculos de macronutrientes correctos y proporciones costo-beneficio validas).
   - Realiza la **Fase 2 (Commit/Apply)** donde actualiza los datos fusionados (Stores, Products, Dishes) sobre-escribiendo de modo permanente el almacenamiento de persistencia (ej. \`conventional.json\`, \`vegan.json\`, \`dishes.json\`).
   - Todos los resultados de la operación (éxitosos o fallidos) se capturan y son inyectados al entorno bajo \`$GITHUB_OUTPUT\`.
3. **Generación de Pull Request (\`peter-evans/create-pull-request@v6\`):**
   - Transforma los datos sobrescritos por la fase 2 local en una nueva rama remota (\`automation/content-update\`).
   - Emite un **Pull Request automatizado** hacia la rama \`main\`.
   - Incluye como cuerpo del PR el reporte extraído de la etapa 2, documentando exactamente qué productos y precios cambiaron o qué fallas técnicas de validación impidieron actualizar algo.
   - Etiqueta dinámicamente el PR con \`data-update\` y \`needs-review\`.

### 🛡️ Medidas de Seguridad y Buenas Prácticas Notables de las Actions
- **No Despliegue en Ciego:** El job \`weekly-update\` **no hace push directamente a main**. Genera un Pull Request para revisión humana (\`needs-review\`), previniendo caídas en producción si la data enviada es errónea pero la sintaxis fuera "válida".
- **Auditoría Local (Two-Phase):** Al vincular estrechamente el script ECMAScript de auditoria ZOD a la ejecución en el workflow en nube, aseguramos que el GitHub Action sirva solo como orquestador, y no posea lógica dura por sí mismo.
- **Uso estricto de \`npm ci\`:** Protege contra derivas de versiones, fundamental en canales automatizados.
