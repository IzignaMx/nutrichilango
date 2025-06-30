
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onScrollToComparisons: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToComparisons }) => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4" role="banner">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Comparador Plant-Based CDMX
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
          Compara precios y valores nutricionales entre productos tradicionales y 
          alternativas plant-based en la Ciudad de México
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 text-lg font-semibold shadow-lg"
            onClick={onScrollToComparisons}
          >
            Explorar Comparaciones
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 text-lg font-semibold"
          >
            <Link to="/how-it-works">
              ¿Cómo Funciona?
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-green-200">Productos</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm text-green-200">Tiendas</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">15+</div>
            <div className="text-sm text-green-200">Categorías</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">CDMX</div>
            <div className="text-sm text-green-200">Cobertura</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
