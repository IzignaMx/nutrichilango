
import { Product } from '../../../../types';

export const milkComparison: Product = {
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
};
