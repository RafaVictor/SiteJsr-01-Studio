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
}

const cloudinaryUrl = (id: string) => `https://res.cloudinary.com/dly7v8v3o/image/upload/f_auto,q_auto/${id}`;

const placeholder = (id: string, view: string, bg = "0a0e1a", fg = "d4af37") => {
  const mapping: Record<string, string> = {
    // Flamengo
    "11_Frente": "Flamengo_2526_Player_Version_Home_Jersey_S-4XL",
    "11_Costas": "2526_Flamengo_Home_All_Sponsors_S-4XL",
    "11_Visitante_Frente": "Flamengo_2526_Player_Version_Away_Jersey_S-4XL",
    "11_Visitante_Costas": "2526_Flamengo_away_S-4XL",
    "11_Treino": "2526_Flamengo_training_suit_S-4XL",
    "11_Third": "Flamengo_2526_Third_Away_S-XXL",
    "11_Retro_2001": "Flamengo_2001_Away_Retro_Jersey_S-XXL",
    "11_Retro_1995": "Flamengo_1995_Home_Retro_Jersey_S-XXL",

    // Palmeiras
    "12_Frente": "Palmeiras_2425_Home_Jersey_S-4XL",
    "12_Costas": "2526_Players_Palmeiras_Home_all_sponsors_S-4XL",
    "12_Visitante": "2526_Players_Palmeiras_away_all_sponsors_S-4XL",
    "12_Third": "2526_Palmeiras_third_away_S-4XL",

    // Corinthians
    "14_Frente": "2425_Corinthians_home_all_sponsors_S-4XL",
    "14_Costas": "2425_Corinthians_Away_All_Sponsors_S-4XL",
    "14_Third": "2425_Corinthians_Third_Away_S-4XL",

    // Santos
    "Santos_Home_Frente": "2526_Santos_home_all_sponsors_S-4XL",
    "Santos_Away_Frente": "2526_Players_Santos_Away_S-4XL",
    "Santos_Third_Frente": "2526_Santos_Third_away_game_S-4XL",

    // Grêmio
    "Gremio_Home_Frente": "2526_Gremio_Home_S-4XL",
    "Gremio_Third_Frente": "2526_Gremio_third_away_S-4XL",
    
    // Default mappings
    "1_Frente": "manto-store/brasil-home-front",
    "1_Costas": "manto-store/brasil-home-back",
    "1_Tecido": "manto-store/brasil-home-detail",
    "2_Frente": "manto-store/brasil-classic-front",
    "2_Costas": "manto-store/brasil-classic-back",
    "3_Frente": "manto-store/brasil-away-front",
    "3_Costas": "manto-store/brasil-away-back",
    "5_Frente": "manto-store/real-madrid-front",
    "5_Costas": "manto-store/real-madrid-back",
    "6_Frente": "manto-store/barcelona-front",
    "6_Costas": "manto-store/barcelona-back",
    "15_Frente": "manto-store/city-front",
    "15_Costas": "manto-store/city-back",
    "16_Frente": "manto-store/argentina-front",
    "16_Costas": "manto-store/argentina-back",
    "17_Frente": "manto-store/france-front",
    "17_Costas": "manto-store/france-back",
    "18_Frente": "manto-store/japan-front",
    "18_Costas": "manto-store/japan-back",
    "7_Frente": "manto-store/retro-70-front",
    "7_Costas": "manto-store/retro-70-back",
    "8_Frente": "manto-store/retro-02-front",
    "8_Costas": "manto-store/retro-02-back",
    "19_Frente": "manto-store/italy-06-front",
    "19_Costas": "manto-store/italy-06-back",
    "9_Frente": "manto-store/treino-front",
    "9_Costas": "manto-store/treino-back",
    "10_Frente": "manto-store/pre-jogo-front",
    "10_Costas": "manto-store/pre-jogo-back",
  };

  const key = `${id}_${view}`;
  const mappedId = mapping[key];
  
  if (mappedId) {
    return cloudinaryUrl(mappedId);
  }

  return `https://placehold.co/800x1067/${bg}/${fg}?text=${encodeURIComponent(view)}%0AID-${id}`;
};

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
    id: "11",
    name: "Flamengo 2024 — Mandante",
    price: 349.90,
    images: [
      { url: placeholder("11", "Frente", "111111", "ff0000"), alt: "Flamengo frente", type: "front" },
      { url: placeholder("11", "Costas", "111111", "ff0000"), alt: "Flamengo costas", type: "back" },
    ],
    rating: 4.9,
    reviews: 850,
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Times Brasileiros",
    badge: "Popular",
    description: "O novo Manto Sagrado do Flamengo para a temporada 2024. Tradição em vermelho e preto.",
    customizable: true,
  },
  {
    id: "12",
    name: "Palmeiras 2024 — Mandante",
    price: 349.90,
    images: [
      { url: placeholder("12", "Frente", "006400", "ffffff"), alt: "Palmeiras frente", type: "front" },
      { url: placeholder("12", "Costas", "006400", "ffffff"), alt: "Palmeiras costas", type: "back" },
    ],
    rating: 4.8,
    reviews: 620,
    sizes: ["P", "M", "G", "GG"],
    category: "Times Brasileiros",
    description: "Camisa oficial do Palmeiras temporada 2024. O verde da academia com detalhes dourados.",
    customizable: true,
  },
  {
    id: "13",
    name: "São Paulo 2024 — Mandante",
    price: 349.90,
    images: [
      { url: placeholder("13", "Frente", "ffffff", "ff0000"), alt: "São Paulo frente", type: "front" },
      { url: placeholder("13", "Costas", "ffffff", "ff0000"), alt: "São Paulo costas", type: "back" },
    ],
    rating: 4.7,
    reviews: 450,
    sizes: ["P", "M", "G", "GG"],
    category: "Times Brasileiros",
    description: "A clássica camisa branca com as listras horizontais do Tricolor Paulista.",
    customizable: true,
  },
  {
    id: "14",
    name: "Corinthians 2024 — Mandante",
    price: 349.90,
    images: [
      { url: placeholder("14", "Frente", "ffffff", "000000"), alt: "Corinthians frente", type: "front" },
      { url: placeholder("14", "Costas", "ffffff", "000000"), alt: "Corinthians costas", type: "back" },
    ],
    rating: 4.7,
    reviews: 780,
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Times Brasileiros",
    description: "O novo manto do Timão para a temporada 2024. O branco imaculado com detalhes em preto.",
    customizable: true,
  },
  {
    id: "5",
    name: "Real Madrid 24/25 — Home",
    price: 319.90,
    images: [
      { url: placeholder("5", "Frente", "ffffff", "d4af37"), alt: "Real Madrid frente", type: "front" },
      { url: placeholder("5", "Costas", "ffffff", "d4af37"), alt: "Real Madrid costas", type: "back" },
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
    id: "15",
    name: "Manchester City 24/25 — Home",
    price: 319.90,
    images: [
      { url: placeholder("15", "Frente", "6caee0", "ffffff"), alt: "Man City frente", type: "front" },
      { url: placeholder("15", "Costas", "6caee0", "ffffff"), alt: "Man City costas", type: "back" },
    ],
    rating: 4.8,
    reviews: 150,
    sizes: ["P", "M", "G", "GG"],
    category: "Clubes Europeus",
    description: "Camisa oficial do Manchester City para a temporada 24/25.",
    customizable: true,
  },
  {
    id: "16",
    name: "Argentina 2024 — Mandante",
    price: 299.90,
    images: [
      { url: placeholder("16", "Frente", "75aadb", "ffffff"), alt: "Argentina frente", type: "front" },
      { url: placeholder("16", "Costas", "75aadb", "ffffff"), alt: "Argentina costas", type: "back" },
    ],
    rating: 4.9,
    reviews: 420,
    sizes: ["P", "M", "G", "GG"],
    category: "Seleções Mundiais",
    badge: "Campeã do Mundo",
    description: "A camisa dos campeões mundiais. Listras em azul celeste e branco com o escudo da AFA dourado.",
    customizable: true,
  },
  {
    id: "17",
    name: "França 2024 — Mandante",
    price: 299.90,
    images: [
      { url: placeholder("17", "Frente", "002395", "ffffff"), alt: "França frente", type: "front" },
      { url: placeholder("17", "Costas", "002395", "ffffff"), alt: "França costas", type: "back" },
    ],
    rating: 4.7,
    reviews: 280,
    sizes: ["P", "M", "G", "GG"],
    category: "Seleções Mundiais",
    description: "O clássico azul dos Les Bleus com o galo dourado no peito.",
    customizable: true,
  },
  {
    id: "18",
    name: "Japão 2024 — Mandante",
    price: 299.90,
    images: [
      { url: placeholder("18", "Frente", "000080", "ffffff"), alt: "Japão frente", type: "front" },
      { url: placeholder("18", "Costas", "000080", "ffffff"), alt: "Japão costas", type: "back" },
    ],
    rating: 5.0,
    reviews: 190,
    sizes: ["P", "M", "G", "GG"],
    category: "Seleções Mundiais",
    badge: "Estilo",
    description: "Design futurista e minimalista dos Samurais Azuis para a temporada 2024.",
    customizable: true,
  },
  {
    id: "7",
    name: "Brasil 1970 — Retrô Pelé",
    price: 249.90,
    images: [
      { url: placeholder("7", "Frente", "ffd700", "006400"), alt: "Retrô 1970 frente", type: "front" },
      { url: placeholder("7", "Costas", "ffd700", "006400"), alt: "Retrô 1970 costas", type: "back" },
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
      { url: placeholder("8", "Frente", "ffd700", "006400"), alt: "Retrô 2002 frente", type: "front" },
      { url: placeholder("8", "Costas", "ffd700", "006400"), alt: "Retrô 2002 costas", type: "back" },
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
    id: "19",
    name: "Itália 2006 — Retrô Tetra",
    price: 249.90,
    images: [
      { url: placeholder("19", "Frente", "0000ff", "ffffff"), alt: "Itália 2006 frente", type: "front" },
      { url: placeholder("19", "Costas", "0000ff", "ffffff"), alt: "Itália 2006 costas", type: "back" },
    ],
    rating: 4.9,
    reviews: 140,
    sizes: ["P", "M", "G", "GG"],
    category: "Retrô",
    description: "O manto azul da conquista do tetra mundial pela Azzurra.",
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
    avatar: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/avatar-1.jpg",
    verified: true,
    photo: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/review-1.jpg",
  },
  {
    id: "2",
    name: "Ana C.",
    rating: 5,
    comment: "Amei a personalização! Coloquei meu nome e ficou perfeito. Entrega super rápida.",
    date: "12 Mar 2026",
    avatar: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/avatar-2.jpg",
    verified: true,
    photo: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/review-2.jpg",
  },
  {
    id: "3",
    name: "Pedro H.",
    rating: 4,
    comment: "Camisa linda, material premium. Só achei que poderia ter mais opções de patches.",
    date: "10 Mar 2026",
    avatar: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/avatar-3.jpg",
    verified: true,
    photo: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/review-3.jpg",
  },
  {
    id: "4",
    name: "Juliana S.",
    rating: 5,
    comment: "Presente perfeito pro meu marido! A Black Edition é simplesmente espetacular.",
    date: "08 Mar 2026",
    avatar: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/avatar-4.jpg",
    verified: true,
    photo: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/review-4.jpg",
  },
  {
    id: "5",
    name: "Rafael T.",
    rating: 5,
    comment: "A retrô de 1970 é uma obra de arte. Qualidade impecável.",
    date: "05 Mar 2026",
    avatar: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/avatar-5.jpg",
    verified: true,
    photo: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/review-5.jpg",
  },
  {
    id: "6",
    name: "Camila F.",
    rating: 5,
    comment: "Comprei a visitante e a mandante. As duas são espetaculares!",
    date: "02 Mar 2026",
    avatar: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/avatar-6.jpg",
    verified: true,
    photo: "https://res.cloudinary.com/dly7v8v3o/image/upload/manto-store/review-6.jpg",
  },
];
