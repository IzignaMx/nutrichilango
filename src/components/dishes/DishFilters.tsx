
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

import { DishCategory } from '@/data/dishes/types';

interface DishFiltersProps {
  selectedCategory: DishCategory;
  onCategoryChange: (category: DishCategory) => void;
  selectedDifficulty: 'easy' | 'medium' | 'hard' | 'all';
  onDifficultyChange: (difficulty: 'easy' | 'medium' | 'hard' | 'all') => void;
  sortBy: 'price' | 'health' | 'prep-time';
  onSortChange: (sort: 'price' | 'health' | 'prep-time') => void;
  totalResults: number;
}

const DishFilters: React.FC<DishFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange,
  sortBy,
  onSortChange,
  totalResults
}) => {
  return (
    <Card className="bg-white/90 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
            <div className="space-y-2">
              <label htmlFor="category-select" className="text-sm font-medium text-gray-700">
                Categoría
              </label>
              <Select value={selectedCategory} onValueChange={onCategoryChange}>
                <SelectTrigger id="category-select" className="w-full">
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border shadow-lg z-50">
                  <SelectItem value="all">🍽️ Todas las categorías</SelectItem>
                  <SelectItem value="mexican">🌮 Platillos Mexicanos</SelectItem>
                  <SelectItem value="popular">⭐ Platillos Populares</SelectItem>
                  <SelectItem value="pastas">🍝 Pastas</SelectItem>
                  <SelectItem value="plato-fuerte">🍖 Plato Fuerte</SelectItem>
                  <SelectItem value="ensaladas">🥗 Ensaladas</SelectItem>
                  <SelectItem value="postres">🍰 Postres</SelectItem>
                  <SelectItem value="cremas">🥛 Cremas y Lácteos</SelectItem>
                  <SelectItem value="salsas">🌶️ Salsas y Aderezos</SelectItem>
                  <SelectItem value="aperitivos">🍿 Aperitivos</SelectItem>
                  <SelectItem value="bebidas">🥤 Bebidas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="difficulty-select" className="text-sm font-medium text-gray-700">
                Dificultad
              </label>
              <Select value={selectedDifficulty} onValueChange={onDifficultyChange}>
                <SelectTrigger id="difficulty-select" className="w-full">
                  <SelectValue placeholder="Seleccionar dificultad" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border shadow-lg z-50">
                  <SelectItem value="all">🎯 Todas las dificultades</SelectItem>
                  <SelectItem value="easy">🟢 Fácil</SelectItem>
                  <SelectItem value="medium">🟡 Medio</SelectItem>
                  <SelectItem value="hard">🔴 Difícil</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="sort-select" className="text-sm font-medium text-gray-700">
                Ordenar por
              </label>
              <Select value={sortBy} onValueChange={onSortChange}>
                <SelectTrigger id="sort-select" className="w-full">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border shadow-lg z-50">
                  <SelectItem value="price">💰 Diferencia de precio</SelectItem>
                  <SelectItem value="health">❤️ Puntuación de salud</SelectItem>
                  <SelectItem value="prep-time">⏱️ Tiempo de preparación</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <Badge variant="secondary" className="text-xs sm:text-sm whitespace-nowrap">
              {totalResults} platillos encontrados
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DishFilters;
