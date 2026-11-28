export type BusinessCategory = 'Restaurantes' | 'Tiendas' | 'Productos' | 'Servicios' | 'Catering' | 'Consultoría';

interface DirectoryBusiness {
  id: string;
  name: string;
  category: BusinessCategory;
  label: string;
  location: string;
  description: string;
  instagram: string;
  menu: string;
  photo: { src: string; width: number; height: number; alt: string; source: string; date: string };
}

export const directoryBusinesses: readonly DirectoryBusiness[] = [
  {
    id: 'nomada-psy-kitchen',
    name: 'Nómada psy kitchen',
    category: 'Productos',
    label: 'Cocina de origen vegetal',
    location: 'Ciudad de México · Zona de atención por confirmar',
    description: 'Proyecto de cocina vegetal vinculado con la bicicleta, el apoyo mutuo, la soberanía alimentaria y la liberación animal. Su menú publicado incluye medallones de plátano con frijoles, albóndigas de lentejas, suadero de soya con setas y queso de papa.',
    instagram: 'https://www.instagram.com/nomada_dark_kitchen_/',
    menu: 'https://www.instagram.com/nomada_dark_kitchen_/p/DeXnG93lDwT/',
    photo: {
      src: '/images/emprendimientos/nomada-psy-kitchen.jpg',
      width: 480,
      height: 640,
      alt: 'Charolas de comida con piezas empanizadas, zanahorias, apio y una etiqueta ilustrada de Nómada',
      source: 'https://www.instagram.com/nomada_dark_kitchen_/p/Df0VwRpgDnA/',
      date: '16 de noviembre de 2026',
    },
  },
];
