
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Leaf, Target, Users, TrendingUp, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Acerca de Nosotros
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Facilitamos la transición hacia una alimentación basada en plantas mediante 
              información transparente y comparaciones objetivas de precios y nutrición.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-16" aria-labelledby="mission-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="mission-heading" className="text-3xl text-center text-green-800 flex items-center justify-center">
                <Target className="w-8 h-8 mr-3 text-yellow-600" aria-hidden="true" />
                Nuestra Misión
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Democratizar el acceso a información nutricional y de precios para facilitar 
                decisiones alimentarias informadas, promoviendo una transición sostenible hacia 
                una alimentación basada en plantas en la Ciudad de México.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-16" aria-labelledby="values-heading">
          <h2 id="values-heading" className="text-3xl font-bold text-center mb-12 text-green-800">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-yellow-600" aria-hidden="true" />
                  Transparencia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Proporcionamos datos verificables y metodologías claras. 
                  Todas nuestras fuentes son públicas y auditables.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-yellow-600" aria-hidden="true" />
                  Inclusividad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Diseñamos para todos, cumpliendo estándares de accesibilidad 
                  WCAG 2.1 AA y considerando diversas necesidades económicas.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 flex items-center">
                  <Leaf className="w-6 h-6 mr-3 text-yellow-600" aria-hidden="true" />
                  Sostenibilidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Promovemos elecciones alimentarias que beneficien tanto 
                  la salud personal como la del planeta.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-16" aria-labelledby="what-we-do-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="what-we-do-heading" className="text-3xl text-center text-green-800 flex items-center justify-center">
                <Heart className="w-8 h-8 mr-3 text-red-500" aria-hidden="true" />
                Qué Hacemos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">Comparaciones Inteligentes</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li className="flex items-start">
                      <Badge className="mr-2 mt-1 bg-green-100 text-green-800">✓</Badge>
                      Productos animales vs alternativas plant-based comerciales
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 mt-1 bg-green-100 text-green-800">✓</Badge>
                      Productos animales vs preparaciones caseras plant-based
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 mt-1 bg-green-100 text-green-800">✓</Badge>
                      Alternativas comerciales vs caseras plant-based
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">Análisis Nutricional</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li className="flex items-start">
                      <Badge className="mr-2 mt-1 bg-blue-100 text-blue-800">📊</Badge>
                      Comparativas detalladas de macronutrientes
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 mt-1 bg-blue-100 text-blue-800">📊</Badge>
                      Análisis de micronutrientes esenciales
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 mt-1 bg-blue-100 text-blue-800">📊</Badge>
                      Perfiles nutricionales visualizados
                    </li>
                  </ul>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" aria-hidden="true" />
                  Impacto Esperado
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Facilitamos decisiones alimentarias informadas que pueden resultar en beneficios 
                  económicos, nutricionales y ambientales. Nuestro objetivo es que cada persona 
                  pueda explorar alternativas plant-based con confianza y conocimiento.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section aria-labelledby="contact-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="contact-heading" className="text-2xl text-center text-green-800">
                Contacto y Colaboraciones
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                ¿Tienes sugerencias, datos adicionales o quieres colaborar? 
                Nos encantaría conocer tu perspectiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Badge className="bg-green-100 text-green-800 px-4 py-2">
                  Colaboraciones abiertas
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                  Datos verificados
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2">
                  Comunidad inclusiva
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
