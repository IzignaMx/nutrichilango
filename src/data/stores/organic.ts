
import { Store } from '../types';

export const organicStores: Store[] = [
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
  }
];
