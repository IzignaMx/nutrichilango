
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

const ComparisonFilters: React.FC = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-center mb-2">
        <Trophy className="w-5 h-5 text-blue-600 mr-2" />
        <h3 className="font-semibold text-blue-800">Comparaciones Inteligentes Plant-Based</h3>
      </div>
      <p className="text-sm text-blue-700">
        Descubre cómo una alimentación plant-based puede ser más económica. Comparamos productos comerciales vs caseros, 
        y opciones de origen animal vs alternativas vegetales. ¡Incluye recetas con desglose de costos!
      </p>
    </div>
  );
};

export default ComparisonFilters;
