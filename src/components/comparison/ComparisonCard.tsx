
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, ChefHat, BarChart3 } from 'lucide-react';
import ProductSection from './ProductSection';
import ComparisonAnalysis from './ComparisonAnalysis';
import NutritionComparisonChart from '../NutritionComparisonChart';

interface ComparisonCardProps {
  product: any;
  index: number;
  onRecipeClick: (recipe: any) => void;
  expandedNutrition: string | null;
  onToggleNutrition: (productId: string) => void;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  product,
  index,
  onRecipeClick,
  expandedNutrition,
  onToggleNutrition
}) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      proteins: 'bg-red-100 text-red-800',
      dairy: 'bg-blue-100 text-blue-800',
      eggs: 'bg-yellow-100 text-yellow-800',
      snacks: 'bg-purple-100 text-purple-800',
      pantry: 'bg-green-100 text-green-800',
      'prepared-dishes': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category: string) => {
    const names = {
      proteins: 'Proteínas',
      dairy: 'Lácteos',
      eggs: 'Huevos',
      snacks: 'Snacks',
      pantry: 'Despensa',
      'prepared-dishes': 'Platillos Preparados'
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

  return (
    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
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
          <ProductSection
            product={product.traditional}
            title={product.comparisonType.includes('commercial-vs') ? 'Producto Comercial' : 'Producto Tradicional'}
            priceColor="text-green-600"
            comparisonType={product.comparisonType}
          />
          
          <ProductSection
            product={product.plantBased}
            title="Alternativa Plant-Based"
            priceColor="text-blue-600"
            comparisonType={product.comparisonType}
            onRecipeClick={onRecipeClick}
          />

          <ComparisonAnalysis
            priceDifferencePercent={product.priceDifferencePercent}
            traditionalPrice={product.traditional.price}
            plantBasedPrice={product.plantBased.price}
            comparisonType={product.comparisonType}
            hasPromotion={product.hasPromotion}
            promotionDetails={product.promotionDetails}
          />
        </div>

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
                onClick={() => onToggleNutrition(product.id)}
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
  );
};

export default ComparisonCard;
