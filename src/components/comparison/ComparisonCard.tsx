
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, ChefHat, BarChart3 } from 'lucide-react';
import ProductSection from './ProductSection';
import ComparisonAnalysis from './ComparisonAnalysis';
import NutritionComparisonChart from '../NutritionComparisonChart';
import { OptimizedComparison, Recipe } from '@/data/types';

interface ComparisonCardProps {
  product: OptimizedComparison;
  index: number;
  onRecipeClick: (recipe: Recipe) => void;
  expandedNutrition: string | null;
  onToggleNutrition: (productId: string) => void;
}

const getCategoryColor = (category: string) => {
  const colors = {
    proteins: 'bg-red-50 text-red-700 border border-red-200',
    dairy: 'bg-blue-50 text-blue-700 border border-blue-200',
    eggs: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
    snacks: 'bg-purple-50 text-purple-700 border border-purple-200',
    pantry: 'bg-brand-primary-lighter text-brand-primary border border-brand-primary/20',
    'prepared-dishes': 'bg-orange-50 text-orange-700 border border-orange-200'
  };
  return colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground border border-border';
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
    'animal-vs-commercial': 'bg-orange-50 text-orange-700 border border-orange-200',
    'animal-vs-homemade': 'bg-brand-primary-lighter text-brand-primary border border-brand-primary/20',
    'commercial-vs-homemade': 'bg-blue-50 text-blue-700 border border-blue-200'
  };
  return colors[type as keyof typeof colors] || 'bg-muted text-muted-foreground border border-border';
};

const getComparisonTypeName = (type: string) => {
  const names = {
    'animal-vs-commercial': 'Animal vs Comercial',
    'animal-vs-homemade': 'Animal vs Casero',
    'commercial-vs-homemade': 'Comercial vs Casero'
  };
  return names[type as keyof typeof names] || type;
};

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  product,
  index,
  onRecipeClick,
  expandedNutrition,
  onToggleNutrition
}) => {

  return (
    <Card className="shadow-lg border bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:bg-card focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2 text-card-foreground">
              {product.traditional.name} vs {product.plantBased.name}
            </CardTitle>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                <span className="font-medium">{product.storeName}</span>
              </div>
              {product.hasPromotion && (
                <Badge variant="outline" className="text-brand-success border-brand-success bg-brand-success/10">
                  🎯 Promoción
                </Badge>
              )}
              {!product.plantBased.isCommercial && (
                <Badge variant="outline" className="text-purple-700 border-purple-200 bg-purple-50">
                  <ChefHat className="w-3 h-3 mr-1" aria-hidden="true" />
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
              <Badge className="bg-gradient-to-r from-brand-accent to-brand-accent/80 text-foreground">
                <Star className="w-3 h-3 mr-1" aria-hidden="true" />
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
            priceColor="text-brand-success"
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
