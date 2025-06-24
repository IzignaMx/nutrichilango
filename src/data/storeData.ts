export interface Product {
  id: string;
  category: string;
  traditional: {
    name: string;
    brand: string;
    price: number;
    unit: string;
    pricePerUnit: number;
  };
  plantBased: {
    name: string;
    brand: string;
    price: number;
    unit: string;
    pricePerUnit: number;
  };
  priceDifferencePercent: number;
  availability: {
    traditional: boolean;
    plantBased: boolean;
  };
}

export interface Store {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number];
  hasPromotion: boolean;
  promotionDetails?: string;
  storeType: 'conventional' | 'naturist' | 'vegetarian' | 'vegan' | 'organic';
  products: Product[];
}

export const productCategories = [
  { id: 'proteins', name: 'Proteínas' },
  { id: 'dairy', name: 'Lácteos' },
  { id: 'eggs', name: 'Huevos y Sustitutos' },
  { id: 'snacks', name: 'Snacks' },
  { id: 'pantry', name: 'Despensa' }
];

export const storeData: Store[] = [
  {
    id: 'soriana-1',
    name: 'Soriana Hiper Santa Fe',
    location: 'Santa Fe, CDMX',
    coordinates: [-99.259, 19.359],
    hasPromotion: true,
    promotionDetails: '15% descuento en productos plant-based',
    storeType: 'conventional',
    products: [
      {
        id: 'beef-vs-tofu-1',
        category: 'proteins',
        traditional: {
          name: 'Carne de Res Molida',
          brand: 'SuKarne',
          price: 149.50,
          unit: '500g',
          pricePerUnit: 299.00
        },
        plantBased: {
          name: 'Carne Plant-Based',
          brand: 'NotCo',
          price: 189.90,
          unit: '500g',
          pricePerUnit: 379.80
        },
        priceDifferencePercent: 27.0,
        availability: { traditional: true, plantBased: true }
      },
      {
        id: 'milk-vs-soy-1',
        category: 'dairy',
        traditional: {
          name: 'Leche Entera',
          brand: 'Lala',
          price: 25.50,
          unit: '1L',
          pricePerUnit: 25.50
        },
        plantBased: {
          name: 'Leche de Soya',
          brand: 'Silk',
          price: 42.90,
          unit: '1L',
          pricePerUnit: 42.90
        },
        priceDifferencePercent: 68.2,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'walmart-1',
    name: 'Walmart Supercenter Periférico',
    location: 'Periférico Sur, CDMX',
    coordinates: [-99.191, 19.302],
    hasPromotion: false,
    storeType: 'conventional',
    products: [
      {
        id: 'chicken-vs-tempeh-1',
        category: 'proteins',
        traditional: {
          name: 'Pechuga de Pollo',
          brand: 'Tyson',
          price: 89.90,
          unit: '500g',
          pricePerUnit: 179.80
        },
        plantBased: {
          name: 'Tempeh Natural',
          brand: 'Lightlife',
          price: 145.00,
          unit: '500g',
          pricePerUnit: 290.00
        },
        priceDifferencePercent: 61.3,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'super-naturista-1',
    name: 'Super Naturista Polanco',
    location: 'Polanco, CDMX',
    coordinates: [-99.196, 19.433],
    hasPromotion: true,
    promotionDetails: '20% descuento en productos orgánicos certificados',
    storeType: 'naturist',
    products: [
      {
        id: 'tofu-vs-seitan-1',
        category: 'proteins',
        traditional: {
          name: 'Tofu Orgánico',
          brand: 'Nasoya',
          price: 89.90,
          unit: '400g',
          pricePerUnit: 224.75
        },
        plantBased: {
          name: 'Seitán Artesanal',
          brand: 'Verde Vida',
          price: 95.00,
          unit: '400g',
          pricePerUnit: 237.50
        },
        priceDifferencePercent: 5.7,
        availability: { traditional: false, plantBased: true }
      },
      {
        id: 'almond-milk-1',
        category: 'dairy',
        traditional: {
          name: 'Leche de Almendra Sin Azúcar',
          brand: 'Blue Diamond',
          price: 52.90,
          unit: '1L',
          pricePerUnit: 52.90
        },
        plantBased: {
          name: 'Leche de Almendra Orgánica',
          brand: 'Natura',
          price: 68.90,
          unit: '1L',
          pricePerUnit: 68.90
        },
        priceDifferencePercent: 30.2,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'madre-tierra-1',
    name: 'Madre Tierra Coyoacán',
    location: 'Coyoacán, CDMX',
    coordinates: [-99.162, 19.346],
    hasPromotion: false,
    storeType: 'organic',
    products: [
      {
        id: 'quinoa-vs-legumes-1',
        category: 'proteins',
        traditional: {
          name: 'Quinoa Orgánica',
          brand: 'Madre Tierra',
          price: 125.00,
          unit: '500g',
          pricePerUnit: 250.00
        },
        plantBased: {
          name: 'Mix de Leguminosas Orgánicas',
          brand: 'Madre Tierra',
          price: 85.00,
          unit: '500g',
          pricePerUnit: 170.00
        },
        priceDifferencePercent: -32.0,
        availability: { traditional: false, plantBased: true }
      },
      {
        id: 'coconut-milk-1',
        category: 'dairy',
        traditional: {
          name: 'Leche de Coco Natural',
          brand: 'Thai Kitchen',
          price: 45.90,
          unit: '400ml',
          pricePerUnit: 114.75
        },
        plantBased: {
          name: 'Leche de Coco Orgánica',
          brand: 'Natura Bio',
          price: 59.90,
          unit: '400ml',
          pricePerUnit: 149.75
        },
        priceDifferencePercent: 30.5,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'la-esquina-vegetariana-1',
    name: 'La Esquina Vegetariana Roma Norte',
    location: 'Roma Norte, CDMX',
    coordinates: [-99.162, 19.412],
    hasPromotion: true,
    promotionDetails: 'Miércoles veganos 2x1 en proteínas',
    storeType: 'vegetarian',
    products: [
      {
        id: 'tempeh-vs-jackfruit-1',
        category: 'proteins',
        traditional: {
          name: 'Tempeh de Soya',
          brand: 'Verde Vida',
          price: 79.90,
          unit: '300g',
          pricePerUnit: 266.33
        },
        plantBased: {
          name: 'Jackfruit en Salmuera',
          brand: 'The Jackfruit Company',
          price: 89.90,
          unit: '300g',
          pricePerUnit: 299.67
        },
        priceDifferencePercent: 12.5,
        availability: { traditional: false, plantBased: true }
      },
      {
        id: 'cashew-cheese-1',
        category: 'dairy',
        traditional: {
          name: 'Queso de Anacardo Natural',
          brand: 'Veggie Cheese',
          price: 145.00,
          unit: '200g',
          pricePerUnit: 725.00
        },
        plantBased: {
          name: 'Queso de Anacardo Premium',
          brand: 'Artisan Vegan',
          price: 165.00,
          unit: '200g',
          pricePerUnit: 825.00
        },
        priceDifferencePercent: 13.8,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'por-amor-1',
    name: 'Por Amor Condesa',
    location: 'Condesa, CDMX',
    coordinates: [-99.171, 19.408],
    hasPromotion: true,
    promotionDetails: 'Descuentos especiales para miembros veganos',
    storeType: 'vegan',
    products: [
      {
        id: 'vegan-meat-1',
        category: 'proteins',
        traditional: {
          name: 'Carne Vegana Base Soya',
          brand: 'Por Amor',
          price: 95.00,
          unit: '500g',
          pricePerUnit: 190.00
        },
        plantBased: {
          name: 'Carne Vegana Premium Mix',
          brand: 'Por Amor Gourmet',
          price: 125.00,
          unit: '500g',
          pricePerUnit: 250.00
        },
        priceDifferencePercent: 31.6,
        availability: { traditional: false, plantBased: true }
      },
      {
        id: 'vegan-yogurt-1',
        category: 'dairy',
        traditional: {
          name: 'Yogurt de Soya Natural',
          brand: 'Silk',
          price: 48.90,
          unit: '500g',
          pricePerUnit: 97.80
        },
        plantBased: {
          name: 'Yogurt de Coco Probiótico',
          brand: 'CocoYo',
          price: 78.90,
          unit: '500g',
          pricePerUnit: 157.80
        },
        priceDifferencePercent: 61.3,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'green-corner-1',
    name: 'Green Corner Market Polanco',
    location: 'Polanco, CDMX',
    coordinates: [-99.191, 19.431],
    hasPromotion: false,
    storeType: 'vegan',
    products: [
      {
        id: 'nutritional-yeast-1',
        category: 'pantry',
        traditional: {
          name: 'Levadura Nutricional Básica',
          brand: 'Bragg',
          price: 125.00,
          unit: '200g',
          pricePerUnit: 625.00
        },
        plantBased: {
          name: 'Levadura Nutricional Premium',
          brand: 'Green Corner',
          price: 145.00,
          unit: '200g',
          pricePerUnit: 725.00
        },
        priceDifferencePercent: 16.0,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'forever-vegano-1',
    name: 'Forever Vegano San Ángel',
    location: 'San Ángel, CDMX',
    coordinates: [-99.189, 19.348],
    hasPromotion: true,
    promotionDetails: 'Lunes sin carne 15% descuento',
    storeType: 'vegan',
    products: [
      {
        id: 'vegan-eggs-1',
        category: 'eggs',
        traditional: {
          name: 'Sustituto de Huevo Básico',
          brand: 'Ener-G',
          price: 85.00,
          unit: '450g',
          pricePerUnit: 188.89
        },
        plantBased: {
          name: 'JUST Egg Líquido',
          brand: 'JUST',
          price: 155.00,
          unit: '355ml',
          pricePerUnit: 436.62
        },
        priceDifferencePercent: 82.4,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'organico-nacional-1',
    name: 'Orgánico Nacional Del Valle',
    location: 'Del Valle, CDMX',
    coordinates: [-99.167, 19.376],
    hasPromotion: true,
    promotionDetails: 'Certificación orgánica garantizada',
    storeType: 'organic',
    products: [
      {
        id: 'organic-beans-1',
        category: 'proteins',
        traditional: {
          name: 'Frijoles Negros Orgánicos',
          brand: 'Orgánico Nacional',
          price: 45.00,
          unit: '500g',
          pricePerUnit: 90.00
        },
        plantBased: {
          name: 'Hamburguesas de Frijol Orgánico',
          brand: 'Orgánico Nacional',
          price: 85.00,
          unit: '4 piezas (400g)',
          pricePerUnit: 212.50
        },
        priceDifferencePercent: 88.9,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'the-green-spot-1',
    name: 'The Green Spot Doctores',
    location: 'Doctores, CDMX',
    coordinates: [-99.143, 19.412],
    hasPromotion: false,
    storeType: 'naturist',
    products: [
      {
        id: 'hemp-seeds-1',
        category: 'proteins',
        traditional: {
          name: 'Semillas de Hemp',
          brand: 'Manitoba Harvest',
          price: 185.00,
          unit: '250g',
          pricePerUnit: 740.00
        },
        plantBased: {
          name: 'Proteína de Hemp en Polvo',
          brand: 'Green Spot',
          price: 295.00,
          unit: '250g',
          pricePerUnit: 1180.00
        },
        priceDifferencePercent: 59.5,
        availability: { traditional: false, plantBased: true }
      }
    ]
  }
];
