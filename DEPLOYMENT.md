# Deployment y Build

## 📦 Build de Producción

```bash
npm run build
```

## 🚀 Deployment en Lovable

1. Conecta tu proyecto a Lovable
2. Haz push a tu repositorio
3. Usa el botón "Publish" en Lovable

## 🌐 Deployment Manual

```bash
# Build
npm run build

# Subir carpeta dist/ a tu hosting
# Ejemplo para Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## ⚙️ Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# APIs (opcional para datos en tiempo real)
VITE_STORE_API_KEY=tu_api_key_aqui
VITE_NUTRITION_API_KEY=tu_api_key_aqui

# Configuración de desarrollo
VITE_DEV_MODE=true
```

## 🔧 Configuración de TypeScript

El proyecto usa configuración estricta de TypeScript:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```