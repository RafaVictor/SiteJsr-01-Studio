import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExclusiveRequestModal from "./ExclusiveRequestModal";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Coleção", href: "#produtos" },
  { label: "Custom Lab", href: "#custom-lab" },
  { label: "Avaliações", href: "#avaliacoes" },
];

const Navbar = () => {
  const { totalItems, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);

  if (typeof window !== 'undefined') {
    (window as any).openRequestModal = () => setRequestOpen(true);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
              M
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground hidden sm:block">
              MANTO<span className="text-primary italic">STORE</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
             <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-muted"
            >
              <Search className="w-5 h-5 text-foreground" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              className="relative rounded-full hover:bg-muted"
            >
              <ShoppingBag className="w-5 h-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-black">
                  {totalItems}
                </span>
              )}
            </Button>

            <Button
              variant="default"
              size="sm"
              onClick={() => setRequestOpen(true)}
              className="hidden lg:flex font-bold text-xs uppercase tracking-widest px-6 h-10 rounded-full"
            >
              Manto Exclusivo
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  onClick={() => {
                    setMobileOpen(false);
                    setRequestOpen(true);
                  }}
                  className="w-full h-12 font-bold"
                >
                  Solicitar Manto Exclusivo
                </Button>
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