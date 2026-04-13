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
  category: "Brasil 2026" | "Clubes Europeus" | "Times Brasileiros" | "Seleções Mundiais" | "Retrô" | "Treino";
  badge?: string;
  description?: string;
  customizable: boolean;
  year: string;
  fabric: string;
  numbering: string;
  style: string;
}

const placeholder = (id: string, view: string, bg = "f3f4f6", fg = "1f2937") =>
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
    year: "2026",
    fabric: "Poliéster Reciclado (Dri-FIT)",
    numbering: "Personalizável",
    style: "Torcedor / Jogador",
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
    year: "2026",
    fabric: "100% Poliéster",
    numbering: "Personalizável",
    style: "Torcedor",
  },
  {
    id: "11",
    name: "Flamengo 2024 — Mandante",
    price: 349.90,
    images: [
      { url: placeholder("11", "Frente", "f1f5f9", "dc2626"), alt: "Flamengo frente", type: "front" },
      { url: placeholder("11", "Costas", "f1f5f9", "dc2626"), alt: "Flamengo costas", type: "back" },
    ],
    rating: 4.9,
    reviews: 850,
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Times Brasileiros",
    badge: "Popular",
    description: "O novo Manto Sagrado do Flamengo para a temporada 2024. Tradição em vermelho e preto.",
    customizable: true,
    year: "2024",
    fabric: "AeroReady / Heat.RDY",
    numbering: "Opcional",
    style: "Jogador",
  },
  {
    id: "16",
    name: "Argentina 2024 — Mandante",
    price: 299.90,
    images: [
      { url: placeholder("16", "Frente", "f1f5f9", "3b82f6"), alt: "Argentina frente", type: "front" },
      { url: placeholder("16", "Costas", "f1f5f9", "3b82f6"), alt: "Argentina costas", type: "back" },
    ],
    rating: 4.9,
    reviews: 420,
    sizes: ["P", "M", "G", "GG"],
    category: "Seleções Mundiais",
    badge: "Campeã do Mundo",
    description: "A camisa dos campeões mundiais. Listras em azul celeste e branco com o escudo da AFA dourado.",
    customizable: true,
    year: "2024",
    fabric: "Tecnologia Heat.RDY",
    numbering: "Oficial",
    style: "Torcedor",
  },
  {
    id: "7",
    name: "Brasil 1970 — Retrô Pelé",
    price: 249.90,
    images: [
      { url: placeholder("7", "Frente", "fef9c3", "166534"), alt: "Retrô 1970 frente", type: "front" },
      { url: placeholder("7", "Costas", "fef9c3", "166534"), alt: "Retrô 1970 costas", type: "back" },
    ],
    rating: 5.0,
    reviews: 412,
    sizes: ["M", "G", "GG"],
    category: "Retrô",
    badge: "Clássica",
    description: "Réplica premium da camisa usada pelo Rei Pelé na Copa de 1970.",
    customizable: false,
    year: "1970",
    fabric: "Algodão Premium",
    numbering: "10 (Fixo)",
    style: "Retrô Clássico",
  },
];

export type CategoryType = Product["category"];

export const categoryOrder: CategoryType[] = [
  "Brasil 2026",
  "Times Brasileiros",
  "Clubes Europeus",
  "Seleções Mundiais",
  "Retrô",
  "Treino"
];

export const reviews = [
  {
    id: "1",
    name: "Lucas M.",
    rating: 5,
    comment: "Qualidade incrível! O tecido é muito confortável e o acabamento é impecável. Melhor camisa que já tive.",
    date: "15 Mar 2026",
    avatar: "https://placehold.co/100x100/f3f4f6/1f2937?text=LM",
    verified: true,
    photo: "https://placehold.co/400x400/f3f4f6/1f2937?text=Cliente+1",
  },
];
