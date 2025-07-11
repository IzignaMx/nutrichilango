
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChefHat, Leaf, DollarSign, Heart, Clock, Users, Info } from 'lucide-react';
import DishComparisonCard from '@/components/dishes/DishComparisonCard';
import DishFilters from '@/components/dishes/DishFilters';
import { dishesData } from '@/data/dishes';

const DishesComparison: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'mexican' | 'popular' | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard' | 'all'>('all');
  const [sortBy, setSortBy] = useState<'price' | 'health' | 'prep-time'>('price');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading real-time prices
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredDishes = dishesData.filter(dish => {
    if (selectedCategory !== 'all' && dish.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'all' && dish.veganVersion.difficulty !== selectedDifficulty) return false;
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.priceDifferencePercent - b.priceDifferencePercent;
      case 'health':
        return b.healthScore - a.healthScore;
      case 'prep-time':
        return parseInt(a.veganVersion.prepTime) - parseInt(b.veganVersion.prepTime);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Comparador de Platillos Plant-Based
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-green-100">
            Compara tus platillos favoritos tradicionales vs versiones veganas
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center max-w-3xl mx-auto">
            <div className="space-y-1 md:space-y-2">
              <div className="text-xl sm:text-2xl font-bold">20+</div>
              <div className="text-xs sm:text-sm text-green-200">Platillos</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-xl sm:text-2xl font-bold">100%</div>
              <div className="text-xs sm:text-sm text-green-200">Plant-Based</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">En Tiempo Real</div>
              <div className="text-xs sm:text-sm text-green-200">Precios</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-xl sm:text-2xl font-bold">CDMX</div>
              <div className="text-xs sm:text-sm text-green-200">Mercados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-8 md:py-12 lg:py-16 px-4 sm:px-6" role="main">
        <div className="container mx-auto max-w-7xl space-y-6 md:space-y-8">
          
          {/* Information Alert */}
          <Alert className="border-blue-200 bg-blue-50">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              Los precios se actualizan en tiempo real desde mercados de CDMX. 
              Las recetas veganas incluyen ingredientes disponibles localmente.
            </AlertDescription>
          </Alert>

          {/* Filters */}
          <DishFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedDifficulty={selectedDifficulty}
            onDifficultyChange={setSelectedDifficulty}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalResults={filteredDishes.length}
          />

          {/* Loading State */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Actualizando precios en tiempo real...</p>
            </div>
          ) : (
            /* Dishes Grid */
            <div className="grid gap-8">
              {filteredDishes.map((dish, index) => (
                <DishComparisonCard 
                  key={dish.id}
                  dish={dish}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* No Results */}
          {!isLoading && filteredDishes.length === 0 && (
            <div className="text-center py-12">
              <ChefHat className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No se encontraron platillos
              </h3>
              <p className="text-gray-600">
                Prueba ajustando los filtros para ver más opciones
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DishesComparison;
