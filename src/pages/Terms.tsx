
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FileText, Scale, AlertTriangle, Shield, Users, Eye } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 via-blue-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
              Términos de Uso
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Condiciones de uso de la plataforma Comparador Plant-Based CDMX
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Last Updated */}
        <section className="mb-16">
          <Alert className="border-blue-200 bg-blue-50 shadow-lg">
            <FileText className="h-5 w-5 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}. Al usar este sitio web, aceptas estos términos y condiciones.
            </AlertDescription>
          </Alert>
        </section>

        {/* Acceptance */}
        <section className="mb-16" aria-labelledby="acceptance-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="acceptance-heading" className="text-3xl text-center text-blue-800 flex items-center justify-center">
                <Scale className="w-8 h-8 mr-3 text-blue-600" aria-hidden="true" />
                Aceptación de Términos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Al acceder y utilizar <strong>Comparador Plant-Based CDMX</strong>, aceptas estar 
                  legalmente vinculado por estos términos de uso. Si no estás de acuerdo con alguno 
                  de estos términos, por favor no uses este sitio web.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Description of Service */}
        <section className="mb-16" aria-labelledby="service-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="service-heading" className="text-3xl text-center text-green-800 flex items-center justify-center">
                <Eye className="w-8 h-8 mr-3 text-green-600" aria-hidden="true" />
                Descripción del Servicio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Propósito de la Plataforma</h3>
                  <p className="text-gray-600 mb-4">
                    Comparador Plant-Based CDMX es una plataforma informativa que facilita la comparación 
                    de precios y valores nutricionales entre productos alimentarios tradicionales y sus 
                    alternativas basadas en plantas en la Ciudad de México.
                  </p>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Comparaciones de precios entre productos</li>
                    <li>• Análisis nutricional comparativo</li>
                    <li>• Información sobre tiendas y ubicaciones</li>
                    <li>• Recetas y preparaciones caseras</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">Naturaleza del Servicio</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• El servicio es <strong>gratuito</strong> y de <strong>acceso libre</strong></li>
                    <li>• La información es de carácter <strong>informativo únicamente</strong></li>
                    <li>• No somos un servicio de venta o intermediación comercial</li>
                    <li>• No proporcionamos consejos médicos o nutricionales personalizados</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* User Responsibilities */}
        <section className="mb-16" aria-labelledby="responsibilities-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="responsibilities-heading" className="text-3xl text-center text-purple-800 flex items-center justify-center">
                <Users className="w-8 h-8 mr-3 text-purple-600" aria-hidden="true" />
                Responsabilidades del Usuario
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-700 mb-3">Uso Apropiado</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Usar la plataforma únicamente para fines informativos y legales</li>
                    <li>• No intentar acceder a áreas restringidas o datos protegidos</li>
                    <li>• No usar la información para actividades comerciales sin autorización</li>
                    <li>• Respetar los derechos de propiedad intelectual</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-700 mb-3">Actividades Prohibidas</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Scraping automatizado o extracción masiva de datos</li>
                    <li>• Intentos de dañar o comprometer la seguridad del sitio</li>
                    <li>• Uso de la plataforma para actividades ilegales</li>
                    <li>• Interferir con el funcionamiento normal del servicio</li>
                    <li>• Crear cuentas múltiples o falsas (cuando aplique)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-700 mb-3">Consecuencias del Mal Uso</h3>
                  <p className="text-gray-600">
                    Nos reservamos el derecho de restringir o prohibir el acceso a usuarios que 
                    violen estos términos, sin previo aviso y sin responsabilidad de nuestra parte.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Disclaimers */}
        <section className="mb-16" aria-labelledby="disclaimers-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="disclaimers-heading" className="text-3xl text-center text-red-800 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 mr-3 text-red-600" aria-hidden="true" />
                Descargos de Responsabilidad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Importante:</strong> La información proporcionada es de carácter referencial 
                  y no constituye asesoramiento profesional de ningún tipo.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-700 mb-3">Exactitud de la Información</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Los precios pueden variar y no estar actualizados en tiempo real</li>
                    <li>• Los datos nutricionales son aproximados y pueden contener errores</li>
                    <li>• La disponibilidad de productos puede cambiar sin previo aviso</li>
                    <li>• No garantizamos la exactitud, completitud o actualidad de la información</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold text-orange-700 mb-3">Limitación de Responsabilidad</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• No somos responsables por decisiones tomadas basadas en nuestra información</li>
                    <li>• No garantizamos que el servicio esté libre de errores o interrupciones</li>
                    <li>• No asumimos responsabilidad por pérdidas o daños derivados del uso</li>
                    <li>• El uso de la plataforma es bajo tu propio riesgo</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-3">Consejos Médicos y Nutricionales</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Esta plataforma NO proporciona consejos médicos.</strong> Para decisiones 
                    relacionadas con tu salud o dieta, consulta siempre con profesionales calificados.
                  </p>
                  <ul className="space-y-1 text-gray-600 text-sm" role="list">
                    <li>• Consulta con un médico antes de cambios dietéticos significativos</li>
                    <li>• Verifica alergias e intolerancias con profesionales</li>
                    <li>• Las necesidades nutricionales son individuales</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Intellectual Property */}
        <section className="mb-16" aria-labelledby="ip-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="ip-heading" className="text-3xl text-center text-indigo-800 flex items-center justify-center">
                <Shield className="w-8 h-8 mr-3 text-indigo-600" aria-hidden="true" />
                Propiedad Intelectual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-700 mb-3">Contenido de la Plataforma</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• El diseño, código y estructura del sitio están protegidos por derechos de autor</li>
                    <li>• Los datos compilados y presentados son producto de nuestro trabajo</li>
                    <li>• Las marcas y logotipos de terceros pertenecen a sus respectivos propietarios</li>
                    <li>• Los datos nutricionales provienen de fuentes públicas y científicas</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">Uso Permitido</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Uso personal y no comercial de la información</li>
                    <li>• Citas y referencias con atribución apropiada</li>
                    <li>• Compartir enlaces a nuestro contenido</li>
                    <li>• Uso educativo y de investigación</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-3">Uso Restringido</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Reproducción comercial sin autorización</li>
                    <li>• Creación de obras derivadas sin permiso</li>
                    <li>• Redistribución masiva de datos</li>
                    <li>• Uso de nuestro nombre o marca sin autorización</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Privacy and Data */}
        <section className="mb-16" aria-labelledby="privacy-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="privacy-heading" className="text-2xl text-center text-green-800">
                Privacidad y Datos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  El manejo de tu información personal está regido por nuestra 
                  <a href="/privacy" className="text-green-700 underline hover:text-green-900 ml-1">
                    Política de Privacidad
                  </a>, 
                  la cual forma parte integral de estos términos de uso.
                </p>
                <ul className="space-y-2 text-gray-600" role="list">
                  <li>• Recopilamos mínima información necesaria para el funcionamiento</li>
                  <li>• No vendemos ni compartimos datos personales</li>
                  <li>• Proteges tus datos con medidas de seguridad apropiadas</li>
                  <li>• Tienes control sobre tu información personal</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Modifications */}
        <section className="mb-16" aria-labelledby="modifications-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="modifications-heading" className="text-2xl text-center text-purple-800">
                Modificaciones y Terminación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-700 mb-3">Cambios en los Términos</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Podemos modificar estos términos en cualquier momento</li>
                    <li>• Los cambios se notificarán prominentemente en el sitio</li>
                    <li>• El uso continuado implica aceptación de los nuevos términos</li>
                    <li>• Cambios significativos tendrán período de aviso previo</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-700 mb-3">Terminación del Servicio</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Podemos suspender o terminar el servicio temporalmente</li>
                    <li>• Mantenimiento y actualizaciones pueden causar interrupciones</li>
                    <li>• No garantizamos disponibilidad continua del servicio</li>
                    <li>• Los términos seguirán vigentes durante interrupciones</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Governing Law */}
        <section className="mb-16" aria-labelledby="law-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="law-heading" className="text-2xl text-center text-red-800">
                Ley Aplicable y Jurisdicción
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-600" role="list">
                  <li>• Estos términos se rigen por las leyes de México</li>
                  <li>• Cualquier disputa será resuelta en los tribunales de la Ciudad de México</li>
                  <li>• Si alguna disposición es inválida, el resto permanece vigente</li>
                  <li>• Estos términos constituyen el acuerdo completo entre las partes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="contact-heading" className="text-2xl text-center text-gray-800">
                Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Si tienes preguntas sobre estos términos de uso, no dudes en contactarnos:
                </p>
                <p className="text-gray-800">
                  <strong>Email:</strong>
                  <a href="mailto:dev@izignamx.com" className="ml-1 text-blue-600 underline hover:text-blue-800">
                    dev@izignamx.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Terms;
