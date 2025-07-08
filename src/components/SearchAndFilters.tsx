
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SearchAndFiltersProps {
  onSearchChange: (query: string) => void;
  onSortChange: (sortBy: string) => void;
  onComparisonFilterChange: (filter: string) => void;
  onCategoryFilter: (category: string) => void;
  searchQuery: string;
  sortBy: string;
  comparisonFilter: string;
  selectedCategory: string;
  totalResults: number;
}

const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  onSearchChange,
  onSortChange,
  onComparisonFilterChange,
  onCategoryFilter,
  searchQuery,
  sortBy,
  comparisonFilter,
  selectedCategory,
  totalResults
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const clearAllFilters = () => {
    onSearchChange('');
    onSortChange('price-diff');
    onComparisonFilterChange('all');
    onCategoryFilter('all');
  };

  const hasActiveFilters = searchQuery || comparisonFilter !== 'all' || selectedCategory !== 'all';

  return (
    <Card className="w-full" id="search">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5 text-brand-primary" />
            Buscar y Filtrar Productos
          </CardTitle>
          <Badge variant="secondary" className="text-sm">
            {totalResults} resultados
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Buscar productos, marcas o tiendas..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-10"
            aria-label="Buscar productos"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onSearchChange('')}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Advanced Filters Toggle */}
        <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              {isFiltersOpen ? 'Ocultar Filtros' : 'Mostrar Filtros Avanzados'}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ordenar por
                </label>
                <Select value={sortBy} onValueChange={onSortChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar orden" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-diff">Diferencia de Precio</SelectItem>
                    <SelectItem value="traditional-price">Precio Tradicional</SelectItem>
                    <SelectItem value="plant-price">Precio Plant-Based</SelectItem>
                    <SelectItem value="store-name">Nombre de Tienda</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Comparison Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Comparación
                </label>
                <Select value={comparisonFilter} onValueChange={onComparisonFilterChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas las comparaciones" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las Comparaciones</SelectItem>
                    <SelectItem value="animal-vs-commercial">Animal vs Comercial</SelectItem>
                    <SelectItem value="animal-vs-homemade">Animal vs Casero</SelectItem>
                    <SelectItem value="commercial-vs-homemade">Comercial vs Casero</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoría
                </label>
                <Select value={selectedCategory} onValueChange={onCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas las categorías" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las Categorías</SelectItem>
                    <SelectItem value="dairy">Lácteos</SelectItem>
                    <SelectItem value="meat">Carnes</SelectItem>
                    <SelectItem value="protein">Proteínas</SelectItem>
                    <SelectItem value="prepared">Platos Preparados</SelectItem>
                    <SelectItem value="beverages">Bebidas</SelectItem>
                    <SelectItem value="snacks">Snacks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearAllFilters}
                  className="gap-2"
                >
                  <X className="w-4 h-4" />
                  Limpiar Filtros
                </Button>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-600">Filtros activos:</span>
            {searchQuery && (
              <Badge variant="secondary" className="gap-1">
                Búsqueda: {searchQuery}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onSearchChange('')}
                  className="h-4 w-4 p-0 hover:bg-transparent"
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            )}
            {comparisonFilter !== 'all' && (
              <Badge variant="secondary" className="gap-1">
                {comparisonFilter}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onComparisonFilterChange('all')}
                  className="h-4 w-4 p-0 hover:bg-transparent"
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            )}
            {selectedCategory !== 'all' && (
              <Badge variant="secondary" className="gap-1">
                {selectedCategory}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCategoryFilter('all')}
                  className="h-4 w-4 p-0 hover:bg-transparent"
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchAndFilters;
