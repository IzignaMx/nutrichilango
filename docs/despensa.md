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
- Exportación: copiar el contenido exacto de la lista o guardar el PDF. Si el navegador no permite copiar, la lista y el PDF siguen disponibles.
- Completamente responsive y accesible

## Extensibilidad
- Datos de productos modulares y escalables
- Algoritmo de cálculo de cantidades personalizable
- Los importes en MXN son estimaciones ilustrativas de la tabla fija de despensa; no proceden del comparador ni son precios observados en tiendas o cotizaciones.
- Los enlaces que solo incluían preferencias, tamaño y frecuencia no reconstruían la lista generada. Si se retoma compartir por URL, primero definir un formato versionado y acotado que reconstruya la lista exacta y validar la lectura en otro navegador. Por ahora, compartir el texto copiado o el PDF.
