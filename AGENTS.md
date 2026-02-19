# Convenciones para Agentes de IA - NutriChilango

Este documento define las reglas de compromiso y convenciones de código para agentes de IA (como Antigravity) que operan en el repositorio de NutriChilango.

## 🤖 Reglas de Oro

1. **Priorizar el Sistema de Diseño**: Nunca utilices clases de colores de Tailwind arbitrarias (ej. `bg-green-500`). Utiliza SIEMPRE los tokens semánticos definidos en `DESIGN_SYSTEM.md` (ej. `bg-brand-primary`).
2. **Accesibilidad Obligatoria**: Todo componente nuevo debe ser accesible (cumpliendo WCAG 2.1 AA). Usa componentes de `shadcn/ui` cuando sea posible.
3. **Documentación en Español**: Todas las actualizaciones de documentación, comentarios públicos y mensajes de commit deben estar en español.

## 💻 Convenciones de Código

### TypeScript

- Usar tipado estricto. Evitar el uso de `any`.
- Definir interfaces en `src/data/types.ts` si son compartidas.

### React

- Utilizar componentes funcionales con hooks.
- La lógica de negocio pesada debe ir en custom hooks (`src/hooks/`).

### Tailwind CSS

- Utilizar la utilidad `cn` para la unión condicional de clases.
- Respetar la jerarquía de capas (`base`, `components`, `utilities`).

## 🛠️ Flujo de Trabajo para Agentes

1. **Investigar**: Leer `ARCHITECTURE.md` y `DESIGN_SYSTEM.md` antes de proponer cambios estructurales.
2. **Diseñar**: Proponer cambios en un plan de implementación antes de ejecutar modificaciones masivas.
3. **Verificar**: Ejecutar `npm run lint` y verificar que los componentes renderizen correctamente en dispositivos móviles (responsive first).

## 📁 Fuentes de Verdad

- **Tokens**: `src/index.css`
- **Configuración**: `tailwind.config.ts`
- **Tipos**: `src/data/types.ts`
