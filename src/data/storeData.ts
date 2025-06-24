
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
      },
      {
        id: 'eggs-vs-just-1',
        category: 'eggs',
        traditional: {
          name: 'Huevos Blancos',
          brand: 'Bachoco',
          price: 42.00,
          unit: '18 piezas',
          pricePerUnit: 2.33
        },
        plantBased: {
          name: 'JUST Egg',
          brand: 'JUST',
          price: 124.50,
          unit: '355ml',
          pricePerUnit: 350.70
        },
        priceDifferencePercent: 196.4,
        availability: { traditional: true, plantBased: false }
      },
      {
        id: 'chips-vs-veggie-1',
        category: 'snacks',
        traditional: {
          name: 'Papas Fritas',
          brand: 'Sabritas',
          price: 18.50,
          unit: '45g',
          pricePerUnit: 411.11
        },
        plantBased: {
          name: 'Chips de Vegetales',
          brand: 'Garden of Eatin',
          price: 32.90,
          unit: '45g',
          pricePerUnit: 731.11
        },
        priceDifferencePercent: 77.8,
        availability: { traditional: true, plantBased: true }
      },
      {
        id: 'honey-vs-agave-1',
        category: 'pantry',
        traditional: {
          name: 'Miel de Abeja',
          brand: 'Carlota',
          price: 89.90,
          unit: '500ml',
          pricePerUnit: 179.80
        },
        plantBased: {
          name: 'Néctar de Agave',
          brand: 'Wholesome',
          price: 95.50,
          unit: '500ml',
          pricePerUnit: 191.00
        },
        priceDifferencePercent: 6.2,
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
      },
      {
        id: 'milk-vs-almond-1',
        category: 'dairy',
        traditional: {
          name: 'Leche Entera',
          brand: 'Great Value',
          price: 23.90,
          unit: '1L',
          pricePerUnit: 23.90
        },
        plantBased: {
          name: 'Leche de Almendra',
          brand: 'Blue Diamond',
          price: 49.90,
          unit: '1L',
          pricePerUnit: 49.90
        },
        priceDifferencePercent: 108.8,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'chedraui-1',
    name: 'Chedraui Selecto Polanco',
    location: 'Polanco, CDMX',
    coordinates: [-99.192, 19.434],
    hasPromotion: true,
    promotionDetails: '2x1 en leches vegetales',
    products: [
      {
        id: 'beef-vs-beyond-1',
        category: 'proteins',
        traditional: {
          name: 'Carne de Res Premium',
          brand: 'SuKarne',
          price: 189.00,
          unit: '500g',
          pricePerUnit: 378.00
        },
        plantBased: {
          name: 'Beyond Meat',
          brand: 'Beyond',
          price: 249.90,
          unit: '500g',
          pricePerUnit: 499.80
        },
        priceDifferencePercent: 32.2,
        availability: { traditional: true, plantBased: true }
      },
      {
        id: 'milk-vs-oat-1',
        category: 'dairy',
        traditional: {
          name: 'Leche Entera',
          brand: 'Alpura',
          price: 27.50,
          unit: '1L',
          pricePerUnit: 27.50
        },
        plantBased: {
          name: 'Leche de Avena',
          brand: 'Oatly',
          price: 54.90,
          unit: '1L',
          pricePerUnit: 54.90
        },
        priceDifferencePercent: 99.6,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'superama-1',
    name: 'Superama Satélite',
    location: 'Ciudad Satélite, EdoMex',
    coordinates: [-99.240, 19.508],
    hasPromotion: false,
    products: [
      {
        id: 'fish-vs-plant-1',
        category: 'proteins',
        traditional: {
          name: 'Filete de Pescado',
          brand: 'Pescanova',
          price: 159.90,
          unit: '500g',
          pricePerUnit: 319.80
        },
        plantBased: {
          name: 'Filete Plant-Based',
          brand: 'Gardein',
          price: 189.50,
          unit: '500g',
          pricePerUnit: 379.00
        },
        priceDifferencePercent: 18.5,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'heb-1',
    name: 'HEB Satelite',
    location: 'Satélite, EdoMex',
    coordinates: [-99.238, 19.515],
    hasPromotion: true,
    promotionDetails: '20% descuento productos vegetarianos',
    products: [
      {
        id: 'yogurt-vs-coconut-1',
        category: 'dairy',
        traditional: {
          name: 'Yogurt Natural',
          brand: 'Danone',
          price: 32.50,
          unit: '500g',
          pricePerUnit: 65.00
        },
        plantBased: {
          name: 'Yogurt de Coco',
          brand: 'So Delicious',
          price: 58.90,
          unit: '500g',
          pricePerUnit: 117.80
        },
        priceDifferencePercent: 81.2,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'city-market-1',
    name: 'City Market Reforma',
    location: 'Reforma, CDMX',
    coordinates: [-99.164, 19.425],
    hasPromotion: false,
    products: [
      {
        id: 'cheese-vs-vegan-1',
        category: 'dairy',
        traditional: {
          name: 'Queso Oaxaca',
          brand: 'Los Altos',
          price: 85.90,
          unit: '400g',
          pricePerUnit: 214.75
        },
        plantBased: {
          name: 'Queso Vegano',
          brand: 'Violife',
          price: 139.90,
          unit: '400g',
          pricePerUnit: 349.75
        },
        priceDifferencePercent: 62.9,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'costco-1',
    name: 'Costco Santa Fe',
    location: 'Santa Fe, CDMX',
    coordinates: [-99.267, 19.372],
    hasPromotion: true,
    promotionDetails: 'Precio especial miembros Plus',
    products: [
      {
        id: 'ground-turkey-vs-plant-1',
        category: 'proteins',
        traditional: {
          name: 'Pavo Molido',
          brand: 'Foster Farms',
          price: 129.90,
          unit: '1kg',
          pricePerUnit: 129.90
        },
        plantBased: {
          name: 'Proteína Vegetal',
          brand: 'Lightlife',
          price: 189.90,
          unit: '1kg',
          pricePerUnit: 189.90
        },
        priceDifferencePercent: 46.2,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'sams-1',
    name: "Sam's Club Perisur",
    location: 'Perisur, CDMX',
    coordinates: [-99.187, 19.300],
    hasPromotion: false,
    products: [
      {
        id: 'pork-vs-seitan-1',
        category: 'proteins',
        traditional: {
          name: 'Lomo de Cerdo',
          brand: 'Kir',
          price: 169.90,
          unit: '1kg',
          pricePerUnit: 169.90
        },
        plantBased: {
          name: 'Seitán Artesanal',
          brand: 'Upton',
          price: 219.90,
          unit: '1kg',
          pricePerUnit: 219.90
        },
        priceDifferencePercent: 29.4,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'liverpool-1',
    name: 'Liverpool Gourmet Perisur',
    location: 'Perisur, CDMX',
    coordinates: [-99.189, 19.298],
    hasPromotion: true,
    promotionDetails: 'MSI en productos gourmet',
    products: [
      {
        id: 'butter-vs-vegan-1',
        category: 'dairy',
        traditional: {
          name: 'Mantequilla',
          brand: 'Lala',
          price: 45.90,
          unit: '250g',
          pricePerUnit: 183.60
        },
        plantBased: {
          name: 'Mantequilla Vegana',
          brand: 'Earth Balance',
          price: 79.90,
          unit: '250g',
          pricePerUnit: 319.60
        },
        priceDifferencePercent: 74.1,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'la-comer-1',
    name: 'La Comer Lindavista',
    location: 'Lindavista, CDMX',
    coordinates: [-99.127, 19.486],
    hasPromotion: false,
    products: [
      {
        id: 'cream-vs-coconut-1',
        category: 'dairy',
        traditional: {
          name: 'Crema para Batir',
          brand: 'Nestlé',
          price: 38.90,
          unit: '250ml',
          pricePerUnit: 155.60
        },
        plantBased: {
          name: 'Crema de Coco',
          brand: 'Thai Kitchen',
          price: 49.90,
          unit: '250ml',
          pricePerUnit: 199.60
        },
        priceDifferencePercent: 28.3,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'comercial-mexicana-1',
    name: 'Comercial Mexicana Roma',
    location: 'Roma Norte, CDMX',
    coordinates: [-99.162, 19.414],
    hasPromotion: true,
    promotionDetails: 'Martes de ofertas veganas',
    products: [
      {
        id: 'sausage-vs-plant-1',
        category: 'proteins',
        traditional: {
          name: 'Chorizo Mexicano',
          brand: 'FUD',
          price: 65.90,
          unit: '500g',
          pricePerUnit: 131.80
        },
        plantBased: {
          name: 'Chorizo Vegetal',
          brand: 'Field Roast',
          price: 89.90,
          unit: '500g',
          pricePerUnit: 179.80
        },
        priceDifferencePercent: 36.4,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'mega-1',
    name: 'Mega Comercial Xochimilco',
    location: 'Xochimilco, CDMX',
    coordinates: [-99.104, 19.265],
    hasPromotion: false,
    products: [
      {
        id: 'ice-cream-vs-vegan-1',
        category: 'snacks',
        traditional: {
          name: 'Helado de Vainilla',
          brand: 'Häagen-Dazs',
          price: 129.90,
          unit: '500ml',
          pricePerUnit: 259.80
        },
        plantBased: {
          name: 'Helado Vegano',
          brand: 'Ben & Jerry',
          price: 159.90,
          unit: '500ml',
          pricePerUnit: 319.80
        },
        priceDifferencePercent: 23.1,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'aurrera-1',
    name: 'Bodega Aurrera Iztapalapa',
    location: 'Iztapalapa, CDMX',
    coordinates: [-99.055, 19.351],
    hasPromotion: true,
    promotionDetails: 'Precios bajos todos los días',
    products: [
      {
        id: 'ham-vs-plant-1',
        category: 'proteins',
        traditional: {
          name: 'Jamón de Pavo',
          brand: 'FUD',
          price: 89.90,
          unit: '500g',
          pricePerUnit: 179.80
        },
        plantBased: {
          name: 'Jamón Vegetal',
          brand: 'Tofurky',
          price: 119.90,
          unit: '500g',
          pricePerUnit: 239.80
        },
        priceDifferencePercent: 33.4,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'fresko-1',
    name: 'Fresko Condesa',
    location: 'Condesa, CDMX',
    coordinates: [-99.171, 19.408],
    hasPromotion: false,
    products: [
      {
        id: 'mayo-vs-vegan-1',
        category: 'pantry',
        traditional: {
          name: 'Mayonesa',
          brand: 'McCormick',
          price: 42.90,
          unit: '400g',
          pricePerUnit: 107.25
        },
        plantBased: {
          name: 'Mayonesa Vegana',
          brand: 'Just Mayo',
          price: 59.90,
          unit: '400g',
          pricePerUnit: 149.75
        },
        priceDifferencePercent: 39.6,
        availability: { traditional: true, plantBased: true }
      }
    ]
  },
  {
    id: 'sumesa-1',
    name: 'Sumesa Coyoacán',
    location: 'Coyoacán, CDMX',
    coordinates: [-99.161, 19.349],
    hasPromotion: true,
    promotionDetails: '3x2 en productos orgánicos',
    products: [
      {
        id: 'cookies-vs-vegan-1',
        category: 'snacks',
        traditional: {
          name: 'Galletas de Chocolate',
          brand: 'Gamesa',
          price: 24.90,
          unit: '400g',
          pricePerUnit: 62.25
        },
        plantBased: {
          name: 'Galletas Veganas',
          brand: 'Enjoy Life',
          price: 45.90,
          unit: '400g',
          pricePerUnit: 114.75
        },
        priceDifferencePercent: 84.3,
        availability: { traditional: true, plantBased: true }
      }
    ]
  }
];
