
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
  }
];
