import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Shield, 
  Zap, 
  Heart, 
  Star,
  Target,
  Users,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Blog = () => {
  const pillars = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Turbo para Seus Músculos",
      description: "Proteínas e aminoácidos essenciais para máxima performance"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Escudo da Sua Imunidade",
      description: "Antioxidantes naturais que fortalecem suas defesas"
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Chave para Sua Energia e Foco",
      description: "Nutrientes que alimentam cérebro e músculos"
    },
    {
      icon: <Star className="w-6 h-6 text-purple-500" />,
      title: "Segredo da Sua Longevidade e Beleza",
      description: "Compostos anti-idade para uma vida plena e saudável"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/5 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative max-w-7xl mx-auto container-padding section-padding">
            <div className="text-center space-y-8">
              <Badge variant="secondary" className="mx-auto">
                Blog NutriVidaX
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Desperte Seu <span className="gradient-text">Potencial Máximo!</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubra os segredos que separam os vencedores dos demais e transforme sua vida hoje mesmo.
              </p>
            </div>
          </div>
        </section>

        {/* Main Article */}
        <section className="py-6 md:py-8">
          <div className="max-w-4xl mx-auto container-padding">
            <article className="space-y-12">
              
              {/* Article Header */}
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  O Segredo dos Vencedores: Por Que Sua Energia, Foco e Corpo Não Estão no Auge 
                  <span className="gradient-text"> (e Como Mudar Isso AGORA)</span>
                </h2>
                <img 
                  src={heroImage} 
                  alt="Pessoa alcançando o sucesso" 
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-primary"
                />
              </div>

              {/* Introduction */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <span>Introdução: O Ponto de Dor e a Promessa Irresistível</span>
                </h3>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-justify">
                  <p>
                    Você já se perguntou por que algumas pessoas parecem ter energia infinita, foco laser e uma vitalidade que contagia todos ao redor, enquanto outras lutam diariamente contra o cansaço, a falta de concentração e a sensação de que estão sempre "correndo atrás"?
                  </p>
                  <p>
                    A diferença não está na genética, na sorte ou em fórmulas mágicas. A diferença está em algo muito mais simples - e poderoso - do que você imagina: <strong className="text-primary">a nutrição inteligente e estratégica</strong>.
                  </p>
                  <p>
                    Se você sente que seu corpo e sua mente não estão entregando o melhor de si, se a fadiga mental está afetando suas decisões importantes, ou se você simplesmente sabe que pode ser mais do que é hoje, este artigo vai revelar exatamente o que está faltando na sua rotina.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center space-x-3">
                  <Target className="w-8 h-8 text-red-500" />
                  <span>A Armadilha da Rotina: Por Que Estamos Ficando Para Trás?</span>
                </h3>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-justify">
                  <p>
                    Vivemos em uma era de estresse constante, alimentação processada e ritmo acelerado. Nosso corpo está constantemente em modo "sobrevivência", gastando energia para processar toxinas, compensar deficiências nutricionais e lidar com o bombardeio de estímulos externos.
                  </p>
                  <p>
                    O resultado? Você acorda cansado, passa o dia em piloto automático, sente aquela "névoa mental" que impede seu melhor desempenho, e termina o dia exausto - mesmo quando não fez nada fisicamente desgastante.
                  </p>
                  <p>
                    Mas aqui está a boa notícia: <strong className="text-primary">isso não é uma sentença permanente</strong>. É apenas o reflexo de um corpo que não está recebendo o combustível premium que merece.
                  </p>
                </div>

                {/* Video Section */}
                <div className="my-8">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                    <iframe 
                      src="https://player.vimeo.com/video/1060994164?h=9014d6a0fc&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      title="Vídeo NutriVidaX"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center space-x-3">
                  <Users className="w-8 h-8 text-green-500" />
                  <span>O Fator X: O Que Os Campeões Já Sabem sobre Nutrição e Performance?</span>
                </h3>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-justify">
                  <p>
                    Atletas de elite, CEOs de sucesso e pessoas que parecem ter "superpoderes" compartilham um segredo: eles tratam seu corpo como uma máquina de alta performance que precisa do melhor combustível disponível.
                  </p>
                  <p>
                    Eles sabem que a alimentação convencional - mesmo a mais saudável - não é suficiente para extrair o máximo potencial do organismo. Por isso, investem em suplementação estratégica, baseada em ciência e resultados comprovados.
                  </p>
                  <p>
                    Não é sobre gastar fortunas em produtos milagrosos. É sobre entender que <strong className="text-primary">seu corpo é seu ativo mais valioso</strong> e merece os nutrientes certos, na dose certa, no momento certo.
                  </p>
                </div>
              </div>

              {/* Pillars Section */}
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
                  Sua Farmácia Natural de Poder: Os Pilares da 
                  <span className="gradient-text"> Suplementação Inteligente</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pillars.map((pillar, index) => (
                    <Card key={index} className="hover-lift border-0 shadow-soft">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                          {pillar.icon}
                          <h4 className="text-xl font-bold text-foreground">
                            {pillar.title}
                          </h4>
                        </div>
                        <p className="text-muted-foreground">
                          {pillar.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quality Section */}
              <div className="space-y-6 bg-muted/30 p-8 rounded-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
                  A Diferença Está na <span className="text-4xl gradient-text font-black">QUALIDADE</span>: 
                  Não Brinque com Sua Saúde!
                </h3>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-justify">
                  <p>
                    O mercado está cheio de produtos que prometem resultados milagrosos a preços baixos. Mas quando se trata da sua saúde e performance, economizar no lugar errado pode custar muito mais caro no longo prazo.
                  </p>
                  <p>
                    Produtos de qualidade inferior podem conter contaminantes, dosagens incorretas ou ingredientes sintéticos que seu corpo não reconhece. O resultado? Na melhor das hipóteses, você joga dinheiro fora. Na pior, compromete sua saúde.
                  </p>
                  <p>
                    <strong className="text-primary">A FuXion entende isso</strong>. Por isso, cada produto passa por rigorosos controles de qualidade, utiliza ingredientes 100% naturais e é desenvolvido com base em pesquisas científicas sólidas.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
                  Sua Transformação Começa <span className="gradient-text">Agora</span>
                </h3>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-justify">
                  <p>
                    Você tem duas opções: continuar aceitando que "é assim mesmo" e ver outros alcançarem o sucesso que você deseja, ou tomar a decisão de investir no seu potencial máximo.
                  </p>
                  <p>
                    A energia que você precisa para conquistar seus objetivos, o foco para tomar as melhores decisões e a vitalidade para aproveitar cada momento da vida estão ao seu alcance.
                  </p>
                  <p>
                    <strong className="text-primary">Sua jornada de transformação começa com a primeira decisão inteligente que você tomar hoje</strong>.
                  </p>
                </div>
                
                <div className="text-center space-y-6 pt-8">
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
                  >
                    Descobrir Produtos FuXion
                  </Button>
                </div>
              </div>

            </article>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
