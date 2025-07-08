
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, ChefHat, MapPin, DollarSign } from 'lucide-react';
import { Recipe } from '@/data/types';

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, isOpen, onClose }) => {
  if (!recipe) return null;

  const totalCost = recipe.ingredients.reduce((sum, ingredient) => sum + ingredient.totalCost, 0);
  const costPerServing = totalCost / recipe.servings;

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: 'bg-brand-primary-lighter text-brand-primary',
      medium: 'bg-yellow-50 text-yellow-700',
      hard: 'bg-red-50 text-red-700'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  const getDifficultyText = (difficulty: string) => {
    const texts = {
      easy: 'Fácil',
      medium: 'Intermedio',
      hard: 'Difícil'
    };
    return texts[difficulty as keyof typeof texts] || difficulty;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-primary mb-2">
            {recipe.name}
          </DialogTitle>
          <p className="text-gray-600">{recipe.description}</p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Info básica */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{recipe.servings} porciones</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="font-medium">{recipe.prepTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChefHat className="w-5 h-5 text-purple-600" />
              <Badge className={getDifficultyColor(recipe.difficulty)}>
                {getDifficultyText(recipe.difficulty)}
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-brand-success" />
              <span className="font-bold text-brand-primary">${costPerServing.toFixed(2)} por porción</span>
            </div>
          </div>

          {/* Ingredientes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">Ingredientes y Costos</CardTitle>
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
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {ingredient.source}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-brand-success">${ingredient.totalCost.toFixed(2)}</p>
                      <p className="text-xs text-gray-500">${ingredient.pricePerUnit.toFixed(2)}/kg</p>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-3 mt-4">
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Costo Total:</span>
                    <span className="text-brand-primary">${totalCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Costo por porción:</span>
                    <span>${costPerServing.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instrucciones */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">Instrucciones</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-primary-lighter text-brand-primary rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Información nutricional */}
          {recipe.nutritionInfo && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Información Nutricional (por porción)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{recipe.nutritionInfo.calories}</p>
                    <p className="text-sm text-gray-600">Calorías</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">{recipe.nutritionInfo.protein}g</p>
                    <p className="text-sm text-gray-600">Proteína</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-600">{recipe.nutritionInfo.carbs}g</p>
                    <p className="text-sm text-gray-600">Carbohidratos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-success">{recipe.nutritionInfo.fat}g</p>
                    <p className="text-sm text-gray-600">Grasas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeModal;
