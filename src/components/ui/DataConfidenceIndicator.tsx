import React from 'react';
import { calculateDataConfidence } from '@/lib/nutricore';
import { NutritionInfo } from '@/data/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

interface DataConfidenceIndicatorProps {
  nutrition: NutritionInfo;
  className?: string;
}

const DataConfidenceIndicator: React.FC<DataConfidenceIndicatorProps> = ({ nutrition, className = '' }) => {
  const completeness = Math.round(calculateDataConfidence(nutrition) * 100);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button type="button" className={`flex items-center gap-1 cursor-help text-muted-foreground ${className}`}>
            <HelpCircle className="w-3 h-3" aria-hidden="true" />
            <span className="text-[10px] font-medium">Campos: {completeness}%</span>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Campos nutricionales disponibles: {completeness}%</p>
          <p className="text-xs text-muted-foreground">
            La presencia de campos no acredita exactitud, fecha ni procedencia.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DataConfidenceIndicator;
