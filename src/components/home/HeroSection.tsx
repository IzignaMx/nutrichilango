
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onScrollToComparisons: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToComparisons }) => {
  return (
    <section className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-primary-foreground py-12 md:py-16 lg:py-20 px-4 sm:px-6" role="banner">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          NutriChilango - Comparador Plant-Based
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-primary-foreground/90 leading-relaxed px-4 sm:px-0">
          Compara precios y valores nutricionales entre productos tradicionales y 
          alternativas plant-based en la Ciudad de México
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-8 max-w-md sm:max-w-none mx-auto">
          <Button
            size="lg" 
            className="bg-background text-brand-primary hover:bg-background/90 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto"
            onClick={onScrollToComparisons}
          >
            Explorar Comparaciones
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-brand-primary px-8 py-3 text-lg font-semibold"
          >
            <Link to="/how-it-works">
              ¿Cómo Funciona?
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center max-w-3xl mx-auto">
          <div className="space-y-1 md:space-y-2">
            <div className="text-xl sm:text-2xl font-bold">500+</div>
            <div className="text-xs sm:text-sm text-primary-foreground/80">Productos</div>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-xl sm:text-2xl font-bold">50+</div>
            <div className="text-xs sm:text-sm text-primary-foreground/80">Tiendas</div>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-xl sm:text-2xl font-bold">15+</div>
            <div className="text-xs sm:text-sm text-primary-foreground/80">Categorías</div>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-xl sm:text-2xl font-bold">CDMX</div>
            <div className="text-xs sm:text-sm text-primary-foreground/80">Cobertura</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
