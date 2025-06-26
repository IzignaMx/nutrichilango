
import { Product } from '../../../types';

export const expandedDairyProducts: Product[] = [
  {
    id: 'greek-yogurt-vs-coconut-yogurt',
    category: 'dairy',
    traditional: {
      name: 'Yogurt Griego Natural',
      brand: 'A granel',
      price: 38.00,
      unit: '250g',
      pricePerUnit: 152.00,
      nutritionInfo: {
        protein: 15.3,
        carbs: 6.1,
        fat: 4.0,
        calories: 97,
        calcium: 200,
        iron: 0.2,
        fiber: 0
      }
    },
    plantBased: {
      name: 'Yogurt de Coco Probiótico Casero',
      brand: 'Casero',
      price: 28.50,
      unit: '250g',
      pricePerUnit: 114.00,
      isCommercial: false,
      nutritionInfo: {
        protein: 4.2,
        carbs: 8.5,
        fat: 18.5,
        calories: 198,
        calcium: 125,
        iron: 1.8,
        fiber: 7.2
      },
      recipe: {
        id: 'coconut-yogurt-1',
        name: 'Yogurt Probiótico de Coco Casero',
        description: 'Yogurt cremoso con probióticos naturales, rico en grasas saludables',
        servings: 6,
        prepTime: '20 min + fermentación 12-24h',
        difficulty: 'medium',
        ingredients: [
          {
            name: 'Leche de coco entera (lata)',
            amount: 400,
            unit: 'ml',
            pricePerUnit: 95.00,
            totalCost: 38.00,
            source: 'Tienda asiática'
          },
          {
            name: 'Cápsulas probióticas',
            amount: 4,
            unit: 'piezas',
            pricePerUnit: 12.00,
            totalCost: 48.00,
            source: 'Farmacia/Tienda naturista'
          },
          {
            name: 'Almidón de tapioca',
            amount: 15,
            unit: 'g',
            pricePerUnit: 80.00,
            totalCost: 1.20,
            source: 'Tienda naturista'
          },
          {
            name: 'Jarabe de agave',
            amount: 20,
            unit: 'ml',
            pricePerUnit: 120.00,
            totalCost: 2.40,
            source: 'Tienda naturista'
          },
          {
            name: 'Vainilla natural',
            amount: 5,
            unit: 'ml',
            pricePerUnit: 120.00,
            totalCost: 0.60,
            source: 'Tienda naturista'
          }
        ],
        instructions: [
          'Calentar leche de coco a 43°C (tibia al tacto)',
          'Disolver almidón de tapioca en poca leche fría',
          'Mezclar almidón disuelto con leche tibia',
          'Abrir cápsulas probióticas y mezclar contenido',
          'Añadir agave y vainilla, mezclar bien',
          'Verter en frascos esterilizados',
          'Mantener a 43°C por 12-24h (yogurtera o horno apagado)',
          'Refrigerar 4h antes de consumir',
          'Dura hasta 7 días refrigerado'
        ],
        nutritionInfo: {
          protein: 4.2,
          carbs: 8.5,
          fat: 18.5,
          calories: 198
        }
      }
    },
    priceDifferencePercent: -25.0,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  },
  {
    id: 'butter-vs-cashew-butter',
    category: 'dairy',
    traditional: {
      name: 'Mantequilla con Sal',
      brand: 'A granel',
      price: 45.00,
      unit: '200g',
      pricePerUnit: 225.00,
      nutritionInfo: {
        protein: 0.9,
        carbs: 0.1,
        fat: 81.1,
        calories: 717,
        calcium: 24,
        iron: 0.2,
        fiber: 0
      }
    },
    plantBased: {
      name: 'Mantequilla de Anacardo Casera',
      brand: 'Casero',
      price: 35.00,
      unit: '200g',
      pricePerUnit: 175.00,
      isCommercial: false,
      nutritionInfo: {
        protein: 5.2,
        carbs: 9.2,
        fat: 44.8,
        calories: 553,
        calcium: 45,
        iron: 6.7,
        fiber: 1.0
      },
      recipe: {
        id: 'cashew-butter-1',
        name: 'Mantequilla Untable de Anacardo',
        description: 'Mantequilla cremosa plant-based, ideal para pan y repostería',
        servings: 10,
        prepTime: '15 minutos + remojo',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Anacardos crudos',
            amount: 300,
            unit: 'g',
            pricePerUnit: 220.00,
            totalCost: 66.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Aceite de coco refinado',
            amount: 60,
            unit: 'ml',
            pricePerUnit: 300.00,
            totalCost: 18.00,
            source: 'Tienda naturista'
          },
          {
            name: 'Agua filtrada',
            amount: 80,
            unit: 'ml',
            pricePerUnit: 2.00,
            totalCost: 0.16,
            source: 'Casa'
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
            name: 'Lecitina de girasol',
            amount: 5,
            unit: 'g',
            pricePerUnit: 180.00,
            totalCost: 0.90,
            source: 'Tienda naturista'
          }
        ],
        instructions: [
          'Remojar anacardos 4-6 horas en agua',
          'Escurrir y enjuagar bien',
          'Procesar en procesador potente hasta pasta fina',
          'Agregar agua gradualmente hasta consistencia cremosa',
          'Añadir aceite de coco derretido tibio',
          'Incorporar sal y lecitina, procesar hasta homogéneo',
          'Refrigerar 2 horas para que endurezca',
          'Conservar refrigerado hasta 2 semanas'
        ],
        nutritionInfo: {
          protein: 5.2,
          carbs: 9.2,
          fat: 44.8,
          calories: 553
        }
      }
    },
    priceDifferencePercent: -22.2,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  }
];
