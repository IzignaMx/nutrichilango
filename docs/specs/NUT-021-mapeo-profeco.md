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
