
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "¿Qué es el Comparador Plant-Based CDMX?",
          answer: "Es una plataforma que facilita la transición hacia una alimentación basada en plantas mediante comparaciones objetivas de precios y valores nutricionales entre productos de origen animal y sus alternativas plant-based en la Ciudad de México."
        },
        {
          question: "¿Es gratuito usar la plataforma?",
          answer: "Sí, el acceso a toda la información y funcionalidades de la plataforma es completamente gratuito. Nuestro objetivo es democratizar el acceso a información nutricional y de precios."
        },
        {
          question: "¿Con qué frecuencia se actualizan los datos?",
          answer: "Los precios se actualizan semanalmente mediante relevamientos automáticos y manuales. Los datos nutricionales se revisan mensualmente o cuando hay cambios significativos en las formulaciones de productos."
        }
      ]
    },
    {
      category: "Precios",
      questions: [
        {
          question: "¿Por qué los precios pueden diferir de los que veo en la tienda?",
          answer: "Los precios pueden variar por ubicación específica, promociones temporales, fechas de caducidad, y diferencias entre sucursales. Siempre recomendamos verificar precios actuales antes de realizar compras."
        },
        {
          question: "¿Incluyen los precios de productos caseros el costo de tiempo de preparación?",
          answer: "Los precios base incluyen solo ingredientes. Opcionalmente, puedes ver estimaciones que incluyen tiempo de preparación valorado al salario mínimo, pero esto es solo referencial."
        },
        {
          question: "¿Cómo calculan las diferencias porcentuales?",
          answer: "Tomamos el precio del producto tradicional como base 100% y calculamos la diferencia: ((Precio Plant-Based - Precio Tradicional) / Precio Tradicional) × 100. Un resultado positivo indica que la alternativa plant-based es más cara."
        }
      ]
    },
    {
      category: "Nutrición",
      questions: [
        {
          question: "¿Son confiables los datos nutricionales mostrados?",
          answer: "Utilizamos fuentes oficiales como USDA FoodData Central, tablas del INCMNSZ, y etiquetas de productos. Sin embargo, pueden existir variaciones por lote, preparación, o formulaciones específicas del fabricante."
        },
        {
          question: "¿Qué significan los porcentajes en las gráficas de radar?",
          answer: "Los porcentajes representan qué proporción de la Ingesta Diaria Recomendada (IDR) aporta una porción de 100g del producto. Un 50% significa que cubre la mitad de las necesidades diarias de ese nutriente."
        },
        {
          question: "¿Consideran la biodisponibilidad de nutrientes?",
          answer: "Los datos mostrados son valores brutos. La biodisponibilidad puede variar según la fuente (animal vs vegetal) y la preparación. Recomendamos consultar con profesionales de la salud para evaluaciones personalizadas."
        }
      ]
    },
    {
      category: "Uso de la Plataforma",
      questions: [
        {
          question: "¿Cómo interpreto las comparaciones de tres tipos?",
          answer: "Animal vs Comercial Plant-Based: compara productos listos para consumir. Animal vs Casero Plant-Based: evalúa el costo de preparar en casa. Comercial vs Casero Plant-Based: muestra ahorros potenciales de cocinar versus comprar procesado."
        },
        {
          question: "¿Puedo filtrar por ubicación específica?",
          answer: "Actualmente filtramos por tipo de tienda (supermercados, mercados, tiendas especializadas). Estamos trabajando para incluir filtros por zona geográfica específica en futuras versiones."
        },
        {
          question: "¿Cómo uso las recetas sugeridas?",
          answer: "Las recetas incluyen lista de ingredientes, costos estimados, tiempo de preparación, y información nutricional. Son sugerencias para replicar sabores y texturas de productos tradicionales usando ingredientes plant-based."
        }
      ]
    },
    {
      category: "Limitaciones",
      questions: [
        {
          question: "¿Qué limitaciones tiene la plataforma?",
          answer: "No cubrimos todos los productos del mercado, los precios varían por ubicación y tiempo, no consideramos preferencias individuales de sabor, y no sustituimos asesoría nutricional profesional."
        },
        {
          question: "¿La información nutricional considera mis necesidades específicas?",
          answer: "No. Los datos son generales para adultos promedio. Personas con condiciones médicas, alergias, o necesidades nutricionales específicas deben consultar profesionales de la salud."
        },
        {
          question: "¿Qué hacer si encuentro información incorrecta?",
          answer: "Puedes reportar inconsistencias a través de nuestra página de contacto. Investigamos todos los reportes y actualizamos la información cuando confirmamos errores."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Encuentra respuestas a las dudas más comunes sobre nuestra plataforma
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search */}
        <section className="mb-12">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" aria-hidden="true" />
                <Input
                  placeholder="Buscar en preguntas frecuentes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-center"
                  aria-label="Buscar preguntas frecuentes"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Categories */}
        {filteredFaqs.length === 0 ? (
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <HelpCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" aria-hidden="true" />
              <h3 className="text-xl text-gray-600 mb-2">No se encontraron resultados</h3>
              <p className="text-gray-500">
                Intenta con otros términos de búsqueda o explora todas las categorías
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {filteredFaqs.map((category, categoryIndex) => (
              <section key={categoryIndex} aria-labelledby={`category-${categoryIndex}-heading`}>
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle 
                      id={`category-${categoryIndex}-heading`}
                      className="text-2xl text-green-800 flex items-center"
                    >
                      <Badge className="mr-3 bg-green-100 text-green-800">
                        {category.category}
                      </Badge>
                      {category.questions.length} preguntas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="space-y-2">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border border-gray-200 rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left hover:no-underline hover:text-green-700">
                            <span className="font-medium">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </section>
            ))}
          </div>
        )}

        {/* Contact Section */}
        <section className="mt-16" aria-labelledby="contact-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="contact-heading" className="text-2xl text-center text-green-800">
                ¿No encontraste tu respuesta?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Si tienes una pregunta que no está cubierta aquí, no dudes en contactarnos. 
                Estamos aquí para ayudarte a aprovechar al máximo nuestra plataforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                  📧 Respuesta en 24-48 horas
                </Badge>
                <Badge className="bg-green-100 text-green-800 px-4 py-2">
                  💬 Soporte en español
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
