import { useState } from "react";
import { products, categoryOrder, Product, CategoryType } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import { motion, AnimatePresence } from "framer-motion";

const sizes = ["Todos", "P", "M", "G", "GG", "XGG"];

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("Brasil 2026");
  const [activeSize, setActiveSize] = useState("Todos");
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const filtered = products.filter((p) => {
    const catMatch = p.category === activeCategory;
    const sizeMatch = activeSize === "Todos" || p.sizes.includes(activeSize);
    return catMatch && sizeMatch;
  });

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

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
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
            <p className="text-center text-muted-foreground py-12">
              Nenhum produto encontrado com esses filtros.
            </p>
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
