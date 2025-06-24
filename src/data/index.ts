
import { conventionalStores } from './stores/conventional';
import { naturistStores } from './stores/naturist';
import { organicStores } from './stores/organic';
import { vegetarianStores } from './stores/vegetarian';
import { veganStores } from './stores/vegan';

export type { Product, Store } from './types';
export { productCategories } from './categories';

export const storeData = [
  ...conventionalStores,
  ...naturistStores,
  ...organicStores,
  ...vegetarianStores,
  ...veganStores
];
