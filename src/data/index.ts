import conventionalStores from './stores/conventional.json';
import naturistStores from './stores/naturist.json';
import organicStores from './stores/organic.json';
import vegetarianStores from './stores/vegetarian.json';
import veganStores from './stores/vegan.json';
import marketStores from './stores/markets.json';

// Type casting for structured completion
import { Store } from './types';

export type { Product, Store, Recipe, RecipeIngredient } from './types';
export { productCategories } from './categories';

export const storeData: Store[] = [
  ...conventionalStores as Store[],
  ...naturistStores as Store[],
  ...organicStores as Store[],
  ...vegetarianStores as Store[],
  ...veganStores as Store[],
  ...marketStores as Store[]
];
