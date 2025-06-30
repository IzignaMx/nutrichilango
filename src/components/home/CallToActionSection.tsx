
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        ¿Quieres saber más sobre alimentación plant-based?
      </h2>
      <p className="text-green-100 mb-6 max-w-2xl mx-auto">
        Descubre nuestra metodología, fuentes de datos y guías completas 
        para hacer la transición hacia una alimentación más sostenible.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          asChild
          variant="secondary"
          size="lg"
          className="bg-white text-green-700 hover:bg-green-50"
        >
          <Link to="/methodology">Ver Metodología</Link>
        </Button>
        <Button 
          asChild
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-green-700"
        >
          <Link to="/guide">Guía Completa</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
