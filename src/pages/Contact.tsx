import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar link mailto para o novo email
    const subject = encodeURIComponent(`Contato via site: ${formData.subject}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Assunto: ${formData.subject}\n\n` +
      `Mensagem:\n${formData.message}`
    );
    
    window.open(`mailto:servicoaocliente@fuxion.net?subject=${subject}&body=${body}`, '_blank');
    
    toast({
      title: "Redirecionado para o email!",
      description: "Seu cliente de email foi aberto. Complete o envio por lá.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "WhatsApp",
      content: "Whatsapp (somente chat): +51 986 867 611",
      description: "Chat para falar conosco"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "servicoaocliente@fuxion.net",
      description: "Envie sua mensagem"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Localização",
      content: "Sao Paulo, Sao Paulo, Av Paulista 726, Andar 16 Conj 1605D, Sala 01 Bela Vista",
      description: "Atendemos todo o país"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Horário",
      content: "Horário de funcionamento (horário do Peru):",
      description: "Terça-feira (fechado) das 9h00 às 00h00 • Segunda a sábado das 9h00 às 20h00 • Domingos das 17h00 às 22h00"
    }
  ];

  const socialMedia = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      handle: "@nutrividax",
      color: "bg-pink-500",
      link: "#"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      handle: "/fuxion",
      color: "bg-blue-600",
      link: "https://www.facebook.com/fuxion"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: "YouTube",
      handle: "FuXion Oficial",
      color: "bg-red-500",
      link: "https://www.youtube.com/fuxionoficial"
    }
  ];

  const faqs = [
    {
      question: "Como posso me tornar um distribuidor?",
      answer: "É simples! Acesse nossa página 'Seja Distribuidor' e faça seu cadastro. Nossa equipe entrará em contato para orientar todos os passos."
    },
    {
      question: "Os produtos têm garantia?",
      answer: "Sim! Todos os produtos FuXion têm garantia de 30 dias. Se não ficar satisfeito, devolvemos seu dinheiro."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "Enviamos em até 24h após confirmação do pagamento. O prazo de entrega é de 3 a 7 dias úteis para todo o Brasil."
    },
    {
      question: "Posso comprar apenas um produto para testar?",
      answer: "Claro! Você pode comprar qualquer quantidade. Muitos clientes começam testando um produto e depois se apaixonam pela linha completa."
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
              <span className="text-accent">Contato</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Estamos aqui para ajudar você em sua jornada de saúde e bem-estar.
              Entre em contato conosco!
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Fale <span className="gradient-text">Conosco</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Várias formas de entrar em contato com nossa equipe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">
                      {info.content}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {info.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formulário e WhatsApp */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Envie sua Mensagem
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Como podemos ajudar?"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conte-nos mais detalhes sobre sua necessidade..."
                        className="min-h-32"
                        required
                      />
                    </div>

                    <Button type="submit" variant="gradient" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contato Rápido */}
            <div className="space-y-8">
              {/* WhatsApp */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    WhatsApp
                  </h3>
                  <p className="text-muted-foreground">
                    Atendimento rápido e personalizado pelo WhatsApp
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Redes Sociais */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-foreground text-center">
                    Redes Sociais
                  </h3>
                  <div className="space-y-4">
                    {socialMedia.map((social, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => social.link !== "#" && window.open(social.link, "_blank")}
                      >
                        <div className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white`}>
                          {social.icon}
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.handle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Respostas rápidas para as dúvidas mais comuns
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

      {/* CTA para Compra */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Não espere mais! Comece sua transformação hoje mesmo com os produtos FuXion.
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

export default Contact;