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
      className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col"
    >
      <div
        className="relative aspect-[3/4] overflow-hidden bg-muted cursor-pointer shrink-0"
        onClick={() => onOpenDetail(product)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={hovered ? backImage : frontImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-all duration-500"
        />

        {/* Premium 1.1 badge */}
        <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full glass text-xs font-semibold text-primary">
          <Award className="w-3 h-3" />
          Premium 1.1
        </span>

        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            {product.badge}
          </span>
        )}

        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />

        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(product);
            }}
            className="p-3 rounded-lg glass text-foreground hover:text-primary transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAdd();
            }}
            className="p-3 rounded-lg bg-primary text-primary-foreground hover:brightness-110 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-display font-semibold text-sm text-card-foreground mb-1 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-2 py-1 text-[10px] rounded-md border transition-colors ${
                selectedSize === size
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "border-border text-muted-foreground hover:border-primary/20"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="font-display font-bold text-lg text-primary">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;