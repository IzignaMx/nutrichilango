
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ComparisonAnalysisProps {
  priceDifferencePercent: number;
  traditionalPrice: number;
  plantBasedPrice: number;
  comparisonType: string;
  hasPromotion: boolean;
  promotionDetails?: string;
}

const ComparisonAnalysis: React.FC<ComparisonAnalysisProps> = ({
  priceDifferencePercent,
  traditionalPrice,
  plantBasedPrice,
  comparisonType,
  hasPromotion,
  promotionDetails
}) => {
  const getEducationalMessage = (type: string) => {
    const messages = {
      'animal-vs-homemade': '🏠 Hacerlo en casa puede ser hasta 50% más económico',
      'commercial-vs-homemade': '💰 Los productos caseros eliminan el sobreprecio comercial',
      'animal-vs-commercial': '🛒 Compara precios: algunos plant-based son competitivos'
    };
    return messages[type as keyof typeof messages] || '';
  };

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-700 border-b pb-1">Análisis Económico</h4>
      <div className="space-y-4">
        <div className="text-center p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="flex items-center justify-center mb-2">
            {priceDifferencePercent > 0 ? (
              <TrendingUp className="w-6 h-6 text-red-500 mr-2" />
            ) : (
              <TrendingDown className="w-6 h-6 text-green-500 mr-2" />
            )}
            <span className="text-sm text-gray-600">Diferencia:</span>
          </div>
          <p className={`text-2xl font-bold ${
            priceDifferencePercent > 0 ? 'text-red-600' : 'text-green-600'
          }`}>
            {priceDifferencePercent > 0 ? '+' : ''}{priceDifferencePercent.toFixed(1)}%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {priceDifferencePercent < 0 ? 'Más económico' : 'Más costoso'}
          </p>
        </div>
        
        <div className="space-y-2">
          <div>
            <span className="text-sm text-gray-600">
              {priceDifferencePercent < 0 ? 'Ahorro:' : 'Costo extra:'}
            </span>
            <p className={`font-bold ${
              priceDifferencePercent > 0 ? 'text-red-600' : 'text-green-600'
            }`}>
              ${Math.abs(plantBasedPrice - traditionalPrice).toFixed(2)} MXN
            </p>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800 font-medium">
              {getEducationalMessage(comparisonType)}
            </p>
          </div>
          
          {hasPromotion && promotionDetails && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800 font-medium">🎯 {promotionDetails}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonAnalysis;
