import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-white space-y-8 fade-in-up">

            {/* Badge */}
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Distribuidora Oficial FuXion</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforme Sua Vida com
              <span className="block text-accent">NutriVidaX</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Descubra o poder da nutrição FuXion e construa uma vida mais saudável,
              próspera e plena com produtos naturais de alta qualidade.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-accent text-lg font-bold">
                  <Star className="w-5 h-5 fill-current" />
                  <span>4.9</span>
                </div>
                <p className="text-sm text-white/80">Avaliação</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-accent text-lg font-bold">
                  <Users className="w-5 h-5" />
                  <span>50k+</span>
                </div>
                <p className="text-sm text-white/80">Clientes</p>
              </div>
              <div className="text-center">
                <div className="text-accent text-lg font-bold">100%</div>
                <p className="text-sm text-white/80">Natural</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
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
                onClick={() => window.open("https://ifuxion.com/nutrividax/dashboard/joinus", "_blank")}
              >
                Seja Distribuidor
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-sm text-white/90">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-sm text-white/90">Sem Açúcar</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-sm text-white/90">Tecnologia Avançada</span>
              </div>
            </div>
          </div>

          {/* Video/Image Placeholder */}
          <div className="relative fade-in-down">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Comece Sua Transformação Hoje
                </h3>
                <p className="text-white/90">
                  Junte-se a milhares de pessoas que já transformaram suas vidas
                  com os produtos FuXion.
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
                  className="w-full"
                >
                  Iniciar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;