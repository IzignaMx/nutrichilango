
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader className="space-y-4">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-4xl font-bold">404</span>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900">
            Página no encontrada
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-sm text-gray-500 space-y-2">
            <p>Esto puede haber ocurrido por:</p>
            <ul className="list-disc list-inside text-left max-w-md mx-auto space-y-1">
              <li>La URL fue escrita incorrectamente</li>
              <li>El enlace está desactualizado</li>
              <li>La página fue movida o eliminada</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Ir al Inicio
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="gap-2">
              <Link to="/#search">
                <Search className="w-4 h-4" />
                Buscar Productos
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver Atrás
            </Button>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              ¿Necesitas ayuda? {' '}
              <Link 
                to="/contact" 
                className="text-green-600 hover:text-green-700 underline focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
              >
                Contáctanos
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
