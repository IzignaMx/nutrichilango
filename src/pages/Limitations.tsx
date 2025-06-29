
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, MapPin, Clock, Database, Stethoscope, Users } from 'lucide-react';

const Limitations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Limitaciones
            </h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Transparencia sobre las limitaciones de nuestra plataforma y cómo interpretarlas
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Important Notice */}
        <section className="mb-16" aria-labelledby="notice-heading">
          <Alert className="border-orange-200 bg-orange-50 shadow-lg">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <strong className="text-lg">Aviso Importante:</strong> Esta plataforma proporciona información 
              de referencia y no sustituye el consejo médico o nutricional profesional. Los datos mostrados 
              deben interpretarse considerando las limitaciones descritas a continuación.
            </AlertDescription>
          </Alert>
        </section>

        {/* Technical Limitations */}
        <section className="mb-16" aria-labelledby="technical-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="technical-heading" className="text-3xl text-center text-red-800 flex items-center justify-center">
                <Database className="w-8 h-8 mr-3 text-red-600" aria-hidden="true" />
                Limitaciones Técnicas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-700">Recolección de Datos</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" aria-hidden="true" />
                      <span>Los precios pueden variar significativamente entre sucursales de la misma cadena</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" aria-hidden="true" />
                      <span>Las promociones temporales no siempre se capturan en tiempo real</span>
                    </li>
                    <li className="flex items-start">
                      <Database className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" aria-hidden="true" />
                      <span>No todos los productos están disponibles en todas las ubicaciones</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-700">Actualización de Información</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Precios: Actualizados semanalmente</li>
                    <li>• Datos nutricionales: Revisados mensualmente</li>
                    <li>• Disponibilidad: Puede cambiar sin previo aviso</li>
                    <li>• Nuevos productos: Incorporados gradualmente</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data Limitations */}
        <section className="mb-16" aria-labelledby="data-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="data-heading" className="text-3xl text-center text-orange-800 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 mr-3 text-orange-600" aria-hidden="true" />
                Limitaciones de Datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-700 mb-3">Información Nutricional</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Los valores pueden variar entre lotes de producción</li>
                    <li>• Algunos micronutrientes pueden no estar completamente documentados</li>
                    <li>• Las preparaciones caseras son estimaciones basadas en recetas estándar</li>
                    <li>• La biodisponibilidad de nutrientes puede diferir entre fuentes</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-700 mb-3">Precios y Disponibilidad</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Los precios mostrados son referenciales y pueden no reflejar ofertas actuales</li>
                    <li>• La disponibilidad puede variar por temporada y región</li>
                    <li>• Los costos de transporte no están incluidos en comparaciones</li>
                    <li>• Las promociones por volumen no siempre se consideran</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-3">Comparaciones</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Las comparaciones se basan en peso/volumen, no en porciones de consumo</li>
                    <li>• No se consideran factores de palatabilidad o preferencias personales</li>
                    <li>• Los métodos de preparación pueden afectar los valores nutricionales</li>
                    <li>• Las diferencias en procesamiento industrial no siempre se reflejan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Usage Limitations */}
        <section className="mb-16" aria-labelledby="usage-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="usage-heading" className="text-3xl text-center text-purple-800 flex items-center justify-center">
                <Users className="w-8 h-8 mr-3 text-purple-600" aria-hidden="true" />
                Limitaciones de Uso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-700">Consideraciones Individuales</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Las necesidades nutricionales varían por edad, sexo y condición física</li>
                    <li>• No considera alergias o intolerancias específicas</li>
                    <li>• Las recomendaciones son genéricas, no personalizadas</li>
                    <li>• No sustituye el seguimiento médico profesional</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-700">Contexto de Uso</h3>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Los datos son específicos para Ciudad de México</li>
                    <li>• Las comparaciones asumen patrones de consumo estándar</li>
                    <li>• No considera factores socioeconómicos individuales</li>
                    <li>• Las recomendaciones son de carácter informativo únicamente</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Medical Disclaimer */}
        <section className="mb-16" aria-labelledby="medical-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle id="medical-heading" className="text-2xl text-red-800 flex items-center">
                <Stethoscope className="w-6 h-6 mr-3 text-red-600" aria-hidden="true" />
                Descargo de Responsabilidad Médica
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <p className="text-red-800 leading-relaxed mb-4">
                  <strong>Esta plataforma NO proporciona consejos médicos, diagnósticos o tratamientos.</strong> 
                  La información nutricional y de precios es únicamente para fines educativos e informativos.
                </p>
                <h4 className="font-semibold text-red-700 mb-2">Consulta Profesional Requerida Para:</h4>
                <ul className="space-y-1 text-red-700" role="list">
                  <li>• Cambios dietéticos significativos</li>
                  <li>• Condiciones médicas específicas</li>
                  <li>• Embarazo, lactancia o pediatría</li>
                  <li>• Suplementación nutricional</li>
                  <li>• Alergias o intolerancias alimentarias</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Use Despite Limitations */}
        <section aria-labelledby="usage-tips-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="usage-tips-heading" className="text-2xl text-center text-green-800">
                Cómo Usar la Plataforma Considerando las Limitaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">Mejores Prácticas</h4>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Usa los datos como punto de partida, no como verdad absoluta</li>
                    <li>• Verifica precios directamente antes de comprar</li>
                    <li>• Considera múltiples fuentes de información nutricional</li>
                    <li>• Adapta las recomendaciones a tu contexto personal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">Validación Cruzada</h4>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Compara con etiquetas de productos físicos</li>
                    <li>• Consulta múltiples tiendas antes de decidir</li>
                    <li>• Verifica información nutricional en fuentes oficiales</li>
                    <li>• Considera la experiencia de otros usuarios</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm">
                  💡 Recuerda: Los datos son herramientas para decisiones informadas, no decisiones automáticas
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Limitations;
