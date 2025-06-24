
import { Product } from '../../../types';

export const dairyProducts: Product[] = [
  {
    id: 'milk-vs-homemade-oat-1',
    category: 'dairy',
    traditional: {
      name: 'Leche de Vaca',
      brand: 'A granel',
      price: 18.00,
      unit: '1L',
      pricePerUnit: 18.00
    },
    plantBased: {
      name: 'Leche de Avena Casera',
      brand: 'Casero',
      price: 8.50,
      unit: '1L',
      pricePerUnit: 8.50,
      isCommercial: false,
      recipe: {
        id: 'oat-milk-1',
        name: 'Leche de Avena Casera',
        description: 'Leche vegetal cremosa y económica',
        servings: 4,
        prepTime: '10 minutos',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Avena en hojuelas',
            amount: 100,
            unit: 'g',
            pricePerUnit: 16.00,
            totalCost: 1.60,
            source: 'Central de Abastos'
          },
          {
            name: 'Agua filtrada',
            amount: 1000,
            unit: 'ml',
            pricePerUnit: 2.00,
            totalCost: 2.00,
            source: 'Casa'
          },
          {
            name: 'Sal marina',
            amount: 1,
            unit: 'pizca',
            pricePerUnit: 0.50,
            totalCost: 0.50,
            source: 'Central de Abastos'
          },
          {
            name: 'Endulzante natural (opcional)',
            amount: 1,
            unit: 'cdita',
            pricePerUnit: 4.40,
            totalCost: 4.40,
            source: 'Central de Abastos'
          }
        ],
        instructions: [
          'Remojar la avena en agua fría por 30 minutos',
          'Licuar por 60 segundos hasta obtener consistencia cremosa',
          'Colar con manta de cielo o colador fino',
          'Agregar sal y endulzante al gusto',
          'Refrigerar hasta 5 días'
        ],
        nutritionInfo: {
          protein: 3,
          carbs: 16,
          fat: 3,
          calories: 80
        }
      }
    },
    priceDifferencePercent: -52.8,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  },
  {
    id: 'cheese-vs-homemade-cashew-cheese-1',
    category: 'dairy',
    traditional: {
      name: 'Queso Panela',
      brand: 'A granel',
      price: 42.00,
      unit: '250g',
      pricePerUnit: 168.00
    },
    plantBased: {
      name: 'Queso Vegetal de Nueces de la India',
      brand: 'Casero',
      price: 35.00,
      unit: '250g',
      pricePerUnit: 140.00,
      isCommercial: false,
      recipe: {
        id: 'cashew-cheese-1',
        name: 'Queso Cremoso de Nueces de la India',
        description: 'Queso vegetal cremoso perfecto para untar y cocinar',
        servings: 8,
        prepTime: '4 horas (incluye remojo)',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Nueces de la India crudas',
            amount: 200,
            unit: 'g',
            pricePerUnit: 120.00,
            totalCost: 24.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Agua filtrada',
            amount: 150,
            unit: 'ml',
            pricePerUnit: 2.00,
            totalCost: 0.30,
            source: 'Casa'
          },
          {
            name: 'Levadura nutricional',
            amount: 30,
            unit: 'g',
            pricePerUnit: 180.00,
            totalCost: 5.40,
            source: 'Tienda naturista'
          },
          {
            name: 'Jugo de limón',
            amount: 30,
            unit: 'ml',
            pricePerUnit: 40.00,
            totalCost: 1.20,
            source: 'Central de Abastos'
          },
          {
            name: 'Sal marina',
            amount: 5,
            unit: 'g',
            pricePerUnit: 8.00,
            totalCost: 0.40,
            source: 'Central de Abastos'
          },
          {
            name: 'Ajo en polvo',
            amount: 2,
            unit: 'g',
            pricePerUnit: 80.00,
            totalCost: 0.16,
            source: 'Mercado de especias'
          }
        ],
        instructions: [
          'Remojar las nueces de la India por 4 horas',
          'Escurrir y licuar con agua hasta obtener crema suave',
          'Agregar levadura nutricional, limón y sal',
          'Mezclar hasta obtener consistencia cremosa',
          'Refrigerar por 2 horas antes de servir',
          'Conservar refrigerado hasta 5 días'
        ],
        nutritionInfo: {
          protein: 6,
          carbs: 8,
          fat: 16,
          calories: 185
        }
      }
    },
    priceDifferencePercent: -16.7,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  },
  {
    id: 'butter-vs-homemade-coconut-butter-1',
    category: 'dairy',
    traditional: {
      name: 'Mantequilla',
      brand: 'A granel',
      price: 38.00,
      unit: '200g',
      pricePerUnit: 190.00
    },
    plantBased: {
      name: 'Mantequilla Vegetal de Coco',
      brand: 'Casero',
      price: 26.50,
      unit: '200g',
      pricePerUnit: 132.50,
      isCommercial: false,
      recipe: {
        id: 'coconut-butter-1',
        name: 'Mantequilla Vegetal de Coco y Aceite de Oliva',
        description: 'Mantequilla plant-based cremosa para cocinar y untar',
        servings: 10,
        prepTime: '15 minutos',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Aceite de coco virgen',
            amount: 120,
            unit: 'g',
            pricePerUnit: 95.00,
            totalCost: 11.40,
            source: 'Tienda naturista'
          },
          {
            name: 'Aceite de oliva extra virgen',
            amount: 80,
            unit: 'ml',
            pricePerUnit: 85.00,
            totalCost: 6.80,
            source: 'Central de Abastos'
          },
          {
            name: 'Leche de soya',
            amount: 60,
            unit: 'ml',
            pricePerUnit: 22.00,
            totalCost: 1.32,
            source: 'Mercado local'
          },
          {
            name: 'Sal marina fina',
            amount: 3,
            unit: 'g',
            pricePerUnit: 8.00,
            totalCost: 0.24,
            source: 'Central de Abastos'
          },
          {
            name: 'Lecitina de soya',
            amount: 5,
            unit: 'g',
            pricePerUnit: 140.00,
            totalCost: 0.70,
            source: 'Tienda naturista'
          }
        ],
        instructions: [
          'Derretir el aceite de coco a baño maría',
          'Mezclar con aceite de oliva hasta integrar',
          'Agregar la leche de soya poco a poco batiendo',
          'Añadir sal y lecitina de soya',
          'Batir enérgicamente hasta emulsionar',
          'Refrigerar hasta solidificar (2 horas)'
        ],
        nutritionInfo: {
          protein: 0.2,
          carbs: 0.1,
          fat: 20,
          calories: 180
        }
      }
    },
    priceDifferencePercent: -30.3,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  },
  {
    id: 'yogurt-vs-homemade-coconut-yogurt-1',
    category: 'dairy',
    traditional: {
      name: 'Yogurt Natural',
      brand: 'A granel',
      price: 28.00,
      unit: '500g',
      pricePerUnit: 56.00
    },
    plantBased: {
      name: 'Yogurt Vegetal de Coco',
      brand: 'Casero',
      price: 18.50,
      unit: '500g',
      pricePerUnit: 37.00,
      isCommercial: false,
      recipe: {
        id: 'coconut-yogurt-1',
        name: 'Yogurt Probiótico de Coco',
        description: 'Yogurt cremoso con probióticos naturales',
        servings: 6,
        prepTime: '24 horas (fermentación)',
        difficulty: 'medium',
        ingredients: [
          {
            name: 'Leche de coco en lata',
            amount: 400,
            unit: 'ml',
            pricePerUnit: 32.00,
            totalCost: 12.80,
            source: 'Central de Abastos'
          },
          {
            name: 'Cápsulas de probióticos',
            amount: 2,
            unit: 'piezas',
            pricePerUnit: 8.00,
            totalCost: 1.60,
            source: 'Farmacia naturista'
          },
          {
            name: 'Agar agar en polvo',
            amount: 4,
            unit: 'g',
            pricePerUnit: 400.00,
            totalCost: 1.60,
            source: 'Tienda asiática'
          },
          {
            name: 'Endulzante natural (agave)',
            amount: 20,
            unit: 'ml',
            pricePerUnit: 45.00,
            totalCost: 0.90,
            source: 'Central de Abastos'
          },
          {
            name: 'Extracto de vainilla',
            amount: 5,
            unit: 'ml',
            pricePerUnit: 180.00,
            totalCost: 0.90,
            source: 'Repostería'
          },
          {
            name: 'Sal marina',
            amount: 1,
            unit: 'pizca',
            pricePerUnit: 8.00,
            totalCost: 0.08,
            source: 'Central de Abastos'
          }
        ],
        instructions: [
          'Disolver agar agar en 50ml de leche de coco caliente',
          'Mezclar con el resto de la leche de coco a temperatura ambiente',
          'Agregar contenido de cápsulas probióticas',
          'Añadir endulzante, vainilla y sal',
          'Verter en frascos esterilizados',
          'Fermentar 12-24 horas a temperatura ambiente',
          'Refrigerar hasta 7 días'
        ],
        nutritionInfo: {
          protein: 2,
          carbs: 6,
          fat: 15,
          calories: 160
        }
      }
    },
    priceDifferencePercent: -33.9,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  },
  {
    id: 'cream-cheese-vs-homemade-almond-cream-1',
    category: 'dairy',
    traditional: {
      name: 'Queso Crema',
      brand: 'Philadelphia',
      price: 45.00,
      unit: '200g',
      pricePerUnit: 225.00
    },
    plantBased: {
      name: 'Queso Crema Vegetal de Almendras',
      brand: 'Casero',
      price: 28.00,
      unit: '200g',
      pricePerUnit: 140.00,
      isCommercial: false,
      recipe: {
        id: 'almond-cream-cheese-1',
        name: 'Queso Crema de Almendras',
        description: 'Cremoso y perfecto para untar o postres',
        servings: 8,
        prepTime: '6 horas (incluye remojo)',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Almendras crudas peladas',
            amount: 150,
            unit: 'g',
            pricePerUnit: 140.00,
            totalCost: 21.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Agua filtrada',
            amount: 120,
            unit: 'ml',
            pricePerUnit: 2.00,
            totalCost: 0.24,
            source: 'Casa'
          },
          {
            name: 'Jugo de limón fresco',
            amount: 25,
            unit: 'ml',
            pricePerUnit: 40.00,
            totalCost: 1.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Vinagre de manzana',
            amount: 15,
            unit: 'ml',
            pricePerUnit: 35.00,
            totalCost: 0.53,
            source: 'Central de Abastos'
          },
          {
            name: 'Sal marina fina',
            amount: 4,
            unit: 'g',
            pricePerUnit: 8.00,
            totalCost: 0.32,
            source: 'Central de Abastos'
          },
          {
            name: 'Aceite de coco neutro',
            amount: 30,
            unit: 'ml',
            pricePerUnit: 95.00,
            totalCost: 2.85,
            source: 'Tienda naturista'
          },
          {
            name: 'Goma xantana (opcional)',
            amount: 1,
            unit: 'g',
            pricePerUnit: 280.00,
            totalCost: 0.28,
            source: 'Repostería especializada'
          }
        ],
        instructions: [
          'Remojar almendras en agua por 4-6 horas',
          'Escurrir y licuar con agua fresca hasta textura suave',
          'Agregar limón, vinagre y sal, mezclar bien',
          'Incorporar aceite de coco derretido gradualmente',
          'Si se usa, agregar goma xantana para mejor textura',
          'Licuar hasta obtener consistencia cremosa y uniforme',
          'Refrigerar por 2 horas antes de usar'
        ],
        nutritionInfo: {
          protein: 4,
          carbs: 3,
          fat: 14,
          calories: 145
        }
      }
    },
    priceDifferencePercent: -37.8,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  }
];
