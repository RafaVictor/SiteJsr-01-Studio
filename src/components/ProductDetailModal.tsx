import { useState } from "react";
import { X, Star, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  product: Product;
  onClose: () => void;
}

const imageTypeLabels: Record<string, string> = {
  front: "Frente",
  back: "Costas",
  detail: "Detalhe",
  fabric: "Tecido",
  label: "Etiqueta",
};

const ProductDetailModal = ({ product, onClose }: Props) => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: product.id + "-" + selectedSize,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      size: selectedSize,
      quantity: 1,
    });
    onClose();
  };

  const nextImage = () => setActiveImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card rounded-2xl border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery */}
            <div className="relative bg-muted">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>

              <div className="relative aspect-square">
                <img
                  src={product.images[activeImage].url}
                  alt={product.images[activeImage].alt}
                  className="w-full h-full object-cover"
                />

                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Image type indicator */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground">
                  {imageTypeLabels[product.images[activeImage].type] || "Foto"} · {activeImage + 1}/{product.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 p-3 overflow-x-auto">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === i ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col">
              {product.badge && (
                <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                  {product.badge}
                </span>
              )}

              <h2 className="font-display text-xl font-bold text-card-foreground mb-1">
                {product.name}
              </h2>

              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                {product.category} · Brasil 2026
              </p>

              <div className="flex items-center gap-1.5 mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-border"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>

              {product.description && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
              )}

              <div className="mb-6">
                <span className="text-sm font-medium text-foreground mb-2 block">Tamanho</span>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-card-foreground">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ou 3x de R$ {(product.price / 3).toFixed(2).replace(".", ",")}
                  </span>
                </div>

                <button
                  onClick={handleAdd}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/30"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Adicionar ao Carrinho
                </button>

                {product.customizable && (
                  <a
                    href="#custom-lab"
                    onClick={onClose}
                    className="block text-center text-sm text-primary hover:underline"
                  >
                    Personalizar com nome e número →
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetailModal;
