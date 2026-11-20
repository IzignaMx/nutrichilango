
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SkipLink } from '@/components/ui/skip-link';
import heroImage from '@/assets/hero-plant-nutrition.jpg';

interface HeroSectionProps {
  onScrollToComparisons: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToComparisons }) => {
  return (
    <>
      <SkipLink targetId="main-content">
        Saltar al contenido principal
      </SkipLink>
      <section 
        className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden" 
        role="banner" 
        aria-labelledby="hero-heading"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(21, 128, 61, 0.85), rgba(5, 150, 105, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white drop-shadow-lg">
            Compara precios y alimentos de origen vegetal
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 leading-relaxed px-4 sm:px-0 drop-shadow-md">
            Consulta precios de referencia y datos nutricionales de alimentos en Ciudad de México. Los precios corresponden a observaciones históricas y no son cotizaciones vigentes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-8 max-w-md sm:max-w-none mx-auto">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-white/90 hover:text-green-800 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto transition-all duration-300 hover:scale-105"
              onClick={onScrollToComparisons}
              aria-describedby="hero-cta-description"
            >
              🛒 Compara Precios Ahora
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
            <span id="hero-cta-description" className="sr-only">
              Ver comparaciones de precios y productos plant-based en CDMX
            </span>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-green-700 px-8 py-3 text-lg font-semibold backdrop-blur-sm transition-colors duration-200"
            >
              <Link to="/how-it-works" aria-describedby="how-it-works-description">
                ¿Cómo Funciona?
              </Link>
            </Button>
            <span id="how-it-works-description" className="sr-only">
              Aprende cómo funciona nuestra plataforma de comparación
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
