/**
 * Global Constants for NutriChilango
 */

// Lista de ingredientes/productos de origen animal que identifican productos tradicionales
export const ANIMAL_BASED_KEYWORDS = [
  'pollo', 'pechuga', 'carne', 'res', 'cerdo', 'pescado', 'atún', 'salmón',
  'huevo', 'huevos', 'leche', 'yogurt', 'queso', 'mantequilla', 'crema',
  'jamón', 'salchicha', 'chorizo', 'bacon', 'tocino', 'pavo', 'cordero'
];

// Lista de ingredientes/productos plant-based
export const PLANT_BASED_KEYWORDS = [
  'tofu', 'tempeh', 'seitán', 'jackfruit', 'soya', 'almendra', 'avena',
  'coco', 'cashew', 'nuez', 'garbanzo', 'lenteja', 'quinoa', 'hemp',
  'chía', 'linaza', 'vegetal', 'vegano', 'plant-based', 'casero'
];

// Comparaciones específicas que debemos evitar por ser absurdas
export const INVALID_COMPARISON_PAIRS = [
  // Ambos productos plant-based comerciales
  ['tempeh', 'jackfruit'],
  ['tofu', 'seitán'],
  ['leche de almendra', 'leche de avena'],
  ['queso vegano', 'queso de nuez'],
  ['yogurt de coco', 'yogurt de soya'],
];
