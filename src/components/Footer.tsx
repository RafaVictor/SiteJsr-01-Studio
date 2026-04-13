const footerLinks = [
  { label: "Coleção", href: "#produtos" },
  { label: "Custom Lab", href: "#custom-lab" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "https://wa.me/5581985402833", external: true },
];

const Footer = () => (
  <footer className="border-t border-border bg-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
           <a href="#" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              MANTO<span className="text-primary italic">STORE</span>
            </span>
          </a>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            A Manto Store é sua boutique definitiva para camisas de futebol premium. Unimos tradição e modernidade para trazer o melhor do futebol mundial até você.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-6">Links Rápidos</h4>
          <ul className="space-y-4">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-6">Atendimento</h4>
           <p className="text-sm text-muted-foreground leading-relaxed mb-4">
             Segunda a Sexta: 09h às 18h<br />
             Sábado: 09h às 13h
           </p>
           <a href="https://wa.me/5581985402833" className="text-sm font-bold text-primary hover:underline">
             Falar com um Consultor →
           </a>
        </div>
      </div>
      
      <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
          © 2026 MANTO STORE. TODOS OS DIREITOS RESERVADOS.
        </p>
        <div className="flex gap-4">
           {/* Payment icons could go here */}
           <div className="w-10 h-6 bg-muted/50 rounded-md" />
           <div className="w-10 h-6 bg-muted/50 rounded-md" />
           <div className="w-10 h-6 bg-muted/50 rounded-md" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;