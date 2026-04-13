import { Star, CheckCircle, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews } from "@/data/products";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const visiblePhotos = 4;

  const nextPhoto = () => setPhotoIndex((i) => Math.min(i + 1, reviews.length - visiblePhotos));
  const prevPhoto = () => setPhotoIndex((i) => Math.max(0, i - 1));

  return (
    <section id="avaliacoes" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-3 block">
            Comunidade Manto Store
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Mantos pelo <span className="text-primary italic">Mundo</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Junte-se a milhares de torcedores que já garantiram seu manto sagrado com a qualidade que só a Manto Store oferece.
          </p>
        </div>

        {/* Photo Carousel */}
        <div className="relative mb-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden">
            {reviews.slice(photoIndex, photoIndex + visiblePhotos).map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={r.photo}
                    alt={`Cliente ${r.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                     <p className="text-white text-xs font-bold tracking-wider uppercase">{r.name}</p>
                     <p className="text-white/70 text-[10px]">Cliente Verificado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6 flex justify-between pointer-events-none">
             <Button 
              variant="outline" 
              size="icon" 
              onClick={prevPhoto} 
              disabled={photoIndex === 0}
              className={`rounded-full shadow-lg bg-white pointer-events-auto h-12 w-12 ${photoIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextPhoto} 
              disabled={photoIndex >= reviews.length - visiblePhotos}
              className={`rounded-full shadow-lg bg-white pointer-events-auto h-12 w-12 ${photoIndex >= reviews.length - visiblePhotos ? 'opacity-0' : 'opacity-100'}`}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-border/50 bg-[#f9fafb] hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-3.5 h-3.5 ${j < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                  />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/10 mb-4" />
              
              <p className="text-sm text-foreground/80 leading-relaxed mb-8 font-medium italic">
                "{review.comment}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-foreground">{review.name}</span>
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;