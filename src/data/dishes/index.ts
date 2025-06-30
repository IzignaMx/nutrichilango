
import { DishComparison } from './types';

export const dishesData: DishComparison[] = [
  {
    id: 'chilaquiles',
    category: 'mexican',
    traditional: {
      name: 'Chilaquiles con Pollo',
      estimatedPrice: 85.50,
      servings: 4,
      prepTime: '30 min',
      nutritionInfo: {
        calories: 420,
        protein: 28,
        carbs: 35,
        fat: 22,
        fiber: 4,
        calcium: 180,
        iron: 2.5
      }
    },
    veganVersion: {
      name: 'Chilaquiles Plant-Based',
      description: 'Deliciosos chilaquiles con proteína casera de soya texturizada, aguacate y queso vegano casero. Mantiene el sabor tradicional sin ingredientes de origen animal.',
      estimatedPrice: 52.80,
      servings: 4,
      prepTime: '25 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Tortillas de maíz (del día anterior)', amount: 8, unit: 'piezas', pricePerUnit: 1.00, totalCost: 8.00, source: 'Tortillería local' },
        { name: 'Tomates guaje', amount: 4, unit: 'piezas', pricePerUnit: 2.50, totalCost: 10.00, source: 'Central de Abastos' },
        { name: 'Chiles guajillo secos', amount: 3, unit: 'piezas', pricePerUnit: 1.50, totalCost: 4.50, source: 'Central de Abastos' },
        { name: 'Cebolla blanca', amount: 0.25, unit: 'pieza', pricePerUnit: 3.00, totalCost: 0.75, source: 'Central de Abastos' },
        { name: 'Ajo', amount: 2, unit: 'dientes', pricePerUnit: 0.25, totalCost: 0.50, source: 'Central de Abastos' },
        { name: 'Aceite vegetal', amount: 2, unit: 'cucharadas', pricePerUnit: 0.80, totalCost: 1.60, source: 'Mercado local' },
        { name: 'Soya texturizada', amount: 50, unit: 'g', pricePerUnit: 0.06, totalCost: 3.00, source: 'A granel Central de Abastos' },
        { name: 'Queso vegano casero (anacardos)', amount: 80, unit: 'g', pricePerUnit: 0.08, totalCost: 6.40, source: 'Preparación casera' },
        { name: 'Crema de cashew casera', amount: 3, unit: 'cucharadas', pricePerUnit: 0.60, totalCost: 1.80, source: 'Preparación casera' },
        { name: 'Aguacate', amount: 0.5, unit: 'pieza', pricePerUnit: 6.50, totalCost: 3.25, source: 'Central de Abastos' },
        { name: 'Cilantro', amount: 0.5, unit: 'manojo', pricePerUnit: 2.00, totalCost: 1.00, source: 'Central de Abastos' },
        { name: 'Frijoles refritos caseros', amount: 0.5, unit: 'taza', pricePerUnit: 2.40, totalCost: 1.20, source: 'Preparación casera' },
        { name: 'Sal y especias', amount: 1, unit: 'pizca', pricePerUnit: 0.80, totalCost: 0.80, source: 'Despensa casera' }
      ],
      instructions: [
        'Corta las tortillas del día anterior en triángulos y fríelas en poco aceite hasta dorar.',
        'Hidrata la soya texturizada con caldo vegetal casero (cebolla, ajo, sal) por 15 minutos.',
        'Asa los tomates, chiles, cebolla y ajo en comal seco hasta aromatizar.',
        'Licúa los ingredientes asados con poca agua hasta obtener salsa espesa.',
        'Sofríe la soya hidratada con especias hasta dorar ligeramente.',
        'Cuela la salsa y cocínala 8 minutos hasta espesar.',
        'Mezcla las tortillas fritas con la salsa caliente suavemente.',
        'Sirve de inmediato con soya texturizada, queso vegano casero, crema de cashew.',
        'Decora con aguacate en rebanadas, cilantro fresco y acompaña con frijoles.'
      ],
      nutritionInfo: {
        calories: 365,
        protein: 16,
        carbs: 38,
        fat: 16,
        fiber: 9,
        calcium: 95,
        iron: 4.2
      }
    },
    priceDifferencePercent: -38.2,
    healthScore: 88,
    healthBenefits: [
      'Libre de colesterol y grasas saturadas de origen animal',
      'Alto contenido de fibra que mejora la digestión y saciedad',
      'Rica en antioxidantes de los chiles y tomates frescos',
      'Proteína vegetal completa de la soya texturizada',
      'Menor contenido calórico manteniendo nutrientes esenciales',
      'Grasas saludables del aguacate y anacardos'
    ],
    environmentalImpact: {
      co2Reduction: 65,
      waterSaving: 50,
      landSaving: 60
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
  }
];
