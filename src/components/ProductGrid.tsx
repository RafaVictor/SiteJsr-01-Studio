import { useState, useMemo } from "react";
import { products, categoryOrder, Product, CategoryType } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
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
    <section id="produtos" className="py-24 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">
            Catálogo Exclusivo
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Coleção <span className="text-gradient-gold">Manto Store</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            A maior seleção de camisas premium com certificação de qualidade garantida.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col gap-8 mb-16">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto w-full relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Busque por time, seleção ou categoria..."
              className="w-full pl-12 pr-6 py-4 bg-card/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground text-lg shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-6 items-center">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveCategory("Tudo")}
                className={`px-6 py-2.5 text-sm font-semibold rounded-xl border transition-all ${
                  activeCategory === "Tudo"
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-card/30 border-border text-muted-foreground hover:text-foreground hover:border-primary/20"
                }`}
              >
                Todos os Mantos
              </button>
              {categoryOrder.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-xl border transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                      : "bg-card/30 border-border text-muted-foreground hover:text-foreground hover:border-primary/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Size Filter */}
            <div className="flex items-center gap-4 p-1.5 bg-card/30 border border-border rounded-2xl">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-3">Tamanho:</span>
              <div className="flex gap-1">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSize(s)}
                    className={`px-4 py-1.5 text-sm font-medium rounded-xl transition-all ${
                      activeSize === s
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-32 bg-card/20 rounded-3xl border border-dashed border-border/50">
            <p className="text-muted-foreground text-lg mb-8">
              Nenhum manto encontrado com esses filtros.
            </p>
            <button
              onClick={() => (window as any).openRequestModal?.()}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20"
            >
              Solicitar Manto Específico
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={setDetailProduct}
              />
            ))}
          </div>
        )}
      </div>

      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductGrid;