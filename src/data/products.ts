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
  color: string;
  sizes: string[];
  category: "Mandante" | "Visitante" | "Treino" | "Especial";
  badge?: string;
  description?: string;
  customizable: boolean;
}

// Placeholder URLs — substitua por URLs reais das fotos de cada camisa
const placeholder = (id: string, view: string) =>
  `https://placehold.co/800x800/1a1a1a/ffffff?text=Brasil+2026%0A${view}%0AID-${id}`;

const placeholderDetail = (id: string, view: string) =>
  `https://placehold.co/800x800/222222/cccccc?text=${view}%0AID-${id}`;

export const products: Product[] = [
  {
    id: "1",
    name: "Camisa Brasil 2026 — Mandante",
    price: 299.90,
    images: [
      { url: placeholder("1", "Frente"), alt: "Camisa mandante frente", type: "front" },
      { url: placeholder("1", "Costas"), alt: "Camisa mandante costas", type: "back" },
      { url: placeholderDetail("1", "Tecido"), alt: "Detalhe do tecido", type: "fabric" },
      { url: placeholderDetail("1", "Etiqueta"), alt: "Etiqueta oficial", type: "label" },
      { url: placeholderDetail("1", "Estampa"), alt: "Detalhe da estampa", type: "detail" },
    ],
    rating: 4.8,
    reviews: 342,
    color: "Verde",
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Mandante",
    badge: "Lançamento",
    description: "A camisa titular da seleção brasileira para o ciclo 2026. Tecido Dri-FIT ADV com tecnologia de ventilação e acabamento premium.",
    customizable: true,
  },
  {
    id: "2",
    name: "Camisa Brasil 2026 — Amarela Clássica",
    price: 279.90,
    images: [
      { url: placeholder("2", "Frente"), alt: "Camisa amarela frente", type: "front" },
      { url: placeholder("2", "Costas"), alt: "Camisa amarela costas", type: "back" },
      { url: placeholderDetail("2", "Tecido"), alt: "Detalhe do tecido", type: "fabric" },
      { url: placeholderDetail("2", "Brasão"), alt: "Detalhe do brasão", type: "detail" },
    ],
    rating: 4.9,
    reviews: 521,
    color: "Amarelo",
    sizes: ["P", "M", "G", "GG"],
    category: "Mandante",
    badge: "Mais vendida",
    description: "O clássico amarelo da seleção, redesenhado com corte moderno e materiais sustentáveis para 2026.",
    customizable: true,
  },
  {
    id: "3",
    name: "Camisa Brasil 2026 — Visitante",
    price: 289.90,
    images: [
      { url: placeholder("3", "Frente"), alt: "Camisa visitante frente", type: "front" },
      { url: placeholder("3", "Costas"), alt: "Camisa visitante costas", type: "back" },
      { url: placeholderDetail("3", "Tecido"), alt: "Detalhe do tecido", type: "fabric" },
      { url: placeholderDetail("3", "Gola"), alt: "Detalhe da gola", type: "detail" },
    ],
    rating: 4.7,
    reviews: 198,
    color: "Azul",
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Visitante",
    description: "Camisa away em azul profundo, inspirada na bandeira nacional. Ideal para jogos fora de casa.",
    customizable: true,
  },
  {
    id: "4",
    name: "Camisa Brasil 2026 — Edição Especial",
    price: 319.90,
    images: [
      { url: placeholder("4", "Frente"), alt: "Camisa especial frente", type: "front" },
      { url: placeholder("4", "Costas"), alt: "Camisa especial costas", type: "back" },
      { url: placeholderDetail("4", "Detalhes"), alt: "Detalhes exclusivos", type: "detail" },
      { url: placeholderDetail("4", "Etiqueta"), alt: "Etiqueta numerada", type: "label" },
    ],
    rating: 4.6,
    reviews: 87,
    color: "Branco",
    sizes: ["M", "G", "GG"],
    category: "Especial",
    badge: "Edição Limitada",
    description: "Edição especial numerada com detalhes em dourado. Produção limitada a 2026 unidades.",
    customizable: true,
  },
  {
    id: "5",
    name: "Camisa Brasil 2026 — Treino",
    price: 199.90,
    images: [
      { url: placeholder("5", "Frente"), alt: "Camisa treino frente", type: "front" },
      { url: placeholder("5", "Costas"), alt: "Camisa treino costas", type: "back" },
      { url: placeholderDetail("5", "Tecido"), alt: "Tecido respirável", type: "fabric" },
    ],
    rating: 4.5,
    reviews: 256,
    color: "Verde",
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Treino",
    description: "Camisa de treino oficial com tecido ultra-leve e tecnologia de absorção de suor.",
    customizable: false,
  },
  {
    id: "6",
    name: "Camisa Brasil 2026 — Black Edition",
    price: 349.90,
    images: [
      { url: placeholder("6", "Frente"), alt: "Black edition frente", type: "front" },
      { url: placeholder("6", "Costas"), alt: "Black edition costas", type: "back" },
      { url: placeholderDetail("6", "Tecido"), alt: "Tecido premium", type: "fabric" },
      { url: placeholderDetail("6", "Etiqueta"), alt: "Etiqueta premium", type: "label" },
      { url: placeholderDetail("6", "Emblema"), alt: "Emblema dourado", type: "detail" },
    ],
    rating: 4.9,
    reviews: 145,
    color: "Preto",
    sizes: ["P", "M", "G", "GG"],
    category: "Especial",
    badge: "Premium",
    description: "A exclusiva Black Edition com acabamento em dourado fosco. O modelo mais sofisticado da coleção.",
    customizable: true,
  },
];

export const categoryOrder: Product["category"][] = ["Mandante", "Visitante", "Treino", "Especial"];

export const categoryLabels: Record<Product["category"], string> = {
  Mandante: "Mandante — Camisas Titulares",
  Visitante: "Visitante — Away Kit",
  Treino: "Treino — Training Collection",
  Especial: "Especial — Limited Editions",
};

export const reviews = [
  {
    id: "1",
    name: "Lucas M.",
    rating: 5,
    comment: "Qualidade incrível! O tecido é muito confortável e o acabamento é impecável. Melhor camisa que já tive.",
    date: "15 Mar 2026",
    avatar: "LM",
    verified: true,
  },
  {
    id: "2",
    name: "Ana C.",
    rating: 5,
    comment: "Amei a personalização! Coloquei meu nome e ficou perfeito. Entrega super rápida.",
    date: "12 Mar 2026",
    avatar: "AC",
    verified: true,
  },
  {
    id: "3",
    name: "Pedro H.",
    rating: 4,
    comment: "Camisa linda, material premium. Só achei que poderia ter mais opções de patches.",
    date: "10 Mar 2026",
    avatar: "PH",
    verified: true,
  },
  {
    id: "4",
    name: "Juliana S.",
    rating: 5,
    comment: "Presente perfeito pro meu marido! A Black Edition é simplesmente espetacular.",
    date: "08 Mar 2026",
    avatar: "JS",
    verified: true,
  },
];
