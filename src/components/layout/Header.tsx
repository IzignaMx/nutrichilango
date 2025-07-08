
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
    <ul className="md:flex space-x-6">
      {items.map((item) => (
        <li key={item.name}>
          <Link to={item.href} className="hover:text-brand-accent transition-colors duration-200">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="bg-brand-primary text-primary-foreground py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        <Link to="/" className="flex items-center space-x-3 flex-grow-0">
          <img 
            src="/lovable-uploads/426e756a-fc13-4011-a25a-c9e8e5f5bce3.png" 
            alt="NutriChilango Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold">NutriChilango</span>
        </Link>

        
        <div className="hidden md:flex items-center space-x-8 flex-grow justify-center">
          <NavItems items={mainNavItems} />
          <NavItems items={resourcesItems} />
        </div>

        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="bg-brand-primary px-4 py-2">
          <ul className="flex flex-col space-y-4">
            {mainNavItems.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="block py-2 hover:text-brand-accent transition-colors duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
            {resourcesItems.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="block py-2 hover:text-brand-accent transition-colors duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
            {legalItems.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="block py-2 hover:text-brand-accent transition-colors duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
