import { z } from 'zod';
import { parsePackage, toUnitPrice } from './price-normalization.mjs';

const text = z.string().trim().min(1);
const positive = z.number().finite().positive();
const nonnegative = z.number().finite().nonnegative();
const servings = positive.int();
const difficulty = z.enum(['easy', 'medium', 'hard']);
const nutrition = z.object({
  calories: nonnegative, protein: nonnegative, carbs: nonnegative, fat: nonnegative,
  sugar: nonnegative.optional(), fiber: nonnegative.optional(),
  iron: nonnegative.optional(), calcium: nonnegative.optional(),
});
const ingredient = z.object({
  name: text, amount: positive, unit: text, pricePerUnit: nonnegative,
  totalCost: nonnegative, source: text,
});
const recipe = z.object({
  name: text, description: text, servings, prepTime: text, difficulty,
  ingredients: z.array(ingredient).min(1), instructions: z.array(text).min(1),
  nutritionInfo: nutrition.optional(),
});
const variant = z.object({
  name: text, brand: text, price: positive, unit: text, pricePerUnit: positive.nullable(),
  lastUpdated: z.string().optional(), nutritionInfo: nutrition.optional(),
  recipe: recipe.extend({ id: text }).optional(),
});
const pair = z.object({
  id: text, category: z.enum(['proteins', 'dairy', 'eggs', 'snacks', 'pantry', 'prepared-dishes']),
  comparisonType: z.enum(['animal-vs-commercial', 'animal-vs-homemade', 'commercial-vs-homemade', 'commercial-vs-commercial']),
  traditional: variant, plantBased: variant, priceDifferencePercent: z.number().finite(),
  availability: z.object({ traditional: z.boolean(), plantBased: z.boolean() }),
});
const store = z.object({
  id: text, name: text, location: text,
  // Existing catalog uses [longitude, latitude], not the reverse.
  coordinates: z.tuple([z.number().finite().min(-180).max(180), z.number().finite().min(-90).max(90)]),
  hasPromotion: z.boolean(),
  storeType: z.enum(['conventional', 'naturist', 'vegetarian', 'vegan', 'organic', 'market', 'wholesale']),
  products: z.array(pair),
});
const dish = z.object({
  id: text, category: z.enum(['mexican', 'popular', 'pastas', 'plato-fuerte', 'ensaladas', 'postres', 'cremas', 'salsas', 'aperitivos', 'bebidas']),
  traditional: z.object({ name: text, estimatedPrice: positive, servings, prepTime: text, nutritionInfo: nutrition }),
  veganVersion: recipe.extend({ estimatedPrice: positive, nutritionInfo: nutrition }),
  priceDifferencePercent: z.number().finite(), healthScore: z.number().finite().min(0).max(100),
  healthBenefits: z.array(text), environmentalImpact: z.object({
    co2Reduction: z.number().finite().min(0).max(100),
    waterSaving: z.number().finite().min(0).max(100),
    landSaving: z.number().finite().min(0).max(100),
  }),
});
const pantry = z.object({
  id: text, name: text, category: text,
  quantity: z.string().regex(/^\d+(?:\.\d+)?$/).refine(q => Number(q) > 0 && Number.isFinite(Number(q))),
  unit: z.enum(['g', 'kg', 'ml', 'piezas']), price: positive,
});

export interface CatalogInputs {
  stores: unknown;
  dishes: unknown;
  pantry: unknown;
  lastUpdated: unknown;
}

export interface CatalogAudit {
  errors: string[];
  notices: string[];
  counts: { stores: number; pairs: number; foodPrices: number; missingObservationDate: number; nestedRecipes: number; dishes: number; pantry: number };
}

function isObservationDate(value: unknown, asOf: Date): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value)) return false;
  const parsed = new Date(value);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString() === value && parsed <= asOf;
}

function differencePercent(traditional: number, plantBased: number): number {
  return ((plantBased - traditional) / traditional) * 100;
}

export function auditCatalog(input: CatalogInputs, asOf = new Date()): CatalogAudit {
  const result: CatalogAudit = {
    errors: [], notices: [],
    counts: { stores: 0, pairs: 0, foodPrices: 0, missingObservationDate: 0, nestedRecipes: 0, dishes: 0, pantry: 0 },
  };
  const { errors, notices, counts } = result;
  const seen = new Set<string>();
  const unique = (key: string) => {
    if (seen.has(key)) errors.push(`ID duplicado: ${key}`);
    seen.add(key);
  };
  const parse = <T>(schema: z.ZodType<T>, value: unknown, label: string): T | undefined => {
    const parsed = schema.safeParse(value);
    if (!parsed.success) {
      for (const issue of parsed.error.issues) errors.push(`${label}/${issue.path.join('.')}: ${issue.message}`);
      return undefined;
    }
    return parsed.data;
  };

  const stores = parse(z.array(store).min(1), input.stores, 'comercios');
  const dishes = parse(z.array(dish).min(1), input.dishes, 'recetas');
  const products = parse(z.array(pantry).min(1), input.pantry, 'despensa');
  let latest = '';
  if (!isObservationDate(input.lastUpdated, asOf)) errors.push('Fecha global de observación inválida');
  for (const shop of stores ?? []) {
    counts.stores++;
    unique(`comercio/${shop.id}`);
    for (const product of shop.products) {
      counts.pairs++;
      const pairKey = `${shop.id}/${product.id}`;
      unique(`par/${pairKey}`);
      if (Math.abs(differencePercent(product.traditional.price, product.plantBased.price) - product.priceDifferencePercent) > 0.11) errors.push(`Porcentaje de presentación inconsistente: ${pairKey}`);
      for (const side of ['traditional', 'plantBased'] as const) {
        const v = product[side];
        const key = `${pairKey}/${side}`;
        counts.foodPrices++;
        if (!parsePackage(v.unit)) {
          if (v.pricePerUnit !== null) errors.push(`Unidad sin base normalizable: ${key}`);
          else notices.push(`Unidad no normalizable sin precio unitario: ${key}`);
        } else if (v.pricePerUnit !== toUnitPrice(v.price, v.unit)) {
          errors.push(`Precio normalizado inconsistente: ${key}`);
        }
        if (v.lastUpdated === undefined) {
          counts.missingObservationDate++;
          notices.push(`Fecha de observación ausente: ${key}`);
        }
        else if (!isObservationDate(v.lastUpdated, asOf)) errors.push(`Fecha de observación inválida: ${key}`);
        else if (v.lastUpdated > latest) latest = v.lastUpdated;
        if (v.recipe) {
          counts.nestedRecipes++;
          unique(`receta-comercio/${v.recipe.id}`);
          // Historical nested records do not encode the denominator for pricePerUnit.
          // Never infer it from an arbitrary ratio or the amount unit.
          notices.push(`Base de costo de ingredientes pendiente: ${key}/${v.recipe.id}`);
        }
      }
    }
  }
  if (latest && input.lastUpdated !== latest) errors.push('Fecha global distinta de la última observación registrada');
  for (const item of dishes ?? []) {
    counts.dishes++;
    const key = `${item.category}/${item.id}`;
    unique(`receta/${key}`);
    const t = item.traditional;
    const v = item.veganVersion;
    if (Math.abs(differencePercent(t.estimatedPrice / t.servings, v.estimatedPrice / v.servings) - item.priceDifferencePercent) > 0.11) errors.push(`Porcentaje de costo de receta inconsistente: ${key}`);
    const subtotal = v.ingredients.reduce((sum, i) => sum + i.totalCost, 0);
    if (Math.abs(subtotal - v.estimatedPrice) > 0.05) notices.push(`Subtotal diferente: ${key} (${subtotal.toFixed(2)} vs ${v.estimatedPrice.toFixed(2)})`);
    for (const i of v.ingredients) {
      if (Math.abs(i.amount * i.pricePerUnit - i.totalCost) > 0.01) notices.push(`Costo de ingrediente no concordante: ${key}/${i.name} (${i.amount} ${i.unit}; ${i.pricePerUnit}; ${i.totalCost})`);
    }
  }
  for (const item of products ?? []) {
    counts.pantry++;
    unique(`despensa/${item.id}`);
    if (item.unit === 'piezas' && !Number.isSafeInteger(Number(item.quantity))) errors.push(`Cantidad de piezas no entera: ${item.id}`);
  }
  return result;
}
