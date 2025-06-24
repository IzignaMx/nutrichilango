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
      // Nuevas comparaciones "Animal vs Casero Plant-Based"
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
      },
      // Nuevas comparaciones "Animal vs Casero Plant-Based" para Central de Abastos
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
    ]
  }
];
