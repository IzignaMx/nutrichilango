
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
  },
  {
    id: 'picadillo-soya',
    category: 'mexican',
    traditional: {
      name: 'Picadillo Tradicional con Carne',
      estimatedPrice: 85.00,
      servings: 4,
      prepTime: '40 min',
      nutritionInfo: {
        calories: 420,
        protein: 22,
        carbs: 18,
        fat: 28,
        fiber: 3,
        calcium: 60,
        iron: 3.8
      }
    },
    veganVersion: {
      name: 'Picadillo de Soya Texturizada Tradicional',
      description: 'Picadillo casero con soya texturizada gruesa, papas, zanahoria y chícharos en salsa de tomate con especias tradicionales mexicanas. Mayor proteína que la carne.',
      estimatedPrice: 52.80,
      servings: 4,
      prepTime: '35 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Soya texturizada gruesa', amount: 180, unit: 'g', pricePerUnit: 0.06, totalCost: 10.80, source: 'A granel Central de Abastos' },
        { name: 'Papas criollas', amount: 3, unit: 'piezas medianas', pricePerUnit: 2.50, totalCost: 7.50, source: 'Central de Abastos' },
        { name: 'Zanahoria', amount: 2, unit: 'piezas', pricePerUnit: 2.00, totalCost: 4.00, source: 'Central de Abastos' },
        { name: 'Chícharos verdes', amount: 100, unit: 'g', pricePerUnit: 0.08, totalCost: 8.00, source: 'Central de Abastos' },
        { name: 'Tomates guaje', amount: 4, unit: 'piezas', pricePerUnit: 2.50, totalCost: 10.00, source: 'Central de Abastos' },
        { name: 'Cebolla blanca', amount: 1, unit: 'pieza', pricePerUnit: 3.00, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 3, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Caldo de verduras concentrado', amount: 300, unit: 'ml', pricePerUnit: 0.015, totalCost: 4.50, source: 'Preparación casera' },
        { name: 'Aceite vegetal', amount: 2, unit: 'cucharadas', pricePerUnit: 0.80, totalCost: 1.60, source: 'Mercado local' },
        { name: 'Comino molido', amount: 1, unit: 'cucharadita', pricePerUnit: 3.00, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Sal y pimienta', amount: 1, unit: 'porción', pricePerUnit: 0.50, totalCost: 0.50, source: 'Despensa' }
      ],
      instructions: [
        'Hidrata la soya texturizada con caldo vegetal caliente por 20 minutos.',
        'Corta las papas y zanahoria en cubos pequeños, iguales.',
        'Blanquea los tomates, pélalos y pícalos finamente.',
        'Sofríe cebolla y ajo picados en aceite hasta cristalinos.',
        'Agrega la soya escurrida y sofríe 5 minutos hasta dorar ligeramente.',
        'Incorpora tomate picado, cocina hasta que se reduzca.',
        'Añade papas, zanahoria y sazona con sal, pimienta y comino.',
        'Agrega un poco de caldo, tapa y cocina 15 minutos a fuego medio.',
        'Incorpora los chícharos en los últimos 5 minutos de cocción.',
        'Sirve caliente acompañado de tortillas de maíz o arroz blanco.'
      ],
      nutritionInfo: {
        calories: 310,
        protein: 28,
        carbs: 32,
        fat: 8,
        fiber: 12,
        calcium: 95,
        iron: 6.2
      }
    },
    priceDifferencePercent: -37.9,
    healthScore: 88,
    healthBenefits: [
      'Proteína superior a la carne (28g vs 22g) con menos grasa',
      'Rica en fibra que mejora la digestión y saciedad',
      'Alto contenido de hierro de fácil absorción',
      'Libre de colesterol y grasas saturadas',
      'Carbohidratos complejos de las papas para energía sostenida',
      'Vitaminas del complejo B de la soya texturizada'
    ],
    environmentalImpact: {
      co2Reduction: 72,
      waterSaving: 68,
      landSaving: 75
    }
  },
  {
    id: 'chiles-rellenos-soya',
    category: 'mexican',
    traditional: {
      name: 'Chiles Rellenos de Queso',
      estimatedPrice: 110.00,
      servings: 4,
      prepTime: '60 min',
      nutritionInfo: {
        calories: 485,
        protein: 18,
        carbs: 22,
        fat: 36,
        fiber: 4,
        calcium: 320,
        iron: 2.5
      }
    },
    veganVersion: {
      name: 'Chiles Poblanos Rellenos de Soya y Queso Vegano',
      description: 'Chiles poblanos rellenos de mezcla proteica de soya texturizada, verduras y queso vegano casero, capeados en harina de garbanzo y servidos en caldillo de tomate.',
      estimatedPrice: 78.90,
      servings: 4,
      prepTime: '55 min',
      difficulty: 'medium',
      ingredients: [
        { name: 'Chiles poblanos grandes', amount: 4, unit: 'piezas', pricePerUnit: 4.50, totalCost: 18.00, source: 'Central de Abastos' },
        { name: 'Soya texturizada fina', amount: 120, unit: 'g', pricePerUnit: 0.06, totalCost: 7.20, source: 'A granel Central de Abastos' },
        { name: 'Queso vegano rallado casero', amount: 150, unit: 'g', pricePerUnit: 0.08, totalCost: 12.00, source: 'Preparación casera' },
        { name: 'Cebolla blanca', amount: 0.5, unit: 'pieza', pricePerUnit: 3.00, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Zanahoria', amount: 1, unit: 'pieza pequeña', pricePerUnit: 1.50, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Calabacita', amount: 1, unit: 'pieza pequeña', pricePerUnit: 2.50, totalCost: 2.50, source: 'Central de Abastos' },
        { name: 'Tomates guaje', amount: 4, unit: 'piezas', pricePerUnit: 2.50, totalCost: 10.00, source: 'Central de Abastos' },
        { name: 'Harina de garbanzo', amount: 100, unit: 'g', pricePerUnit: 0.055, totalCost: 5.50, source: 'A granel Central de Abastos' },
        { name: 'Caldo de verduras', amount: 400, unit: 'ml', pricePerUnit: 0.015, totalCost: 6.00, source: 'Preparación casera' },
        { name: 'Ajo', amount: 3, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Aceite vegetal para freír', amount: 200, unit: 'ml', pricePerUnit: 0.035, totalCost: 7.00, source: 'Mercado local' },
        { name: 'Sal, pimienta y especias', amount: 1, unit: 'porción', pricePerUnit: 1.50, totalCost: 1.50, source: 'Despensa' },
        { name: 'Aquafaba (agua de garbanzos)', amount: 3, unit: 'cucharadas', pricePerUnit: 0.50, totalCost: 1.50, source: 'Conserva casera' },
        { name: 'Polvo para hornear', amount: 1, unit: 'cucharadita', pricePerUnit: 2.00, totalCost: 2.00, source: 'Mercado local' },
        { name: 'Cilantro fresco', amount: 2, unit: 'cucharadas', pricePerUnit: 1.00, totalCost: 2.00, source: 'Central de Abastos' }
      ],
      instructions: [
        'Asa los chiles poblanos sobre flama directa hasta que la piel se ampolle.',
        'Colócalos en bolsa de plástico 10 minutos, pela cuidadosamente.',
        'Haz un corte lateral y retira semillas y venas sin romper.',
        'Hidrata la soya texturizada con caldo caliente por 20 minutos.',
        'Sofríe cebolla, ajo y verduras picadas hasta tiernas.',
        'Agrega soya escurrida, cocina 5 minutos y sazona bien.',
        'Incorpora la mitad del queso vegano a la mezcla, enfría.',
        'Rellena cada chile con la mezcla y cierra con palillos.',
        'Prepara caldillo: licúa tomates asados con ajo, cuela y cocina.',
        'Para capear: bate aquafaba hasta espumar, mezcla con harina de garbanzo y polvo para hornear.',
        'Pasa chiles por la mezcla y fríe en aceite caliente hasta dorar.',
        'Sirve en caldillo caliente, espolvorea queso vegano restante y cilantro.'
      ],
      nutritionInfo: {
        calories: 385,
        protein: 26,
        carbs: 28,
        fat: 20,
        fiber: 11,
        calcium: 180,
        iron: 5.8
      }
    },
    priceDifferencePercent: -28.3,
    healthScore: 86,
    healthBenefits: [
      'Mayor proteína que la versión tradicional (26g vs 18g)',
      'Rico en fibra de verduras y chiles poblanos',
      'Libre de colesterol y menor contenido de grasa saturada',
      'Vitamina C abundante de los chiles poblanos',
      'Hierro biodisponible de la soya texturizada',
      'Antioxidantes naturales de chiles y tomates'
    ],
    environmentalImpact: {
      co2Reduction: 68,
      waterSaving: 55,
      landSaving: 62
    }
  },
  {
    id: 'tacos-pastor-soya',
    category: 'mexican',
    traditional: {
      name: 'Tacos al Pastor (5 piezas)',
      estimatedPrice: 75.00,
      servings: 2,
      prepTime: '20 min',
      nutritionInfo: {
        calories: 520,
        protein: 24,
        carbs: 35,
        fat: 32,
        fiber: 3,
        calcium: 85,
        iron: 3.2
      }
    },
    veganVersion: {
      name: 'Tacos de Soya al Pastor Tradicional',
      description: 'Tacos con soya texturizada marinada en achiote y chiles, cocida al estilo pastor con piña asada. Más proteína que el cerdo tradicional.',
      estimatedPrice: 48.70,
      servings: 2,
      prepTime: '45 min + marinado',
      difficulty: 'medium',
      ingredients: [
        { name: 'Soya texturizada gruesa', amount: 150, unit: 'g', pricePerUnit: 0.06, totalCost: 9.00, source: 'A granel Central de Abastos' },
        { name: 'Tortillas de maíz pequeñas', amount: 10, unit: 'piezas', pricePerUnit: 0.80, totalCost: 8.00, source: 'Tortillería local' },
        { name: 'Chiles guajillo', amount: 4, unit: 'piezas', pricePerUnit: 1.50, totalCost: 6.00, source: 'Central de Abastos' },
        { name: 'Chile chipotle', amount: 2, unit: 'piezas', pricePerUnit: 2.00, totalCost: 4.00, source: 'Central de Abastos' },
        { name: 'Achiote en pasta', amount: 15, unit: 'g', pricePerUnit: 0.18, totalCost: 2.70, source: 'Central de Abastos' },
        { name: 'Piña madura', amount: 2, unit: 'rebanadas', pricePerUnit: 3.00, totalCost: 6.00, source: 'Central de Abastos' },
        { name: 'Cebolla blanca', amount: 0.5, unit: 'pieza', pricePerUnit: 3.00, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 4, unit: 'dientes', pricePerUnit: 0.25, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Vinagre de manzana', amount: 2, unit: 'cucharadas', pricePerUnit: 0.50, totalCost: 1.00, source: 'Mercado local' },
        { name: 'Caldo vegetal concentrado', amount: 200, unit: 'ml', pricePerUnit: 0.015, totalCost: 3.00, source: 'Preparación casera' },
        { name: 'Aceite vegetal', amount: 2, unit: 'cucharadas', pricePerUnit: 0.80, totalCost: 1.60, source: 'Mercado local' },
        { name: 'Sal y pimienta', amount: 1, unit: 'porción', pricePerUnit: 0.50, totalCost: 0.50, source: 'Despensa' },
        { name: 'Cilantro y cebolla para servir', amount: 1, unit: 'porción', pricePerUnit: 3.00, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Salsa verde', amount: 50, unit: 'ml', pricePerUnit: 0.02, totalCost: 1.00, source: 'Preparación casera' },
        { name: 'Limones', amount: 2, unit: 'piezas', pricePerUnit: 0.50, totalCost: 1.00, source: 'Central de Abastos' }
      ],
      instructions: [
        'Desvenena los chiles, ásalos en comal seco hasta aromatizar.',
        'Remoja los chiles en agua caliente por 20 minutos hasta suavizar.',
        'Licúa chiles escurridos con ajo, achiote, vinagre y un poco de agua.',
        'Hidrata la soya texturizada con caldo vegetal caliente por 30 minutos.',
        'Marina la soya escurrida con la salsa de chiles por 2 horas mínimo.',
        'Asa las rebanadas de piña en comal hasta caramelizar, reserva.',
        'En sartén con aceite, sofríe la soya marinada a fuego medio-alto.',
        'Cocina moviendo frecuentemente hasta que se dore y concentre, 15 minutos.',
        'Agrega la piña picada en cubitos en los últimos 3 minutos.',
        'Calienta las tortillas en comal hasta suaves y aromáticas.',
        'Sirve la soya al pastor en tortillas calientes.',
        'Acompaña con cebolla picada, cilantro, salsa verde y limón.'
      ],
      nutritionInfo: {
        calories: 420,
        protein: 32,
        carbs: 48,
        fat: 12,
        fiber: 14,
        calcium: 110,
        iron: 6.8
      }
    },
    priceDifferencePercent: -35.1,
    healthScore: 90,
    healthBenefits: [
      'Proteína superior al cerdo (32g vs 24g) con menos grasa',
      'Alto contenido de fibra que mejora la digestión',
      'Rico en hierro biodisponible de la soya',
      'Libre de colesterol y grasas saturadas',
      'Vitamina C de la piña que mejora absorción de hierro',
      'Antioxidantes potentes de chiles tradicionales'
    ],
    environmentalImpact: {
      co2Reduction: 80,
      waterSaving: 75,
      landSaving: 78
    }
  },
  {
    id: 'sopes-soya',
    category: 'mexican',
    traditional: {
      name: 'Sopes con Carne Molida (3 piezas)',
      estimatedPrice: 65.00,
      servings: 2,
      prepTime: '35 min',
      nutritionInfo: {
        calories: 445,
        protein: 20,
        carbs: 28,
        fat: 26,
        fiber: 4,
        calcium: 140,
        iron: 2.8
      }
    },
    veganVersion: {
      name: 'Sopes de Soya Texturizada Tradicionales',
      description: 'Sopes caseros de masa de maíz con soya texturizada sazonada, frijoles refritos, lechuga, crema vegetal y queso rallado vegano. Rica en proteína.',
      estimatedPrice: 42.80,
      servings: 2,
      prepTime: '40 min',
      difficulty: 'medium',
      ingredients: [
        { name: 'Masa de maíz para tortillas', amount: 300, unit: 'g', pricePerUnit: 0.012, totalCost: 3.60, source: 'Tortillería local' },
        { name: 'Soya texturizada fina', amount: 100, unit: 'g', pricePerUnit: 0.06, totalCost: 6.00, source: 'A granel Central de Abastos' },
        { name: 'Frijoles negros cocidos', amount: 150, unit: 'g', pricePerUnit: 0.025, totalCost: 3.75, source: 'Cocción casera' },
        { name: 'Lechuga orejona', amount: 6, unit: 'hojas', pricePerUnit: 0.50, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Tomate rojo', amount: 1, unit: 'pieza', pricePerUnit: 2.50, totalCost: 2.50, source: 'Central de Abastos' },
        { name: 'Cebolla blanca', amount: 0.3, unit: 'pieza', pricePerUnit: 3.00, totalCost: 0.90, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 2, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.50, source: 'Central de Abastos' },
        { name: 'Caldo vegetal', amount: 150, unit: 'ml', pricePerUnit: 0.015, totalCost: 2.25, source: 'Preparación casera' },
        { name: 'Crema vegetal casera', amount: 3, unit: 'cucharadas', pricePerUnit: 0.60, totalCost: 1.80, source: 'Preparación casera' },
        { name: 'Queso vegano rallado', amount: 60, unit: 'g', pricePerUnit: 0.08, totalCost: 4.80, source: 'Preparación casera' },
        { name: 'Aceite vegetal', amount: 3, unit: 'cucharadas', pricePerUnit: 0.80, totalCost: 2.40, source: 'Mercado local' },
        { name: 'Comino molido', amount: 1, unit: 'cucharadita', pricePerUnit: 3.00, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Pimentón dulce', amount: 1, unit: 'cucharadita', pricePerUnit: 2.50, totalCost: 2.50, source: 'Central de Abastos' },
        { name: 'Sal, pimienta y orégano', amount: 1, unit: 'porción', pricePerUnit: 1.00, totalCost: 1.00, source: 'Despensa' },
        { name: 'Salsa roja casera', amount: 3, unit: 'cucharadas', pricePerUnit: 0.50, totalCost: 1.50, source: 'Preparación casera' },
        { name: 'Rábanos', amount: 3, unit: 'piezas', pricePerUnit: 0.50, totalCost: 1.50, source: 'Central de Abastos' }
      ],
      instructions: [
        'Forma pequeñas tortillas gruesas con la masa de maíz.',
        'Cuece en comal caliente 3 minutos por lado hasta formar costra.',
        'Pellizca los bordes para formar muros alrededor de cada sope.',
        'Hidrata la soya texturizada con caldo vegetal caliente por 20 minutos.',
        'Sofríe cebolla y ajo picados en aceite hasta cristalinos.',
        'Agrega la soya escurrida, comino, pimentón y sazona bien.',
        'Cocina la soya moviendo frecuentemente hasta dorar, 8 minutos.',
        'Calienta los frijoles y machaca ligeramente para cremosidad.',
        'Fríe ligeramente los sopes en aceite hasta dorar por fuera.',
        'Unta cada sope con frijoles refritos calientes.',
        'Cubre con la soya sazonada y verduras frescas.',
        'Corona con crema vegetal, queso rallado vegano y salsa al gusto.'
      ],
      nutritionInfo: {
        calories: 385,
        protein: 26,
        carbs: 42,
        fat: 14,
        fiber: 12,
        calcium: 165,
        iron: 5.5
      }
    },
    priceDifferencePercent: -34.2,
    healthScore: 87,
    healthBenefits: [
      'Mayor proteína que la carne molida (26g vs 20g)',
      'Rica en fibra de frijoles y verduras frescas',
      'Hierro de fácil absorción de la soya texturizada',
      'Libre de colesterol y menor en grasas saturadas',
      'Carbohidratos complejos del maíz para energía sostenida',
      'Probióticos naturales de los frijoles fermentados'
    ],
    environmentalImpact: {
      co2Reduction: 76,
      waterSaving: 70,
      landSaving: 72
    }
  },
  {
    id: 'milanesas-soya',
    category: 'mexican',
    traditional: {
      name: 'Milanesas de Res Empanizadas',
      estimatedPrice: 125.00,
      servings: 4,
      prepTime: '30 min',
      nutritionInfo: {
        calories: 520,
        protein: 28,
        carbs: 22,
        fat: 35,
        fiber: 2,
        calcium: 85,
        iron: 3.5
      }
    },
    veganVersion: {
      name: 'Milanesas de Soya Texturizada Empanizadas',
      description: 'Milanesas plant-based hechas con soya texturizada gruesa, empanizadas con pan molido casero y especias. Más proteína que las tradicionales.',
      estimatedPrice: 78.40,
      servings: 4,
      prepTime: '35 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Soya texturizada gruesa', amount: 200, unit: 'g', pricePerUnit: 0.06, totalCost: 12.00, source: 'A granel Central de Abastos' },
        { name: 'Harina de trigo integral', amount: 100, unit: 'g', pricePerUnit: 0.018, totalCost: 1.80, source: 'A granel Central de Abastos' },
        { name: 'Pan tostado molido', amount: 150, unit: 'g', pricePerUnit: 0.025, totalCost: 3.75, source: 'Preparación casera' },
        { name: 'Aquafaba (agua de garbanzos)', amount: 100, unit: 'ml', pricePerUnit: 0.008, totalCost: 0.80, source: 'Conserva casera' },
        { name: 'Caldo vegetal concentrado', amount: 400, unit: 'ml', pricePerUnit: 0.015, totalCost: 6.00, source: 'Preparación casera' },
        { name: 'Proteína de chícharo', amount: 30, unit: 'g', pricePerUnit: 0.12, totalCost: 3.60, source: 'Tienda naturista' },
        { name: 'Gluten vital', amount: 40, unit: 'g', pricePerUnit: 0.085, totalCost: 3.40, source: 'Tienda naturista' },
        { name: 'Cebolla en polvo', amount: 2, unit: 'cucharaditas', pricePerUnit: 1.50, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Ajo en polvo', amount: 1, unit: 'cucharadita', pricePerUnit: 2.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Paprika ahumada', amount: 1, unit: 'cucharadita', pricePerUnit: 3.50, totalCost: 3.50, source: 'Central de Abastos' },
        { name: 'Comino molido', amount: 0.5, unit: 'cucharadita', pricePerUnit: 3.00, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Sal marina', amount: 2, unit: 'cucharaditas', pricePerUnit: 0.50, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Pimienta negra', amount: 1, unit: 'cucharadita', pricePerUnit: 3.00, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Aceite vegetal para freír', amount: 200, unit: 'ml', pricePerUnit: 0.035, totalCost: 7.00, source: 'Mercado local' },
        { name: 'Limones', amount: 2, unit: 'piezas', pricePerUnit: 0.50, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Perejil fresco', amount: 1, unit: 'manojo', pricePerUnit: 2.00, totalCost: 2.00, source: 'Central de Abastos' }
      ],
      instructions: [
        'Hidrata la soya texturizada con caldo vegetal caliente especiado por 30 minutos.',
        'Mezcla proteína de chícharo y gluten vital con un poco de caldo hasta formar pasta.',
        'Escurre la soya y mézcla con la pasta proteica, ajo, cebolla en polvo y especias.',
        'Amasa la mezcla hasta conseguir consistencia firme y maleable.',
        'Forma 8 milanesas ovaladas de 1 cm de grosor, compacta bien.',
        'Refrigera las milanesas 20 minutos para que mantengan la forma.',
        'Prepara estación de empanizado: harina, aquafaba batida, pan molido con especias.',
        'Pasa cada milanesa por harina, aquafaba y pan molido, presiona bien.',
        'Calienta aceite a 180°C, fríe milanesas 4-5 minutos por lado hasta dorar.',
        'Escurre sobre papel absorbente para eliminar exceso de aceite.',
        'Sirve calientes con limón, perejil picado y guarnición al gusto.'
      ],
      nutritionInfo: {
        calories: 415,
        protein: 35,
        carbs: 38,
        fat: 18,
        fiber: 10,
        calcium: 120,
        iron: 7.2
      }
    },
    priceDifferencePercent: -37.3,
    healthScore: 89,
    healthBenefits: [
      'Proteína superior a la carne (35g vs 28g) con menos grasas saturadas',
      'Rico en hierro biodisponible de la soya texturizada',
      'Alto contenido de fibra que mejora la digestión',
      'Libre de colesterol y antibióticos',
      'Proteína completa con todos los aminoácidos esenciales',
      'Menor contenido calórico con mayor saciedad'
    ],
    environmentalImpact: {
      co2Reduction: 78,
      waterSaving: 82,
      landSaving: 80
    }
  },
  {
    id: 'albondigas-soya',
    category: 'mexican',
    traditional: {
      name: 'Albóndigas en Salsa Roja',
      estimatedPrice: 95.00,
      servings: 5,
      prepTime: '50 min',
      nutritionInfo: {
        calories: 445,
        protein: 24,
        carbs: 18,
        fat: 30,
        fiber: 3,
        calcium: 95,
        iron: 3.8
      }
    },
    veganVersion: {
      name: 'Albóndigas de Soya Texturizada en Salsa de Jitomate',
      description: 'Albóndigas plant-based con soya texturizada, avena y verduras, cocidas en salsa roja tradicional. Mayor proteína y fibra que las tradicionales.',
      estimatedPrice: 62.80,
      servings: 5,
      prepTime: '45 min',
      difficulty: 'medium',
      ingredients: [
        { name: 'Soya texturizada fina', amount: 150, unit: 'g', pricePerUnit: 0.06, totalCost: 9.00, source: 'A granel Central de Abastos' },
        { name: 'Avena en hojuelas', amount: 80, unit: 'g', pricePerUnit: 0.025, totalCost: 2.00, source: 'A granel Central de Abastos' },
        { name: 'Zanahoria rallada', amount: 100, unit: 'g', pricePerUnit: 0.02, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Cebolla blanca picada', amount: 80, unit: 'g', pricePerUnit: 0.03, totalCost: 2.40, source: 'Central de Abastos' },
        { name: 'Tomates guaje', amount: 6, unit: 'piezas', pricePerUnit: 2.50, totalCost: 15.00, source: 'Central de Abastos' },
        { name: 'Chile guajillo', amount: 3, unit: 'piezas', pricePerUnit: 1.50, totalCost: 4.50, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 4, unit: 'dientes', pricePerUnit: 0.25, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Caldo vegetal concentrado', amount: 500, unit: 'ml', pricePerUnit: 0.015, totalCost: 7.50, source: 'Preparación casera' },
        { name: 'Harina de garbanzo', amount: 40, unit: 'g', pricePerUnit: 0.055, totalCost: 2.20, source: 'A granel Central de Abastos' },
        { name: 'Perejil fresco picado', amount: 3, unit: 'cucharadas', pricePerUnit: 0.50, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Comino molido', amount: 1, unit: 'cucharadita', pricePerUnit: 3.00, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Orégano seco', amount: 1, unit: 'cucharadita', pricePerUnit: 1.50, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Aceite vegetal', amount: 3, unit: 'cucharadas', pricePerUnit: 0.80, totalCost: 2.40, source: 'Mercado local' },
        { name: 'Sal marina', amount: 2, unit: 'cucharaditas', pricePerUnit: 0.50, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Pimienta negra', amount: 0.5, unit: 'cucharadita', pricePerUnit: 3.00, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Papa cambray', amount: 300, unit: 'g', pricePerUnit: 0.018, totalCost: 5.40, source: 'Central de Abastos' },
        { name: 'Chícharos verdes', amount: 100, unit: 'g', pricePerUnit: 0.08, totalCost: 8.00, source: 'Central de Abastos' }
      ],
      instructions: [
        'Hidrata la soya texturizada con 300ml de caldo caliente por 25 minutos.',
        'Remoja la avena en 100ml de caldo hasta suavizar.',
        'Sofríe cebolla y zanahoria rallada hasta tiernas, enfría.',
        'Asa tomates y chile guajillo, licúa con ajo y sal, cuela.',
        'Mezcla soya escurrida, avena, verduras sofríadas, harina de garbanzo y especias.',
        'Agrega perejil, amasa hasta conseguir masa compacta que se moldee.',
        'Forma albóndigas del tamaño de una nuez, compacta bien.',
        'Dora las albóndigas en aceite caliente por todos lados.',
        'En la misma olla, sofríe la salsa de tomate 10 minutos.',
        'Agrega caldo restante, papas cortadas en cuartos y albóndigas.',
        'Hierve tapado 20 minutos, agrega chícharos últimos 5 minutos.',
        'Sirve caliente con tortillas de maíz y arroz blanco.'
      ],
      nutritionInfo: {
        calories: 325,
        protein: 28,
        carbs: 35,
        fat: 12,
        fiber: 11,
        calcium: 110,
        iron: 6.5
      }
    },
    priceDifferencePercent: -33.9,
    healthScore: 87,
    healthBenefits: [
      'Proteína superior a la carne (28g vs 24g) con menos grasa',
      'Rica en fibra de avena que reduce el colesterol',
      'Alto contenido de hierro biodisponible',
      'Libre de colesterol y grasas saturadas',
      'Carbohidratos complejos para energía sostenida',
      'Vitaminas del complejo B de la soya'
    ],
    environmentalImpact: {
      co2Reduction: 74,
      waterSaving: 70,
      landSaving: 75
    }
  },
  {
    id: 'tinga-soya',
    category: 'mexican',
    traditional: {
      name: 'Tinga de Pollo',
      estimatedPrice: 88.00,
      servings: 4,
      prepTime: '35 min',
      nutritionInfo: {
        calories: 385,
        protein: 26,
        carbs: 12,
        fat: 25,
        fiber: 3,
        calcium: 75,
        iron: 2.8
      }
    },
    veganVersion: {
      name: 'Tinga de Soya Texturizada Tradicional',
      description: 'Tinga plant-based con soya texturizada en salsa de tomate, chipotle y cebolla. Perfecta para tacos, tostadas o tortas. Mayor proteína que el pollo.',
      estimatedPrice: 54.60,
      servings: 4,
      prepTime: '30 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Soya texturizada gruesa', amount: 160, unit: 'g', pricePerUnit: 0.06, totalCost: 9.60, source: 'A granel Central de Abastos' },
        { name: 'Tomates guaje', amount: 5, unit: 'piezas', pricePerUnit: 2.50, totalCost: 12.50, source: 'Central de Abastos' },
        { name: 'Chiles chipotle adobados', amount: 3, unit: 'piezas', pricePerUnit: 1.80, totalCost: 5.40, source: 'Central de Abastos' },
        { name: 'Cebolla blanca grande', amount: 1, unit: 'pieza', pricePerUnit: 4.50, totalCost: 4.50, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 3, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Caldo vegetal concentrado', amount: 350, unit: 'ml', pricePerUnit: 0.015, totalCost: 5.25, source: 'Preparación casera' },
        { name: 'Laurel seco', amount: 2, unit: 'hojas', pricePerUnit: 0.50, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Tomillo seco', amount: 1, unit: 'cucharadita', pricePerUnit: 2.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Vinagre blanco', amount: 1, unit: 'cucharada', pricePerUnit: 1.50, totalCost: 1.50, source: 'Mercado local' },
        { name: 'Aceite vegetal', amount: 2, unit: 'cucharadas', pricePerUnit: 0.80, totalCost: 1.60, source: 'Mercado local' },
        { name: 'Sal marina', amount: 1.5, unit: 'cucharaditas', pricePerUnit: 0.50, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Pimienta negra', amount: 0.5, unit: 'cucharadita', pricePerUnit: 3.00, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Azúcar morena', amount: 1, unit: 'cucharadita', pricePerUnit: 2.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Cebolla morada para servir', amount: 0.5, unit: 'pieza', pricePerUnit: 4.50, totalCost: 2.25, source: 'Central de Abastos' },
        { name: 'Cilantro fresco', amount: 1, unit: 'manojo', pricePerUnit: 2.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Aguacate', amount: 1, unit: 'pieza', pricePerUnit: 6.00, totalCost: 6.00, source: 'Central de Abastos' }
      ],
      instructions: [
        'Hidrata la soya texturizada con caldo vegetal caliente por 25 minutos.',
        'Asa tomates en comal hasta suavizar y charrar ligeramente.',
        'Licúa tomates asados con chiles chipotle, ajo y poco caldo.',
        'Cuela la salsa para obtener consistencia tersa.',
        'Corta la cebolla blanca en medias lunas delgadas.',
        'Sofríe la cebolla en aceite hasta cristalina y dorada.',
        'Agrega la soya escurrida, sofríe 5 minutos hasta dorar.',
        'Incorpora la salsa de tomate y chipotle, mezcla bien.',
        'Agrega laurel, tomillo, vinagre, sal, pimienta y azúcar.',
        'Cocina a fuego medio 15 minutos hasta espesar, moviendo ocasionalmente.',
        'Ajusta sazón y retira las hojas de laurel.',
        'Sirve caliente con tortillas, cebolla morada, cilantro y aguacate.'
      ],
      nutritionInfo: {
        calories: 295,
        protein: 32,
        carbs: 22,
        fat: 10,
        fiber: 8,
        calcium: 95,
        iron: 5.8
      }
    },
    priceDifferencePercent: -37.9,
    healthScore: 91,
    healthBenefits: [
      'Proteína superior al pollo (32g vs 26g) con menos grasa',
      'Rica en capsaicina del chipotle que acelera el metabolismo',
      'Alto contenido de licopeno del tomate cocido',
      'Libre de colesterol y antibióticos',
      'Fibra que mejora la digestión y saciedad',
      'Antioxidantes potentes de chiles y especias'
    ],
    environmentalImpact: {
      co2Reduction: 82,
      waterSaving: 78,
      landSaving: 80
    }
  },
  {
    id: 'machaca-soya',
    category: 'mexican',
    traditional: {
      name: 'Machaca con Huevos',
      estimatedPrice: 78.00,
      servings: 3,
      prepTime: '25 min',
      nutritionInfo: {
        calories: 420,
        protein: 24,
        carbs: 8,
        fat: 32,
        fiber: 2,
        calcium: 180,
        iron: 3.2
      }
    },
    veganVersion: {
      name: 'Machaca de Soya con Revuelto Plant-Based',
      description: 'Machaca tradicional con soya texturizada deshidratada y revuelto de tofu especiado. Desayuno proteico mexicano completamente vegetal.',
      estimatedPrice: 51.70,
      servings: 3,
      prepTime: '20 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Soya texturizada gruesa', amount: 120, unit: 'g', pricePerUnit: 0.06, totalCost: 7.20, source: 'A granel Central de Abastos' },
        { name: 'Tofu firme natural', amount: 200, unit: 'g', pricePerUnit: 0.065, totalCost: 13.00, source: 'Tienda asiática' },
        { name: 'Chile serrano', amount: 2, unit: 'piezas', pricePerUnit: 0.80, totalCost: 1.60, source: 'Central de Abastos' },
        { name: 'Tomate rojo', amount: 2, unit: 'piezas medianas', pricePerUnit: 2.50, totalCost: 5.00, source: 'Central de Abastos' },
        { name: 'Cebolla blanca', amount: 0.5, unit: 'pieza', pricePerUnit: 3.00, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 2, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.50, source: 'Central de Abastos' },
        { name: 'Caldo vegetal concentrado', amount: 250, unit: 'ml', pricePerUnit: 0.015, totalCost: 3.75, source: 'Preparación casera' },
        { name: 'Levadura nutricional', amount: 2, unit: 'cucharadas', pricePerUnit: 1.00, totalCost: 2.00, source: 'Tienda naturista' },
        { name: 'Cúrcuma en polvo', amount: 0.5, unit: 'cucharadita', pricePerUnit: 4.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Comino molido', amount: 0.5, unit: 'cucharadita', pricePerUnit: 3.00, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Aceite vegetal', amount: 2, unit: 'cucharadas', pricePerUnit: 0.80, totalCost: 1.60, source: 'Mercado local' },
        { name: 'Sal marina', amount: 1.5, unit: 'cucharaditas', pricePerUnit: 0.50, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Pimienta negra', amount: 0.5, unit: 'cucharadita', pricePerUnit: 3.00, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Cilantro fresco', amount: 2, unit: 'cucharadas', pricePerUnit: 1.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Tortillas de harina', amount: 6, unit: 'piezas', pricePerUnit: 1.50, totalCost: 9.00, source: 'Tortillería local' },
        { name: 'Salsa verde', amount: 4, unit: 'cucharadas', pricePerUnit: 0.50, totalCost: 2.00, source: 'Preparación casera' }
      ],
      instructions: [
        'Hidrata la soya texturizada con caldo vegetal caliente especiado por 20 minutos.',
        'Desmenuza el tofu con tenedor hasta conseguir textura de huevo revuelto.',
        'Pica fino: cebolla, tomate, chile serrano y ajo.',
        'Escurre bien la soya hidratada y deshébrala más si es necesario.',
        'Sofríe cebolla y ajo en aceite hasta cristalinos.',
        'Agrega chile serrano, cocina 1 minuto hasta aromatizar.',
        'Incorpora la soya deshebrada, sofríe 5 minutos hasta dorar.',
        'Agrega tomate picado, cocina hasta suavizar y reducir.',
        'En otra sección de la sartén, sofríe tofu desmenuzado con cúrcuma.',
        'Sazona el tofu con levadura nutricional, comino, sal y pimienta.',
        'Mezcla la machaca de soya con el revuelto de tofu.',
        'Cocina junto 3 minutos más, ajusta sazón y espolvorea cilantro.',
        'Sirve caliente con tortillas de harina y salsa verde.'
      ],
      nutritionInfo: {
        calories: 355,
        protein: 30,
        carbs: 28,
        fat: 16,
        fiber: 9,
        calcium: 220,
        iron: 6.8
      }
    },
    priceDifferencePercent: -33.7,
    healthScore: 88,
    healthBenefits: [
      'Proteína superior a huevos con carne (30g vs 24g)',
      'Rico en calcio del tofu para huesos fuertes',
      'Alto contenido de hierro biodisponible',
      'Libre de colesterol y grasas saturadas',
      'Vitamina B12 de la levadura nutricional',
      'Antioxidantes de la cúrcuma y especias'
    ],
    environmentalImpact: {
      co2Reduction: 76,
      waterSaving: 85,
      landSaving: 78
    }
  },
  {
    id: 'flautas-soya',
    category: 'mexican',
    traditional: {
      name: 'Flautas de Pollo (4 piezas)',
      estimatedPrice: 72.00,
      servings: 2,
      prepTime: '30 min',
      nutritionInfo: {
        calories: 485,
        protein: 22,
        carbs: 32,
        fat: 28,
        fiber: 3,
        calcium: 120,
        iron: 2.5
      }
    },
    veganVersion: {
      name: 'Flautas de Soya Texturizada Doradas',
      description: 'Flautas crujientes rellenas de soya texturizada sazonada con especias mexicanas. Servidas con guacamole, crema vegetal y salsa verde.',
      estimatedPrice: 48.90,
      servings: 2,
      prepTime: '25 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Tortillas de maíz flexibles', amount: 8, unit: 'piezas', pricePerUnit: 1.00, totalCost: 8.00, source: 'Tortillería local' },
        { name: 'Soya texturizada fina', amount: 100, unit: 'g', pricePerUnit: 0.06, totalCost: 6.00, source: 'A granel Central de Abastos' },
        { name: 'Cebolla blanca', amount: 0.5, unit: 'pieza', pricePerUnit: 3.00, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 2, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.50, source: 'Central de Abastos' },
        { name: 'Caldo vegetal', amount: 200, unit: 'ml', pricePerUnit: 0.015, totalCost: 3.00, source: 'Preparación casera' },
        { name: 'Comino molido', amount: 1, unit: 'cucharadita', pricePerUnit: 3.00, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Pimentón dulce', amount: 1, unit: 'cucharadita', pricePerUnit: 2.50, totalCost: 2.50, source: 'Central de Abastos' },
        { name: 'Orégano seco', amount: 0.5, unit: 'cucharadita', pricePerUnit: 1.50, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Aceite vegetal para freír', amount: 300, unit: 'ml', pricePerUnit: 0.035, totalCost: 10.50, source: 'Mercado local' },
        { name: 'Aguacate maduro', amount: 1, unit: 'pieza', pricePerUnit: 6.00, totalCost: 6.00, source: 'Central de Abastos' },
        { name: 'Limón verde', amount: 1, unit: 'pieza', pricePerUnit: 0.50, totalCost: 0.50, source: 'Central de Abastos' },
        { name: 'Lechuga orejona', amount: 4, unit: 'hojas', pricePerUnit: 0.50, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Crema vegetal casera', amount: 4, unit: 'cucharadas', pricePerUnit: 0.60, totalCost: 2.40, source: 'Preparación casera' },
        { name: 'Salsa verde', amount: 50, unit: 'ml', pricePerUnit: 0.02, totalCost: 1.00, source: 'Preparación casera' },
        { name: 'Sal y pimienta', amount: 1, unit: 'porción', pricePerUnit: 0.75, totalCost: 0.75, source: 'Despensa' },
        { name: 'Palillos para cerrar', amount: 8, unit: 'piezas', pricePerUnit: 0.05, totalCost: 0.40, source: 'Mercado local' }
      ],
      instructions: [
        'Hidrata la soya texturizada con caldo vegetal caliente por 20 minutos.',
        'Sofríe cebolla y ajo picados fino hasta cristalinos.',
        'Agrega soya escurrida, comino, pimentón, orégano, sal y pimienta.',
        'Sofríe moviendo frecuentemente hasta que se dore, 8 minutos.',
        'Deja enfriar el relleno para facilitar el armado.',
        'Calienta tortillas en comal para suavizar sin dorar.',
        'Coloca 2 cucharadas de relleno en cada tortilla, enrolla firmemente.',
        'Asegura con palillo en la unión para evitar que se abran.',
        'Calienta aceite a 180°C en sartén profundo.',
        'Fríe flautas hasta dorar uniformemente, volteando cuidadosamente.',
        'Escurre sobre papel absorbente y retira palillos.',
        'Prepara guacamole machacando aguacate con limón y sal.',
        'Sirve flautas calientes sobre lechuga con guacamole, crema y salsa.'
      ],
      nutritionInfo: {
        calories: 420,
        protein: 28,
        carbs: 45,
        fat: 18,
        fiber: 12,
        calcium: 95,
        iron: 5.2
      }
    },
    priceDifferencePercent: -32.1,
    healthScore: 85,
    healthBenefits: [
      'Proteína superior al pollo (28g vs 22g) con menos grasa',
      'Rica en fibra de soya y tortillas de maíz',
      'Grasas saludables del aguacate',
      'Libre de colesterol y antibióticos',
      'Hierro de alta biodisponibilidad',
      'Vitaminas del complejo B de la soya'
    ],
    environmentalImpact: {
      co2Reduction: 74,
      waterSaving: 72,
      landSaving: 70
    }
  },
  {
    id: 'crema-acida-tradicional',
    category: 'cremas',
    traditional: {
      name: 'Crema Ácida (200ml)',
      estimatedPrice: 45.00,
      servings: 4,
      prepTime: '0 min',
      nutritionInfo: {
        calories: 320,
        protein: 4,
        carbs: 6,
        fat: 30,
        fiber: 0,
        calcium: 140,
        iron: 0.2
      }
    },
    veganVersion: {
      name: 'Crema Ácida de Anacardos',
      description: 'Crema ácida vegetal fermentada con probióticos naturales, más cremosa y nutritiva que la tradicional.',
      estimatedPrice: 32.50,
      servings: 4,
      prepTime: '15 min + fermentado',
      difficulty: 'easy',
      ingredients: [
        { name: 'Anacardos crudos', amount: 150, unit: 'g', pricePerUnit: 0.12, totalCost: 18.00, source: 'Tienda naturista' },
        { name: 'Jugo de limón fresco', amount: 2, unit: 'cucharadas', pricePerUnit: 1.50, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Vinagre de manzana orgánico', amount: 1, unit: 'cucharada', pricePerUnit: 2.00, totalCost: 2.00, source: 'Tienda naturista' },
        { name: 'Probióticos en cápsula', amount: 1, unit: 'pieza', pricePerUnit: 4.50, totalCost: 4.50, source: 'Farmacia naturista' },
        { name: 'Sal marina fina', amount: 0.5, unit: 'cucharadita', pricePerUnit: 0.10, totalCost: 0.05, source: 'Cualquier tienda' },
        { name: 'Agua filtrada', amount: 100, unit: 'ml', pricePerUnit: 0.002, totalCost: 0.20, source: 'Casa' },
        { name: 'Agar en polvo', amount: 1, unit: 'g', pricePerUnit: 0.75, totalCost: 0.75, source: 'Tienda asiática' }
      ],
      instructions: [
        'Remoja los anacardos en agua caliente por 2 horas hasta que estén suaves.',
        'Escurre y enjuaga los anacardos remojados.',
        'Licúa anacardos con agua filtrada hasta obtener consistencia cremosa.',
        'Agrega jugo de limón, vinagre de manzana y sal marina.',
        'Abre la cápsula de probióticos y mezcla el contenido.',
        'Bate hasta integrar completamente todos los ingredientes.',
        'Transfiere a frasco de vidrio esterilizado.',
        'Deja fermentar a temperatura ambiente por 12-24 horas.',
        'Refrigera una vez que alcance acidez deseada.',
        'Disuelve agar en 2 cucharadas de agua caliente y mezcla para espesar si es necesario.'
      ],
      nutritionInfo: {
        calories: 195,
        protein: 7,
        carbs: 8,
        fat: 16,
        fiber: 2,
        calcium: 28,
        iron: 2.1
      }
    },
    priceDifferencePercent: -27.8,
    healthScore: 88,
    healthBenefits: [
      'Probióticos naturales que mejoran la flora intestinal',
      '75% menos grasas saturadas que la crema tradicional',
      'Rico en magnesio y cobre de los anacardos',
      'Libre de colesterol y hormonas lácteas',
      'Proteína vegetal de alta calidad',
      'Enzimas digestivas naturales del fermentado'
    ],
    environmentalImpact: {
      co2Reduction: 82,
      waterSaving: 89,
      landSaving: 76
    }
  },
  {
    id: 'mayonesa-tradicional',
    category: 'salsas',
    traditional: {
      name: 'Mayonesa Comercial (250ml)',
      estimatedPrice: 38.00,
      servings: 8,
      prepTime: '0 min',
      nutritionInfo: {
        calories: 680,
        protein: 2,
        carbs: 4,
        fat: 72,
        fiber: 0,
        calcium: 12,
        iron: 0.3
      }
    },
    veganVersion: {
      name: 'Mayonesa de Aquafaba Artesanal',
      description: 'Mayonesa vegetal cremosa hecha con agua de garbanzos, más ligera y con mejor perfil nutricional.',
      estimatedPrice: 24.50,
      servings: 8,
      prepTime: '10 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Aquafaba (agua de garbanzo)', amount: 60, unit: 'ml', pricePerUnit: 0.02, totalCost: 1.20, source: 'Conserva casera' },
        { name: 'Aceite de girasol prensado en frío', amount: 180, unit: 'ml', pricePerUnit: 0.08, totalCost: 14.40, source: 'Tienda naturista' },
        { name: 'Mostaza dijon', amount: 1, unit: 'cucharadita', pricePerUnit: 1.50, totalCost: 1.50, source: 'Supermercado' },
        { name: 'Vinagre de sidra de manzana', amount: 1, unit: 'cucharada', pricePerUnit: 2.00, totalCost: 2.00, source: 'Tienda naturista' },
        { name: 'Jugo de limón recién exprimido', amount: 1, unit: 'cucharada', pricePerUnit: 1.50, totalCost: 1.50, source: 'Central de Abastos' },
        { name: 'Sal marina fina', amount: 0.5, unit: 'cucharadita', pricePerUnit: 0.10, totalCost: 0.05, source: 'Cualquier tienda' },
        { name: 'Azúcar de coco', amount: 0.5, unit: 'cucharadita', pricePerUnit: 0.50, totalCost: 0.25, source: 'Tienda naturista' },
        { name: 'Goma xantana', amount: 0.2, unit: 'g', pricePerUnit: 1.50, totalCost: 0.30, source: 'Tienda especializada' }
      ],
      instructions: [
        'Asegúrate de que todos los ingredientes estén a temperatura ambiente.',
        'En un recipiente alto, combina aquafaba, mostaza, vinagre y jugo de limón.',
        'Agrega sal marina y azúcar de coco.',
        'Con batidora de inmersión, comienza a batir lentamente.',
        'Sin dejar de batir, agrega aceite en hilo muy fino y constante.',
        'Continúa batiendo hasta que espese y tome consistencia de mayonesa.',
        'Si queda muy líquida, espolvorea goma xantana y bate nuevamente.',
        'Ajusta sazón con sal y limón al gusto.',
        'Transfiere a frasco hermético y refrigera.',
        'Consumir en máximo 5 días refrigerada.'
      ],
      nutritionInfo: {
        calories: 485,
        protein: 1.5,
        carbs: 3,
        fat: 52,
        fiber: 0.5,
        calcium: 8,
        iron: 0.2
      }
    },
    priceDifferencePercent: -35.5,
    healthScore: 79,
    healthBenefits: [
      'Libre de colesterol y grasas trans',
      '28% menos calorías que la mayonesa tradicional',
      'Sin conservadores artificiales ni aditivos',
      'Proteínas vegetales del aquafaba',
      'Grasas más saludables del aceite prensado en frío',
      'Libre de huevo y productos animales'
    ],
    environmentalImpact: {
      co2Reduction: 68,
      waterSaving: 75,
      landSaving: 62
    }
  },
  {
    id: 'crema-para-batir',
    category: 'cremas',
    traditional: {
      name: 'Crema para Batir (200ml)',
      estimatedPrice: 52.00,
      servings: 4,
      prepTime: '0 min',
      nutritionInfo: {
        calories: 580,
        protein: 4,
        carbs: 8,
        fat: 58,
        fiber: 0,
        calcium: 120,
        iron: 0.1
      }
    },
    veganVersion: {
      name: 'Crema Batida de Coco Premium',
      description: 'Crema batida vegetal espumosa y deliciosa, perfecta para postres y bebidas calientes.',
      estimatedPrice: 41.00,
      servings: 4,
      prepTime: '20 min + refrigerado',
      difficulty: 'easy',
      ingredients: [
        { name: 'Leche de coco espesa (lata)', amount: 400, unit: 'ml', pricePerUnit: 0.065, totalCost: 26.00, source: 'Supermercado asiático' },
        { name: 'Azúcar glass orgánica', amount: 30, unit: 'g', pricePerUnit: 0.12, totalCost: 3.60, source: 'Tienda naturista' },
        { name: 'Extracto puro de vainilla', amount: 1, unit: 'cucharadita', pricePerUnit: 8.00, totalCost: 8.00, source: 'Tienda gourmet' },
        { name: 'Cremor tártaro', amount: 0.5, unit: 'cucharadita', pricePerUnit: 2.00, totalCost: 1.00, source: 'Tienda repostería' },
        { name: 'Lecitina de girasol', amount: 1, unit: 'cucharadita', pricePerUnit: 1.50, totalCost: 1.50, source: 'Tienda naturista' },
        { name: 'Pizca de sal marina', amount: 0.1, unit: 'g', pricePerUnit: 0.10, totalCost: 0.01, source: 'Cualquier tienda' }
      ],
      instructions: [
        'Refrigera la lata de leche de coco por al menos 4 horas.',
        'Enfría también el bowl y batidores en el congelador por 15 minutos.',
        'Abre la lata y separa cuidadosamente la parte espesa.',
        'Reserva el agua de coco para otro uso.',
        'En el bowl frío, bate la crema espesa de coco.',
        'Agrega azúcar glass gradualmente mientras bates.',
        'Incorpora extracto de vainilla y cremor tártaro.',
        'Espolvorea lecitina de girasol para mayor estabilidad.',
        'Bate hasta formar picos firmes (5-8 minutos).',
        'Usa inmediatamente o refrigera hasta por 2 días.'
      ],
      nutritionInfo: {
        calories: 420,
        protein: 4,
        carbs: 12,
        fat: 42,
        fiber: 2,
        calcium: 18,
        iron: 1.8
      }
    },
    priceDifferencePercent: -21.2,
    healthScore: 81,
    healthBenefits: [
      'Triglicéridos de cadena media del coco que aceleran el metabolismo',
      'Libre de lactosa y caseína',
      '27% menos calorías que la crema láctea',
      'Rico en hierro y manganeso',
      'Sin conservadores ni estabilizantes artificiales',
      'Grasas vegetales más fáciles de digerir'
    ],
    environmentalImpact: {
      co2Reduction: 71,
      waterSaving: 78,
      landSaving: 69
    }
  },
  {
    id: 'queso-crema-philadelphia',
    category: 'cremas',
    traditional: {
      name: 'Queso Crema Philadelphia (200g)',
      estimatedPrice: 85.00,
      servings: 6,
      prepTime: '0 min',
      nutritionInfo: {
        calories: 696,
        protein: 14,
        carbs: 8,
        fat: 68,
        fiber: 0,
        calcium: 196,
        iron: 0.4
      }
    },
    veganVersion: {
      name: 'Queso Crema de Anacardos Fermentado',
      description: 'Queso crema vegetal fermentado con cultivos probióticos, cremoso y untable, perfecto para bagels y postres.',
      estimatedPrice: 58.50,
      servings: 6,
      prepTime: '25 min + fermentado',
      difficulty: 'medium',
      ingredients: [
        { name: 'Anacardos crudos premium', amount: 200, unit: 'g', pricePerUnit: 0.14, totalCost: 28.00, source: 'Tienda naturista' },
        { name: 'Rejuvelac (agua fermentada)', amount: 60, unit: 'ml', pricePerUnit: 0.15, totalCost: 9.00, source: 'Preparación casera' },
        { name: 'Aceite de coco refinado', amount: 2, unit: 'cucharadas', pricePerUnit: 0.85, totalCost: 1.70, source: 'Tienda naturista' },
        { name: 'Jugo de limón orgánico', amount: 3, unit: 'cucharadas', pricePerUnit: 1.50, totalCost: 4.50, source: 'Central de Abastos' },
        { name: 'Levadura nutricional', amount: 2, unit: 'cucharadas', pricePerUnit: 1.20, totalCost: 2.40, source: 'Tienda naturista' },
        { name: 'Sal marina del Himalaya', amount: 1, unit: 'cucharadita', pricePerUnit: 0.15, totalCost: 0.15, source: 'Tienda gourmet' },
        { name: 'Agar en polvo', amount: 1.5, unit: 'g', pricePerUnit: 0.75, totalCost: 1.12, source: 'Tienda asiática' },
        { name: 'Probióticos veganos', amount: 1, unit: 'cápsula', pricePerUnit: 5.50, totalCost: 5.50, source: 'Farmacia naturista' },
        { name: 'Goma xantana', amount: 0.5, unit: 'g', pricePerUnit: 1.50, totalCost: 0.75, source: 'Tienda especializada' }
      ],
      instructions: [
        'Remoja anacardos en agua caliente por 3 horas hasta suavizar.',
        'Prepara rejuvelac fermentando quinoa en agua por 3 días.',
        'Escurre anacardos y enjuaga muy bien.',
        'Licúa anacardos con rejuvelac hasta consistencia sedosa.',
        'Agrega aceite de coco, jugo de limón y levadura nutricional.',
        'Incorpora sal marina y probióticos de la cápsula abierta.',
        'Bate hasta integrar completamente.',
        'Disuelve agar en 3 cucharadas de agua caliente.',
        'Mezcla agar disuelto con la preparación.',
        'Transfiere a molde forrado con papel encerado.',
        'Refrigera 4 horas hasta que tome consistencia firme.',
        'Deja fermentar a temperatura ambiente 12-24 horas.',
        'Refrigera nuevamente antes de consumir.'
      ],
      nutritionInfo: {
        calories: 485,
        protein: 16,
        carbs: 18,
        fat: 42,
        fiber: 4,
        calcium: 45,
        iron: 3.2
      }
    },
    priceDifferencePercent: -31.2,
    healthScore: 85,
    healthBenefits: [
      'Probióticos vivos que mejoran la digestión',
      '30% menos grasas saturadas que el queso lácteo',
      'Vitaminas del complejo B de la levadura nutricional',
      'Proteína vegetal completa de los anacardos',
      'Rico en magnesio, zinc y cobre',
      'Libre de colesterol y hormonas lácteas'
    ],
    environmentalImpact: {
      co2Reduction: 79,
      waterSaving: 84,
      landSaving: 73
    }
  },
  // PASTAS
  {
    id: 'espagueti-bolonesa',
    category: 'pastas',
    traditional: {
      name: 'Espagueti a la Boloñesa (porción)',
      estimatedPrice: 85.00,
      servings: 2,
      prepTime: '45 min',
      nutritionInfo: {
        calories: 650,
        protein: 28,
        carbs: 75,
        fat: 22,
        fiber: 4,
        calcium: 85,
        iron: 3.2
      }
    },
    veganVersion: {
      name: 'Espagueti con Boloñesa de Lentejas',
      description: 'Boloñesa rica en proteína vegetal con lentejas rojas, champiñones y verduras, más nutritiva que la versión tradicional.',
      estimatedPrice: 52.00,
      servings: 2,
      prepTime: '40 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Espagueti integral', amount: 200, unit: 'g', pricePerUnit: 0.045, totalCost: 9.00, source: 'Supermercado' },
        { name: 'Lentejas rojas', amount: 100, unit: 'g', pricePerUnit: 0.055, totalCost: 5.50, source: 'Central de Abastos' },
        { name: 'Champiñones frescos', amount: 150, unit: 'g', pricePerUnit: 0.08, totalCost: 12.00, source: 'Central de Abastos' },
        { name: 'Tomates roma', amount: 400, unit: 'g', pricePerUnit: 0.025, totalCost: 10.00, source: 'Central de Abastos' },
        { name: 'Cebolla morada', amount: 1, unit: 'pieza', pricePerUnit: 4.00, totalCost: 4.00, source: 'Central de Abastos' },
        { name: 'Zanahoria', amount: 1, unit: 'pieza', pricePerUnit: 2.50, totalCost: 2.50, source: 'Central de Abastos' },
        { name: 'Apio', amount: 2, unit: 'tallos', pricePerUnit: 1.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 3, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Vino tinto para cocinar', amount: 50, unit: 'ml', pricePerUnit: 0.15, totalCost: 7.50, source: 'Licorería' },
        { name: 'Aceite de oliva extra virgen', amount: 3, unit: 'cucharadas', pricePerUnit: 0.35, totalCost: 1.05, source: 'Supermercado' }
      ],
      instructions: [
        'Remoja las lentejas rojas en agua caliente por 15 minutos.',
        'Pica finamente cebolla, zanahoria, apio y ajo (sofrito).',
        'Lamina los champiñones en trozos pequeños.',
        'Calienta aceite de oliva en sartén grande.',
        'Sofríe las verduras picadas hasta que estén translúcidas.',
        'Agrega champiñones y cocina hasta dorar.',
        'Incorpora las lentejas escurridas y tomates picados.',
        'Vierte el vino tinto y deja evaporar el alcohol.',
        'Cocina a fuego lento 25 minutos hasta espesar.',
        'Sirve sobre espagueti al dente con albahaca fresca.'
      ],
      nutritionInfo: {
        calories: 520,
        protein: 24,
        carbs: 78,
        fat: 12,
        fiber: 14,
        calcium: 65,
        iron: 5.8
      }
    },
    priceDifferencePercent: -38.8,
    healthScore: 89,
    healthBenefits: [
      'Proteína vegetal completa de lentejas (24g)',
      '3x más fibra que la versión tradicional',
      'Rico en hierro de absorción mejorada',
      'Libre de grasas saturadas y colesterol',
      'Antioxidantes de tomates y champiñones',
      'Carbohidratos complejos del pasta integral'
    ],
    environmentalImpact: {
      co2Reduction: 73,
      waterSaving: 81,
      landSaving: 69
    }
  },
  {
    id: 'lasana-carne',
    category: 'pastas',
    traditional: {
      name: 'Lasaña de Carne (porción)',
      estimatedPrice: 120.00,
      servings: 4,
      prepTime: '90 min',
      nutritionInfo: {
        calories: 580,
        protein: 32,
        carbs: 45,
        fat: 28,
        fiber: 3,
        calcium: 350,
        iron: 3.5
      }
    },
    veganVersion: {
      name: 'Lasaña de Verduras con Ricotta de Tofu',
      description: 'Lasaña multicapa con verduras asadas, ricotta de tofu casera y bechamel de anacardos, cremosa y nutritiva.',
      estimatedPrice: 78.00,
      servings: 4,
      prepTime: '85 min',
      difficulty: 'medium',
      ingredients: [
        { name: 'Pasta para lasaña integral', amount: 200, unit: 'g', pricePerUnit: 0.065, totalCost: 13.00, source: 'Supermercado' },
        { name: 'Tofu firme', amount: 400, unit: 'g', pricePerUnit: 0.045, totalCost: 18.00, source: 'Tienda asiática' },
        { name: 'Berenjenas', amount: 2, unit: 'piezas', pricePerUnit: 8.00, totalCost: 16.00, source: 'Central de Abastos' },
        { name: 'Calabacines', amount: 2, unit: 'piezas', pricePerUnit: 6.00, totalCost: 12.00, source: 'Central de Abastos' },
        { name: 'Pimientos rojos', amount: 2, unit: 'piezas', pricePerUnit: 5.50, totalCost: 11.00, source: 'Central de Abastos' },
        { name: 'Espinacas frescas', amount: 200, unit: 'g', pricePerUnit: 0.035, totalCost: 7.00, source: 'Central de Abastos' },
        { name: 'Anacardos para bechamel', amount: 100, unit: 'g', pricePerUnit: 0.12, totalCost: 12.00, source: 'Tienda naturista' },
        { name: 'Levadura nutricional', amount: 3, unit: 'cucharadas', pricePerUnit: 1.20, totalCost: 3.60, source: 'Tienda naturista' },
        { name: 'Salsa de tomate casera', amount: 300, unit: 'ml', pricePerUnit: 0.025, totalCost: 7.50, source: 'Preparación propia' }
      ],
      instructions: [
        'Precalienta horno a 190°C.',
        'Corta berenjenas, calabacines y pimientos en rodajas.',
        'Asa las verduras con un poco de aceite hasta dorar.',
        'Desmorona el tofu y mezcla con levadura nutricional.',
        'Saltea espinacas hasta que se reduzcan.',
        'Prepara bechamel licuando anacardos remojados con agua.',
        'Cocina pasta hasta al dente según instrucciones.',
        'Arma capas: pasta, verduras, ricotta de tofu, bechamel.',
        'Repite capas y termina con bechamel.',
        'Hornea 45 minutos hasta dorar la superficie.'
      ],
      nutritionInfo: {
        calories: 445,
        protein: 22,
        carbs: 52,
        fat: 18,
        fiber: 12,
        calcium: 285,
        iron: 4.8
      }
    },
    priceDifferencePercent: -35.0,
    healthScore: 91,
    healthBenefits: [
      'Proteína vegetal completa del tofu',
      '4x más fibra por las verduras',
      'Rico en calcio de espinacas y tofu',
      'Antioxidantes de verduras coloridas',
      'Libre de colesterol y grasas saturadas',
      'Vitaminas A, C y K de las verduras'
    ],
    environmentalImpact: {
      co2Reduction: 76,
      waterSaving: 85,
      landSaving: 72
    }
  },
  {
    id: 'fettuccine-alfredo',
    category: 'pastas',
    traditional: {
      name: 'Fettuccine Alfredo (porción)',
      estimatedPrice: 95.00,
      servings: 2,
      prepTime: '25 min',
      nutritionInfo: {
        calories: 720,
        protein: 18,
        carbs: 65,
        fat: 42,
        fiber: 3,
        calcium: 285,
        iron: 2.1
      }
    },
    veganVersion: {
      name: 'Fettuccine con Salsa Alfredo de Anacardos',
      description: 'Cremosa salsa alfredo vegetal con anacardos y levadura nutricional, más ligera y nutritiva que la original.',
      estimatedPrice: 68.50,
      servings: 2,
      prepTime: '20 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Fettuccine integral', amount: 200, unit: 'g', pricePerUnit: 0.055, totalCost: 11.00, source: 'Supermercado' },
        { name: 'Anacardos crudos', amount: 120, unit: 'g', pricePerUnit: 0.12, totalCost: 14.40, source: 'Tienda naturista' },
        { name: 'Levadura nutricional', amount: 4, unit: 'cucharadas', pricePerUnit: 1.20, totalCost: 4.80, source: 'Tienda naturista' },
        { name: 'Ajo fresco', amount: 2, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.50, source: 'Central de Abastos' },
        { name: 'Jugo de limón', amount: 2, unit: 'cucharadas', pricePerUnit: 1.50, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Aceite de oliva', amount: 2, unit: 'cucharadas', pricePerUnit: 0.35, totalCost: 0.70, source: 'Supermercado' },
        { name: 'Sal marina', amount: 1, unit: 'cucharadita', pricePerUnit: 0.10, totalCost: 0.10, source: 'Cualquier tienda' },
        { name: 'Pimienta negra', amount: 0.5, unit: 'cucharadita', pricePerUnit: 0.20, totalCost: 0.10, source: 'Central de Abastos' },
        { name: 'Perejil fresco', amount: 2, unit: 'cucharadas', pricePerUnit: 1.00, totalCost: 2.00, source: 'Central de Abastos' }
      ],
      instructions: [
        'Remoja anacardos en agua caliente por 30 minutos.',
        'Cocina fettuccine según instrucciones del paquete.',
        'Escurre anacardos y licúa con 1 taza de agua.',
        'Agrega levadura nutricional, ajo, limón y sal.',
        'Licúa hasta obtener consistencia cremosa.',
        'Calienta aceite de oliva en sartén grande.',
        'Vierte la salsa de anacardos y cocina 3 minutos.',
        'Agrega pasta escurrida y mezcla bien.',
        'Sazona con sal y pimienta al gusto.',
        'Sirve con perejil fresco picado.'
      ],
      nutritionInfo: {
        calories: 520,
        protein: 18,
        carbs: 68,
        fat: 22,
        fiber: 8,
        calcium: 85,
        iron: 3.8
      }
    },
    priceDifferencePercent: -27.9,
    healthScore: 84,
    healthBenefits: [
      'Proteína vegetal de alta calidad',
      '28% menos calorías que la versión tradicional',
      'Rico en vitaminas del complejo B',
      'Grasas saludables de anacardos',
      'Libre de lactosa y colesterol',
      'Mayor contenido de fibra'
    ],
    environmentalImpact: {
      co2Reduction: 68,
      waterSaving: 75,
      landSaving: 63
    }
  },
  // PLATOS FUERTES
  {
    id: 'milanesa-pollo',
    category: 'plato-fuerte',
    traditional: {
      name: 'Milanesa de Pollo (pieza)',
      estimatedPrice: 75.00,
      servings: 1,
      prepTime: '30 min',
      nutritionInfo: {
        calories: 485,
        protein: 32,
        carbs: 25,
        fat: 28,
        fiber: 2,
        calcium: 45,
        iron: 2.8
      }
    },
    veganVersion: {
      name: 'Milanesa de Berenjena Empanizada',
      description: 'Berenjena gruesa empanizada con pan integral, crujiente por fuera y cremosa por dentro, rica en antioxidantes.',
      estimatedPrice: 42.00,
      servings: 1,
      prepTime: '25 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Berenjena grande', amount: 1, unit: 'pieza', pricePerUnit: 12.00, totalCost: 12.00, source: 'Central de Abastos' },
        { name: 'Pan integral molido', amount: 80, unit: 'g', pricePerUnit: 0.15, totalCost: 12.00, source: 'Panadería' },
        { name: 'Harina integral', amount: 40, unit: 'g', pricePerUnit: 0.025, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Leche vegetal', amount: 100, unit: 'ml', pricePerUnit: 0.045, totalCost: 4.50, source: 'Supermercado' },
        { name: 'Huevo de linaza', amount: 1, unit: 'equivalente', pricePerUnit: 2.50, totalCost: 2.50, source: 'Preparación casera' },
        { name: 'Aceite para freír', amount: 100, unit: 'ml', pricePerUnit: 0.08, totalCost: 8.00, source: 'Supermercado' },
        { name: 'Sal y especias', amount: 1, unit: 'cucharadita', pricePerUnit: 0.20, totalCost: 0.20, source: 'Despensa' }
      ],
      instructions: [
        'Corta berenjena en rodajas de 1.5 cm de grosor.',
        'Sala las berenjenas y deja reposar 20 minutos.',
        'Enjuaga y seca las berenjenas con papel absorbente.',
        'Prepara estaciones: harina, leche vegetal, pan molido.',
        'Pasa cada rodaja por harina, luego leche, luego pan.',
        'Calienta aceite a temperatura media-alta.',
        'Fríe las milanesas hasta dorar por ambos lados.',
        'Escurre en papel absorbente.',
        'Sirve caliente con limón y ensalada.',
        'Opcional: hornear en lugar de freír para menos grasa.'
      ],
      nutritionInfo: {
        calories: 320,
        protein: 12,
        carbs: 35,
        fat: 15,
        fiber: 8,
        calcium: 85,
        iron: 2.2
      }
    },
    priceDifferencePercent: -44.0,
    healthScore: 82,
    healthBenefits: [
      'Rico en antioxidantes y fibra de berenjena',
      '34% menos calorías que milanesa de pollo',
      'Libre de colesterol y grasas saturadas',
      'Carbohidratos complejos del empanizado integral',
      'Potasio para salud cardiovascular',
      'Digestión más ligera que la carne'
    ],
    environmentalImpact: {
      co2Reduction: 78,
      waterSaving: 85,
      landSaving: 72
    }
  },
  {
    id: 'chiles-rellenos',
    category: 'plato-fuerte',
    traditional: {
      name: 'Chiles Rellenos de Queso (2 piezas)',
      estimatedPrice: 85.00,
      servings: 2,
      prepTime: '45 min',
      nutritionInfo: {
        calories: 520,
        protein: 18,
        carbs: 32,
        fat: 35,
        fiber: 4,
        calcium: 285,
        iron: 2.5
      }
    },
    veganVersion: {
      name: 'Chiles Rellenos de Quinoa y Verduras',
      description: 'Chiles poblanos rellenos de quinoa, verduras y queso vegetal, horneados en salsa de tomate casera.',
      estimatedPrice: 58.50,
      servings: 2,
      prepTime: '50 min',
      difficulty: 'medium',
      ingredients: [
        { name: 'Chiles poblanos', amount: 4, unit: 'piezas', pricePerUnit: 8.00, totalCost: 32.00, source: 'Central de Abastos' },
        { name: 'Quinoa cocida', amount: 150, unit: 'g', pricePerUnit: 0.08, totalCost: 12.00, source: 'Tienda naturista' },
        { name: 'Queso vegetal rallado', amount: 80, unit: 'g', pricePerUnit: 0.18, totalCost: 14.40, source: 'Tienda naturista' },
        { name: 'Cebolla blanca', amount: 1, unit: 'pieza', pricePerUnit: 3.00, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Jitomates', amount: 3, unit: 'piezas', pricePerUnit: 2.50, totalCost: 7.50, source: 'Central de Abastos' },
        { name: 'Calabaza italiana', amount: 1, unit: 'pieza', pricePerUnit: 6.00, totalCost: 6.00, source: 'Central de Abastos' },
        { name: 'Harina para capeado', amount: 60, unit: 'g', pricePerUnit: 0.025, totalCost: 1.50, source: 'Central de Abastos' }
      ],
      instructions: [
        'Asa los chiles poblanos hasta que la piel se ampolle.',
        'Coloca en bolsa plástica para sudar 15 minutos.',
        'Pela cuidadosamente y haz corte lateral para desvenar.',
        'Saltea cebolla, calabaza picada hasta suavizar.',
        'Mezcla quinoa cocida con verduras y queso vegetal.',
        'Rellena chiles con la mezcla y cierra con palillo.',
        'Prepara capeado con harina y agua con gas.',
        'Capea los chiles y fríe hasta dorar.',
        'Sirve con salsa de tomate casera.',
        'Acompaña con frijoles y arroz integral.'
      ],
      nutritionInfo: {
        calories: 385,
        protein: 16,
        carbs: 48,
        fat: 18,
        fiber: 12,
        calcium: 185,
        iron: 4.2
      }
    },
    priceDifferencePercent: -31.2,
    healthScore: 87,
    healthBenefits: [
      'Proteína completa de la quinoa',
      '3x más fibra que la versión tradicional',
      'Rico en vitamina C de chiles poblanos',
      'Hierro biodisponible de la quinoa',
      'Antioxidantes de verduras coloridas',
      'Digestión más liviana sin lácteos'
    ],
    environmentalImpact: {
      co2Reduction: 71,
      waterSaving: 78,
      landSaving: 65
    }
  },
  // ENSALADAS
  {
    id: 'ensalada-cesar',
    category: 'ensaladas',
    traditional: {
      name: 'Ensalada César con Pollo',
      estimatedPrice: 120.00,
      servings: 2,
      prepTime: '20 min',
      nutritionInfo: {
        calories: 485,
        protein: 32,
        carbs: 18,
        fat: 32,
        fiber: 4,
        calcium: 185,
        iron: 2.8
      }
    },
    veganVersion: {
      name: 'Ensalada César con Tofu Ahumado',
      description: 'Clásica ensalada César con tofu ahumado casero, crutones integrales y aderezo vegano cremoso.',
      estimatedPrice: 78.00,
      servings: 2,
      prepTime: '25 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Lechuga romana', amount: 2, unit: 'cabezas', pricePerUnit: 12.00, totalCost: 24.00, source: 'Central de Abastos' },
        { name: 'Tofu firme', amount: 200, unit: 'g', pricePerUnit: 0.045, totalCost: 9.00, source: 'Tienda asiática' },
        { name: 'Pan integral', amount: 4, unit: 'rebanadas', pricePerUnit: 2.50, totalCost: 10.00, source: 'Panadería' },
        { name: 'Anacardos para aderezo', amount: 80, unit: 'g', pricePerUnit: 0.12, totalCost: 9.60, source: 'Tienda naturista' },
        { name: 'Levadura nutricional', amount: 3, unit: 'cucharadas', pricePerUnit: 1.20, totalCost: 3.60, source: 'Tienda naturista' },
        { name: 'Mostaza dijon', amount: 1, unit: 'cucharada', pricePerUnit: 1.50, totalCost: 1.50, source: 'Supermercado' },
        { name: 'Ajo', amount: 2, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.50, source: 'Central de Abastos' },
        { name: 'Jugo de limón', amount: 3, unit: 'cucharadas', pricePerUnit: 1.50, totalCost: 4.50, source: 'Central de Abastos' },
        { name: 'Salsa de soya', amount: 1, unit: 'cucharada', pricePerUnit: 0.80, totalCost: 0.80, source: 'Supermercado' }
      ],
      instructions: [
        'Marina tofu en cubos con salsa de soya y especias.',
        'Asa tofu hasta dorar y obtener sabor ahumado.',
        'Corta pan integral en cubos y tuesta hasta crujiente.',
        'Licúa anacardos remojados con ajo, mostaza y limón.',
        'Agrega levadura nutricional para sabor a queso.',
        'Lava y corta lechuga romana en trozos grandes.',
        'Mezcla lechuga con aderezo cremoso.',
        'Agrega cubos de tofu ahumado y crutones.',
        'Sirve inmediatamente con pimienta negra.',
        'Opcional: agregar alcaparras para más sabor.'
      ],
      nutritionInfo: {
        calories: 365,
        protein: 18,
        carbs: 28,
        fat: 22,
        fiber: 8,
        calcium: 285,
        iron: 3.8
      }
    },
    priceDifferencePercent: -35.0,
    healthScore: 85,
    healthBenefits: [
      'Proteína vegetal completa del tofu',
      '25% menos calorías que la versión tradicional',
      'Rico en calcio y hierro',
      'Vitaminas del complejo B de levadura nutricional',
      'Fibra de lechuga y pan integral',
      'Libre de colesterol y grasas saturadas'
    ],
    environmentalImpact: {
      co2Reduction: 74,
      waterSaving: 82,
      landSaving: 69
    }
  },
  // POSTRES
  {
    id: 'tiramisu-tradicional',
    category: 'postres',
    traditional: {
      name: 'Tiramisú (porción)',
      estimatedPrice: 95.00,
      servings: 4,
      prepTime: '30 min + reposo',
      nutritionInfo: {
        calories: 520,
        protein: 8,
        carbs: 45,
        fat: 32,
        fiber: 1,
        calcium: 165,
        iron: 1.2
      }
    },
    veganVersion: {
      name: 'Tiramisú Vegano de Anacardos',
      description: 'Tiramisú cremoso con crema de anacardos, café orgánico y galletas veganas, sin perder el sabor auténtico.',
      estimatedPrice: 68.50,
      servings: 4,
      prepTime: '35 min + reposo',
      difficulty: 'medium',
      ingredients: [
        { name: 'Anacardos crudos', amount: 200, unit: 'g', pricePerUnit: 0.12, totalCost: 24.00, source: 'Tienda naturista' },
        { name: 'Galletas veganas tipo savoiardi', amount: 150, unit: 'g', pricePerUnit: 0.18, totalCost: 27.00, source: 'Tienda especializada' },
        { name: 'Café espresso fuerte', amount: 200, unit: 'ml', pricePerUnit: 0.08, totalCost: 16.00, source: 'Cafetería' },
        { name: 'Sirope de agave', amount: 80, unit: 'ml', pricePerUnit: 0.15, totalCost: 12.00, source: 'Tienda naturista' },
        { name: 'Cacao en polvo', amount: 3, unit: 'cucharadas', pricePerUnit: 1.20, totalCost: 3.60, source: 'Supermercado' },
        { name: 'Extracto de vainilla', amount: 1, unit: 'cucharadita', pricePerUnit: 8.00, totalCost: 8.00, source: 'Tienda gourmet' }
      ],
      instructions: [
        'Remoja anacardos en agua caliente por 2 horas.',
        'Prepara café espresso fuerte y deja enfriar.',
        'Escurre anacardos y licúa con sirope de agave.',
        'Agrega extracto de vainilla a la crema.',
        'Bate hasta obtener consistencia de mascarpone.',
        'Sumerge galletas rápidamente en café.',
        'Arma capas: galletas con café, crema de anacardos.',
        'Repite capas hasta terminar ingredientes.',
        'Refrigera mínimo 4 horas para que asiente.',
        'Espolvorea cacao antes de servir.'
      ],
      nutritionInfo: {
        calories: 385,
        protein: 12,
        carbs: 38,
        fat: 22,
        fiber: 4,
        calcium: 45,
        iron: 2.8
      }
    },
    priceDifferencePercent: -27.9,
    healthScore: 78,
    healthBenefits: [
      'Proteína vegetal de anacardos',
      '26% menos calorías que tiramisú tradicional',
      'Rico en magnesio y cobre',
      'Antioxidantes del cacao',
      'Libre de colesterol y lactosa',
      'Energía sostenida del agave'
    ],
    environmentalImpact: {
      co2Reduction: 69,
      waterSaving: 76,
      landSaving: 64
    }
  },
  // SALSAS Y ADEREZOS
  {
    id: 'salsa-ranch',
    category: 'salsas',
    traditional: {
      name: 'Aderezo Ranch (250ml)',
      estimatedPrice: 55.00,
      servings: 8,
      prepTime: '5 min',
      nutritionInfo: {
        calories: 580,
        protein: 2,
        carbs: 8,
        fat: 58,
        fiber: 0,
        calcium: 45,
        iron: 0.2
      }
    },
    veganVersion: {
      name: 'Ranch Vegano de Anacardos',
      description: 'Aderezo ranch cremoso con anacardos, hierbas frescas y yogurt vegetal, perfecto para ensaladas.',
      estimatedPrice: 38.50,
      servings: 8,
      prepTime: '10 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Anacardos crudos', amount: 100, unit: 'g', pricePerUnit: 0.12, totalCost: 12.00, source: 'Tienda naturista' },
        { name: 'Yogurt vegetal natural', amount: 150, unit: 'ml', pricePerUnit: 0.08, totalCost: 12.00, source: 'Supermercado' },
        { name: 'Eneldo fresco', amount: 2, unit: 'cucharadas', pricePerUnit: 1.50, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Cebollín', amount: 2, unit: 'cucharadas', pricePerUnit: 1.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Perejil', amount: 2, unit: 'cucharadas', pricePerUnit: 1.00, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Ajo en polvo', amount: 1, unit: 'cucharadita', pricePerUnit: 0.50, totalCost: 0.50, source: 'Especiero' },
        { name: 'Jugo de limón', amount: 2, unit: 'cucharadas', pricePerUnit: 1.50, totalCost: 3.00, source: 'Central de Abastos' },
        { name: 'Sal marina', amount: 0.5, unit: 'cucharadita', pricePerUnit: 0.10, totalCost: 0.05, source: 'Cualquier tienda' }
      ],
      instructions: [
        'Remoja anacardos en agua caliente 30 minutos.',
        'Escurre y licúa anacardos con poca agua hasta cremoso.',
        'Agrega yogurt vegetal y mezcla suavemente.',
        'Incorpora hierbas frescas picadas finamente.',
        'Agrega ajo en polvo, sal y jugo de limón.',
        'Bate hasta integrar todos los ingredientes.',
        'Ajusta consistencia con agua si es necesario.',
        'Refrigera 30 minutos para que asienten sabores.',
        'Sirve frío con vegetales o ensaladas.',
        'Conservar refrigerado máximo 5 días.'
      ],
      nutritionInfo: {
        calories: 320,
        protein: 8,
        carbs: 12,
        fat: 28,
        fiber: 2,
        calcium: 65,
        iron: 1.8
      }
    },
    priceDifferencePercent: -30.0,
    healthScore: 82,
    healthBenefits: [
      'Probióticos del yogurt vegetal',
      '45% menos calorías que ranch tradicional',
      'Proteína vegetal de anacardos',
      'Antioxidantes de hierbas frescas',
      'Libre de conservadores artificiales',
      'Rico en vitaminas K y C'
    ],
    environmentalImpact: {
      co2Reduction: 65,
      waterSaving: 72,
      landSaving: 58
    }
  },
  // APERITIVOS
  {
    id: 'alitas-buffalo',
    category: 'aperitivos',
    traditional: {
      name: 'Alitas Buffalo (8 piezas)',
      estimatedPrice: 85.00,
      servings: 2,
      prepTime: '35 min',
      nutritionInfo: {
        calories: 520,
        protein: 28,
        carbs: 8,
        fat: 42,
        fiber: 0,
        calcium: 25,
        iron: 1.8
      }
    },
    veganVersion: {
      name: 'Coliflor Buffalo Crujiente',
      description: 'Floretes de coliflor empanizados y bañados en salsa buffalo picante, crujientes y sabrosos.',
      estimatedPrice: 48.00,
      servings: 2,
      prepTime: '30 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Coliflor grande', amount: 1, unit: 'cabeza', pricePerUnit: 18.00, totalCost: 18.00, source: 'Central de Abastos' },
        { name: 'Harina integral', amount: 80, unit: 'g', pricePerUnit: 0.025, totalCost: 2.00, source: 'Central de Abastos' },
        { name: 'Leche vegetal', amount: 120, unit: 'ml', pricePerUnit: 0.045, totalCost: 5.40, source: 'Supermercado' },
        { name: 'Salsa buffalo vegana', amount: 60, unit: 'ml', pricePerUnit: 0.15, totalCost: 9.00, source: 'Tienda especializada' },
        { name: 'Aceite para hornear', amount: 2, unit: 'cucharadas', pricePerUnit: 0.35, totalCost: 0.70, source: 'Supermercado' },
        { name: 'Polvo de ajo', amount: 1, unit: 'cucharadita', pricePerUnit: 0.50, totalCost: 0.50, source: 'Especiero' },
        { name: 'Paprika', amount: 1, unit: 'cucharadita', pricePerUnit: 0.60, totalCost: 0.60, source: 'Especiero' }
      ],
      instructions: [
        'Precalienta horno a 200°C.',
        'Corta coliflor en floretes del tamaño de alitas.',
        'Mezcla harina con especias en un bowl.',
        'Agrega leche vegetal para hacer pasta espesa.',
        'Sumerge floretes en la mezcla para empanizar.',
        'Coloca en charola con papel encerado.',
        'Rocía con aceite y hornea 20 minutos.',
        'Voltea y hornea 10 minutos más hasta dorar.',
        'Baña con salsa buffalo mientras están calientes.',
        'Sirve inmediatamente con aderezo ranch vegano.'
      ],
      nutritionInfo: {
        calories: 285,
        protein: 12,
        carbs: 32,
        fat: 14,
        fiber: 8,
        calcium: 85,
        iron: 2.2
      }
    },
    priceDifferencePercent: -43.5,
    healthScore: 88,
    healthBenefits: [
      'Rico en vitamina C y antioxidantes',
      '45% menos calorías que alitas de pollo',
      'Alto contenido de fibra y folato',
      'Libre de colesterol y grasas saturadas',
      'Compuestos sulfurados anticancerígenos',
      'Horneado en lugar de frito'
    ],
    environmentalImpact: {
      co2Reduction: 82,
      waterSaving: 89,
      landSaving: 76
    }
  },
  // BEBIDAS
  {
    id: 'licuado-platano',
    category: 'bebidas',
    traditional: {
      name: 'Licuado de Plátano con Leche (vaso grande)',
      estimatedPrice: 35.00,
      servings: 1,
      prepTime: '5 min',
      nutritionInfo: {
        calories: 320,
        protein: 12,
        carbs: 48,
        fat: 8,
        fiber: 3,
        calcium: 285,
        iron: 0.8
      }
    },
    veganVersion: {
      name: 'Licuado de Plátano con Leche de Avena',
      description: 'Licuado cremoso con leche de avena casera, endulzado naturalmente y enriquecido con semillas.',
      estimatedPrice: 24.50,
      servings: 1,
      prepTime: '7 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Plátanos maduros', amount: 2, unit: 'piezas', pricePerUnit: 3.50, totalCost: 7.00, source: 'Central de Abastos' },
        { name: 'Leche de avena casera', amount: 250, unit: 'ml', pricePerUnit: 0.025, totalCost: 6.25, source: 'Preparación propia' },
        { name: 'Semillas de chía', amount: 1, unit: 'cucharada', pricePerUnit: 2.00, totalCost: 2.00, source: 'Tienda naturista' },
        { name: 'Extracto de vainilla', amount: 0.5, unit: 'cucharadita', pricePerUnit: 8.00, totalCost: 4.00, source: 'Tienda gourmet' },
        { name: 'Canela en polvo', amount: 0.5, unit: 'cucharadita', pricePerUnit: 1.00, totalCost: 0.50, source: 'Especiero' },
        { name: 'Hielo', amount: 100, unit: 'g', pricePerUnit: 0.02, totalCost: 2.00, source: 'Casa' }
      ],
      instructions: [
        'Pela plátanos y córtalos en rodajas.',
        'Agrega todos los ingredientes a la licuadora.',
        'Licúa a velocidad alta por 60 segundos.',
        'Verifica consistencia y ajusta con más leche si necesario.',
        'Licúa 30 segundos más para incorporar chía.',
        'Prueba y ajusta dulzor si es necesario.',
        'Sirve inmediatamente en vaso frío.',
        'Decora con rodaja de plátano y canela.',
        'Opcional: agregar granola encima.',
        'Beber inmediatamente para mejor textura.'
      ],
      nutritionInfo: {
        calories: 285,
        protein: 8,
        carbs: 52,
        fat: 6,
        fiber: 8,
        calcium: 185,
        iron: 2.2
      }
    },
    priceDifferencePercent: -30.0,
    healthScore: 89,
    healthBenefits: [
      'Rico en potasio para función muscular',
      'Omega-3 de semillas de chía',
      'Fibra soluble de avena y plátano',
      'Libre de lactosa y más digestible',
      'Antioxidantes de canela',
      'Energía sostenida sin azúcar refinada'
    ],
    environmentalImpact: {
      co2Reduction: 58,
      waterSaving: 65,
      landSaving: 52
    }
  }
];
