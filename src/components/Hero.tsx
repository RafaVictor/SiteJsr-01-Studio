import { motion } from "framer-motion";
import { Shield, Shirt, Wind, Gem } from "lucide-react";

const benefits = [
  { icon: Shield, label: "Certificação 1.1" },
  { icon: Shirt, label: "Tecido Premium" },
  { icon: Wind, label: "Alta Respirabilidade" },
  { icon: Gem, label: "Conforto e Durabilidade" },
];

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero">
          <img
            src="https://placehold.co/1920x1080/050a14/111111?text=Stadium+Atmosphere"
            alt="Estádio atmosférico"
            className="w-full h-full object-cover opacity-30 mix-blend-lighten"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass border border-primary/30 text-primary text-sm font-semibold tracking-wide mb-6">
                O MAIOR CATÁLOGO DE MANTOS DO MUNDO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
            >
              <span className="text-foreground">Vista a paixão.</span>{" "}
              <span className="text-gradient-gold">Jogue com estilo.</span>
            </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-muted-foreground mb-8 max-w-lg"
              >
                Explore milhares de camisas de clubes brasileiros, europeus, seleções e modelos retrô. 
                Qualidade premium com certificação garantida.
              </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#produtos"
                className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              >
                Ver Catálogo
              </a>
              <a
                href="#custom-lab"
                className="px-8 py-3.5 rounded-lg border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 transition-all"
              >
                Personalizar
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="border-y border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-center gap-3 py-5"
              >
                <b.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{b.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
