import { ShoppingCart, Info, Award } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  product: Product;
  onOpenDetail: (product: Product) => void;
}

const ProductCard = ({ product, onOpenDetail }: Props) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);

  const frontImage = product.images.find((img) => img.type === "front")?.url || product.images[0]?.url || "";

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
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="group relative h-full flex flex-col overflow-hidden border-border/50 bg-white shadow-sm hover:shadow-md transition-all duration-300 card-gradient-border">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={frontImage}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          
          {product.badge && (
            <span className="absolute top-3 left-3 px-2 py-1 rounded bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
              {product.badge}
            </span>
          )}
          
          <div className="absolute top-3 right-3">
             <span className="flex items-center gap-1 px-2 py-1 rounded bg-white/90 backdrop-blur-sm text-[10px] font-bold text-foreground shadow-sm">
                {product.year}
             </span>
          </div>
        </div>

        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-base font-semibold text-foreground line-clamp-1">
            {product.name}
          </CardTitle>
          <p className="text-xs text-muted-foreground font-medium">
            {product.category} · {product.year}
          </p>
        </CardHeader>

        <CardContent className="p-4 pt-2 flex-grow">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-primary">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
            </div>
            
            <div className="flex gap-1.5 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2 py-1 text-[10px] font-bold rounded border transition-colors ${
                    selectedSize === size
                      ? "bg-primary/10 text-primary border-primary/30"
                      : "border-border text-muted-foreground hover:border-primary/20"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 h-9 text-[13px] gap-1.5"
            onClick={() => onOpenDetail(product)}
          >
            <Info className="w-3.5 h-3.5" />
            Saiba mais
          </Button>
          <Button 
            size="sm" 
            className="h-9 px-3"
            onClick={handleAdd}
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;