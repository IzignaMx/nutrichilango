# Guía de Pruebas (Testing) - NutriChilango

La calidad y confiabilidad de los datos nutricionales y de precios son fundamentales para NutriChilango. Este documento detalla nuestra estrategia de pruebas.

## 🧪 Tipos de Pruebas

### 1. Pruebas Unitarias (Vitest)

Probamos funciones de utilidad, cálculos nutricionales y lógica de hooks de forma aislada.

- **Ubicación**: Archivos `.test.ts` o `.spec.ts` junto al código fuente.
- **Comando**: `npm test`

### 2. Pruebas de Componentes (React Testing Library)

Verificamos que los componentes de la interfaz de usuario renderizen correctamente y respondan a eventos.

- **Enfoque**: Pruebas de comportamiento desde la perspectiva del usuario.

### 3. Pruebas de Accesibilidad (A11y)

Validamos que todos los componentes cumplan con WCAG 2.1 AA.

- **Herramientas**: `axe-core` integrado en tests unitarios y auditorías manuales.

## 🛠️ Cómo Escribir Tests

1. **AAA Pattern**: Arrange (Preparar), Act (Actuar), Assert (Afirmar).
2. **Mocks**: Utilizar mocks para servicios externos o APIs para mantener los tests rápidos y deterministas.
3. **Casos Borde**: Probar siempre entradas nulas, valores extremadamente altos/bajos y errores de red.

## 📊 Cobertura (Coverage)

Buscamos una cobertura significativa en la lógica de cálculo:

- Cálculos de macronutrientes: >95%
- Lógica de comparación de precios: >90%
- UI/Layout: >70%

## 🚀 Verificación en CI/CD

Cada Pull Request ejecuta automáticamente el linter y la suite de pruebas. Un PR solo puede ser aprobado si todos los checks están en verde.

```bash
# Ejecutar linter
npm run lint

# Ejecutar tests con reporte de cobertura
npm run test:coverage
```
