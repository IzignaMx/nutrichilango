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
