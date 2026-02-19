# Guía de Desarrollo - NutriChilango

Bienvenido al desarrollo de NutriChilango. Esta guía contiene todo lo necesario para empezar a contribuir al proyecto.

## 🚀 Requisitos Previos

- **Node.js**: Versión 18 o superior.
- **npm** o **bun** como gestor de paquetes.

## 🛠️ Configuración del Entorno

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Construir para producción
npm run build
```

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm run build`: Genera los archivos de producción en la carpeta `dist/`.
- `npm run lint`: Ejecuta el linter (ESLint) para verificar la calidad del código.
- `npm run preview`: Previsualiza la construcción de producción localmente.

## 📂 Organización del Código

Para más detalles sobre la arquitectura, consulta [ARCHITECTURE.md](../ARCHITECTURE.md).

- `src/components`: Componentes visuales.
- `src/pages`: Vistas asociadas a rutas.
- `src/lib`: Utilidades y configuraciones externas.
- `src/hooks`: Lógica de React reutilizable.

## 🧪 Pruebas y Calidad

Actualmente utilizamos **Vitest** para pruebas unitarias.
- Ejecutar pruebas: `npm test` (si está configurado en package.json).

## 🤝 Flujo de Contribución

1. Crea una rama para tu característica: `git checkout -b feature/nueva-función`.
2. Realiza tus cambios siguiendo el [Sistema de Diseño](../DESIGN_SYSTEM.md).
3. Asegúrate de que `npm run lint` pase sin errores.
4. Envía un Pull Request con una descripción detallada en español.
