
import React, { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link, useSearchParams } from 'react-router-dom';
import { useNutriStore } from '@/store/useNutriStore';
import { matchPantryIngredients, pantryIngredientLinks, type Availability, type Confirmations } from '@/data/dishes/pantryMatch';
import { PANTRY_PRODUCTS } from '@/data/pantry/products';
import { ChefHat, Info } from 'lucide-react';
import DishComparisonCard from '@/components/dishes/DishComparisonCard';
import DishFilters from '@/components/dishes/DishFilters';
import { dishesData } from '@/data/dishes';
import { DishCategory } from '@/data/dishes/types';
import { statedPreparationMinutes } from '@/data/dishes/display';
import { getMainIngredient, getMainIngredientOptions, type MainIngredient } from '@/data/dishes/mainIngredient';

const linkedProducts = new Set(Object.values(pantryIngredientLinks).map(link => link.id));
const confirmationProducts = PANTRY_PRODUCTS.filter(product => linkedProducts.has(product.id))
  .sort((a, b) => a.name.localeCompare(b.name, 'es-MX'));

const DishesComparison: React.FC = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<MainIngredient | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<DishCategory>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard' | 'all'>('all');
  const [sortBy, setSortBy] = useState<'price' | 'health' | 'prep-time'>('price');
  const [confirmations, setConfirmations] = useState<Confirmations>({});
  const [prioritizeConfirmed, setPrioritizeConfirmed] = useState(false);
  const hasConfirmations = Object.values(confirmations).some(value => value !== 'unknown');
  const [params, setParams] = useSearchParams();
  const pantry = useNutriStore(state => state.generatedPantry);
  const requested = params.get('despensa') === '1';
  const pantryMode = requested && pantry.length > 0;
  const matches = new Map(dishesData.map(dish => [dish, matchPantryIngredients(dish, pantry, confirmations)]));
  const filteredDishes = dishesData.filter(dish => {
    const principal = matches.get(dish)?.principal?.status;
    if (pantryMode && principal !== 'listed' && principal !== 'related') return false;
    if (selectedIngredient !== 'all' && getMainIngredient(dish)?.id !== selectedIngredient) return false;
    if (selectedCategory !== 'all' && dish.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'all' && dish.veganVersion.difficulty !== selectedDifficulty) return false;
    return true;
  }).sort((a, b) => {
    if (prioritizeConfirmed && hasConfirmations) {
      const difference = (matches.get(b)?.confirmedCount ?? 0) - (matches.get(a)?.confirmedCount ?? 0);
      if (difference !== 0) return difference;
    }
    switch (sortBy) {
      case 'price':
        return a.priceDifferencePercent - b.priceDifferencePercent;
      case 'health':
        return b.healthScore - a.healthScore;
      case 'prep-time':
        return statedPreparationMinutes(a.veganVersion.prepTime) - statedPreparationMinutes(b.veganVersion.prepTime);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            🌮 ¡Revoluciona Tu Cocina Mexicana!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-green-100">
            Explora versiones de origen vegetal de platillos mexicanos y compara sus ingredientes, costos estimados y datos nutricionales.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center max-w-3xl mx-auto">
            <div className="space-y-1 md:space-y-2">
              <div className="text-xl sm:text-2xl font-bold">{dishesData.length}</div>
              <div className="text-xs sm:text-sm text-green-200">Platillos</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-xl sm:text-2xl font-bold">Recetas</div>
              <div className="text-xs sm:text-sm text-green-200">Alternativas de origen vegetal</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">De referencia</div>
              <div className="text-xs sm:text-sm text-green-200">Precios</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-xl sm:text-2xl font-bold">CDMX</div>
              <div className="text-xs sm:text-sm text-green-200">Mercados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-8 md:py-12 lg:py-16 px-4 sm:px-6" role="main">
        <div className="container mx-auto max-w-7xl space-y-6 md:space-y-8">
          
          {/* Information Alert */}
          <Alert className="border-green-200 bg-green-50">
            <Info className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Compara el costo estimado y los datos nutricionales por porción. El resultado depende de la receta, las cantidades y los precios de referencia. Los valores nutricionales, índices de salud e impacto ambiental son orientativos; todavía no cuentan con trazabilidad individual publicada.
            </AlertDescription>
          </Alert>

          <section className="rounded-lg border bg-white p-4 space-y-2" aria-label="Recetas y despensa">
            <label className="flex items-start gap-2 font-medium">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-green-700" checked={pantryMode}
                disabled={!pantry.length} onChange={event => {
                  const next = new URLSearchParams(params);
                  if (event.target.checked) next.set('despensa', '1');
                  else next.delete('despensa');
                  setParams(next);
                }} />
              Mostrar recetas con el ingrediente principal de mi lista
            </label>
            <p className="text-sm text-muted-foreground">
              La coincidencia es orientativa: no demuestra que tengas los productos, que alcancen las cantidades ni que la receta cumpla restricciones alimentarias.
            </p>
            {!pantry.length && <p className="text-sm">Todavía no hay una lista de despensa guardada. <Link to="/despensa" className="underline">Generar una lista</Link>.</p>}
          </section>

          <details className="rounded-lg border bg-white p-4 space-y-3">
            <summary className="cursor-pointer font-medium">Confirmar lo que tengo en casa (opcional)</summary>
            <p className="text-sm text-muted-foreground">
              Marca solo lo que realmente tienes o sabes que falta. No modifica la lista de compras ni se guarda al cerrar o recargar esta vista. Las cantidades de receta se muestran sin convertir; comprueba que te alcance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {confirmationProducts.map(product => (
                <label key={product.id} className="flex flex-col gap-1 text-sm min-w-0">
                  <span>{product.name}{pantry.some(item => item.id === product.id) ? ' (en tu lista)' : ''}</span>
                  <select aria-label={`Disponibilidad: ${product.name}`} className="w-full rounded-md border bg-background p-2 focus-visible:ring-2 focus-visible:ring-ring"
                    value={confirmations[product.id] ?? 'unknown'} onChange={event => {
                      const value = event.target.value as Availability;
                      setConfirmations(previous => ({ ...previous, [product.id]: value }));
                    }}>
                    <option value="unknown">Sin confirmar</option>
                    <option value="available">Tengo este producto</option>
                    <option value="missing">No lo tengo</option>
                  </select>
                </label>
              ))}
            </div>
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-green-700" checked={prioritizeConfirmed}
                onChange={event => setPrioritizeConfirmed(event.target.checked)} />
              Priorizar recetas con más productos confirmados de identidad exacta (desempate con el orden seleccionado).
            </label>
            <button type="button" className="underline text-sm focus-visible:ring-2 focus-visible:ring-ring" onClick={() => {
              setConfirmations({}); setPrioritizeConfirmed(false);
            }}>Borrar confirmaciones</button>
          </details>

          {/* Filters */}
          <DishFilters
            selectedIngredient={selectedIngredient}
            onIngredientChange={setSelectedIngredient}
            ingredientOptions={getMainIngredientOptions(dishesData)}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedDifficulty={selectedDifficulty}
            onDifficultyChange={setSelectedDifficulty}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalResults={filteredDishes.length}
          />

          <div className="grid gap-8">
            {filteredDishes.map(dish => (
              <div key={`${dish.category}/${dish.id}`} className="space-y-2 min-w-0">
                <DishComparisonCard dish={dish} />
                {pantryMode && <p className="text-sm text-muted-foreground px-2">
                  {matches.get(dish)?.principal?.status === 'related'
                    ? 'Ingrediente principal: producto relacionado, requiere revisar presentación o preparación.'
                    : 'Ingrediente principal incluido en tu lista (cantidad sin comprobar).'}
                </p>}
                {(pantryMode || hasConfirmations) && <details className="rounded-lg border bg-white p-4 text-sm">
                  <summary className="cursor-pointer font-medium">Revisar ingredientes frente a mi lista{hasConfirmations ? ` · Coincidencias exactas: ${matches.get(dish)?.confirmedCount ?? 0}` : ""}</summary>
                  <ul className="mt-3 space-y-2">
                    {matches.get(dish)?.ingredients.map((ingredient, index) => (
                      <li key={`${ingredient.name}/${index}`}>
                        <strong>{ingredient.name}:</strong>{' '}
                        {ingredient.status === 'listed' ? 'Producto en tu lista' :
                          ingredient.status === 'related' ? 'Producto relacionado en tu lista' :
                          ingredient.status === 'not-listed' ? 'Producto no incluido en tu lista' : 'Sin vínculo verificado con el catálogo de despensa'}
                        {ingredient.productName && <> ({ingredient.productName})</>}
                        {ingredient.note && <>. {ingredient.note}</>}
                        <p>Cantidad de receta: {ingredient.amount} {ingredient.unit}.</p>
                        {hasConfirmations && <p>{ingredient.availability === 'available' ? 'Producto confirmado por ti; cantidad sin comprobar.' :
                          ingredient.availability === 'related-available' ? 'Producto relacionado confirmado; preparación o presentación sin comprobar.' :
                          ingredient.availability === 'missing' ? 'Producto declarado como faltante.' : 'Disponibilidad sin confirmar.'}</p>}
                      </li>
                    ))}
                  </ul>
                </details>}
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredDishes.length === 0 && (
            <div className="text-center py-12">
              <ChefHat className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No se encontraron platillos
              </h3>
              <p className="text-gray-600">
                {pantryMode ? 'No hay coincidencias con el ingrediente principal y los filtros actuales. Desactiva el filtro de despensa para explorar todas las recetas.' : 'Prueba ajustando los filtros para ver más opciones'}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DishesComparison;
