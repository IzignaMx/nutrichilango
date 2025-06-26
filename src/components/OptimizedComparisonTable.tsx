import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, MapPin, Star, AlertCircle, Trophy, ChefHat, BookOpen, BarChart3 } from 'lucide-react';
import { Store } from '@/data';
import { useBestPriceComparisons } from '@/hooks/useBestPriceComparisons';
import RecipeModal from './RecipeModal';
import NutritionComparisonChart from './NutritionComparisonChart';
import NutritionalReferenceInfo from './NutritionalReferenceInfo';

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

  const getCategoryColor = (category: string) => {
    const colors = {
      proteins: 'bg-red-100 text-red-800',
      dairy: 'bg-blue-100 text-blue-800',
      eggs: 'bg-yellow-100 text-yellow-800',
      snacks: 'bg-purple-100 text-purple-800',
      pantry: 'bg-green-100 text-green-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category: string) => {
    const names = {
      proteins: 'Proteínas',
      dairy: 'Lácteos',
      eggs: 'Huevos',
      snacks: 'Snacks',
      pantry: 'Despensa'
    };
    return names[category as keyof typeof names] || category;
  };

  const getComparisonTypeColor = (type: string) => {
    const colors = {
      'animal-vs-commercial': 'bg-orange-100 text-orange-800',
      'animal-vs-homemade': 'bg-green-100 text-green-800',
      'commercial-vs-homemade': 'bg-blue-100 text-blue-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getComparisonTypeName = (type: string) => {
    const names = {
      'animal-vs-commercial': 'Animal vs Comercial',
      'animal-vs-homemade': 'Animal vs Casero',
      'commercial-vs-homemade': 'Comercial vs Casero'
    };
    return names[type as keyof typeof names] || type;
  };

  const handleRecipeClick = (recipe: any) => {
    setSelectedRecipe(recipe);
    setIsRecipeModalOpen(true);
  };

  const toggleNutritionChart = (productId: string) => {
    setExpandedNutrition(expandedNutrition === productId ? null : productId);
  };

  return (
    <div className="space-y-4">
      {/* Información de marco de referencia nutricional */}
      {sortedProducts.length > 0 && (
        <NutritionalReferenceInfo category={sortedProducts[0].category} />
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center mb-2">
          <Trophy className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold text-blue-800">Comparaciones Inteligentes Plant-Based</h3>
        </div>
        <p className="text-sm text-blue-700">
          Descubre cómo una alimentación plant-based puede ser más económica. Comparamos productos comerciales vs caseros, 
          y opciones de origen animal vs alternativas vegetales. ¡Incluye recetas con desglose de costos!
        </p>
      </div>

      {sortedProducts.map((product, index) => (
        <Card key={product.id} className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <div className="flex-1">
                <CardTitle className="text-lg mb-2 text-gray-800">
                  {product.traditional.name} vs {product.plantBased.name}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="font-medium">{product.storeName}</span>
                  </div>
                  {product.hasPromotion && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      🎯 Promoción
                    </Badge>
                  )}
                  {!product.plantBased.isCommercial && (
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      <ChefHat className="w-3 h-3 mr-1" />
                      Casero
                    </Badge>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={getCategoryColor(product.category)}>
                  {getCategoryName(product.category)}
                </Badge>
                <Badge className={getComparisonTypeColor(product.comparisonType)}>
                  {getComparisonTypeName(product.comparisonType)}
                </Badge>
                {index === 0 && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900">
                    <Star className="w-3 h-3 mr-1" />
                    Mejor Valor
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Traditional Product */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 border-b pb-1">
                  {product.comparisonType.includes('commercial-vs') ? 'Producto Comercial' : 'Producto Tradicional'}
                </h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-600">Producto:</span>
                    <p className="font-medium">{product.traditional.name}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Marca:</span>
                    <p className="font-medium">{product.traditional.brand}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">Precio:</span>
                      <p className="text-lg font-bold text-green-600">${product.traditional.price.toFixed(2)}</p>
                      <p className="text-xs text-gray-500">{product.traditional.unit}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Por kg/L:</span>
                      <p className="text-lg font-bold text-green-600">${product.traditional.pricePerUnit.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plant-Based Product */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 border-b pb-1 flex items-center">
                  Alternativa Plant-Based
                  {!product.plantBased.isCommercial && (
                    <Badge variant="outline" className="ml-2 text-xs text-purple-600 border-purple-600">
                      <ChefHat className="w-3 h-3 mr-1" />
                      Casero
                    </Badge>
                  )}
                </h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-600">Producto:</span>
                    <p className="font-medium">{product.plantBased.name}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Tipo:</span>
                    <p className="font-medium">{product.plantBased.brand}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">Precio:</span>
                      <p className="text-lg font-bold text-blue-600">${product.plantBased.price.toFixed(2)}</p>
                      <p className="text-xs text-gray-500">{product.plantBased.unit}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Por kg/L:</span>
                      <p className="text-lg font-bold text-blue-600">${product.plantBased.pricePerUnit.toFixed(2)}</p>
                    </div>
                  </div>
                  {product.plantBased.recipe && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRecipeClick(product.plantBased.recipe)}
                      className="w-full mt-2 text-purple-600 border-purple-600 hover:bg-purple-50"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Ver Receta y Costos
                    </Button>
                  )}
                </div>
              </div>

              {/* Comparison */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 border-b pb-1">Análisis Económico</h4>
                <div className="space-y-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="flex items-center justify-center mb-2">
                      {product.priceDifferencePercent > 0 ? (
                        <TrendingUp className="w-6 h-6 text-red-500 mr-2" />
                      ) : (
                        <TrendingDown className="w-6 h-6 text-green-500 mr-2" />
                      )}
                      <span className="text-sm text-gray-600">Diferencia:</span>
                    </div>
                    <p className={`text-2xl font-bold ${
                      product.priceDifferencePercent > 0 ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {product.priceDifferencePercent > 0 ? '+' : ''}{product.priceDifferencePercent.toFixed(1)}%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {product.priceDifferencePercent < 0 ? 'Más económico' : 'Más costoso'}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">
                        {product.priceDifferencePercent < 0 ? 'Ahorro:' : 'Costo extra:'}
                      </span>
                      <p className={`font-bold ${
                        product.priceDifferencePercent > 0 ? 'text-red-600' : 'text-green-600'
                      }`}>
                        ${Math.abs(product.plantBased.price - product.traditional.price).toFixed(2)} MXN
                      </p>
                    </div>

                    {/* Mensaje educativo según el tipo de comparación */}
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium">
                        {product.comparisonType === 'animal-vs-homemade' && '🏠 Hacerlo en casa puede ser hasta 50% más económico'}
                        {product.comparisonType === 'commercial-vs-homemade' && '💰 Los productos caseros eliminan el sobreprecio comercial'}
                        {product.comparisonType === 'animal-vs-commercial' && '🛒 Compara precios: algunos plant-based son competitivos'}
                      </p>
                    </div>
                    
                    {product.hasPromotion && product.promotionDetails && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-sm text-green-800 font-medium">🎯 {product.promotionDetails}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Nueva sección de comparación nutricional */}
            {(product.traditional.nutritionInfo && product.plantBased.nutritionInfo) && (
              <div className="mt-6 border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-700 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                    Comparación Nutricional
                  </h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleNutritionChart(product.id)}
                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    {expandedNutrition === product.id ? 'Ocultar' : 'Ver'} Análisis Nutricional
                  </Button>
                </div>
                
                {expandedNutrition === product.id && (
                  <NutritionComparisonChart product={product} />
                )}
              </div>
            )}
          </CardContent>
        </Card>
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
