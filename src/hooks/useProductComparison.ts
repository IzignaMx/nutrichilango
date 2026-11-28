
import { useMemo } from 'react';
import { Store } from '@/data';
import { economicGroup, economicOffers } from '@/data/prices/economicOffers';
import { useNutriStore } from '@/store/useNutriStore';

export const useProductComparison = (data: Store[]) => {
  const { searchQuery, selectedCategory } = useNutriStore();

  const filteredData = useMemo(() => {
    const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const query = normalize(searchQuery.trim());
    const matchingGroups = new Set(economicOffers.filter(offer =>
      query && normalize(offer.name).includes(query)).map(offer => offer.group));

    const filtered = data.map(store => {
      const storeMatches = query && [store.name, store.location].some(value => normalize(value).includes(query));
      const products = store.products.filter(product => {
        if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
        if (!query || storeMatches) return true;
        const fields = [product.traditional.name, product.plantBased.name, product.traditional.brand, product.plantBased.brand];
        const group = economicGroup(product);
        return fields.some(value => value && normalize(value).includes(query)) || (group !== null && matchingGroups.has(group));
      });
      return { ...store, products };
    }).filter(store => store.products.length > 0);

    return filtered;
  }, [data, searchQuery, selectedCategory]);

  return {
    filteredData,
    totalResults: filteredData.length,
    hasActiveFilters: searchQuery || selectedCategory !== 'all'
  };
};

