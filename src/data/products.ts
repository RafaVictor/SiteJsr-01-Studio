export interface ProductImage {
  url: string;
  alt: string;
  type: "front" | "back" | "detail" | "fabric" | "label";
}

export interface Product {
  id: string;
  name: string;
  price: number;
  images: ProductImage[];
  rating: number;
  reviews: number;
  sizes: string[];
  category: "Brasil 2026" | "Clubes Europeus" | "Retrô" | "Treino";
  badge?: string;
  description?: string;
  customizable: boolean;
}

const placeholder = (id: string, view: string, bg = "0a0e1a", fg = "d4af37") =>
  `https://placehold.co/800x1067/${bg}/${fg}?text=${encodeURIComponent(view)}%0AID-${id}`;

export const products: Product[] = [
  {
    id: "1",
    name: "Brasil 2026 — Mandante",
    price: 299.90,
    images: [
      { url: placeholder("1", "Frente"), alt: "Camisa mandante frente", type: "front" },
      { url: placeholder("1", "Costas"), alt: "Camisa mandante costas", type: "back" },
      { url: placeholder("1", "Tecido"), alt: "Detalhe do tecido", type: "fabric" },
      { url: placeholder("1", "Etiqueta"), alt: "Etiqueta oficial", type: "label" },
    ],
    rating: 4.8,
    reviews: 342,
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Brasil 2026",
    badge: "Lançamento",
    description: "Camisa titular da seleção brasileira para o ciclo 2026. Tecido Dri-FIT ADV com tecnologia de ventilação e acabamento premium.",
    customizable: true,
  },
  {
    id: "2",
    name: "Brasil 2026 — Amarela Clássica",
    price: 279.90,
    images: [
      { url: placeholder("2", "Frente"), alt: "Camisa amarela frente", type: "front" },
      { url: placeholder("2", "Costas"), alt: "Camisa amarela costas", type: "back" },
      { url: placeholder("2", "Tecido"), alt: "Detalhe do tecido", type: "fabric" },
      { url: placeholder("2", "Brasão"), alt: "Detalhe do brasão", type: "detail" },
    ],
    rating: 4.9,
    reviews: 521,
    sizes: ["P", "M", "G", "GG"],
    category: "Brasil 2026",
    badge: "Mais vendida",
    description: "O clássico amarelo redesenhado com corte moderno e materiais sustentáveis para 2026.",
    customizable: true,
  },
  {
    id: "3",
    name: "Brasil 2026 — Visitante",
    price: 289.90,
    images: [
      { url: placeholder("3", "Frente"), alt: "Camisa visitante frente", type: "front" },
      { url: placeholder("3", "Costas"), alt: "Camisa visitante costas", type: "back" },
      { url: placeholder("3", "Tecido"), alt: "Detalhe do tecido", type: "fabric" },
      { url: placeholder("3", "Gola"), alt: "Detalhe da gola", type: "detail" },
    ],
    rating: 4.7,
    reviews: 198,
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Brasil 2026",
    description: "Camisa away em azul profundo, inspirada na bandeira nacional.",
    customizable: true,
  },
  {
    id: "4",
    name: "Brasil 2026 — Black Edition",
    price: 349.90,
    images: [
      { url: placeholder("4", "Frente"), alt: "Black edition frente", type: "front" },
      { url: placeholder("4", "Costas"), alt: "Black edition costas", type: "back" },
      { url: placeholder("4", "Tecido"), alt: "Tecido premium", type: "fabric" },
      { url: placeholder("4", "Emblema"), alt: "Emblema dourado", type: "detail" },
    ],
    rating: 4.9,
    reviews: 145,
    sizes: ["P", "M", "G", "GG"],
    category: "Brasil 2026",
    badge: "Premium",
    description: "A exclusiva Black Edition com acabamento em dourado fosco. Edição limitada.",
    customizable: true,
  },
  {
    id: "5",
    name: "Real Madrid 24/25 — Home",
    price: 319.90,
    images: [
      { url: placeholder("5", "Frente", "111111", "d4af37"), alt: "Real Madrid frente", type: "front" },
      { url: placeholder("5", "Costas", "111111", "d4af37"), alt: "Real Madrid costas", type: "back" },
    ],
    rating: 4.8,
    reviews: 230,
    sizes: ["P", "M", "G", "GG"],
    category: "Clubes Europeus",
    badge: "Importada",
    description: "Camisa oficial do Real Madrid temporada 24/25.",
    customizable: true,
  },
  {
    id: "6",
    name: "Barcelona 24/25 — Home",
    price: 319.90,
    images: [
      { url: placeholder("6", "Frente", "1a0a2e", "d4af37"), alt: "Barcelona frente", type: "front" },
      { url: placeholder("6", "Costas", "1a0a2e", "d4af37"), alt: "Barcelona costas", type: "back" },
    ],
    rating: 4.7,
    reviews: 189,
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Clubes Europeus",
    description: "Camisa oficial do Barcelona temporada 24/25.",
    customizable: true,
  },
  {
    id: "7",
    name: "Brasil 1970 — Retrô Pelé",
    price: 249.90,
    images: [
      { url: placeholder("7", "Frente", "1a1a0a", "d4af37"), alt: "Retrô 1970 frente", type: "front" },
      { url: placeholder("7", "Costas", "1a1a0a", "d4af37"), alt: "Retrô 1970 costas", type: "back" },
    ],
    rating: 5.0,
    reviews: 412,
    sizes: ["M", "G", "GG"],
    category: "Retrô",
    badge: "Clássica",
    description: "Réplica premium da camisa usada pelo Rei Pelé na Copa de 1970.",
    customizable: false,
  },
  {
    id: "8",
    name: "Brasil 2002 — Retrô Penta",
    price: 239.90,
    images: [
      { url: placeholder("8", "Frente", "0a1a0a", "d4af37"), alt: "Retrô 2002 frente", type: "front" },
      { url: placeholder("8", "Costas", "0a1a0a", "d4af37"), alt: "Retrô 2002 costas", type: "back" },
    ],
    rating: 4.8,
    reviews: 310,
    sizes: ["P", "M", "G", "GG"],
    category: "Retrô",
    badge: "Pentacampeão",
    description: "A camisa do penta. Reviva a glória de Ronaldo e companhia.",
    customizable: false,
  },
  {
    id: "9",
    name: "Brasil 2026 — Treino",
    price: 199.90,
    images: [
      { url: placeholder("9", "Frente", "0a0e1a", "888888"), alt: "Camisa treino frente", type: "front" },
      { url: placeholder("9", "Costas", "0a0e1a", "888888"), alt: "Camisa treino costas", type: "back" },
      { url: placeholder("9", "Tecido", "0a0e1a", "888888"), alt: "Tecido respirável", type: "fabric" },
    ],
    rating: 4.5,
    reviews: 256,
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Treino",
    description: "Camisa de treino oficial com tecido ultra-leve e tecnologia de absorção.",
    customizable: false,
  },
  {
    id: "10",
    name: "Brasil 2026 — Pré-Jogo",
    price: 179.90,
    images: [
      { url: placeholder("10", "Frente", "0a0e1a", "888888"), alt: "Pré-jogo frente", type: "front" },
      { url: placeholder("10", "Costas", "0a0e1a", "888888"), alt: "Pré-jogo costas", type: "back" },
    ],
    rating: 4.4,
    reviews: 128,
    sizes: ["P", "M", "G", "GG"],
    category: "Treino",
    description: "Camisa de aquecimento pré-jogo com design exclusivo.",
    customizable: false,
  },
];

export type CategoryType = Product["category"];

export const categoryOrder: CategoryType[] = ["Brasil 2026", "Clubes Europeus", "Retrô", "Treino"];

export const reviews = [
  {
    id: "1",
    name: "Lucas M.",
    rating: 5,
    comment: "Qualidade incrível! O tecido é muito confortável e o acabamento é impecável. Melhor camisa que já tive.",
    date: "15 Mar 2026",
    avatar: "https://placehold.co/100x100/0a0e1a/d4af37?text=LM",
    verified: true,
    photo: "https://placehold.co/400x400/1a1a2e/d4af37?text=Cliente+1",
  },
  {
    id: "2",
    name: "Ana C.",
    rating: 5,
    comment: "Amei a personalização! Coloquei meu nome e ficou perfeito. Entrega super rápida.",
    date: "12 Mar 2026",
    avatar: "https://placehold.co/100x100/0a0e1a/d4af37?text=AC",
    verified: true,
    photo: "https://placehold.co/400x400/1a1a2e/d4af37?text=Cliente+2",
  },
  {
    id: "3",
    name: "Pedro H.",
    rating: 4,
    comment: "Camisa linda, material premium. Só achei que poderia ter mais opções de patches.",
    date: "10 Mar 2026",
    avatar: "https://placehold.co/100x100/0a0e1a/d4af37?text=PH",
    verified: true,
    photo: "https://placehold.co/400x400/1a1a2e/d4af37?text=Cliente+3",
  },
  {
    id: "4",
    name: "Juliana S.",
    rating: 5,
    comment: "Presente perfeito pro meu marido! A Black Edition é simplesmente espetacular.",
    date: "08 Mar 2026",
    avatar: "https://placehold.co/100x100/0a0e1a/d4af37?text=JS",
    verified: true,
    photo: "https://placehold.co/400x400/1a1a2e/d4af37?text=Cliente+4",
  },
  {
    id: "5",
    name: "Rafael T.",
    rating: 5,
    comment: "A retrô de 1970 é uma obra de arte. Qualidade impecável.",
    date: "05 Mar 2026",
    avatar: "https://placehold.co/100x100/0a0e1a/d4af37?text=RT",
    verified: true,
    photo: "https://placehold.co/400x400/1a1a2e/d4af37?text=Cliente+5",
  },
  {
    id: "6",
    name: "Camila F.",
    rating: 5,
    comment: "Comprei a visitante e a mandante. As duas são espetaculares!",
    date: "02 Mar 2026",
    avatar: "https://placehold.co/100x100/0a0e1a/d4af37?text=CF",
    verified: true,
    photo: "https://placehold.co/400x400/1a1a2e/d4af37?text=Cliente+6",
  },
];
