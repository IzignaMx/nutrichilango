
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
      description: 'Deliciosos chilaquiles con proteína vegetal, aguacate y queso vegano. Mantiene el sabor tradicional sin ingredientes de origen animal.',
      estimatedPrice: 72.30,
      servings: 4,
      prepTime: '25 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Tortillas de maíz', amount: 8, unit: 'piezas', pricePerUnit: 1.50, totalCost: 12.00, source: 'Tortillería local' },
        { name: 'Tomates', amount: 3, unit: 'piezas', pricePerUnit: 3.50, totalCost: 10.50, source: 'Mercado de Jamaica' },
        { name: 'Chiles guajillo', amount: 4, unit: 'piezas', pricePerUnit: 2.00, totalCost: 8.00, source: 'Central de Abastos' },
        { name: 'Cebolla blanca', amount: 0.5, unit: 'pieza', pricePerUnit: 4.00, totalCost: 2.00, source: 'Mercado local' },
        { name: 'Ajo', amount: 2, unit: 'dientes', pricePerUnit: 0.50, totalCost: 1.00, source: 'Mercado local' },
        { name: 'Aceite vegetal', amount: 3, unit: 'cucharadas', pricePerUnit: 1.20, totalCost: 3.60, source: 'Supermercado' },
        { name: 'Queso vegano rallado', amount: 100, unit: 'g', pricePerUnit: 0.18, totalCost: 18.00, source: 'Tienda naturista' },
        { name: 'Crema vegetal', amount: 4, unit: 'cucharadas', pricePerUnit: 1.00, totalCost: 4.00, source: 'Tienda vegana' },
        { name: 'Aguacate', amount: 1, unit: 'pieza', pricePerUnit: 8.00, totalCost: 8.00, source: 'Mercado de Jamaica' },
        { name: 'Cilantro', amount: 1, unit: 'manojo', pricePerUnit: 3.00, totalCost: 3.00, source: 'Mercado local' },
        { name: 'Frijoles refritos', amount: 1, unit: 'taza', pricePerUnit: 2.20, totalCost: 2.20, source: 'Preparación casera' }
      ],
      instructions: [
        'Corta las tortillas en triángulos y fríelas hasta que estén doradas y crujientes.',
        'Para la salsa, asa los tomates, chiles guajillo, cebolla y ajo en un comal.',
        'Licúa los ingredientes asados con un poco de agua y sal al gusto.',
        'Cuela la salsa y cocínala en una sartén con aceite por 10 minutos.',
        'Agrega las tortillas fritas a la salsa y mezcla suavemente.',
        'Sirve inmediatamente y decora con queso vegano, crema vegetal, aguacate rebanado y cilantro.',
        'Acompaña con frijoles refritos como guarnición.'
      ],
      nutritionInfo: {
        calories: 380,
        protein: 18,
        carbs: 42,
        fat: 18,
        fiber: 8,
        calcium: 120,
        iron: 3.2
      }
    },
    priceDifferencePercent: -15.4,
    healthScore: 85,
    healthBenefits: [
      'Libre de colesterol y grasas saturadas de origen animal',
      'Alto contenido de fibra que mejora la digestión',
      'Rica en antioxidantes de los chiles y tomates',
      'Menor contenido calórico manteniendo el sabor',
      'Fuente de grasas saludables del aguacate'
    ],
    environmentalImpact: {
      co2Reduction: 60,
      waterSaving: 45,
      landSaving: 55
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
      name: 'Enchiladas de Proteína Vegetal',
      description: 'Enchiladas rellenas de proteína de soya texturizada con verduras, bañadas en salsa roja tradicional y queso vegano.',
      estimatedPrice: 78.50,
      servings: 4,
      prepTime: '40 min',
      difficulty: 'medium',
      ingredients: [
        { name: 'Tortillas de maíz', amount: 12, unit: 'piezas', pricePerUnit: 1.50, totalCost: 18.00, source: 'Tortillería local' },
        { name: 'Proteína de soya texturizada', amount: 150, unit: 'g', pricePerUnit: 0.08, totalCost: 12.00, source: 'Tienda naturista' },
        { name: 'Tomates guaje', amount: 4, unit: 'piezas', pricePerUnit: 3.00, totalCost: 12.00, source: 'Central de Abastos' },
        { name: 'Chiles ancho', amount: 3, unit: 'piezas', pricePerUnit: 2.50, totalCost: 7.50, source: 'Central de Abastos' },
        { name: 'Cebolla morada', amount: 0.5, unit: 'pieza', pricePerUnit: 5.00, totalCost: 2.50, source: 'Mercado local' },
        { name: 'Zanahoria', amount: 1, unit: 'pieza', pricePerUnit: 3.00, totalCost: 3.00, source: 'Mercado local' },
        { name: 'Calabacita', amount: 1, unit: 'pieza', pricePerUnit: 4.00, totalCost: 4.00, source: 'Mercado local' },
        { name: 'Queso vegano en bloque', amount: 120, unit: 'g', pricePerUnit: 0.20, totalCost: 24.00, source: 'Tienda vegana' },
        { name: 'Crema vegetal', amount: 6, unit: 'cucharadas', pricePerUnit: 1.00, totalCost: 6.00, source: 'Tienda vegana' },
        { name: 'Lechuga romana', amount: 4, unit: 'hojas', pricePerUnit: 0.75, totalCost: 3.00, source: 'Mercado local' }
      ],
      instructions: [
        'Hidrata la proteína de soya con caldo vegetal caliente por 15 minutos.',
        'Sofríe la cebolla, zanahoria y calabacita picadas hasta que estén tiernas.',
        'Agrega la proteína hidratada y sazona con sal, pimienta y especias al gusto.',
        'Para la salsa, asa los tomates y chiles, luego licúa con agua y sal.',
        'Cuela la salsa y cocínala hasta espesar ligeramente.',
        'Pasa las tortillas por la salsa caliente para suavizarlas.',
        'Rellena cada tortilla con la mezcla de proteína y verduras, enrolla.',
        'Acomoda en un refractario, baña con más salsa y queso vegano.',
        'Gratina en el horno a 180°C por 15 minutos.',
        'Sirve con crema vegetal y lechuga fresca.'
      ],
      nutritionInfo: {
        calories: 395,
        protein: 22,
        carbs: 38,
        fat: 18,
        fiber: 9,
        calcium: 150,
        iron: 4.1
      }
    },
    priceDifferencePercent: -17.4,
    healthScore: 82,
    healthBenefits: [
      'Alto contenido de proteína vegetal completa',
      'Rica en fibra y micronutrientes de las verduras',
      'Libre de grasas saturadas y colesterol',
      'Menor contenido de sodio que las versiones comerciales',
      'Fuente de hierro de fácil absorción'
    ],
    environmentalImpact: {
      co2Reduction: 65,
      waterSaving: 50,
      landSaving: 60
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
      name: 'Pizza Plant-Based Margarita',
      description: 'Pizza artesanal con masa casera, salsa de tomate fresca, queso vegano derretible y albahaca fresca. Perfecta para compartir.',
      estimatedPrice: 98.50,
      servings: 4,
      prepTime: '120 min',
      difficulty: 'medium',
      ingredients: [
        { name: 'Harina de trigo', amount: 400, unit: 'g', pricePerUnit: 0.02, totalCost: 8.00, source: 'Supermercado' },
        { name: 'Levadura seca', amount: 7, unit: 'g', pricePerUnit: 0.50, totalCost: 3.50, source: 'Supermercado' },
        { name: 'Tomates San Marzano', amount: 4, unit: 'piezas', pricePerUnit: 4.50, totalCost: 18.00, source: 'Mercado orgánico' },
        { name: 'Queso vegano mozzarella', amount: 200, unit: 'g', pricePerUnit: 0.25, totalCost: 50.00, source: 'Tienda vegana' },
        { name: 'Albahaca fresca', amount: 1, unit: 'manojo', pricePerUnit: 8.00, totalCost: 8.00, source: 'Tienda gourmet' },
        { name: 'Aceite de oliva extra virgen', amount: 4, unit: 'cucharadas', pricePerUnit: 2.00, totalCost: 8.00, source: 'Tienda gourmet' },
        { name: 'Sal de mar', amount: 1, unit: 'cucharadita', pricePerUnit: 0.50, totalCost: 0.50, source: 'Supermercado' },
        { name: 'Orégano seco', amount: 1, unit: 'cucharadita', pricePerUnit: 2.50, totalCost: 2.50, source: 'Mercado de especias' }
      ],
      instructions: [
        'Mezcla la harina con sal y haz un hueco en el centro.',
        'Disuelve la levadura en agua tibia y agrégala a la harina.',
        'Amasa durante 10 minutos hasta obtener una masa elástica.',
        'Deja reposar la masa en un bowl aceitado por 1 hora.',
        'Para la salsa, licúa los tomates con sal, orégano y una pizca de aceite.',
        'Estira la masa en una superficie enharinada hasta formar un círculo.',
        'Extiende la salsa de tomate uniformemente sobre la masa.',
        'Distribuye el queso vegano en trozos pequeños.',
        'Hornea a 250°C por 12-15 minutos hasta que esté dorada.',
        'Decora con hojas de albahaca fresca y un chorrito de aceite de oliva.',
        'Deja reposar 5 minutos antes de cortar y servir.'
      ],
      nutritionInfo: {
        calories: 425,
        protein: 18,
        carbs: 52,
        fat: 16,
        fiber: 4,
        calcium: 180,
        iron: 3.5
      }
    },
    priceDifferencePercent: -17.9,
    healthScore: 78,
    healthBenefits: [
      'Libre de colesterol y lactosa',
      'Mayor contenido de fibra y antioxidantes',
      'Menos grasas saturadas que la versión tradicional',
      'Rica en vitaminas del complejo B de la levadura',
      'Fuente de licopeno de los tomates frescos'
    ],
    environmentalImpact: {
      co2Reduction: 55,
      waterSaving: 40,
      landSaving: 45
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
      name: 'Hamburguesa Plant-Based',
      description: 'Hamburguesa jugosa hecha con una mezcla de frijoles negros, quinoa y verduras, servida con pan artesanal y vegetales frescos.',
      estimatedPrice: 92.00,
      servings: 2,
      prepTime: '35 min',
      difficulty: 'easy',
      ingredients: [
        { name: 'Frijoles negros cocidos', amount: 1, unit: 'taza', pricePerUnit: 8.00, totalCost: 8.00, source: 'Preparación casera' },
        { name: 'Quinoa cocida', amount: 0.5, unit: 'taza', pricePerUnit: 12.00, totalCost: 6.00, source: 'Tienda naturista' },
        { name: 'Pan para hamburguesa integral', amount: 2, unit: 'piezas', pricePerUnit: 8.50, totalCost: 17.00, source: 'Panadería artesanal' },
        { name: 'Cebolla morada', amount: 0.25, unit: 'pieza', pricePerUnit: 5.00, totalCost: 1.25, source: 'Mercado local' },
        { name: 'Zanahoria', amount: 0.5, unit: 'pieza', pricePerUnit: 3.00, totalCost: 1.50, source: 'Mercado local' },
        { name: 'Ajo', amount: 2, unit: 'dientes', pricePerUnit: 0.50, totalCost: 1.00, source: 'Mercado local' },
        { name: 'Avena en hojuelas', amount: 3, unit: 'cucharadas', pricePerUnit: 1.00, totalCost: 3.00, source: 'Supermercado' },
        { name: 'Tomate bola', amount: 1, unit: 'pieza', pricePerUnit: 4.00, totalCost: 4.00, source: 'Mercado local' },
        { name: 'Lechuga orejona', amount: 4, unit: 'hojas', pricePerUnit: 0.75, totalCost: 3.00, source: 'Mercado local' },
        { name: 'Aguacate', amount: 0.5, unit: 'pieza', pricePerUnit: 8.00, totalCost: 4.00, source: 'Mercado de Jamaica' },
        { name: 'Mayonesa vegana', amount: 2, unit: 'cucharadas', pricePerUnit: 1.50, totalCost: 3.00, source: 'Tienda vegana' },
        { name: 'Aceite de coco', amount: 2, unit: 'cucharadas', pricePerUnit: 2.00, totalCost: 4.00, source: 'Tienda naturista' }
      ],
      instructions: [
        'Machaca los frijoles negros cocidos dejando algunos trozos enteros.',
        'Pica finamente la cebolla, zanahoria y ajo.',
        'Sofríe las verduras picadas hasta que estén tiernas.',
        'Mezcla los frijoles, quinoa, verduras sofritas y avena.',
        'Sazona con sal, pimienta, comino y páprika al gusto.',
        'Forma 2 hamburguesas con la mezcla y refrigera 15 minutos.',
        'Cocina las hamburguesas en aceite de coco por 4-5 minutos de cada lado.',
        'Tuesta ligeramente los panes.',
        'Arma la hamburguesa con mayonesa vegana, lechuga, hamburguesa, tomate y aguacate.',
        'Sirve inmediatamente acompañada de papas al horno o ensalada.'
      ],
      nutritionInfo: {
        calories: 485,
        protein: 22,
        carbs: 58,
        fat: 18,
        fiber: 12,
        calcium: 95,
        iron: 5.2
      }
    },
    priceDifferencePercent: -16.4,
    healthScore: 88,
    healthBenefits: [
      'Rica en proteína vegetal de alta calidad',
      'Alto contenido de fibra que mejora la saciedad',
      'Libre de colesterol y grasas trans',
      'Fuente de hierro y magnesio de los frijoles',
      'Rica en omega-3 de la quinoa',
      'Menor contenido de grasas saturadas'
    ],
    environmentalImpact: {
      co2Reduction: 70,
      waterSaving: 60,
      landSaving: 65
    }
  }
];
