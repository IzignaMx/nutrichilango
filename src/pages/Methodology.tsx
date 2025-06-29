
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Beaker, Database, Calculator, Shield, AlertTriangle } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Metodología
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Transparencia total en nuestros métodos de recolección, análisis y presentación de datos
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-16" aria-labelledby="overview-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="overview-heading" className="text-3xl text-center text-green-800 flex items-center justify-center">
                <Beaker className="w-8 h-8 mr-3 text-blue-600" aria-hidden="true" />
                Enfoque Metodológico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Nuestra metodología se basa en principios de <strong>transparencia, reproducibilidad y 
                  verificabilidad</strong>. Todos los datos son auditables y las fuentes están documentadas.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2 mb-3">Recolección</Badge>
                  <p className="text-gray-600">Datos de fuentes públicas verificadas</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2 mb-3">Procesamiento</Badge>
                  <p className="text-gray-600">Algoritmos documentados y reproducibles</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2 mb-3">Validación</Badge>
                  <p className="text-gray-600">Revisión cruzada y actualización regular</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Methodology */}
        <section className="mb-16" aria-labelledby="detailed-heading">
          <h2 id="detailed-heading" className="text-3xl font-bold text-center mb-12 text-green-800">
            Metodología Detallada
          </h2>

          <Tabs defaultValue="data-collection" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="data-collection">Recolección</TabsTrigger>
              <TabsTrigger value="price-calculation">Cálculos de Precio</TabsTrigger>
              <TabsTrigger value="nutrition-analysis">Análisis Nutricional</TabsTrigger>
              <TabsTrigger value="validation">Validación</TabsTrigger>
            </TabsList>

            <TabsContent value="data-collection" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <Database className="w-6 h-6 mr-3" aria-hidden="true" />
                    Recolección de Datos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-3">Fuentes de Precios</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• <strong>Supermercados:</strong> Sitios web oficiales y aplicaciones</li>
                        <li>• <strong>Mercados:</strong> Relevamientos presenciales semanales</li>
                        <li>• <strong>Tiendas Especializadas:</strong> Contacto directo y visitas</li>
                        <li>• <strong>Plataformas Online:</strong> APIs y scraping ético</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-3">Datos Nutricionales</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• <strong>USDA FoodData Central:</strong> Base de datos oficial</li>
                        <li>• <strong>Tablas INCMNSZ:</strong> Datos mexicanos específicos</li>
                        <li>• <strong>Etiquetas de Productos:</strong> Información directa del fabricante</li>
                        <li>• <strong>Literatura Científica:</strong> Estudios peer-reviewed</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Frecuencia de Actualización:</strong> Los precios se actualizan semanalmente, 
                      mientras que los datos nutricionales se revisan mensualmente o cuando hay cambios 
                      significativos en formulaciones de productos.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="price-calculation" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <Calculator className="w-6 h-6 mr-3" aria-hidden="true" />
                    Cálculos de Precio
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Normalización por Unidad</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Todos los precios se convierten a una unidad estándar (generalmente 100g o 100ml) 
                        para permitir comparaciones directas.
                      </p>
                      <code className="bg-white p-2 rounded text-sm text-gray-800 block">
                        Precio por Unidad = (Precio Total / Peso o Volumen) × 100
                      </code>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Cálculo de Diferencias Porcentuales</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Las diferencias se calculan tomando el producto tradicional como referencia base.
                      </p>
                      <code className="bg-white p-2 rounded text-sm text-gray-800 block">
                        Diferencia % = ((Precio Plant-Based - Precio Tradicional) / Precio Tradicional) × 100
                      </code>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">Costos de Preparación Casera</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• <strong>Ingredientes:</strong> Suma del costo de todos los componentes</li>
                        <li>• <strong>Tiempo:</strong> Estimación basada en salario mínimo (opcional)</li>
                        <li>• <strong>Energía:</strong> Costo estimado de gas/electricidad</li>
                        <li>• <strong>Rendimiento:</strong> Cantidad final obtenida</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nutrition-analysis" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <BarChart3 className="w-6 h-6 mr-3" aria-hidden="true" />
                    Análisis Nutricional
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Macronutrientes</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• <strong>Calorías:</strong> kcal por 100g</li>
                        <li>• <strong>Proteínas:</strong> gramos por 100g</li>
                        <li>• <strong>Grasas totales:</strong> gramos por 100g</li>
                        <li>• <strong>Carbohidratos:</strong> gramos por 100g</li>
                        <li>• <strong>Fibra:</strong> gramos por 100g</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Micronutrientes Clave</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• <strong>Calcio:</strong> mg por 100g</li>
                        <li>• <strong>Hierro:</strong> mg por 100g</li>
                        <li>• <strong>Vitamina B12:</strong> μg por 100g</li>
                        <li>• <strong>Folato:</strong> μg por 100g</li>
                        <li>• <strong>Vitamina D:</strong> UI por 100g</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">Valores de Referencia</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Los porcentajes mostrados en gráficas de radar se basan en:
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• <strong>IDR (Ingesta Diaria Recomendada):</strong> Para vitaminas y minerales</li>
                        <li>• <strong>Recomendaciones OMS:</strong> Para macronutrientes</li>
                        <li>• <strong>NOM-051:</strong> Etiquetado frontal mexicano</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="validation" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <Shield className="w-6 h-6 mr-3" aria-hidden="true" />
                    Validación y Control de Calidad
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">Verificación Cruzada</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Comparación entre múltiples fuentes</li>
                        <li>• Validación con visitas presenciales</li>
                        <li>• Revisión por expertos en nutrición</li>
                        <li>• Feedback de usuarios de la comunidad</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">Detección de Anomalías</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Algoritmos de detección de outliers</li>
                        <li>• Alertas por cambios drásticos de precio</li>
                        <li>• Validación de coherencia nutricional</li>
                        <li>• Revisión manual de casos atípicos</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Limitaciones Reconocidas</h4>
                    <ul className="space-y-1 text-gray-600 text-sm" role="list">
                      <li>• Los precios pueden variar significativamente por ubicación</li>
                      <li>• Las promociones temporales no siempre se capturan</li>
                      <li>• Los datos nutricionales pueden tener variaciones por lote</li>
                      <li>• No todos los productos están disponibles en todas las tiendas</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Transparency Section */}
        <section aria-labelledby="transparency-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="transparency-heading" className="text-2xl text-center text-green-800">
                Compromiso con la Transparencia
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
                Creemos que la transparencia metodológica es fundamental para la confianza. 
                Todas nuestras fuentes, métodos de cálculo y limitaciones están documentados 
                y disponibles para revisión pública.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Badge className="bg-green-100 text-green-800 px-4 py-2">
                  📊 Datos auditables
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                  🔬 Métodos reproducibles
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2">
                  🔄 Actualizaciones regulares
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Methodology;
