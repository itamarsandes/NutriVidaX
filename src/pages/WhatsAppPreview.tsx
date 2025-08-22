import { Button } from "@/components/ui/button";

const phoneNumber = "51986867611"; // +51 986 867 611
const message = "Olá! Gostaria de saber mais sobre os produtos FuXion da NutriVidaX.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function WhatsAppPreview() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-2xl w-full text-center space-y-6">
        <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
          <img
            src="/favicons/favicon-30x30.png"
            alt="NutriVidaX"
            className="h-12 w-12"
          />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Iniciar conversa</h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          {message}
        </p>
        <div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-8">Abrir no WhatsApp</Button>
          </a>
        </div>
      </div>
    </main>
  );
}
