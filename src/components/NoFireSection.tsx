import React from 'react';
import { Flame, Ban, Leaf, ShieldCheck, Apple, Droplets, CheckCircle } from 'lucide-react';

export const NoFireSection: React.FC = () => {
  const principles = [
    {
      icon: (
        <div className="relative">
          <Flame className="w-8 h-8 text-rose-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-0.5 bg-rose-400 rotate-45 rounded-full" />
          </div>
        </div>
      ),
      title: '100% NO FIRE',
      subtitle: 'Zero Thermal Energy',
      desc: 'No open flames, lighters, or heating elements utilized.',
    },
    {
      icon: <Ban className="w-8 h-8 text-amber-500" />,
      title: 'NO STOVE',
      subtitle: 'Zero Appliance Setup',
      desc: 'No induction, gas burners, or electrical heaters on the table.',
    },
    {
      icon: <Droplets className="w-8 h-8 text-cyan-400" />,
      title: 'NO FRYING',
      subtitle: 'Heart-Healthy Assembly',
      desc: 'Zero oil heating or live deep frying at the venue.',
    },
    {
      icon: <Apple className="w-8 h-8 text-emerald-400" />,
      title: 'FRESH INGREDIENTS',
      subtitle: 'Farm & Orchard Pure',
      desc: 'Crisp seasonal fruits, dairy curd, watermelon, and fresh herbs.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-300" />,
      title: 'HYGIENIC PREPARATION',
      subtitle: 'Food-Grade Certified',
      desc: 'Sanitized prep, sterile gloves, chilled dairy, and sealed jars.',
    },
  ];

  return (
    <section id="no-fire" className="py-20 px-4 sm:px-6 lg:px-8 bg-delhi-dark-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-jaali-subtle opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Flame size={13} className="text-rose-400" />
            <span>Safety & Culinary Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            🔥❌ COOKING WITHOUT FIRE
          </h2>
          <p className="text-sm sm:text-base text-delhi-cream-200/80 max-w-xl mx-auto">
            Assembled live with precision, hygiene, and authentic Delhi street food authenticity.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-delhi-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 text-center flex flex-col items-center justify-between border border-delhi-gold-500/20 hover:border-delhi-gold-400/50 hover:bg-delhi-maroon-900/40 transition-all duration-300 group shadow-card"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-delhi-dark-900 border border-white/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-gold">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-heading font-black text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-mono text-delhi-gold-400 font-semibold mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs text-delhi-cream-300/80 leading-relaxed mt-3 pt-3 border-t border-white/5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-delhi-maroon-950 via-delhi-dark-900 to-delhi-maroon-950 border border-delhi-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-heading font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Leaf size={18} className="text-emerald-400" />
              <span>Zero Thermal Footprint • Maximum Nutrient Retention</span>
            </h4>
            <p className="text-xs sm:text-sm text-delhi-cream-200/80">
              Our 3 Delhi dishes are prepared through fresh dicing, spice blending, emulsion whisking, and instant cold assembly.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-delhi-saffron-400 bg-delhi-dark-800 px-4 py-2 rounded-xl border border-white/10">
            <CheckCircle size={14} className="text-emerald-400" />
            <span>100% Competition Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};
