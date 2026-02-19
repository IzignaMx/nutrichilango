
import { StateCreator } from 'zustand';

export interface SearchSlice {
  searchQuery: string;
  selectedCategory: string;
  comparisonFilter: string;
  sortBy: string;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setComparisonFilter: (filter: string) => void;
  setSortBy: (sort: string) => void;
  resetFilters: () => void;
}

export const createSearchSlice: StateCreator<SearchSlice> = (set) => ({
  searchQuery: '',
  selectedCategory: 'all',
  comparisonFilter: 'all',
  sortBy: 'price-diff',
  
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  setComparisonFilter: (comparisonFilter) => set({ comparisonFilter }),
  setSortBy: (sortBy) => set({ sortBy }),
  resetFilters: () => set({
    searchQuery: '',
    selectedCategory: 'all',
    comparisonFilter: 'all',
    sortBy: 'price-diff'
  })
});
