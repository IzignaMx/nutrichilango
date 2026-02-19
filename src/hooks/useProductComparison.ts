
import { useMemo } from 'react';
import { Store } from '@/data';
import { useNutriStore } from '@/store/useNutriStore';

export const useProductComparison = (data: Store[]) => {
  const { searchQuery, selectedCategory } = useNutriStore();

  const filteredData = useMemo(() => {
    let filtered = data;

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
  }, [data, searchQuery, selectedCategory]);

  return {
    filteredData,
    totalResults: filteredData.length,
    hasActiveFilters: searchQuery || selectedCategory !== 'all'
  };
};
