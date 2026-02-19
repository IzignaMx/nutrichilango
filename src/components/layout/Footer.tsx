
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Facebook } from 'lucide-react';
import { siteMetadata } from '@/data/metadata';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-primary-foreground mt-8 md:mt-16" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Platform Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/logo-nutrichilango.png" 
                alt="NutriChilango Logo" 
                className="w-8 h-8 object-contain filter brightness-0 invert"
              />
              <h3 className="text-xl font-bold text-brand-accent">NutriChilango</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Plataforma dedicada a facilitar la transición hacia una alimentación basada en plantas, 
              comparando precios y valores nutricionales en la Ciudad de México.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/70">
              <Mail className="w-4 h-4" aria-hidden="true" />
              <a 
                href="mailto:dev@izignamx.com" 
                className="text-sm hover:text-brand-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary rounded"
                aria-label="Enviar correo electrónico"
              >
                dev@izignamx.com
              </a>
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/70">
              <Facebook className="w-4 h-4" aria-hidden="true" />
              <a 
                href="https://www.facebook.com/omni.veg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-brand-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary rounded"
                aria-label="Visitar nuestra página de Facebook (se abre en nueva ventana)"
              >
                @omni.veg
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4" aria-label="Enlaces principales">
            <h4 className="text-lg font-semibold text-brand-accent">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-foreground/80 hover:text-brand-accent transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary rounded"
                >
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-works" 
                  className="text-primary-foreground/80 hover:text-brand-accent transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary rounded"
                >
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link 
                  to="/data-sources" 
                  className="text-primary-foreground/80 hover:text-brand-accent transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary rounded"
                >
                  Fuentes de Datos
                </Link>
              </li>
            </ul>
          </nav>

          {/* Help & Support */}
          <nav className="space-y-4" aria-label="Ayuda y soporte">
            <h4 className="text-lg font-semibold text-brand-accent">Ayuda</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/guide" 
                  className="text-primary-foreground/80 hover:text-brand-accent transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary rounded"
                >
                  Guía de Uso
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal & Accessibility */}
          <nav className="space-y-4" aria-label="Información legal">
            <h4 className="text-lg font-semibold text-brand-accent">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-primary-foreground/80 hover:text-brand-accent transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary rounded"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-primary-foreground/80 hover:text-brand-accent transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary rounded"
                >
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link 
                  to="/accessibility" 
                  className="text-primary-foreground/80 hover:text-brand-accent transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary rounded"
                >
                  Accesibilidad
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <div className="text-sm text-primary-foreground/70">
            <p>© {currentYear} NutriChilango. Todos los derechos reservados.</p>
            <p className="mt-1">
              Datos actualizados semanalmente. Última actualización: {new Date(siteMetadata.lastUpdated).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground/80 hover:text-brand-accent hover:bg-primary-foreground/10 focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary"
              asChild
            >
              <a 
                href="#top" 
                className="focus:outline-none rounded"
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
