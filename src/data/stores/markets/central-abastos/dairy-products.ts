import { Product } from '../../../types';

export const dairyProducts: Product[] = [
  {
    id: 'milk-vs-almond-milk-1',
    category: 'dairy',
    traditional: {
      name: 'Leche Entera de Vaca',
      brand: 'A granel',
      price: 22.00,
      unit: '1L',
      pricePerUnit: 22.00,
      nutritionInfo: {
        protein: 3.4,
        carbs: 4.8,
        fat: 3.2,
        calories: 61,
        calcium: 113,
        iron: 0.1,
        fiber: 0
      }
    },
    plantBased: {
      name: 'Leche de Almendra Casera',
      brand: 'Casero',
      price: 18.50,
      unit: '1L',
      pricePerUnit: 18.50,
      isCommercial: false,
      nutritionInfo: {
        protein: 2.1,
        carbs: 3.8,
        fat: 2.7,
        calories: 41,
        calcium: 200,
        iron: 0.4,
        fiber: 1.2
      },
      recipe: {
        id: 'almond-milk-1',
        name: 'Leche de Almendra Casera',
        description: 'Deliciosa leche vegetal sin aditivos',
        servings: 4,
        prepTime: '20 minutos + remojo',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Almendras crudas',
            amount: 200,
            unit: 'g',
            pricePerUnit: 180.00,
            totalCost: 36.00,
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
            name: 'Vainilla natural',
            amount: 5,
            unit: 'ml',
            pricePerUnit: 120.00,
            totalCost: 0.60,
            source: 'Tienda naturista'
          },
          {
            name: 'Sal marina',
            amount: 2,
            unit: 'g',
            pricePerUnit: 8.00,
            totalCost: 0.16,
            source: 'Central de Abastos'
          }
        ],
        instructions: [
          'Remojar almendras 8-12 horas',
          'Escurrir y enjuagar',
          'Licuar con agua filtrada por 2 minutos',
          'Colar con manta de cielo',
          'Agregar vainilla y sal',
          'Refrigerar hasta 5 días'
        ],
        nutritionInfo: {
          protein: 2.1,
          carbs: 3.8,
          fat: 2.7,
          calories: 41
        }
      }
    },
    priceDifferencePercent: -15.9,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  },
  {
    id: 'cheese-vs-cashew-cheese-1',
    category: 'dairy',
    traditional: {
      name: 'Queso Panela',
      brand: 'A granel',
      price: 45.00,
      unit: '250g',
      pricePerUnit: 180.00,
      nutritionInfo: {
        protein: 14.1,
        carbs: 4.1,
        fat: 4.3,
        calories: 106,
        calcium: 472,
        iron: 0.4,
        fiber: 0
      }
    },
    plantBased: {
      name: 'Queso de Anacardo Casero',
      brand: 'Casero',
      price: 32.00,
      unit: '250g',
      pricePerUnit: 128.00,
      isCommercial: false,
      nutritionInfo: {
        protein: 8.2,
        carbs: 8.5,
        fat: 12.4,
        calories: 157,
        calcium: 245,
        iron: 1.2,
        fiber: 2.1
      },
      recipe: {
        id: 'cashew-cheese-1',
        name: 'Queso de Anacardo Fermentado',
        description: 'Queso cremoso con probióticos naturales',
        servings: 8,
        prepTime: '30 min + fermentación',
        difficulty: 'medium',
        ingredients: [
          {
            name: 'Anacardos crudos',
            amount: 200,
            unit: 'g',
            pricePerUnit: 220.00,
            totalCost: 44.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Agua',
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
            name: 'Limón',
            amount: 30,
            unit: 'ml',
            pricePerUnit: 40.00,
            totalCost: 1.20,
            source: 'Central de Abastos'
          },
          {
            name: 'Sal marina',
            amount: 8,
            unit: 'g',
            pricePerUnit: 8.00,
            totalCost: 0.64,
            source: 'Central de Abastos'
          },
          {
            name: 'Ajo en polvo',
            amount: 3,
            unit: 'g',
            pricePerUnit: 80.00,
            totalCost: 0.24,
            source: 'Central de Abastos'
          }
        ],
        instructions: [
          'Remojar anacardos 4 horas',
          'Licuar todos los ingredientes hasta obtener consistencia cremosa',
          'Dejar fermentar 24-48h a temperatura ambiente',
          'Refrigerar para endurecer',
          'Moldear y usar como queso fresco'
        ],
        nutritionInfo: {
          protein: 8.2,
          carbs: 8.5,
          fat: 12.4,
          calories: 157
        }
      }
    },
    priceDifferencePercent: -28.9,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  }
];
