
import { Store } from '../types';

export const vegetarianStores: Store[] = [
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
  }
];
