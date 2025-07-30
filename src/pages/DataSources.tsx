
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Database, Store, Utensils } from 'lucide-react';

const DataSources: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-brand-primary-lighter to-accent/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-primary via-brand-primary to-brand-primary-light text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-brand-accent to-brand-accent bg-clip-text text-transparent">
              Fuentes de Datos
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Documentación completa de todas las fuentes utilizadas para recopilar información
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Price Data Sources */}
        <section className="mb-16" aria-labelledby="price-sources-heading">
          <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="price-sources-heading" className="text-3xl text-center text-brand-primary flex items-center justify-center">
                <Store className="w-8 h-8 mr-3 text-primary" aria-hidden="true" />
                Fuentes de Precios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-4">Supermercados y Cadenas</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary">Soriana</h4>
                      <p className="text-sm text-muted-foreground mb-2">Sitio web oficial y aplicación móvil</p>
                      <Badge className="bg-primary/10 text-primary">Actualización automática</Badge>
                    </div>
                    <div className="p-4 bg-brand-success/5 rounded-lg border border-brand-success/20">
                      <h4 className="font-semibold text-brand-success">Walmart</h4>
                      <p className="text-sm text-muted-foreground mb-2">API pública y sitio web</p>
                      <Badge className="bg-brand-success/10 text-brand-success">Actualización diaria</Badge>
                    </div>
                    <div className="p-4 bg-brand-accent/5 rounded-lg border border-brand-accent/20">
                      <h4 className="font-semibold text-brand-accent">Chedraui</h4>
                      <p className="text-sm text-muted-foreground mb-2">Catálogo en línea</p>
                      <Badge className="bg-brand-accent/10 text-brand-accent">Actualización semanal</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-4">Mercados y Tianguis</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                      <h4 className="font-semibold text-destructive">Central de Abastos</h4>
                      <p className="text-sm text-muted-foreground mb-2">Relevamiento presencial semanal</p>
                      <Badge className="bg-destructive/10 text-destructive">Verificación manual</Badge>
                    </div>
                    <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/40">
                      <h4 className="font-semibold text-secondary-foreground">Mercado Jamaica</h4>
                      <p className="text-sm text-muted-foreground mb-2">Contacto directo con comerciantes</p>
                      <Badge className="bg-secondary/30 text-secondary-foreground">Actualización semanal</Badge>
                    </div>
                    <div className="p-4 bg-brand-primary-light/20 rounded-lg border border-brand-primary-light/40">
                      <h4 className="font-semibold text-brand-primary">Tianguis Locales</h4>
                      <p className="text-sm text-muted-foreground mb-2">Red de colaboradores</p>
                      <Badge className="bg-brand-primary-light/30 text-brand-primary">Datos comunitarios</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nutritional Data Sources */}
        <section className="mb-16" aria-labelledby="nutrition-sources-heading">
          <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="nutrition-sources-heading" className="text-3xl text-center text-brand-primary flex items-center justify-center">
                <Database className="w-8 h-8 mr-3 text-secondary-foreground" aria-hidden="true" />
                Fuentes de Datos Nutricionales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary flex items-center mb-2">
                      USDA FoodData Central
                      <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Base de datos oficial del Departamento de Agricultura de Estados Unidos
                    </p>
                    <ul className="text-xs text-muted-foreground/80 space-y-1" role="list">
                      <li>• Más de 300,000 alimentos catalogados</li>
                      <li>• Datos verificados científicamente</li>
                      <li>• Actualización continua</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-brand-success/5 rounded-lg border border-brand-success/20">
                    <h4 className="font-semibold text-brand-success">Tablas INCMNSZ</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán
                    </p>
                    <ul className="text-xs text-muted-foreground/80 space-y-1" role="list">
                      <li>• Alimentos específicos de México</li>
                      <li>• Análisis de laboratorio local</li>
                      <li>• Enfoque en productos tradicionales</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-brand-accent/5 rounded-lg border border-brand-accent/20">
                    <h4 className="font-semibold text-brand-accent">Etiquetas de Productos</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Información nutricional directa del fabricante
                    </p>
                    <ul className="text-xs text-muted-foreground/80 space-y-1" role="list">
                      <li>• Productos plant-based comerciales</li>
                      <li>• Cumplimiento NOM-051-SCFI/SSA1-2010</li>
                      <li>• Verificación cruzada con laboratorios</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/40">
                    <h4 className="font-semibold text-secondary-foreground">Literatura Científica</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Estudios peer-reviewed y bases de datos académicas
                    </p>
                    <ul className="text-xs text-muted-foreground/80 space-y-1" role="list">
                      <li>• PubMed y bases científicas</li>
                      <li>• Estudios de bioavailabilidad</li>
                      <li>• Investigación en nutrición plant-based</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recipe Sources */}
        <section className="mb-16" aria-labelledby="recipe-sources-heading">
          <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="recipe-sources-heading" className="text-3xl text-center text-brand-primary flex items-center justify-center">
                <Utensils className="w-8 h-8 mr-3 text-brand-accent" aria-hidden="true" />
                Fuentes de Recetas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <h4 className="font-semibold text-destructive mb-2">Chefs Profesionales</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Colaboración con chefs especializados en cocina plant-based
                  </p>
                  <ul className="text-xs text-muted-foreground/80 space-y-1" role="list">
                    <li>• Recetas probadas profesionalmente</li>
                    <li>• Técnicas de optimización nutricional</li>
                    <li>• Adaptaciones mexicanas</li>
                  </ul>
                </div>

                <div className="p-4 bg-brand-success/5 rounded-lg border border-brand-success/20">
                  <h4 className="font-semibold text-brand-success mb-2">Comunidad</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Recetas validadas por la comunidad de usuarios
                  </p>
                  <ul className="text-xs text-muted-foreground/80 space-y-1" role="list">
                    <li>• Experiencias reales de preparación</li>
                    <li>• Adaptaciones económicas</li>
                    <li>• Feedback de sabor y textura</li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Literatura Culinaria</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Libros de cocina y recursos académicos
                  </p>
                  <ul className="text-xs text-muted-foreground/80 space-y-1" role="list">
                    <li>• Técnicas tradicionales adaptadas</li>
                    <li>• Fundamentos científicos de cocción</li>
                    <li>• Métodos de conservación</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data Quality */}
        <section aria-labelledby="quality-heading">
          <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle id="quality-heading" className="text-2xl text-center text-brand-primary">
                Control de Calidad de Datos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-primary mb-3">Verificación Automatizada</h4>
                    <ul className="space-y-2 text-muted-foreground" role="list">
                      <li>• Validación de rangos de precios</li>
                      <li>• Detección de anomalías estadísticas</li>
                      <li>• Comparación con datos históricos</li>
                      <li>• Alertas por cambios abruptos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-primary mb-3">Revisión Manual</h4>
                    <ul className="space-y-2 text-muted-foreground" role="list">
                      <li>• Verificación presencial semanal</li>
                      <li>• Validación cruzada entre fuentes</li>
                      <li>• Revisión por expertos nutricionales</li>
                      <li>• Feedback de usuarios registrados</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Transparencia en Limitaciones</h4>
                  <p className="text-muted-foreground text-sm">
                    Reconocemos que nuestros datos tienen limitaciones inherentes. Todas las fuentes, 
                    metodologías y restricciones están documentadas para permitir una interpretación 
                    informada de la información presentada.
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

export default DataSources;
