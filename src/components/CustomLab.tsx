import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ShieldCheck, Shirt, Award } from "lucide-react";

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

  const handleFinalize = () => {
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
    toast.success("Camisa personalizada adicionada ao carrinho!");
  };

  return (
    <section id="custom-lab" className="py-24 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-3 block">
            Personalização Oficial
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Custom <span className="text-primary italic">Lab</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Sua paixão, seu manto. Personalize seu modelo favorito com nome, número e patches oficiais.
          </p>
        </div>

        {/* Model selector */}
        <div className="flex gap-4 justify-center mb-16 flex-wrap overflow-x-auto pb-4 px-4 scrollbar-hide">
          {customizableProducts.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setSelectedProductId(p.id);
                setSelectedSize(p.sizes[1] || p.sizes[0]);
              }}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-300 min-w-[200px] ${
                selectedProductId === p.id
                  ? "border-primary bg-white shadow-xl shadow-primary/5 ring-4 ring-primary/5"
                  : "border-border bg-white/50 hover:border-primary/20 hover:bg-white"
              }`}
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-border bg-muted">
                <img
                  src={p.images[0].url}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold text-primary uppercase block">Modelo</span>
                <span className="text-sm font-bold text-foreground whitespace-nowrap">
                   {p.name.replace("Brasil 2026 — ", "").replace("Real Madrid ", "RM ").replace("Barcelona ", "Barça ")}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group mx-auto max-w-[400px]">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-muted">
                <img
                  src={backImage}
                  alt="Mockup costas da camisa"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Custom name/number overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-start pt-[22%] pointer-events-none">
                <AnimatePresence mode="wait">
                  {customName && (
                    <motion.span
                      key={customName}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="font-bold text-2xl md:text-3xl tracking-[0.2em] uppercase"
                      style={{ color: "hsl(43, 72% , 52%)", textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
                    >
                      {customName.slice(0, 12)}
                    </motion.span>
                  )}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  {customNumber && (
                    <motion.span
                      key={customNumber}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-bold text-7xl md:text-8xl mt-2"
                      style={{ color: "hsl(43, 72% , 52%)", textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
                    >
                      {customNumber.slice(0, 2)}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-border/50 max-w-[160px]">
                 <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">Qualidade 1.1</span>
                 </div>
                 <p className="text-[10px] text-muted-foreground leading-tight">Personalização idêntica aos modelos de jogo.</p>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-border/50 shadow-xl shadow-primary/5"
          >
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Seu Nome</label>
                  <input
                    type="text"
                    maxLength={12}
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                    placeholder="NEYMAR"
                    className="w-full px-5 py-4 rounded-xl bg-[#f9fafb] border border-border focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-bold tracking-widest text-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Número</label>
                  <input
                    type="text"
                    maxLength={2}
                    value={customNumber}
                    onChange={(e) => setCustomNumber(e.target.value.replace(/\D/g, ""))}
                    placeholder="10"
                    className="w-full px-5 py-4 rounded-xl bg-[#f9fafb] border border-border focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-bold tracking-widest text-3xl h-[68px]"
                  />
                </div>
              </div>

              {/* Size */}
              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Selecione o Tamanho</label>
                <div className="flex gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[54px] h-12 flex items-center justify-center text-sm font-bold rounded-xl border-2 transition-all ${
                        selectedSize === size
                          ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                          : "border-border text-muted-foreground hover:border-primary/20 bg-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Patches Colecionáveis</label>
                <div className="grid grid-cols-2 gap-4">
                  {patches.map((patch) => (
                    <button
                      key={patch.id}
                      onClick={() => togglePatch(patch.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all relative ${
                        selectedPatches.includes(patch.id)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/20 bg-white"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground mb-1">{patch.name}</span>
                        <span className="text-xs font-bold text-primary">
                          + R$ {patch.price.toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                      {selectedPatches.includes(patch.id) && (
                         <div className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                            <ShieldCheck className="w-2.5 h-2.5 text-white" />
                         </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border flex flex-col gap-4">
                 <div className="flex justify-between items-center px-2">
                    <span className="text-sm font-bold text-muted-foreground">Valor Total do Manto</span>
                    <span className="text-3xl font-black text-primary">R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                 </div>
                 
                 <Button
                  onClick={handleFinalize}
                  size="lg"
                  className="w-full h-16 text-lg font-bold gap-3 rounded-2xl shadow-xl shadow-primary/20"
                >
                  <ShoppingCart className="w-6 h-6" />
                  Finalizar Personalização
                </Button>
                
                <div className="flex items-center justify-center gap-6 mt-4 opacity-50">
                   <div className="flex items-center gap-1.5">
                      <Shirt className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Premium</span>
                   </div>
                   <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Oficial</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomLab;