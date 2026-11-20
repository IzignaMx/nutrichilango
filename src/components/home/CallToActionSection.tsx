
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-primary-foreground rounded-2xl p-6 md:p-8 lg:p-10 text-center mx-4 sm:mx-0">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
        Usa el comparador para planear tus compras
      </h2>
      <p className="text-primary-foreground/80 mb-4 md:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4 sm:px-0">
        Aprende a leer las unidades, las fechas de observación y las diferencias entre presentaciones.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
        <Button 
          asChild
          variant="secondary"
          size="lg"
          className="bg-background text-brand-primary hover:bg-background/90 w-full sm:w-auto"
        >
          <Link to="/how-it-works">Cómo se hacen las comparaciones</Link>
        </Button>
        <Button 
          asChild
          variant="ghost"
          size="lg"
          className="bg-transparent text-background border border-background/30 hover:bg-background/10 hover:text-background w-full sm:w-auto"
        >
          <Link to="/guide">📚 Guía de uso</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
