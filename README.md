
# NutriChilango

[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-green.svg)](ACCESSIBILITY.md)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-2.0.0-orange.svg)](docs/CHANGELOG.md)

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

### 🔄 Estado de los precios
- **Precios de referencia**: El catálogo muestra observaciones publicadas. No se actualiza en tiempo real ni tiene una frecuencia de actualización garantizada.
- **Automatización en pausa**: La tarea semanal comprueba que el navegador funciona. No consulta tiendas ni propone precios nuevos hasta que el extractor pueda comprobar la presentación en la fuente.
- **Fechas**: El pie de página muestra la última observación publicada y cada producto indica su fecha cuando está registrada. Consulta cómo [interpretar los precios y las fechas](docs/precios-y-fechas.md).

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/usuario/nutrichilango.git
cd nutrichilango

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📚 Documentación

NutriChilango utiliza un sistema de documentación estructurado para mantener una "fuente única de verdad":

- **[Arquitectura de Sistema](ARCHITECTURE.md)** - Diseño técnico, flujo de datos y decisiones de diseño (ADR).
- **[Sistema de Diseño](DESIGN_SYSTEM.md)** - Guía de tokens de diseño, componentes y principios de UI/UX.
- **[Guía de Desarrollo](docs/DEVELOPMENT_GUIDE.md)** - Configuración del entorno, scripts y flujo de trabajo.
- **[Convenciones de Agentes](AGENTS.md)** - Reglas para asistentes de IA y estándares de código.
- **[Despliegue (Deployment)](DEPLOYMENT.md)** - Guía de infraestructura y CI/CD.
- **[Contribución](CONTRIBUTING.md)** - Cómo colaborar siguiendo nuestros estándares.
- **[Accesibilidad](ACCESSIBILITY.md)** - Informe de cumplimiento WCAG 2.1 AA.
- **[Roadmap](ROADMAP.md)** - Visión a futuro y próximos pasos.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **Email**: [dev@izignamx.com](mailto:dev@izignamx.com)
- **Facebook**: [@omni.veg](https://www.facebook.com/omni.veg)
- **Issues**: [GitHub Issues](https://github.com/usuario/repo/issues)

## 🙏 Agradecimientos

- **USDA FoodData Central** por proporcionar datos nutricionales abiertos
- **INCMNSZ** por las tablas nutricionales mexicanas
- **Comunidad Open Source** por las herramientas utilizadas

---

**¿Te gusta el proyecto?** ⭐ Dale una estrella en GitHub y compártelo con tu comunidad.

**¿Encontraste un bug?** 🐛 [Reportalo aquí](https://github.com/usuario/repo/issues/new).

**¿Quieres contribuir?** 🚀 Revisa nuestras [guías de contribución](CONTRIBUTING.md).

**¿Problemas de accesibilidad?** ♿ [Contáctanos](mailto:dev@izignamx.com?subject=Reporte%20de%20Accesibilidad).
