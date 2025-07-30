import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FloatingActionButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onClick,
  icon,
  label,
  className
}) => {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
        "bg-brand-primary hover:bg-brand-primary-light text-primary-foreground",
        "focus:ring-2 focus:ring-brand-primary focus:ring-offset-2",
        "md:bottom-8 md:right-8",
        className
      )}
      aria-label={label}
    >
      {icon}
    </Button>
  );
};

export default FloatingActionButton;