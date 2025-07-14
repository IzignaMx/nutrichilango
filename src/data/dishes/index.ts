
import { DishComparison } from './types';

export const dishesData: DishComparison[] = [
  {
    id: 'carnitas-tacos',
    category: 'mexican',
    traditional: {
      name: 'Tacos de Carnitas (4 piezas)',
      estimatedPrice: 68.00,
      servings: 2,
      prepTime: '15 min',
      nutritionInfo: {
        calories: 520,
        protein: 24,
        carbs: 32,
        fat: 28,
        fiber: 4,
        calcium: 120,
        iron: 2.8
      }
    },
    veganVersion: {
      name: 'Tacos de Seitán Carnitas (4 piezas)',
      description: 'Tacos con seitán casero marinado en naranja agria y especias tradicionales, superando la proteína de las carnitas originales.',
      estimatedPrice: 48.50,
      servings: 2,
      prepTime: '35 min + marinado',
      difficulty: 'medium',
      ingredients: [
        { name: 'Gluten vital (seitán)', amount: 120, unit: 'g', pricePerUnit: 0.085, totalCost: 10.20, source: 'Tienda naturista' },
        { name: 'Tortillas de maíz artesanales', amount: 8, unit: 'piezas', pricePerUnit: 1.20, totalCost: 9.60, source: 'Tortillería local' },
        { name: 'Naranja agria', amount: 2, unit: 'piezas', pricePerUnit: 3.50, totalCost: 7.00, source: 'Central de Abastos' },
        { name: 'Caldo de verduras concentrado', amount: 300, unit: 'ml', pricePerUnit: 0.025, totalCost: 7.50, source: 'Preparación casera' },
        { name: 'Achiote en pasta', amount: 15, unit: 'g', pricePerUnit: 0.18, totalCost: 2.70, source: 'Central de Abastos' },
        { name: 'Comino molido', amount: 8, unit: 'g', pricePerUnit: 0.20, totalCost: 1.60, source: 'Central de Abastos' },
        { name: 'Orégano mexicano', amount: 5, unit: 'g', pricePerUnit: 0.30, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 4, unit: 'dientes', pricePerUnit: 0.25, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Cebolla blanca', amount: 1, unit: 'pieza', pricePerUnit: 3.00, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Cilantro fresco', amount: 1, unit: 'manojo', pricePerUnit: 2.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Salsa verde casera', amount: 100, unit: 'ml', pricePerUnit: 0.02, totalCost: 2.00, source: 'Preparación casera' },
        { name: 'Aceite de coco', amount: 2, unit: 'cucharadas', pricePerUnit: 0.15, totalCost: 0.30, source: 'Tienda naturista' }
      ],
      instructions: [
        'Mezcla gluten vital con caldo tibio y especias hasta formar masa elástica.',
        'Amasa 10 minutos hasta conseguir textura de carne.',
        'Forma en piezas medianas y cocina al vapor 25 minutos.',
        'Marina las piezas cocidas en jugo de naranja agria, achiote y especias por 2 horas.',
        'Deshebra el seitán imitando la textura de carnitas.',
        'Sofríe en aceite de coco hasta dorar y caramelizar ligeramente.',
        'Calienta tortillas en comal hasta suaves y aromáticas.',
        'Sirve el seitán dorado en tortillas calientes.',
        'Acompaña con cebolla picada, cilantro y salsa verde.'
      ],
      nutritionInfo: {
        calories: 445,
        protein: 34,
        carbs: 48,
        fat: 12,
        fiber: 8,
        calcium: 85,
        iron: 6.2
      }
    },
    priceDifferencePercent: -28.7,
    healthScore: 92,
    healthBenefits: [
      'Proteína vegetal completa superior a la carne (34g vs 24g)',
      'Libre de colesterol y grasas saturadas',
      'Rico en hierro biodisponible del gluten vital',
      'Alto contenido de fibra que mejora la digestión',
      'Menor contenido calórico con más saciedad',
      'Antioxidantes de especias tradicionales mexicanas'
    ],
    environmentalImpact: {
      co2Reduction: 78,
      waterSaving: 85,
      landSaving: 75
    }
  },
  {
    id: 'cochinita-pibil',
    category: 'mexican',
    traditional: {
      name: 'Cochinita Pibil (porción)',
      estimatedPrice: 95.00,
      servings: 3,
      prepTime: '3 horas',
      nutritionInfo: {
        calories: 485,
        protein: 26,
        carbs: 8,
        fat: 32,
        fiber: 2,
        calcium: 45,
        iron: 2.5
      }
    },
    veganVersion: {
      name: 'Jackfruit Pibil Tradicional',
      description: 'Jackfruit joven marinado en achiote y especias yucatecas, cocido en hoja de plátano con más proteína que el cerdo original.',
      estimatedPrice: 72.30,
      servings: 3,
      prepTime: '2.5 horas + marinado',
      difficulty: 'medium',
      ingredients: [
        { name: 'Jackfruit joven en agua', amount: 600, unit: 'g', pricePerUnit: 0.055, totalCost: 33.00, source: 'Tienda asiática' },
        { name: 'Proteína de chícharo en polvo', amount: 40, unit: 'g', pricePerUnit: 0.12, totalCost: 4.80, source: 'Tienda naturista' },
        { name: 'Achiote en pasta auténtica', amount: 30, unit: 'g', pricePerUnit: 0.18, totalCost: 5.40, source: 'Mercado yucateco' },
        { name: 'Naranja agria yucateca', amount: 3, unit: 'piezas', pricePerUnit: 4.00, totalCost: 12.00, source: 'Central de Abastos' },
        { name: 'Hojas de plátano', amount: 2, unit: 'piezas', pricePerUnit: 3.50, totalCost: 7.00, source: 'Central de Abastos' },
        { name: 'Dientes de ajo', amount: 6, unit: 'piezas', pricePerUnit: 0.25, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Cebolla morada yucateca', amount: 0.5, unit: 'pieza', pricePerUnit: 4.50, totalCost: 2.25, source: 'Central de Abastos' },
        { name: 'Chile habanero', amount: 0.5, unit: 'pieza', pricePerUnit: 2.00, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Comino entero', amount: 8, unit: 'g', pricePerUnit: 0.20, totalCost: 1.60, source: 'Central de Abastos' },
        { name: 'Pimienta gorda', amount: 6, unit: 'g', pricePerUnit: 0.25, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Orégano yucateco', amount: 5, unit: 'g', pricePerUnit: 0.30, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Sal de mar', amount: 8, unit: 'g', pricePerUnit: 0.05, totalCost: 0.40, source: 'Central de Abastos' },
        { name: 'Vinagre blanco', amount: 25, unit: 'ml', pricePerUnit: 0.015, totalCost: 0.35, source: 'Tienda local' }
      ],
      instructions: [
        'Escurre el jackfruit y deshébralo removiendo semillas y partes duras.',
        'Mezcla proteína de chícharo con un poco de caldo para hidratarla.',
        'Tuesta especias enteras en comal seco hasta aromatizar.',
        'Licúa achiote, naranja agria, ajo, especias y sal hasta formar pasta.',
        'Marina jackfruit y proteína hidratada con pasta de achiote 4 horas mínimo.',
        'Asa hojas de plátano sobre fuego hasta flexibles.',
        'Envuelve mezcla marinada en hojas de plátano bien selladas.',
        'Hornea a 160°C por 2 horas hasta que esté tierno y aromático.',
        'Deshebra finamente y sirve con cebolla morada encurtida y habanero.'
      ],
      nutritionInfo: {
        calories: 325,
        protein: 28,
        carbs: 35,
        fat: 8,
        fiber: 15,
        calcium: 120,
        iron: 4.8
      }
    },
    priceDifferencePercent: -23.9,
    healthScore: 89,
    healthBenefits: [
      'Proteína superior al cerdo (28g vs 26g) con menos calorías',
      'Libre de colesterol y grasas saturadas',
      'Alto contenido de fibra del jackfruit (15g vs 2g)',
      'Rico en antioxidantes del achiote auténtico',
      'Minerales esenciales de especias tradicionales',
      'Menor impacto inflamatorio que la carne roja'
    ],
    environmentalImpact: {
      co2Reduction: 82,
      waterSaving: 90,
      landSaving: 85
    }
  },
  {
    id: 'enchiladas',
    category: 'mexican',
    traditional: {
      name: 'Enchiladas de Pollo',
      estimatedPrice: 95.00,
      servings: 4,
      prepTime: '45 min',
      nutritionInfo: {
        calories: 465,
        protein: 32,
        carbs: 28,
        fat: 26,
        fiber: 3,
        calcium: 220,
        iron: 2.8
      }
    },
    veganVersion: {
      name: 'Enchiladas de Proteína Vegetal Casera',
      description: 'Enchiladas rellenas de mezcla casera de frijoles, soya texturizada y verduras locales, bañadas en salsa roja tradicional y queso vegano casero.',
      estimatedPrice: 68.90,
      servings: 4,
      prepTime: '40 min',
      difficulty: 'medium',
      ingredients: [
        { name: 'Tortillas de maíz', amount: 12, unit: 'piezas', pricePerUnit: 1.00, totalCost: 12.00, source: 'Tortillería local' },
        { name: 'Frijoles bayos cocidos', amount: 1, unit: 'taza', pricePerUnit: 8.00, totalCost: 8.00, source: 'A granel Central de Abastos' },
        { name: 'Soya texturizada fina', amount: 100, unit: 'g', pricePerUnit: 0.06, totalCost: 6.00, source: 'A granel Central de Abastos' },
        { name: 'Tomates guaje', amount: 5, unit: 'piezas', pricePerUnit: 2.50, totalCost: 12.50, source: 'Central de Abastos' },
        { name: 'Chiles ancho', amount: 4, unit: 'piezas', pricePerUnit: 1.80, totalCost: 7.20, source: 'Central de Abastos' },
        { name: 'Cebolla blanca', amount: 0.5, unit: 'pieza', pricePerUnit: 3.00, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Zanahoria', amount: 1, unit: 'pieza', pricePerUnit: 2.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Calabacita criolla', amount: 1, unit: 'pieza', pricePerUnit: 3.00, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Queso vegano rallado casero', amount: 100, unit: 'g', pricePerUnit: 0.08, totalCost: 8.00, source: 'Preparación casera' },
        { name: 'Crema vegetal casera', amount: 4, unit: 'cucharadas', pricePerUnit: 0.60, totalCost: 2.40, source: 'Preparación casera' },
        { name: 'Lechuga orejona', amount: 4, unit: 'hojas', pricePerUnit: 0.50, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Aceite y especias', amount: 1, unit: 'porción', pricePerUnit: 4.20, totalCost: 4.20, source: 'Despensa casera' }
      ],
      instructions: [
        'Cuece los frijoles con sal, cebolla y ajo hasta suavizar completamente.',
        'Hidrata la soya texturizada con caldo vegetal casero por 20 minutos.',
        'Sofríe las verduras picadas (cebolla, zanahoria, calabacita) hasta tiernas.',
        'Mezcla frijoles machacados, soya hidratada y verduras, sazona bien.',
        'Asa tomates y chiles en comal, licúa con agua y sal para la salsa.',
        'Cuela y cocina la salsa hasta espesar, ajusta sazón.',
        'Calienta tortillas en comal, pasa por salsa tibia para suavizar.',
        'Rellena cada tortilla con la mezcla, enrolla y acomoda en refractario.',
        'Baña con salsa restante, espolvorea queso vegano casero.',
        'Gratina en horno precalentado 180°C por 12-15 minutos.',
        'Sirve con crema vegetal casera, lechuga fresca y cebolla rebanada.'
      ],
      nutritionInfo: {
        calories: 375,
        protein: 19,
        carbs: 42,
        fat: 15,
        fiber: 11,
        calcium: 110,
        iron: 5.8
      }
    },
    priceDifferencePercent: -27.5,
    healthScore: 85,
    healthBenefits: [
      'Proteína vegetal completa de la combinación frijoles-soya',
      'Alto contenido de fibra que regula el colesterol',
      'Rica en hierro de fácil absorción',
      'Libre de grasas saturadas y colesterol',
      'Antioxidantes naturales de chiles y tomates',
      'Menor contenido de sodio que versiones comerciales'
    ],
    environmentalImpact: {
      co2Reduction: 70,
      waterSaving: 55,
      landSaving: 65
    }
  },
  {
    id: 'pozole',
    category: 'mexican',
    traditional: {
      name: 'Pozole Rojo con Cerdo',
      estimatedPrice: 120.00,
      servings: 6,
      prepTime: '2 horas',
      nutritionInfo: {
        calories: 485,
        protein: 28,
        carbs: 32,
        fat: 28,
        fiber: 4,
        calcium: 95,
        iron: 3.2
      }
    },
    veganVersion: {
      name: 'Pozole Plant-Based Tradicional',
      description: 'Pozole rojo con maíz cacahuazintle, setas ostra, soya texturizada gruesa y caldo vegetal aromático. Acompañado con todos los garnishes tradicionales.',
      estimatedPrice: 89.40,
      servings: 6,
      prepTime: '90 min',
      difficulty: 'medium',
      ingredients: [
        { name: 'Maíz cacahuazintle seco', amount: 400, unit: 'g', pricePerUnit: 0.035, totalCost: 14.00, source: 'Central de Abastos' },
        { name: 'Setas ostra frescas', amount: 300, unit: 'g', pricePerUnit: 0.12, totalCost: 36.00, source: 'Mercado de Jamaica' },
        { name: 'Soya texturizada gruesa', amount: 150, unit: 'g', pricePerUnit: 0.06, totalCost: 9.00, source: 'A granel Central de Abastos' },
        { name: 'Chiles guajillo', amount: 8, unit: 'piezas', pricePerUnit: 1.50, totalCost: 12.00, source: 'Central de Abastos' },
        { name: 'Chiles ancho', amount: 2, unit: 'piezas', pricePerUnit: 1.80, totalCost: 3.60, source: 'Central de Abastos' },
        { name: 'Cebolla blanca grande', amount: 1, unit: 'pieza', pricePerUnit: 4.50, totalCost: 4.50, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 6, unit: 'dientes', pricePerUnit: 0.25, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Orégano seco', amount: 2, unit: 'cucharadas', pricePerUnit: 1.50, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Comino molido', amount: 1, unit: 'cucharadita', pricePerUnit: 3.00, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Sal de grano', amount: 2, unit: 'cucharadas', pricePerUnit: 0.50, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Aceite vegetal', amount: 2, unit: 'cucharadas', pricePerUnit: 0.80, totalCost: 1.60, source: 'Mercado local' }
      ],
      instructions: [
        'Remoja el maíz cacahuazintle toda la noche, escurre y enjuaga.',
        'Cuece el maíz en olla de presión con sal por 45 minutos hasta suavizar.',
        'Hidrata la soya texturizada con caldo vegetal caliente por 30 minutos.',
        'Limpia y corta las setas ostra en trozos medianos.',
        'Desvenena los chiles, ásalos en comal seco hasta aromatizar.',
        'Licúa los chiles asados con ajo, cebolla y poco caldo hasta terso.',
        'Cuela la salsa y sofríela en aceite caliente por 15 minutos.',
        'Agrega el maíz cocido con su caldo, la soya hidratada y las setas.',
        'Sazona con orégano, comino y sal, hierve 20 minutos a fuego medio.',
        'Ajusta consistencia con más caldo si es necesario.',
        'Sirve caliente con lechuga picada, rábanos, orégano, chile piquín y limón.'
      ],
      nutritionInfo: {
        calories: 395,
        protein: 18,
        carbs: 52,
        fat: 12,
        fiber: 12,
        calcium: 85,
        iron: 4.8
      }
    },
    priceDifferencePercent: -25.5,
    healthScore: 82,
    healthBenefits: [
      'Alto contenido de fibra del maíz cacahuazintle',
      'Proteínas vegetales completas y de fácil digestión',
      'Rica en antioxidantes de los chiles rojos',
      'Libre de grasas saturadas y colesterol',
      'Minerales esenciales del maíz ancestral',
      'Probióticos naturales de la fermentación del maíz'
    ],
    environmentalImpact: {
      co2Reduction: 75,
      waterSaving: 60,
      landSaving: 70
    }
  },
  {
    id: 'pizza',
    category: 'popular',
    traditional: {
      name: 'Pizza Margarita',
      estimatedPrice: 120.00,
      servings: 4,
      prepTime: '90 min',
      nutritionInfo: {
        calories: 510,
        protein: 24,
        carbs: 45,
        fat: 28,
        fiber: 2,
        calcium: 280,
        iron: 2.2
      }
    },
    veganVersion: {
      name: 'Pizza Plant-Based Margarita Casera',
      description: 'Pizza artesanal con masa madre casera, salsa de tomate fresca, queso vegano casero derretible y albahaca del huerto. Económica y deliciosa.',
      estimatedPrice: 78.20,
      servings: 4,
      prepTime: '3 horas (incluye fermentación)',
      difficulty: 'medium',
      ingredients: [
        { name: 'Harina de trigo integral', amount: 350, unit: 'g', pricePerUnit: 0.018, totalCost: 6.30, source: 'A granel Central de Abastos' },
        { name: 'Harina blanca', amount: 150, unit: 'g', pricePerUnit: 0.015, totalCost: 2.25, source: 'A granel Central de Abastos' },
        { name: 'Masa madre casera', amount: 100, unit: 'g', pricePerUnit: 0.02, totalCost: 2.00, source: 'Preparación casera' },
        { name: 'Tomates guaje maduros', amount: 6, unit: 'piezas', pricePerUnit: 2.50, totalCost: 15.00, source: 'Central de Abastos' },
        { name: 'Queso vegano casero (cashews)', amount: 150, unit: 'g', pricePerUnit: 0.08, totalCost: 12.00, source: 'Preparación casera' },
        { name: 'Albahaca fresca', amount: 15, unit: 'hojas', pricePerUnit: 0.20, totalCost: 3.00, source: 'Huerto urbano/Mercado' },
        { name: 'Aceite de oliva', amount: 3, unit: 'cucharadas', pricePerUnit: 1.20, totalCost: 3.60, source: 'Mercado local' },
        { name: 'Ajo', amount: 3, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Sal marina', amount: 2, unit: 'cucharaditas', pricePerUnit: 0.50, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Orégano seco', amount: 1, unit: 'cucharadita', pricePerUnit: 1.50, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Levadura seca (opcional)', amount: 3, unit: 'g', pricePerUnit: 0.50, totalCost: 1.50, source: 'Panadería local' },
        { name: 'Azúcar morena', amount: 1, unit: 'cucharadita', pricePerUnit: 2.00, totalCost: 2.00, source: 'Central de Abastos' }
      ],
      instructions: [
        'Mezcla harinas, sal y masa madre con agua tibia hasta formar masa suave.',
        'Amasa 10 minutos hasta conseguir textura elástica y lisa.',
        'Coloca en bowl aceitado, cubre y fermenta 2-3 horas hasta duplicar.',
        'Blanquea tomates, pela y licúa con ajo, sal, orégano y pizca de azúcar.',
        'Cocina la salsa a fuego lento 15 minutos hasta espesar, enfría.',
        'Divide masa en 2 porciones, estira en círculos de 30cm.',
        'Precalienta horno a máxima temperatura (250°C) con piedra si tienes.',
        'Extiende salsa fina sobre la masa, deja borde de 2cm.',
        'Distribuye queso vegano casero en trozos pequeños.',
        'Hornea 12-15 minutos hasta que esté dorada y crujiente.',
        'Retira, agrega albahaca fresca, rocía aceite de oliva.',
        'Deja reposar 3 minutos antes de cortar y servir.'
      ],
      nutritionInfo: {
        calories: 395,
        protein: 15,
        carbs: 58,
        fat: 13,
        fiber: 6,
        calcium: 120,
        iron: 4.2
      }
    },
    priceDifferencePercent: -34.8,
    healthScore: 81,
    healthBenefits: [
      'Masa integral rica en fibra y nutrientes',
      'Libre de colesterol y lactosa',
      'Antioxidantes naturales del tomate fresco',
      'Grasas saludables del aceite de oliva',
      'Menor contenido de sodio que pizzas comerciales',
      'Fermentación natural mejora digestibilidad'
    ],
    environmentalImpact: {
      co2Reduction: 60,
      waterSaving: 45,
      landSaving: 50
    }
  },
  {
    id: 'hamburguesa',
    category: 'popular',
    traditional: {
      name: 'Hamburguesa Clásica',
      estimatedPrice: 110.00,
      servings: 2,
      prepTime: '20 min',
      nutritionInfo: {
        calories: 580,
        protein: 35,
        carbs: 32,
        fat: 35,
        fiber: 2,
        calcium: 120,
        iron: 3.8
      }
    },
    veganVersion: {
      name: 'Hamburguesa Plant-Based Económica',
      description: 'Hamburguesa casera con medallón de frijoles, avena y verduras locales. Pan casero integral y vegetales frescos de temporada.',
      estimatedPrice: 72.50,
      servings: 2,
      prepTime: '45 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Frijoles bayos cocidos', amount: 1.5, unit: 'taza', pricePerUnit: 8.00, totalCost: 12.00, source: 'A granel Central de Abastos' },
        { name: 'Avena en hojuelas', amount: 0.5, unit: 'taza', pricePerUnit: 12.00, totalCost: 6.00, source: 'A granel Central de Abastos' },
        { name: 'Pan integral casero', amount: 2, unit: 'piezas', pricePerUnit: 4.50, totalCost: 9.00, source: 'Panadería local' },
        { name: 'Cebolla morada', amount: 0.25, unit: 'pieza', pricePerUnit: 4.00, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Zanahoria', amount: 0.5, unit: 'pieza', pricePerUnit: 2.00, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Betabel pequeño', amount: 0.25, unit: 'pieza', pricePerUnit: 3.00, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 2, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.50, source: 'Central de Abastos' },
        { name: 'Semillas de girasol', amount: 2, unit: 'cucharadas', pricePerUnit: 4.00, totalCost: 8.00, source: 'A granel Central de Abastos' },
        { name: 'Tomate saladette', amount: 1, unit: 'pieza', pricePerUnit: 2.50, totalCost: 2.50, source: 'Central de Abastos' },
        { name: 'Lechuga orejona', amount: 4, unit: 'hojas', pricePerUnit: 0.50, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Aguacate criollo', amount: 0.5, unit: 'pieza', pricePerUnit: 5.00, totalCost: 2.50, source: 'Central de Abastos' },
        { name: 'Mayonesa de aquafaba casera', amount: 2, unit: 'cucharadas', pricePerUnit: 0.80, totalCost: 1.60, source: 'Preparación casera' },
        { name: 'Aceite vegetal', amount: 2, unit: 'cucharadas', pricePerUnit: 0.80, totalCost: 1.60, source: 'Mercado local' },
        { name: 'Especias (comino, páprika, sal)', amount: 1, unit: 'porción', pricePerUnit: 2.05, totalCost: 2.05, source: 'Central de Abastos' }
      ],
      instructions: [
        'Machaca los frijoles cocidos, deja algunos trozos para textura.',
        'Ralla finamente zanahoria y betabel, pica cebolla y ajo muy fino.',
        'Sofríe las verduras picadas hasta que estén tiernas y aromáticas.',
        'Mezcla frijoles, verduras sofritas, avena y semillas de girasol.',
        'Sazona con sal, comino, páprika y pimienta al gusto.',
        'Forma 2 medallones compactos, refrigera 20 minutos para firmar.',
        'Calienta poco aceite en sartén antiadherente.',
        'Cocina los medallones 5-6 minutos por lado hasta dorar bien.',
        'Tuesta ligeramente los panes cortados por la mitad.',
        'Unta mayonesa de aquafaba en ambas mitades del pan.',
        'Arma: pan base, lechuga, medallón, tomate, aguacate, pan superior.',
        'Sirve inmediatamente con papas al horno o ensalada fresca.'
      ],
      nutritionInfo: {
        calories: 445,
        protein: 18,
        carbs: 62,
        fat: 15,
        fiber: 14,
        calcium: 85,
        iron: 6.2
      }
    },
    priceDifferencePercent: -34.1,
    healthScore: 90,
    healthBenefits: [
      'Proteína vegetal completa de frijoles y semillas',
      'Alto contenido de fibra que mejora la digestión',
      'Rica en hierro, magnesio y vitaminas del complejo B',
      'Libre de colesterol y grasas saturadas',
      'Antioxidantes naturales del betabel y zanahoria',
      'Grasas saludables del aguacate y semillas',
      'Menor contenido calórico con mayor saciedad'
    ],
    environmentalImpact: {
      co2Reduction: 75,
      waterSaving: 65,
      landSaving: 70
    }
  },
  {
    id: 'tamales',
    category: 'mexican',
    traditional: {
      name: 'Tamales de Cerdo en Salsa Verde',
      estimatedPrice: 144.00,
      servings: 12,
      prepTime: '3 horas',
      nutritionInfo: {
        calories: 320,
        protein: 18,
        carbs: 28,
        fat: 18,
        fiber: 3,
        calcium: 85,
        iron: 2.4
      }
    },
    veganVersion: {
      name: 'Tamales Plant-Based en Salsa Verde',
      description: 'Tamales tradicionales con masa batida, relleno de quelites, setas y frijoles en salsa verde de tomatillo. Hojas de maíz naturales.',
      estimatedPrice: 98.50,
      servings: 12,
      prepTime: '2.5 horas',
      difficulty: 'hard',
      ingredients: [
        { name: 'Masa de maíz nixtamalizada', amount: 1, unit: 'kg', pricePerUnit: 22.00, totalCost: 22.00, source: 'Molino local' },
        { name: 'Manteca vegetal (coco)', amount: 200, unit: 'g', pricePerUnit: 0.08, totalCost: 16.00, source: 'Tienda naturista' },
        { name: 'Hojas de maíz secas', amount: 20, unit: 'piezas', pricePerUnit: 0.80, totalCost: 16.00, source: 'Central de Abastos' },
        { name: 'Quelites (verdolagas)', amount: 300, unit: 'g', pricePerUnit: 0.08, totalCost: 24.00, source: 'Mercado de Jamaica' },
        { name: 'Setas oyster', amount: 200, unit: 'g', pricePerUnit: 0.12, totalCost: 24.00, source: 'Mercado de Jamaica' },
        { name: 'Frijoles negros cocidos', amount: 1, unit: 'taza', pricePerUnit: 8.00, totalCost: 8.00, source: 'A granel Central de Abastos' },
        { name: 'Tomatillos', amount: 500, unit: 'g', pricePerUnit: 0.025, totalCost: 12.50, source: 'Central de Abastos' },
        { name: 'Chiles serranos', amount: 4, unit: 'piezas', pricePerUnit: 0.80, totalCost: 3.20, source: 'Central de Abastos' },
        { name: 'Cebolla blanca', amount: 0.25, unit: 'pieza', pricePerUnit: 3.00, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 4, unit: 'dientes', pricePerUnit: 0.25, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Cilantro', amount: 1, unit: 'manojo', pricePerUnit: 2.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Caldo vegetal en polvo', amount: 2, unit: 'cucharadas', pricePerUnit: 2.00, totalCost: 4.00, source: 'Tienda naturista' },
        { name: 'Sal de grano', amount: 2, unit: 'cucharaditas', pricePerUnit: 0.50, totalCost: 1.00, source: 'Central de Abastos' }
      ],
      instructions: [
        'Remoja las hojas de maíz en agua caliente hasta suavizar, escurre.',
        'Bate la manteca vegetal hasta esponjar, agrega masa poco a poco.',
        'Sazona la masa con sal y caldo vegetal, bate hasta que flote.',
        'Asa tomatillos y chiles hasta suavizar, licúa con ajo y cebolla.',
        'Cocina la salsa verde 15 minutos, sazona con sal y cilantro.',
        'Limpia quelites, corta setas en tiras, sofríe ambos por separado.',
        'Mezcla quelites, setas y frijoles con parte de la salsa verde.',
        'Extiende masa en la hoja de maíz, agrega relleno al centro.',
        'Envuelve doblando los lados de la hoja hacia el centro.',
        'Acomoda parados en vaporera con agua hirviendo.',
        'Cuece al vapor 60-90 minutos hasta que la masa se despegue fácil.',
        'Sirve calientes con salsa verde extra y crema vegetal.'
      ],
      nutritionInfo: {
        calories: 285,
        protein: 12,
        carbs: 42,
        fat: 9,
        fiber: 8,
        calcium: 95,
        iron: 4.5
      }
    },
    priceDifferencePercent: -31.6,
    healthScore: 84,
    healthBenefits: [
      'Masa de maíz nixtamalizada rica en calcio',
      'Quelites con alto contenido de hierro y vitaminas',
      'Fibra abundante que mejora la digestión',
      'Proteínas vegetales de frijoles y setas',
      'Libre de grasas saturadas animales',
      'Antioxidantes de tomatillos y chiles verdes'
    ],
    environmentalImpact: {
      co2Reduction: 68,
      waterSaving: 55,
      landSaving: 62
    }
  },
  {
    id: 'mole-pollo',
    category: 'mexican',
    traditional: {
      name: 'Mole Poblano con Pollo',
      estimatedPrice: 185.00,
      servings: 6,
      prepTime: '4 horas',
      nutritionInfo: {
        calories: 565,
        protein: 35,
        carbs: 28,
        fat: 35,
        fiber: 6,
        calcium: 150,
        iron: 4.2
      }
    },
    veganVersion: {
      name: 'Mole Poblano con Seitán Premium',
      description: 'Mole poblano tradicional con más de 20 ingredientes auténticos, acompañado de seitán especiado que supera la proteína del pollo.',
      estimatedPrice: 142.80,
      servings: 6,
      prepTime: '3.5 horas',
      difficulty: 'hard',
      ingredients: [
        { name: 'Gluten vital para seitán', amount: 180, unit: 'g', pricePerUnit: 0.085, totalCost: 15.30, source: 'Tienda naturista' },
        { name: 'Chiles mulatos', amount: 8, unit: 'piezas', pricePerUnit: 2.20, totalCost: 17.60, source: 'Central de Abastos' },
        { name: 'Chiles anchos', amount: 6, unit: 'piezas', pricePerUnit: 1.80, totalCost: 10.80, source: 'Central de Abastos' },
        { name: 'Chiles pasilla', amount: 4, unit: 'piezas', pricePerUnit: 2.50, totalCost: 10.00, source: 'Central de Abastos' },
        { name: 'Tomates jitomate', amount: 3, unit: 'piezas', pricePerUnit: 3.50, totalCost: 10.50, source: 'Central de Abastos' },
        { name: 'Chocolate de mesa', amount: 60, unit: 'g', pricePerUnit: 0.15, totalCost: 9.00, source: 'Central de Abastos' },
        { name: 'Almendras crudas', amount: 40, unit: 'g', pricePerUnit: 0.18, totalCost: 7.20, source: 'A granel Central de Abastos' },
        { name: 'Cacahuates sin sal', amount: 30, unit: 'g', pricePerUnit: 0.12, totalCost: 3.60, source: 'A granel Central de Abastos' },
        { name: 'Pasas de uva', amount: 25, unit: 'g', pricePerUnit: 0.20, totalCost: 5.00, source: 'A granel Central de Abastos' },
        { name: 'Semillas de sésamo', amount: 20, unit: 'g', pricePerUnit: 0.25, totalCost: 5.00, source: 'A granel Central de Abastos' },
        { name: 'Semillas de calabaza', amount: 20, unit: 'g', pricePerUnit: 0.22, totalCost: 4.40, source: 'A granel Central de Abastos' },
        { name: 'Tortilla de maíz (tostada)', amount: 1, unit: 'pieza', pricePerUnit: 1.20, totalCost: 1.20, source: 'Tortillería local' },
        { name: 'Pan bolillo tostado', amount: 1, unit: 'pieza', pricePerUnit: 2.50, totalCost: 2.50, source: 'Panadería local' },
        { name: 'Cebolla blanca', amount: 0.5, unit: 'pieza', pricePerUnit: 3.00, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 8, unit: 'dientes', pricePerUnit: 0.25, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Canela en rama', amount: 5, unit: 'g', pricePerUnit: 0.60, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Anís estrella', amount: 2, unit: 'piezas', pricePerUnit: 1.50, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Clavo de olor', amount: 8, unit: 'piezas', pricePerUnit: 0.20, totalCost: 1.60, source: 'Central de Abastos' },
        { name: 'Pimienta negra', amount: 5, unit: 'g', pricePerUnit: 0.30, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Caldo vegetal concentrado', amount: 1.5, unit: 'litros', pricePerUnit: 8.00, totalCost: 12.00, source: 'Preparación casera' },
        { name: 'Aceite vegetal', amount: 4, unit: 'cucharadas', pricePerUnit: 0.80, totalCost: 3.20, source: 'Mercado local' },
        { name: 'Sal de mar', amount: 2, unit: 'cucharaditas', pricePerUnit: 0.50, totalCost: 1.00, source: 'Central de Abastos' }
      ],
      instructions: [
        'Prepara el seitán: mezcla gluten vital con caldo especiado, amasa y cuece al vapor 30 min.',
        'Desvenena los chiles, tuesta en comal seco hasta aromatizar sin quemar.',
        'Remoja chiles en agua caliente 30 minutos hasta suavizar.',
        'Tuesta almendras, cacahuates, semillas, tortilla y pan por separado.',
        'Asa jitomates, cebolla y ajo en comal hasta suavizar.',
        'Tuesta especias enteras en comal seco hasta aromáticas.',
        'Licúa chiles escurridos con poco líquido de remojo hasta terso.',
        'En otra licuadora, muele semillas, nueces, pan, especias con caldo.',
        'Sofríe pasta de chiles en aceite caliente 15 minutos moviendo.',
        'Agrega mezcla de semillas, cocina 10 minutos más moviendo.',
        'Incorpora jitomates licuados, cocina hasta espesar.',
        'Agrega chocolate de mesa, caldo caliente gradualmente.',
        'Hierve a fuego lento 45 minutos hasta consistencia aterciopelada.',
        'Sazona con sal, agrega seitán cortado en piezas.',
        'Cocina 15 minutos más para integrar sabores.',
        'Sirve con arroz rojo, tortillas calientes y ajonjolí tostado.'
      ],
      nutritionInfo: {
        calories: 485,
        protein: 38,
        carbs: 45,
        fat: 22,
        fiber: 12,
        calcium: 185,
        iron: 8.5
      }
    },
    priceDifferencePercent: -22.8,
    healthScore: 91,
    healthBenefits: [
      'Proteína superior al pollo (38g vs 35g) con menos grasas saturadas',
      'Rico en antioxidantes de múltiples chiles y chocolate',
      'Grasas saludables de frutos secos y semillas',
      'Alto contenido de fibra y minerales esenciales',
      'Libre de colesterol y antibióticos',
      'Complejo vitamínico B natural de levadura nutricional'
    ],
    environmentalImpact: {
      co2Reduction: 78,
      waterSaving: 80,
      landSaving: 75
    }
  },
  {
    id: 'chiles-rellenos',
    category: 'mexican',
    traditional: {
      name: 'Chiles Rellenos de Queso',
      estimatedPrice: 98.00,
      servings: 4,
      prepTime: '1 hora',
      nutritionInfo: {
        calories: 420,
        protein: 22,
        carbs: 18,
        fat: 28,
        fiber: 4,
        calcium: 350,
        iron: 2.8
      }
    },
    veganVersion: {
      name: 'Chiles Poblanos Rellenos Plant-Based',
      description: 'Chiles poblanos rellenos de queso vegano casero especiado y proteína de hemp, capeados en harina de garbanzo y servidos en caldillo de jitomate.',
      estimatedPrice: 72.40,
      servings: 4,
      prepTime: '1.5 horas',
      difficulty: 'medium',
      ingredients: [
        { name: 'Chiles poblanos grandes', amount: 4, unit: 'piezas', pricePerUnit: 5.50, totalCost: 22.00, source: 'Central de Abastos' },
        { name: 'Queso vegano casero (cashews)', amount: 200, unit: 'g', pricePerUnit: 0.08, totalCost: 16.00, source: 'Preparación casera' },
        { name: 'Proteína de hemp en polvo', amount: 30, unit: 'g', pricePerUnit: 0.15, totalCost: 4.50, source: 'Tienda naturista' },
        { name: 'Harina de garbanzo', amount: 100, unit: 'g', pricePerUnit: 0.045, totalCost: 4.50, source: 'A granel Central de Abastos' },
        { name: 'Jitomates grandes', amount: 4, unit: 'piezas', pricePerUnit: 3.50, totalCost: 14.00, source: 'Central de Abastos' },
        { name: 'Cebolla blanca', amount: 0.25, unit: 'pieza', pricePerUnit: 3.00, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 3, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Agua con gas', amount: 150, unit: 'ml', pricePerUnit: 0.015, totalCost: 2.25, source: 'Tienda local' },
        { name: 'Caldo vegetal', amount: 300, unit: 'ml', pricePerUnit: 0.025, totalCost: 7.50, source: 'Preparación casera' },
        { name: 'Aceite vegetal para freír', amount: 200, unit: 'ml', pricePerUnit: 0.035, totalCost: 7.00, source: 'Mercado local' },
        { name: 'Orégano mexicano', amount: 5, unit: 'g', pricePerUnit: 0.30, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Comino molido', amount: 3, unit: 'g', pricePerUnit: 0.20, totalCost: 0.60, source: 'Central de Abastos' },
        { name: 'Sal de mar', amount: 8, unit: 'g', pricePerUnit: 0.05, totalCost: 0.40, source: 'Central de Abastos' }
      ],
      instructions: [
        'Asa chiles poblanos directamente al fuego hasta charrar la piel.',
        'Envuelve en bolsa plástica 10 minutos, pela cuidadosamente.',
        'Haz un corte lateral, retira semillas y venas sin romper.',
        'Mezcla queso vegano con proteína de hemp y especias.',
        'Rellena cada chile con la mezcla, cierra con palillo.',
        'Asa jitomates, cebolla y ajo, licúa con caldo y sal.',
        'Cocina el caldillo 15 minutos hasta espesar ligeramente.',
        'Mezcla harina de garbanzo con agua gasificada hasta cremosa.',
        'Calienta aceite a 180°C para freír.',
        'Cubre chiles rellenos con harina de garbanzo, fríe hasta dorar.',
        'Escurre sobre papel absorbente.',
        'Sirve bañados en caldillo caliente con arroz blanco.'
      ],
      nutritionInfo: {
        calories: 385,
        protein: 26,
        carbs: 28,
        fat: 20,
        fiber: 9,
        calcium: 120,
        iron: 5.2
      }
    },
    priceDifferencePercent: -26.1,
    healthScore: 88,
    healthBenefits: [
      'Proteína superior al queso lácteo (26g vs 22g)',
      'Rico en omega-3 de la proteína de hemp',
      'Harina de garbanzo aporta proteína adicional y fibra',
      'Libre de colesterol y hormonas lácteas',
      'Antioxidantes del chile poblano y jitomate',
      'Aminoácidos esenciales completos'
    ],
    environmentalImpact: {
      co2Reduction: 72,
      waterSaving: 85,
      landSaving: 78
    }
  },
  {
    id: 'barbacoa-tacos',
    category: 'mexican',
    traditional: {
      name: 'Tacos de Barbacoa de Borrego (6 piezas)',
      estimatedPrice: 102.00,
      servings: 2,
      prepTime: '5 horas',
      nutritionInfo: {
        calories: 580,
        protein: 32,
        carbs: 36,
        fat: 32,
        fiber: 4,
        calcium: 95,
        iron: 4.2
      }
    },
    veganVersion: {
      name: 'Tacos de Jackfruit Barbacoa Mexicana (6 piezas)',
      description: 'Jackfruit marinado en consomé de chiles y especias tradicionales, cocido lentamente hasta lograr la textura perfecta de barbacoa.',
      estimatedPrice: 76.50,
      servings: 2,
      prepTime: '3 horas + marinado',
      difficulty: 'medium',
      ingredients: [
        { name: 'Jackfruit joven escurrido', amount: 500, unit: 'g', pricePerUnit: 0.055, totalCost: 27.50, source: 'Tienda asiática' },
        { name: 'Proteína de soya concentrada', amount: 50, unit: 'g', pricePerUnit: 0.10, totalCost: 5.00, source: 'Tienda naturista' },
        { name: 'Tortillas de maíz artesanales', amount: 12, unit: 'piezas', pricePerUnit: 1.20, totalCost: 14.40, source: 'Tortillería local' },
        { name: 'Chiles chipotle secos', amount: 6, unit: 'piezas', pricePerUnit: 1.80, totalCost: 10.80, source: 'Central de Abastos' },
        { name: 'Chiles guajillo', amount: 4, unit: 'piezas', pricePerUnit: 1.50, totalCost: 6.00, source: 'Central de Abastos' },
        { name: 'Hojas de aguacate tostadas', amount: 8, unit: 'piezas', pricePerUnit: 0.50, totalCost: 4.00, source: 'Central de Abastos' },
        { name: 'Cebolla blanca grande', amount: 0.5, unit: 'pieza', pricePerUnit: 4.50, totalCost: 2.25, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 6, unit: 'dientes', pricePerUnit: 0.25, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Tomillo fresco', amount: 8, unit: 'g', pricePerUnit: 0.30, totalCost: 2.40, source: 'Central de Abastos' },
        { name: 'Mejorana seca', amount: 5, unit: 'g', pricePerUnit: 0.40, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Vinagre de manzana', amount: 30, unit: 'ml', pricePerUnit: 0.045, totalCost: 1.35, source: 'Tienda naturista' },
        { name: 'Aceite de oliva', amount: 25, unit: 'ml', pricePerUnit: 0.20, totalCost: 5.00, source: 'Mercado local' },
        { name: 'Sal marina gruesa', amount: 10, unit: 'g', pricePerUnit: 0.05, totalCost: 0.50, source: 'Central de Abastos' },
        { name: 'Pimienta negra molida', amount: 3, unit: 'g', pricePerUnit: 0.30, totalCost: 0.90, source: 'Central de Abastos' }
      ],
      instructions: [
        'Deshebra el jackfruit fino, removiendo semillas y partes duras.',
        'Hidrata proteína de soya con caldo caliente especiado.',
        'Tuesta chiles en comal seco hasta aromáticos, remoja en agua caliente.',
        'Tuesta hojas de aguacate hasta crujientes, muele fino.',
        'Licúa chiles remojados con ajo, cebolla, vinagre y especias.',
        'Marina jackfruit y proteína con la salsa 4 horas mínimo.',
        'Cocina la mezcla marinada en olla tapada 2.5 horas a fuego lento.',
        'Agrega hojas de aguacate molidas en los últimos 30 minutos.',
        'Deshebra más fino si es necesario, ajusta sazón.',
        'Calienta tortillas en comal hasta suaves.',
        'Sirve la barbacoa caliente en tortillas.',
        'Acompaña con cebolla picada, cilantro y salsa verde.'
      ],
      nutritionInfo: {
        calories: 465,
        protein: 35,
        carbs: 52,
        fat: 16,
        fiber: 18,
        calcium: 125,
        iron: 7.8
      }
    },
    priceDifferencePercent: -25.0,
    healthScore: 93,
    healthBenefits: [
      'Proteína superior a la barbacoa tradicional (35g vs 32g)',
      'Alto contenido de fibra del jackfruit (18g vs 4g)',
      'Libre de colesterol y grasas saturadas',
      'Rico en antioxidantes de chiles y hierbas aromáticas',
      'Menor contenido calórico con mayor saciedad',
      'Hierro de alta biodisponibilidad'
    ],
    environmentalImpact: {
      co2Reduction: 85,
      waterSaving: 90,
      landSaving: 88
    }
  }
];
