# Precios por unidad y fechas de observación

El precio de la presentación y la diferencia porcentual entre presentaciones son datos distintos del precio normalizado. La diferencia porcentual sigue comparando los importes de las presentaciones aunque no tengan el mismo tamaño. No se extrapola a un ahorro anual. El comparador agrupa los órdenes de precios normalizados por denominador (kg, litro, pieza, taco o equivalente); no compara importes de denominadores distintos para escoger la alternativa. Un número de piezas no indica un peso, salvo que el peso total conste entre paréntesis.

Cuando el formato de la presentación no permite normalizar, se conserva el importe y se muestra que el precio por unidad no está disponible. Las correcciones aritméticas del catálogo no cambian las observaciones históricas ni corroboran precios vigentes.

La fecha general es la de la última observación publicada, en Ciudad de México. Cada producto muestra su propia fecha registrada cuando existe. El actualizador no utiliza el día de la visita o de la ejecución como fecha de observación. Si faltan observaciones aplicables, no modifica el catálogo ni su fecha.

Para aplicar una nueva observación, el extractor debe entregar `observedUnit` a partir de evidencia de la presentación en la fuente, junto con `scrapedAt` en ISO UTC. No se debe rellenar `observedUnit` copiando la presentación del catálogo. Una presentación ausente o distinta de la catalogada deja intacto el registro histórico y requiere revisar el origen. Una coincidencia de presentación no verifica por sí sola el producto, vendedor ni precio.

Pruebas de normalización e integración del actualizador: `node --test scripts/lib/price-*.node.mjs`. Usan observaciones sintéticas y no solicitan páginas de tiendas.

## Evaluación de la fuente pública Profeco (27 de noviembre de 2026)

El [catálogo abierto de Profeco](https://datos.profeco.gob.mx/index.php) autoriza la consulta, descarga y reutilización de sus datos. El [RAR 2026](https://datos.profeco.gob.mx/docs/qqp/2026.rar) se descargó el 27 de noviembre: 74 665 761 bytes, SHA-256 `3c29fb373068330db582131edf46648bddde750bfbabd0f3b29bd3d7adc566ff`. Los [metadatos](https://datos.profeco.gob.mx/docs/qqp/Metadatos.csv) indican actualización del 25 de noviembre y cobertura hasta octubre; el [diccionario](https://datos.profeco.gob.mx/docs/qqp/QQP_diccionario_dataset.csv) define precio al público, fecha de registro, presentación, marca, comercio, dirección y entidad. No son cotizaciones actuales.

La lectura completa del RAR alcanzó el final sin errores en los 20 CSV (enero a octubre, 3 684 013 539 bytes descomprimidos). Los dos CSV de octubre contienen 1 168 187 observaciones, con fechas del 1 al 30 de octubre; 268 559 corresponden a Ciudad de México, distribuidas en 277 combinaciones de nombre comercial, dirección y municipio.

Se contrastaron los seis archivos de comercios de la revisión `ff6cbf23a798c0c7f077bc33d4c6af9bc65c722b` (18 comercios, 47 comparaciones). No se identificó una vinculación apta para publicar un precio en el catálogo existente:

- Soriana Hiper Santa Fe no aparece con esa sucursal en las observaciones de octubre; no usar los precios de otras sucursales Soriana.
- Walmart Express Periférico figura con dirección en Calzada de Tlalpan; no equivale a Walmart Supercenter Periférico. El nombre de la zona no acredita identidad comercial.
- Mercado de Jamaica no aparece entre los mercados públicos observados. Central de Abasto Iztapalapa aparece, pero el registro directo contiene frutas y verduras, no los productos de las comparaciones existentes. Otros proveedores dentro del recinto conservan su propia identidad; no agregar sus precios a un comercio genérico.
- No se encontró evidencia de las sucursales especializadas del catálogo. Las recetas y los costos estimados de Despensa tampoco equivalen a precios observados de un producto en un comercio.

Ejemplo de fila válida como observación **histórica**, no como actualización de un SKU existente: lenteja San Lázaro, bolsa de 500 g, 26.40 MXN, La Comer El Olivar, Álvaro Obregón, 30 de octubre de 2026. No se atribuye a otro comercio, a lentejas rojas/verdes ni a un costo de receta.

Resultado del piloto: cero vinculaciones autorizadas para publicación. Se conservan íntegros los precios, fechas y estimaciones existentes. Cualquier incorporación futura requiere correspondencia explícita de producto, marca, variante, presentación, canal, comercio y sucursal, así como la fecha real de la observación y reglas de antigüedad. Si se desea ampliar los comercios o incluir nuevas observaciones históricas, eso es un cambio de catálogo distinto de actualizar un precio existente; no se realiza como parte de esta comprobación.
