import { useState } from "react";
import { products, categoryOrder, categoryLabels, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

const colors = ["Todos", "Verde", "Amarelo", "Azul", "Branco", "Preto"];
const sizes = ["Todos", "P", "M", "G", "GG", "XGG"];

const ProductGrid = () => {
  const [activeColor, setActiveColor] = useState("Todos");
  const [activeSize, setActiveSize] = useState("Todos");
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const filtered = products.filter((p) => {
    const colorMatch = activeColor === "Todos" || p.color === activeColor;
    const sizeMatch = activeSize === "Todos" || p.sizes.includes(activeSize);
    return colorMatch && sizeMatch;
  });

  const groupedByCategory = categoryOrder
    .map((cat) => ({
      category: cat,
      label: categoryLabels[cat],
      items: filtered.filter((p) => p.category === cat),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <section id="produtos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">
              Catálogo Oficial
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Coleção Brasil 2026
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Camisas premium da seleção brasileira organizadas por categoria
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm font-medium text-muted-foreground self-center mr-2">Cor:</span>
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveColor(c)}
                  className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                    activeColor === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm font-medium text-muted-foreground self-center mr-2">Tamanho:</span>
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSize(s)}
                  className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                    activeSize === s
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          {groupedByCategory.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              Nenhum produto encontrado com esses filtros.
            </p>
          ) : (
            <div className="space-y-16">
              {groupedByCategory.map((group) => (
                <div key={group.category}>
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="font-display text-lg font-bold text-foreground whitespace-nowrap">
                      {group.label}
                    </h3>
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {group.items.length} {group.items.length === 1 ? "modelo" : "modelos"}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.items.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onOpenDetail={setDetailProduct}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
