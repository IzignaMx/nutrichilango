# NUT-020: inspección acotada del archivo oficial QQP

El primer incremento de la consulta semanal verifica metadatos, diccionario y tamaño declarado. Este segundo incremento descarga una vez el archivo anual oficial bajo demanda o cuando se integra un cambio relevante en main. El workflow programado continúa intacto (la descarga periódica requerirá caché de ETag y comprobación real previa). No concede permisos de escritura.

- Comprueba URL oficial exacta, tamaño declarado y límite de 200 MB; calcula SHA-256 en flujo.
- Usa libarchive del runner, sin extraer archivos al disco. Solo lee el primer miembro CSV de hasta 4 MB, con hasta 2,000 registros y 10 evidencias crudas de CDMX. Este muestreo no es representativo del archivo, no acredita la cobertura más reciente ni mínimos de precio.
- Conserva nombre de miembro, tamaño, hash, columnas, número de registro CSV, producto, marca, presentación, precio, fecha, dirección, estado y municipio; no se incluye ninguna equivalencia no comprobada. Los precios analizados son únicamente de sintaxis válida; moneda, identidad exacta, frescura y duplicidades necesitan validación separada. publicationEligible siempre false.
- El PR ejecuta fixtures sin redes; main ejecuta una inspección real de sólo lectura que puede fallar de manera visible. El artefacto se conserva 14 días, sin publicar precios ni enviar nuevos PRs automáticos.
- Siguiente incremento: inventariar miembros reales y cubrir periodos seleccionados por fecha explícita, registrar conflicto y duplicado, validar el diccionario de moneda, y aplicar NUT-021 con mapeos exactos y revisión antes de promover.

## Incremento siguiente: periodo reciente

La ejecución real de #56 (46120412247) verificó 74,665,761 bytes, SHA-256 `3c29fb373068330db582131edf46648bddde750bfbabd0f3b29bd3d7adc566ff`; las primeras 2,000 filas de enero no incluían CDMX. El nuevo lector selecciona exclusivamente el miembro correspondiente a año, mes y quincena de `coverageEnd`, conforme al nombre observado del archivo; si no existe, falla sin asumir otro periodo. Contrasta el ETag de la descarga con el de metadatos cuando está disponible; no constituye todavía una caché persistente.

Lee por flujo a una ruta temporal controlada, limita 400 MB del miembro y 1.5 millones de registros, no extrae rutas del archivo, no publica datos y descarta fechas fuera de la quincena declarada. Registra SHA-256 de miembro completo, codificación y periodo; conserva solo diez ejemplos, no mínimos del mercado. La ejecución real debe comprobar que el nombre y el contenido del miembro corresponden al periodo declarado y si hay evidencia local válida. Aún no se habilita descarga programada ni equivalencias automáticas.

## Diagnóstico de calidad de observaciones

La ejecución real 46121704436 (quincena 16 al 31 de octubre) leyó 550,742 registros, con 115,562 registros identificados como CDMX; todos los locales fueron rechazados por el validador. No se modificó el catálogo. Para identificar la causa sin relajar controles, se registran contadores mutuamente excluyentes de motivos de rechazo, campos obligatorios ausentes, y categorías de formato de fecha/precio (patrones fijos, no valores de los registros). La forma de una fecha con barras no demuestra por sí sola el orden de día/mes. Las muestras válidas siguen limitadas a diez y sin elegibilidad para publicación. No se modifica la interpretación ni se supone moneda.

El diagnóstico también conserva el tipo y descripción de las dos variables de fecha y precio del diccionario oficial (https://datos.profeco.gob.mx/docs/qqp/QQP_diccionario_dataset.csv), vinculado a su hash. Es información descriptiva, no una autorización para modificar reglas; los fixtures cubren ambos lectores.

## Corrección del formato publicado

El run 46122757839, job 140910625960 (artefacto 15254273200), identificó exactamente 115,562 rechazos por fecha y ningún campo obligatorio vacío. Todas las fechas de CDMX tenían estructura año/mes/día con barras y todos los precios estructura decimal con punto. El diccionario oficial identifica `fecha_registro` como fecha de captura (tipo Datetime) y `precio` como valor de venta al público (Número 18,2); no demuestra unidad de moneda en esa descripción. Se acepta únicamente la estructura año/mes/día observada, validando calendario y quincena; se conserva el valor original junto a su fecha ISO. No se aceptan fechas ambiguas día/mes/año. Aún no se confirma moneda, identidad de productos, duplicidad ni vigencia comercial: ningún resultado es elegible para publicación.
