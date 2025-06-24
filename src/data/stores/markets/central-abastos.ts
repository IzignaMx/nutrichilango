
import { Store } from '../../types';

export const centralAbastos: Store = {
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
};
