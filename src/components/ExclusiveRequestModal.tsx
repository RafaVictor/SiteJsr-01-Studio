import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Shield, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

const steps = [
  { label: "Time / Seleção", placeholder: "Ex: Brasil, Real Madrid, Flamengo..." },
  { label: "Temporada", placeholder: "Ex: 2025/26, 2024/25, Retrô 1970..." },
  { label: "Tamanho", options: ["P", "M", "G", "GG", "XGG"] },
  { label: "Contato", fields: true },
];

const ExclusiveRequestModal = ({ open, onClose }: Props) => {
  const [step, setStep] = useState(0);
  const [team, setTeam] = useState("");
  const [season, setSeason] = useState("");
  const [size, setSize] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reset = () => {
    setStep(0);
    setTeam("");
    setSeason("");
    setSize("");
    setName("");
    setWhatsapp("");
    setSubmitted(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const canNext = () => {
    if (step === 0) return team.trim().length > 0;
    if (step === 1) return season.trim().length > 0;
    if (step === 2) return size.length > 0;
    if (step === 3) return name.trim().length > 0 && whatsapp.trim().length >= 10;
    return false;
  };

  const handleSubmit = () => {
    const text = `Olá! Gostaria de solicitar um manto exclusivo:%0A-Nome: ${encodeURIComponent(name)}%0A-Time: ${encodeURIComponent(team)}%0A-Temporada: ${encodeURIComponent(season)}%0A-Tamanho: ${encodeURIComponent(size)}`;
    const url = `https://wa.me/5581985402833?text=${text}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        style={{ background: "hsla(220, 60%, 4%, 0.85)", backdropFilter: "blur(12px)" }}
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg rounded-2xl glass-strong border border-primary/20 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-primary/10">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-foreground">Solicitar Manto Exclusivo</h3>
            </div>
            <button onClick={handleClose} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display font-bold text-lg text-foreground mb-2">Solicitação Enviada!</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Entraremos em contato pelo WhatsApp informado para confirmar disponibilidade e valores.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all"
              >
                Fechar
              </button>
            </div>
          ) : (
            <>
              {/* Progress */}
              <div className="flex gap-1 p-5 pb-0">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      i <= step ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <div className="p-5">
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">
                  Passo {step + 1} de {steps.length}
                </p>
                <h4 className="font-display font-bold text-foreground mb-4">{steps[step].label}</h4>

                {step === 0 && (
                  <input
                    type="text"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    placeholder={steps[0].placeholder}
                    maxLength={50}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                )}

                {step === 1 && (
                  <input
                    type="text"
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                    placeholder={steps[1].placeholder}
                    maxLength={30}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                )}

                {step === 2 && (
                  <div className="flex gap-3 flex-wrap">
                    {steps[2].options?.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`px-5 py-3 rounded-lg border font-semibold text-sm transition-all ${
                          size === s
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      maxLength={50}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value.replace(/[^\d+\-() ]/g, ""))}
                      placeholder="WhatsApp (com DDD)"
                      maxLength={20}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between p-5 pt-0">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Voltar
                </button>

                {step < 3 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canNext()}
                    className="flex items-center gap-1 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Próximo <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canNext()}
                    className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Enviar Solicitação
                  </button>
                )}
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExclusiveRequestModal;
