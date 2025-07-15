
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
      'animal-vs-homemade': '🏠 ¡INCREÍBLE! Hacerlo en casa te ahorra hasta 50% - ¡Más dinero en tu bolsillo!',
      'commercial-vs-homemade': '💰 ¡ALERTA AHORRO! Elimina el sobreprecio comercial y duplica tu poder adquisitivo',
      'animal-vs-commercial': '🛒 ¡DESCUBRIMIENTO! Algunos plant-based cuestan igual o menos que la carne'
    };
    return messages[type as keyof typeof messages] || '';
  };

  const getMotivationalMessage = (priceDiff: number) => {
    if (priceDiff < -20) {
      return "🎉 ¡JACKPOT! Este ahorro puede cambiar tu vida financiera";
    } else if (priceDiff < 0) {
      return "✨ ¡GENIAL! Cada peso ahorrado es inversión en tu salud";
    } else if (priceDiff < 20) {
      return "⚖️ Inversión inteligente: Mejor salud por el mismo precio";
    } else {
      return "🌱 Inversión en tu futuro: Tu salud vale cada peso extra";
    }
  };

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-700 border-b pb-1">💡 Tu Análisis de Impacto</h4>
      <div className="space-y-4">
        <div className="text-center p-4 rounded-lg bg-gradient-to-r from-brand-primary-lighter to-green-50 border-2 border-brand-primary/20">
          <div className="flex items-center justify-center mb-2">
            {priceDifferencePercent > 0 ? (
              <TrendingUp className="w-6 h-6 text-orange-500 mr-2" />
            ) : (
              <TrendingDown className="w-6 h-6 text-brand-success mr-2" />
            )}
            <span className="text-sm text-gray-600 font-medium">Impacto en tu bolsillo:</span>
          </div>
          <p className={`text-2xl font-bold ${
            priceDifferencePercent > 0 ? 'text-orange-600' : 'text-brand-success'
          }`}>
            {priceDifferencePercent > 0 ? '+' : ''}{priceDifferencePercent.toFixed(1)}%
          </p>
          <p className="text-xs text-gray-600 mt-1 font-medium">
            {getMotivationalMessage(priceDifferencePercent)}
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
            <span className="text-sm text-gray-600 font-medium">
              {priceDifferencePercent < 0 ? '💰 Tu ahorro inmediato:' : '💎 Tu inversión en salud:'}
            </span>
            <p className={`font-bold text-lg ${
              priceDifferencePercent > 0 ? 'text-orange-600' : 'text-brand-success'
            }`}>
              ${Math.abs(plantBasedPrice - traditionalPrice).toFixed(2)} MXN
            </p>
            {priceDifferencePercent < 0 && (
              <p className="text-xs text-brand-success font-medium">
                ¡En un año ahorrarías ${(Math.abs(plantBasedPrice - traditionalPrice) * 52).toFixed(0)} pesos!
              </p>
            )}
          </div>

          <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg">
            <p className="text-sm text-blue-800 font-medium">
              {getEducationalMessage(comparisonType)}
            </p>
          </div>
          
          {hasPromotion && promotionDetails && (
            <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-lg animate-pulse">
              <p className="text-sm text-orange-800 font-bold">🔥 ¡OFERTA ESPECIAL! {promotionDetails}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonAnalysis;
