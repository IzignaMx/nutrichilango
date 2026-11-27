
import React, { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ChefHat, Info } from 'lucide-react';
import DishComparisonCard from '@/components/dishes/DishComparisonCard';
import DishFilters from '@/components/dishes/DishFilters';
import { dishesData } from '@/data/dishes';
import { DishCategory } from '@/data/dishes/types';
import { statedPreparationMinutes } from '@/data/dishes/display';
import { getMainIngredient, getMainIngredientOptions, type MainIngredient } from '@/data/dishes/mainIngredient';

const DishesComparison: React.FC = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<MainIngredient | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<DishCategory>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard' | 'all'>('all');
  const [sortBy, setSortBy] = useState<'price' | 'health' | 'prep-time'>('price');
  const filteredDishes = dishesData.filter(dish => {
    if (selectedIngredient !== 'all' && getMainIngredient(dish)?.id !== selectedIngredient) return false;
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
        return statedPreparationMinutes(a.veganVersion.prepTime) - statedPreparationMinutes(b.veganVersion.prepTime);
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
            🌮 ¡Revoluciona Tu Cocina Mexicana!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-green-100">
            Explora versiones de origen vegetal de platillos mexicanos y compara sus ingredientes, costos estimados y datos nutricionales.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center max-w-3xl mx-auto">
            <div className="space-y-1 md:space-y-2">
              <div className="text-xl sm:text-2xl font-bold">{dishesData.length}</div>
              <div className="text-xs sm:text-sm text-green-200">Platillos</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-xl sm:text-2xl font-bold">Recetas</div>
              <div className="text-xs sm:text-sm text-green-200">Alternativas de origen vegetal</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">De referencia</div>
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
          <Alert className="border-green-200 bg-green-50">
            <Info className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Compara el costo estimado y los datos nutricionales por porción. El resultado depende de la receta, las cantidades y los precios de referencia. Los valores nutricionales, índices de salud e impacto ambiental son orientativos; todavía no cuentan con trazabilidad individual publicada.
            </AlertDescription>
          </Alert>

          {/* Filters */}
          <DishFilters
            selectedIngredient={selectedIngredient}
            onIngredientChange={setSelectedIngredient}
            ingredientOptions={getMainIngredientOptions(dishesData)}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedDifficulty={selectedDifficulty}
            onDifficultyChange={setSelectedDifficulty}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalResults={filteredDishes.length}
          />

          <div className="grid gap-8">
            {filteredDishes.map(dish => (
              <DishComparisonCard
                key={`${dish.category}/${dish.id}`}
                dish={dish}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredDishes.length === 0 && (
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
