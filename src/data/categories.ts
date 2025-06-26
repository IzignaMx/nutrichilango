
export const productCategories = [
  {
    id: 'proteins',
    name: 'Proteínas',
    description: 'Fuentes de proteína animal y vegetal',
    icon: '💪',
    color: 'red',
    subcategories: {
      animal: 'Origen Animal',
      plantBased: 'Plant-Based',
      legumes: 'Leguminosas',
      nuts: 'Nueces y Semillas'
    }
  },
  {
    id: 'dairy',
    name: 'Lácteos',
    description: 'Productos lácteos y alternativas vegetales',
    icon: '🥛',
    color: 'blue',
    subcategories: {
      cowMilk: 'Leche de Vaca',
      plantBasedMilk: 'Leche Vegetal',
      cheese: 'Queso',
      yogurt: 'Yogurt'
    }
  },
  {
    id: 'eggs',
    name: 'Huevos',
    description: 'Huevos de gallina y alternativas',
    icon: '🥚',
    color: 'yellow',
    subcategories: {
      chickenEggs: 'Huevos de Gallina',
      alternatives: 'Alternativas Veganas'
    }
  },
  {
    id: 'snacks',
    name: 'Snacks',
    description: 'Opciones de snacks saludables',
    icon: '🍿',
    color: 'purple',
    subcategories: {
      sweet: 'Dulces',
      salty: 'Salados',
      healthy: 'Saludables'
    }
  },
  {
    id: 'pantry',
    name: 'Despensa',
    description: 'Alimentos básicos para el hogar',
    icon: '🥫',
    color: 'green',
    subcategories: {
      grains: 'Granos',
      oils: 'Aceites',
      spices: 'Especias'
    }
  },
  {
    id: 'prepared-dishes',
    name: 'Platillos Preparados',
    description: 'Comidas completas y platillos caseros vs comerciales',
    icon: '🍽️',
    color: 'purple',
    subcategories: {
      soups: 'Sopas y Caldos',
      tacos: 'Tacos y Antojitos',
      stews: 'Guisos',
      salads: 'Ensaladas Completas'
    }
  }
];
