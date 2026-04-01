import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

const customizableProducts = products.filter((p) => p.customizable);

const patches = [
  { id: "copa2026", name: "Copa 2026", price: 29.90 },
  { id: "bandeira", name: "Bandeira BR", price: 19.90 },
  { id: "estrelas", name: "5 Estrelas", price: 24.90 },
  { id: "escudo", name: "Escudo Gold", price: 34.90 },
];

const CustomLab = () => {
  const [selectedProductId, setSelectedProductId] = useState(customizableProducts[0]?.id || "1");
  const [customName, setCustomName] = useState("");
  const [customNumber, setCustomNumber] = useState("");
  const [selectedPatches, setSelectedPatches] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState("M");
  const { addItem } = useCart();

  const selectedProduct = customizableProducts.find((p) => p.id === selectedProductId) || customizableProducts[0];
  const backImage = selectedProduct?.images.find((img) => img.type === "back")?.url || selectedProduct?.images[0]?.url || "";

  const basePrice = selectedProduct?.price || 299.90;
  const patchTotal = patches
    .filter((p) => selectedPatches.includes(p.id))
    .reduce((sum, p) => sum + p.price, 0);
  const customizationFee = (customName || customNumber) ? 39.90 : 0;
  const totalPrice = basePrice + patchTotal + customizationFee;

  const togglePatch = (id: string) => {
    setSelectedPatches((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleAddToCart = () => {
    addItem({
      id: `custom-${selectedProductId}-${Date.now()}`,
      name: `${selectedProduct.name} (Personalizada)`,
      price: totalPrice,
      image: selectedProduct.images[0].url,
      size: selectedSize,
      quantity: 1,
      customName,
      customNumber,
      patches: selectedPatches,
    });
  };

  return (
    <section id="custom-lab" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">
            Personalização Exclusiva
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Custom Lab 2026
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Escolha seu modelo e personalize com nome, número e patches oficiais
          </p>
        </div>

        {/* Model selector */}
        <div className="flex gap-3 justify-center mb-10 flex-wrap">
          {customizableProducts.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setSelectedProductId(p.id);
                setSelectedSize(p.sizes[1] || p.sizes[0]);
              }}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border transition-all ${
                selectedProductId === p.id
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : "border-border hover:border-foreground/30"
              }`}
            >
              <img
                src={p.images[0].url}
                alt={p.name}
                className="w-10 h-10 rounded-md object-cover"
              />
              <span className="text-sm font-medium text-foreground hidden sm:block">
                {p.name.replace("Camisa Brasil 2026 — ", "")}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 md:w-80">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-muted">
                <img
                  src={backImage}
                  alt="Mockup costas da camisa"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Custom name/number overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-start pt-[22%] pointer-events-none">
                {customName && (
                  <span
                    className="font-display font-bold text-xl md:text-2xl tracking-[0.2em] uppercase drop-shadow-lg"
                    style={{ color: "hsl(var(--primary-foreground))", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                  >
                    {customName.slice(0, 12)}
                  </span>
                )}
                {customNumber && (
                  <span
                    className="font-display font-bold text-6xl md:text-7xl drop-shadow-lg mt-1"
                    style={{ color: "hsl(var(--primary-foreground))", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                  >
                    {customNumber.slice(0, 2)}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Seu Nome
              </label>
              <input
                type="text"
                maxLength={12}
                value={customName}
                onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                placeholder="Ex: NEYMAR"
                className="w-full px-4 py-3 rounded-lg border border-input bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow font-display tracking-wider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Número
              </label>
              <input
                type="text"
                maxLength={2}
                value={customNumber}
                onChange={(e) => setCustomNumber(e.target.value.replace(/\D/g, ""))}
                placeholder="Ex: 10"
                className="w-full px-4 py-3 rounded-lg border border-input bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow font-display text-2xl tracking-widest"
              />
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tamanho
              </label>
              <div className="flex gap-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Patches Colecionáveis
              </label>
              <div className="grid grid-cols-2 gap-3">
                {patches.map((patch) => (
                  <button
                    key={patch.id}
                    onClick={() => togglePatch(patch.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedPatches.includes(patch.id)
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <span className="block text-sm font-medium text-foreground">
                      {patch.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      + R$ {patch.price.toFixed(2).replace(".", ",")}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{selectedProduct.name.replace("Camisa Brasil 2026 — ", "")}</span>
                <span>R$ {basePrice.toFixed(2).replace(".", ",")}</span>
              </div>
              {customizationFee > 0 && (
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Personalização</span>
                  <span>R$ {customizationFee.toFixed(2).replace(".", ",")}</span>
                </div>
              )}
              {patchTotal > 0 && (
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Patches</span>
                  <span>R$ {patchTotal.toFixed(2).replace(".", ",")}</span>
                </div>
              )}
              <div className="flex justify-between font-display font-bold text-lg text-foreground pt-2 border-t border-border">
                <span>Total</span>
                <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/30"
            >
              Adicionar ao Carrinho
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomLab;
