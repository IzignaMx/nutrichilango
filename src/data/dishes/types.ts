
export interface NutritionInfo {
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
  fiber?: number;
  calcium?: number;
  iron?: number;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  pricePerUnit: number;
  totalCost: number;
  source: string; // Donde se compra (mercado, tienda, etc.)
}

export interface TraditionalDish {
  name: string;
  estimatedPrice: number;
  servings: number;
  prepTime: string;
  nutritionInfo: NutritionInfo;
}

export interface VeganDish {
  name: string;
  description: string;
  estimatedPrice: number;
  servings: number;
  prepTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: Ingredient[];
  instructions: string[];
  nutritionInfo: NutritionInfo;
}

export interface DishComparison {
  id: string;
  category: 'mexican' | 'popular';
  traditional: TraditionalDish;
  veganVersion: VeganDish;
  priceDifferencePercent: number;
  healthScore: number; // 0-100
  healthBenefits: string[];
  environmentalImpact: {
    co2Reduction: number; // percentage
    waterSaving: number; // percentage
    landSaving: number; // percentage
  };
}
