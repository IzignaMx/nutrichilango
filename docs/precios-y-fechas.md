# Precios por unidad y fechas de observación

El precio de la presentación y la diferencia porcentual entre presentaciones son datos distintos del precio normalizado. La diferencia porcentual sigue comparando los importes de las presentaciones aunque no tengan el mismo tamaño. No se extrapola a un ahorro anual. El comparador agrupa los órdenes de precios normalizados por denominador (kg, litro, pieza, taco o equivalente); no compara importes de denominadores distintos para escoger la alternativa. Un número de piezas no indica un peso, salvo que el peso total conste entre paréntesis.

Cuando el formato de la presentación no permite normalizar, se conserva el importe y se muestra que el precio por unidad no está disponible. Las correcciones aritméticas del catálogo no cambian las observaciones históricas ni corroboran precios vigentes.

La fecha general es la de la última observación publicada, en Ciudad de México. Cada producto muestra su propia fecha registrada cuando existe. El actualizador no utiliza el día de la visita o de la ejecución como fecha de observación. Si faltan observaciones aplicables, no modifica el catálogo ni su fecha.

Para aplicar una nueva observación, el extractor debe entregar `observedUnit` a partir de evidencia de la presentación en la fuente, junto con `scrapedAt` en ISO UTC. No se debe rellenar `observedUnit` copiando la presentación del catálogo. Una presentación ausente o distinta de la catalogada deja intacto el registro histórico y requiere revisar el origen. Una coincidencia de presentación no verifica por sí sola el producto, vendedor ni precio.

Pruebas de normalización e integración del actualizador: `node --test scripts/lib/price-*.node.mjs`. Usan observaciones sintéticas y no solicitan páginas de tiendas.
