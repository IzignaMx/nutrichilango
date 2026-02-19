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