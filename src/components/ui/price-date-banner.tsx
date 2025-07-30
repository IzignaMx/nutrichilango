import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PriceDateBannerProps {
  lastUpdated?: Date | string;
  className?: string;
}

const PriceDateBanner: React.FC<PriceDateBannerProps> = ({
  lastUpdated,
  className
}) => {
  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const displayDate = lastUpdated ? formatDate(lastUpdated) : formatDate(new Date());

  return (
    <div className={cn(
      "flex items-center justify-center py-2 px-4 bg-brand-primary-lighter",
      className
    )}>
      <Badge 
        variant="secondary" 
        className="flex items-center gap-2 text-sm font-medium bg-background/80 text-brand-primary hover:bg-background/90"
        aria-label={`Precios actualizados al ${displayDate}`}
      >
        <Calendar className="w-4 h-4" aria-hidden="true" />
        <span>Precios actualizados al {displayDate}</span>
      </Badge>
    </div>
  );
};

export default PriceDateBanner;