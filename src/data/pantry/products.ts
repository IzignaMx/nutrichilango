export type PantryItem = {
  id: string;
  name: string;
  category: string;
  quantity: string;
  price: number;
  unit: string;
  nutritionalBenefits?: string[];
  isOrganic?: boolean;
  isGlutenFree?: boolean;
  isHighProtein?: boolean;
  isEconomical?: boolean;
  isEasyPrep?: boolean;
  isIronRich?: boolean;
};

export const PANTRY_PRODUCTS: PantryItem[] = [
  // Leguminosas - Alta en proteína
  { 
    id: 'leg-001', 
    name: 'Lentejas rojas', 
    category: 'Leguminosas', 
    quantity: '1', 
    price: 45, 
    unit: 'kg',
    nutritionalBenefits: ['Alto en proteína', 'Rico en hierro', 'Fibra'],
    isHighProtein: true,
    isIronRich: true,
    isEconomical: true,
    isEasyPrep: true,
    isGlutenFree: true
  },
  { 
    id: 'leg-002', 
    name: 'Lentejas verdes', 
    category: 'Leguminosas', 
    quantity: '1', 
    price: 42, 
    unit: 'kg',
    nutritionalBenefits: ['Alto en proteína', 'Rico en hierro'],
    isHighProtein: true,
    isIronRich: true,
    isEconomical: true,
    isGlutenFree: true
  },
  { 
    id: 'leg-003', 
    name: 'Garbanzos', 
    category: 'Leguminosas', 
    quantity: '1', 
    price: 38, 
    unit: 'kg',
    nutritionalBenefits: ['Alto en proteína', 'Fibra'],
    isHighProtein: true,
    isEconomical: true,
    isGlutenFree: true
  },
  { 
    id: 'leg-004', 
    name: 'Frijoles negros', 
    category: 'Leguminosas', 
    quantity: '1', 
    price: 42, 
    unit: 'kg',
    nutritionalBenefits: ['Alto en proteína', 'Rico en hierro'],
    isHighProtein: true,
    isIronRich: true,
    isEconomical: true,
    isGlutenFree: true
  },
  { 
    id: 'leg-005', 
    name: 'Frijoles pintos', 
    category: 'Leguminosas', 
    quantity: '1', 
    price: 35, 
    unit: 'kg',
    nutritionalBenefits: ['Alto en proteína', 'Fibra'],
    isHighProtein: true,
    isEconomical: true,
    isGlutenFree: true
  },
  { 
    id: 'leg-006', 
    name: 'Alubias', 
    category: 'Leguminosas', 
    quantity: '1', 
    price: 48, 
    unit: 'kg',
    nutritionalBenefits: ['Alto en proteína'],
    isHighProtein: true,
    isGlutenFree: true
  },
  { 
    id: 'leg-007', 
    name: 'Habas secas', 
    category: 'Leguminosas', 
    quantity: '500', 
    price: 25, 
    unit: 'g',
    nutritionalBenefits: ['Alto en proteína', 'Rico en hierro'],
    isHighProtein: true,
    isIronRich: true,
    isEconomical: true,
    isGlutenFree: true
  },

  // Granos y cereales
  { 
    id: 'gra-001', 
    name: 'Quinoa', 
    category: 'Granos', 
    quantity: '500', 
    price: 85, 
    unit: 'g',
    nutritionalBenefits: ['Proteína completa', 'Rico en hierro'],
    isHighProtein: true,
    isIronRich: true,
    isGlutenFree: true
  },
  { 
    id: 'gra-002', 
    name: 'Avena integral', 
    category: 'Granos', 
    quantity: '1', 
    price: 35, 
    unit: 'kg',
    nutritionalBenefits: ['Fibra soluble', 'Proteína'],
    isEconomical: true,
    isEasyPrep: true
  },
  { 
    id: 'gra-003', 
    name: 'Arroz integral', 
    category: 'Granos', 
    quantity: '1', 
    price: 48, 
    unit: 'kg',
    nutritionalBenefits: ['Fibra', 'Vitaminas B'],
    isEconomical: true,
    isGlutenFree: true
  },
  { 
    id: 'gra-004', 
    name: 'Arroz rojo', 
    category: 'Granos', 
    quantity: '500', 
    price: 45, 
    unit: 'g',
    nutritionalBenefits: ['Antioxidantes', 'Fibra'],
    isGlutenFree: true
  },
  { 
    id: 'gra-005', 
    name: 'Amaranto', 
    category: 'Granos', 
    quantity: '500', 
    price: 65, 
    unit: 'g',
    nutritionalBenefits: ['Proteína completa', 'Rico en hierro'],
    isHighProtein: true,
    isIronRich: true,
    isGlutenFree: true
  },
  { 
    id: 'gra-006', 
    name: 'Bulgur', 
    category: 'Granos', 
    quantity: '500', 
    price: 35, 
    unit: 'g',
    nutritionalBenefits: ['Fibra', 'Proteína'],
    isEconomical: true,
    isEasyPrep: true
  },
  { 
    id: 'gra-007', 
    name: 'Mijo', 
    category: 'Granos', 
    quantity: '500', 
    price: 55, 
    unit: 'g',
    nutritionalBenefits: ['Rico en hierro', 'Sin gluten'],
    isIronRich: true,
    isGlutenFree: true
  },

  // Vegetales de hoja verde y ricos en hierro
  { 
    id: 'veg-001', 
    name: 'Espinacas frescas', 
    category: 'Vegetales', 
    quantity: '500', 
    price: 25, 
    unit: 'g',
    nutritionalBenefits: ['Rico en hierro', 'Folato', 'Vitamina K'],
    isIronRich: true,
    isEconomical: true
  },
  { 
    id: 'veg-002', 
    name: 'Acelgas', 
    category: 'Vegetales', 
    quantity: '500', 
    price: 20, 
    unit: 'g',
    nutritionalBenefits: ['Rico en hierro', 'Vitamina A'],
    isIronRich: true,
    isEconomical: true
  },
  { 
    id: 'veg-003', 
    name: 'Kale (col rizada)', 
    category: 'Vegetales', 
    quantity: '300', 
    price: 35, 
    unit: 'g',
    nutritionalBenefits: ['Rico en hierro', 'Vitamina C', 'Calcio'],
    isIronRich: true
  },
  { 
    id: 'veg-004', 
    name: 'Brócoli', 
    category: 'Vegetales', 
    quantity: '3', 
    price: 45, 
    unit: 'piezas',
    nutritionalBenefits: ['Vitamina C', 'Folato', 'Fibra'],
    isEconomical: true
  },
  { 
    id: 'veg-005', 
    name: 'Coliflor', 
    category: 'Vegetales', 
    quantity: '2', 
    price: 35, 
    unit: 'piezas',
    nutritionalBenefits: ['Vitamina C', 'Fibra'],
    isEconomical: true
  },
  { 
    id: 'veg-006', 
    name: 'Betabel', 
    category: 'Vegetales', 
    quantity: '1', 
    price: 25, 
    unit: 'kg',
    nutritionalBenefits: ['Rico en hierro', 'Folato'],
    isIronRich: true,
    isEconomical: true
  },

  // Frutos secos y semillas - Alta proteína
  { 
    id: 'nut-001', 
    name: 'Nueces', 
    category: 'Frutos secos', 
    quantity: '250', 
    price: 120, 
    unit: 'g',
    nutritionalBenefits: ['Omega-3', 'Proteína', 'Vitamina E'],
    isHighProtein: true
  },
  { 
    id: 'nut-002', 
    name: 'Almendras', 
    category: 'Frutos secos', 
    quantity: '250', 
    price: 140, 
    unit: 'g',
    nutritionalBenefits: ['Proteína', 'Vitamina E', 'Calcio'],
    isHighProtein: true
  },
  { 
    id: 'nut-003', 
    name: 'Semillas de girasol', 
    category: 'Frutos secos', 
    quantity: '250', 
    price: 45, 
    unit: 'g',
    nutritionalBenefits: ['Proteína', 'Vitamina E'],
    isHighProtein: true,
    isEconomical: true
  },
  { 
    id: 'nut-004', 
    name: 'Semillas de calabaza', 
    category: 'Frutos secos', 
    quantity: '250', 
    price: 85, 
    unit: 'g',
    nutritionalBenefits: ['Rico en hierro', 'Proteína', 'Zinc'],
    isHighProtein: true,
    isIronRich: true
  },
  { 
    id: 'nut-005', 
    name: 'Semillas de chía', 
    category: 'Frutos secos', 
    quantity: '250', 
    price: 95, 
    unit: 'g',
    nutritionalBenefits: ['Omega-3', 'Proteína', 'Fibra'],
    isHighProtein: true
  },
  { 
    id: 'nut-006', 
    name: 'Semillas de ajonjolí', 
    category: 'Frutos secos', 
    quantity: '200', 
    price: 55, 
    unit: 'g',
    nutritionalBenefits: ['Calcio', 'Proteína'],
    isHighProtein: true,
    isEconomical: true
  },

  // Especias y condimentos
  { 
    id: 'esp-001', 
    name: 'Cúrcuma en polvo', 
    category: 'Especias', 
    quantity: '50', 
    price: 15, 
    unit: 'g',
    nutritionalBenefits: ['Antiinflamatorio'],
    isEconomical: true
  },
  { 
    id: 'esp-002', 
    name: 'Comino molido', 
    category: 'Especias', 
    quantity: '30', 
    price: 12, 
    unit: 'g',
    nutritionalBenefits: ['Rico en hierro'],
    isIronRich: true,
    isEconomical: true
  },
  { 
    id: 'esp-003', 
    name: 'Pimentón dulce', 
    category: 'Especias', 
    quantity: '50', 
    price: 18, 
    unit: 'g',
    nutritionalBenefits: ['Vitamina C'],
    isEconomical: true
  },
  { 
    id: 'esp-004', 
    name: 'Orégano seco', 
    category: 'Especias', 
    quantity: '30', 
    price: 10, 
    unit: 'g',
    nutritionalBenefits: ['Antioxidantes'],
    isEconomical: true
  },
  { 
    id: 'esp-005', 
    name: 'Jengibre en polvo', 
    category: 'Especias', 
    quantity: '40', 
    price: 22, 
    unit: 'g',
    nutritionalBenefits: ['Antiinflamatorio'],
    isEconomical: true
  },
  { 
    id: 'esp-006', 
    name: 'Levadura nutricional', 
    category: 'Especias', 
    quantity: '100', 
    price: 65, 
    unit: 'g',
    nutritionalBenefits: ['Vitamina B12', 'Proteína'],
    isHighProtein: true
  },

  // Aceites y grasas saludables
  { 
    id: 'ace-001', 
    name: 'Aceite de oliva extra virgen', 
    category: 'Aceites', 
    quantity: '500', 
    price: 85, 
    unit: 'ml',
    nutritionalBenefits: ['Grasas saludables', 'Vitamina E']
  },
  { 
    id: 'ace-002', 
    name: 'Aceite de coco', 
    category: 'Aceites', 
    quantity: '400', 
    price: 95, 
    unit: 'ml',
    nutritionalBenefits: ['MCT']
  },
  { 
    id: 'ace-003', 
    name: 'Tahini (pasta de ajonjolí)', 
    category: 'Aceites', 
    quantity: '250', 
    price: 125, 
    unit: 'g',
    nutritionalBenefits: ['Proteína', 'Calcio'],
    isHighProtein: true
  },

  // Proteínas vegetales procesadas
  { 
    id: 'pro-001', 
    name: 'Tofu firme', 
    category: 'Proteínas vegetales', 
    quantity: '400', 
    price: 55, 
    unit: 'g',
    nutritionalBenefits: ['Alto en proteína', 'Calcio'],
    isHighProtein: true,
    isEasyPrep: true
  },
  { 
    id: 'pro-002', 
    name: 'Tempeh', 
    category: 'Proteínas vegetales', 
    quantity: '200', 
    price: 85, 
    unit: 'g',
    nutritionalBenefits: ['Alto en proteína', 'Probióticos'],
    isHighProtein: true
  },
  { 
    id: 'pro-003', 
    name: 'Proteína de soya texturizada', 
    category: 'Proteínas vegetales', 
    quantity: '500', 
    price: 65, 
    unit: 'g',
    nutritionalBenefits: ['Alto en proteína'],
    isHighProtein: true,
    isEconomical: true,
    isEasyPrep: true
  }
];

// Función para filtrar productos según preferencias
export const filterProductsByPreferences = (products: PantryItem[], preferences: string[]): PantryItem[] => {
  if (preferences.length === 0) return products;

  return products.filter(product => {
    return preferences.some(pref => {
      switch (pref) {
        case 'Alto en proteína':
          return product.isHighProtein;
        case 'Económico':
          return product.isEconomical;
        case 'Sin gluten':
          return product.isGlutenFree;
        case 'Orgánico':
          return product.isOrganic;
        case 'Fácil preparación':
          return product.isEasyPrep;
        case 'Rica en hierro':
          return product.isIronRich;
        default:
          return true;
      }
    });
  });
};

// Función para generar lista balanceada
export const generateBalancedPantryList = (
  householdSize: number, 
  frequency: 'weekly' | 'biweekly' | 'monthly',
  preferences: string[]
): PantryItem[] => {
  const filteredProducts = filterProductsByPreferences(PANTRY_PRODUCTS, preferences);
  
  // Asegurar variedad por categoría
  const categories = [...new Set(filteredProducts.map(p => p.category))];
  const balancedList: PantryItem[] = [];

  categories.forEach(category => {
    const categoryProducts = filteredProducts.filter(p => p.category === category);
    
    // Seleccionar productos variados por categoría
    let itemsToAdd = 2;
    if (category === 'Leguminosas') itemsToAdd = 3;
    if (category === 'Granos') itemsToAdd = 3;
    if (category === 'Vegetales') itemsToAdd = 4;
    if (category === 'Especias') itemsToAdd = 4;
    
    const selectedProducts = categoryProducts
      .sort(() => Math.random() - 0.5)
      .slice(0, itemsToAdd);
    
    balancedList.push(...selectedProducts);
  });

  // Ajustar cantidades según tamaño del hogar y frecuencia
  const multiplier = householdSize / 2; // Base para 2 personas
  const frequencyMultiplier = frequency === 'weekly' ? 1 : frequency === 'biweekly' ? 2 : 4;

  return balancedList.map(item => ({
    ...item,
    quantity: (parseFloat(item.quantity) * multiplier * frequencyMultiplier).toFixed(
      item.unit === 'kg' || item.unit === 'ml' ? 1 : 0
    ),
    price: Math.round(item.price * multiplier * frequencyMultiplier)
  }));
};