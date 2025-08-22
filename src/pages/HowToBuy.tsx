import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingCart,
  CreditCard,
  Truck,
  CheckCircle,
  Clock,
  Shield,
  Phone,
  MessageCircle,
  ArrowRight,
  User
} from "lucide-react";

const HowToBuy = () => {
  const steps = [
    {
      number: 1,
      title: "Acesse a Loja Online",
      description: "Clique no botão abaixo para acessar nossa loja oficial FuXion",
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      action: "Acessar Loja"
    },
    {
      number: 2,
      title: "Escolha seus Produtos",
      description: "Navegue pelo catálogo e selecione os produtos que deseja",
      icon: <User className="w-8 h-8 text-primary" />,
      action: "Ver Produtos"
    },
    {
      number: 3,
      title: "Finalize o Pedido",
      description: "Complete suas informações e escolha a forma de pagamento",
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      action: "Finalizar"
    },
    {
      number: 4,
      title: "Receba em Casa",
      description: "Aguarde a entrega dos seus produtos em até 7 dias úteis",
      icon: <Truck className="w-8 h-8 text-primary" />,
      action: "Rastrear"
    }
  ];

  const paymentMethods = [
    "Cartão de Crédito (até 12x)",
    "Cartão de Débito",
    "PIX (5% de desconto)",
    "Boleto Bancário",
    "Transferência Bancária"
  ];

  const deliveryInfo = [
    {
      title: "Entrega Rápida",
      description: "Produtos enviados em até 24h após confirmação do pagamento",
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: "Frete Grátis",
      description: "Para compras acima de R$ 150 em todo o Brasil",
      icon: <Truck className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Produtos Originais",
      description: "100% originais FuXion com garantia de autenticidade",
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Suporte Especializado",
      description: "Acompanhamento personalizado durante todo o processo",
      icon: <MessageCircle className="w-6 h-6 text-accent" />
    }
  ];

  const faqs = [
    {
      question: "Como posso ter certeza de que os produtos são originais?",
      answer: "Somos distribuidores oficiais FuXion. Todos os nossos produtos possuem certificado de autenticidade e são importados diretamente da empresa."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo de entrega varia de 3 a 7 dias úteis para todo o Brasil, dependendo da sua localização. Produtos são enviados em até 24h após confirmação do pagamento."
    },
    {
      question: "Posso cancelar meu pedido?",
      answer: "Sim, você pode cancelar seu pedido em até 24h após a compra, desde que o produto ainda não tenha sido enviado."
    },
    {
      question: "Os produtos têm garantia?",
      answer: "Todos os produtos FuXion têm garantia de 30 dias contra defeitos de fabricação. Se não ficar satisfeito, devolvemos seu dinheiro."
    },
    {
      question: "Como posso acompanhar meu pedido?",
      answer: "Após o envio, você recebe um código de rastreamento por email e SMS para acompanhar sua entrega em tempo real."
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
              Como <span className="text-accent">Comprar</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Processo simples e seguro para adquirir seus produtos FuXion 
              com entrega rápida em todo o Brasil.
            </p>
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
              className="group"
            >
              Comprar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Passo a Passo */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Passo a <span className="gradient-text">Passo</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Siga estes 4 passos simples para receber seus produtos FuXion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift text-center">
                <CardContent className="p-8 space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
                  >
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="gradient" 
              size="xl"
              onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
              className="group"
            >
              Começar Compra
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Formas de Pagamento */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Formas de <span className="gradient-text">Pagamento</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Oferecemos diversas opções de pagamento para sua comodidade e segurança.
              </p>
              
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-foreground text-lg">{method}</span>
                  </div>
                ))}
              </div>

              <Card className="border-0 shadow-soft bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-6 h-6 text-green-500" />
                    <h4 className="text-lg font-semibold text-foreground">Compra 100% Segura</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Todas as transações são protegidas por SSL e processadas 
                    através de gateways de pagamento certificados.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {deliveryInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-soft">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                        {info.icon}
                      </div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre o processo de compra
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suporte */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Precisa de <span className="gradient-text">Ajuda</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Nossa equipe está pronta para ajudar você em todas as etapas da compra
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-soft hover-lift">
              <CardContent className="p-8 text-center space-y-4">
                <MessageCircle className="w-12 h-12 text-green-500 mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">
                  Whatsapp (somente chat)
                </h3>
                <p className="text-muted-foreground">
                  +51 986 867 611
                </p>
                <p className="text-sm text-muted-foreground">
                  Horário de funcionamento (horário do Peru):<br/>
                  Terça-feira (fechado) das 9h00 às 00h00<br/>
                  Segunda a sábado das 9h00 às 20h00<br/>
                  Domingos das 17h00 às 22h00
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover-lift">
              <CardContent className="p-8 text-center space-y-4">
                <MessageCircle className="w-12 h-12 text-green-500 mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground">
                  Atendimento rápido e personalizado
                </p>
                <Button variant="outline" size="sm">
                  Falar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Comece Sua Transformação Hoje!
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Não espere mais para cuidar da sua saúde. Adquira seus produtos 
            FuXion agora e comece a experimentar os benefícios.
          </p>
          <Button 
            variant="accent" 
            size="xl"
            onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
            className="group"
          >
            Comprar Produtos FuXion
            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HowToBuy;