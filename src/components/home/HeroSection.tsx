
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SkipLink } from '@/components/ui/skip-link';

interface HeroSectionProps {
  onScrollToComparisons: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToComparisons }) => {
  return (
    <>
      <SkipLink targetId="main-content">
        Saltar al contenido principal
      </SkipLink>
      <section className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-primary-foreground py-12 md:py-16 lg:py-20 px-4 sm:px-6" role="banner" aria-labelledby="hero-heading">
        <div className="container mx-auto text-center max-w-4xl">
        <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">Transforma Tu Salud</span> con Plant-Based
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-primary-foreground/90 leading-relaxed px-4 sm:px-0">
          <strong>Descubre cómo cada peso que inviertas</strong> en alimentación plant-based te devuelve <span className="text-header-accent font-bold">3X más beneficios</span> para tu salud, bolsillo y planeta en CDMX
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-8 max-w-md sm:max-w-none mx-auto">
          <Button
            size="lg" 
            className="bg-background text-brand-primary hover:bg-background/90 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto"
            onClick={onScrollToComparisons}
            aria-describedby="hero-cta-description"
          >
            ¡Quiero Ahorrar y Vivir Mejor!
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Button>
          <span id="hero-cta-description" className="sr-only">
            Ver comparaciones de precios y productos plant-based
          </span>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-brand-primary px-8 py-3 text-lg font-semibold"
          >
            <Link to="/how-it-works" aria-describedby="how-it-works-description">
              ¿Cómo Funciona?
            </Link>
          </Button>
          <span id="how-it-works-description" className="sr-only">
            Aprende cómo funciona nuestra plataforma de comparación
          </span>
        </div>

        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center max-w-3xl mx-auto" 
          role="region" 
          aria-labelledby="statistics-heading"
        >
          <h2 id="statistics-heading" className="sr-only">Estadísticas de éxito</h2>
          <div className="space-y-1 md:space-y-2">
            <div className="text-xl sm:text-2xl font-bold text-header-accent" aria-label="85 por ciento">85%</div>
            <div className="text-xs sm:text-sm text-primary-foreground/80">Usuarios reportan mejor salud</div>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-xl sm:text-2xl font-bold text-header-accent" aria-label="2500 pesos">$2,500</div>
            <div className="text-xs sm:text-sm text-primary-foreground/80">Ahorro promedio mensual</div>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-xl sm:text-2xl font-bold text-header-accent" aria-label="21 días">21 días</div>
            <div className="text-xs sm:text-sm text-primary-foreground/80">Para sentir los beneficios</div>
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-xl sm:text-2xl font-bold text-header-accent" aria-label="más de 5000">+5,000</div>
            <div className="text-xs sm:text-sm text-primary-foreground/80">Familias ya transformadas</div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
