
import { Product } from '../../../types';

export const meatProducts: Product[] = [
  {
    id: 'ground-beef-vs-lentil-bolognese',
    category: 'proteins',
    traditional: {
      name: 'Carne Molida de Res (80/20)',
      brand: 'A granel',
      price: 159.00,
      unit: '500g',
      pricePerUnit: 318.00,
      nutritionInfo: {
        protein: 20.0,
        carbs: 0,
        fat: 20.0,
        calories: 254,
        calcium: 18,
        iron: 2.6,
        fiber: 0
      }
    },
    plantBased: {
      name: 'Boloñesa de Lentejas Casera',
      brand: 'Casero',
      price: 85.00,
      unit: '500g',
      pricePerUnit: 170.00,
      isCommercial: false,
      nutritionInfo: {
        protein: 18.2,
        carbs: 35.4,
        fat: 2.8,
        calories: 230,
        calcium: 56,
        iron: 7.2,
        fiber: 15.6
      },
      recipe: {
        id: 'lentil-bolognese-1',
        name: 'Boloñesa de Lentejas con Vegetales',
        description: 'Rica salsa boloñesa plant-based con alto contenido proteico y fibra',
        servings: 6,
        prepTime: '45 minutos',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Lentejas rojas',
            amount: 300,
            unit: 'g',
            pricePerUnit: 35.00,
            totalCost: 10.50,
            source: 'Central de Abastos'
          },
          {
            name: 'Cebolla blanca',
            amount: 200,
            unit: 'g',
            pricePerUnit: 18.00,
            totalCost: 3.60,
            source: 'Central de Abastos'
          },
          {
            name: 'Zanahoria',
            amount: 150,
            unit: 'g',
            pricePerUnit: 12.00,
            totalCost: 1.80,
            source: 'Central de Abastos'
          },
          {
            name: 'Apio',
            amount: 100,
            unit: 'g',
            pricePerUnit: 25.00,
            totalCost: 2.50,
            source: 'Central de Abastos'
          },
          {
            name: 'Jitomate triturado',
            amount: 400,
            unit: 'g',
            pricePerUnit: 22.00,
            totalCost: 8.80,
            source: 'Central de Abastos'
          },
          {
            name: 'Pasta de tomate',
            amount: 60,
            unit: 'g',
            pricePerUnit: 80.00,
            totalCost: 4.80,
            source: 'Tienda convencional'
          },
          {
            name: 'Aceite de oliva',
            amount: 30,
            unit: 'ml',
            pricePerUnit: 200.00,
            totalCost: 6.00,
            source: 'Tienda convencional'
          },
          {
            name: 'Ajo',
            amount: 15,
            unit: 'g',
            pricePerUnit: 120.00,
            totalCost: 1.80,
            source: 'Central de Abastos'
          },
          {
            name: 'Hierbas secas (orégano, albahaca)',
            amount: 5,
            unit: 'g',
            pricePerUnit: 300.00,
            totalCost: 1.50,
            source: 'Central de Abastos'
          },
          {
            name: 'Sal marina',
            amount: 8,
            unit: 'g',
            pricePerUnit: 8.00,
            totalCost: 0.64,
            source: 'Central de Abastos'
          }
        ],
        instructions: [
          'Remojar lentejas 2 horas (opcional para cocción más rápida)',
          'Picar finamente cebolla, zanahoria, apio y ajo',
          'Sofreír vegetales en aceite hasta que estén suaves (8-10 min)',
          'Agregar lentejas escurridas y cocinar 2 minutos',
          'Añadir jitomate triturado, pasta de tomate y hierbas',
          'Cubrir con agua o caldo vegetal (500ml)',
          'Cocinar a fuego medio 25-30 minutos hasta que lentejas estén suaves',
          'Sazonar con sal y ajustar consistencia',
          'Servir sobre pasta o como guarnición'
        ],
        nutritionInfo: {
          protein: 18.2,
          carbs: 35.4,
          fat: 2.8,
          calories: 230
        }
      }
    },
    priceDifferencePercent: -46.5,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  },
  {
    id: 'chicken-breast-vs-tofu-scramble',
    category: 'proteins',
    traditional: {
      name: 'Pechuga de Pollo sin Hueso',
      brand: 'A granel',
      price: 95.00,
      unit: '500g',
      pricePerUnit: 190.00,
      nutritionInfo: {
        protein: 23.1,
        carbs: 0,
        fat: 3.6,
        calories: 165,
        calcium: 15,
        iron: 1.0,
        fiber: 0
      }
    },
    plantBased: {
      name: 'Revuelto de Tofu con Vegetales',
      brand: 'Casero',
      price: 75.00,
      unit: '500g',
      pricePerUnit: 150.00,
      isCommercial: false,
      nutritionInfo: {
        protein: 19.8,
        carbs: 8.2,
        fat: 12.4,
        calories: 198,
        calcium: 425,
        iron: 3.4,
        fiber: 2.8
      },
      recipe: {
        id: 'tofu-scramble-1',
        name: 'Revuelto de Tofu Estilo Huevos Revueltos',
        description: 'Alternativa plant-based rica en proteína y calcio, similar a huevos revueltos',
        servings: 4,
        prepTime: '20 minutos',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Tofu firme',
            amount: 400,
            unit: 'g',
            pricePerUnit: 120.00,
            totalCost: 48.00,
            source: 'Tienda naturista'
          },
          {
            name: 'Levadura nutricional',
            amount: 20,
            unit: 'g',
            pricePerUnit: 180.00,
            totalCost: 3.60,
            source: 'Tienda naturista'
          },
          {
            name: 'Cúrcuma en polvo',
            amount: 3,
            unit: 'g',
            pricePerUnit: 200.00,
            totalCost: 0.60,
            source: 'Central de Abastos'
          },
          {
            name: 'Cebolla morada',
            amount: 100,
            unit: 'g',
            pricePerUnit: 20.00,
            totalCost: 2.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Pimiento morrón',
            amount: 120,
            unit: 'g',
            pricePerUnit: 35.00,
            totalCost: 4.20,
            source: 'Central de Abastos'
          },
          {
            name: 'Espinacas frescas',
            amount: 80,
            unit: 'g',
            pricePerUnit: 40.00,
            totalCost: 3.20,
            source: 'Central de Abastos'
          },
          {
            name: 'Aceite de coco',
            amount: 15,
            unit: 'ml',
            pricePerUnit: 300.00,
            totalCost: 4.50,
            source: 'Tienda naturista'
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
            name: 'Pimienta negra',
            amount: 2,
            unit: 'g',
            pricePerUnit: 150.00,
            totalCost: 0.30,
            source: 'Central de Abastos'
          }
        ],
        instructions: [
          'Escurrir y desmenuzar el tofu con las manos',
          'Picar cebolla, pimiento y espinacas',
          'Calentar aceite en sartén antiadherente',
          'Sofreír cebolla hasta transparente (3-4 min)',
          'Agregar pimiento y cocinar 2 minutos más',
          'Añadir tofu desmenuzado, cúrcuma, sal y pimienta',
          'Cocinar removiendo constantemente 5-7 minutos',
          'Agregar espinacas y levadura nutricional',
          'Cocinar hasta que espinacas se marchiten (2 min)',
          'Servir caliente como desayuno o cena'
        ],
        nutritionInfo: {
          protein: 19.8,
          carbs: 8.2,
          fat: 12.4,
          calories: 198
        }
      }
    },
    priceDifferencePercent: -21.1,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  }
];
