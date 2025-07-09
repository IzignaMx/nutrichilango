
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, ChefHat, DollarSign } from 'lucide-react';
import { VeganDish } from '@/data/dishes/types';

interface VeganRecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: VeganDish;
}

const VeganRecipeModal: React.FC<VeganRecipeModalProps> = ({ isOpen, onClose, recipe }) => {
  const totalIngredientCost = recipe.ingredients.reduce((sum, ingredient) => sum + ingredient.totalCost, 0);
  const costPerServing = totalIngredientCost / recipe.servings;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center">
            <ChefHat className="w-6 h-6 mr-2 text-brand-primary" />
            {recipe.name} - Receta Plant-Based
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Recipe Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Tiempo</p>
                <p className="font-medium">{recipe.prepTime}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Porciones</p>
                <p className="font-medium">{recipe.servings}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Costo total</p>
                <p className="font-medium">${totalIngredientCost.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className={
                recipe.difficulty === 'easy' ? 'bg-brand-primary-lighter text-brand-primary' :
                recipe.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }>
                {recipe.difficulty === 'easy' ? 'Fácil' : 
                 recipe.difficulty === 'medium' ? 'Medio' : 'Difícil'}
              </Badge>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">{recipe.description}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ingredientes</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Costo por porción: <span className="font-medium text-brand-success">${costPerServing.toFixed(2)}</span>
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{ingredient.name}</p>
                        <p className="text-sm text-gray-600">
                          {ingredient.amount} {ingredient.unit}
                        </p>
                        <p className="text-xs text-gray-500">{ingredient.source}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-brand-success">${ingredient.totalCost.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground">${ingredient.pricePerUnit.toFixed(2)}/{ingredient.unit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Instrucciones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="flex space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nutritional Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Información Nutricional (por porción)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-800">{recipe.nutritionInfo.calories}</p>
                  <p className="text-sm text-gray-600">Calorías</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-800">{recipe.nutritionInfo.protein}g</p>
                  <p className="text-sm text-gray-600">Proteína</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-800">{recipe.nutritionInfo.carbs}g</p>
                  <p className="text-sm text-gray-600">Carbohidratos</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-800">{recipe.nutritionInfo.fat}g</p>
                  <p className="text-sm text-gray-600">Grasas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VeganRecipeModal;
