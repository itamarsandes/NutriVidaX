import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart
} from "lucide-react";
import logoIcon from "@/assets/logo-icon-40.png";
import logoText from "@/assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logoIcon} 
                alt="NutriVidaX Logo" 
                className="w-10 h-10"
                style={{ imageRendering: 'crisp-edges' }}
              />
              <img 
                src={logoText} 
                alt="NutriVidaX" 
                className="h-6"
                style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Distribuidora oficial FuXion. Transforme sua vida com produtos naturais
              de alta qualidade e construa uma carreira de sucesso.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open("https://www.facebook.com/fuxion", "_blank")}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open("https://www.youtube.com/fuxionoficial", "_blank")}
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Links Rápidos</h3>
            <nav className="space-y-2">
              <Link to="/sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link to="/produtos" className="block text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </Link>
              <Link to="/beneficios" className="block text-muted-foreground hover:text-primary transition-colors">
                Benefícios FuXion
              </Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/como-comprar" className="block text-muted-foreground hover:text-primary transition-colors">
                Como Comprar
              </Link>
            </nav>
          </div>

          {/* Oportunidades */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Oportunidades</h3>
            <nav className="space-y-2">
              <button
                onClick={() => window.open("https://ifuxion.com/nutrividax/dashboard/joinus", "_blank")}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Seja Distribuidor
              </button>
              <button
                onClick={() => window.open("https://ifuxion.com/nutrividax/dashboard/joinus", "_blank")}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Cadastre-se Agora
              </button>
              <Link to="/contato" className="block text-muted-foreground hover:text-primary transition-colors">
                Fale Conosco
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">servicoaocliente@fuxion.net</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">Whatsapp (somente chat): +51 986 867 611</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Sao Paulo, Sao Paulo, Av Paulista 726, Andar 16 Conj 1605D, Sala 01 Bela Vista</span>
              </div>
            </div>
            <Button
              variant="gradient"
              size="sm"
              className="w-full"
              onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
            >
              Comprar Agora
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 NutriVidaX. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>para sua saúde e bem-estar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;