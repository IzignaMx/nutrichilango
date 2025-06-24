
import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, MapPin, Star, AlertCircle } from 'lucide-react';
import { Store, Product } from '@/data/storeData';

interface ProductComparisonTableProps {
  data: Store[];
  sortBy: string;
}

const ProductComparisonTable: React.FC<ProductComparisonTableProps> = ({ data, sortBy }) => {
  const sortedProducts = useMemo(() => {
    const allProducts = data.flatMap(store => 
      store.products.map(product => ({
        ...product,
        storeName: store.name,
        storeLocation: store.location,
        hasPromotion: store.hasPromotion,
        promotionDetails: store.promotionDetails
      }))
    );

    return allProducts.sort((a, b) => {
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
  }, [data, sortBy]);

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

  return (
    <div className="space-y-4">
      {sortedProducts.map((product, index) => (
        <Card key={`${product.storeName}-${product.id}`} className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
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
                    <span className="mx-1">•</span>
                    <span>{product.storeLocation}</span>
                  </div>
                  {product.hasPromotion && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      🎯 Promoción
                    </Badge>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={getCategoryColor(product.category)}>
                  {getCategoryName(product.category)}
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
                <h4 className="font-semibold text-gray-700 border-b pb-1">Producto Tradicional</h4>
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
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-2">Disponible:</span>
                    {product.availability.traditional ? (
                      <Badge variant="outline" className="text-green-600 border-green-600">✓ Sí</Badge>
                    ) : (
                      <Badge variant="outline" className="text-red-600 border-red-600">✗ No</Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Plant-Based Product */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 border-b pb-1">Producto Plant-Based</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-600">Producto:</span>
                    <p className="font-medium">{product.plantBased.name}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Marca:</span>
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
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-2">Disponible:</span>
                    {product.availability.plantBased ? (
                      <Badge variant="outline" className="text-green-600 border-green-600">✓ Sí</Badge>
                    ) : (
                      <Badge variant="outline" className="text-red-600 border-red-600">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        ✗ No
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Comparison */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 border-b pb-1">Comparación</h4>
                <div className="space-y-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="flex items-center justify-center mb-2">
                      {product.priceDifferencePercent > 0 ? (
                        <TrendingUp className="w-6 h-6 text-red-500 mr-2" />
                      ) : (
                        <TrendingDown className="w-6 h-6 text-green-500 mr-2" />
                      )}
                      <span className="text-sm text-gray-600">Diferencia de precio:</span>
                    </div>
                    <p className={`text-2xl font-bold ${
                      product.priceDifferencePercent > 0 ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {product.priceDifferencePercent > 0 ? '+' : ''}{product.priceDifferencePercent.toFixed(1)}%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Plant-based vs tradicional
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">Ahorro/Costo extra:</span>
                      <p className={`font-bold ${
                        product.priceDifferencePercent > 0 ? 'text-red-600' : 'text-green-600'
                      }`}>
                        ${Math.abs(product.plantBased.price - product.traditional.price).toFixed(2)} MXN
                      </p>
                    </div>
                    
                    {product.hasPromotion && product.promotionDetails && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-sm text-green-800 font-medium">🎯 Promoción activa:</p>
                        <p className="text-sm text-green-700">{product.promotionDetails}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductComparisonTable;
