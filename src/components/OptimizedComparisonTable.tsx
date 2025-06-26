
import React, { useMemo, useState } from 'react';
import { Store } from '@/data';
import { useBestPriceComparisons } from '@/hooks/useBestPriceComparisons';
import RecipeModal from './RecipeModal';
import NutritionalReferenceInfo from './NutritionalReferenceInfo';
import ComparisonFilters from './comparison/ComparisonFilters';
import ComparisonCard from './comparison/ComparisonCard';

interface OptimizedComparisonTableProps {
  data: Store[];
  sortBy: string;
  comparisonFilter?: string;
}

const OptimizedComparisonTable: React.FC<OptimizedComparisonTableProps> = ({ 
  data, 
  sortBy, 
  comparisonFilter = 'all' 
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [expandedNutrition, setExpandedNutrition] = useState<string | null>(null);
  
  const optimizedComparisons = useBestPriceComparisons(data, comparisonFilter);

  const sortedProducts = useMemo(() => {
    return optimizedComparisons.sort((a, b) => {
      switch (sortBy) {
        case 'price-diff':
          return a.priceDifferencePercent - b.priceDifferencePercent;
        case 'traditional-price':
          return a.traditional.pricePerUnit - b.traditional.pricePerUnit;
        case 'plant-price':
          return a.plantBased.pricePerUnit - b.plantBased.pricePerUnit;
        case 'store-name':
          return a.storeName.localeCompare(b.storeName);
        default:
          return a.priceDifferencePercent - b.priceDifferencePercent;
      }
    });
  }, [optimizedComparisons, sortBy]);

  const handleRecipeClick = (recipe: any) => {
    setSelectedRecipe(recipe);
    setIsRecipeModalOpen(true);
  };

  const toggleNutritionChart = (productId: string) => {
    setExpandedNutrition(expandedNutrition === productId ? null : productId);
  };

  return (
    <div className="space-y-4">
      {sortedProducts.length > 0 && (
        <NutritionalReferenceInfo category={sortedProducts[0].category} />
      )}

      <ComparisonFilters />

      {sortedProducts.map((product, index) => (
        <ComparisonCard
          key={product.id}
          product={product}
          index={index}
          onRecipeClick={handleRecipeClick}
          expandedNutrition={expandedNutrition}
          onToggleNutrition={toggleNutritionChart}
        />
      ))}

      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isRecipeModalOpen}
        onClose={() => setIsRecipeModalOpen(false)}
      />
    </div>
  );
};

export default OptimizedComparisonTable;
