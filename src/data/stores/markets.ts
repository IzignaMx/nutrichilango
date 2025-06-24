
import { Store } from '../types';

export const marketStores: Store[] = [
  {
    id: 'mercado-jamaica-1',
    name: 'Mercado de Jamaica',
    location: 'Jamaica, CDMX',
    coordinates: [-99.124, 19.414],
    hasPromotion: false,
    storeType: 'market',
    products: [
      // Animal vs Comercial Plant-Based
      {
        id: 'chicken-vs-commercial-nuggets-1',
        category: 'proteins',
        traditional: {
          name: 'Pollo para Nuggets',
          brand: 'Local',
          price: 35.00,
          unit: '500g',
          pricePerUnit: 70.00
        },
        plantBased: {
          name: 'Nuggets Plant-Based',
          brand: 'Beyond Meat',
          price: 189.00,
          unit: '500g',
          pricePerUnit: 378.00,
          isCommercial: true
        },
        priceDifferencePercent: 440.0,
        availability: { traditional: true, plantBased: false },
        comparisonType: 'animal-vs-commercial'
      },
      // Animal vs Casero Plant-Based
      {
        id: 'chicken-vs-homemade-nuggets-1',
        category: 'proteins',
        traditional: {
          name: 'Pollo para Nuggets',
          brand: 'Local',
          price: 35.00,
          unit: '500g',
          pricePerUnit: 70.00
        },
        plantBased: {
          name: 'Nuggets Caseros de Lentejas',
          brand: 'Casero',
          price: 18.50,
          unit: '500g',
          pricePerUnit: 37.00,
          isCommercial: false,
          recipe: {
            id: 'lentil-nuggets-1',
            name: 'Nuggets de Lentejas Caseros',
            description: 'Nuggets saludables y económicos hechos con lentejas rojas',
            servings: 4,
            prepTime: '45 minutos',
            difficulty: 'easy',
            ingredients: [
              {
                name: 'Lentejas rojas',
                amount: 200,
                unit: 'g',
                pricePerUnit: 25.00,
                totalCost: 5.00,
                source: 'Mercado de Jamaica'
              },
              {
                name: 'Pan molido integral',
                amount: 100,
                unit: 'g',
                pricePerUnit: 30.00,
                totalCost: 3.00,
                source: 'Mercado local'
              },
              {
                name: 'Cebolla',
                amount: 1,
                unit: 'pieza',
                pricePerUnit: 3.00,
                totalCost: 3.00,
                source: 'Mercado de Jamaica'
              },
              {
                name: 'Ajo',
                amount: 3,
                unit: 'dientes',
                pricePerUnit: 1.00,
                totalCost: 3.00,
                source: 'Mercado de Jamaica'
              },
              {
                name: 'Especias (comino, pimentón)',
                amount: 1,
                unit: 'porción',
                pricePerUnit: 4.50,
                totalCost: 4.50,
                source: 'Mercado de especias'
              }
            ],
            instructions: [
              'Cocer las lentejas hasta que estén suaves (20 min)',
              'Sofreír cebolla y ajo hasta dorar',
              'Mezclar lentejas cocidas con sofrito y especias',
              'Formar nuggets y rebozar con pan molido',
              'Hornear a 180°C por 15-20 minutos'
            ],
            nutritionInfo: {
              protein: 18,
              carbs: 32,
              fat: 3,
              calories: 220
            }
          }
        },
        priceDifferencePercent: -47.1,
        availability: { traditional: true, plantBased: true },
        comparisonType: 'animal-vs-homemade'
      },
      // Comercial vs Casero Plant-Based
      {
        id: 'commercial-vs-homemade-burger-1',
        category: 'proteins',
        traditional: {
          name: 'Hamburguesa Plant-Based Comercial',
          brand: 'Beyond Burger',
          price: 89.00,
          unit: '2 piezas',
          pricePerUnit: 445.00
        },
        plantBased: {
          name: 'Hamburguesa Casera de Frijoles',
          brand: 'Casero',
          price: 22.00,
          unit: '2 piezas',
          pricePerUnit: 110.00,
          isCommercial: false,
          recipe: {
            id: 'bean-burger-1',
            name: 'Hamburguesa de Frijoles Negros',
            description: 'Hamburguesa nutritiva y económica con frijoles negros',
            servings: 4,
            prepTime: '30 minutos',
            difficulty: 'easy',
            ingredients: [
              {
                name: 'Frijoles negros cocidos',
                amount: 400,
                unit: 'g',
                pricePerUnit: 22.00,
                totalCost: 8.80,
                source: 'Central de Abastos'
              },
              {
                name: 'Avena en hojuelas',
                amount: 80,
                unit: 'g',
                pricePerUnit: 18.00,
                totalCost: 1.44,
                source: 'Mercado local'
              },
              {
                name: 'Cebolla morada',
                amount: 1,
                unit: 'pieza',
                pricePerUnit: 4.00,
                totalCost: 4.00,
                source: 'Central de Abastos'
              },
              {
                name: 'Zanahoria',
                amount: 1,
                unit: 'pieza',
                pricePerUnit: 2.50,
                totalCost: 2.50,
                source: 'Central de Abastos'
              },
              {
                name: 'Condimentos variados',
                amount: 1,
                unit: 'porción',
                pricePerUnit: 5.26,
                totalCost: 5.26,
                source: 'Mercado de especias'
              }
            ],
            instructions: [
              'Triturar los frijoles dejando algunos trozos',
              'Mezclar con avena, cebolla y zanahoria picadas',
              'Condimentar al gusto con sal, pimienta y especias',
              'Formar hamburguesas y refrigerar 15 minutos',
              'Cocinar en sartén con poco aceite, 4 min por lado'
            ],
            nutritionInfo: {
              protein: 15,
              carbs: 28,
              fat: 2,
              calories: 185
            }
          }
        },
        priceDifferencePercent: -75.3,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
      }
    ]
  },
  {
    id: 'central-abastos-1',
    name: 'Central de Abastos CDMX',
    location: 'Iztapalapa, CDMX',
    coordinates: [-99.087, 19.377],
    hasPromotion: true,
    promotionDetails: 'Precios mayoreo disponibles desde 5kg',
    storeType: 'wholesale',
    products: [
      // Lácteos: Animal vs Casero
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
      // Proteínas: Comercial vs Casero
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
      }
    ]
  }
];
