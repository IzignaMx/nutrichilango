
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info, Heart, Zap, Shield } from 'lucide-react';

interface NutritionalReferenceInfoProps {
  category: string;
}

const NutritionalReferenceInfo: React.FC<NutritionalReferenceInfoProps> = ({ category }) => {
  const getReferenceInfo = (category: string) => {
    const references = {
      proteins: {
        title: 'Proteínas - Marco de Referencia',
        dailyRecommendation: 'Adulto promedio: 0.8-1.2g por kg de peso corporal',
        plantBasedBenefit: 'Las proteínas vegetales reducen riesgo cardiovascular y son más sostenibles',
        keyNutrients: ['Aminoácidos esenciales', 'Hierro', 'Zinc', 'Vitamina B12 (suplementar)'],
        icon: <Zap className="w-5 h-5 text-orange-600" />
      },
      dairy: {
        title: 'Lácteos - Marco de Referencia',
        dailyRecommendation: 'Calcio diario: 1000-1200mg (adultos)',
        plantBasedBenefit: 'Alternativas vegetales pueden aportar más calcio y menos grasas saturadas',
        keyNutrients: ['Calcio', 'Vitamina D', 'Proteína', 'Probióticos'],
        icon: <Heart className="w-5 h-5 text-blue-600" />
      },
      'prepared-dishes': {
        title: 'Platillos Preparados - Marco de Referencia',
        dailyRecommendation: 'Comida balanceada: 25% proteína, 50% vegetales, 25% carbohidratos',
        plantBasedBenefit: 'Platillos plant-based aportan más fibra y antioxidantes',
        keyNutrients: ['Fibra', 'Antioxidantes', 'Vitaminas del complejo B', 'Minerales'],
        icon: <Shield className="w-5 h-5 text-purple-600" />
      }
    };

    return references[category as keyof typeof references] || references.proteins;
  };

  const refInfo = getReferenceInfo(category);

  return (
    <Card className="mb-4 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center text-blue-800">
          {refInfo.icon}
          <span className="ml-2">{refInfo.title}</span>
          <Info className="w-4 h-4 ml-2 text-blue-600" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">📊 Recomendación Diaria:</h5>
            <p className="text-gray-600">{refInfo.dailyRecommendation}</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">🌱 Ventaja Plant-Based:</h5>
            <p className="text-gray-600">{refInfo.plantBasedBenefit}</p>
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-gray-700 mb-2">🔑 Nutrientes Clave:</h5>
          <div className="flex flex-wrap gap-2">
            {refInfo.keyNutrients.map((nutrient) => (
              <Badge key={nutrient} variant="outline" className="text-xs bg-white/70">
                {nutrient}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionalReferenceInfo;
