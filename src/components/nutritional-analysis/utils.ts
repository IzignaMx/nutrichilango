
import { NutritionInfo } from '@/data/types';

export const prepareNutritionData = (
  traditionalNutrition: NutritionInfo,
  plantBasedNutrition: NutritionInfo
) => {
  const nutritionData = [
    {
      nutrient: 'Proteína (g)',
      tradicional: traditionalNutrition.protein,
      plantBased: plantBasedNutrition.protein,
    },
    {
      nutrient: 'Carbohidratos (g)',
      tradicional: traditionalNutrition.carbs,
      plantBased: plantBasedNutrition.carbs,
    },
    {
      nutrient: 'Grasas (g)',
      tradicional: traditionalNutrition.fat,
      plantBased: plantBasedNutrition.fat,
    },
    {
      nutrient: 'Calorías',
      tradicional: traditionalNutrition.calories,
      plantBased: plantBasedNutrition.calories,
    }
  ];

  // Add minerals if available
  if (traditionalNutrition.calcium && plantBasedNutrition.calcium) {
    nutritionData.push({
      nutrient: 'Calcio (mg)',
      tradicional: traditionalNutrition.calcium,
      plantBased: plantBasedNutrition.calcium,
    });
  }

  if (traditionalNutrition.iron && plantBasedNutrition.iron) {
    nutritionData.push({
      nutrient: 'Hierro (mg)',
      tradicional: traditionalNutrition.iron,
      plantBased: plantBasedNutrition.iron,
    });
  }

  if (traditionalNutrition.fiber !== undefined && plantBasedNutrition.fiber !== undefined) {
    nutritionData.push({
      nutrient: 'Fibra (g)',
      tradicional: traditionalNutrition.fiber,
      plantBased: plantBasedNutrition.fiber,
    });
  }

  return nutritionData;
};

export const prepareRadarData = (
  traditionalNutrition: NutritionInfo,
  plantBasedNutrition: NutritionInfo
) => {
  return [
    {
      nutrient: 'Proteína',
      tradicional: (traditionalNutrition.protein / 25) * 100, // Normalized to 25g base
      plantBased: (plantBasedNutrition.protein / 25) * 100,
    },
    {
      nutrient: 'Carbohidratos',
      tradicional: (traditionalNutrition.carbs / 50) * 100, // Normalized to 50g base
      plantBased: (plantBasedNutrition.carbs / 50) * 100,
    },
    {
      nutrient: 'Grasas',
      tradicional: (traditionalNutrition.fat / 20) * 100, // Normalized to 20g base
      plantBased: (plantBasedNutrition.fat / 20) * 100,
    },
    {
      nutrient: 'Calorías',
      tradicional: (traditionalNutrition.calories / 300) * 100, // Normalized to 300kcal base
      plantBased: (plantBasedNutrition.calories / 300) * 100,
    }
  ];
};
