
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white mt-16" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Platform Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-300">Comparador Plant-Based CDMX</h3>
            <p className="text-green-100 text-sm leading-relaxed">
              Plataforma dedicada a facilitar la transición hacia una alimentación basada en plantas, 
              comparando precios y valores nutricionales en la Ciudad de México.
            </p>
            <div className="flex items-center space-x-2 text-green-200">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm">Ciudad de México, México</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4" aria-label="Enlaces principales">
            <h4 className="text-lg font-semibold text-yellow-300">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                >
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-works" 
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                >
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link 
                  to="/methodology" 
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                >
                  Metodología
                </Link>
              </li>
              <li>
                <Link 
                  to="/data-sources" 
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                >
                  Fuentes de Datos
                </Link>
              </li>
            </ul>
          </nav>

          {/* Help & Support */}
          <nav className="space-y-4" aria-label="Ayuda y soporte">
            <h4 className="text-lg font-semibold text-yellow-300">Ayuda</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/faq" 
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link 
                  to="/guide" 
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                >
                  Guía de Uso
                </Link>
              </li>
              <li>
                <Link 
                  to="/limitations" 
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                >
                  Limitaciones
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal & Accessibility */}
          <nav className="space-y-4" aria-label="Información legal">
            <h4 className="text-lg font-semibold text-yellow-300">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                >
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link 
                  to="/accessibility" 
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                >
                  Accesibilidad
                </Link>
              </li>
            </ul>
            <div className="pt-2">
              <p className="text-xs text-green-200 leading-relaxed">
                Cumplimos con WCAG 2.1 AA, ADA, AODA y Section 508
              </p>
            </div>
          </nav>
        </div>

        <Separator className="my-8 bg-green-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-green-200">
            <p>© {currentYear} Comparador Plant-Based CDMX. Todos los derechos reservados.</p>
            <p className="mt-1">
              Datos actualizados semanalmente. Última actualización: {new Date().toLocaleDateString('es-MX')}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-green-100 hover:text-yellow-300 hover:bg-green-700/50"
              asChild
            >
              <a 
                href="#top" 
                className="focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800 rounded"
                aria-label="Volver al inicio de la página"
              >
                ↑ Inicio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
