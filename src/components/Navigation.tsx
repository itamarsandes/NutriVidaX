import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Users } from "lucide-react";
import logoIcon from "@/assets/logo-icon-40.png";
import logoText from "@/assets/logo-text.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Produtos", path: "/produtos" },
    { name: "Benefícios", path: "/beneficios" },
    { name: "Como Comprar", path: "/como-comprar" },
    { name: "Blog", path: "/blog" },
    { name: "Seja Distribuidor", path: "/seja-distribuidor" },
    { name: "Contato", path: "/contato" }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-soft z-50 border-b border-border">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActivePath(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank")}
              className="flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Comprar
            </Button>
            <Button
              variant="gradient"
              size="sm"
              onClick={() => window.open("https://ifuxion.com/nutrividax/dashboard/joinus", "_blank")}
              className="flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Seja Distribuidor
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-muted rounded-md ${isActivePath(item.path)
                      ? "text-primary bg-primary-light/10"
                      : "text-foreground"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    window.open("https://ifuxion.com/nutrividax/enrollment/products", "_blank");
                    setIsMenuOpen(false);
                  }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Comprar Produtos
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    window.open("https://ifuxion.com/nutrividax/dashboard/joinus", "_blank");
                    setIsMenuOpen(false);
                  }}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Seja Distribuidor
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;