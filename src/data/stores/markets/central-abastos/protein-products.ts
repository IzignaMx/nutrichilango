
import { Product } from '../../../types';

export const proteinProducts: Product[] = [
  {
    id: 'commercial-vs-homemade-tofu-1',
    category: 'proteins',
    traditional: {
      name: 'Tofu Comercial',
      brand: 'Kikkoman',
      price: 65.00,
      unit: '400g',
      pricePerUnit: 162.50
    },
    plantBased: {
      name: 'Tofu Casero',
      brand: 'Casero',
      price: 28.00,
      unit: '400g',
      pricePerUnit: 70.00,
      isCommercial: false,
      recipe: {
        id: 'homemade-tofu-1',
        name: 'Tofu Casero de Soya',
        description: 'Tofu fresco y económico hecho en casa',
        servings: 6,
        prepTime: '2 horas',
        difficulty: 'medium',
        ingredients: [
          {
            name: 'Frijol de soya seco',
            amount: 200,
            unit: 'g',
            pricePerUnit: 35.00,
            totalCost: 7.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Agua',
            amount: 1500,
            unit: 'ml',
            pricePerUnit: 2.00,
            totalCost: 3.00,
            source: 'Casa'
          },
          {
            name: 'Vinagre blanco o limón',
            amount: 60,
            unit: 'ml',
            pricePerUnit: 12.00,
            totalCost: 0.72,
            source: 'Central de Abastos'
          },
          {
            name: 'Sal',
            amount: 5,
            unit: 'g',
            pricePerUnit: 3.00,
            totalCost: 0.15,
            source: 'Central de Abastos'
          }
        ],
        instructions: [
          'Remojar la soya 8-12 horas',
          'Licuar con agua y colar para obtener leche de soya',
          'Hervir la leche de soya por 10 minutos',
          'Agregar vinagre para cuajar',
          'Colar y prensar el cuajo por 1 hora',
          'Cortar y usar inmediatamente o refrigerar'
        ],
        nutritionInfo: {
          protein: 20,
          carbs: 4,
          fat: 11,
          calories: 183
        }
      }
    },
    priceDifferencePercent: -56.9,
    availability: { traditional: false, plantBased: true },
    comparisonType: 'commercial-vs-homemade'
  },
  {
    id: 'chicken-vs-homemade-mushroom-protein-1',
    category: 'proteins',
    traditional: {
      name: 'Pechuga de Pollo',
      brand: 'A granel',
      price: 85.00,
      unit: '500g',
      pricePerUnit: 170.00
    },
    plantBased: {
      name: 'Proteína Vegetal de Setas',
      brand: 'Casero',
      price: 42.50,
      unit: '500g',
      pricePerUnit: 85.00,
      isCommercial: false,
      recipe: {
        id: 'mushroom-protein-1',
        name: 'Proteína Vegetal de Setas y Lentejas',
        description: 'Textura carnosa perfecta para guisos y tacos',
        servings: 6,
        prepTime: '45 minutos',
        difficulty: 'medium',
        ingredients: [
          {
            name: 'Setas ostra frescas',
            amount: 250,
            unit: 'g',
            pricePerUnit: 80.00,
            totalCost: 20.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Lentejas cocidas',
            amount: 200,
            unit: 'g',
            pricePerUnit: 32.00,
            totalCost: 6.40,
            source: 'Central de Abastos'
          },
          {
            name: 'Nueces picadas',
            amount: 80,
            unit: 'g',
            pricePerUnit: 120.00,
            totalCost: 9.60,
            source: 'Central de Abastos'
          },
          {
            name: 'Salsa de soya',
            amount: 30,
            unit: 'ml',
            pricePerUnit: 25.00,
            totalCost: 0.75,
            source: 'Tienda asiática'
          },
          {
            name: 'Aceite de oliva',
            amount: 20,
            unit: 'ml',
            pricePerUnit: 85.00,
            totalCost: 1.70,
            source: 'Central de Abastos'
          },
          {
            name: 'Ajo y especias',
            amount: 15,
            unit: 'g',
            pricePerUnit: 60.00,
            totalCost: 0.90,
            source: 'Central de Abastos'
          },
          {
            name: 'Harina de avena',
            amount: 50,
            unit: 'g',
            pricePerUnit: 20.00,
            totalCost: 1.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Levadura nutricional',
            amount: 15,
            unit: 'g',
            pricePerUnit: 180.00,
            totalCost: 2.70,
            source: 'Tienda naturista'
          }
        ],
        instructions: [
          'Picar finamente las setas y sofreír hasta dorar',
          'Mezclar lentejas cocidas con nueces trituradas',
          'Combinar setas con mezcla de lentejas',
          'Agregar salsa de soya, especias y levadura nutricional',
          'Incorporar harina de avena para dar consistencia',
          'Formar hamburguesas o desmenuzar para tacos',
          'Cocinar a fuego medio 5-7 minutos por lado'
        ],
        nutritionInfo: {
          protein: 18,
          carbs: 12,
          fat: 8,
          calories: 185
        }
      }
    },
    priceDifferencePercent: -50.0,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  },
  {
    id: 'ground-beef-vs-homemade-lentil-walnut-1',
    category: 'proteins',
    traditional: {
      name: 'Carne Molida de Res',
      brand: 'A granel',
      price: 120.00,
      unit: '500g',
      pricePerUnit: 240.00
    },
    plantBased: {
      name: 'Carne Vegetal de Lentejas y Nuez',
      brand: 'Casero',
      price: 55.00,
      unit: '500g',
      pricePerUnit: 110.00,
      isCommercial: false,
      recipe: {
        id: 'lentil-walnut-meat-1',
        name: 'Carne Vegetal de Lentejas y Nuez',
        description: 'Textura perfecta para bolognesa, tacos y rellenos',
        servings: 8,
        prepTime: '30 minutos',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Lentejas pardinas cocidas',
            amount: 300,
            unit: 'g',
            pricePerUnit: 32.00,
            totalCost: 9.60,
            source: 'Central de Abastos'
          },
          {
            name: 'Nueces de Castilla',
            amount: 120,
            unit: 'g',
            pricePerUnit: 150.00,
            totalCost: 18.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Champiñones portobello',
            amount: 150,
            unit: 'g',
            pricePerUnit: 90.00,
            totalCost: 13.50,
            source: 'Central de Abastos'
          },
          {
            name: 'Cebolla blanca',
            amount: 100,
            unit: 'g',
            pricePerUnit: 18.00,
            totalCost: 1.80,
            source: 'Central de Abastos'
          },
          {
            name: 'Concentrado de tomate',
            amount: 40,
            unit: 'g',
            pricePerUnit: 45.00,
            totalCost: 1.80,
            source: 'Central de Abastos'
          },
          {
            name: 'Salsa de soya',
            amount: 25,
            unit: 'ml',
            pricePerUnit: 25.00,
            totalCost: 0.63,
            source: 'Tienda asiática'
          },
          {
            name: 'Aceite de oliva',
            amount: 25,
            unit: 'ml',
            pricePerUnit: 85.00,
            totalCost: 2.13,
            source: 'Central de Abastos'
          },
          {
            name: 'Especias (comino, pimentón, orégano)',
            amount: 12,
            unit: 'g',
            pricePerUnit: 120.00,
            totalCost: 1.44,
            source: 'Mercado de especias'
          },
          {
            name: 'Sal y pimienta',
            amount: 5,
            unit: 'g',
            pricePerUnit: 15.00,
            totalCost: 0.08,
            source: 'Central de Abastos'
          }
        ],
        instructions: [
          'Picar finamente cebolla y champiñones, sofreír hasta dorar',
          'En procesador, pulsar lentejas hasta textura granular',
          'Triturar nueces hasta obtener trozos pequeños',
          'Mezclar lentejas, nueces y vegetales sofritos',
          'Agregar concentrate de tomate, salsa de soya y especias',
          'Cocinar a fuego medio 8-10 minutos removiendo',
          'Rectificar sazón y usar como carne molida tradicional'
        ],
        nutritionInfo: {
          protein: 16,
          carbs: 18,
          fat: 12,
          calories: 220
        }
      }
    },
    priceDifferencePercent: -54.2,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  },
  {
    id: 'tuna-vs-homemade-chickpea-tuna-1',
    category: 'proteins',
    traditional: {
      name: 'Atún en Lata',
      brand: 'Marca comercial',
      price: 25.00,
      unit: '140g',
      pricePerUnit: 178.57
    },
    plantBased: {
      name: 'Atún Vegetal de Garbanzos',
      brand: 'Casero',
      price: 12.50,
      unit: '140g',
      pricePerUnit: 89.29,
      isCommercial: false,
      recipe: {
        id: 'chickpea-tuna-1',
        name: 'Atún Vegetal de Garbanzos',
        description: 'Perfecta textura para ensaladas y sándwiches',
        servings: 4,
        prepTime: '15 minutos',
        difficulty: 'easy',
        ingredients: [
          {
            name: 'Garbanzos cocidos',
            amount: 200,
            unit: 'g',
            pricePerUnit: 35.00,
            totalCost: 7.00,
            source: 'Central de Abastos'
          },
          {
            name: 'Alga nori en hojuelas',
            amount: 5,
            unit: 'g',
            pricePerUnit: 300.00,
            totalCost: 1.50,
            source: 'Tienda asiática'
          },
          {
            name: 'Mayonesa vegetal casera',
            amount: 30,
            unit: 'ml',
            pricePerUnit: 85.00,
            totalCost: 2.55,
            source: 'Casera'
          },
          {
            name: 'Jugo de limón',
            amount: 15,
            unit: 'ml',
            pricePerUnit: 40.00,
            totalCost: 0.60,
            source: 'Central de Abastos'
          },
          {
            name: 'Mostaza Dijon',
            amount: 8,
            unit: 'ml',
            pricePerUnit: 65.00,
            totalCost: 0.52,
            source: 'Supermercado'
          },
          {
            name: 'Apio picado',
            amount: 25,
            unit: 'g',
            pricePerUnit: 35.00,
            totalCost: 0.88,
            source: 'Central de Abastos'
          },
          {
            name: 'Cebolla morada',
            amount: 20,
            unit: 'g',
            pricePerUnit: 25.00,
            totalCost: 0.50,
            source: 'Central de Abastos'
          },
          {
            name: 'Sal y pimienta',
            amount: 2,
            unit: 'g',
            pricePerUnit: 15.00,
            totalCost: 0.03,
            source: 'Central de Abastos'
          }
        ],
        instructions: [
          'Escurrir y enjuagar los garbanzos cocidos',
          'Machacar ligeramente con tenedor dejando textura',
          'Agregar alga nori para sabor marino',
          'Mezclar con mayonesa, limón y mostaza',
          'Incorporar apio y cebolla picados finamente',
          'Sazonar con sal y pimienta al gusto',
          'Refrigerar 30 minutos antes de servir'
        ],
        nutritionInfo: {
          protein: 8,
          carbs: 15,
          fat: 6,
          calories: 135
        }
      }
    },
    priceDifferencePercent: -50.0,
    availability: { traditional: true, plantBased: true },
    comparisonType: 'animal-vs-homemade'
  }
];
