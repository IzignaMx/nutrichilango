
# NutriChilango

[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange.svg)](package.json)

Una plataforma web dedicada a facilitar la transición hacia una alimentación basada en plantas mediante comparaciones objetivas de precios y valores nutricionales en la Ciudad de México.

## 🌱 Propósito

**NutriChilango** democratiza el acceso a información nutricional y de precios para facilitar decisiones alimentarias informadas, promoviendo una transición sostenible hacia una alimentación basada en plantas.

## ✨ Características Principales

### 🔍 Comparaciones Inteligentes
- **Animal vs Comercial Plant-Based**: Productos listos para consumir
- **Animal vs Casero Plant-Based**: Preparaciones caseras con recetas incluidas
- **Comercial vs Casero Plant-Based**: Análisis de ahorro al cocinar en casa

### 📊 Análisis Nutricional
- Gráficas de barras comparativas de macronutrientes
- Perfiles nutricionales en radar charts
- Análisis basado en valores de referencia mexicanos (IDR)
- Datos de USDA FoodData Central e INCMNSZ

### 🏪 Cobertura de Mercado
- **Supermercados**: Soriana, Walmart, Chedraui
- **Mercados Tradicionales**: Central de Abastos, Mercado Jamaica
- **Tiendas Especializadas**: Naturistas, veganas, orgánicas
- **Plataformas Online**: Integración con APIs de e-commerce

### 🎯 Funcionalidades Avanzadas
- Búsqueda inteligente y filtros dinámicos
- Mapas interactivos de ubicaciones
- Recetas con costos calculados
- Análisis de tendencias de precios
- Rankings de mejores valores por tienda

## 🛠️ Tecnologías

- **Frontend**: React 18, TypeScript, Vite
- **UI/UX**: Tailwind CSS, shadcn/ui, Lucide React
- **Gráficas**: Recharts
- **Routing**: React Router DOM
- **Estado**: TanStack React Query
- **Accesibilidad**: WCAG 2.1 AA compliant

## 📋 Requisitos Previos

- **Node.js**: 18.0.0 o superior
- **npm**: 8.0.0 o superior (o yarn equivalente)

## 🚀 Instalación y Configuración

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/usuario/nutrichilango.git
cd nutrichilango

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir navegador en http://localhost:5173
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con hot-reload
npm run build        # Build de producción
npm run preview      # Preview del build de producción
npm run lint         # Linting con ESLint
npm run type-check   # Verificación de tipos TypeScript
```

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── ui/              # Componentes base de shadcn/ui
│   ├── layout/          # Componentes de layout (Header, Footer)
│   ├── comparison/      # Componentes de comparación
│   └── nutritional-analysis/ # Análisis nutricional
├── pages/               # Páginas de la aplicación
│   ├── Index.tsx        # Página principal
│   ├── About.tsx        # Acerca de nosotros
│   ├── HowItWorks.tsx   # Cómo funciona
│   ├── DataSources.tsx  # Fuentes de datos
│   ├── Guide.tsx        # Guía de uso
│   ├── Privacy.tsx      # Política de privacidad
│   ├── Terms.tsx        # Términos de uso
│   └── Accessibility.tsx # Accesibilidad
├── data/                # Datos y tipos
│   ├── stores/          # Datos por tienda/mercado
│   └── types.ts         # Definiciones TypeScript
├── hooks/               # Custom hooks
└── lib/                 # Utilidades y configuración
```

## 🔧 Configuración de Desarrollo

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# APIs (opcional para datos en tiempo real)
VITE_STORE_API_KEY=tu_api_key_aqui
VITE_NUTRITION_API_KEY=tu_api_key_aqui

# Configuración de desarrollo
VITE_DEV_MODE=true
```

### Configuración de TypeScript

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

## 📊 Fuentes de Datos

### Precios
- **Supermercados**: APIs y scraping ético de sitios oficiales
- **Mercados**: Relevamientos presenciales semanales
- **Tiendas Especializadas**: Contacto directo y verificación

### Información Nutricional
- **USDA FoodData Central**: Base de datos oficial
- **INCMNSZ**: Tablas nutricionales mexicanas
- **Etiquetas de Productos**: Información directa del fabricante
- **Literatura Científica**: Estudios peer-reviewed

### Actualización
- **Precios**: Semanalmente
- **Datos Nutricionales**: Mensualmente
- **Recetas**: Revisión trimestral

## ♿ Accesibilidad

### Cumplimiento de Estándares
- **WCAG 2.1 Nivel AA**: Cumplimiento completo
- **Section 508**: Compatible
- **ADA/AODA**: Requisitos cubiertos
- **EN 301 549**: Estándar europeo

### Características de Accesibilidad
- ✅ Navegación por teclado completa
- ✅ Lectores de pantalla optimizados (NVDA, JAWS, VoiceOver, TalkBack)
- ✅ Contraste de colores AAA donde sea posible
- ✅ Texto alternativo para todas las imágenes
- ✅ Estructura semántica HTML5
- ✅ ARIA labels y landmarks
- ✅ Skip links para navegación rápida
- ✅ Focus management en modales y tabs
- ✅ Botones de tamaño apropiado (mínimo 44x44px)
- ✅ Zoom hasta 200% sin pérdida de funcionalidad

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm run test

# Coverage report
npm run test:coverage

# Tests de accesibilidad
npm run test:a11y

# Tests E2E (si están configurados)
npm run test:e2e
```

## 📦 Build y Deployment

### Build de Producción

```bash
npm run build
```

### Deployment en Lovable

1. Conecta tu proyecto a Lovable
2. Haz push a tu repositorio
3. Usa el botón "Publish" en Lovable

### Deployment Manual

```bash
# Build
npm run build

# Subir carpeta dist/ a tu hosting
# Ejemplo para Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🤝 Contribuir

### Reporte de Issues
1. Revisa issues existentes antes de crear uno nuevo
2. Incluye pasos para reproducir el problema
3. Especifica navegador y versión del OS

### Pull Requests
1. Fork el repositorio
2. Crea una rama feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

### Estándares de Código
- Usar TypeScript estricto
- Seguir convenciones de nomenclatura establecidas
- Incluir tests para nuevas funcionalidades
- Mantener accesibilidad en nuevos componentes

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto y Soporte

- **Email**: [dev@izignamx.com](mailto:dev@izignamx.com)
- **Facebook**: [@omni.veg](https://www.facebook.com/omni.veg)
- **Website**: [NutriChilango](https://tu-dominio.com)
- **Documentación**: [Guía Completa](https://tu-dominio.com/guide)
- **Issues**: [GitHub Issues](https://github.com/usuario/repo/issues)
- **Discusiones**: [GitHub Discussions](https://github.com/usuario/repo/discussions)

## 🙏 Agradecimientos

- **USDA FoodData Central** por proporcionar datos nutricionales abiertos
- **INCMNSZ** por las tablas nutricionales mexicanas
- **Comunidad Open Source** por las herramientas utilizadas
- **Colaboradores** que proporcionan datos de precios locales

## 📈 Roadmap

### Versión 1.1 (Próximo Trimestre)
- [ ] API pública para desarrolladores
- [ ] Sistema de alertas de precios
- [ ] Calculadora nutricional personalizada
- [ ] Exportación de reportes PDF

### Versión 1.2 (Mediano Plazo)
- [ ] Aplicación móvil nativa
- [ ] Integración con apps de delivery
- [ ] Sistema de reviews comunitarios
- [ ] Análisis de impacto ambiental

### Versión 2.0 (Largo Plazo)
- [ ] Expansión a otras ciudades mexicanas
- [ ] Integración con wearables de salud
- [ ] Machine Learning para recomendaciones
- [ ] Marketplace de productos plant-based

---

**¿Te gusta el proyecto?** ⭐ Dale una estrella en GitHub y compártelo con tu comunidad.

**¿Encontraste un bug?** 🐛 [Reportalo aquí](https://github.com/usuario/repo/issues/new).

**¿Quieres contribuir?** 🚀 Revisa nuestras [guías de contribución](CONTRIBUTING.md).

**¿Problemas de accesibilidad?** ♿ [Contáctanos](mailto:dev@izignamx.com?subject=Reporte%20de%20Accesibilidad).
