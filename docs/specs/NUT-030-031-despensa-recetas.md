# NUT-030/031: coincidencias de la despensa con recetas (primer incremento)

## Alcance
- Correspondencias editoriales exactas por nombre de ingrediente publicado e ID estable del producto. Diferencias de estado (cocido/seco), presentación y textura quedan indicadas como relacionadas, no equivalencias.
- La CTA de despensa incluye un acceso opcional al comparador con `?despensa=1` (solo un indicador; no transmite productos ni preferencias). Se conserva el acceso general y el enlace genérico de PDF/copia.
- El filtro solo incluye recetas cuyo ingrediente principal está vinculado a un producto en la lista local. Se combina con filtros existentes; sin lista se muestra el catálogo general; sin coincidencias se explica cómo quitar el filtro.
- El detalle conserva cada ingrediente de la receta, incluyendo los no mapeados. No se presupone que una persona tenga lo comprado ni que alcance, no se calcula sustitución, ni se garantiza ausencia de alérgenos.
- Sin cambios al catálogo, precios, cantidades, generación de despensa, exportaciones o datos nutricionales.

## Criterios de aceptación
1. Los nombres de las correspondencias existen en recetas y los IDs existen en despensa.
2. Tofu no equivale a soya texturizada; frijol pinto no se equipara a bayo; quinoa seca no se computa como cantidad cocida.
3. Los ingredientes secundarios no activan el filtro del protagonista; el resultado vacío, quitar filtro y lista inexistente son recorridos explícitos.
4. Conservar navegación general y filtros existentes. El resultado usa el almacenamiento local actual y no agrega servicios.

## Pendiente de esta fase
Confirmación voluntaria de básicos disponibles, cantidades y conversiones con fuentes verificadas, cobertura de productos y variantes adicionales, ordenamiento por coincidencias confirmadas (no inferir posesión desde la lista), validación editorial de restricciones y pruebas de tareas con participantes. Hasta entonces la función se presenta como orientación, no como planificación completa ni evaluación dietética.
