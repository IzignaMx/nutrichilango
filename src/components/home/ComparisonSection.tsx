
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import OptimizedComparisonTable from '@/components/OptimizedComparisonTable';
import SearchAndFilters from '@/components/SearchAndFilters';
import { Store } from '@/data';

interface ComparisonSectionProps {
  filteredData: Store[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  comparisonFilter: string;
  setComparisonFilter: (filter: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isLoading: boolean;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  filteredData,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  comparisonFilter,
  setComparisonFilter,
  selectedCategory,
  setSelectedCategory,
  isLoading
}) => {
  return (
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
      </div>
    </main>
  );
};

export default ComparisonSection;
