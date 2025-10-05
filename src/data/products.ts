export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
  available: boolean;
  category: 'base' | 'temporada';
}

export const baseProducts: Product[] = [
  {
    id: "oreo",
    name: "Oreo",
    price: 45,
    description: "Brownie cremoso con galletas Oreo trituradas y crema de vainilla",
    available: true,
    category: "base"
  },
  {
    id: "brookie",
    name: "Brookie",
    price: 48,
    description: "La perfecta combinación de brownie y cookie en una delicia única",
    available: true,
    category: "base"
  },
  {
    id: "limon",
    name: "Limón",
    price: 43,
    description: "Brownie blanco con un toque cítrico refrescante y glaseado de limón",
    available: true,
    category: "base"
  },
  {
    id: "mazapan",
    name: "Mazapán",
    price: 47,
    description: "Brownie tradicional con trozos de mazapán y un toque de canela",
    available: true,
    category: "base"
  },
  {
    id: "mms",
    name: "M&M",
    price: 46,
    description: "Brownie chocolatoso decorado con coloridos M&M's que explotan en tu boca",
    available: true,
    category: "base"
  }
];

export const seasonalProducts: Product[] = [
  // Empty by default - will be populated through admin
];

export const getAllProducts = (): Product[] => [...baseProducts, ...seasonalProducts];