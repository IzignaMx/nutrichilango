# Precios por unidad y fechas de observación

El precio de la presentación y la diferencia porcentual entre presentaciones son datos distintos del precio normalizado. La diferencia porcentual sigue comparando los importes de las presentaciones aunque no tengan el mismo tamaño. No se extrapola a un ahorro anual. El comparador agrupa los órdenes de precios normalizados por denominador (kg, litro, pieza, taco o equivalente); no compara importes de denominadores distintos para escoger la alternativa. Un número de piezas no indica un peso, salvo que el peso total conste entre paréntesis.

Cuando el formato de la presentación no permite normalizar, se conserva el importe y se muestra que el precio por unidad no está disponible. Las correcciones aritméticas del catálogo no cambian las observaciones históricas ni corroboran precios vigentes.

La fecha general es la de la última observación publicada, en Ciudad de México. Cada producto muestra su propia fecha registrada cuando existe. El actualizador no utiliza el día de la visita o de la ejecución como fecha de observación. Si faltan observaciones aplicables, no modifica el catálogo ni su fecha.

Para admitir una nueva observación, un proveedor autorizado debe aportar precio
en MXN, presentación observada, fecha ISO UTC de observación y evidencia de
comercio, canal, URL exacta de producto e identificador del producto o variante.
No se debe copiar la presentación del catálogo ni usar como fecha la descarga.
El registro versionado `data/price-source-allowlist.json` vincula la fuente y la
presentación aprobadas a la tienda, producto y lado de la comparación. Una
misma oferta no puede atribuirse a dos tiendas. Una
coincidencia comprueba correspondencia con esa configuración; no demuestra que
un archivo sea auténtico ni concede permiso para consultar una tienda.

Pruebas: `node --test scripts/lib/price-*.node.mjs`. Usan observaciones sintéticas
en catálogos temporales y no solicitan páginas de tiendas. Para revisar un
archivo recibido por un canal autorizado, usar
`node scripts/update-data.mjs --check-only`: informa cuántas observaciones
serían aplicables sin escribir el catálogo, su fecha ni eliminar el archivo.
Validar sólo el registro con `node scripts/update-data.mjs --check-allowlist`.
La entrada local sigue en `data/updates/scraped-prices.json`; su nombre no
autoriza scraping. No colocar allí resultados del extractor retirado.
Reservar `--apply` para un checkout desechable, tras revisar la procedencia y
las diferencias esperadas. Conservar el archivo original y una referencia
verificable a la fuente junto con la revisión. No ejecutar `--apply` en un
checkout que publique el catálogo.

## Reactivación controlada

1. Obtener una fuente que autorice el acceso automatizado y la reutilización.
   Confirmar cadencia, cobertura geográfica y si el precio es de tienda en
   línea, sucursal o retiro, sin intercambiar esos canales.
2. Empezar en sólo lectura con una presentación. Cotejar comercio, sucursal o
   canal, SKU/GTIN, presentación, MXN y fecha con la evidencia de esa fuente.
   Rechazar sustituciones por otro vendedor, variantes y promedios agregados.
3. Revisar el artefacto de la fuente y comprobar que un cambio de precio no sea
   un cambio de cantidad o presentación. Si sólo hay datos viejos, incompletos
   o inconsistentes, conservar la observación publicada.
4. Después de comprobar la estabilidad de esa fuente y las obligaciones de
   atribución, permitir propuestas de cambio en PR con revisión. No mezclar
   el primer ensayo de una fuente con publicación automática en producción.

El registro comienza vacío. En la revisión del 20 de noviembre de 2026:
[Vegan Label](https://www.veganlabel.mx/pages/terminos-de-servicio) prohíbe el
raspado; no se encontró un canal autorizado de precios por sucursal de
[Mr. Tofu](https://mrtofu.com/pages/sucursalesmrtofu). La descripción web de
ambos comercios indica 226 g para una presentación de Beyond Burger, frente a
227 g en una observación histórica; la URL no sustituye el peso observado y no
se intercambian observaciones. Los [datos abiertos de Profeco](https://datos.profeco.gob.mx/)
siguen como candidato, pero no se validó una entrega de 2026 íntegra y reciente
con los productos, sucursales y presentaciones del catálogo. La [API de Open
Prices](https://prices.openfoodfacts.org/api/docs) tenía pocas observaciones
cercanas y la más reciente de la consulta acotada era de julio de 2026; no
sirve como fuente semanal hoy y su reutilización requiere revisar la ODbL.
No se modificaron precios ni fechas históricas.
