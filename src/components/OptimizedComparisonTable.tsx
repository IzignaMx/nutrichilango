
import React, { useMemo, useState } from 'react';
import { Store } from '@/data';
import { useBestPriceComparisons } from '@/hooks/useBestPriceComparisons';
import RecipeModal from './RecipeModal';
import NutritionalReferenceInfo from './NutritionalReferenceInfo';
import ComparisonFilters from './comparison/ComparisonFilters';
import ComparisonCard from './comparison/ComparisonCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertTriangle } from 'lucide-react';

interface OptimizedComparisonTableProps {
  data: Store[];
  sortBy: string;
  comparisonFilter?: string;
  isLoading?: boolean;
  error?: string | null;
}

const OptimizedComparisonTable: React.FC<OptimizedComparisonTableProps> = ({ 
  data, 
  sortBy, 
  comparisonFilter = 'all',
  isLoading = false,
  error = null
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [expandedNutrition, setExpandedNutrition] = useState<string | null>(null);
  
  const optimizedComparisons = useBestPriceComparisons(data, comparisonFilter);

  const sortedProducts = useMemo(() => {
    if (!optimizedComparisons || optimizedComparisons.length === 0) {
      return [];
    }
    
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

  const handleCloseRecipeModal = () => {
    setIsRecipeModalOpen(false);
    setSelectedRecipe(null);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-green-600" />
          <p className="text-gray-600">Cargando comparaciones...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <Alert variant="destructive" className="my-4">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Error al cargar los datos: {error}
        </AlertDescription>
      </Alert>
    );
  }

  // Empty state
  if (!sortedProducts || sortedProducts.length === 0) {
    return (
      <Card className="my-8">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-gray-700">
            No se encontraron comparaciones
          </CardTitle>
          <CardDescription>
            Intenta ajustar los filtros o verifica que haya datos disponibles para la comparación seleccionada.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6" role="region" aria-label="Tabla de comparaciones de productos">
      {sortedProducts.length > 0 && (
        <NutritionalReferenceInfo category={sortedProducts[0].category} />
      )}

      <ComparisonFilters />

      <div className="space-y-4">
        {sortedProducts.map((product, index) => (
          <ComparisonCard
            key={`${product.id}-${index}`}
            product={product}
            index={index}
            onRecipeClick={handleRecipeClick}
            expandedNutrition={expandedNutrition}
            onToggleNutrition={toggleNutritionChart}
          />
        ))}
      </div>

      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isRecipeModalOpen}
        onClose={handleCloseRecipeModal}
      />
    </div>
  );
};

export default OptimizedComparisonTable;
