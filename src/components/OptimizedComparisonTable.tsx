
import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, MapPin, Star, AlertCircle, Trophy } from 'lucide-react';
import { Store } from '@/data';
import { useBestPriceComparisons } from '@/hooks/useBestPriceComparisons';

interface OptimizedComparisonTableProps {
  data: Store[];
  sortBy: string;
}

const OptimizedComparisonTable: React.FC<OptimizedComparisonTableProps> = ({ data, sortBy }) => {
  const optimizedComparisons = useBestPriceComparisons(data);

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

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center mb-2">
          <Trophy className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold text-blue-800">Comparaciones Optimizadas</h3>
        </div>
        <p className="text-sm text-blue-700">
          Mostrando las mejores opciones de precio de cada producto entre todas las tiendas. 
          Los precios pueden provenir de diferentes supermercados para ofrecerte el mejor valor.
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
                  {product.bestTraditionalStore !== product.bestPlantBasedStore && (
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      <Trophy className="w-3 h-3 mr-1" />
                      Mejor Combinación
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
                <h4 className="font-semibold text-gray-700 border-b pb-1 flex items-center">
                  Producto Tradicional
                  {product.bestTraditionalStore && (
                    <Badge variant="outline" className="ml-2 text-xs text-green-600 border-green-600">
                      Mejor precio
                    </Badge>
                  )}
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
                  {product.bestTraditionalStore && (
                    <div>
                      <span className="text-sm text-gray-600">Mejor tienda:</span>
                      <p className="font-medium text-green-700">{product.bestTraditionalStore}</p>
                    </div>
                  )}
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
                <h4 className="font-semibold text-gray-700 border-b pb-1 flex items-center">
                  Producto Plant-Based
                  {product.bestPlantBasedStore && (
                    <Badge variant="outline" className="ml-2 text-xs text-blue-600 border-blue-600">
                      Mejor precio
                    </Badge>
                  )}
                </h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-600">Producto:</span>
                    <p className="font-medium">{product.plantBased.name}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Marca:</span>
                    <p className="font-medium">{product.plantBased.brand}</p>
                  </div>
                  {product.bestPlantBasedStore && (
                    <div>
                      <span className="text-sm text-gray-600">Mejor tienda:</span>
                      <p className="font-medium text-blue-700">{product.bestPlantBasedStore}</p>
                    </div>
                  )}
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
                <h4 className="font-semibold text-gray-700 border-b pb-1">Comparación Optimizada</h4>
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
                      Plant-based vs tradicional (mejores precios)
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
                        <p className="text-sm text-green-800 font-medium">🎯 Promociones activas:</p>
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

export default OptimizedComparisonTable;
