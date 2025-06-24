
import { useMemo } from 'react';
import { Store, Product } from '@/data/types';

interface OptimizedComparison extends Product {
  storeName: string;
  storeLocation: string;
  hasPromotion: boolean;
  promotionDetails?: string;
  bestTraditionalStore?: string;
  bestPlantBasedStore?: string;
}

// Lista de comparaciones que debemos evitar por ser absurdas o muy similares
const INVALID_COMPARISONS = [
  ['avena', 'avena orgánica'],
  ['avena tradicional', 'avena orgánica'],
  ['semillas de hemp', 'proteína de hemp'],
  ['semillas de chía', 'proteína de chía'],
  ['aceite de oliva', 'aceite de oliva extra virgen'],
  ['arroz integral', 'arroz orgánico'],
  ['quinoa', 'quinoa orgánica'],
];

export const useBestPriceComparisons = (stores: Store[], comparisonFilter: string = 'all') => {
  return useMemo(() => {
    // Filtrar por tipo de comparación si se especifica
    let filteredStores = stores;
    if (comparisonFilter !== 'all') {
      filteredStores = stores.map(store => ({
        ...store,
        products: store.products.filter(product => 
          comparisonFilter === 'all' || product.comparisonType === comparisonFilter
        )
      })).filter(store => store.products.length > 0);
    }

    // Agrupar productos por categoría y tipo de comparación
    const productGroups: { [key: string]: Array<Product & { store: Store }> } = {};
    
    filteredStores.forEach(store => {
      store.products.forEach(product => {
        const key = `${product.category}-${product.comparisonType}-${product.traditional.name}-${product.plantBased.name}`;
        if (!productGroups[key]) {
          productGroups[key] = [];
        }
        productGroups[key].push({ ...product, store });
      });
    });

    // Función para verificar si una comparación es válida
    const isValidComparison = (traditional: string, plantBased: string): boolean => {
      const traditionalLower = traditional.toLowerCase();
      const plantBasedLower = plantBased.toLowerCase();
      
      return !INVALID_COMPARISONS.some(([invalid1, invalid2]) => {
        return (traditionalLower.includes(invalid1.toLowerCase()) && plantBasedLower.includes(invalid2.toLowerCase())) ||
               (traditionalLower.includes(invalid2.toLowerCase()) && plantBasedLower.includes(invalid1.toLowerCase()));
      });
    };

    // Crear comparaciones optimizadas
    const optimizedComparisons: OptimizedComparison[] = [];
    const processedProducts = new Set<string>();

    Object.values(productGroups).forEach(productVariants => {
      if (productVariants.length === 0) return;

      // Filtrar comparaciones válidas
      const validVariants = productVariants.filter(variant => 
        isValidComparison(variant.traditional.name, variant.plantBased.name)
      );

      if (validVariants.length === 0) return;

      // Para comparaciones caseras vs comerciales, priorizar el mejor precio
      // Para comparaciones animal vs plant-based, mostrar la diferencia real
      let bestVariant = validVariants[0];

      validVariants.forEach(variant => {
        // Priorizar siempre el menor precio en plant-based (especialmente caseros)
        if (variant.plantBased.pricePerUnit < bestVariant.plantBased.pricePerUnit) {
          bestVariant = variant;
        }
        // Si los precios plant-based son similares, priorizar el menor tradicional
        else if (Math.abs(variant.plantBased.pricePerUnit - bestVariant.plantBased.pricePerUnit) < 5 &&
                 variant.traditional.pricePerUnit < bestVariant.traditional.pricePerUnit) {
          bestVariant = variant;
        }
      });

      const comparisonKey = `${bestVariant.category}-${bestVariant.comparisonType}-${bestVariant.traditional.name}-${bestVariant.plantBased.name}`;
      
      if (!processedProducts.has(comparisonKey)) {
        const optimizedProduct: OptimizedComparison = {
          id: `optimized-${optimizedComparisons.length}`,
          category: bestVariant.category,
          traditional: bestVariant.traditional,
          plantBased: bestVariant.plantBased,
          priceDifferencePercent: bestVariant.priceDifferencePercent,
          availability: bestVariant.availability,
          comparisonType: bestVariant.comparisonType,
          storeName: bestVariant.store.name,
          storeLocation: bestVariant.store.location,
          hasPromotion: bestVariant.store.hasPromotion,
          promotionDetails: bestVariant.store.promotionDetails,
          bestTraditionalStore: bestVariant.store.name,
          bestPlantBasedStore: bestVariant.store.name
        };

        optimizedComparisons.push(optimizedProduct);
        processedProducts.add(comparisonKey);
      }
    });

    return optimizedComparisons;
  }, [stores, comparisonFilter]);
};
