
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, BarChart3, MapPin, Filter, Eye, Calculator } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Cómo Funciona
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Guía completa para usar nuestra plataforma y entender las comparaciones
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Step by Step Guide */}
        <section className="mb-16" aria-labelledby="guide-heading">
          <h2 id="guide-heading" className="text-3xl font-bold text-center mb-12 text-green-800">
            Guía Paso a Paso
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-600 text-white text-lg px-3 py-1">1</Badge>
                  <Search className="w-8 h-8 text-green-600" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl text-green-700">Buscar y Filtrar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600" role="list">
                  <li>• Usa la barra de búsqueda para encontrar productos específicos</li>
                  <li>• Filtra por categoría (lácteos, carnes, huevos, etc.)</li>
                  <li>• Selecciona tiendas específicas o ve todas</li>
                  <li>• Elige el tipo de comparación que te interese</li>
                </ul>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-600 text-white text-lg px-3 py-1">2</Badge>
                  <Eye className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl text-blue-700">Revisar Comparaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600" role="list">
                  <li>• Examina las tarjetas de comparación detalladas</li>
                  <li>• Observa las diferencias de precio en porcentaje</li>
                  <li>• Revisa la información nutricional disponible</li>
                  <li>• Haz clic para expandir análisis nutricionales</li>
                </ul>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-yellow-600 text-white text-lg px-3 py-1">3</Badge>
                  <BarChart3 className="w-8 h-8 text-yellow-600" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl text-yellow-700">Analizar Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600" role="list">
                  <li>• Explora gráficas y análisis visuales</li>
                  <li>• Compara tiendas por mejor valor</li>
                  <li>• Revisa mapas de ubicaciones</li>
                  <li>• Utiliza recetas sugeridas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="mb-16" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-3xl font-bold text-center mb-12 text-green-800">
            Funcionalidades Detalladas
          </h2>

          <Tabs defaultValue="search" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="search">Búsqueda</TabsTrigger>
              <TabsTrigger value="comparison">Comparación</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrición</TabsTrigger>
              <TabsTrigger value="analysis">Análisis</TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <Search className="w-6 h-6 mr-3" aria-hidden="true" />
                    Sistema de Búsqueda y Filtros
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Búsqueda por Texto</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Busca por nombre de producto</li>
                        <li>• Incluye tanto productos tradicionales como plant-based</li>
                        <li>• Búsqueda flexible y tolerante a errores</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Filtros Avanzados</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• <strong>Categoría:</strong> Lácteos, carnes, huevos, proteínas</li>
                        <li>• <strong>Tienda:</strong> Supermercados, mercados, tiendas naturistas</li>
                        <li>• <strong>Tipo de comparación:</strong> 3 modalidades disponibles</li>
                        <li>• <strong>Ordenamiento:</strong> Por precio, diferencia, tienda</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="comparison" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <Calculator className="w-6 h-6 mr-3" aria-hidden="true" />
                    Tipos de Comparación
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">Animal vs Comercial Plant-Based</h4>
                      <p className="text-gray-600 text-sm">
                        Compara productos de origen animal con sus alternativas comerciales plant-based. 
                        Ideal para conocer el costo de transición a productos listos para consumir.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Animal vs Casero Plant-Based</h4>
                      <p className="text-gray-600 text-sm">
                        Contrasta productos animales con preparaciones caseras plant-based. 
                        Incluye costo de ingredientes y tiempo de preparación estimado.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Comercial vs Casero Plant-Based</h4>
                      <p className="text-gray-600 text-sm">
                        Evalúa el ahorro potencial de preparar alternativas plant-based en casa 
                        versus comprar productos comerciales.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <BarChart3 className="w-6 h-6 mr-3" aria-hidden="true" />
                    Análisis Nutricional
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-600 mb-3">Gráficas de Barras</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Comparación visual de macronutrientes</li>
                        <li>• Calorías, proteínas, grasas, carbohidratos</li>
                        <li>• Fácil interpretación de diferencias</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600 mb-3">Gráficas de Radar</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Perfil nutricional completo</li>
                        <li>• Porcentaje de valores de referencia</li>
                        <li>• Visualización de fortalezas nutricionales</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Interpretación de Datos</h4>
                    <p className="text-gray-600 text-sm">
                      Los valores nutricionales se basan en datos oficiales de USDA y tablas nutricionales 
                      mexicanas. Los porcentajes se calculan sobre valores de referencia para adultos.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <MapPin className="w-6 h-6 mr-3" aria-hidden="true" />
                    Análisis y Herramientas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-3">Mejores Lugares</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Ranking de tiendas por mejor valor</li>
                        <li>• Diferencias promedio de precio</li>
                        <li>• Información de ubicación</li>
                        <li>• Indicadores de promociones activas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-3">Gráficas de Tendencias</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Evolución de precios por categoría</li>
                        <li>• Comparación entre tipos de tienda</li>
                        <li>• Identificación de patrones de ahorro</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Tips Section */}
        <section aria-labelledby="tips-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="tips-heading" className="text-2xl text-center text-green-800">
                Consejos para Usar la Plataforma
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-700">Para Principiantes</h4>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Comienza explorando una categoría familiar</li>
                    <li>• Usa filtros para encontrar opciones en tu área</li>
                    <li>• Lee las limitaciones para entender el contexto</li>
                    <li>• Experimenta con diferentes tipos de comparación</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-700">Para Usuarios Avanzados</h4>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Combina múltiples filtros para análisis específicos</li>
                    <li>• Usa las gráficas para identificar tendencias</li>
                    <li>• Compara diferentes metodologías de preparación</li>
                    <li>• Revisa regularmente para datos actualizados</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
