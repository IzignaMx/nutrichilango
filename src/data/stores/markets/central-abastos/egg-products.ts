
import { Product } from '../../../types';

export const eggProducts: Product[] = [
  {
    id: 'eggs-vs-homemade-chickpea-flour-1',
    category: 'eggs',
    traditional: {
      name: 'Huevos de Gallina',
      brand: 'A granel',
      price: 32.00,
      unit: '12 piezas',
      pricePerUnit: 2.67
    },
    plantBased: {
      name: 'Sustituto de Huevo de Harina de Garbanzo',
      brand: 'Casero',
      price: 18.00,
      unit: '12 equivalentes',
      pricePerUnit: 1.50,
      isCommercial: false,
      recipe: {
        id: 'chickpea-egg-1',
        name: 'Sustituto de Huevo con Harina de Garbanzo',
        description: 'Perfecto para tortillas, revueltos y horneado',
        servings: 12,
        prepTime: '5 minutos',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Harina de garbanzo',
            amount: 180,
            unit: 'g',
            pricePerUnit: 45.00,
            totalCost: 8.10,
            source: 'Central de Abastos'
          },
          {
            name: 'Agua',
            amount: 480,
            unit: 'ml',
            pricePerUnit: 2.00,
            totalCost: 0.96,
            source: 'Casa'
          },
          {
            name: 'Levadura nutricional',
            amount: 24,
            unit: 'g',
            pricePerUnit: 180.00,
            totalCost: 4.32,
            source: 'Tienda naturista'
          },
          {
            name: 'Sal marina',
            amount: 6,
            unit: 'g',
            pricePerUnit: 8.00,
            totalCost: 0.48,
            source: 'Central de Abastos'
          },
          {
            name: 'Cúrcuma en polvo',
            amount: 3,
            unit: 'g',
            pricePerUnit: 120.00,
            totalCost: 0.36,
            source: 'Mercado de especias'
          },
          {
            name: 'Pimienta negra',
            amount: 1,
            unit: 'g',
            pricePerUnit: 150.00,
            totalCost: 0.15,
            source: 'Mercado de especias'
          }
        ],
        instructions: [
          'Mezclar harina de garbanzo con especias secas',
          'Agregar agua gradualmente batiendo para evitar grumos',
          'Dejar reposar 5 minutos para hidratarse',
          'Para tortilla: usar 1/4 taza de mezcla por huevo',
          'Cocinar en sartén antiadherente como huevo revuelto',
          'Para horear: usar 1/4 taza por cada huevo en la receta'
        ],
        nutritionInfo: {
          protein: 6,
          carbs: 8,
          fat: 2,
          calories: 70
        }
      }
    },
    priceDifferencePercent: -43.8,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  }
];
