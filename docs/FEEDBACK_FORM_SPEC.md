# Especificación del Formulario de Feedback

## Estructura del Formulario

### Campos Principales (< 60 segundos de llenado)

1. **¿Qué tan útil ha sido NutriChilango para tu transición plant-based?**
   - Tipo: Radio buttons
   - Opciones: 
     - 🌟 Extremadamente útil (5)
     - 👍 Muy útil (4)
     - 😐 Moderadamente útil (3)
     - 👎 Poco útil (2)
     - ❌ Nada útil (1)

2. **¿Cuál es tu principal motivación para la alimentación plant-based?**
   - Tipo: Checkbox (múltiple selección)
   - Opciones:
     - 🌱 Salud personal
     - 💰 Ahorro económico
     - 🌍 Impacto ambiental
     - 🐄 Bienestar animal
     - 👨‍👩‍👧‍👦 Ejemplo para la familia
     - 🍽️ Variedad culinaria

3. **¿Qué funcionalidad te gustaría que agregáramos?**
   - Tipo: Textarea
   - Placeholder: "Cuéntanos qué otras herramientas o comparaciones te ayudarían..."
   - Max caracteres: 500

4. **Email para seguimiento (opcional)**
   - Tipo: Email input
   - Placeholder: "tu@email.com"
   - Validación: formato email válido

## Diseño UX/UI

### Modal/Overlay
- Ancho máximo: 500px
- Padding: 24px
- Border radius: 16px
- Background: white con shadow suave
- Close button: X en esquina superior derecha

### Botones
- Primario: "Enviar feedback" (brand-primary)
- Secundario: "Cancelar" (outline)
- Estados: normal, hover, disabled, loading

### Validación
- Campo 1: requerido
- Campo 2: al menos una opción
- Campo 3: opcional pero si se llena, mínimo 10 caracteres
- Campo 4: formato email válido si se llena

## Estados del Formulario

### Inicial
- Todos los campos vacíos
- Botón "Enviar" deshabilitado
- Focus en primer campo

### Validación en tiempo real
- Mostrar errores debajo de cada campo
- Contador de caracteres en textarea
- Validación de email en blur

### Envío
- Loading state en botón
- Deshabilitar toda la form
- Spinner + texto "Enviando..."

### Éxito
- Toast notification: "¡Gracias por tu feedback!"
- Cerrar modal automáticamente después de 2 segundos
- Reset de todos los campos

### Error
- Toast notification: "Error al enviar. Inténtalo de nuevo."
- Mantener datos del usuario
- Rehabilitar formulario

## Integración Técnica

### API Endpoint
```typescript
POST /api/feedback
{
  utilidad: number,
  motivaciones: string[],
  sugerencias?: string,
  email?: string,
  timestamp: Date,
  userAgent: string,
  url: string
}
```

### Supabase Schema
```sql
CREATE TABLE feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  utilidad integer NOT NULL CHECK (utilidad >= 1 AND utilidad <= 5),
  motivaciones text[] NOT NULL,
  sugerencias text,
  email text,
  timestamp timestamptz DEFAULT now(),
  user_agent text,
  url text,
  created_at timestamptz DEFAULT now()
);
```

### Componente React
- Hook personalizado `useFeedbackForm`
- Validación con zod
- Gestión de estado con useState
- Toast notifications con useToast

## Métricas y Analytics

### Eventos a trackear
- `feedback_modal_opened`
- `feedback_field_completed` (por campo)
- `feedback_submitted_success`
- `feedback_submitted_error`
- `feedback_modal_abandoned` (cerrado sin enviar)

### KPIs
- Tasa de apertura del modal
- Tasa de completado por campo
- Tasa de envío exitoso
- Tiempo promedio de llenado
- Net Promoter Score basado en campo utilidad

## Accesibilidad

### WCAG 2.2 AA Compliance
- Navegación completa por teclado
- Aria-labels descriptivos
- Contraste mínimo 4.5:1
- Focus indicators visibles
- Anuncios de screen reader para cambios de estado

### Keyboard Navigation
- Tab: siguiente campo
- Shift+Tab: campo anterior
- Escape: cerrar modal
- Enter: enviar formulario (si válido)
- Space: seleccionar checkboxes/radios

## Trigger del Modal

### Ubicaciones sugeridas
1. Footer: link "Comparte tu experiencia"
2. Después de usar comparador 3+ veces
3. Exit intent en desktop
4. Scroll al 80% de la página principal

### Frecuencia
- Máximo 1 vez por usuario por sesión
- Cookie para evitar spam
- No mostrar si ya envió feedback en últimos 30 días