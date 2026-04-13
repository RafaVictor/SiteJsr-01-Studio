import { useState } from "react";
import { Star, ShoppingBag, Award, X, ChevronLeft, ChevronRight, ShoppingCart, Info } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  product: Product;
  onClose: () => void;
}

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
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-white rounded-2xl shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery */}
          <div className="relative bg-muted/30">
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur shadow-sm hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 text-foreground" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur shadow-sm hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-foreground" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      activeImage === i ? "bg-primary w-4" : "bg-black/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="p-8 flex flex-col max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
                  {product.category} · {product.year}
                </span>
                <h2 className="text-2xl font-bold text-foreground mb-1 leading-tight">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ou 3x de R$ {(product.price / 3).toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  Especificações do Manto
                </h3>
                <div className="grid grid-cols-2 gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-0.5">Tecido</p>
                    <p className="text-sm font-medium text-foreground">{product.fabric}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-0.5">Ano</p>
                    <p className="text-sm font-medium text-foreground">{product.year}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-0.5">Estilo</p>
                    <p className="text-sm font-medium text-foreground">{product.style}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-0.5">Numeração</p>
                    <p className="text-sm font-medium text-foreground">{product.numbering}</p>
                  </div>
                </div>
              </div>

              {product.description && (
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-foreground">Descrição</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-foreground">Selecione o Tamanho</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-12 flex items-center justify-center text-sm font-bold rounded-lg border-2 transition-all ${
                        selectedSize === size
                          ? "bg-primary/5 text-primary border-primary"
                          : "border-border text-muted-foreground hover:border-primary/20"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Button
                  onClick={handleAdd}
                  size="lg"
                  className="w-full h-14 text-base font-bold gap-2 shadow-lg shadow-primary/20"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Adicionar ao Carrinho
                </Button>
                
                {product.customizable && (
                  <p className="text-center text-xs text-muted-foreground">
                    Este item aceita personalização oficial de nome e número.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors">
          <X className="w-5 h-5 text-foreground" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;