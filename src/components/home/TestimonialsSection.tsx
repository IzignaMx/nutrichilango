import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "María González",
      location: "Roma Norte",
      image: "👩‍🍳",
      text: "¡No puedo creer que esté ahorrando $3,200 pesos al mes! Mi familia está más sana que nunca y mis hijos no extrañan para nada la carne.",
      rating: 5,
      beforeAfter: "Antes: $8,500/mes → Ahora: $5,300/mes"
    },
    {
      name: "Carlos Mendoza",
      location: "Condesa",
      image: "👨‍💼",
      text: "Era escéptico, pero los resultados hablan por sí solos. Bajé 12 kilos en 4 meses, mi colesterol se normalizó y me siento con más energía que nunca.",
      rating: 5,
      beforeAfter: "Colesterol: 240 → 180 mg/dL"
    },
    {
      name: "Ana Ruiz",
      location: "Coyoacán",
      image: "👩‍⚕️",
      text: "Como doctora, puedo confirmar que el cambio en mi salud fue impresionante. Recomiendo esto a todos mis pacientes. ¡Funciona de verdad!",
      rating: 5,
      beforeAfter: "Presión arterial: 140/90 → 120/80"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🗣️ <span className="text-brand-primary">+5,000 Familias</span> Ya Transformaron Sus Vidas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>Resultados reales de personas reales</strong> que decidieron tomar control de su salud y finanzas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-6 h-6 text-brand-primary mb-2 opacity-50" />
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-brand-primary">{testimonial.beforeAfter}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Numbers */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-primary mb-2">5,247</div>
              <div className="text-sm text-gray-600">Familias transformadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-primary mb-2">$2,500</div>
              <div className="text-sm text-gray-600">Ahorro promedio mensual</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-primary mb-2">85%</div>
              <div className="text-sm text-gray-600">Reporta mejor salud</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-primary mb-2">21</div>
              <div className="text-sm text-gray-600">Días promedio para ver cambios</div>
            </div>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ⚠️ ¡ÚLTIMA OPORTUNIDAD!
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            <strong>Cada día que esperas es dinero que pierdes y salud que sacrificas.</strong> 
            Los precios de alimentos tradicionales suben 15% cada año, mientras que los plant-based se vuelven más accesibles.
          </p>
          <div className="bg-white/20 rounded-lg p-4 inline-block">
            <p className="text-xl font-bold">
              💰 Si empiezas HOY puedes ahorrar hasta <span className="text-yellow-300">$30,000 pesos este año</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;