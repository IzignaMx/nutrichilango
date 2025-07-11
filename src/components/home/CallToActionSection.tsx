
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-primary-foreground rounded-2xl p-6 md:p-8 lg:p-10 text-center mx-4 sm:mx-0">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
        ¿Quieres saber más sobre alimentación plant-based?
      </h2>
      <p className="text-primary-foreground/80 mb-4 md:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4 sm:px-0">
        Descubre nuestra metodología, fuentes de datos y guías completas 
        para hacer la transición hacia una alimentación más sostenible.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
        <Button 
          asChild
          variant="secondary"
          size="lg"
          className="bg-background text-brand-primary hover:bg-background/90 w-full sm:w-auto"
        >
          <Link to="/how-it-works">¿Cómo Funciona?</Link>
        </Button>
        <Button 
          asChild
          variant="outline"
          size="lg"
          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-brand-primary w-full sm:w-auto"
        >
          <Link to="/guide">Guía Completa</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
