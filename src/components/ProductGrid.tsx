import { useState, useMemo } from "react";
import { products, categoryOrder, Product, CategoryType } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

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
      <section id="produtos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">
              Catálogo Exclusivo
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Coleção <span className="text-gradient-gold">Manto Store</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Camisas premium selecionadas com certificação de qualidade
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Busque por time, seleção ou categoria..."
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => setActiveCategory("Tudo")}
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg border transition-all ${
                activeCategory === "Tudo"
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/20"
              }`}
            >
              Todos os Mantos
            </button>
            {categoryOrder.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg border transition-all ${
                  activeCategory === cat
                    ? "bg-primary/10 text-primary border-primary/30"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Size Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <span className="text-sm font-medium text-muted-foreground self-center mr-2">Tamanho:</span>
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSize(s)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                  activeSize === s
                    ? "bg-primary/10 text-primary border-primary/30"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/20"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-card/30 rounded-2xl border border-dashed border-border">
              <p className="text-muted-foreground mb-6">
                Nenhum manto encontrado com esses filtros.
              </p>
              <button
                onClick={() => (window as any).openRequestModal?.()}
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              >
                Solicitar Manto Específico
              </button>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
