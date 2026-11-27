# Automatización de fuentes de precios

## Primera etapa: comprobación semanal sin escritura

GitHub Actions ejecuta el monitor de Profeco QQP los lunes a las 12:23 UTC (06:23 de Ciudad de México), o por ejecución manual. El runner estándar `ubuntu-24.04` no necesita Chromium, IP residencial, servidor propio, credenciales de tiendas ni servicios de pago para esta comprobación. El repositorio es público y GitHub documenta que los runners hospedados estándar son gratuitos en repositorios públicos ([facturación](https://docs.github.com/en/actions/concepts/billing-and-usage)). Los PR prueban el contrato local sin consultar servicios externos.

El monitor verifica metadatos y diccionario CSV (incluidas codificaciones), cobertura temporal, presencia de campos de identidad, y cabeceras del RAR anual correspondiente al último periodo. Registra URLs, hashes de los dos CSV, tamaño declarado, ETag, fecha declarada del archivo y antigüedad de su cobertura. No comprueba ni descarga el contenido del RAR en cada ejecución. El reporte JSON de Actions dura 14 días. Un fallo queda visible sin alterar el sitio, los precios o sus fechas. La fecha de modificación del archivo no es una fecha de observación.

Comprobado el 27 de noviembre de 2026: cobertura hasta el 31 de octubre de 2026, última modificación de los metadatos 25 de noviembre, tamaño declarado 74 665 761 bytes. Véase [evaluación de la descarga previa](precios-y-fechas.md).

## Publicación: todavía detenida

El extractor histórico no se ejecuta en Actions: puede atribuir a una sucursal precios de otra cadena, toma precios sin ligar celda/producto/presentación y acepta coincidencias insuficientes. No se reactiva esa ruta con sólo cambiar una bandera. Se conserva su código histórico para revisar las funcionalidades útiles, no como fuente fiable.

Siguiente etapa: descargar el archivo oficial cuando haya una versión distinta, confirmar integridad mediante hash y lectura acotada, validar filas y conservar la observación exacta. Crear mapeos revisados de producto, marca, variante, presentación, vendedor/sucursal y canal. Las observaciones incompatibles pasan a una cola de revisión, no al catálogo. El primer PR de datos debe contener pruebas de unidad, fecha, correspondencia y procedencia; las comprobaciones CI deben ejecutarse antes de publicar. No se requiere auto-merge ni un token personal. Un PR automatizado con GITHUB_TOKEN requiere revisar las políticas del repositorio y el disparo efectivo de las comprobaciones; no asumir que CI se lanzó.

## Expansión por canal

- [Profeco QQP](https://datos.profeco.gob.mx/index.php): precios al público por establecimiento. Fuente prioritaria; promover datos sólo después de verificar identidad y fecha.
- [SNIIM, Secretaría de Economía](https://www.economia-sniim.gob.mx/analisis/Precios.asp): granos, semillas, frutas y hortalizas al **mayoreo**; útil para tendencias y compras de gran volumen. No sustituye cotizaciones minoristas ni atribuye precios a un comercio. Primero verificar formatos, condiciones y estabilidad de adquisición.
- Comercios especializados: enlaces directos y fuentes autorizadas por producto, presentación, moneda y canal; conservar por separado cotizaciones de venta en línea y precios en sucursal. No inferir existencias de una URL. Si no existe acceso autorizado o los datos son ambiguos, dejar pendiente la fuente.

No usar proxies, técnicas de ocultación ni runners personales para eludir restricciones de las fuentes. No mezclar promedios o precios de mayoreo con precios de venta al público ni convertir estimaciones de despensa en cotizaciones. El objetivo es cobertura verificable, no cantidad de precios.
