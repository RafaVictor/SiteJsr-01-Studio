import { useState, useMemo } from "react";
import { products, categoryOrder, Product, CategoryType } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sizes = ["Todos", "P", "M", "G", "GG", "XGG"];

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType | "Tudo">("Tudo");
  const [activeSize, setActiveSize] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = activeCategory === "Tudo" || p.category === activeCategory;
      const sizeMatch = activeSize === "Todos" || p.sizes.includes(activeSize);
      const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return catMatch && sizeMatch && searchMatch;
    });
  }, [activeCategory, activeSize, searchQuery]);

  return (
    <>
      <section id="produtos" className="py-24 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-3 block">
                Catálogo Premium
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight leading-none">
                Explore a <span className="text-primary italic">Nova Coleção</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Navegue por nossa seleção exclusiva de mantos sagrados. Qualidade 1.1 impecável, tecidos tecnológicos e personalização oficial disponível.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Busque por time, ano ou categoria..."
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="lg" className="h-12 rounded-2xl gap-2 font-bold px-6 bg-white border-border/50 shadow-sm">
                <Filter className="w-4 h-4" />
                Filtros
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide">
            <Button
              variant={activeCategory === "Tudo" ? "default" : "outline"}
              onClick={() => setActiveCategory("Tudo")}
              className={`h-10 rounded-full text-xs font-bold uppercase tracking-wider px-6 ${
                activeCategory !== "Tudo" ? "bg-white border-border/50 text-muted-foreground hover:bg-muted" : ""
              }`}
            >
              Todos os Mantos
            </Button>
            {categoryOrder.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={`h-10 rounded-full text-xs font-bold uppercase tracking-wider px-6 ${
                  activeCategory !== cat ? "bg-white border-border/50 text-muted-foreground hover:bg-muted" : ""
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-border/60 shadow-sm">
              <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Nenhum manto encontrado</h3>
              <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto">
                Não encontramos o que você procurava. Que tal solicitar um manto exclusivo?
              </p>
              <Button
                onClick={() => (window as any).openRequestModal?.()}
                className="h-12 px-8 rounded-xl font-bold"
              >
                Solicitar Manto Específico
              </Button>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenDetail={setDetailProduct}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          <div className="mt-20 flex justify-center">
             <Button variant="ghost" className="group text-sm font-bold text-muted-foreground hover:text-primary transition-colors gap-2">
                Carregar Mais Modelos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Button>
          </div>
        </div>
      </section>

      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
        />
      )}
    </>
  );
};

export default ProductGrid;