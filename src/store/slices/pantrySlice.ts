
import { StateCreator } from 'zustand';
import { PantryItem } from '@/data/pantry/products';

export interface PantrySlice {
  householdSize: number;
  preferences: string[];
  frequency: 'weekly' | 'biweekly' | 'monthly' | '';
  generatedPantry: PantryItem[];
  
  setPantryParams: (size: number, freq: 'weekly' | 'biweekly' | 'monthly' | '', prefs: string[]) => void;
  setGeneratedPantry: (list: PantryItem[]) => void;
  resetPantry: () => void;
}

export const createPantrySlice: StateCreator<PantrySlice> = (set) => ({
  householdSize: 2,
  preferences: [],
  frequency: '',
  generatedPantry: [],

  setPantryParams: (householdSize, frequency, preferences) => 
    set({ householdSize, frequency, preferences }),
  setGeneratedPantry: (generatedPantry) => set({ generatedPantry }),
  
  resetPantry: () => set({ 
    householdSize: 2, 
    preferences: [], 
    frequency: '', 
    generatedPantry: [] 
  }),
});
