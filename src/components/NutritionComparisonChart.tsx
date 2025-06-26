
import React from 'react';
import { Product } from '@/data/types';
import NutritionalBarChart from './nutritional-analysis/NutritionalBarChart';
import NutritionalRadarChart from './nutritional-analysis/NutritionalRadarChart';
import NutritionalAnalysisSummary from './nutritional-analysis/NutritionalAnalysisSummary';
import { prepareNutritionData, prepareRadarData } from './nutritional-analysis/utils';

interface NutritionComparisonChartProps {
  product: Product;
}

const NutritionComparisonChart: React.FC<NutritionComparisonChartProps> = ({ product }) => {
  // If no nutritional data, don't show the component
  if (!product.traditional.nutritionInfo || !product.plantBased.nutritionInfo) {
    return null;
  }

  const traditionalNutrition = product.traditional.nutritionInfo;
  const plantBasedNutrition = product.plantBased.nutritionInfo;

  const nutritionData = prepareNutritionData(traditionalNutrition, plantBasedNutrition);
  const radarData = prepareRadarData(traditionalNutrition, plantBasedNutrition);

  return (
    <div className="space-y-6">
      <NutritionalBarChart nutritionData={nutritionData} />
      <NutritionalRadarChart radarData={radarData} />
      <NutritionalAnalysisSummary 
        traditionalNutrition={traditionalNutrition}
        plantBasedNutrition={plantBasedNutrition}
      />
    </div>
  );
};

export default NutritionComparisonChart;
