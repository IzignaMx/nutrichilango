
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface DishFiltersProps {
  selectedCategory: 'mexican' | 'popular' | 'all';
  onCategoryChange: (category: 'mexican' | 'popular' | 'all') => void;
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
    <Card className="bg-white/90 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="space-y-2">
              <label htmlFor="category-select" className="text-sm font-medium text-gray-700">
                Categoría
              </label>
              <Select value={selectedCategory} onValueChange={onCategoryChange}>
                <SelectTrigger id="category-select" className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  <SelectItem value="mexican">Platillos Mexicanos</SelectItem>
                  <SelectItem value="popular">Platillos Populares</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="difficulty-select" className="text-sm font-medium text-gray-700">
                Dificultad
              </label>
              <Select value={selectedDifficulty} onValueChange={onDifficultyChange}>
                <SelectTrigger id="difficulty-select" className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Seleccionar dificultad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las dificultades</SelectItem>
                  <SelectItem value="easy">Fácil</SelectItem>
                  <SelectItem value="medium">Medio</SelectItem>
                  <SelectItem value="hard">Difícil</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="sort-select" className="text-sm font-medium text-gray-700">
                Ordenar por
              </label>
              <Select value={sortBy} onValueChange={onSortChange}>
                <SelectTrigger id="sort-select" className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price">Diferencia de precio</SelectItem>
                  <SelectItem value="health">Puntuación de salud</SelectItem>
                  <SelectItem value="prep-time">Tiempo de preparación</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-sm">
              {totalResults} platillos encontrados
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DishFilters;
