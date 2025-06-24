
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

// Lista de ingredientes/productos plant-based que NO deben estar en productos "tradicionales"
const PLANT_BASED_KEYWORDS = [
  'tofu', 'tempeh', 'seitán', 'jackfruit', 'soya', 'almendra', 'avena',
  'coco', 'cashew', 'nuez', 'garbanzo', 'lenteja', 'quinoa', 'hemp',
  'chía', 'linaza', 'vegetal', 'vegano', 'plant-based'
];

// Comparaciones específicas que debemos evitar por ser absurdas
const INVALID_COMPARISON_PAIRS = [
  // Ambos productos plant-based comerciales
  ['tempeh', 'jackfruit'],
  ['tofu comercial', 'seitán comercial'],
  ['leche de almendra', 'leche de avena'],
  ['queso vegano', 'queso de nuez'],
  ['yogurt de coco', 'yogurt de soya'],
  
  // Variaciones del mismo producto
  ['avena', 'avena orgánica'],
  ['quinoa', 'quinoa orgánica'],
  ['aceite de oliva', 'aceite de oliva extra virgen'],
  ['arroz integral', 'arroz orgánico'],
  
  // Productos similares plant-based
  ['proteína de hemp', 'semillas de hemp'],
  ['proteína de chía', 'semillas de chía'],
  ['harina de almendra', 'leche de almendra'],
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

    // Función para verificar si una comparación es válida según el tipo
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

      // Validar según el tipo de comparación
      switch (product.comparisonType) {
        case 'animal-vs-commercial':
        case 'animal-vs-homemade':
          // El producto tradicional DEBE ser de origen animal
          // El producto plant-based DEBE ser vegetal
          if (!isAnimalBased(traditionalName)) {
            console.log(`Producto tradicional no es de origen animal: ${product.traditional.name}`);
            return false;
          }
          if (!isPlantBased(plantBasedName) && !product.plantBased.name.toLowerCase().includes('casero')) {
            console.log(`Producto plant-based no es vegetal: ${product.plantBased.name}`);
            return false;
          }
          return true;

        case 'commercial-vs-homemade':
          // Ambos productos deben ser plant-based, pero uno comercial y otro casero
          if (!product.plantBased.isCommercial === false) {
            console.log(`Comparación comercial vs casero mal configurada: ${product.plantBased.name}`);
            return false;
          }
          // Verificar que ambos sean efectivamente plant-based
          if (!isPlantBased(traditionalName) && !isPlantBased(plantBasedName)) {
            console.log(`Ambos productos deberían ser plant-based: ${product.traditional.name} vs ${product.plantBased.name}`);
            return false;
          }
          return true;

        default:
          return true;
      }
    };

    // Crear comparaciones optimizadas
    const optimizedComparisons: OptimizedComparison[] = [];
    const processedProducts = new Set<string>();

    Object.values(productGroups).forEach(productVariants => {
      if (productVariants.length === 0) return;

      // Filtrar comparaciones válidas
      const validVariants = productVariants.filter(variant => 
        isValidComparison(variant)
      );

      if (validVariants.length === 0) {
        console.log(`No se encontraron variantes válidas para el grupo`);
        return;
      }

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

    console.log(`Comparaciones válidas encontradas: ${optimizedComparisons.length}`);
    
    return optimizedComparisons;
  }, [stores, comparisonFilter]);
};
