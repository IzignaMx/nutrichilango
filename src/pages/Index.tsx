
import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import OptimizedComparisonTable from '@/components/OptimizedComparisonTable';
import SearchAndFilters from '@/components/SearchAndFilters';
import { storeData } from '@/data';
import { Link } from 'react-router-dom';
import { 
  TrendingDown, 
  BarChart3, 
  MapPin, 
  ArrowRight,
  Info
} from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price-diff');
  const [comparisonFilter, setComparisonFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter and search logic
  const filteredData = useMemo(() => {
    let filtered = storeData;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(store => 
        store.name.toLowerCase().includes(query) ||
        store.location.toLowerCase().includes(query) ||
        store.products.some(product => 
          product.traditional.name.toLowerCase().includes(query) ||
          product.plantBased.name.toLowerCase().includes(query) ||
          product.traditional.brand?.toLowerCase().includes(query) ||
          product.plantBased.brand?.toLowerCase().includes(query)
        )
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(store =>
        store.products.some(product => product.category === selectedCategory)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleScrollToComparisons = () => {
    const element = document.getElementById('comparisons');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4" role="banner">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Comparador Plant-Based CDMX
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
            Compara precios y valores nutricionales entre productos tradicionales y 
            alternativas plant-based en la Ciudad de México
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 text-lg font-semibold shadow-lg"
              onClick={handleScrollToComparisons}
            >
              Explorar Comparaciones
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 text-lg font-semibold"
            >
              <Link to="/how-it-works">
                ¿Cómo Funciona?
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-green-200">Productos</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-green-200">Tiendas</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-green-200">Categorías</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">CDMX</div>
              <div className="text-sm text-green-200">Cobertura</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white" role="region" aria-labelledby="features-heading">
        <div className="container mx-auto max-w-6xl">
          <h2 id="features-heading" className="text-3xl font-bold text-center mb-12 text-gray-900">
            ¿Por qué usar nuestro comparador?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingDown className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Ahorra Dinero</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Encuentra las mejores ofertas en productos plant-based y 
                  descubre cuánto puedes ahorrar cocinando en casa.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Análisis Nutricional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Compara valores nutricionales con gráficas interactivas 
                  basadas en estándares mexicanos de referencia.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Ubicaciones Reales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Encuentra productos en supermercados, mercados tradicionales 
                  y tiendas especializadas de la CDMX.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12 px-4" role="main">
        <div className="container mx-auto max-w-7xl space-y-8">
          
          {/* Search and Filters */}
          <SearchAndFilters
            onSearchChange={setSearchQuery}
            onSortChange={setSortBy}
            onComparisonFilterChange={setComparisonFilter}
            onCategoryFilter={setSelectedCategory}
            searchQuery={searchQuery}
            sortBy={sortBy}
            comparisonFilter={comparisonFilter}
            selectedCategory={selectedCategory}
            totalResults={filteredData.length}
          />

          {/* Information Alert */}
          <Alert className="border-blue-200 bg-blue-50">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              Los datos se actualizan semanalmente. Última actualización: {new Date().toLocaleDateString('es-MX')}. 
              Los precios pueden variar según la ubicación específica de la tienda.
            </AlertDescription>
          </Alert>

          {/* Comparisons Table */}
          <section id="comparisons" role="region" aria-labelledby="comparisons-heading">
            <div className="mb-6">
              <h2 id="comparisons-heading" className="text-2xl font-bold text-gray-900 mb-2">
                Comparaciones de Productos
              </h2>
              <p className="text-gray-600">
                Explora las comparaciones detalladas entre productos tradicionales y alternativas plant-based
              </p>
            </div>
            
            <OptimizedComparisonTable
              data={filteredData}
              sortBy={sortBy}
              comparisonFilter={comparisonFilter}
              isLoading={isLoading}
            />
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Quieres saber más sobre alimentación plant-based?
            </h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Descubre nuestra metodología, fuentes de datos y guías completas 
              para hacer la transición hacia una alimentación más sostenible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                variant="secondary"
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50"
              >
                <Link to="/methodology">Ver Metodología</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-700"
              >
                <Link to="/guide">Guía Completa</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
