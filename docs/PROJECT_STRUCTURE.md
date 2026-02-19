# Estructura del Proyecto - NutriChilango

```text
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

## 🛠️ Tecnologías

- **Frontend**: React 18, TypeScript, Vite
- **UI/UX**: Tailwind CSS, shadcn/ui, Lucide React
- **Gráficas**: Recharts
- **Enrutamiento**: React Router DOM
- **Estado**: TanStack React Query
- **Accesibilidad**: Cumplimiento WCAG 2.1 AA
