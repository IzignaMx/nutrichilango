
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ComparisonAnalysisProps {
  priceDifferencePercent: number;
  traditionalPrice: number;
  plantBasedPrice: number;
}

const ComparisonAnalysis: React.FC<ComparisonAnalysisProps> = ({
  priceDifferencePercent,
  traditionalPrice,
  plantBasedPrice
}) => {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-700 border-b pb-1">Comparación de precios</h4>
      <div className="space-y-4">
        <div className="text-center p-4 rounded-lg bg-gradient-to-r from-brand-primary-lighter to-green-50 border-2 border-brand-primary/20">
          <div className="flex items-center justify-center mb-2">
            {priceDifferencePercent > 0 ? (
              <TrendingUp className="w-6 h-6 text-orange-500 mr-2" />
            ) : (
              <TrendingDown className="w-6 h-6 text-brand-success mr-2" />
            )}
            <span className="text-sm text-gray-600 font-medium">Diferencia entre precios de las presentaciones:</span>
          </div>
          <p className={`text-2xl font-bold ${
            priceDifferencePercent > 0 ? 'text-orange-600' : 'text-brand-success'
          }`}>
            {priceDifferencePercent > 0 ? '+' : ''}{priceDifferencePercent.toFixed(1)}%
          </p>
          <p className="text-xs text-gray-600 mt-1 font-medium">
            Las presentaciones pueden contener cantidades distintas.
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
            <span className="text-sm text-gray-600 font-medium">
              Diferencia entre importes:
            </span>
            <p className={`font-bold text-lg ${
              priceDifferencePercent > 0 ? 'text-orange-600' : 'text-brand-success'
            }`}>
              ${Math.abs(plantBasedPrice - traditionalPrice).toFixed(2)} MXN
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ComparisonAnalysis;

