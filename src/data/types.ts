export interface Recipe {
  id: string;
  name: string;
  description: string;
  servings: number;
  prepTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: RecipeIngredient[];
  instructions: string[];
  nutritionInfo?: {
    protein: number;
    carbs: number;
    fat: number;
    calories: number;
  };
}

export interface RecipeIngredient {
  name: string;
  amount: number;
  unit: string;
  pricePerUnit: number;
  totalCost: number;
  source: string; // Donde se compra (mercado, central de abastos, etc.)
}

export interface NutritionInfo {
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
  sugar: number;
  calcium?: number;
  iron?: number;
  fiber?: number;
}

export interface ProductVariant {
  name: string;
  brand: string;
  price: number;
  unit: string;
  pricePerUnit: number;
  nutritionInfo?: NutritionInfo;
  isCommercial?: boolean;
  recipe?: Recipe;
  url?: string; // Add url if it's used in ProductSection
  tags?: string[]; // Add tags if used
}

export interface Product {
  id: string;
  category: string;
  traditional: ProductVariant;
  plantBased: ProductVariant;
  priceDifferencePercent: number;
  availability: {
    traditional: boolean;
    plantBased: boolean;
  };
  comparisonType: 'animal-vs-commercial' | 'animal-vs-homemade' | 'commercial-vs-homemade';
}

export interface Store {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number];
  hasPromotion: boolean;
  promotionDetails?: string;
  storeType: 'conventional' | 'naturist' | 'vegetarian' | 'vegan' | 'organic' | 'market' | 'wholesale';
  products: Product[];
}

// Agregar nueva categoría
export type ProductCategory = 'proteins' | 'dairy' | 'eggs' | 'snacks' | 'pantry' | 'prepared-dishes';

export interface OptimizedComparison extends Product {
  storeName: string;
  storeLocation: string;
  hasPromotion: boolean;
  promotionDetails?: string;
  bestTraditionalStore?: string;
  bestPlantBasedStore?: string;
}
