
import { Store } from '../../types';

export const mercadoJamaica: Store = {
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
    {
      id: 'beef-vs-homemade-lentil-meat-1',
      category: 'proteins',
      traditional: {
        name: 'Carne Molida de Res',
        brand: 'Local',
        price: 55.00,
        unit: '500g',
        pricePerUnit: 110.00
      },
      plantBased: {
        name: 'Carne Vegetal Casera de Lentejas',
        brand: 'Casero',
        price: 24.00,
        unit: '500g',
        pricePerUnit: 48.00,
        isCommercial: false,
        recipe: {
          id: 'lentil-meat-1',
          name: 'Carne Vegetal de Lentejas y Champiñones',
          description: 'Sustituto de carne con textura y sabor similar, perfecto para tacos y guisados',
          servings: 6,
          prepTime: '40 minutos',
          difficulty: 'easy',
          ingredients: [
            {
              name: 'Lentejas pardinas cocidas',
              amount: 300,
              unit: 'g',
              pricePerUnit: 28.00,
              totalCost: 8.40,
              source: 'Central de Abastos'
            },
            {
              name: 'Champiñones',
              amount: 200,
              unit: 'g',
              pricePerUnit: 45.00,
              totalCost: 9.00,
              source: 'Mercado de Jamaica'
            },
            {
              name: 'Cebolla blanca',
              amount: 1,
              unit: 'pieza',
              pricePerUnit: 3.50,
              totalCost: 3.50,
              source: 'Central de Abastos'
            },
            {
              name: 'Salsa de soya',
              amount: 30,
              unit: 'ml',
              pricePerUnit: 60.00,
              totalCost: 1.80,
              source: 'Mercado local'
            },
            {
              name: 'Aceite de oliva',
              amount: 15,
              unit: 'ml',
              pricePerUnit: 80.00,
              totalCost: 1.20,
              source: 'Mercado local'
            }
          ],
          instructions: [
            'Picar finamente los champiñones y la cebolla',
            'Sofreír la cebolla hasta que esté transparente',
            'Agregar champiñones y cocinar hasta evaporar el agua',
            'Triturar las lentejas dejando textura gruesa',
            'Mezclar todo con salsa de soya y cocinar 5 minutos más'
          ],
          nutritionInfo: {
            protein: 16,
            carbs: 24,
            fat: 4,
            calories: 185
          }
        }
      },
      priceDifferencePercent: -56.4,
      availability: { traditional: true, plantBased: true },
      comparisonType: 'animal-vs-homemade'
    },
    {
      id: 'pork-vs-homemade-mushroom-chorizo-1',
      category: 'proteins',
      traditional: {
        name: 'Chorizo de Cerdo',
        brand: 'Local',
        price: 48.00,
        unit: '400g',
        pricePerUnit: 120.00
      },
      plantBased: {
        name: 'Chorizo Vegetal Casero',
        brand: 'Casero',
        price: 32.00,
        unit: '400g',
        pricePerUnit: 80.00,
        isCommercial: false,
        recipe: {
          id: 'mushroom-chorizo-1',
          name: 'Chorizo Vegetal de Champiñones',
          description: 'Chorizo plant-based con el sabor ahumado tradicional',
          servings: 5,
          prepTime: '35 minutos',
          difficulty: 'medium',
          ingredients: [
            {
              name: 'Champiñones portobello',
              amount: 300,
              unit: 'g',
              pricePerUnit: 65.00,
              totalCost: 19.50,
              source: 'Mercado de Jamaica'
            },
            {
              name: 'Frijoles bayos cocidos',
              amount: 150,
              unit: 'g',
              pricePerUnit: 24.00,
              totalCost: 3.60,
              source: 'Central de Abastos'
            },
            {
              name: 'Chile chipotle',
              amount: 2,
              unit: 'piezas',
              pricePerUnit: 8.00,
              totalCost: 2.00,
              source: 'Mercado de especias'
            },
            {
              name: 'Pimentón dulce',
              amount: 10,
              unit: 'g',
              pricePerUnit: 120.00,
              totalCost: 1.20,
              source: 'Mercado de especias'
            },
            {
              name: 'Ajo en polvo',
              amount: 5,
              unit: 'g',
              pricePerUnit: 80.00,
              totalCost: 0.40,
              source: 'Mercado de especias'
            },
            {
              name: 'Vinagre de manzana',
              amount: 15,
              unit: 'ml',
              pricePerUnit: 35.00,
              totalCost: 0.53,
              source: 'Mercado local'
            },
            {
              name: 'Aceite de girasol',
              amount: 20,
              unit: 'ml',
              pricePerUnit: 25.00,
              totalCost: 0.50,
              source: 'Central de Abastos'
            }
          ],
          instructions: [
            'Picar finamente los champiñones',
            'Remojar el chile chipotle y licuar con un poco de agua',
            'Sofreír los champiñones hasta dorar',
            'Agregar frijoles triturados y mezclar',
            'Añadir especias, chipotle y vinagre',
            'Cocinar a fuego medio 10 minutos removiendo constantemente'
          ],
          nutritionInfo: {
            protein: 12,
            carbs: 18,
            fat: 6,
            calories: 165
          }
        }
      },
      priceDifferencePercent: -33.3,
      availability: { traditional: true, plantBased: true },
      comparisonType: 'animal-vs-homemade'
    },
    {
      id: 'fish-vs-homemade-mushroom-tuna-1',
      category: 'proteins',
      traditional: {
        name: 'Atún en Lata',
        brand: 'Local',
        price: 28.00,
        unit: '140g',
        pricePerUnit: 200.00
      },
      plantBased: {
        name: 'Atún Vegetal Casero',
        brand: 'Casero',
        price: 15.50,
        unit: '140g',
        pricePerUnit: 110.71,
        isCommercial: false,
        recipe: {
          id: 'mushroom-tuna-1',
          name: 'Atún Vegetal de Corazones de Alcachofa',
          description: 'Sustituto de atún perfecto para ensaladas y sándwiches',
          servings: 3,
          prepTime: '20 minutos',
          difficulty: 'easy',
          ingredients: [
            {
              name: 'Corazones de alcachofa en conserva',
              amount: 200,
              unit: 'g',
              pricePerUnit: 45.00,
              totalCost: 9.00,
              source: 'Mercado local'
            },
            {
              name: 'Algas nori',
              amount: 2,
              unit: 'hojas',
              pricePerUnit: 15.00,
              totalCost: 3.00,
              source: 'Tienda naturista'
            },
            {
              name: 'Mayonesa vegana',
              amount: 30,
              unit: 'g',
              pricePerUnit: 85.00,
              totalCost: 2.55,
              source: 'Tienda vegana'
            },
            {
              name: 'Limón',
              amount: 0.5,
              unit: 'pieza',
              pricePerUnit: 2.00,
              totalCost: 1.00,
              source: 'Central de Abastos'
            },
            {
              name: 'Sal y pimienta',
              amount: 1,
              unit: 'pizca',
              pricePerUnit: 0.50,
              totalCost: 0.50,
              source: 'Despensa'
            }
          ],
          instructions: [
            'Escurrir y desmenuzar los corazones de alcachofa',
            'Cortar finamente las algas nori',
            'Mezclar alcachofas con algas para dar sabor a mar',
            'Agregar mayonesa vegana y jugo de limón',
            'Sazonar con sal y pimienta al gusto',
            'Refrigerar 30 minutos antes de servir'
          ],
          nutritionInfo: {
            protein: 8,
            carbs: 12,
            fat: 7,
            calories: 135
          }
        }
      },
      priceDifferencePercent: -44.6,
      availability: { traditional: true, plantBased: true },
      comparisonType: 'animal-vs-homemade'
    },
    // Commercial vs Homemade Burger
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
};
