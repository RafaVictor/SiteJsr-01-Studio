import { motion } from "framer-motion";
import { Shield, Shirt, Wind, Gem, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Shield, label: "Certificação 1.1" },
  { icon: Shirt, label: "Tecido Premium" },
  { icon: Wind, label: "Alta Respirabilidade" },
  { icon: Gem, label: "Conforto e Durabilidade" },
];

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#f9fafb]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right hidden lg:block" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider mb-6 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Coleção 2026 Já Disponível
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground tracking-tight"
              >
                O Catálogo <br />
                <span className="text-primary italic">Definitivo</span> de <br />
                Mantos Sagrados.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed"
              >
                Explore nossa curadoria premium de camisas de futebol. De lançamentos mundiais a clássicos retrô, com a qualidade que você merece.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="h-14 px-8 text-base font-bold gap-2 rounded-xl shadow-xl shadow-primary/20" asChild>
                  <a href="#produtos">
                    Explorar Catálogo
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold rounded-xl bg-white/50 backdrop-blur-sm border-border hover:bg-white" asChild>
                  <a href="#custom-lab">Personalizar Manto</a>
                </Button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800"
                  alt="Football Shirt Detail"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-border/50 max-w-[200px]">
                <p className="text-[10px] font-bold text-primary uppercase mb-1">Destaque da Semana</p>
                <p className="text-sm font-bold text-foreground">Brasil 2026 Home Elite</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-white border-y border-border py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            {benefits.map((b, i) => (
              <div
                key={b.label}
                className="flex items-center justify-center gap-3 px-4 border-r last:border-r-0 border-border/50"
              >
                <b.icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;