import { Crown } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/30 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-primary" />
          <span className="font-display text-lg font-bold text-foreground">
            MANTO<span className="text-primary"> STORE</span>
          </span>
        </div>
        <div className="flex gap-6">
          {["Coleção", "Custom Lab", "Avaliações", "Contato"].map((link) => (
            <a key={link} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground/60">© 2026 Manto Store. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
