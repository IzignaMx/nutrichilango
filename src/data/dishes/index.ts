import { DishComparison } from './types';
import dishesFromJson from './dishes.json';

export const dishesData: DishComparison[] = dishesFromJson as unknown as DishComparison[];
