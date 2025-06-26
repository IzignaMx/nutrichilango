
import { Store } from '../../../types';
import { dairyProducts } from './dairy-products';
import { expandedDairyProducts } from './expanded-dairy';
import { proteinProducts } from './protein-products';
import { eggProducts } from './egg-products';
import { meatProducts } from './meat-products';
import { preparedDishes } from './prepared-dishes';

export const centralAbastos: Store = {
  id: 'central-abastos-1',
  name: 'Central de Abastos CDMX',
  location: 'Iztapalapa, CDMX',
  coordinates: [-99.087, 19.377],
  hasPromotion: true,
  promotionDetails: 'Precios mayoreo disponibles desde 5kg. Productos orgánicos certificados disponibles',
  storeType: 'wholesale',
  products: [
    ...dairyProducts,
    ...expandedDairyProducts,
    ...proteinProducts,
    ...eggProducts,
    ...meatProducts,
    ...preparedDishes
  ]
};
