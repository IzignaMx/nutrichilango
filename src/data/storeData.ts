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
  },
  {
    id: 'mr-tofu-1',
    name: 'Mr. Tofu Roma Norte',
    location: 'Roma Norte, CDMX',
    coordinates: [-99.165, 19.415],
    hasPromotion: true,
    promotionDetails: 'Descuento del 10% comprando 3 o más productos',
    storeType: 'vegan',
    products: [
      {
        id: 'tofu-varieties-1',
        category: 'proteins',
        traditional: {
          name: 'Tofu Natural Básico',
          brand: 'Mr. Tofu',
          price: 75.00,
          unit: '400g',
          pricePerUnit: 187.50
        },
        plantBased: {
          name: 'Tofu Ahumado Premium',
          brand: 'Mr. Tofu',
          price: 95.00,
          unit: '400g',
          pricePerUnit: 237.50
        },
        priceDifferencePercent: 26.7,
        availability: { traditional: false, plantBased: true }
      },
      {
        id: 'soy-chorizo-1',
        category: 'proteins',
        traditional: {
          name: 'Chorizo de Soya',
          brand: 'Mr. Tofu',
          price: 89.00,
          unit: '300g',
          pricePerUnit: 296.67
        },
        plantBased: {
          name: 'Chorizo Verde Especiado',
          brand: 'Mr. Tofu Gourmet',
          price: 115.00,
          unit: '300g',
          pricePerUnit: 383.33
        },
        priceDifferencePercent: 29.2,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'abasto-vegano-1',
    name: 'Abasto Vegano Doctores',
    location: 'Doctores, CDMX',
    coordinates: [-99.144, 19.421],
    hasPromotion: true,
    promotionDetails: 'Martes veganos 20% descuento en lácteos plant-based',
    storeType: 'vegan',
    products: [
      {
        id: 'vegan-cheese-varieties-1',
        category: 'dairy',
        traditional: {
          name: 'Queso Vegano Básico',
          brand: 'Abasto Verde',
          price: 135.00,
          unit: '250g',
          pricePerUnit: 540.00
        },
        plantBased: {
          name: 'Queso Vegano Artesanal',
          brand: 'Abasto Premium',
          price: 175.00,
          unit: '250g',
          pricePerUnit: 700.00
        },
        priceDifferencePercent: 29.6,
        availability: { traditional: false, plantBased: true }
      },
      {
        id: 'plant-milk-combo-1',
        category: 'dairy',
        traditional: {
          name: 'Leche de Avena',
          brand: 'Abasto Verde',
          price: 45.00,
          unit: '1L',
          pricePerUnit: 45.00
        },
        plantBased: {
          name: 'Leche de Macadamia Premium',
          brand: 'Abasto Premium',
          price: 85.00,
          unit: '1L',
          pricePerUnit: 85.00
        },
        priceDifferencePercent: 88.9,
        availability: { traditional: false, plantBased: true }
      },
      {
        id: 'vegan-snacks-1',
        category: 'snacks',
        traditional: {
          name: 'Galletas Veganas Básicas',
          brand: 'Abasto Verde',
          price: 35.00,
          unit: '200g',
          pricePerUnit: 175.00
        },
        plantBased: {
          name: 'Cookies Veganas Premium',
          brand: 'Abasto Gourmet',
          price: 65.00,
          unit: '200g',
          pricePerUnit: 325.00
        },
        priceDifferencePercent: 85.7,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'vegan-label-1',
    name: 'Vegan Label Condesa',
    location: 'Condesa, CDMX',
    coordinates: [-99.168, 19.405],
    hasPromotion: false,
    storeType: 'vegan',
    products: [
      {
        id: 'imported-vegan-meat-1',
        category: 'proteins',
        traditional: {
          name: 'Beyond Burger Original',
          brand: 'Beyond Meat',
          price: 185.00,
          unit: '2 piezas (227g)',
          pricePerUnit: 814.98
        },
        plantBased: {
          name: 'Impossible Burger',
          brand: 'Impossible Foods',
          price: 225.00,
          unit: '2 piezas (227g)',
          pricePerUnit: 991.19
        },
        priceDifferencePercent: 21.6,
        availability: { traditional: false, plantBased: true }
      },
      {
        id: 'vegan-ice-cream-1',
        category: 'dairy',
        traditional: {
          name: 'Helado Vegano Básico',
          brand: 'Vegan Label',
          price: 125.00,
          unit: '500ml',
          pricePerUnit: 250.00
        },
        plantBased: {
          name: 'Helado Ben & Jerry\'s Vegano',
          brand: 'Ben & Jerry\'s',
          price: 189.00,
          unit: '500ml',
          pricePerUnit: 378.00
        },
        priceDifferencePercent: 51.2,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'verde-vivo-1',
    name: 'Verde Vivo San Rafael',
    location: 'San Rafael, CDMX',
    coordinates: [-99.155, 19.434],
    hasPromotion: true,
    promotionDetails: 'Viernes verdes 15% en productos nacionales',
    storeType: 'vegan',
    products: [
      {
        id: 'mexican-vegan-chorizo-1',
        category: 'proteins',
        traditional: {
          name: 'Chorizo Vegano Mexicano',
          brand: 'Verde Vivo',
          price: 95.00,
          unit: '400g',
          pricePerUnit: 237.50
        },
        plantBased: {
          name: 'Chorizo Verde Oaxaqueño',
          brand: 'Verde Vivo Artesanal',
          price: 125.00,
          unit: '400g',
          pricePerUnit: 312.50
        },
        priceDifferencePercent: 31.6,
        availability: { traditional: false, plantBased: true }
      },
      {
        id: 'agua-fresca-concentrates-1',
        category: 'pantry',
        traditional: {
          name: 'Concentrado Jamaica',
          brand: 'Verde Vivo',
          price: 45.00,
          unit: '500ml',
          pricePerUnit: 90.00
        },
        plantBased: {
          name: 'Concentrado Hibisco Premium',
          brand: 'Verde Vivo Gourmet',
          price: 65.00,
          unit: '500ml',
          pricePerUnit: 130.00
        },
        priceDifferencePercent: 44.4,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'veggie-smiles-1',
    name: 'Veggie Smiles Narvarte',
    location: 'Narvarte, CDMX',
    coordinates: [-99.158, 19.391],
    hasPromotion: true,
    promotionDetails: 'Happy Hour vegano 4-7pm 25% descuento',
    storeType: 'vegan',
    products: [
      {
        id: 'vegan-tacos-meat-1',
        category: 'proteins',
        traditional: {
          name: 'Carne para Tacos Base Soya',
          brand: 'Veggie Smiles',
          price: 75.00,
          unit: '500g',
          pricePerUnit: 150.00
        },
        plantBased: {
          name: 'Carne de Pastor Vegana',
          brand: 'Veggie Smiles Premium',
          price: 115.00,
          unit: '500g',
          pricePerUnit: 230.00
        },
        priceDifferencePercent: 53.3,
        availability: { traditional: false, plantBased: true }
      },
      {
        id: 'mexican-vegan-mayo-1',
        category: 'pantry',
        traditional: {
          name: 'Mayonesa Vegana',
          brand: 'Veggie Smiles',
          price: 55.00,
          unit: '350g',
          pricePerUnit: 157.14
        },
        plantBased: {
          name: 'Mayo de Aguacate Gourmet',
          brand: 'Veggie Smiles Artesanal',
          price: 85.00,
          unit: '350g',
          pricePerUnit: 242.86
        },
        priceDifferencePercent: 54.5,
        availability: { traditional: false, plantBased: true }
      }
    ]
  },
  {
    id: 'plantae-1',
    name: 'Plantae Store Santa María',
    location: 'Santa María la Ribera, CDMX',
    coordinates: [-99.155, 19.446],
    hasPromotion: false,
    storeType: 'vegan',
    products: [
      {
        id: 'fermented-cashew-cheese-1',
        category: 'dairy',
        traditional: {
          name: 'Queso de Anacardo Fermentado',
          brand: 'Plantae',
          price: 165.00,
          unit: '200g',
          pricePerUnit: 825.00
        },
        plantBased: {
          name: 'Queso Azul Vegano Artesanal',
          brand: 'Plantae Gourmet',
          price: 225.00,
          unit: '200g',
          pricePerUnit: 1125.00
        },
        priceDifferencePercent: 36.4,
        availability: { traditional: false, plantBased: true }
      },
      {
        id: 'plant-protein-powder-1',
        category: 'proteins',
        traditional: {
          name: 'Proteína de Chícharo',
          brand: 'Plantae',
          price: 285.00,
          unit: '500g',
          pricePerUnit: 570.00
        },
        plantBased: {
          name: 'Proteína Multi-Plant Premium',
          brand: 'Plantae Pro',
          price: 385.00,
          unit: '500g',
          pricePerUnit: 770.00
        },
        priceDifferencePercent: 35.1,
        availability: { traditional: false, plantBased: true }
      }
    ]
  }
];
