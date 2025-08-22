import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Zap, 
  Shield, 
  Dumbbell,
  Droplets,
  Brain,
  Star,
  ShoppingCart,
  CheckCircle
} from "lucide-react";
import { getAllProducts } from "@/data/products";

const Products = () => {
  const categories = [
    {
      id: "energia",
      name: "Energia & Vitalidade",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-yellow-500"
    },
    {
      id: "saude",
      name: "Saúde Digestiva",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-500"
    },
    {
      id: "imunidade",
      name: "Sistema Imunológico",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      id: "fitness",
      name: "Fitness & Performance",
      icon: <Dumbbell className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      id: "hidratacao",
      name: "Hidratação",
      icon: <Droplets className="w-6 h-6" />,
      color: "bg-cyan-500"
    },
    {
      id: "cognitivo",
      name: "Função Cognitiva",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-500"
    }
  ];

  const products = getAllProducts();

  const benefits = [
    "100% Ingredientes Naturais",
    "Sem Açúcar Adicionado",
    "Tecnologia Avançada de Absorção",
    "Certificações Internacionais",
    "Livre de Conservantes Artificiais",
    "Resultados Comprovados Cientificamente"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 section-padding bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Produtos <span className="text-accent">FuXion</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Descubra nossa linha completa de produtos naturais desenvolvidos 
              com a mais avançada tecnologia nutricional.
            </p>
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
            >
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios FuXion */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que escolher <span className="gradient-text">FuXion</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Categorias de <span className="gradient-text">Produtos</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Encontre o produto perfeito para suas necessidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="hover-lift border-0 shadow-soft cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossa Linha <span className="gradient-text">Completa</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Produtos naturais de alta qualidade para transformar sua saúde e bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover-lift border-0 shadow-soft overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.popular && (
                    <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                      Mais Vendido
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {product.categoryName}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Principais benefícios:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="text-lg font-bold text-foreground mb-3">
                      {product.price}
                    </div>
                    <Button 
                      variant="gradient" 
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(product.fuxionUrl, "_blank")}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Comprar Agora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
            >
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para Começar Sua Transformação?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Experimente nossos produtos e descubra como a nutrição FuXion 
            pode transformar sua saúde, energia e qualidade de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
            >
              Comprar Produtos
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;