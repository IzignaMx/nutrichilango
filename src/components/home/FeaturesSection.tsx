
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingDown, BarChart3, MapPin } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white" role="region" aria-labelledby="features-heading">
      <div className="container mx-auto max-w-6xl">
        <h2 id="features-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">
          Los 3 Secretos Para <span className="text-brand-primary">Transformar Tu Vida</span> Sin Sacrificios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-brand-primary-lighter rounded-full flex items-center justify-center mb-4">
                <TrendingDown className="w-8 h-8 text-brand-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl">💰 Libera Tu Dinero (Ahorra Hasta 40%)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                <strong>¡Deja de perder dinero!</strong> Nuestros usuarios ahorran en promedio $2,500 pesos al mes. 
                Descubre los <span className="text-brand-primary font-semibold">precios secretos</span> que las grandes cadenas no quieren que conozcas.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl">🧬 Científicamente Comprobado</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                <strong>La ciencia no miente:</strong> Cada comparación está respaldada por datos nutricionales reales. 
                Ve cómo tu cuerpo puede obtener <span className="text-blue-600 font-semibold">más proteína, fibra y vitaminas</span> 
                gastando menos.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl">🗺️ Encuentra Todo Cerca de Ti</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                <strong>No pierdas tiempo buscando.</strong> Te mostramos exactamente dónde encontrar cada producto 
                en la CDMX. Desde el <span className="text-purple-600 font-semibold">mercado de tu colonia hasta las mejores tiendas especializadas</span>.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
