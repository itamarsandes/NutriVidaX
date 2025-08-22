// Import das imagens dos produtos
import liquidFiberImage from "@/assets/LIQUID FIBER.jpg";
import thermoT3Image from "@/assets/THERMO T3.png";
import nocarbTImage from "@/assets/NOCARB-T.png";
import refex1Image from "@/assets/REFEX1.jpg";
import prunex1Image from "@/assets/PRUNEX1.jpg";
import vitaXtraImage from "@/assets/VITA XTRA T+ ACAI.jpg";
import youthElixirImage from "@/assets/YOUTH ELIXIR.jpg";
import alphaBalanceImage from "@/assets/ALPHA BALANCE.jpg";
import nutradayImage from "@/assets/NUTRADAY.jpg";
import rexetImage from "@/assets/REXET.jpg";
import beautyInImage from "@/assets/BEAUTY-IN.jpg";
import packVitalidadeImage from "@/assets/PACK VITALIDADE TOTAL.jpg";
import packGlowImage from "@/assets/PACK GLOW NATURAL.jpg";

export const products = [
  {
    id: 1,
    name: "LIQUID FIBER",
    category: "saude",
    categoryName: "Saúde Digestiva",
    description: "Fibra líquida para regulação intestinal e melhora da digestão.",
    features: ["28 sachês de 5gr", "Fibra solúvel", "Digestão saudável", "Sabor natural"],
    price: "R$ 180,00",
    rating: 4.9,
    reviews: 1250,
    popular: true,
    image: liquidFiberImage,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=148496"
  },
  {
    id: 2,
    name: "THERMO T3",
    category: "energia",
    categoryName: "Energia & Metabolismo",
    description: "Termogênico avançado que acelera o metabolismo e proporciona energia sustentada.",
    features: ["28 sachês de 5gr", "Acelera metabolismo", "Energia natural", "Queima de gordura"],
    price: "R$ 221,00",
    rating: 4.8,
    reviews: 980,
    popular: true,
    image: thermoT3Image,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=143229"
  },
  {
    id: 3,
    name: "NOCARB-T",
    category: "fitness",
    categoryName: "Controle de Peso",
    description: "Bloqueador de carboidratos para controle de peso e metabolismo saudável.",
    features: ["28 sachês de 5gr", "Bloqueia carboidratos", "Controle de peso", "Metabolismo ativo"],
    price: "R$ 221,00",
    rating: 4.9,
    reviews: 750,
    popular: false,
    image: nocarbTImage,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=143231"
  },
  {
    id: 4,
    name: "REFEX1",
    category: "imunidade",
    categoryName: "Sistema Imunológico",
    description: "Fortalece o sistema imunológico com antioxidantes naturais.",
    features: ["28 sachês de 5gr", "Antioxidantes", "Fortalece imunidade", "Proteção natural"],
    price: "R$ 221,00",
    rating: 4.7,
    reviews: 620,
    popular: false,
    image: refex1Image,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=147262"
  },
  {
    id: 5,
    name: "PRUNEX1",
    category: "saude",
    categoryName: "Saúde Digestiva",
    description: "Regulador intestinal natural com extratos de ameixa.",
    features: ["28 sachês de 5gr", "Extratos naturais", "Regulação intestinal", "Digestão saudável"],
    price: "R$ 221,00",
    rating: 4.8,
    reviews: 890,
    popular: true,
    image: prunex1Image,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=148487"
  },
  {
    id: 6,
    name: "VITA XTRA T+ AÇAÍ",
    category: "energia",
    categoryName: "Energia & Vitalidade",
    description: "Complexo vitamínico com açaí para energia e vitalidade.",
    features: ["28 sachês de 5gr", "Açaí natural", "Vitaminas essenciais", "Energia duradoura"],
    price: "R$ 221,00",
    rating: 4.6,
    reviews: 450,
    popular: false,
    image: vitaXtraImage,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=148488"
  },
  {
    id: 7,
    name: "YOUTH ELIXIR",
    category: "cognitivo",
    categoryName: "Anti-idade",
    description: "Elixir da juventude com antioxidantes e nutrientes anti-idade.",
    features: ["28 sachês de 5gr", "Antioxidantes", "Anti-idade", "Rejuvenescimento"],
    price: "R$ 221,00",
    rating: 4.7,
    reviews: 680,
    popular: true,
    image: youthElixirImage,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=148491"
  },
  {
    id: 8,
    name: "ALPHA BALANCE",
    category: "saude",
    categoryName: "Equilíbrio Hormonal",
    description: "Suplemento para equilíbrio hormonal e bem-estar masculino.",
    features: ["28 sachês de 5gr", "Equilíbrio hormonal", "Bem-estar masculino", "Energia natural"],
    price: "R$ 221,00",
    rating: 4.5,
    reviews: 320,
    popular: false,
    image: alphaBalanceImage,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=148493"
  },
  {
    id: 9,
    name: "NUTRADAY",
    category: "energia",
    categoryName: "Nutrição Diária",
    description: "Suplemento nutricional completo para o dia a dia.",
    features: ["28 sachês de 5gr", "Nutrição completa", "Vitaminas e minerais", "Energia diária"],
    price: "R$ 221,00",
    rating: 4.6,
    reviews: 550,
    popular: false,
    image: nutradayImage,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=148494"
  },
  {
    id: 10,
    name: "REXET",
    category: "fitness",
    categoryName: "Performance",
    description: "Suplemento para melhora da performance e resistência física.",
    features: ["28 sachês de 5gr", "Melhora performance", "Resistência física", "Recuperação muscular"],
    price: "R$ 221,00",
    rating: 4.7,
    reviews: 410,
    popular: false,
    image: rexetImage,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=148495"
  },
  {
    id: 11,
    name: "BEAUTY-IN",
    category: "cognitivo",
    categoryName: "Beleza & Bem-estar",
    description: "Suplemento para beleza interior com colágeno e antioxidantes.",
    features: ["28 sachês de 5gr", "Colágeno natural", "Antioxidantes", "Beleza de dentro para fora"],
    price: "R$ 265,00",
    rating: 4.8,
    reviews: 720,
    popular: true,
    image: beautyInImage,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=148492"
  },
  {
    id: 12,
    name: "PACK VITALIDADE TOTAL",
    category: "energia",
    categoryName: "Kit Completo",
    description: "Pack completo com produtos essenciais para vitalidade total.",
    features: ["Kit completo", "Múltiplos produtos", "Vitalidade total", "Economia especial"],
    price: "R$ 1.760,00",
    rating: 4.9,
    reviews: 180,
    popular: true,
    image: packVitalidadeImage,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=149663"
  },
  {
    id: 13,
    name: "PACK GLOW NATURAL",
    category: "cognitivo",
    categoryName: "Kit Beleza",
    description: "Pack completo para beleza natural e brilho saudável.",
    features: ["Kit completo", "Beleza natural", "Brilho saudável", "Resultados visíveis"],
    price: "R$ 1.760,00",
    rating: 4.8,
    reviews: 95,
    popular: false,
    image: packGlowImage,
    fuxionUrl: "https://ifuxion.com/nutrividax/enrollment/productsdet?itemcode=149664"
  }
];

// Função para obter apenas produtos populares
export const getPopularProducts = () => {
  return products.filter(product => product.popular);
};

// Função para obter todos os produtos
export const getAllProducts = () => {
  return products;
};

// Função para obter URL específica do produto na Fuxion
export const getProductFuxionUrl = (productName: string) => {
  const product = products.find(p => p.name === productName);
  return product?.fuxionUrl || "https://ifuxion.com/nutrividax/enrollment/products";
};
