# Arquitectura de Sistema - NutriChilango

Este documento describe la arquitectura técnica, las decisiones de diseño y el flujo de datos de NutriChilango.

## 🏛️ Visión General

NutriChilango es una Single Page Application (SPA) construida con **React** y **Vite**, diseñada para ser rápida, accesible y fácil de mantener. El sistema se centra en la comparación de datos nutricionales y de precios procedentes de diversas fuentes mexicanas.

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 (Hooks, Functional Components)
- **Lenguaje**: TypeScript (Tipado estricto)
- **Estilos**: Tailwind CSS (Basado en tokens de diseño)
- **Componentes**: shadcn/ui (Radix UI)
- **Estado**: TanStack React Query (Gestión de datos asíncronos)
- **Gráficas**: Recharts (Visualización de macronutrientes)
- **Enrutamiento**: React Router DOM v6
- **Validación**: Zod

## 📁 Estructura del Proyecto

```text
src/
├── components/           # Bloques de construcción de la UI
│   ├── ui/              # Componentes base (shadcn)
│   ├── layout/          # Estructura (Header, Footer)
│   ├── comparison/      # Lógica y UI de comparadores
│   └── nutritional-analysis/ # Gráficas y resúmenes médicos
├── pages/               # Vistas de alto nivel (Rutas)
├── data/                # Datos estáticos y tipos
├── hooks/               # Lógica reutilizable y estado
├── lib/                 # Configuración de terceros (utils, providers)
└── services/            # (Opcional) Capa de abstracción de datos
```

## 🔄 Flujo de Datos

1. **Datos de Entrada**: Se consolidan datos de USDA, INCMNSZ y relevamientos de precios locales en `src/data/`.
2. **Procesamiento**: Los hooks procesan estos datos para calcular comparaciones (ej. costo por gramo de proteína).
3. **Visualización**: Componentes especializados en `nutritional-analysis` renderizan gráficas comparativas.

## ✒️ Decisiones Arquitectónicas (ADR)

### 1. Sistema de Diseño Basado en Tokens

Se decidió utilizar variables de CSS en `index.css` mapeadas en `tailwind.config.ts`. Esto permite una migración de marca completa cambiando solo los tokens, asegurando consistencia en todo el sitio.

### 2. Accesibilidad Primero (A11y)

Cada componente debe cumplir con WCAG 2.1 AA. El uso de `shadcn/ui` (basado en Radix) garantiza primitivas accesibles por defecto.

### 3. Tipado Estricto de Datos Nutricionales

Para evitar errores en cálculos de salud, se utiliza TypeScript y Zod para validar la estructura de cada alimento y receta.
