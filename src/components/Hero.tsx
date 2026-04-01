import { motion } from "framer-motion";

const HERO_IMAGE_URL = "https://placehold.co/1920x1080/0a1f0a/ffffff?text=Brasil+2026%0AHero+Image";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-hero flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE_URL}
          alt="Camisa Brasil 2026"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold tracking-wide mb-6 border border-secondary/30">
              COLEÇÃO EXCLUSIVA 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6"
          >
            Vista a paixão.{" "}
            <span className="text-gradient-brasil">Jogue com estilo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-primary-foreground/70 mb-8 max-w-lg"
          >
            Camisas premium da seleção brasileira para a Copa do Mundo 2026.
            Personalize com seu nome e número.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#produtos"
              className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/30"
            >
              Ver Catálogo
            </a>
            <a
              href="#custom-lab"
              className="px-8 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-secondary/30"
            >
              Personalizar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
