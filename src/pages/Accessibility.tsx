
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Keyboard, Volume2, MousePointer, Smartphone, Globe } from 'lucide-react';

const Accessibility: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-200 to-pink-200 bg-clip-text text-transparent">
              Accesibilidad
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              Comprometidos con hacer nuestra plataforma accesible para todos los usuarios
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Commitment */}
        <section className="mb-16" aria-labelledby="commitment-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="commitment-heading" className="text-3xl text-center text-indigo-800 flex items-center justify-center">
                <Globe className="w-8 h-8 mr-3 text-indigo-600" aria-hidden="true" />
                Nuestro Compromiso con la Accesibilidad
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Creemos que el acceso a información nutricional y de precios debe estar 
                  disponible para <strong>todos los usuarios</strong>, independientemente de 
                  sus capacidades físicas, cognitivas o tecnológicas.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2 mb-3">WCAG 2.1 AA</Badge>
                  <p className="text-gray-600 text-sm">Cumplimiento completo</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2 mb-3">Section 508</Badge>
                  <p className="text-gray-600 text-sm">Compatible</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2 mb-3">ADA/AODA</Badge>
                  <p className="text-gray-600 text-sm">Requisitos cubiertos</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2 mb-3">EN 301 549</Badge>
                  <p className="text-gray-600 text-sm">Estándar europeo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-16" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-3xl font-bold text-center mb-12 text-indigo-800">
            Características de Accesibilidad
          </h2>

          <Tabs defaultValue="visual" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="visual">Visual</TabsTrigger>
              <TabsTrigger value="keyboard">Teclado</TabsTrigger>
              <TabsTrigger value="screen-reader">Lectores</TabsTrigger>
              <TabsTrigger value="motor">Motor</TabsTrigger>
              <TabsTrigger value="cognitive">Cognitivo</TabsTrigger>
              <TabsTrigger value="mobile">Móvil</TabsTrigger>
            </TabsList>

            <TabsContent value="visual" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <Eye className="w-6 h-6 mr-3" aria-hidden="true" />
                    Accesibilidad Visual
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-3">Contraste y Colores</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Ratio de contraste mínimo 4.5:1 para texto normal</li>
                        <li>• Ratio de contraste mínimo 3:1 para elementos grandes</li>
                        <li>• AAA donde es posible (7:1)</li>
                        <li>• Información no dependiente solo del color</li>
                        <li>• Colores seguros para daltonismo</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-3">Tipografía y Zoom</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Fuentes legibles y de buen tamaño</li>
                        <li>• Zoom hasta 200% sin pérdida de funcionalidad</li>
                        <li>• Espaciado adecuado entre líneas y párrafos</li>
                        <li>• Texto escalable sin pixelación</li>
                        <li>• Personalización disponible en el navegador</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Alert className="border-blue-200 bg-blue-50">
                    <Eye className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-800">
                      <strong>Tip para usuarios con baja visión:</strong> Puedes usar Ctrl + Plus para 
                      aumentar el zoom, o ajustar el tamaño de fuente en la configuración de tu navegador.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="keyboard" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <Keyboard className="w-6 h-6 mr-3" aria-hidden="true" />
                    Navegación por Teclado
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Navegación Completa</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Toda la funcionalidad está disponible usando solo el teclado.
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Tab</kbd> - Navegar hacia adelante</li>
                        <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Shift + Tab</kbd> - Navegar hacia atrás</li>
                        <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Enter</kbd> - Activar botones y enlaces</li>
                        <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Espacio</kbd> - Activar checkboxes</li>
                        <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Flechas</kbd> - Navegar en menús</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Focus Visible</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• Indicador de foco visible en todos los elementos interactivos</li>
                        <li>• Orden lógico de tabulación</li>
                        <li>• Focus trap en modales y diálogos</li>
                        <li>• Skip links para navegación rápida</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">Atajos de Teclado</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Alt + 1</kbd> - Ir al contenido principal</li>
                        <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Alt + 2</kbd> - Ir al menú de navegación</li>
                        <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Alt + 3</kbd> - Ir a la búsqueda</li>
                        <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Esc</kbd> - Cerrar modales</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="screen-reader" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <Volume2 className="w-6 h-6 mr-3" aria-hidden="true" />
                    Compatibilidad con Lectores de Pantalla
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Estructura Semántica</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• HTML5 semántico apropiado (header, nav, main, section, article)</li>
                        <li>• Jerarquía de encabezados correcta (H1-H6)</li>
                        <li>• Landmarks ARIA para navegación</li>
                        <li>• Listas y tablas estructuradas correctamente</li>
                      </ul>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-700 mb-2">Etiquetas y Descripciones</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• Texto alternativo descriptivo para todas las imágenes</li>
                        <li>• Labels asociados correctamente con form controls</li>
                        <li>• Descripciones ARIA donde es necesario</li>
                        <li>• Estados dinámicos comunicados (aria-live)</li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-700 mb-2">Lectores Compatibles</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• NVDA (Windows) - Completamente compatible</li>
                        <li>• JAWS (Windows) - Completamente compatible</li>
                        <li>• VoiceOver (macOS/iOS) - Completamente compatible</li>
                        <li>• TalkBack (Android) - Completamente compatible</li>
                        <li>• Orca (Linux) - Compatible</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="motor" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <MousePointer className="w-6 h-6 mr-3" aria-hidden="true" />
                    Accesibilidad Motora
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-3">Áreas de Click Grandes</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Botones de mínimo 44x44 píxeles</li>
                        <li>• Espaciado adecuado entre elementos clickables</li>
                        <li>• Enlaces con área de click extendida</li>
                        <li>• Tolerancia para clicks imprecisos</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-3">Tiempos y Movimientos</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Sin límites de tiempo estrictos</li>
                        <li>• Drag and drop opcional</li>
                        <li>• Alternativas para gestos complejos</li>
                        <li>• Cancelación de acciones accidentales</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Alert className="border-orange-200 bg-orange-50">
                    <MousePointer className="h-4 w-4 text-orange-600" />
                    <AlertDescription className="text-orange-800">
                      <strong>Para usuarios con dispositivos de asistencia:</strong> Todos los elementos 
                      interactivos son accesibles mediante switch control, eye tracking y otros dispositivos adaptativos.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cognitive" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <Globe className="w-6 h-6 mr-3" aria-hidden="true" />
                    Accesibilidad Cognitiva
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">Navegación Consistente</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• Layout y navegación consistentes en todas las páginas</li>
                        <li>• Breadcrumbs para orientación</li>
                        <li>• Menús y patrones de navegación predecibles</li>
                        <li>• Indicadores de ubicación actual</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Contenido Claro</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• Lenguaje simple y directo</li>
                        <li>• Instrucciones claras y específicas</li>
                        <li>• Organización lógica de la información</li>
                        <li>• Iconos descriptivos con texto alternativo</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Ayuda y Retroalimentación</h4>
                      <ul className="space-y-1 text-gray-600 text-sm" role="list">
                        <li>• Mensajes de error descriptivos y constructivos</li>
                        <li>• Confirmaciones para acciones importantes</li>
                        <li>• Ayuda contextual disponible</li>
                        <li>• Prevención de errores comunes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-teal-700">
                    <Smartphone className="w-6 h-6 mr-3" aria-hidden="true" />
                    Accesibilidad Móvil
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-teal-600 mb-3">Diseño Responsivo</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Adaptación completa a pantallas pequeñas</li>
                        <li>• Botones de tamaño apropiado para touch</li>
                        <li>• Menús de navegación optimizados</li>
                        <li>• Contenido reorganizado para móvil</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-600 mb-3">Tecnologías Asistivas Móviles</h4>
                      <ul className="space-y-2 text-gray-600" role="list">
                        <li>• Compatible con VoiceOver (iOS)</li>
                        <li>• Compatible con TalkBack (Android)</li>
                        <li>• Soporte para Switch Control</li>
                        <li>• Voice Control compatible</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-teal-700 mb-2">Gestos y Orientación</h4>
                    <ul className="space-y-1 text-gray-600 text-sm" role="list">
                      <li>• Funciona en orientación portrait y landscape</li>
                      <li>• Gestos simples y estándar</li>
                      <li>• Alternativas para gestos complejos</li>
                      <li>• No hay dependencia de movimientos del dispositivo</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Testing and Validation */}
        <section className="mb-16" aria-labelledby="testing-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="testing-heading" className="text-2xl text-center text-gray-800">
                Pruebas y Validación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Herramientas Utilizadas</h4>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• WAVE Web Accessibility Evaluator</li>
                    <li>• axe DevTools</li>
                    <li>• Lighthouse Accessibility Audit</li>
                    <li>• Color Contrast Analyzers</li>
                    <li>• Validadores de HTML y ARIA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Pruebas con Usuarios</h4>
                  <ul className="space-y-2 text-gray-600" role="list">
                    <li>• Usuarios de lectores de pantalla</li>
                    <li>• Navegación solo con teclado</li>
                    <li>• Usuarios con baja visión</li>
                    <li>• Dispositivos móviles con tecnologías asistivas</li>
                    <li>• Revisión por expertos en accesibilidad</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Report Issues */}
        <section aria-labelledby="report-heading">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="report-heading" className="text-2xl text-center text-indigo-800">
                Reportar Problemas de Accesibilidad
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center bg-indigo-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Si encuentras barreras de accesibilidad en nuestro sitio, por favor contáctanos. 
                  Nos comprometemos a responder y resolver problemas de accesibilidad con la mayor 
                  prioridad posible.
                </p>
                <div className="space-y-4">
                  <p className="text-indigo-800">
                    <strong>Email para accesibilidad:</strong>
                    <a href="mailto:dev@izignamx.com?subject=Reporte de Accesibilidad" 
                       className="ml-1 underline hover:text-indigo-900">
                      dev@izignamx.com
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Incluye detalles sobre el problema, tu navegador/dispositivo, y la tecnología 
                    asistiva que utilizas (si aplica).
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

export default Accessibility;
