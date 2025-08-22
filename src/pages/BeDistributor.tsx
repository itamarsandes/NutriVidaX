import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Trophy,
  Star,
  CheckCircle,
  ArrowRight,
  Target,
  Gift,
  Calendar,
  Award
} from "lucide-react";
import businessImage from "@/assets/business-opportunity.jpg";

const BeDistributor = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: "Renda Extra",
      description: "Ganhe comissões atrativas com cada venda e construa uma renda sustentável."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Trabalho em Equipe",
      description: "Faça parte de uma comunidade colaborativa e receba suporte constante."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "Flexibilidade",
      description: "Trabalhe no seu próprio ritmo, quando e onde quiser."
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent" />,
      title: "Crescimento Pessoal",
      description: "Desenvolva habilidades de liderança e comunicação."
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Cadastre-se",
      description: "Faça seu cadastro como distribuidor oficial FuXion gratuitamente.",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Conheça os Produtos",
      description: "Experimente os produtos e se apaixone pela qualidade FuXion.",
      icon: <Star className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Compartilhe",
      description: "Indique os produtos para amigos, família e rede de contatos.",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Ganhe Comissões",
      description: "Receba comissões pelas vendas e construa sua equipe.",
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  const commission = [
    {
      level: "Bronze",
      percentage: "20%",
      requirements: "Primeiras vendas",
      color: "bg-orange-500"
    },
    {
      level: "Prata",
      percentage: "25%",
      requirements: "R$ 5.000 em vendas",
      color: "bg-gray-400"
    },
    {
      level: "Ouro",
      percentage: "30%",
      requirements: "R$ 15.000 em vendas",
      color: "bg-yellow-500"
    },
    {
      level: "Diamante",
      percentage: "35%",
      requirements: "R$ 30.000 em vendas",
      color: "bg-blue-500"
    }
  ];

  const incentives = [
    {
      title: "Prêmios Mensais",
      description: "Concorra a prêmios incríveis todo mês por suas vendas.",
      icon: <Gift className="w-6 h-6 text-red-500" />
    },
    {
      title: "Viagens Internacionais",
      description: "Conquiste viagens para convenções internacionais FuXion.",
      icon: <Calendar className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Reconhecimento",
      description: "Seja reconhecido em eventos e nas redes sociais da empresa.",
      icon: <Award className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Bônus Especiais",
      description: "Receba bônus extras por performance e liderança de equipe.",
      icon: <TrendingUp className="w-6 h-6 text-green-500" />
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Distribuidora Diamante",
      text: "Em 2 anos como distribuidora FuXion, consegui triplicar minha renda e hoje tenho a liberdade financeira que sempre sonhei.",
      earnings: "R$ 15.000/mês",
      image: businessImage
    },
    {
      name: "João Santos",
      role: "Distribuidor Ouro",
      text: "Além de transformar minha saúde com os produtos, construí uma carreira sólida e ajudo centenas de pessoas todos os meses.",
      earnings: "R$ 8.500/mês",
      image: businessImage
    },
    {
      name: "Ana Costa",
      role: "Distribuidora Prata",
      text: "Comecei apenas para usar os produtos, mas quando vi o potencial do negócio, me dediquei e hoje é minha principal fonte de renda.",
      earnings: "R$ 5.200/mês",
      image: businessImage
    }
  ];

  const requirements = [
    "Ser maior de 18 anos",
    "Ter CPF válido",
    "Acreditar nos produtos FuXion",
    "Ter disponibilidade para dedicação",
    "Querer ajudar outras pessoas",
    "Buscar crescimento pessoal e financeiro"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 section-padding bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Seja um <span className="text-accent">Distribuidor</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Transforme sua vida financeira distribuindo produtos de saúde
                que realmente funcionam. Construa uma carreira sólida ajudando
                outras pessoas a viverem melhor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="accent"
                  size="xl"
                  onClick={() => window.open("https://ifuxion.com/nutrividax/dashboard/joinus", "_blank")}
                  className="group"
                >
                  Quero Ser Distribuidor
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={businessImage}
                alt="Oportunidade de negócio"
                className="rounded-2xl shadow-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que ser um <span className="gradient-text">Distribuidor</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra as vantagens de fazer parte da família FuXion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift text-center">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
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

      {/* Como Funciona */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Como <span className="gradient-text">Funciona</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              4 passos simples para começar sua jornada como distribuidor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift text-center">
                <CardContent className="p-8 space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plano de Comissões */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Plano de <span className="gradient-text">Comissões</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ganhe mais conforme sua dedicação e crescimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commission.map((level, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift text-center overflow-hidden">
                <div className={`h-2 ${level.color}`}></div>
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {level.level}
                  </h3>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">
                      {level.percentage}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      de comissão
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">
                      Requisito:
                    </div>
                    <div className="font-medium text-foreground">
                      {level.requirements}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incentivos e Prêmios */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Incentivos e <span className="gradient-text">Prêmios</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Além das comissões, concorra a prêmios incríveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {incentives.map((incentive, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                    {incentive.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {incentive.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {incentive.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos de Distribuidores */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Histórias de <span className="gradient-text">Sucesso</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Conheça distribuidores que transformaram suas vidas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift overflow-hidden">
                <div className="h-32 bg-gradient-card"></div>
                <CardContent className="p-6 space-y-4 -mt-8 relative">
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-white shadow-soft mx-auto"></div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-foreground">{testimonial.name}</h3>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-lg font-bold text-green-500 mt-2">{testimonial.earnings}</div>
                  </div>
                  <p className="text-muted-foreground text-sm italic text-center">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="gradient-text">Requisitos</span> para ser Distribuidor
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja se você tem o perfil para fazer parte da nossa equipe
            </p>
          </div>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para Transformar Sua Vida?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Esta é sua oportunidade de construir um futuro próspero distribuindo
            produtos que realmente transformam vidas. Junte-se à família FuXion hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              size="xl"
              onClick={() => window.open("https://ifuxion.com/nutrividax/dashboard/joinus", "_blank")}
              className="group"
            >
              Cadastrar como Distribuidor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Falar com Mentor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BeDistributor;