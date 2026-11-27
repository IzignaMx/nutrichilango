# NutriChilango — especificación de producto y evolución
**Estado:** propuesta inicial de desarrollo por especificaciones, 27/11/2026. No presupone aprobación de todos los módulos ni certificación nutricional. Base: #44–46, [auditoría general](../auditoria-general-2026-11-27.md), [fuentes de precios](../fuentes-precios-automatizacion.md) y [Despensa](../despensa.md). Cada etapa tiene especificación, pruebas y condición de salida antes de implementación y publicación.

## 1. Propósito y resultado esperado

Facilitar a habitantes de CDMX y zona metropolitana elegir, conseguir y preparar alimentos vegetales accesibles, familiares, variados y adecuados a sus circunstancias. La misión es favorecer una transición voluntaria sostenible y reducir la dependencia de ingredientes de origen animal, no juzgar a quien empieza ni prometer ahorros, equivalencia nutricional o resultados clínicos universales.

El valor principal es cerrar el ciclo **descubrir → comparar → comprar → cocinar → repetir**, sin depender de cuentas, pagos, geolocalización precisa ni IA para alcanzar el primer resultado. Los ejemplos deben reconocer distintas colonias, alcaldías, municipios, mercados, presupuestos, horarios, equipo de cocina y habilidades culinarias.

### Usuarios y necesidades
- Persona curiosa o flexitariana: una alternativa a una comida habitual (tacos, picadillo, milanesa, tortas) con pasos y precio entendibles.
- Hogar con presupuesto limitado: cantidades, costo por porción/presentación, ingredientes de mercado y sustituciones fáciles.
- Persona que ya come vegetal: ampliar variedad, preparar por anticipado, aprovechar sobrantes y descubrir proveedores confiables.
- Persona que tiene poco tiempo o equipo: recetas de una olla, sin horno, rápidas, opciones listas para llevar.
- Usuario con necesidades dietéticas: encontrar información transparente de alérgenos y restricciones, sin que la herramienta sustituya asesoría sanitaria.

### Principios y límites
1. Primero evidencia; diferenciar estimación, observación histórica, cotización y disponibilidad. Mostrar fecha, fuente, unidad, identidad y canal. Ninguna cifra inventada para llenar huecos.
2. Primero utilidad local; nombres mexicanos (soya texturizada, yaca, nuez de la India), cantidades métricas y MXN; separar CDMX y Edomex en fuentes geográficas.
3. Elección informada; enfoque apetitoso, económico y práctico, sin culpa, urgencia falsa, mensajes manipuladores ni afirmaciones médicas no respaldadas.
4. Accesibilidad WCAG 2.2 AA como objetivo verificable; diseño móvil primero y lectura clara. Uso sin cuenta y sin dependencia de una red rápida.
5. Base estática actual React/Vite/GitHub Pages. Conservar enlaces, rutas, datos históricos, preferencias, PDF y comparador. No añadir backend, servicios de pago ni analítica invasiva sin una necesidad y decisión documentadas.
6. Los hongos forman parte de las alternativas culinarias de una dieta basada en plantas, pero no se describen biológicamente como plantas.

### Fundamento editorial y fuentes
- [Guías Alimentarias Saludables y Sostenibles para la Población Mexicana, Secretaría de Salud](https://sidof.segob.gob.mx/notas/5777764), aviso 02/01/2026; contextualizar diversidad, alimentos regionales, accesibilidad y sostenibilidad. No equivale a una recomendación personalizada de veganismo ni reemplaza asesoría profesional.
- [OMS, alimentación saludable](https://www.who.int/news-room/fact-sheets/detail/healthy-diet), diversidad y adecuación a circunstancias; separar información poblacional de decisiones individuales.
- [USDA FoodData Central](https://fdc.nal.usda.gov/) e [INCMNSZ](https://www.incmnsz.mx/nutricion/departamentos/ciencia-tecnologia/adquisicion): referencia de composición, no atribuir a los números existentes sin un identificador/tabla/edición verificable. Etiquetas específicas para alimentos de marca.
- [Profeco QQP](https://datos.profeco.gob.mx/index.php), [CEDA](https://ficeda.com.mx/precios-al-consumidor/), [SNIIM](https://www.economia-sniim.gob.mx/analisis/Precios.asp): distinguir comercio minorista, ubicación de mercado y mayoreo. CEDA aún en evaluación por unidades, identidad y reutilización. No incluir datos personales en consultas externas.

## 2. Contratos compartidos y arquitectura

- **Ingrediente**: ID estable, nombre local, sinónimos curados, grupo culinario, estado crudo/cocido/seco, unidad dimensional, posibles alérgenos, variantes y fuentes. No aproximaciones por substring que confundan soya texturizada, tofu y tempeh. Diferenciar ingrediente base de producto preparado.
- **Receta**: ID estable y categoría, protagonista, vínculo de cada ingrediente a ID o pendiente explícito, cantidad/unidad/estado, rendimiento en porciones, tiempo activo y espera con unidad (desconocido si no consta), equipo, instrucciones ordenadas y versión. Adaptaciones mexicanas y alternativas por ingrediente, no sólo por textura.
- **Observación de precio**: ID y tipo de fuente, URL/identificador de registro, fecha de observación y de consulta diferenciadas, moneda, presentación literal, valor y denominador normalizado cuando se puede, comercio/ubicación/variante/canal, evidencia y estado de validación. No sustituir la identidad con otra sucursal. Conservación de histórico.
- **Composición nutricional**: ID de fuente y edición, alimento y estado exactos, cantidad y base (100 g, porción, etc.), unidad, valor desconocido distinto de cero. Fuente de conversión culinaria y revisión por profesional cuando corresponda. No deducir contenido exacto a partir del nombre del producto.
- **Despensa y plan**: configuración voluntaria, versión de catálogo, productos y cantidades, costos estimados/proveniencia, restricciones. Persistencia local, importación y enlace compatibles con versiones previas. Nunca inferir el consumo real a partir de la lista generada.
- **Directorio**: comercio/nombre/ubicación pública y categoría, URL, canal, fecha de verificación, estado de información y mecanismo para reportar cambios sin crear cuentas obligatorias. Sin certificación vegana o stock garantizado salvo evidencia explícita.

La lógica de datos, adaptadores y presentación permanecen separadas. Los datos publicados se validan en CI, se generan artefactos estáticos pequeños y reproducibles y se despliegan por PR. Las fuentes no confiables no pueden modificar el catálogo. Las versiones se documentan de forma que se pueda volver a la última revisión confiable.

## 3. Roadmap de especificaciones implementables

### Fase 0 — confianza y mantenimiento (P0)
**NUT-001** Contrato de consistencia. Validar IDs, referencias, unidades, porciones positivas, precios finitos, clasificación de recetas, fechas, rangos y coherencia aritmética. Registrar inconsistencias históricas sin alterar números ambiguos. 
- Aceptación: test identifica duplicados, falta de campo y error de unidad; ninguna fuente inválida altera catálogo/fecha.

**NUT-002** Procedencia y auditoría. Cada dato muestra estado: estimado, observado y cuándo, o no verificado. Resolver divergencias de 33/35 recetas auditadas; revisión de cantidades/unidades/alcance de costo; unificar precio del comparador y subtotal cuando la metodología queda documentada. Mantener costos por porción versus presentación separados.
- Aceptación: cada vista y PDF transmite la misma base, fuente y fecha; cálculos reproducibles con tolerancia monetaria definida; no extrapolar ahorro.

**NUT-003** Limpieza incremental de CI. Evaluar PRs históricos por divergencia; no mezclar diagnóstico con producción. Actualizaciones de dependencias por lotes verificables. Sin reducciones de tests ni supresión de problemas.
- Aceptación: CI en árbol exacto, lint, tipos, pruebas, rutas, PDF y rollback documentado.

### Fase 1 — descubrimiento y elección cotidiana (P0/P1)
**NUT-010** Filtro de ingrediente principal (primer incremento). Una clasificación editorial por receta basada en el protagonista de la alternativa vegetal; no listar especias/auxiliares ni inferir proteína predominante. Se combina con categoría, dificultad y orden; todas las opciones se derivan de recetas reales. Nombres locales.
- Aceptación: todas las 35 recetas actuales clasificadas, ingrediente exacto presente, no opciones sin receta (tempeh se incorpora cuando exista receta real); dos mole conservan identidad; filtros, conteo, teclado, móvil, estado vacío y restablecimiento.

**NUT-011** Búsqueda y exploración práctica. Buscar por platillo, ingrediente o sinónimo; filtros adicionales de presupuesto por porción, tiempo explícito, disponibilidad de equipo y tipo de preparación; separar búsqueda general de filtro protagonista. Mostrar tiempo no cuantificado como tal.
- Aceptación: no confundir soya con tofu; teclado, normalización acentos y recuperación sin resultados; no clasificar tiempos o precios desconocidos como cero.

**NUT-012** Receta útil. Ficha imprimible y compartible con porciones ajustables, ingredientes exactos, traducción de nombres y sustituciones culinarias verificadas, pasos ordenados, costo y fuente. Escalado de cantidades sin redondear ingredientes críticos o prometer resultado idéntico.
- Aceptación: recalcula cantidades y costos consumidos coherentemente; separa cantidad a comprar de cantidad utilizada, conserva instrucciones y aclara alérgenos.

**NUT-013** Ruta introductoria opcional. Entradas por meta práctica (“cocinar con frijoles”, “probar tacos vegetales”, “comidas económicas”, “sin horno”), sugerencias culturalmente familiares y acción inmediata. Sin exigir identidad vegana ni recopilar información sensible.
- Aceptación: llegar a receta y lista de compra con pocos pasos; abandonar o cambiar ruta sin perder acceso al resto del sitio.

### Fase 2 — precios y compra local (P0/P1, independiente de Fase 1)
**NUT-020** Adquisición oficial controlada. GitHub Actions Ubuntu 24.04, consulta mensual/semanal según actualización real de cada fuente, límites tamaño/tiempo, hash, lectura acotada y reportes. Reusar fuente sin descargar repetidamente si no cambia, sin eludir restricciones. Fallo parcial visible, mantener última observación válida. 
- Aceptación: prueba con registro real y fixture, detecta corrupción, fecha futura, moneda no comprobada, ausencia de presentación, conflictos, homónimos y cambio de esquema; job de recolección de sólo lectura.

**NUT-021** Promoción validada. Mapeo explícito de filas a productos y ubicaciones, fila congelada versionada y revisión antes de publicación. PR sólo cuando existen cambios aplicables, CI efectiva; no depender de que GITHUB_TOKEN dispare controles si no se verifica. 
- Aceptación: cero escrituras para batch inválido, no presentar mayoreo como menudeo, historial anterior intacto; cada PR tiene evidencia por fila y revisión del cambio.

**NUT-022** Guía de compra por zona y temporada. Fuentes oficiales y proveedores locales verificables, links directos, geografía elegida manualmente, opciones de compra y unidad. Diferenciar ubicación de un mercado de identidad comercial única; comparar por unidad sólo en bases equivalentes.
- Aceptación: link y fecha comprobados, estados vacíos honestos, no mostrar existencias como garantizadas; modo sin mapa y sin permiso de ubicación.

### Fase 3 — conexión Despensa a Recetas y planificación (P1)
**NUT-030** Correspondencias curadas de despensa/ingrediente. Usar IDs y variantes con evidencia, no substring; distinguir “protagonista disponible” de “todos los ingredientes disponibles”. Separar básicos ya disponibles (confirmación voluntaria), ingredientes faltantes y unidades no comparables. 
- Aceptación: una receta tofu no coincide con soya texturizada; frijol seco no equivale en peso sin conversión válida a frijol cocido; ningún resultado garantiza ausencia de alérgenos; funciona con listas guardadas y enlaces antiguos.

**NUT-031** Sugerencias desde despensa. CTA existente lleva a comparador con modo opcional; ordenar por coincidencias confirmadas y permitir ver todos. Explicar el criterio, no fingir que la persona tiene los alimentos. 
- Aceptación: no hay despensa → entrada útil al generador; lista vacía/ingredientes faltantes → mensaje claro; no transferir configuración a fuentes externas. Permite quitar el filtro sin borrar la lista.

**NUT-032** Menú de varios días y compra consolidada. Proponer comidas reutilizando ingredientes, ajustar porciones, separar comprado/consumido, coste estimado y sobrantes; revisiones de conservación basadas en fuentes. 
- Aceptación: sumas dimensionales y deduplicación verificadas, restricciones elegidas preservadas, no generar prescripción calórica o garantizar nutrición completa; exportación y edición manual.

### Fase 4 — confianza nutricional, educación y hábitos (P1/P2)
**NUT-040** Revisión de nutrientes y alérgenos. Mapear ingredientes a fuente individual, crudo/cocido, evaluar cantidades y rendimientos. Presentar energía, proteína, fibra y micronutrientes sólo con bases documentadas; UI explícita para desconocidos. 
- Aceptación: referencias rastreables y revisión de profesional; sin índices de salud arbitrarios ni equivalencia médica; atención especial a B12, hierro, calcio, zinc, yodo y otros nutrientes relevantes en dietas exclusivamente vegetales, con información revisada y fuentes vigentes, no dosis personalizadas. Explicar que alergias y necesidades clínicas requieren verificación individual.

**NUT-041** Orientación práctica verificable. Guías sobre preparación de legumbres, almacenaje, lectura de etiquetas, sustituciones, presupuestos y cómo empezar sin equipo especial. Información nutricional/seguridad alimentaria con fuente primaria y fecha.
- Aceptación: cada recomendación material revisada, no extrapolar efectos a todos; enlaces accesibles, lenguaje no moralizante.

**NUT-042** Hábitos voluntarios. Desafíos simples elegibles (probar una receta, repetir una comida, ampliar variedad), listas/favoritos locales y revisión personal opcional. Sin notificaciones por defecto, presión, rachas punitivas ni afirmación de adopción a partir de clics.
- Aceptación: opt-in, salida y borrado fáciles; no crear perfiles de condición médica o identidad dietética; conservar acceso sin cuenta.

**NUT-043** Transparencia ética y ambiental. Mostrar razones éticas/ambientales con fuentes, comparar bajo límites de evaluación definidos y no atribuir cifras universales de CO2/agua/suelo. 
- Aceptación: metodología, año, unidad funcional, incertidumbre y límites por fuente; no tratar un porcentaje orientativo existente como medición de receta.

### Fase 5 — crecimiento responsable (P2)
**NUT-050** Directorio y comunidad local. Descubrir negocios y mercados que ofrecen opciones vegetales; filtros por zona, rango de precio y tipo con fecha de verificación. Canal para sugerir correcciones voluntarias y respetuoso de privacidad; revisión humana previa a publicación.
- Aceptación: enlace/datos públicos, no distorsionar relevancia por pagos, no recopilar datos sensibles ni publicar aportaciones sin consentimiento.

**NUT-051** Accesibilidad y rendimiento continuo. Auditorías teclado/lector de pantalla/contraste, pantalla 360–430 px y escritorio, interacciones touch, red lenta, fallos de fuentes, importación/exportación; medir LCP, INP, CLS antes de fijar presupuestos. 
- Aceptación: sin desbordamiento, foco visible/retorno correcto, PDF legible, navegación y errores accesibles, no empeorar indicadores frente a base medida; no instalar software pesado sin beneficio.

**NUT-052** Distribución y búsqueda orgánica. Páginas compartibles con URL estable, metadatos/estructura semántica consistentes, recetas con datos estructurados sólo donde completos y verificados, contenido local útil.
- Aceptación: URL directa/recarga, metadata sin afirmaciones engañosas; no crear páginas duplicadas ni prometer ranking; medir indexación y hallazgos antes de expandir.

## 4. Indicadores y experimentación

Objetivo principal propuesto: ayudar a que una persona que eligió explorar opciones vegetales prepare voluntariamente una comida y pueda repetirla. No hay línea base de conversión o adopción verificada. Se requieren pruebas voluntarias con usuarios de CDMX y zona metropolitana; no atribuir cambios dietéticos a visitas o compras sin evidencia.

| Indicador | Cómo medir | Criterio inicial propuesto |
|---|---|---|
| Primer resultado útil | pruebas de tarea (encontrar receta, estimar costo y dónde buscar) | al menos 8/10 participantes completan sin asistencia; muestra exploratoria, no inferencia poblacional |
| Fricción de compra | localizar precio/unidad/fecha/fuente | 100% de observaciones nuevas trazables, ninguna atribución incorrecta |
| Cobertura de despensa | coincidencias exactas de ingredientes en recetas | 100% de identificados expresamente o marcados pendientes, cero falsos positivos en fixtures |
| Elección informada | prueba de comprensión de costo estimado frente a observado y tiempo activo/espera | al menos 8/10 distinguen en prueba de tarea |
| Preparación/repetición | encuesta optativa anónima, seguimiento voluntario 7/30 días, sin inferir resultado clínico | adoptar objetivo cuantitativo después de línea base; informar tasa de respuesta y sesgo |
| Accesibilidad/calidad | CI + revisión manual dirigida | cero errores bloqueantes; regresión documentada y corregida |

Hipótesis a probar: mostrar platillos familiares y protagonistas locales reduce incertidumbre; mostrar costo por porción y fuente mejora confianza; conectar despensa con recetas reduce ingredientes faltantes; alternativas con menor preparación facilitan el primer intento. Comparar prototipos con tareas reales, no optimizar sólo clics. Evitar experimentos que oculten información, coerción o personalización sensible. No activar analítica de terceros antes de definir finalidad, minimización, consentimiento, retención y revisión legal correspondiente.

## 5. Proceso Spec-Driven Development

Para cada ID, crear una especificación versionada con problema, usuario, resultado, no objetivos, dependencias, contratos, escenarios Given/When/Then, casos vacíos/degradados, riesgos, evidencia, plan de migración/rollback, pruebas y criterios de salida. La especificación es propuesta hasta revisión; actualizar decisión y evidencia cuando cambien. Evitar megaproyectos; PRs pequeños con un objetivo verificable. 

- Antes: reproducir estado actual, establecer evidencia y fixture, criterio de aceptación fallando si procede.
- Durante: implementación mínima, sin modificar arquitectura innecesariamente; conservar privacidad y compatibilidad.
- Validación: pruebas local y CI en árbol exacto, navegador móvil/escritorio para cambios de UI; verificación de fuentes y revisión editorial (profesional para salud).
- Publicación: PR con Conventional Commits, evidencias, revisión pertinente y checks completos; merge y verificación de deploy sólo con controles aprobados. Si una etapa no es automatizable, registrar impedimento y pasos manuales.
- Después: observar errores, comparar con el objetivo, ajustar especificación y documentar resultados, sin presentar hipótesis como logros.

### Entrega inmediata y orden sugerido

NUT-010 primero, porque reduce fricción usando el catálogo actual sin modificar costos o datos nutricionales. En paralelo de forma lógica (no mezclando cambios sin verificar), NUT-001/002 y NUT-020/021 protegen la confianza. NUT-030/031 después del contrato de identidad; NUT-011/012 mejoran utilidad aun sin precios nuevos. NUT-032, 040–043 y 050–052 requieren sus propias especificaciones y pruebas. Priorizar por impacto en el flujo de usuario, calidad de evidencia, costo de mantenimiento y esfuerzo; reordenar con resultados de pruebas voluntarias.
