
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NutritionInfo } from '@/data/types';

interface NutritionalAnalysisSummaryProps {
  traditionalNutrition: NutritionInfo;
  plantBasedNutrition: NutritionInfo;
}

const NutritionalAnalysisSummary: React.FC<NutritionalAnalysisSummaryProps> = ({
  traditionalNutrition,
  plantBasedNutrition
}) => {
  return (
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
  );
};

export default NutritionalAnalysisSummary;
