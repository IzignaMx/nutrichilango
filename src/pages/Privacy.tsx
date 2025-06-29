
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Eye, Database, Cookie, Users, Lock } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Política de Privacidad
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Tu privacidad es nuestra prioridad. Conoce cómo protegemos tu información
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Last Updated */}
        <section className="mb-16">
          <Alert className="border-blue-200 bg-blue-50 shadow-lg">
            <Shield className="h-5 w-5 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </AlertDescription>
          </Alert>
        </section>

        {/* Overview */}
        <section className="mb-16" aria-labelledby="overview-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="overview-heading" className="text-3xl text-center text-blue-800 flex items-center justify-center">
                <Eye className="w-8 h-8 mr-3 text-blue-600" aria-hidden="true" />
                Resumen de Privacidad
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  <strong>Comparador Plant-Based CDMX</strong> está comprometido con la protección 
                  de tu privacidad. Esta política explica qué información recopilamos, cómo la 
                  utilizamos y tus derechos respecto a ella.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">Mínima Recopilación</h3>
                  <p className="text-gray-600 text-sm">Solo recopilamos datos esenciales para el funcionamiento</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">Uso Transparente</h3>
                  <p className="text-gray-600 text-sm">Explicamos claramente para qué usamos cada dato</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-700 mb-2">Control Total</h3>
                  <p className="text-gray-600 text-sm">Tienes control completo sobre tu información</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Information We Collect */}
        <section className="mb-16" aria-labelledby="collection-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="collection-heading" className="text-3xl text-center text-purple-800 flex items-center justify-center">
                <Database className="w-8 h-8 mr-3 text-purple-600" aria-hidden="true" />
                Información que Recopilamos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Información Automática</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• <strong>Datos de navegación:</strong> Páginas visitadas, tiempo de permanencia</li>
                    <li>• <strong>Información técnica:</strong> Tipo de navegador, sistema operativo</li>
                    <li>• <strong>Dirección IP:</strong> Para análisis geográfico agregado (sin identificación personal)</li>
                    <li>• <strong>Cookies técnicas:</strong> Para funcionalidad básica del sitio</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">Información Voluntaria</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• <strong>Contacto:</strong> Correo electrónico solo si nos contactas</li>
                    <li>• <strong>Feedback:</strong> Comentarios o sugerencias que compartas</li>
                    <li>• <strong>Preferencias:</strong> Configuraciones que elijas (guardadas localmente)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                  <h3 className="text-lg font-semibold text-red-700 mb-3">Información que NO Recopilamos</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Información personal identificable sin tu consentimiento</li>
                    <li>• Datos de ubicación precisos</li>
                    <li>• Información financiera o de pagos</li>
                    <li>• Datos de redes sociales (salvo interacciones públicas)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How We Use Information */}
        <section className="mb-16" aria-labelledby="usage-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="usage-heading" className="text-3xl text-center text-indigo-800 flex items-center justify-center">
                <Users className="w-8 h-8 mr-3 text-indigo-600" aria-hidden="true" />
                Cómo Usamos tu Información
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-700">Funcionalidad del Sitio</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Proporcionar comparaciones de productos</li>
                    <li>• Mejorar la experiencia de navegación</li>
                    <li>• Recordar preferencias del usuario</li>
                    <li>• Optimizar el rendimiento del sitio</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-700">Mejora del Servicio</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Análisis de uso para mejoras</li>
                    <li>• Identificación de errores técnicos</li>
                    <li>• Desarrollo de nuevas funcionalidades</li>
                    <li>• Respuesta a consultas y soporte</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cookies */}
        <section className="mb-16" aria-labelledby="cookies-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="cookies-heading" className="text-3xl text-center text-orange-800 flex items-center justify-center">
                <Cookie className="w-8 h-8 mr-3 text-orange-600" aria-hidden="true" />
                Uso de Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-700 mb-3">Cookies Esenciales</h3>
                  <p className="text-gray-600 mb-2">
                    Necesarias para el funcionamiento básico del sitio. No se pueden desactivar.
                  </p>
                  <ul className="space-y-1 text-gray-600 text-sm" role="list">
                    <li>• Mantenimiento de sesión</li>
                    <li>• Configuraciones de accesibilidad</li>
                    <li>• Funcionalidad de formularios</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-3">Cookies de Análisis</h3>
                  <p className="text-gray-600 mb-2">
                    Nos ayudan a entender cómo se usa el sitio para mejorarlo. Puedes desactivarlas.
                  </p>
                  <ul className="space-y-1 text-gray-600 text-sm" role="list">
                    <li>• Páginas más visitadas</li>
                    <li>• Tiempo de permanencia</li>
                    <li>• Rutas de navegación comunes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data Protection */}
        <section className="mb-16" aria-labelledby="protection-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="protection-heading" className="text-3xl text-center text-green-800 flex items-center justify-center">
                <Lock className="w-8 h-8 mr-3 text-green-600" aria-hidden="true" />
                Protección de Datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">Medidas Técnicas</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Cifrado HTTPS en todas las conexiones</li>
                    <li>• Servidores seguros y actualizados</li>
                    <li>• Acceso restringido a datos</li>
                    <li>• Copias de seguridad regulares</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">Medidas Organizacionales</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Políticas internas de privacidad</li>
                    <li>• Capacitación en protección de datos</li>
                    <li>• Revisiones regulares de seguridad</li>
                    <li>• Respuesta rápida a incidentes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Your Rights */}
        <section className="mb-16" aria-labelledby="rights-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="rights-heading" className="text-3xl text-center text-purple-800">
                Tus Derechos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-700 mb-3">Derechos de Privacidad</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• <strong>Acceso:</strong> Saber qué datos tenemos sobre ti</li>
                    <li>• <strong>Rectificación:</strong> Corregir información incorrecta</li>
                    <li>• <strong>Eliminación:</strong> Solicitar borrado de tus datos</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• <strong>Portabilidad:</strong> Obtener tus datos en formato estándar</li>
                    <li>• <strong>Oposición:</strong> Oponerte al procesamiento</li>
                    <li>• <strong>Limitación:</strong> Restringir el uso de tus datos</li>
                  </ul>
                </div>
                <p className="text-purple-700 mt-4 text-sm">
                  Para ejercer cualquiera de estos derechos, contáctanos en: 
                  <a href="mailto:dev@izignamx.com" className="underline hover:text-purple-900">
                     dev@izignamx.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Third Parties */}
        <section className="mb-16" aria-labelledby="third-parties-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="third-parties-heading" className="text-2xl text-center text-red-800">
                Terceros y Compartición de Datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-red-200 bg-red-50">
                <Shield className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>No vendemos, alquilamos o compartimos tu información personal</strong> con 
                  terceros para fines comerciales.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h4 className="font-semibold text-red-700">Excepciones Limitadas</h4>
                <ul className="space-y-2 text-gray-600" role="list">
                  <li>• <strong>Requerimientos legales:</strong> Si es exigido por ley</li>
                  <li>• <strong>Protección de derechos:</strong> Para proteger nuestros derechos legales</li>
                  <li>• <strong>Seguridad pública:</strong> En casos de amenaza a la seguridad</li>
                  <li>• <strong>Proveedores de servicios:</strong> Solo con estrictos acuerdos de confidencialidad</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact and Changes */}
        <section aria-labelledby="contact-changes-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="contact-changes-heading" className="text-2xl text-center text-gray-800">
                Contacto y Cambios en la Política
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">Preguntas sobre Privacidad</h3>
                  <p className="text-gray-600 mb-4">
                    Si tienes preguntas sobre esta política o sobre cómo manejamos tu información, 
                    no dudes en contactarnos.
                  </p>
                  <p className="text-blue-700">
                    <strong>Email:</strong> 
                    <a href="mailto:dev@izignamx.com" className="ml-1 underline hover:text-blue-900">
                      dev@izignamx.com
                    </a>
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Cambios en la Política</h3>
                  <p className="text-gray-600 mb-4">
                    Cualquier cambio en esta política será notificado prominentemente en el sitio web 
                    con al menos 30 días de anticipación.
                  </p>
                  <p className="text-green-700 text-sm">
                    Te recomendamos revisar periódicamente esta página para mantenerte informado.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
