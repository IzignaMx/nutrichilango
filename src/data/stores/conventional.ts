
import { Store } from '../types';

export const conventionalStores: Store[] = [
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
  }
];
