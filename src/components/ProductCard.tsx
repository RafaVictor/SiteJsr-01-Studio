import { Star, ShoppingBag, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  product: Product;
  onOpenDetail: (product: Product) => void;
}

const ProductCard = ({ product, onOpenDetail }: Props) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);

  const mainImage = product.images[0]?.url || "";

  const handleAdd = () => {
    addItem({
      id: product.id + "-" + selectedSize,
      name: product.name,
      price: product.price,
      image: mainImage,
      size: selectedSize,
      quantity: 1,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div
        className="relative aspect-[3/4] overflow-hidden bg-muted cursor-pointer"
        onClick={() => onOpenDetail(product)}
      >
        <img
          src={mainImage}
          alt={product.images[0]?.alt || product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            {product.badge}
          </span>
        )}

        {/* Image count indicator */}
        <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs text-foreground font-medium">
          {product.images.length} fotos
        </span>

        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />

        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(product);
            }}
            className="p-3 rounded-lg bg-card/90 backdrop-blur-sm text-foreground shadow-lg hover:bg-card transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAdd();
            }}
            className="p-3 rounded-lg bg-primary text-primary-foreground shadow-lg hover:brightness-110 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
          {product.category}
        </p>
        <h3 className="font-display font-semibold text-sm text-card-foreground mb-1 line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-border"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex gap-1.5 mb-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-2 py-1 text-xs rounded-md border transition-colors ${
                selectedSize === size
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-foreground"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-lg text-card-foreground">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
