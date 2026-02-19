
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { productCategories } from '@/data';

interface SearchAndFiltersProps {
  onSearchChange: (query: string) => void;
  onSortChange: (sortBy: string) => void;
  onComparisonFilterChange: (filter: string) => void;
  onCategoryFilter: (category: string) => void;
  onResetFilters: () => void;
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
  onResetFilters,
  searchQuery,
  sortBy,
  comparisonFilter,
  selectedCategory,
  totalResults
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const hasActiveFilters = searchQuery || comparisonFilter !== 'all' || selectedCategory !== 'all';

  return (
    <Card className="w-full overflow-hidden" id="search">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" />
            <span className="hidden sm:inline">Buscar y Filtrar Productos</span>
            <span className="sm:hidden">Buscar</span>
          </CardTitle>
          <Badge variant="secondary" className="text-sm">
            {totalResults} resultados
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 pt-0">
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
            <Button variant="outline" className="w-full gap-2 text-sm sm:text-base">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">{isFiltersOpen ? 'Ocultar Filtros' : 'Mostrar Filtros Avanzados'}</span>
              <span className="sm:hidden">{isFiltersOpen ? 'Ocultar' : 'Filtros'}</span>
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    {productCategories.map(cat => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.icon} {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Active Filters Display & Reset */}
        {hasActiveFilters && (
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mt-4">
            <div className="flex flex-wrap gap-2 text-sm items-center">
              <span className="text-xs sm:text-sm text-gray-600 font-medium mr-1">Filtros:</span>
              
              {searchQuery && (
                <Badge variant="secondary" className="gap-1 pl-2 pr-1 py-1">
                  "{searchQuery}"
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onSearchChange('')}
                    className="h-4 w-4 p-0 ml-1 hover:bg-transparent text-gray-500 hover:text-gray-900"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
              
              {comparisonFilter !== 'all' && (
                <Badge variant="secondary" className="gap-1 pl-2 pr-1 py-1">
                  {comparisonFilter}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onComparisonFilterChange('all')}
                    className="h-4 w-4 p-0 ml-1 hover:bg-transparent text-gray-500 hover:text-gray-900"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
              
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="gap-1 pl-2 pr-1 py-1">
                  {productCategories.find(c => c.id === selectedCategory)?.name || selectedCategory}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCategoryFilter('all')}
                    className="h-4 w-4 p-0 ml-1 hover:bg-transparent text-gray-500 hover:text-gray-900"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={onResetFilters}
              className="text-red-600 hover:text-red-700 hover:bg-red-50 gap-2 ml-auto sm:ml-0 whitespace-nowrap"
            >
              <X className="w-4 h-4" />
              Limpiar Todo
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchAndFilters;
