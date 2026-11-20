import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Mail, Star, MapPin, Globe, Users } from 'lucide-react';

const BusinessDirectory: React.FC = () => {
  const placeholderBusinesses = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: '',
    category: '',
    location: '',
    description: ''
  }));

  const categories = [
    'Restaurantes',
    'Tiendas',
    'Productos',
    'Servicios',
    'Catering',
    'Consultoría'
  ];

  const mailtoLink = `mailto:edgar@izignamx.com?subject=${encodeURIComponent('Nutrichilango - registro emprendimiento')}&body=${encodeURIComponent(`Nombre del emprendimiento:

Enlace / redes sociales:

Idea de colaboración (ej. receta patrocinada, cupón, contenido educativo):`)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-background to-primary/5 py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Star className="h-3 w-3 mr-1" />
            BETA - Próximamente
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Directorio de Emprendimientos
            <span className="block text-primary mt-2">Plant-Based</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Estoy preparando un directorio de negocios veganos y plant-based en la Ciudad de México.
            Si tienes un emprendimiento, puedes postularlo antes del lanzamiento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              asChild
              className="flex items-center gap-2 px-8 py-3"
            >
              <a href={mailtoLink}>
                <Mail className="h-5 w-5" aria-hidden="true" />
                Quiero postular mi emprendimiento
              </a>
            </Button>
            <div className="text-sm text-muted-foreground">
              <Users className="h-4 w-4 inline mr-1" />
              Postulación gratuita durante la beta
            </div>
          </div>
        </div>

        {/* Categories Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category) => (
            <Card key={category} className="text-center hover:shadow-md transition-shadow cursor-pointer opacity-75">
              <CardContent className="p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary/20 rounded-sm" />
                </div>
                <p className="font-medium text-sm">{category}</p>
                <p className="text-xs text-muted-foreground mt-1">Próximamente</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            Emprendimientos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderBusinesses.map((business) => (
              <Card key={business.id} className="overflow-hidden hover:shadow-lg transition-shadow opacity-75">
                <div className="aspect-video bg-muted relative">
                  <Skeleton className="w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      Próximamente
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-3 w-3" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-16 w-full mb-4" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-20" />
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Tienes un emprendimiento plant-based?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cuéntame qué ofreces y qué te gustaría hacer en NutriChilango. El proyecto está empezando:
              una ficha en el directorio no garantiza visitas ni ventas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Ficha en el directorio</h4>
                <p className="text-sm text-muted-foreground">
                  Si acepto tu postulación, podré incluir tu ficha durante el lanzamiento
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Colaboraciones</h4>
                <p className="text-sm text-muted-foreground">
                  Propón una receta, un cupón o contenido educativo
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Enlace a tu negocio</h4>
                <p className="text-sm text-muted-foreground">
                  Tu ficha puede incluir tu sitio o redes sociales
                </p>
              </div>
            </div>

            <Button 
              size="lg" 
              asChild
              className="px-8 py-3"
            >
              <a href={mailtoLink}>
                <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                Enviar postulación por correo
              </a>
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              Postularte no tiene costo durante la fase beta.
            </p>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>¿Preguntas sobre el directorio?</strong> Escríbenos a{' '}
            <a 
              href="mailto:edgar@izignamx.com" 
              className="text-primary hover:underline"
            >
              edgar@izignamx.com
            </a>
            {' '}y te ayudamos con el proceso de registro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessDirectory;