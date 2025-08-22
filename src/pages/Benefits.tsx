import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Zap, 
  Shield, 
  Trophy,
  Leaf,
  FlaskConical,
  Award,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";
import communityImage from "@/assets/community-wellness.jpg";

const Benefits = () => {
  const mainBenefits = [
    {
      icon: <Leaf className="w-12 h-12 text-green-500" />,
      title: "100% Ingredientes Naturais",
      description: "Todos os produtos FuXion são formulados exclusivamente com ingredientes naturais, livres de aditivos químicos, conservantes artificiais e açúcares adicionados.",
      details: [
        "Extratos vegetais puros",
        "Minerais quelatos naturais",
        "Vitaminas biodisponíveis",
        "Sem transgênicos"
      ]
    },
    {
      icon: <FlaskConical className="w-12 h-12 text-blue-500" />,
      title: "Tecnologia Avançada",
      description: "Utilizamos as mais modernas tecnologias de processamento que preservam a potência dos nutrientes e garantem máxima absorção pelo organismo.",
      details: [
        "Liofilização avançada",
        "Encapsulamento lipossomal",
        "Nanotecnologia aplicada",
        "Controle de biodisponibilidade"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: "Comprovação Científica",
      description: "Cada produto é desenvolvido com base em extensas pesquisas científicas e testes clínicos que comprovam sua eficácia e segurança.",
      details: [
        "Estudos clínicos rigorosos",
        "Testes de biodisponibilidade",
        "Análises laboratoriais",
        "Validação científica"
      ]
    },
    {
      icon: <Award className="w-12 h-12 text-accent" />,
      title: "Certificações Internacionais",
      description: "FuXion possui as mais importantes certificações de qualidade internacional, garantindo produtos seguros e eficazes.",
      details: [
        "Certificação HACCP",
        "ISO 22000",
        "Boas Práticas de Fabricação",
        "Registro ANVISA"
      ]
    }
  ];

  const healthBenefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Saúde Cardiovascular",
      description: "Melhora a circulação, fortalece o coração e regula a pressão arterial naturalmente."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Energia Sustentada",
      description: "Aumenta os níveis de energia de forma natural, sem picos de açúcar no sangue."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Sistema Imunológico",
      description: "Fortalece as defesas naturais do corpo contra infecções e doenças."
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-500" />,
      title: "Performance Física",
      description: "Melhora o desempenho esportivo, resistência e recuperação muscular."
    }
  ];

  const differentials = [
    {
      title: "Sem Açúcar Adicionado",
      description: "Produtos naturalmente doces ou adoçados com stevia natural, ideal para diabéticos e quem busca uma alimentação saudável."
    },
    {
      title: "Absorção Otimizada",
      description: "Tecnologias exclusivas que garantem que os nutrientes sejam efetivamente absorvidos e utilizados pelo organismo."
    },
    {
      title: "Fórmulas Sinérgicas",
      description: "Combinações inteligentes de ingredientes que potencializam os efeitos benéficos de cada componente."
    },
    {
      title: "Resultados Rápidos",
      description: "Muitos clientes relatam melhorias significativas nas primeiras semanas de uso dos produtos."
    },
    {
      title: "Segurança Comprovada",
      description: "Produtos testados e aprovados por órgãos reguladores, garantindo uso seguro para toda a família."
    },
    {
      title: "Sustentabilidade",
      description: "Produção responsável com respeito ao meio ambiente e práticas sustentáveis."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Carlos Mendes",
      role: "Cardiologista",
      text: "Como médico, recomendo os produtos FuXion pela qualidade dos ingredientes e pelos resultados consistentes que observo em meus pacientes.",
      rating: 5
    },
    {
      name: "Dra. Ana Beatriz",
      role: "Nutricionista",
      text: "A tecnologia FuXion permite uma absorção superior dos nutrientes. É uma revolução na suplementação natural.",
      rating: 5
    },
    {
      name: "Prof. João Silva",
      role: "Especialista em Fitoterapia",
      text: "A combinação de tradição e inovação da FuXion resulta em produtos únicos no mercado de nutrição natural.",
      rating: 5
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
              Benefícios <span className="text-accent">FuXion</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Descubra por que a FuXion é referência mundial em nutrição natural 
              e como nossos produtos podem transformar sua saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Principais Diferenciais */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Diferenciais <span className="gradient-text">Únicos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça o que torna os produtos FuXion únicos no mercado mundial de nutrição
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    {benefit.icon}
                    <h3 className="text-2xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {benefit.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios para a Saúde */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Benefícios para sua <span className="gradient-text">Saúde</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Como os produtos FuXion impactam positivamente sua saúde e bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {healthBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft text-center hover-lift">
                <CardContent className="p-6 space-y-4">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Resultados Comprovados
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Milhões de pessoas ao redor do mundo já experimentaram os benefícios 
                transformadores dos produtos FuXion. Estudos clínicos demonstram 
                melhorias significativas em:
              </p>
              <div className="space-y-3">
                {[
                  "Níveis de energia e vitalidade",
                  "Qualidade do sono e recuperação",
                  "Função digestiva e absorção de nutrientes",
                  "Resistência física e mental",
                  "Bem-estar geral e qualidade de vida"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={communityImage} 
                alt="Pessoas saudáveis"
                className="rounded-2xl shadow-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outros Diferenciais */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mais <span className="gradient-text">Vantagens</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Outros benefícios que fazem da FuXion sua melhor escolha
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {differential.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {differential.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos de Especialistas */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Opinião de <span className="gradient-text">Especialistas</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              O que profissionais da saúde dizem sobre os produtos FuXion
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

      {/* CTA Final */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Experimente os Benefícios FuXion
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Descubra por que milhões de pessoas confiam na qualidade e eficácia 
            dos produtos FuXion para transformar suas vidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => window.open("https://ifuxion.com/nutrividax/dashboard/aboutus", "_blank")}
              className="group"
            >
              Conhecer Produtos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Benefits;