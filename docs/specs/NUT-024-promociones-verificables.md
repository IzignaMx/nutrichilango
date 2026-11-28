# NUT-024: promociones con evidencia

El catálogo histórico contiene banderas y textos de promociones de tienda, sin URL, fecha o vigencia. No son prueba de una oferta actual. Conservar esos datos versionados, sin mostrarlos como promoción activa ni aplicar descuentos automáticamente.

Una promoción nueva requiere ID estable, IDs exactos de comparaciones a las que aplica, descripción, condiciones (sucursal/canal/cantidad/membresía), URL HTTPS de fuente original, fecha de consulta, inicio y final explícitos. No se promociona si no cubre el día local de Ciudad de México, si su fecha de consulta es futura o si falta evidencia. Las URLs de producto que muestran una rebaja sin fecha de final se consideran observaciones de precio, no anuncios vigentes. No se infiere una vigencia por días de la semana.

La ficha muestra condiciones, fechas y enlace para confirmar directamente, sin garantía de disponibilidad ni precio de checkout. Sin evidencia, no aparece ningún distintivo o afirmación promocional. Las comparaciones y mapa conservan las demás funciones. No se solicita compra ni se modifican precios históricos.

Pruebas: alcance exacto, fechas imposibles, vencimiento, fuentes inválidas, condiciones vacías, zona horaria, navegación Chromium sin ofertas históricas no acreditadas.

Auditoría al 28 de noviembre de 2026: 11 de 18 tiendas tienen bandera histórica, ninguna tiene URL de promoción ni intervalo fechado acreditado. Se conservan en JSON como antecedentes; no se muestran como oferta actual. Algunas banderas incluso corresponden a certificaciones o mayoreo, no descuentos.
