
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-primary-foreground rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        ¿Quieres saber más sobre alimentación plant-based?
      </h2>
      <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
        Descubre nuestra metodología, fuentes de datos y guías completas 
        para hacer la transición hacia una alimentación más sostenible.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          asChild
          variant="secondary"
          size="lg"
          className="bg-background text-brand-primary hover:bg-background/90"
        >
          <Link to="/how-it-works">¿Cómo Funciona?</Link>
        </Button>
        <Button 
          asChild
          variant="outline"
          size="lg"
          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-brand-primary"
        >
          <Link to="/guide">Guía Completa</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
