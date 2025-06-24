
import { Store } from '../types';

export const veganStores: Store[] = [
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
          pricePerUnit: 250.00,
          isCommercial: true
        },
        priceDifferencePercent: 31.6,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 157.80,
          isCommercial: true
        },
        priceDifferencePercent: 61.3,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 725.00,
          isCommercial: true
        },
        priceDifferencePercent: 16.0,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 436.62,
          isCommercial: true
        },
        priceDifferencePercent: 82.4,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 237.50,
          isCommercial: true
        },
        priceDifferencePercent: 26.7,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 383.33,
          isCommercial: true
        },
        priceDifferencePercent: 29.2,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 700.00,
          isCommercial: true
        },
        priceDifferencePercent: 29.6,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 85.00,
          isCommercial: true
        },
        priceDifferencePercent: 88.9,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 325.00,
          isCommercial: true
        },
        priceDifferencePercent: 85.7,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 991.19,
          isCommercial: true
        },
        priceDifferencePercent: 21.6,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 378.00,
          isCommercial: true
        },
        priceDifferencePercent: 51.2,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 312.50,
          isCommercial: true
        },
        priceDifferencePercent: 31.6,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 130.00,
          isCommercial: true
        },
        priceDifferencePercent: 44.4,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 230.00,
          isCommercial: true
        },
        priceDifferencePercent: 53.3,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 242.86,
          isCommercial: true
        },
        priceDifferencePercent: 54.5,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 1125.00,
          isCommercial: true
        },
        priceDifferencePercent: 36.4,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
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
          pricePerUnit: 770.00,
          isCommercial: true
        },
        priceDifferencePercent: 35.1,
        availability: { traditional: false, plantBased: true },
        comparisonType: 'commercial-vs-homemade'
      }
    ]
  }
];
