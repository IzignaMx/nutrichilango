
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Mail, Facebook, MessageCircle, Clock, HelpCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Contacto
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              ¿Tienes preguntas, sugerencias o necesitas ayuda? Estamos aquí para apoyarte
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Contact */}
        <section className="mb-16" aria-labelledby="quick-contact-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="quick-contact-heading" className="text-3xl text-center text-blue-800 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 mr-3 text-blue-600" aria-hidden="true" />
                Formas de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Contact */}
                <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <Mail className="w-16 h-16 mx-auto mb-4 text-blue-600" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Correo Electrónico</h3>
                  <p className="text-gray-600 mb-4">
                    Para consultas generales, reportes de errores o sugerencias
                  </p>
                  <Button 
                    asChild 
                    className="bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <a 
                      href="mailto:dev@izignamx.com" 
                      className="inline-flex items-center"
                      aria-label="Enviar correo a dev@izignamx.com"
                    >
                      <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                      dev@izignamx.com
                    </a>
                  </Button>
                </div>

                {/* Facebook Contact */}
                <div className="text-center p-6 bg-indigo-50 rounded-lg border border-indigo-100">
                  <Facebook className="w-16 h-16 mx-auto mb-4 text-indigo-600" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">Facebook</h3>
                  <p className="text-gray-600 mb-4">
                    Síguenos para actualizaciones y únete a nuestra comunidad
                  </p>
                  <Button 
                    asChild 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <a 
                      href="https://www.facebook.com/omni.veg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                      aria-label="Visitar nuestra página de Facebook (se abre en nueva ventana)"
                    >
                      <Facebook className="w-4 h-4 mr-2" aria-hidden="true" />
                      @omni.veg
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Response Times */}
        <section className="mb-16" aria-labelledby="response-times-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="response-times-heading" className="text-2xl text-center text-purple-800 flex items-center justify-center">
                <Clock className="w-6 h-6 mr-3 text-purple-600" aria-hidden="true" />
                Tiempos de Respuesta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Consultas Generales</h4>
                  <p className="text-gray-600 text-sm">24-48 horas</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-2">Reportes de Errores</h4>
                  <p className="text-gray-600 text-sm">12-24 horas</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">Problemas Críticos</h4>
                  <p className="text-gray-600 text-sm">2-8 horas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Types */}
        <section className="mb-16" aria-labelledby="contact-types-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="contact-types-heading" className="text-2xl text-center text-green-800">
                ¿Cómo Podemos Ayudarte?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-700">Soporte Técnico</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Problemas de navegación o funcionamiento</li>
                    <li>• Errores en datos mostrados</li>
                    <li>• Problemas de accesibilidad</li>
                    <li>• Sugerencias de mejoras técnicas</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-700">Contenido y Datos</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Correcciones de información nutricional</li>
                    <li>• Actualización de precios</li>
                    <li>• Sugerencias de productos nuevos</li>
                    <li>• Verificación de datos específicos</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-700">Colaboraciones</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Partnerships con tiendas</li>
                    <li>• Colaboraciones académicas</li>
                    <li>• Propuestas de investigación</li>
                    <li>• Alianzas comerciales</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-700">Feedback General</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Experiencia de usuario</li>
                    <li>• Sugerencias de funcionalidades</li>
                    <li>• Comentarios sobre diseño</li>
                    <li>• Ideas para nuevas características</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Before You Contact */}
        <section className="mb-16" aria-labelledby="before-contact-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="before-contact-heading" className="text-2xl text-center text-orange-800 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 mr-3 text-orange-600" aria-hidden="true" />
                Antes de Contactarnos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-orange-200 bg-orange-50">
                <HelpCircle className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-800">
                  Para una respuesta más rápida, te sugerimos revisar primero nuestras secciones de ayuda:
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">¿Primera vez usando la plataforma?</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Revisa nuestra Guía de Uso para aprender a navegar y usar todas las funcionalidades.
                  </p>
                  <Button asChild variant="outline" size="sm" className="text-blue-600 border-blue-300 hover:bg-blue-100">
                    <a href="/guide">Ver Guía de Uso</a>
                  </Button>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">¿Dudas sobre los datos?</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Consulta nuestras Preguntas Frecuentes y sección de Limitaciones.
                  </p>
                  <div className="space-x-2">
                    <Button asChild variant="outline" size="sm" className="text-green-600 border-green-300 hover:bg-green-100">
                      <a href="/faq">Ver FAQ</a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="text-green-600 border-green-300 hover:bg-green-100">
                      <a href="/limitations">Ver Limitaciones</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Guidelines */}
        <section aria-labelledby="guidelines-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="guidelines-heading" className="text-2xl text-center text-gray-800">
                Para una Mejor Comunicación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-3">Al contactarnos, por favor incluye:</h4>
                <ul className="space-y-2 text-gray-600" role="list">
                  <li>• <strong>Asunto claro:</strong> Describe brevemente el tema de tu consulta</li>
                  <li>• <strong>Descripción detallada:</strong> Explica tu pregunta o problema específico</li>
                  <li>• <strong>Pasos para reproducir:</strong> Si reportas un error, indica cómo ocurrió</li>
                  <li>• <strong>Navegador y dispositivo:</strong> Ayuda a identificar problemas técnicos</li>
                  <li>• <strong>Screenshots:</strong> Si es relevante, incluye capturas de pantalla</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;
