
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Search, Filter, BarChart3, ShoppingCart, Lightbulb } from 'lucide-react';

const Guide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Guía de Uso
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Aprende a sacar el máximo provecho de nuestra plataforma de comparación plant-based
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Start */}
        <section className="mb-16" aria-labelledby="quickstart-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="quickstart-heading" className="text-3xl text-center text-green-800 flex items-center justify-center">
                <BookOpen className="w-8 h-8 mr-3 text-blue-600" aria-hidden="true" />
                Inicio Rápido
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Search className="w-12 h-12 mx-auto mb-4 text-blue-600" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">1. Busca</h3>
                  <p className="text-gray-600">Selecciona la categoría de producto que te interesa comparar</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Filter className="w-12 h-12 mx-auto mb-4 text-green-600" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">2. Filtra</h3>
                  <p className="text-gray-600">Aplica filtros por precio, ubicación o características nutricionales</p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-lg">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 text-yellow-600" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">3. Compara</h3>
                  <p className="text-gray-600">Analiza precios, nutrición y toma decisiones informadas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Guide */}
        <section className="mb-16" aria-labelledby="detailed-heading">
          <h2 id="detailed-heading" className="text-3xl font-bold text-center mb-12 text-green-800">
            Guía Detallada
          </h2>

          <Tabs defaultValue="searching" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="searching">Búsqueda</TabsTrigger>
              <TabsTrigger value="filtering">Filtros</TabsTrigger>
              <TabsTrigger value="comparing">Comparación</TabsTrigger>
              <TabsTrigger value="interpreting">Interpretación</TabsTrigger>
            </TabsList>

            <TabsContent value="searching" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <Search className="w-6 h-6 mr-3" aria-hidden="true" />
                    Cómo Buscar Productos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-600">Categorías Disponibles</h4>
                    <ul className="space-y-2 text-gray-600" role="list">
                      <li>• <strong>Lácteos:</strong> Leches, quesos, yogures y sus alternativas vegetales</li>
                      <li>• <strong>Carnes:</strong> Productos cárnicos y sus sustitutos plant-based</li>
                      <li>• <strong>Huevos:</strong> Huevos convencionales y alternativas veganas</li>
                      <li>• <strong>Proteínas:</strong> Legumbres, tofu, tempeh y proteínas procesadas</li>
                    </ul>

                    <Alert>
                      <Lightbulb className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Consejo:</strong> Utiliza la barra de búsqueda para encontrar productos específicos 
                        o navega por categorías para descubrir nuevas alternativas.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="filtering" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <Filter className="w-6 h-6 mr-3" aria-hidden="true" />
                    Uso de Filtros
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Filtros de Precio</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• Rango de precio por unidad</li>
                        <li>• Diferencia porcentual vs. tradicional</li>
                        <li>• Mejor relación calidad-precio</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Filtros Nutricionales</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• Alto contenido en proteínas</li>
                        <li>• Bajo en grasas saturadas</li>
                        <li>• Rico en fibra</li>
                        <li>• Fortificado con vitaminas</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="comparing" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <BarChart3 className="w-6 h-6 mr-3" aria-hidden="true" />
                    Herramientas de Comparación
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Gráficas de Barras</h4>
                      <p className="text-gray-600 text-sm">
                        Compara macronutrientes (proteínas, grasas, carbohidratos) entre productos 
                        tradicionales y sus alternativas plant-based.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Radar Nutricional</h4>
                      <p className="text-gray-600 text-sm">
                        Visualiza el perfil nutricional completo incluyendo vitaminas y minerales 
                        clave como B12, hierro y calcio.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Análisis de Costos</h4>
                      <p className="text-gray-600 text-sm">
                        Compara precios por porción y calcula el ahorro o costo adicional 
                        de elegir alternativas plant-based.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interpreting" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <Lightbulb className="w-6 h-6 mr-3" aria-hidden="true" />
                    Interpretación de Datos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">Colores en Gráficas</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• <strong>Verde:</strong> Ventaja nutricional o de precio</li>
                        <li>• <strong>Amarillo:</strong> Valores similares o neutros</li>
                        <li>• <strong>Rojo:</strong> Desventaja que requiere atención</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Porcentajes de IDR</h4>
                      <p className="text-gray-600 text-sm">
                        Los porcentajes mostrados se basan en la Ingesta Diaria Recomendada (IDR) 
                        para un adulto promedio. 100% significa que cubre completamente la necesidad diaria.
                      </p>
                    </div>

                    <Alert>
                      <Lightbulb className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Importante:</strong> Los datos mostrados son referenciales. Consulta 
                        con un profesional de la salud para necesidades nutricionales específicas.
                      </AlertDescription>
                    </Alert>
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
              <CardTitle id="tips-heading" className="text-2xl text-center text-green-800 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 mr-3" aria-hidden="true" />
                Consejos para Compras Inteligentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">Optimización de Costos</h4>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Compara precios por 100g, no por envase</li>
                    <li>• Considera las preparaciones caseras</li>
                    <li>• Aprovecha las promociones estacionales</li>
                    <li>• Compra en mercados locales para mejores precios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">Nutrición Balanceada</h4>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Prioriza productos fortificados con B12</li>
                    <li>• Busca opciones altas en proteína completa</li>
                    <li>• Combina diferentes fuentes vegetales</li>
                    <li>• No olvides las fuentes naturales de calcio</li>
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

export default Guide;
