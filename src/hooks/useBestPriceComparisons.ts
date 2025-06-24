
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
  // Avena vs avena orgánica
  ['avena', 'avena orgánica'],
  ['avena tradicional', 'avena orgánica'],
  // Semillas vs polvos del mismo ingrediente
  ['semillas de hemp', 'proteína de hemp'],
  ['semillas de chía', 'proteína de chía'],
  // Aceites similares
  ['aceite de oliva', 'aceite de oliva extra virgen'],
  // Productos prácticamente idénticos
  ['arroz integral', 'arroz orgánico'],
  ['quinoa', 'quinoa orgánica'],
];

export const useBestPriceComparisons = (stores: Store[]) => {
  return useMemo(() => {
    // Agrupar todos los productos por categoría y tipo
    const productGroups: { [key: string]: Array<Product & { store: Store }> } = {};
    
    stores.forEach(store => {
      store.products.forEach(product => {
        const key = `${product.category}-${product.id}`;
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

      // Encontrar el mejor precio tradicional y plant-based entre todas las tiendas
      let bestTraditional = validVariants[0];
      let bestPlantBased = validVariants[0];

      validVariants.forEach(variant => {
        if (variant.traditional.pricePerUnit < bestTraditional.traditional.pricePerUnit) {
          bestTraditional = variant;
        }
        if (variant.plantBased.pricePerUnit < bestPlantBased.plantBased.pricePerUnit) {
          bestPlantBased = variant;
        }
      });

      // Crear una comparación optimizada combinando los mejores precios
      const comparisonKey = `${bestTraditional.category}-${bestTraditional.traditional.name}-${bestPlantBased.plantBased.name}`;
      
      if (!processedProducts.has(comparisonKey)) {
        const optimizedProduct: OptimizedComparison = {
          id: `optimized-${optimizedComparisons.length}`,
          category: bestTraditional.category,
          traditional: bestTraditional.traditional,
          plantBased: bestPlantBased.plantBased,
          priceDifferencePercent: ((bestPlantBased.plantBased.pricePerUnit - bestTraditional.traditional.pricePerUnit) / bestTraditional.traditional.pricePerUnit) * 100,
          availability: {
            traditional: bestTraditional.availability.traditional,
            plantBased: bestPlantBased.availability.plantBased
          },
          storeName: bestTraditional.store.id === bestPlantBased.store.id ? 
                    bestTraditional.store.name : 
                    `${bestTraditional.store.name} / ${bestPlantBased.store.name}`,
          storeLocation: bestTraditional.store.id === bestPlantBased.store.id ? 
                        bestTraditional.store.location : 
                        `${bestTraditional.store.location} / ${bestPlantBased.store.location}`,
          hasPromotion: bestTraditional.store.hasPromotion || bestPlantBased.store.hasPromotion,
          promotionDetails: [
            bestTraditional.store.hasPromotion ? `${bestTraditional.store.name}: ${bestTraditional.store.promotionDetails}` : '',
            bestPlantBased.store.hasPromotion && bestTraditional.store.id !== bestPlantBased.store.id ? `${bestPlantBased.store.name}: ${bestPlantBased.store.promotionDetails}` : ''
          ].filter(Boolean).join(' | '),
          bestTraditionalStore: bestTraditional.store.name,
          bestPlantBasedStore: bestPlantBased.store.name
        };

        optimizedComparisons.push(optimizedProduct);
        processedProducts.add(comparisonKey);
      }
    });

    return optimizedComparisons;
  }, [stores]);
};
