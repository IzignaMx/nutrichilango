
import { Product } from '../../../types';

export const preparedDishes: Product[] = [
  {
    id: 'chicken-tacos-vs-jackfruit-tacos',
    category: 'prepared-dishes',
    traditional: {
      name: 'Tacos de Pollo Deshebrado (4 piezas)',
      brand: 'Preparado local',
      price: 45.00,
      unit: '4 tacos',
      pricePerUnit: 11.25,
      nutritionInfo: {
        protein: 28.0,
        carbs: 32.0,
        fat: 12.0,
        calories: 340,
        calcium: 120,
        iron: 2.8,
        fiber: 4.0
      }
    },
    plantBased: {
      name: 'Tacos de Jackfruit al Pastor (4 piezas)',
      brand: 'Casero',
      price: 32.00,
      unit: '4 tacos',
      pricePerUnit: 8.00,
      isCommercial: false,
      nutritionInfo: {
        protein: 8.4,
        carbs: 45.2,
        fat: 6.8,
        calories: 268,
        calcium: 180,
        iron: 1.8,
        fiber: 12.4
      },
      recipe: {
        id: 'jackfruit-tacos-1',
        name: 'Tacos de Jackfruit al Pastor Plant-Based',
        description: 'Tacos veganos que imitan el sabor del pastor tradicional usando jackfruit',
        servings: 4,
        prepTime: '40 minutos + marinado',
        difficulty: 'medium',
        ingredients: [
          {
            name: 'Jackfruit en salmuera (escurrido)',
            amount: 400,
            unit: 'g',
            pricePerUnit: 85.00,
            totalCost: 34.00,
            source: 'Tienda asiática'
          },
          {
            name: 'Tortillas de maíz',
            amount: 8,
            unit: 'piezas',
            pricePerUnit: 1.50,
            totalCost: 12.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Chile guajillo',
            amount: 20,
            unit: 'g',
            pricePerUnit: 120.00,
            totalCost: 2.40,
            source: 'Central de Abastos'
          },
          {
            name: 'Chile chipotle adobado',
            amount: 15,
            unit: 'g',
            pricePerUnit: 180.00,
            totalCost: 2.70,
            source: 'Central de Abastos'
          },
          {
            name: 'Achiote en pasta',
            amount: 10,
            unit: 'g',
            pricePerUnit: 200.00,
            totalCost: 2.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Piña natural',
            amount: 100,
            unit: 'g',
            pricePerUnit: 25.00,
            totalCost: 2.50,
            source: 'Central de Abastos'
          },
          {
            name: 'Cebolla blanca',
            amount: 80,
            unit: 'g',
            pricePerUnit: 18.00,
            totalCost: 1.44,
            source: 'Central de Abastos'
          },
          {
            name: 'Ajo',
            amount: 10,
            unit: 'g',
            pricePerUnit: 120.00,
            totalCost: 1.20,
            source: 'Central de Abastos'
          },
          {
            name: 'Vinagre de manzana',
            amount: 20,
            unit: 'ml',
            pricePerUnit: 45.00,
            totalCost: 0.90,
            source: 'Tienda convencional'
          },
          {
            name: 'Aceite vegetal',
            amount: 20,
            unit: 'ml',
            pricePerUnit: 35.00,
            totalCost: 0.70,
            source: 'Tienda convencional'
          },
          {
            name: 'Comino molido',
            amount: 3,
            unit: 'g',
            pricePerUnit: 200.00,
            totalCost: 0.60,
            source: 'Central de Abastos'
          },
          {
            name: 'Orégano seco',
            amount: 2,
            unit: 'g',
            pricePerUnit: 300.00,
            totalCost: 0.60,
            source: 'Central de Abastos'
          }
        ],
        instructions: [
          'Remojar chiles guajillo en agua caliente 15 min',
          'Escurrir y deshebrar jackfruit, removing semillas',
          'Licuar chiles con chipotle, achiote, ajo, vinagre y especias',
          'Marinar jackfruit con salsa 2 horas mínimo',
          'Asar piña y cebolla hasta caramelizar',
          'Cocinar jackfruit marinado en sartén 15-20 min',
          'Calentar tortillas en comal',
          'Servir jackfruit en tortillas con piña, cebolla y salsa'
        ],
        nutritionInfo: {
          protein: 8.4,
          carbs: 45.2,
          fat: 6.8,
          calories: 268
        }
      }
    },
    priceDifferencePercent: -28.9,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  },
  {
    id: 'beef-soup-vs-mushroom-soup',
    category: 'prepared-dishes',
    traditional: {
      name: 'Sopa de Res con Verduras (1 porción)',
      brand: 'Preparado local',
      price: 55.00,
      unit: '350ml',
      pricePerUnit: 157.14,
      nutritionInfo: {
        protein: 18.5,
        carbs: 12.0,
        fat: 8.5,
        calories: 185,
        calcium: 35,
        iron: 3.2,
        fiber: 2.5
      }
    },
    plantBased: {
      name: 'Sopa de Hongos y Proteína Vegetal',
      brand: 'Casero',
      price: 38.00,
      unit: '350ml',
      pricePerUnit: 108.57,
      isCommercial: false,
      nutritionInfo: {
        protein: 16.2,
        carbs: 18.5,
        fat: 4.2,
        calories: 168,
        calcium: 45,
        iron: 2.8,
        fiber: 8.5
      },
      recipe: {
        id: 'mushroom-protein-soup-1',
        name: 'Sopa Cremosa de Hongos con Proteína Vegetal',
        description: 'Sopa nutritiva y reconfortante con alto contenido de proteína vegetal y fibra',
        servings: 4,
        prepTime: '35 minutos',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Hongos portobello',
            amount: 200,
            unit: 'g',
            pricePerUnit: 120.00,
            totalCost: 24.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Hongos shiitake secos',
            amount: 30,
            unit: 'g',
            pricePerUnit: 400.00,
            totalCost: 12.00,
            source: 'Tienda asiática'
          },
          {
            name: 'Proteína de soya texturizada',
            amount: 80,
            unit: 'g',
            pricePerUnit: 45.00,
            totalCost: 3.60,
            source: 'Tienda naturista'
          },
          {
            name: 'Cebolla blanca',
            amount: 150,
            unit: 'g',
            pricePerUnit: 18.00,
            totalCost: 2.70,
            source: 'Central de Abastos'
          },
          {
            name: 'Zanahoria',
            amount: 100,
            unit: 'g',
            pricePerUnit: 12.00,
            totalCost: 1.20,
            source: 'Central de Abastos'
          },
          {
            name: 'Apio',
            amount: 80,
            unit: 'g',
            pricePerUnit: 25.00,
            totalCost: 2.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Caldo de verduras (concentrado)',
            amount: 40,
            unit: 'g',
            pricePerUnit: 200.00,
            totalCost: 8.00,
            source: 'Tienda naturista'
          },
          {
            name: 'Leche de avena',
            amount: 200,
            unit: 'ml',
            pricePerUnit: 35.00,
            totalCost: 7.00,
            source: 'Tienda convencional'
          },
          {
            name: 'Aceite de oliva',
            amount: 20,
            unit: 'ml',
            pricePerUnit: 200.00,
            totalCost: 4.00,
            source: 'Tienda convencional'
          },
          {
            name: 'Tomillo fresco',
            amount: 5,
            unit: 'g',
            pricePerUnit: 300.00,
            totalCost: 1.50,
            source: 'Central de Abastos'
          },
          {
            name: 'Sal marina',
            amount: 6,
            unit: 'g',
            pricePerUnit: 8.00,
            totalCost: 0.48,
            source: 'Central de Abastos'
          }
        ],
        instructions: [
          'Hidratar hongos shiitake y proteína de soya en agua caliente',
          'Picar todos los vegetales en cubos medianos',
          'Rehogar cebolla en aceite hasta transparente',
          'Agregar zanahoria y apio, cocinar 5 minutos',
          'Añadir hongos frescos y cocinar hasta dorar',
          'Incorporar proteína hidratada y hongos shiitake',
          'Agregar caldo y 800ml de agua, hervir 15 minutos',
          'Añadir leche de avena y tomillo, cocinar 5 minutos más',
          'Sazonar y servir caliente'
        ],
        nutritionInfo: {
          protein: 16.2,
          carbs: 18.5,
          fat: 4.2,
          calories: 168
        }
      }
    },
    priceDifferencePercent: -30.9,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  }
];
