import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExclusiveRequestModal from "./ExclusiveRequestModal";
import mantoLogo from "@/assets/manto-store-logo.png";

const navLinks = [
  { label: "Coleção", href: "#produtos" },
  { label: "Custom Lab", href: "#custom-lab" },
  { label: "Avaliações", href: "#avaliacoes" },
];

const Navbar = () => {
  const { totalItems, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#" className="flex items-center">
            <img src={mantoLogo} alt="Manto Store" className="h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setRequestOpen(true)}
              className="px-4 py-2 text-sm font-semibold rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all"
            >
              Solicitar Manto Exclusivo
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden glass overflow-hidden"
            >
              <div className="flex flex-col gap-2 p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setRequestOpen(true);
                  }}
                  className="py-2 text-sm font-semibold text-primary text-left"
                >
                  Solicitar Manto Exclusivo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ExclusiveRequestModal open={requestOpen} onClose={() => setRequestOpen(false)} />
    </>
  );
};

export default Navbar;
