
/* eslint-disable @typescript-eslint/no-explicit-any */
// @vitest-environment jsdom
import { renderHook, act, waitFor } from '@testing-library/react';
import { useProductComparison } from './useProductComparison';
import { useNutriStore } from '@/store/useNutriStore';
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock zustand persistence to avoid storage issues
vi.mock('zustand/middleware', () => ({
  persist: (config: any) => (set: any, get: any, api: any) => config(set, get, api),
  createJSONStorage: () => ({ getItem: vi.fn(), setItem: vi.fn(), removeItem: vi.fn() }),
}));

// Mock data
const mockData = [
  {
    id: '1',
    name: 'Tienda 1',
    location: 'CDMX',
    products: [
      {
        id: 'p1',
        category: 'proteins',
        traditional: { name: 'Carne', brand: 'Marca A' },
        plantBased: { name: 'Soya', brand: 'Marca B' }
      }
    ]
  },
  {
    id: '2',
    name: 'Tienda 2',
    location: 'Edomex',
    products: [
      {
        id: 'p2',
        category: 'dairy',
        traditional: { name: 'Leche', brand: 'Lala' },
        plantBased: { name: 'Almendras', brand: 'Silk' }
      }
    ]
  }
];

describe('useProductComparison', () => {
  beforeEach(() => {
    act(() => {
      useNutriStore.getState().setSearchQuery('');
      useNutriStore.getState().setSelectedCategory('all');
    });
  });

  it('should return all data initially', async () => {
    const { result } = renderHook(() => useProductComparison(mockData as unknown as import('@/data').Store[]));
    await waitFor(() => {
      expect(result.current.filteredData).toHaveLength(2);
    });
    expect(result.current.totalResults).toBe(2);
    expect(result.current.hasActiveFilters).toBe(false);
  });

  it('should filter by search query', async () => {
    const { result } = renderHook(() => useProductComparison(mockData as unknown as import('@/data').Store[]));
    
    act(() => {
      useNutriStore.getState().setSearchQuery('Leche');
    });
    
    await waitFor(() => {
      expect(result.current.filteredData).toHaveLength(1);
    });
    expect(result.current.filteredData[0].name).toBe('Tienda 2');
    expect(result.current.hasActiveFilters).toBeTruthy();
  });

  it('should filter by category', async () => {
    const { result } = renderHook(() => useProductComparison(mockData as unknown as import('@/data').Store[]));

    act(() => {
      useNutriStore.getState().setSelectedCategory('proteins');
    });

    await waitFor(() => {
      expect(result.current.filteredData).toHaveLength(1);
    });
    expect(result.current.filteredData[0].products[0].category).toBe('proteins');
  });
});
