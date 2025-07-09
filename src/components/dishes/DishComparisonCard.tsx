
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChefHat, DollarSign, Heart, Clock, Users, TrendingUp, TrendingDown, BookOpen } from 'lucide-react';
import DishNutritionChart from './DishNutritionChart';
import VeganRecipeModal from './VeganRecipeModal';
import { DishComparison } from '@/data/dishes/types';

interface DishComparisonCardProps {
  dish: DishComparison;
  index: number;
}

const DishComparisonCard: React.FC<DishComparisonCardProps> = ({ dish, index }) => {
  const [showRecipe, setShowRecipe] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const getCategoryColor = (category: string) => {
    const colors = {
      mexican: 'bg-red-100 text-red-800',
      popular: 'bg-blue-100 text-blue-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: 'bg-brand-primary-lighter text-brand-primary',
      medium: 'bg-yellow-100 text-yellow-800',
      hard: 'bg-red-100 text-red-800'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return 'text-brand-success';
    if (score >= 60) return 'text-yellow-600';
    return 'text-destructive';
  };

  return (
    <>
      <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2 text-gray-800">
                {dish.traditional.name} vs {dish.veganVersion.name}
              </CardTitle>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className={getCategoryColor(dish.category)}>
                  {dish.category === 'mexican' ? 'Mexicano' : 'Popular'}
                </Badge>
                <Badge className={getDifficultyColor(dish.veganVersion.difficulty)}>
                  {dish.veganVersion.difficulty === 'easy' ? 'Fácil' : 
                   dish.veganVersion.difficulty === 'medium' ? 'Medio' : 'Difícil'}
                </Badge>
                {index === 0 && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900">
                    🏆 Mejor Opción
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className={`text-2xl font-bold ${getHealthScoreColor(dish.healthScore)}`}>
                {dish.healthScore}
              </div>
              <div className="text-sm text-gray-500">Salud</div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">General</TabsTrigger>
              <TabsTrigger value="price">Precio</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrición</TabsTrigger>
              <TabsTrigger value="health">Salud</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Traditional Dish */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-700 border-b pb-2 flex items-center">
                    <ChefHat className="w-4 h-4 mr-2" />
                    Versión Tradicional
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">Platillo:</span>
                      <p className="font-medium">{dish.traditional.name}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600">Precio estimado:</span>
                        <p className="text-lg font-bold text-red-600">
                          ${dish.traditional.estimatedPrice.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Por porción:</span>
                        <p className="text-lg font-bold text-red-600">
                          ${(dish.traditional.estimatedPrice / dish.traditional.servings).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600 flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          Porciones:
                        </span>
                        <p className="font-medium">{dish.traditional.servings}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          Tiempo:
                        </span>
                        <p className="font-medium">{dish.traditional.prepTime}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vegan Version */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-muted-foreground border-b pb-2 flex items-center">
                    <ChefHat className="w-4 h-4 mr-2 text-brand-primary" />
                    Versión Plant-Based
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Platillo:</span>
                      <p className="font-medium">{dish.veganVersion.name}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-muted-foreground">Precio estimado:</span>
                        <p className="text-lg font-bold text-brand-success">
                          ${dish.veganVersion.estimatedPrice.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Por porción:</span>
                        <p className="text-lg font-bold text-brand-success">
                          ${(dish.veganVersion.estimatedPrice / dish.veganVersion.servings).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600 flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          Porciones:
                        </span>
                        <p className="font-medium">{dish.veganVersion.servings}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          Tiempo:
                        </span>
                        <p className="font-medium">{dish.veganVersion.prepTime}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setShowRecipe(true)}
                      className="w-full mt-3 text-brand-primary border-brand-primary hover:bg-brand-primary-lighter"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Ver Receta Completa
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="price" className="space-y-4 mt-6">
              <div className="text-center p-6 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="flex items-center justify-center mb-4">
                  {dish.priceDifferencePercent > 0 ? (
                    <TrendingUp className="w-8 h-8 text-destructive mr-3" />
                  ) : (
                    <TrendingDown className="w-8 h-8 text-brand-success mr-3" />
                  )}
                  <div>
                    <span className="text-sm text-muted-foreground">Diferencia de precio:</span>
                    <p className={`text-3xl font-bold ${
                      dish.priceDifferencePercent > 0 ? 'text-destructive' : 'text-brand-success'
                    }`}>
                      {dish.priceDifferencePercent > 0 ? '+' : ''}{dish.priceDifferencePercent.toFixed(1)}%
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-background rounded-lg">
                    <h5 className="text-sm font-medium text-muted-foreground mb-2">Ahorro/Costo extra total:</h5>
                    <p className={`text-xl font-bold ${
                      dish.priceDifferencePercent > 0 ? 'text-destructive' : 'text-brand-success'
                    }`}>
                      ${Math.abs(dish.veganVersion.estimatedPrice - dish.traditional.estimatedPrice).toFixed(2)} MXN
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <h5 className="text-sm font-medium text-muted-foreground mb-2">Por porción:</h5>
                    <p className={`text-xl font-bold ${
                      dish.priceDifferencePercent > 0 ? 'text-destructive' : 'text-brand-success'
                    }`}>
                      ${Math.abs((dish.veganVersion.estimatedPrice / dish.veganVersion.servings) - 
                        (dish.traditional.estimatedPrice / dish.traditional.servings)).toFixed(2)} MXN
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-4 mt-6">
              <DishNutritionChart dish={dish} />
            </TabsContent>

            <TabsContent value="health" className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-muted-foreground flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-brand-primary" />
                    Beneficios Plant-Based
                  </h4>
                  <ul className="space-y-2">
                    {dish.healthBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="w-2 h-2 bg-brand-success rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-muted-foreground">Impacto Ambiental</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Reducción CO2:</span>
                      <span className="font-medium text-brand-success">-{dish.environmentalImpact.co2Reduction}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Agua ahorrada:</span>
                      <span className="font-medium text-brand-success">-{dish.environmentalImpact.waterSaving}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Tierra ahorrada:</span>
                      <span className="font-medium text-brand-success">-{dish.environmentalImpact.landSaving}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <VeganRecipeModal
        isOpen={showRecipe}
        onClose={() => setShowRecipe(false)}
        recipe={dish.veganVersion}
      />
    </>
  );
};

export default DishComparisonCard;
