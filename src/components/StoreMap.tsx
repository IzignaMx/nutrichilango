import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, TrendingUp, TrendingDown } from 'lucide-react';
import { Store } from '@/data';
import { documentedPromotions } from '@/data/promotionEvidence';
import PromotionNotice from './comparison/PromotionNotice';

interface StoreMapProps {
  stores: Store[];
}

const StoreMap: React.FC<StoreMapProps> = ({ stores }) => {
  const sortedStores = React.useMemo(() => {
    return stores
      .map(store => ({
        ...store,
        avgDifference: store.products.reduce((sum, p) => sum + p.priceDifferencePercent, 0) / store.products.length
      }))
      .sort((a, b) => a.avgDifference - b.avgDifference);
  }, [stores]);

  const getLocationZone = (location: string) => {
    const zones: { [key: string]: string } = {
      'Santa Fe': 'Poniente',
      'Polanco': 'Centro-Norte',
      'Periférico Sur': 'Sur',
      'Satélite': 'Norte (EdoMex)',
      'Reforma': 'Centro',
      'Perisur': 'Sur',
      'Lindavista': 'Norte',
      'Roma Norte': 'Centro',
      'Xochimilco': 'Sur',
      'Iztapalapa': 'Oriente',
      'Condesa': 'Centro',
      'Coyoacán': 'Sur'
    };

    for (const [area, zone] of Object.entries(zones)) {
      if (location.includes(area)) {
        return zone;
      }
    }
    return 'CDMX';
  };

  const zoneGroups = React.useMemo(() => {
    const groups: { [key: string]: typeof sortedStores } = {};
    
    sortedStores.forEach(store => {
      const zone = getLocationZone(store.location);
      if (!groups[zone]) {
        groups[zone] = [];
      }
      groups[zone].push(store);
    });

    return groups;
  }, [sortedStores]);

  return (
    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800 flex items-center">
          <MapPin className="w-6 h-6 mr-2 text-brand-primary" />
          Mapa de Tiendas por Zona
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Comparación de precios por ubicación geográfica en la Ciudad de México
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {Object.entries(zoneGroups).map(([zone, storesInZone]) => (
            <div key={zone} className="border-l-4 border-brand-primary pl-4">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <span className="bg-brand-primary-lighter text-brand-primary px-2 py-1 rounded-md text-sm mr-2">
                  {zone}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({storesInZone.length} tienda{storesInZone.length > 1 ? 's' : ''})
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {storesInZone.map((store, index) => (
                  <div 
                    key={store.id} 
                    className="p-4 rounded-lg bg-gradient-to-r from-muted/20 to-muted/40 border border-border hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground flex items-center">
                          {store.name}
                          {index === 0 && (
                            <Star className="w-4 h-4 ml-2 text-brand-accent" />
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {store.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          {store.avgDifference > 0 ? (
                            <TrendingUp className="w-4 h-4 text-destructive mr-1" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-brand-success mr-1" />
                          )}
                          <span className={`font-bold text-sm ${
                            store.avgDifference > 0 ? 'text-destructive' : 'text-brand-success'
                          }`}>
                            {store.avgDifference > 0 ? '+' : ''}{store.avgDifference.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">

                      <Badge variant="outline" className="text-blue-600 border-blue-600 text-xs">
                        {store.products.length} productos
                      </Badge>
                    </div>

                    {documentedPromotions(store.promotionEvidence, store.products.map(product => product.id)).map(promotion => (
                      <PromotionNotice key={promotion.id} promotion={promotion} />
                    ))}

                    <div className="mt-3 pt-3 border-t border-border">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-muted-foreground">Precio más bajo:</span>
                          <p className="font-medium text-brand-success">
                            ${Math.min(...store.products.map(p => p.traditional.price)).toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Precio más alto:</span>
                          <p className="font-medium text-blue-600">
                            ${Math.max(...store.products.map(p => p.plantBased.price)).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Zone Summary */}
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-blue-800">Promedio de zona:</span>
                  <span className="font-bold text-blue-700">
                    {(storesInZone.reduce((sum, store) => sum + store.avgDifference, 0) / storesInZone.length).toFixed(1)}%
                  </span>
                </div>
                <p className="text-xs text-blue-600 mt-1">
                  Diferencia promedio plant-based vs tradicional
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Statistics */}
        <div className="mt-8 p-4 bg-gradient-to-r from-brand-primary-lighter to-blue-50 border border-border rounded-lg">
          <h4 className="font-semibold text-foreground mb-3">Estadísticas Generales</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-brand-primary">
                {sortedStores.length}
              </p>
              <p className="text-muted-foreground">Tiendas analizadas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {sortedStores.reduce((sum, store) => sum + store.products.length, 0)}
              </p>
              <p className="text-muted-foreground">Productos comparados</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">
                {Object.keys(zoneGroups).length}
              </p>
              <p className="text-muted-foreground">Zonas cubiertas</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoreMap;

