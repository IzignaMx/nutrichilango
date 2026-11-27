import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Database, Store, Utensils } from 'lucide-react';
import dataSources from '@/data/dataSources.json';

const sourceStyles: Record<string, string> = {
  primary: 'border-primary/20 bg-primary/5',
  'brand-success': 'border-brand-success/20 bg-brand-success/5',
  'brand-accent': 'border-brand-accent/20 bg-brand-accent/5',
  destructive: 'border-destructive/20 bg-destructive/5',
  secondary: 'border-border bg-muted',
  'brand-primary-light': 'border-brand-primary/20 bg-brand-primary-lighter',
};

function SourceLink({ name, url }: { name: string; url?: string }) {
  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">
      {name}<ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
  ) : <>{name}</>;
}

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
              Referencias y estado de verificación de las fuentes de información
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
              <p className="text-muted-foreground">
                La actualización automática de precios está en pausa. Estas fuentes son de referencia:
                no consultamos sus precios en tiempo real ni garantizamos una frecuencia de actualización.
                La auditoría de fuentes oficiales verifica metadatos, no actualiza precios publicados.
                Antes de comprar, confirma el precio y la presentación con la tienda.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {dataSources.priceSources.map((sourceCategory, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold text-brand-primary mb-4">{sourceCategory.category}</h3>
                    <div className="space-y-4">
                      {sourceCategory.items.map((item, itemIdx) => (
                        <div key={itemIdx} className={`p-4 rounded-lg border ${sourceStyles[item.badgeColor]}`}>
                          <h4 className="font-semibold text-foreground"><SourceLink name={item.name} url={"url" in item ? item.url : undefined} /></h4>
                          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                          <Badge variant="secondary">{item.badge}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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
              <p className="text-muted-foreground">Estas referencias no acreditan que cada valor nutricional publicado se haya contrastado con un registro específico. Esa trazabilidad está pendiente.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {dataSources.nutritionalSources.map((source, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className={`p-4 rounded-lg border ${sourceStyles[source.badgeColor]}`}>
                      <h4 className="font-semibold text-foreground flex items-center mb-2">
                        <SourceLink name={source.name} url={"url" in source ? source.url : undefined} />
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">{source.description}</p>
                      <ul className="text-xs text-muted-foreground/80 space-y-1" role="list">
                        {source.features.map((feat, featIdx) => (
                          <li key={featIdx}>• {feat}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
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
                {dataSources.recipeSources.map((source, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${sourceStyles[source.badgeColor]}`}>
                    <h4 className="font-semibold text-foreground mb-2">{source.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{source.description}</p>
                    <ul className="text-xs text-muted-foreground/80 space-y-1" role="list">
                      {source.features.map((feat, featIdx) => (
                        <li key={featIdx}>• {feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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
                  {dataSources.dataQuality.map((quality, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-brand-primary mb-3">{quality.name}</h4>
                      <ul className="space-y-2 text-muted-foreground" role="list">
                        {quality.features.map((feat, featIdx) => (
                          <li key={featIdx}>• {feat}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Transparencia en Limitaciones</h4>
                  <p className="text-muted-foreground text-sm">
                    Reconocemos que nuestros datos tienen limitaciones inherentes. No todos los productos y recetas cuentan con una fuente individual verificable. Se distinguen las fuentes de referencia de las observaciones verificadas y los trabajos pendientes.
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
