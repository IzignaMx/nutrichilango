
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingDown, BarChart3, MapPin } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white" role="region" aria-labelledby="features-heading">
      <div className="container mx-auto max-w-6xl">
        <h2 id="features-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">
          Qué puedes comparar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-brand-primary-lighter rounded-full flex items-center justify-center mb-4">
                <TrendingDown className="w-8 h-8 text-brand-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Precios y presentaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Distingue el importe del paquete del precio por kilo, litro o pieza cuando la presentación permite calcularlo.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-brand-primary-lighter rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-brand-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Datos nutricionales</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Revisa las porciones y las referencias de proteína, fibra y otros nutrientes cuando hay datos disponibles.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-brand-primary-lighter rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-brand-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Tiendas y mercados</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Consulta dónde se registró un precio. Verifica con la tienda el importe y la disponibilidad antes de comprar.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
