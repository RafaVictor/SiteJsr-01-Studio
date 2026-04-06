import mantoLogo from "@/assets/manto-store-logo.png";

const footerLinks = [
  { label: "Coleção", href: "#produtos" },
  { label: "Custom Lab", href: "#custom-lab" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "https://wa.me/5581985402833", external: true },
];

const Footer = () => (
  <footer className="border-t border-border bg-card/30 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#">
          <img src={mantoLogo} alt="Manto Store" className="h-8 w-auto" />
        </a>
        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground/60">© 2026 Manto Store. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
