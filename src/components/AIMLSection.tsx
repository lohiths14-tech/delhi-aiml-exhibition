import React, { useState } from 'react';
import { Cpu, QrCode, Compass, Brain, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';

export const AIMLSection: React.FC = () => {
  const [selectedDishes, setSelectedDishes] = useState<string[]>(['dahi-puri', 'sharbat', 'fruit-chaat']);

  const flowSteps = [
    { step: '01', icon: <QrCode className="w-6 h-6 text-delhi-saffron-400" />, label: 'SCAN', desc: 'Scan table QR on physical stall' },
    { step: '02', icon: <Compass className="w-6 h-6 text-delhi-gold-400" />, label: 'EXPLORE', desc: 'Tour Delhi monuments & history' },
    { step: '03', icon: <Brain className="w-6 h-6 text-purple-400" />, label: 'LEARN', desc: 'Take interactive culture quiz' },
    { step: '04', icon: <Utensils className="w-6 h-6 text-emerald-400" />, label: 'TASTE', desc: 'Savour 3 curated no-fire dishes' },
  ];

  const toggleDishSelect = (id: string) => {
    if (selectedDishes.includes(id)) {
      if (selectedDishes.length > 1) {
        setSelectedDishes(selectedDishes.filter((d) => d !== id));
      }
    } else {
      setSelectedDishes([...selectedDishes, id]);
    }
  };

  // Computational balance metrics calculation
  const totalBalance = Math.min(100, Math.round((selectedDishes.length / 3) * 98));

  return (
    <section id="aiml-touch" className="py-20 px-4 sm:px-6 lg:px-8 bg-jaali relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu size={13} />
            <span>Digital Experience Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            💡 THE AIML TOUCH
          </h2>
          <p className="text-base sm:text-lg text-delhi-saffron-400 font-medium max-w-xl mx-auto italic">
            “We don&apos;t just represent Delhi with food — we connect culture with technology.”
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-delhi-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Narrative Box */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-delhi-gold-500/30 text-center space-y-4">
          <p className="text-sm sm:text-base text-delhi-cream-100 max-w-2xl mx-auto leading-relaxed">
            As students of Artificial Intelligence & Machine Learning at PESITM, we engineered this mobile-first digital companion to bridge the gap between physical culinary presentation and immersive interactive storytelling.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-delhi-dark-900 border border-delhi-gold-500/30 text-xs font-mono text-delhi-gold-300">
            <Sparkles size={14} className="text-delhi-saffron-400" />
            <span>Food → Culture → History → Places → Technology</span>
          </div>
        </div>

        {/* The 4-Step Visual Flow */}
        <div className="space-y-4">
          <h3 className="text-center text-xs font-mono uppercase tracking-widest text-delhi-cream-300">
            Visitor Digital Journey Flow
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flowSteps.map((s, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-delhi-gold-500/40 transition-all flex flex-col justify-between group shadow-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-delhi-dark-900 border border-white/10 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-delhi-gold-500/80">
                    STEP {s.step}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-heading font-black text-white group-hover:text-delhi-gold-300 transition-colors">
                    {s.label}
                  </h4>
                  <p className="text-xs text-delhi-cream-300/80 mt-1 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Computational Palate Harmony & AI Optimization Simulator */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/30 space-y-6 bg-gradient-to-b from-purple-950/20 to-delhi-dark-900/80">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                <Brain size={18} className="text-purple-400" />
                <span>AIML Sensory Palate Optimizer</span>
              </h4>
              <p className="text-xs text-delhi-cream-300/80 mt-0.5">
                Simulating multi-objective sensory optimization across our 3 dishes.
              </p>
            </div>
            <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold">
              Palate Harmony Score: {totalBalance}%
            </div>
          </div>

          {/* Dish Toggle Selector */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-delhi-gold-400 uppercase tracking-wider">
              1. Multi-Dish Harmony Matrix
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'dahi-puri', name: '🌶️ Dahi Puri', profile: 'Creamy • Savoury • Saunth Tang' },
                { id: 'sharbat', name: '❤️🌹 Mohabbat Sharbat', profile: 'Sweet • Cooling Rose • Crisp Melon' },
                { id: 'fruit-chaat', name: '🍎🌶️ Fruit Chaat', profile: 'Fresh Fruit • Zesty Lemon • Cumin Zing' },
              ].map((dish) => {
                const active = selectedDishes.includes(dish.id);
                return (
                  <button
                    key={dish.id}
                    onClick={() => toggleDishSelect(dish.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all text-xs ${
                      active
                        ? 'bg-purple-900/40 border-purple-400 text-white shadow-card'
                        : 'bg-delhi-dark-900/60 border-white/5 text-delhi-cream-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{dish.name}</span>
                      <CheckCircle2 size={14} className={active ? 'text-purple-400' : 'opacity-20'} />
                    </div>
                    <p className="text-[11px] text-delhi-cream-300/80 mt-1 font-mono">{dish.profile}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Real-Time Sensory Optimization Feedback */}
          <div className="p-4 rounded-2xl bg-delhi-dark-950/90 border border-purple-500/20 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-purple-300 font-bold flex items-center gap-1.5">
                <Cpu size={14} />
                <span>AI Tasting Order Recommendation:</span>
              </span>
              <span className="font-mono text-delhi-gold-400 font-bold">
                {selectedDishes.length === 3 ? 'Optimal 3-Stage Cycle' : `${selectedDishes.length} Selected`}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-delhi-dark-900 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-delhi-saffron-400 font-bold">STAGE 1 • APPETIZER</span>
                <p className="font-bold text-white">🍎 Delhi Fruit Chaat</p>
                <p className="text-[11px] text-delhi-cream-400">Awakens salivary receptors with lemon zest & rock salt.</p>
              </div>
              <div className="p-2.5 rounded-xl bg-delhi-dark-900 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-delhi-gold-400 font-bold">STAGE 2 • MAIN BITE</span>
                <p className="font-bold text-white">🌶️ Dahi Puri</p>
                <p className="text-[11px] text-delhi-cream-400">Provides complex crunch, savory depth, and creamy curd.</p>
              </div>
              <div className="p-2.5 rounded-xl bg-delhi-dark-900 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-rose-400 font-bold">STAGE 3 • PALATE COOLER</span>
                <p className="font-bold text-white">❤️🌹 Mohabbat Sharbat</p>
                <p className="text-[11px] text-delhi-cream-400">Extinguishes spice heat with cooling rose milk & crisp watermelon.</p>
              </div>
            </div>
          </div>

          {/* 2. Interactive AI Neural Palate Customizer */}
          <div className="p-4 sm:p-5 rounded-2xl bg-delhi-dark-900/90 border border-delhi-gold-500/25 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-delhi-gold-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={14} className="text-delhi-saffron-400" />
                <span>2. Customize Your Palate (Live AI Match)</span>
              </span>
              <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                k-NN Flavor Classification
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-delhi-cream-300">
                  <span>🍬 Sweet Preference:</span>
                  <span className="text-delhi-gold-400 font-bold">High</span>
                </div>
                <div className="w-full bg-delhi-dark-950 rounded-full h-2 overflow-hidden border border-white/10">
                  <div className="bg-gradient-to-r from-rose-500 to-delhi-gold-400 h-full rounded-full w-[85%]" />
                </div>
                <p className="text-[10px] text-delhi-cream-400 font-mono">Matched: Mohabbat Sharbat (98%)</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-delhi-cream-300">
                  <span>🌶️ Spice & Tanginess:</span>
                  <span className="text-delhi-saffron-400 font-bold">Medium-High</span>
                </div>
                <div className="w-full bg-delhi-dark-950 rounded-full h-2 overflow-hidden border border-white/10">
                  <div className="bg-gradient-to-r from-delhi-gold-500 to-delhi-saffron-500 h-full rounded-full w-[78%]" />
                </div>
                <p className="text-[10px] text-delhi-cream-400 font-mono">Matched: Dahi Puri & Chaat (94%)</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-delhi-cream-300">
                  <span>🧊 Hydration & Cooling:</span>
                  <span className="text-emerald-400 font-bold">Max (100%)</span>
                </div>
                <div className="w-full bg-delhi-dark-950 rounded-full h-2 overflow-hidden border border-white/10">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-[96%]" />
                </div>
                <p className="text-[10px] text-delhi-cream-400 font-mono">Matched: Watermelon Infusion (99%)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Department Footer Badge */}
        <div className="text-center pt-2">
          <p className="text-xs font-mono text-delhi-cream-300/70 tracking-wider uppercase">
            Designed with algorithmic precision by students of the
          </p>
          <p className="text-sm font-heading font-bold text-delhi-gold-300 mt-0.5">
            Department of Artificial Intelligence & Machine Learning • PESITM Shivamogga
          </p>
        </div>
      </div>
    </section>
  );
};
