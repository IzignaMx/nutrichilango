
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Product } from '@/data/types';

interface NutritionComparisonChartProps {
  product: Product;
}

const NutritionComparisonChart: React.FC<NutritionComparisonChartProps> = ({ product }) => {
  // Si no hay datos nutricionales, no mostrar el componente
  if (!product.traditional.nutritionInfo || !product.plantBased.nutritionInfo) {
    return null;
  }

  const traditionalNutrition = product.traditional.nutritionInfo;
  const plantBasedNutrition = product.plantBased.nutritionInfo;

  // Datos para gráfica de barras
  const nutritionData = [
    {
      nutrient: 'Proteína (g)',
      tradicional: traditionalNutrition.protein,
      plantBased: plantBasedNutrition.protein,
    },
    {
      nutrient: 'Carbohidratos (g)',
      tradicional: traditionalNutrition.carbs,
      plantBased: plantBasedNutrition.carbs,
    },
    {
      nutrient: 'Grasas (g)',
      tradicional: traditionalNutrition.fat,
      plantBased: plantBasedNutrition.fat,
    },
    {
      nutrient: 'Calorías',
      tradicional: traditionalNutrition.calories,
      plantBased: plantBasedNutrition.calories,
    }
  ];

  // Agregar minerales si están disponibles
  if (traditionalNutrition.calcium && plantBasedNutrition.calcium) {
    nutritionData.push({
      nutrient: 'Calcio (mg)',
      tradicional: traditionalNutrition.calcium,
      plantBased: plantBasedNutrition.calcium,
    });
  }

  if (traditionalNutrition.iron && plantBasedNutrition.iron) {
    nutritionData.push({
      nutrient: 'Hierro (mg)',
      tradicional: traditionalNutrition.iron,
      plantBased: plantBasedNutrition.iron,
    });
  }

  if (traditionalNutrition.fiber !== undefined && plantBasedNutrition.fiber !== undefined) {
    nutritionData.push({
      nutrient: 'Fibra (g)',
      tradicional: traditionalNutrition.fiber,
      plantBased: plantBasedNutrition.fiber,
    });
  }

  // Datos para gráfica radar (macronutrientes normalizados)
  const radarData = [
    {
      nutrient: 'Proteína',
      tradicional: (traditionalNutrition.protein / 25) * 100, // Normalizado a base 25g
      plantBased: (plantBasedNutrition.protein / 25) * 100,
    },
    {
      nutrient: 'Carbohidratos',
      tradicional: (traditionalNutrition.carbs / 50) * 100, // Normalizado a base 50g
      plantBased: (plantBasedNutrition.carbs / 50) * 100,
    },
    {
      nutrient: 'Grasas',
      tradicional: (traditionalNutrition.fat / 20) * 100, // Normalizado a base 20g
      plantBased: (plantBasedNutrition.fat / 20) * 100,
    },
    {
      nutrient: 'Calorías',
      tradicional: (traditionalNutrition.calories / 300) * 100, // Normalizado a base 300kcal
      plantBased: (plantBasedNutrition.calories / 300) * 100,
    }
  ];

  return (
    <div className="space-y-6">
      {/* Gráfica de barras comparativa */}
      <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg text-gray-800 flex items-center">
            📊 Comparación Nutricional por 100g
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={nutritionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
                  name === 'tradicional' ? 'Producto Tradicional' : 'Alternativa Plant-Based'
                ]}
                labelStyle={{ color: '#374151' }}
              />
              <Legend />
              <Bar 
                dataKey="tradicional" 
                fill="#10B981" 
                name="Tradicional"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="plantBased" 
                fill="#3B82F6" 
                name="Plant-Based"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Gráfica radar para perfil nutricional */}
      <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg text-gray-800 flex items-center">
            🎯 Perfil Nutricional (% del valor de referencia)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
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
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Radar
                name="Plant-Based"
                dataKey="plantBased"
                stroke="#3B82F6"
                fill="#3B82F6"
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

      {/* Resumen nutricional */}
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
                {plantBasedNutrition.fiber && plantBasedNutrition.fiber > (traditionalNutrition.fiber || 0) && (
                  <li className="flex items-center text-green-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Mayor contenido de fibra (+{(plantBasedNutrition.fiber - (traditionalNutrition.fiber || 0)).toFixed(1)}g)
                  </li>
                )}
                {plantBasedNutrition.iron && plantBasedNutrition.iron > (traditionalNutrition.iron || 0) && (
                  <li className="flex items-center text-green-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Mayor contenido de hierro (+{(plantBasedNutrition.iron - (traditionalNutrition.iron || 0)).toFixed(1)}mg)
                  </li>
                )}
                {plantBasedNutrition.calories < traditionalNutrition.calories && (
                  <li className="flex items-center text-green-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Menor contenido calórico (-{(traditionalNutrition.calories - plantBasedNutrition.calories)} kcal)
                  </li>
                )}
                <li className="flex items-center text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Libre de colesterol y lactosa
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700">Consideraciones:</h4>
              <ul className="space-y-1 text-sm">
                {traditionalNutrition.protein > plantBasedNutrition.protein && (
                  <li className="flex items-center text-amber-700">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    El producto tradicional tiene más proteína (+{(traditionalNutrition.protein - plantBasedNutrition.protein).toFixed(1)}g)
                  </li>
                )}
                <li className="flex items-center text-blue-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Combinar con otros alimentos plant-based para perfil completo
                </li>
                <li className="flex items-center text-blue-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Mayor biodisponibilidad de algunos nutrientes en plantas
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NutritionComparisonChart;
