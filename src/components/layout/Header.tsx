
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Menu, Leaf, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Acerca de' },
    { href: '/how-it-works', label: 'Cómo Funciona' },
    { href: '/methodology', label: 'Metodología' },
    { href: '/guide', label: 'Guía' },
  ];

  const resourcesItems = [
    { href: '/data-sources', label: 'Fuentes de Datos' },
    { href: '/faq', label: 'Preguntas Frecuentes' },
    { href: '/limitations', label: 'Limitaciones' },
    { href: '/accessibility', label: 'Accesibilidad' },
  ];

  const legalItems = [
    { href: '/privacy', label: 'Privacidad' },
    { href: '/terms', label: 'Términos' },
    { href: '/contact', label: 'Contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900 leading-none">
              Plant-Based CDMX
            </span>
            <span className="text-xs text-gray-500 leading-none">
              Comparador
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex" aria-label="Navegación principal">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Main Navigation */}
              {navigationItems.slice(0, 3).map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link to={item.href}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isActive(item.href) && "bg-accent text-accent-foreground font-medium"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  Recursos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium leading-none text-gray-900 mb-2">
                        Información
                      </h4>
                      {[...navigationItems.slice(3), ...resourcesItems.slice(0, 2)].map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium leading-none text-gray-900 mb-2">
                        Soporte
                      </h4>
                      {[...resourcesItems.slice(2), ...legalItems].map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Action Button - Desktop */}
        <div className="hidden md:flex">
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <Link to="/#comparisons">
              Ver Comparaciones
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menú de navegación">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-green-600">
                  <Leaf className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">Plant-Based CDMX</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <nav className="space-y-4" aria-label="Navegación móvil">
              {/* Main Navigation */}
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-green-50 text-green-700 border-l-4 border-green-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="border-t pt-4">
                <h4 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Recursos
                </h4>
                <div className="space-y-1">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Legal
                </h4>
                <div className="space-y-1">
                  {legalItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link to="/#comparisons" onClick={() => setIsOpen(false)}>
                    Ver Comparaciones
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
