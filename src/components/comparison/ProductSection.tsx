
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChefHat, BookOpen } from 'lucide-react';

interface ProductSectionProps {
  product: {
    name: string;
    brand: string;
    price: number;
    unit: string;
    pricePerUnit: number;
    isCommercial?: boolean;
    recipe?: any;
  };
  title: string;
  priceColor: string;
  comparisonType: string;
  onRecipeClick?: (recipe: any) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  product,
  title,
  priceColor,
  comparisonType,
  onRecipeClick
}) => {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-700 border-b pb-1 flex items-center">
        {title}
        {product.isCommercial === false && (
          <Badge variant="outline" className="ml-2 text-xs text-purple-600 border-purple-600">
            <ChefHat className="w-3 h-3 mr-1" />
            Casero
          </Badge>
        )}
      </h4>
      <div className="space-y-2">
        <div>
          <span className="text-sm text-gray-600">Producto:</span>
          <p className="font-medium">{product.name}</p>
        </div>
        <div>
          <span className="text-sm text-gray-600">
            {title.includes('Comercial') ? 'Marca:' : 'Tipo:'}
          </span>
          <p className="font-medium">{product.brand}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-sm text-gray-600">Precio:</span>
            <p className={`text-lg font-bold ${priceColor}`}>${product.price.toFixed(2)}</p>
            <p className="text-xs text-gray-500">{product.unit}</p>
          </div>
          <div>
            <span className="text-sm text-gray-600">Por kg/L:</span>
            <p className={`text-lg font-bold ${priceColor}`}>${product.pricePerUnit.toFixed(2)}</p>
          </div>
        </div>
        {product.recipe && onRecipeClick && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onRecipeClick(product.recipe)}
            className="w-full mt-2 text-purple-600 border-purple-600 hover:bg-purple-50"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Ver Receta y Costos
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
