# Creador de Despensa Vegana

## Descripción
Wizard interactivo de 3 pasos que genera listas personalizadas de compras veganas según el tamaño del hogar, preferencias alimentarias y frecuencia de compras.

## Funcionalidades principales
- **Paso 1**: Selección de tamaño del hogar (1-6+ personas)
- **Paso 2**: Preferencias alimentarias (alto en proteína, económico, sin gluten, etc.)
- **Paso 3**: Frecuencia de compras (semanal, quincenal, mensual)
- **Resultado**: Lista organizada por categorías con cantidades y precios estimados

## Características técnicas
- Estado persistente en localStorage
- Generación dinámica de cantidades según parámetros
- Exportación: copiar texto o generar un PDF para compartir la lista exacta. El enlace de configuración carga el tamaño del hogar, las preferencias y la frecuencia solo cuando quien lo abre decide usarlos. La lista se genera al final del asistente y puede incluir productos distintos.
- Completamente responsive y accesible

## Extensibilidad
- Datos de productos modulares y escalables
- Algoritmo de cálculo de cantidades personalizable
- Integración futura con API de precios real
