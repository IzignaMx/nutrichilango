
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { DishComparison } from '@/data/dishes/types';

interface DishNutritionChartProps {
  dish: DishComparison;
}

const DishNutritionChart: React.FC<DishNutritionChartProps> = ({ dish }) => {
  const nutritionData = [
    {
      nutrient: 'Calorías',
      tradicional: dish.traditional.nutritionInfo.calories,
      vegano: dish.veganVersion.nutritionInfo.calories,
    },
    {
      nutrient: 'Proteína (g)',
      tradicional: dish.traditional.nutritionInfo.protein,
      vegano: dish.veganVersion.nutritionInfo.protein,
    },
    {
      nutrient: 'Carbohidratos (g)',
      tradicional: dish.traditional.nutritionInfo.carbs,
      vegano: dish.veganVersion.nutritionInfo.carbs,
    },
    {
      nutrient: 'Grasas (g)',
      tradicional: dish.traditional.nutritionInfo.fat,
      vegano: dish.veganVersion.nutritionInfo.fat,
    },
    {
      nutrient: 'Fibra (g)',
      tradicional: dish.traditional.nutritionInfo.fiber || 0,
      vegano: dish.veganVersion.nutritionInfo.fiber || 0,
    },
  ];

  const radarData = [
    {
      nutrient: 'Proteína',
      tradicional: (dish.traditional.nutritionInfo.protein / 25) * 100,
      vegano: (dish.veganVersion.nutritionInfo.protein / 25) * 100,
    },
    {
      nutrient: 'Carbohidratos',
      tradicional: (dish.traditional.nutritionInfo.carbs / 50) * 100,
      vegano: (dish.veganVersion.nutritionInfo.carbs / 50) * 100,
    },
    {
      nutrient: 'Grasas',
      tradicional: (dish.traditional.nutritionInfo.fat / 20) * 100,
      vegano: (dish.veganVersion.nutritionInfo.fat / 20) * 100,
    },
    {
      nutrient: 'Fibra',
      tradicional: ((dish.traditional.nutritionInfo.fiber || 0) / 10) * 100,
      vegano: ((dish.veganVersion.nutritionInfo.fiber || 0) / 10) * 100,
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">
            📊 Comparación Nutricional por Porción
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={nutritionData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="nutrient" 
                tick={{ fontSize: 11 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                formatter={(value, name) => [
                  `${value}${name === 'Calorías' ? ' kcal' : ''}`,
                  name === 'tradicional' ? 'Versión Tradicional' : 'Versión Plant-Based'
                ]}
                labelStyle={{ color: '#374151' }}
              />
              <Legend />
              <Bar 
                dataKey="tradicional" 
                fill="#EF4444" 
                name="Tradicional"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="vegano" 
                fill="#10B981" 
                name="Plant-Based"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">
            🎯 Perfil Nutricional (% del valor de referencia)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis tick={{ fontSize: 12 }} />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `${value}%`}
              />
              <Radar
                name="Tradicional"
                dataKey="tradicional"
                stroke="#EF4444"
                fill="#EF4444"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Radar
                name="Plant-Based"
                dataKey="vegano"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Legend />
              <Tooltip 
                formatter={(value) => [`${Math.round(value as number)}%`, '']}
                labelStyle={{ color: '#374151' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">
            💡 Análisis Nutricional
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700">Ventajas Plant-Based:</h4>
              <ul className="space-y-1 text-sm">
                {dish.veganVersion.nutritionInfo.fiber && dish.veganVersion.nutritionInfo.fiber > (dish.traditional.nutritionInfo.fiber || 0) && (
                  <li className="flex items-center text-green-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Mayor contenido de fibra (+{(dish.veganVersion.nutritionInfo.fiber - (dish.traditional.nutritionInfo.fiber || 0)).toFixed(1)}g)
                  </li>
                )}
                {dish.veganVersion.nutritionInfo.calories < dish.traditional.nutritionInfo.calories && (
                  <li className="flex items-center text-green-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Menor contenido calórico (-{(dish.traditional.nutritionInfo.calories - dish.veganVersion.nutritionInfo.calories)} kcal)
                  </li>
                )}
                <li className="flex items-center text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Libre de colesterol y lactosa
                </li>
                <li className="flex items-center text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Mayor contenido de antioxidantes
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700">Consideraciones:</h4>
              <ul className="space-y-1 text-sm">
                {dish.traditional.nutritionInfo.protein > dish.veganVersion.nutritionInfo.protein && (
                  <li className="flex items-center text-amber-700">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    La versión tradicional tiene más proteína (+{(dish.traditional.nutritionInfo.protein - dish.veganVersion.nutritionInfo.protein).toFixed(1)}g)
                  </li>
                )}
                <li className="flex items-center text-blue-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Combinar con legumbres para proteína completa
                </li>
                <li className="flex items-center text-blue-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Mayor biodisponibilidad de algunos nutrientes
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DishNutritionChart;
