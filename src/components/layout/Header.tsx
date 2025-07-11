
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from "@/components/theme-provider"

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const mainNavItems = [
    { name: 'Comparador Productos', href: '/' },
    { name: 'Comparador Platillos', href: '/dishes-comparison' },
  ];

  const resourcesItems = [
    { name: 'Fuentes de Datos', href: '/data-sources' },
    { name: '¿Cómo Funciona?', href: '/how-it-works' },
    { name: 'Guía Completa', href: '/guide' },
  ];

  const legalItems = [
    { name: 'Términos de Uso', href: '/terms' },
    { name: 'Política de Privacidad', href: '/privacy' },
    { name: 'Accesibilidad', href: '/accessibility' },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const NavItems: React.FC<{ items: { name: string; href: string; }[] }> = ({ items }) => (
    <ul className="md:flex md:space-x-6 space-y-0">
      {items.map((item) => (
        <li key={item.name}>
          <Link to={item.href} className="hover:text-brand-accent transition-colors duration-200 text-sm md:text-base">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="bg-brand-primary text-primary-foreground py-3 md:py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[60px]">
        
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <img 
            src="/lovable-uploads/426e756a-fc13-4011-a25a-c9e8e5f5bce3.png" 
            alt="NutriChilango Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold truncate">NutriChilango</span>
        </Link>

        
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-grow justify-center">
          <NavItems items={mainNavItems} />
          <NavItems items={resourcesItems} />
        </div>

        
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="flex-shrink-0">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        
        <div className="flex lg:hidden items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="flex-shrink-0">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-primary-foreground/20">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <nav className="space-y-1">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">Principal</p>
                {mainNavItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href} 
                    className="block py-2 px-3 rounded-md hover:bg-primary-foreground/10 hover:text-brand-accent transition-colors duration-200 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-1 pt-3">
                <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">Recursos</p>
                {resourcesItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href} 
                    className="block py-2 px-3 rounded-md hover:bg-primary-foreground/10 hover:text-brand-accent transition-colors duration-200 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-1 pt-3">
                <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">Legal</p>
                {legalItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href} 
                    className="block py-2 px-3 rounded-md hover:bg-primary-foreground/10 hover:text-brand-accent transition-colors duration-200 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
