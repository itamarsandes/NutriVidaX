import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Users, Award, Sparkles } from "lucide-react";
import communityImage from "@/assets/community-wellness.jpg";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Saúde em Primeiro Lugar",
      description: "Priorizamos o bem-estar integral de nossos clientes, oferecendo produtos que realmente fazem a diferença."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Comunidade Unida",
      description: "Acreditamos no poder da união e no apoio mútuo para alcançar objetivos de saúde e prosperidade."
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Excelência em Qualidade",
      description: "Trabalhamos apenas com os melhores produtos, garantindo máxima eficácia e segurança."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-secondary" />,
      title: "Inovação Constante",
      description: "Buscamos sempre as mais avançadas tecnologias em nutrição para oferecer o melhor aos nossos clientes."
    }
  ];

  const team = [
    {
      name: "Maria Silva",
      role: "Fundadora & CEO",
      description: "Apaixonada por saúde natural e transformação de vidas há mais de 15 anos."
    },
    {
      name: "João Santos",
      role: "Diretor de Vendas",
      description: "Especialista em construção de equipes e desenvolvimento de lideranças."
    },
    {
      name: "Ana Costa",
      role: "Consultora Nutricional",
      description: "Nutricionista formada, dedicada a orientar clientes para resultados eficazes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 section-padding bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Sobre a <span className="text-accent">NutriVidaX</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Somos uma distribuidora oficial FuXion comprometida em transformar vidas
              através da nutrição natural e oportunidades de negócio sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nossa <span className="gradient-text">História</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A NutriVidaX nasceu da paixão de um grupo de pessoas que acreditava
                  no poder transformador da nutrição natural. Após descobrir os
                  incríveis produtos FuXion e experimentar resultados extraordinários
                  em suas próprias vidas, decidimos compartilhar essa descoberta com o mundo.
                </p>
                <p>
                  Fundada em 2020, nossa empresa cresceu organicamente, construindo
                  uma comunidade sólida de clientes satisfeitos e distribuidores
                  comprometidos. Hoje, somos uma das principais distribuidoras FuXion
                  no Brasil, impactando milhares de vidas.
                </p>
                <p>
                  Nossa jornada é marcada por histórias reais de transformação:
                  pessoas que recuperaram sua energia, melhoraram sua saúde e
                  construíram uma nova perspectiva de vida através dos produtos
                  que oferecemos.
                </p>
              </div>
              <Button
                variant="gradient"
                size="lg"
                onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
              >
                Conheça Nossos Produtos
              </Button>
            </div>
            <div className="relative">
              <img
                src={communityImage}
                alt="Nossa comunidade"
                className="rounded-2xl shadow-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos <span className="gradient-text">Propósitos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Missão */}
            <Card className="border-0 shadow-soft text-center">
              <CardContent className="p-8 space-y-4">
                <Target className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transformar vidas através da nutrição natural FuXion,
                  oferecendo produtos de alta qualidade e oportunidades
                  de crescimento pessoal e financeiro.
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="border-0 shadow-soft text-center">
              <CardContent className="p-8 space-y-4">
                <Eye className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como a principal distribuidora FuXion
                  do Brasil, referência em excelência no atendimento e
                  resultados transformadores.
                </p>
              </CardContent>
            </Card>

            {/* Valores */}
            <Card className="border-0 shadow-soft text-center">
              <CardContent className="p-8 space-y-4">
                <Heart className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integridade, transparência, compromisso com a saúde,
                  espírito de equipe e busca constante pela excelência
                  em tudo que fazemos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Valores Detalhados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parceria com FuXion */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Parceria <span className="gradient-text">FuXion</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Como distribuidora oficial FuXion, temos o privilégio de representar
              uma marca reconhecida mundialmente por sua excelência em nutrição natural.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Por que FuXion?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ingredientes 100% Naturais</h4>
                    <p className="text-muted-foreground">Produtos livres de açúcares, conservantes artificiais e aditivos químicos.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Tecnologia Avançada</h4>
                    <p className="text-muted-foreground">Processos inovadores que preservam a potência e biodisponibilidade dos nutrientes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Comprovação Científica</h4>
                    <p className="text-muted-foreground">Produtos desenvolvidos com base em pesquisas científicas rigorosas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Reconhecimento Global</h4>
                    <p className="text-muted-foreground">Marca presente em mais de 20 países com milhões de clientes satisfeitos.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-foreground text-center">
                Nosso Compromisso
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Como distribuidora oficial, garantimos a autenticidade dos produtos,
                suporte especializado e acompanhamento personalizado para cada cliente.
              </p>
              <div className="text-center">
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
                >
                  Experimente Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para Transformar Sua Vida?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Junte-se à nossa comunidade e descubra como os produtos FuXion
            podem fazer a diferença em sua saúde e bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              size="xl"
              onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
            >
              Ver Produtos
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open("https://ifuxion.com/nutrividax/dashboard/joinus", "_blank")}
            >
              Seja Distribuidor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;