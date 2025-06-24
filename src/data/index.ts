
import { conventionalStores } from './stores/conventional';
import { naturistStores } from './stores/naturist';
import { organicStores } from './stores/organic';
import { vegetarianStores } from './stores/vegetarian';
import { veganStores } from './stores/vegan';
import { marketStores } from './stores/markets';

export type { Product, Store, Recipe, RecipeIngredient } from './types';
export { productCategories } from './categories';

export const storeData = [
  ...conventionalStores,
  ...naturistStores,
  ...organicStores,
  ...vegetarianStores,
  ...veganStores,
  ...marketStores
];
