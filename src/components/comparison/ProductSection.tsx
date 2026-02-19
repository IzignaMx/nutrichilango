import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Tag } from 'lucide-react';
import { ProductVariant, Recipe } from '@/data/types';
import DataConfidenceIndicator from '@/components/ui/DataConfidenceIndicator';

interface ProductSectionProps {
  product: ProductVariant;
  title: string;
  priceColor: string;
  comparisonType: string;
  onRecipeClick?: (recipe: Recipe) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  product,
  title,
  priceColor,
  comparisonType,
  onRecipeClick
}) => {
  return (
    <div className="flex flex-col h-full bg-white/50 rounded-lg p-4 transition-colors hover:bg-white/80">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-700 uppercase tracking-wide text-xs">
          {title}
        </h4>
        {product.nutritionInfo && (
          <DataConfidenceIndicator nutrition={product.nutritionInfo} />
        )}
      </div>
      
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-bold text-gray-900 leading-tight mb-1">
            {product.name}
          </h3>
          {product.brand && (
            <p className="text-sm text-gray-500 font-medium">
              {product.brand}
            </p>
          )}
        </div>
        <div className="text-right">
          <p className={`text-xl font-bold ${priceColor}`}>
            ${product.price ? product.price.toFixed(2) : 'N/A'}
          </p>
          <p className="text-xs text-gray-500">
            {product.unit || 'por unidad'}
          </p>
        </div>
      </div>

      <div className="space-y-3 flex-grow">
        {/* Ingredients/Tags */}
        {(product.tags && product.tags.length > 0) && (
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-[10px] px-2 h-5 bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                <Tag className="w-2.5 h-2.5 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Recipe Link (if applicable) */}
        {(!product.isCommercial && product.recipe) && onRecipeClick && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRecipeClick(product.recipe!)}
            className="w-full mt-2 text-purple-700 hover:text-purple-800 hover:bg-purple-50 group"
          >
            <span className="flex items-center">
              Ver Receta y Preparación
              <ExternalLink className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Button>
        )}
        
        {/* Buy Link (if applicable) */}
        {(product.isCommercial && product.url) && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full mt-2 border-brand-primary/20 text-brand-primary hover:bg-brand-primary/5 hover:text-brand-primary-dark"
          >
            <a 
              href={product.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Ver en Tienda
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
