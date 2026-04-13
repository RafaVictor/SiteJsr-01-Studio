import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/products";
import { motion } from "framer-motion";
import { useState } from "react";

const Reviews = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const visiblePhotos = 4;

  const nextPhoto = () => setPhotoIndex((i) => Math.min(i + 1, reviews.length - visiblePhotos));
  const prevPhoto = () => setPhotoIndex((i) => Math.max(0, i - 1));

  return (
    <section id="avaliacoes" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Mantos pelo Mundo */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">
            Prova Social
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Mantos pelo <span className="text-gradient-gold">Mundo</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Nossos clientes vestindo seus mantos com orgulho
          </p>
        </div>

        {/* Photo Carousel */}
        <div className="relative mb-16">
          <div className="flex gap-4 overflow-hidden">
            {reviews.slice(photoIndex, photoIndex + visiblePhotos).map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex-1 min-w-0"
              >
                <div className="aspect-square rounded-xl overflow-hidden border border-border">
                  <img
                    src={r.photo}
                    alt={`Cliente ${r.name}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">{r.name}</p>
              </motion.div>
            ))}
          </div>

          {photoIndex > 0 && (
            <button
              onClick={prevPhoto}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full glass hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          )}
          {photoIndex < reviews.length - visiblePhotos && (
            <button
              onClick={nextPhoto}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full glass hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          )}
        </div>

        {/* Reviews */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-bold text-foreground">
            Avaliações dos Clientes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 border border-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-primary/20"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm text-foreground">{review.name}</span>
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.comment}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
