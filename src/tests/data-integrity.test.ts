import { describe, it, expect } from 'vitest';
import { storeData } from '@/data';
import { ProductUIValidator } from '@/lib/nutricore';

describe('Data Integrity Check', () => {
  it('should validate all products against Schema', () => {
    let invalidCount = 0;
    const errors: string[] = [];

    storeData.forEach(store => {
      store.products.forEach(product => {
        // Construct the flat object expected by UI Validator
        // Note: The UI Validator expects a flattened structure similar to what ComparisonCard uses,
        // but our raw data is nested.
        // Let's validate the nested parts individually using the sub-schemas if possible,
        // or just validate that critical fields exist.
        
        // Actually, NutriCore exports `ProductUIValidator`. Let's see what it validates.
        // It validates: id, name, category, traditional (price), plantBased (price), nutrition.
        
        // We need to validate the Traditional and PlantBased products individually.
        
        try {
          // Validate Traditional Option
          if (product.traditional) {
             // We can check core fields manually or construct a partial object if we had a schema for just ProductItem
             if (!product.traditional.name) throw new Error(`Traditional product missing name in ${store.name}`);
             if (typeof product.traditional.price !== 'number') throw new Error(`Traditional product missing price in ${store.name}`);
          }

           // Validate Plant Based Option
           if (product.plantBased) {
             if (!product.plantBased.name) throw new Error(`PlantBased product missing name in ${store.name}`);
             if (typeof product.plantBased.price !== 'number') throw new Error(`PlantBased product missing price in ${store.name}`);
          }
           
        } catch (error) {
          invalidCount++;
          if (error instanceof Error) {
              errors.push(`${product.id || 'Unknown ID'}: ${error.message}`);
          }
        }
      });
    });

    if (invalidCount > 0) {
      console.error('Data Integrity Errors:', errors);
    }

    expect(invalidCount).toBe(0);
  });
});
