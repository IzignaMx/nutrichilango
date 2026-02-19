
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createSearchSlice, SearchSlice } from './slices/searchSlice';
import { createPantrySlice, PantrySlice } from './slices/pantrySlice';

// Combine interface
type NutriState = SearchSlice & PantrySlice;

export const useNutriStore = create<NutriState>()(
  persist(
    (...a) => ({
      ...createSearchSlice(...a),
      ...createPantrySlice(...a),
    }),
    {
      name: 'nutrichilango-storage',
      storage: createJSONStorage(() => localStorage),
      // Optional: partialize if we only want to persist certain parts
      // partialize: (state) => ({ 
      //   householdSize: state.householdSize,
      //   preferences: state.preferences,
      //   frequency: state.frequency,
      //   generatedPantry: state.generatedPantry,
      //   // We might want to persist search filters too, or not. 
      //   // Current implementation persists everything which is fine.
      // }),
    }
  )
);
