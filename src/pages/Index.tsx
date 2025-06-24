import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, MapPin, Search, Filter, ShoppingCart, ChefHat, Store, Home } from 'lucide-react';
import { storeData, productCategories } from '@/data';
import ProductComparisonTable from '@/components/ProductComparisonTable';
import StoreMap from '@/components/StoreMap';
import PriceChart from '@/components/PriceChart';
import OptimizedComparisonTable from '@/components/OptimizedComparisonTable';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStore, setSelectedStore] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-diff');
  const [comparisonType, setComparisonType] = useState('all');

  const filteredData = useMemo(() => {
    let filtered = storeData;

    if (selectedStore !== 'all') {
      filtered = filtered.filter(store => store.id === selectedStore);
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.map(store => ({
        ...store,
        products: store.products.filter(product => product.category === selectedCategory)
      })).filter(store => store.products.length > 0);
    }

    if (searchTerm) {
      filtered = filtered.map(store => ({
        ...store,
        products: store.products.filter(product => 
          product.traditional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.plantBased.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(store => store.products.length > 0);
    }

    return filtered;
  }, [selectedCategory, selectedStore, searchTerm]);

  const avgPriceDifference = useMemo(() => {
    const allProducts = filteredData.flatMap(store => store.products);
    const totalDiff = allProducts.reduce((sum, product) => sum + product.priceDifferencePercent, 0);
    return totalDiff / allProducts.length;
  }, [filteredData]);

  const bestValueStores = useMemo(() => {
    return filteredData
      .map(store => ({
        ...store,
        avgDifference: store.products.reduce((sum, p) => sum + p.priceDifferencePercent, 0) / store.products.length
      }))
      .sort((a, b) => a.avgDifference - b.avgDifference)
      .slice(0, 5);
  }, [filteredData]);

  const comparisonTypeStats = useMemo(() => {
    const stats = {
      'animal-vs-commercial': { count: 0, avgDiff: 0 },
      'animal-vs-homemade': { count: 0, avgDiff: 0 },
      'commercial-vs-homemade': { count: 0, avgDiff: 0 }
    };

    filteredData.forEach(store => {
      store.products.forEach(product => {
        const type = product.comparisonType;
        if (stats[type]) {
          stats[type].count++;
          stats[type].avgDiff += product.priceDifferencePercent;
        }
      });
    });

    Object.keys(stats).forEach(key => {
      if (stats[key].count > 0) {
        stats[key].avgDiff = stats[key].avgDiff / stats[key].count;
      }
    });

    return stats;
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Comparador Plant-Based CDMX
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Descubre cómo una alimentación basada en plantas puede ser más económica
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Store className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-xl font-semibold mb-2">Comercial vs Animal</h3>
                  <p className="text-green-100 text-sm">+{comparisonTypeStats['animal-vs-commercial'].avgDiff.toFixed(1)}% promedio</p>
                  <p className="text-xs text-green-200">{comparisonTypeStats['animal-vs-commercial'].count} productos</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Home className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-xl font-semibold mb-2">Casero vs Animal</h3>
                  <p className="text-green-100 text-sm">{comparisonTypeStats['animal-vs-homemade'].avgDiff.toFixed(1)}% promedio</p>
                  <p className="text-xs text-green-200">{comparisonTypeStats['animal-vs-homemade'].count} productos</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <ChefHat className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-xl font-semibold mb-2">Casero vs Comercial</h3>
                  <p className="text-green-100 text-sm">{comparisonTypeStats['commercial-vs-homemade'].avgDiff.toFixed(1)}% de ahorro</p>
                  <p className="text-xs text-green-200">{comparisonTypeStats['commercial-vs-homemade'].count} productos</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-xl font-semibold mb-2">Mercados Locales</h3>
                  <p className="text-green-100 text-sm">Central de Abastos y mercados</p>
                  <p className="text-xs text-green-200">Precios directos del productor</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Buscar Producto</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Buscar alimentos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Tipo de Comparación</label>
                <Select value={comparisonType} onValueChange={setComparisonType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las comparaciones</SelectItem>
                    <SelectItem value="animal-vs-commercial">Animal vs Comercial Plant-Based</SelectItem>
                    <SelectItem value="animal-vs-homemade">Animal vs Casero Plant-Based</SelectItem>
                    <SelectItem value="commercial-vs-homemade">Comercial vs Casero Plant-Based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Categoría</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las categorías</SelectItem>
                    {productCategories.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Tienda</label>
                <Select value={selectedStore} onValueChange={setSelectedStore}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las tiendas</SelectItem>
                    {storeData.map(store => (
                      <SelectItem key={store.id} value={store.id}>
                        {store.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Ordenar por</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-diff">Diferencia de precio</SelectItem>
                    <SelectItem value="traditional-price">Precio tradicional</SelectItem>
                    <SelectItem value="plant-price">Precio plant-based</SelectItem>
                    <SelectItem value="store-name">Nombre de tienda</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="comparison" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="comparison" className="text-center">
              Comparaciones Inteligentes
            </TabsTrigger>
            <TabsTrigger value="charts" className="text-center">
              Gráficas y Análisis
            </TabsTrigger>
            <TabsTrigger value="stores" className="text-center">
              Mejores Lugares
            </TabsTrigger>
          </TabsList>

          <TabsContent value="comparison" className="space-y-6">
            <OptimizedComparisonTable 
              data={filteredData} 
              sortBy={sortBy} 
              comparisonFilter={comparisonType}
            />
          </TabsContent>

          <TabsContent value="charts" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PriceChart data={filteredData} />
              <StoreMap stores={filteredData} />
            </div>
          </TabsContent>

          <TabsContent value="stores" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestValueStores.map((store, index) => (
                <Card key={store.id} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{store.name}</CardTitle>
                      {index === 0 && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900">
                          Mejor Valor
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {store.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Diferencia promedio:</span>
                        <div className="flex items-center">
                          {store.avgDifference > 0 ? (
                            <TrendingUp className="w-4 h-4 text-red-500 mr-1" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                          )}
                          <span className={`font-bold ${
                            store.avgDifference > 0 ? 'text-red-600' : 'text-green-600'
                          }`}>
                            {store.avgDifference > 0 ? '+' : ''}{store.avgDifference.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>{store.products.length}</strong> productos comparados
                      </div>
                      {store.hasPromotion && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          🎯 Promociones activas
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
