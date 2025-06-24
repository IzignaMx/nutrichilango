
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

// Lista de ingredientes/productos de origen animal que identifican productos tradicionales
const ANIMAL_BASED_KEYWORDS = [
  'pollo', 'pechuga', 'carne', 'res', 'cerdo', 'pescado', 'atún', 'salmón',
  'huevo', 'huevos', 'leche', 'yogurt', 'queso', 'mantequilla', 'crema',
  'jamón', 'salchicha', 'chorizo', 'bacon', 'tocino', 'pavo', 'cordero'
];

// Lista de ingredientes/productos plant-based
const PLANT_BASED_KEYWORDS = [
  'tofu', 'tempeh', 'seitán', 'jackfruit', 'soya', 'almendra', 'avena',
  'coco', 'cashew', 'nuez', 'garbanzo', 'lenteja', 'quinoa', 'hemp',
  'chía', 'linaza', 'vegetal', 'vegano', 'plant-based', 'casero'
];

// Comparaciones específicas que debemos evitar por ser absurdas
const INVALID_COMPARISON_PAIRS = [
  // Ambos productos plant-based comerciales
  ['tempeh', 'jackfruit'],
  ['tofu', 'seitán'],
  ['leche de almendra', 'leche de avena'],
  ['queso vegano', 'queso de nuez'],
  ['yogurt de coco', 'yogurt de soya'],
];

export const useBestPriceComparisons = (stores: Store[], comparisonFilter: string = 'all') => {
  return useMemo(() => {
    console.log('Processing stores:', stores.length);
    
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

    console.log('Filtered stores:', filteredStores.length);

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

    console.log('Product groups:', Object.keys(productGroups).length);

    // Función para verificar si un producto contiene ingredientes de origen animal
    const isAnimalBased = (productName: string): boolean => {
      const productLower = productName.toLowerCase();
      return ANIMAL_BASED_KEYWORDS.some(keyword => 
        productLower.includes(keyword.toLowerCase())
      );
    };

    // Función para verificar si un producto es plant-based
    const isPlantBased = (productName: string): boolean => {
      const productLower = productName.toLowerCase();
      return PLANT_BASED_KEYWORDS.some(keyword => 
        productLower.includes(keyword.toLowerCase())
      );
    };

    // Función simplificada para verificar si una comparación es válida
    const isValidComparison = (product: Product): boolean => {
      const traditionalName = product.traditional.name.toLowerCase();
      const plantBasedName = product.plantBased.name.toLowerCase();
      
      // Verificar pares específicos inválidos
      const isInvalidPair = INVALID_COMPARISON_PAIRS.some(([invalid1, invalid2]) => {
        return (traditionalName.includes(invalid1.toLowerCase()) && plantBasedName.includes(invalid2.toLowerCase())) ||
               (traditionalName.includes(invalid2.toLowerCase()) && plantBasedName.includes(invalid1.toLowerCase()));
      });
      
      if (isInvalidPair) {
        console.log(`Comparación inválida detectada: ${product.traditional.name} vs ${product.plantBased.name}`);
        return false;
      }

      // Para comparaciones animal vs plant-based, verificar que efectivamente sea así
      if (product.comparisonType === 'animal-vs-commercial' || product.comparisonType === 'animal-vs-homemade') {
        // El producto tradicional debería ser de origen animal
        if (!isAnimalBased(traditionalName)) {
          // Si no contiene palabras clave de origen animal, pero tampoco es claramente plant-based, lo permitimos
          if (!isPlantBased(traditionalName)) {
            return true;
          } else {
            console.log(`Producto tradicional es plant-based: ${product.traditional.name}`);
            return false;
          }
        }
      }

      // Para comparaciones comercial vs casero, ambos deberían ser plant-based
      if (product.comparisonType === 'commercial-vs-homemade') {
        // Verificamos que al menos uno sea claramente plant-based o casero
        if (!isPlantBased(traditionalName) && !isPlantBased(plantBasedName) && 
            !traditionalName.includes('comercial') && !plantBasedName.includes('casero')) {
          console.log(`Comparación comercial vs casero sin productos plant-based claros: ${product.traditional.name} vs ${product.plantBased.name}`);
          // Permitimos la comparación si es comercial vs casero
          return true;
        }
      }

      return true;
    };

    // Crear comparaciones optimizadas
    const optimizedComparisons: OptimizedComparison[] = [];
    const processedProducts = new Set<string>();

    Object.values(productGroups).forEach(productVariants => {
      if (productVariants.length === 0) return;

      // Aplicar filtros de validación menos estrictos
      const validVariants = productVariants.filter(variant => 
        isValidComparison(variant)
      );

      if (validVariants.length === 0) {
        console.log(`No se encontraron variantes válidas para el grupo, usando todas las variantes`);
        // Si no hay variantes válidas, usar todas para evitar página en blanco
        validVariants.push(...productVariants);
      }

      // Seleccionar el mejor producto del grupo
      let bestVariant = validVariants[0];

      validVariants.forEach(variant => {
        // Priorizar siempre el menor precio en plant-based
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

    console.log(`Comparaciones finales encontradas: ${optimizedComparisons.length}`);
    
    return optimizedComparisons;
  }, [stores, comparisonFilter]);
};
