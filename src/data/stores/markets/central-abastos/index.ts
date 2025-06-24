
import { Store } from '../../../types';
import { dairyProducts } from './dairy-products';
import { proteinProducts } from './protein-products';
import { eggProducts } from './egg-products';

export const centralAbastos: Store = {
  id: 'central-abastos-1',
  name: 'Central de Abastos CDMX',
  location: 'Iztapalapa, CDMX',
  coordinates: [-99.087, 19.377],
  hasPromotion: true,
  promotionDetails: 'Precios mayoreo disponibles desde 5kg',
  storeType: 'wholesale',
  products: [
    ...dairyProducts,
    ...proteinProducts,
    ...eggProducts
  ]
};
