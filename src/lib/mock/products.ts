// API-READY: replace productService.methods with fetch('/api/products') when backend is live

import { getProductImages } from './images';

export type ProductVariant = {
  size: string;
  color: string;
  stock: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  comparePrice?: number;
  images: string[];
  variants: ProductVariant[];
  isNew?: boolean;
  isSoldOut?: boolean;
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod_1',
    slug: 'robe-ebene-wax-premium',
    name: 'Robe Ébène Wax Premium',
    category: 'Vêtements',
    description: 'Une robe élégante taillée dans un wax de qualité supérieure aux motifs géométriques ancestraux revisités. Conçue dans l\'atelier de Pointe-Noire.',
    price: 125000,
    comparePrice: 150000,
    images: getProductImages('robe-ebene-wax-premium'),
    variants: [
      { size: 'S',  color: 'Noir/Or', stock: 5 },
      { size: 'M',  color: 'Noir/Or', stock: 8 },
      { size: 'L',  color: 'Noir/Or', stock: 3 },
    ],
    isNew: true,
  },
  {
    id: 'prod_2',
    slug: 'chemise-pn-chic',
    name: 'Chemise Pointe-Noire Chic',
    category: 'Vêtements',
    description: 'Chemise homme à col mao, détails en tissu pagne sur les poignets et la patte de boutonnage. Inspirée des rues de Tié-Tié.',
    price: 85000,
    images: getProductImages('chemise-pn-chic'),
    variants: [
      { size: 'M',  color: 'Blanc/Motifs Bleus', stock: 12 },
      { size: 'L',  color: 'Blanc/Motifs Bleus', stock: 15 },
      { size: 'XL', color: 'Blanc/Motifs Bleus', stock: 7 },
    ],
  },
  {
    id: 'prod_3',
    slug: 'sac-zando-cuir',
    name: 'Sac Zando en Cuir',
    category: 'Accessoires',
    description: 'Sac à main artisanal en cuir naturel avec finitions en bronze. Fabriqué à la main dans notre atelier de Pointe-Noire.',
    price: 195000,
    images: getProductImages('sac-zando-cuir'),
    variants: [{ size: 'Unique', color: 'Marron Terre', stock: 4 }],
  },
  {
    id: 'prod_4',
    slug: 'ensemble-lualaba',
    name: 'Ensemble Lualaba',
    category: 'Vêtements',
    description: 'Tailleur pantalon moderne pour femme, alliant structure contemporaine et imprimés wax du Congo-Brazzaville.',
    price: 210000,
    images: getProductImages('ensemble-lualaba'),
    variants: [
      { size: '38', color: 'Vert Émeraude', stock: 2 },
      { size: '40', color: 'Vert Émeraude', stock: 0 },
    ],
    isSoldOut: true,
  },
  {
    id: 'prod_5',
    slug: 'foulard-malkia',
    name: 'Foulard Malkia',
    category: 'Accessoires',
    description: 'Grand foulard en soie et coton, motifs inspirés de la nature du Kouilou. Teint à la main, pièce unique.',
    price: 45000,
    images: getProductImages('foulard-malkia'),
    variants: [{ size: 'Unique', color: 'Multicolore', stock: 25 }],
  },
  {
    id: 'prod_6',
    slug: 'pantalon-savane-lin',
    name: 'Pantalon Savane Lin',
    category: 'Vêtements',
    description: 'Pantalon léger en mélange lin et coton, idéal pour les chaleurs de Pointe-Noire. Coupe droite décontractée.',
    price: 95000,
    images: getProductImages('pantalon-savane-lin'),
    variants: [
      { size: 'M', color: 'Sable', stock: 10 },
      { size: 'L', color: 'Sable', stock: 12 },
    ],
  },
  {
    id: 'prod_7',
    slug: 'boucles-loango',
    name: "Boucles d'oreilles Loango",
    category: 'Bijoux',
    description: "Boucles d'oreilles pendantes en laiton martelé, inspirées des côtes de Loango. Finition dorée à chaud.",
    price: 65000,
    images: getProductImages('boucles-loango'),
    variants: [{ size: 'Unique', color: 'Or/Noir', stock: 15 }],
  },
  {
    id: 'prod_8',
    slug: 'veste-officier-poto',
    name: 'Veste Officier Poto-Poto',
    category: 'Vêtements',
    description: 'Veste structurée inspirée de l\'élégance du quartier Poto-Poto, avec broderies traditionnelles au dos. Pièce signature.',
    price: 250000,
    images: getProductImages('veste-officier-poto'),
    variants: [
      { size: 'L',  color: 'Bleu Nuit', stock: 5 },
      { size: 'XL', color: 'Bleu Nuit', stock: 2 },
    ],
    isNew: true,
  },
  {
    id: 'prod_9',
    slug: 'top-kouilou',
    name: 'Top Kouilou',
    category: 'Vêtements',
    description: 'Top sans manches à col montant, fermeture goutte dans le dos. Tissu technique respirant pour le climat équatorial.',
    price: 55000,
    images: getProductImages('top-kouilou'),
    variants: [
      { size: 'S', color: 'Ocre', stock: 10 },
      { size: 'M', color: 'Ocre', stock: 10 },
    ],
  },
  {
    id: 'prod_10',
    slug: 'ceinture-raphia-luxe',
    name: 'Ceinture Raphia Luxe',
    category: 'Accessoires',
    description: 'Ceinture tressée main en raphia naturel de la région de la Sangha, boucle en laiton doré.',
    price: 35000,
    images: getProductImages('ceinture-raphia-luxe'),
    variants: [{ size: 'Unique', color: 'Naturel/Or', stock: 20 }],
  },
  {
    id: 'prod_11',
    slug: 'sandales-fleuve-congo',
    name: 'Sandales Fleuve Congo',
    category: 'Chaussures',
    description: 'Sandales minimalistes en cuir tanné local, brides croisées réglables. Semelle confort pour les longues journées.',
    price: 75000,
    images: getProductImages('sandales-fleuve-congo'),
    variants: [
      { size: '40', color: 'Noir',  stock: 5 },
      { size: '41', color: 'Noir',  stock: 6 },
      { size: '42', color: 'Noir',  stock: 8 },
      { size: '43', color: 'Camel', stock: 4 },
    ],
  },
  {
    id: 'prod_12',
    slug: 'kimono-niari',
    name: 'Kimono Niari',
    category: 'Vêtements',
    description: 'Kimono long et fluide en voile de coton imprimé, motifs vallée du Niari. Parfait pour les soirées et événements.',
    price: 180000,
    images: getProductImages('kimono-niari'),
    variants: [
      { size: 'S/M', color: 'Indigo', stock: 4 },
      { size: 'L/XL', color: 'Indigo', stock: 2 },
    ],
  },
];

export const productService = {
  getAll: async () => MOCK_PRODUCTS,
  getBySlug: async (slug: string) => MOCK_PRODUCTS.find(p => p.slug === slug),
  getFeatured: async () => MOCK_PRODUCTS.filter(p => p.isNew || p.id === 'prod_3' || p.id === 'prod_6').slice(0, 4),
  getByCategory: async (category: string) =>
    MOCK_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase()),
};