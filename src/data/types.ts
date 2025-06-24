
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

export interface Product {
  id: string;
  category: string;
  traditional: {
    name: string;
    brand: string;
    price: number;
    unit: string;
    pricePerUnit: number;
  };
  plantBased: {
    name: string;
    brand: string;
    price: number;
    unit: string;
    pricePerUnit: number;
    isCommercial: boolean; // true para comercial, false para casero
    recipe?: Recipe; // Solo si es casero
  };
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
