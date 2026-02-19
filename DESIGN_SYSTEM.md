# Sistema de Diseño - NutriChilango

Este documento define la identidad visual, los principios de UI/UX y el sistema de tokens de NutriChilango.

## 🎨 Paleta de Colores (Tokens)

NutriChilango utiliza un sistema de colores semánticos definidos en `src/index.css` para garantizar accesibilidad y consistencia.

### Colores de Marca

- **Brand Primary**: `hsl(var(--brand-primary))` (#1A4D2E) - El verde institucional para elementos principales.
- **Brand Primary Light**: Variación más clara para interacciones.
- **Brand Accent**: `hsl(var(--brand-accent))` - Amarillo/Dorado para llamadas a la acción y resaltados.
- **Brand Success**: Utilizado para indicadores positivos en comparaciones.

### Colores de Interfaz (Semánticos)

- **Background**: `hsl(var(--background))` - Color de fondo principal.
- **Foreground**: `hsl(var(--foreground))` - Color de texto principal.
- **Muted**: Para textos e iconos secundarios con menor peso visual.
- **Destructive**: Para alertas y acciones críticas (rojo).

## 🧩 Componentes y UI

### shadcn/ui

Utilizamos **shadcn/ui** como base, una colección de componentes reutilizables construidos sobre Radix UI y Tailwind CSS.

- Se encuentran en `src/components/ui/`.
- Todos los componentes deben usar clases de Tailwind basadas en nuestros tokens.

### Principios de Diseño

1. **Accesibilidad (A11y)**: Priorizar el contraste de color y el uso de etiquetas ARIA.
2. **Claridad Visual**: Uso de espacios en blanco y jerarquía tipográfica para facilitar la lectura de datos nutricionales complejos.
3. **Interactividad**: Micro-animaciones suaves para feedback del usuario.

## 📐 Tipografía y Espaciado

- **Tipografía**: Fuentes modernas (Inter/Roboto) gestionadas vía Tailwind.
- **Radios**: `var(--radius)` (0.5rem por defecto) para bordes redondeados consistentes.

## 🚀 Implementación en Código

Para aplicar estilos consistentes, utiliza la utilidad `cn` para combinar clases:

```tsx
import { cn } from "@/lib/utils";

const CustomComponent = ({ className }) => (
  <div className={cn("bg-brand-primary text-white p-4 rounded-lg", className)}>
    Contenido con diseño institucional
  </div>
);
```
