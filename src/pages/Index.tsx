import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Zap,
  Shield,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp
} from "lucide-react";
import communityImage from "@/assets/community-wellness.jpg";
import businessImage from "@/assets/business-opportunity.jpg";
import { getPopularProducts } from "@/data/products";

const Index = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Saúde Cardiovascular",
      description: "Produtos desenvolvidos para fortalecer seu coração e sistema circulatório."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Energia Natural",
      description: "Aumente sua energia e vitalidade de forma natural e sustentável."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Sistema Imunológico",
      description: "Fortaleça suas defesas naturais com ingredientes premium."
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent" />,
      title: "Performance Física",
      description: "Melhore seu desempenho esportivo e recuperação muscular."
    }
  ];

  // Obter apenas produtos populares
  const products = getPopularProducts();

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente há 2 anos",
      text: "Os produtos FuXion transformaram minha qualidade de vida. Tenho mais energia e disposição para tudo!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Distribuidor",
      text: "Além de usar os produtos, construí uma renda extra significativa. A FuXion mudou minha vida financeira.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Cliente há 1 ano",
      text: "Sempre fui cética com suplementos, mas os resultados foram impressionantes. Recomendo a todos!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Benefits Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que escolher <span className="gradient-text">FuXion</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra os benefícios únicos dos produtos FuXion e como eles podem
              transformar sua saúde e bem-estar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift border-0 shadow-soft">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Produtos <span className="gradient-text">Mais Vendidos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça nossos produtos mais populares e descubra por que milhares
              de pessoas confiam na qualidade FuXion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product, index) => (
              <Card key={product.id} className="hover-lift border-0 shadow-soft overflow-hidden">
                <div className="aspect-video bg-gradient-card relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <span className="text-sm text-primary font-medium">{product.categoryName}</span>
                    <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(product.fuxionUrl, "_blank")}
                  >
                    Ver Produto
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
              className="group"
            >
              Ver Todos os Produtos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Faça parte da nossa <span className="gradient-text">Comunidade</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Junte-se a milhares de pessoas que já transformaram suas vidas
                com os produtos FuXion e descobriram uma nova forma de viver
                com mais saúde, energia e prosperidade.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-foreground">Mais de 50.000 clientes satisfeitos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-foreground">Produtos 100% naturais e seguros</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-foreground">Suporte completo e personalizado</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
                >
                  Começar Agora
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open("https://ifuxion.com/nutrividax/dashboard/aboutus", "_blank")}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={communityImage}
                alt="Comunidade saudável"
                className="rounded-2xl shadow-primary"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-soft border">
                <div className="flex items-center space-x-4">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">50K+</div>
                    <div className="text-sm text-muted-foreground">Clientes Ativos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              O que nossos <span className="gradient-text">Clientes</span> dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Histórias reais de transformação e sucesso com os produtos FuXion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Opportunity CTA */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Construa Sua Liberdade Financeira
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Torne-se um distribuidor oficial FuXion e construa uma renda
                sustentável ajudando outras pessoas a transformarem suas vidas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <span>Renda Crescente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-accent" />
                  <span>Trabalhe em Equipe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-accent" />
                  <span>Produtos de Qualidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-accent" />
                  <span>Reconhecimento</span>
                </div>
              </div>

              <Button
                variant="accent"
                size="xl"
                onClick={() => window.open("https://ifuxion.com/nutrividax/dashboard/joinus", "_blank")}
                className="group"
              >
                Quero Ser Distribuidor
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <img
                src={businessImage}
                alt="Oportunidade de negócio"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;