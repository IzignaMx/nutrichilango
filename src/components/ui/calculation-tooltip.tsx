import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CalculationTooltipProps {
  title: string;
  calculation: {
    steps: string[];
    formula?: string;
    assumptions: string[];
    total: string;
  };
  className?: string;
}

const CalculationTooltip: React.FC<CalculationTooltipProps> = ({ 
  title, 
  calculation, 
  className = "w-4 h-4 text-blue-500 hover:text-blue-700 cursor-help" 
}) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className={className} />
        </TooltipTrigger>
        <TooltipContent className="max-w-sm p-4 bg-white border shadow-lg">
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
            
            {calculation.formula && (
              <div className="bg-blue-50 p-2 rounded text-xs">
                <span className="font-semibold">Fórmula:</span>
                <code className="block mt-1 text-blue-800">{calculation.formula}</code>
              </div>
            )}

            <div>
              <span className="font-semibold text-xs text-gray-700">Cálculo paso a paso:</span>
              <ol className="list-decimal list-inside space-y-1 mt-1">
                {calculation.steps.map((step, index) => (
                  <li key={index} className="text-xs text-gray-600">{step}</li>
                ))}
              </ol>
            </div>

            <div>
              <span className="font-semibold text-xs text-gray-700">Supuestos:</span>
              <ul className="list-disc list-inside space-y-1 mt-1">
                {calculation.assumptions.map((assumption, index) => (
                  <li key={index} className="text-xs text-gray-600">{assumption}</li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 p-2 rounded border-l-3 border-green-500">
              <span className="font-bold text-green-800 text-xs">
                Resultado: {calculation.total}
              </span>
            </div>

            <p className="text-xs text-gray-500 italic">
              *Los cálculos están basados en datos promedio de usuarios reales y pueden variar según hábitos individuales.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CalculationTooltip;