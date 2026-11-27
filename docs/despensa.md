# Creador de Despensa Vegana

## Descripción
Wizard interactivo de 3 pasos que genera listas personalizadas de compras veganas según el tamaño del hogar, preferencias alimentarias y frecuencia de compras.

## Funcionalidades principales
- **Paso 1**: Selección de tamaño del hogar (1-6+ personas)
- **Paso 2**: Preferencias alimentarias (alto en proteína, económico, sin gluten, etc.)
- **Paso 3**: Frecuencia de compras (semanal, quincenal, mensual)
- **Resultado**: Lista organizada por categorías con cantidades y precios estimados, nombres de búsqueda familiares en México, origen del estimado, sugerencias de lugares de compra y enlaces de búsqueda por producto.
- **Recetas**: Acceso a /dishes-comparison desde la lista; todavía no filtra recetas con los ingredientes generados.

## Características técnicas
- Estado persistente en localStorage
- Generación dinámica de cantidades según parámetros
- Exportación: copiar texto o generar un PDF para compartir la lista exacta. El enlace de configuración carga el tamaño del hogar, las preferencias y la frecuencia solo cuando quien lo abre decide usarlos. La lista se genera al final del asistente y puede incluir productos distintos.
- Completamente responsive y accesible

## Extensibilidad
- Datos de productos modulares y escalables
- Algoritmo de cálculo de cantidades personalizable
- Integración futura con API de precios real

## Fuentes y orientación de compra (27 de noviembre de 2026)

Los importes base históricos son estimados del catálogo; no se dispone de cotización individual documentada para la mayoría de los productos. No se atribuyen a supermercados ni a Profeco. La guía de compra en `src/data/pantry/shopping.ts` distingue el origen del importe de cada ficha comercial o búsqueda pública, que no acredita precio ni disponibilidad. No se realizan consultas externas automáticas ni se comparten preferencias. Los enlaces se abren por decisión de la persona.

El trigo partido precocido (bulgur) conserva la base de 35 MXN por 500 g, corroborada con la [ficha de Sinai Deli](https://shop.sinaidelibakery.com/producto/bulgur-krinos-1-kg-8535): precio publicado de 70 MXN por 1 kg, consultado directamente el 27/11/2026. El cálculo es proporcional, no una oferta de 500 g ni una garantía de existencia. Contiene gluten; no se confunde con trigo quebrado crudo.

Las otras fichas comerciales son ejemplos de producto, a veces con presentaciones distintas. Se conservan los importes, el cálculo y las restricciones del catálogo. La guía aparece también en el texto copiado, vista previa y PDF. Los enlaces de configuración no cambian.
