# NUT-021: mapeo exacto y promoción controlada de observaciones

## Evidencia de partida

GitHub Actions 46123384165 verificó la quincena del 16 al 31 de octubre de 2026: 550,742 filas, 115,562 de CDMX, todas con sintaxis de fecha/precio y campos requeridos válidos, sin rechazos. Artefacto 15254546945, ligado al SHA de archivo/miembro. No son 115,562 precios únicos ni equivalencias con el catálogo. La información del programa QQP reporta importes en pesos en publicaciones de Profeco (https://www.gob.mx/profeco/prensa/profeco-encuentra-diferencia-de-precio-de-hasta-232-pesos-en-canasta-basica-del-paquete-contra-la-inflacion-y-la-carestia?idiom=es-MX); la descripción del CSV no explicita moneda. Antes de publicar, verificar contrato de moneda y documentar alcance.

## Etapa 1: inventario de identidades (solo diagnóstico)

Busca etiquetas exactas normalizadas de productos básicos relevantes para despensa y comparaciones, sin coincidencia por substring. Conserva agrupaciones crudas de producto, marca y presentación con conteos de filas, no de tiendas ni ofertas únicas; cinco ejemplos por etiqueta y hasta 8,192 identidades distintas. Las etiquetas son hipótesis de exploración, no mapeos ni declaraciones de veganismo. Ausencia de coincidencias no demuestra que el archivo carezca de productos equivalentes. No contiene precios, direcciones ni cambios al catálogo. La ejecución de CI verifica el contrato de la fuente sin escritura.

## Etapa 2: identidad y equivalencia

- Aprobar una tabla versionada por variante de destino, cada correspondencia exacta de producto, marca, presentación y, para una tienda preexistente, cadena, nombre comercial, dirección, entidad y alcaldía. No asignar a una tienda por coincidencia parcial; no inferir que cualquier bebida con soya es vegana.
- Normalizar cantidades a g/ml/pieza únicamente con expresión no ambigua; distinguir venta a granel, peso variable y rendimiento preparado. Conservar presentación observada y fuente.
- Tratar la fecha de captura como fecha histórica, no como vigencia ni consulta. Si la fuente no declara moneda, conservar la observación en cuarentena hasta evidenciarla.
- Agrupar por identidad exacta y establecimiento + fecha; colapsar duplicados idénticos, reportar conflictos de importe, no seleccionar arbitrariamente. No usar observaciones caducas como promociones vigentes.
- Generar diff revisable sin editar automáticamente el catálogo hasta verificar equivalencias, cobertura, prevalencia de rechazos, y comparación de base/fecha. Mantener observaciones anteriores y trazabilidad al archivo/miembro/registro.

## Etapa 3: actualización eficiente y reversible

Cachear solo reporte auditado (ETag, cobertura, hash de diccionario y versión de lector; no precios publicados), no procesar archivo idéntico salvo cambio de contrato o código. Verificar ETag de descarga, usar límites, un runner por ejecución, permisos mínimos y artefactos de corta retención. No activar la descarga programada hasta que estas etapas pasen CI y auditoría real; no dar permisos de escritura a la inspección.

## Etapa 2a: candidatos exactos obtenidos del archivo

Run 46123794614, artefacto 15254334495: el inventario confirmó 1,415 filas de Frijol (40 identidades), 294 de Lenteja (6), 114 de Garbanzo (2), 16 de Soya texturizada (1) y 336 de Vinagre (5). No fueron halladas las etiquetas exactas LECHE, BEBIDA DE SOYA, TOFU ni TEMPEH; no implica ausencia de otras etiquetas. La prueba de mapeo acotada utiliza las cuatro identidades crudas observadas:

| Producto / Marca / Presentación | Candidato destino | Base |
|---|---|---|
| Vinagre / Clemente Jacques / Botella 1 Lt. Blanco Alcohol Cana | Ingrediente de tofu casero, referencia comercial existente walmart-cj-vinegar-1l | 1000 ml |
| Soya / S/M / 1 Kg. Granel. Sin Sabor (texturizada) | Despensa pro-003 (presentación distinta, no reemplaza el estimado) | 1000 g a granel |
| Garbanzo / Verde Valle / Bolsa 500 Gr. | Despensa leg-003 | 500 g |
| Frijol / Verde Valle / Bolsa 900 Gr. Pinto | Despensa leg-005 | 900 g |

Se contrastó el candidato de vinagre con la ficha comercial ya documentada (https://kiosco.www.walmart.com.mx/ip/vinagre-blanco-clemente-jacques-de-alcohol-de-cana-1-l/00750105247501?classType=REGULAR). Es equivalencia de producto/presentación, no de canal, tienda, fecha o disponibilidad. No se atribuyen observaciones QQP a esa sucursal ni se mezclan con consulta en línea.

Cada observación candidata se agrupa por la identidad exacta + cadena, nombre comercial, dirección, entidad, alcaldía y fecha de captura. Importe Decimal igual se deduplica; diferencias para la misma clave quedan en conflicto y se excluyen de ejemplos. Cualquier falta de identidad o precisión mayor a dos decimales se descarta del conjunto candidato. Se conservan hasta cinco ejemplos de grupos no conflictivos por candidato en el artefacto (sin imprimirse en logs). El reporte no acredita moneda ni vigencia actual y nunca autoriza escribir precios. La etapa necesita verificar fuente real, revisar mapeo a tienda y evidencia monetaria antes de promociones a catálogo.

## Etapa 3a: caché explícita de auditoría

La fuente real del run 46124593224, artefacto 15255256655, produjo 332 grupos exactos de tienda+fecha para los cuatro candidatos (113 vinagre, 16 soya texturizada, 94 garbanzo, 109 frijol pinto); cero duplicados y conflictos en esos candidatos, fecha máxima 30 de octubre. Moneda y publicación siguen sin verificar. El lector no escribe catálogo.

La caché de GitHub Actions guarda únicamente un resumen agregado sin muestras, nombres de tiendas, direcciones, importes ni datos de productos. Se limita a main y una clave exacta e inmutable derivada de ETag fuerte, URL, tamaño, cobertura y hashes de metadatos/diccionario/lectores. Sin ETag fuerte, sin auditoría completa de CDMX o con datos rechazados, no se reutiliza. Al restaurar, se comprueban clave, esquema, URL, fecha, hashes y contadores; un fallo de caché obliga a una auditoría en vivo. Se preserva fecha original de auditoría, y se indica ausencia de evidencias crudas en el artefacto restaurado. No se habilita todavía el cron de descarga; primero se verificará el comportamiento real de la caché. 
