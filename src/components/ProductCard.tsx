import { Star, ShoppingBag, Eye, Award } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface Props {
  product: Product;
  onOpenDetail: (product: Product) => void;
}

const ProductCard = ({ product, onOpenDetail }: Props) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const [hovered, setHovered] = useState(false);

  const frontImage = product.images.find((img) => img.type === "front")?.url || product.images[0]?.url || "";
  const backImage = product.images.find((img) => img.type === "back")?.url || frontImage;

  const handleAdd = () => {
    addItem({
      id: product.id + "-" + selectedSize,
      name: product.name,
      price: product.price,
      image: frontImage,
      size: selectedSize,
      quantity: 1,
    });
  };

  return (
    <div
      className="group flex flex-col w-full h-full rounded-2xl border border-border/50 bg-card/30 overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5 group"
    >
      {/* Image Container */}
      <div
        className="relative aspect-[3/4] w-full overflow-hidden bg-muted/20 cursor-pointer"
        onClick={() => onOpenDetail(product)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={hovered ? backImage : frontImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
             // Fallback if image fails
             (e.target as HTMLImageElement).src = `https://placehold.co/800x1067/1a1a1a/ffffff?text=${encodeURIComponent(product.name)}`;
          }}
        />

        {/* Premium Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest z-10">
          <Award className="w-3.5 h-3.5" />
          Premium 1.1
        </div>

        {product.badge && (
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest shadow-lg z-10">
            {product.badge}
          </div>
        )}

        {/* Hover Overlay Buttons */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
           <button
             onClick={(e) => {
               e.stopPropagation();
               onOpenDetail(product);
             }}
             className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
           >
             <Eye className="w-5 h-5" />
           </button>
           <button
             onClick={(e) => {
               e.stopPropagation();
               handleAdd();
             }}
             className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:brightness-110 shadow-lg transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
           >
             <ShoppingBag className="w-5 h-5" />
           </button>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-base text-card-foreground mb-2 line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-primary" : "text-muted"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium">({product.reviews})</span>
        </div>

        {/* Sizes */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all ${
                selectedSize === size
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "border-border text-muted-foreground hover:border-primary/30"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-4">
          <div className="flex flex-col">
             <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">A partir de</span>
             <span className="font-display font-bold text-xl text-primary">
               R$ {product.price.toFixed(2).replace(".", ",")}
             </span>
          </div>
          <button
             onClick={(e) => {
               e.stopPropagation();
               handleAdd();
             }}
             className="p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
             <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;