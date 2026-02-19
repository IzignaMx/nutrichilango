
import React from 'react';
import { calculateDataConfidence } from '@/lib/nutricore';
import { NutritionInfo } from '@/data/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

interface DataConfidenceIndicatorProps {
  nutrition: NutritionInfo;
  className?: string;
}

const DataConfidenceIndicator: React.FC<DataConfidenceIndicatorProps> = ({ nutrition, className = '' }) => {
  const confidence = calculateDataConfidence(nutrition);
  
  let colorClass = 'text-red-500';
  let Icon = AlertCircle;
  let label = 'Baja';
  
  if (confidence >= 0.8) {
    colorClass = 'text-green-500';
    Icon = CheckCircle;
    label = 'Alta';
  } else if (confidence >= 0.5) {
    colorClass = 'text-yellow-500';
    Icon = HelpCircle;
    label = 'Media';
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`flex items-center gap-1 cursor-help ${className}`}>
            <Icon className={`w-3 h-3 ${colorClass}`} />
            <span className={`text-[10px] font-medium ${colorClass}`}>
              {label} ({Math.round(confidence * 100)}%)
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Confianza en los datos: {label}</p>
          <p className="text-xs text-gray-500">
            Basado en la cantidad de campos nutricionales disponibles.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DataConfidenceIndicator;
