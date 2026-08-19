import React from 'react';
import { OUR_COMPETITION_MENU } from '../data/delhiData';
import { Heart, Sparkles, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';

export const OurMenuSection: React.FC = () => {
  return (
    <section id="our-menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-delhi-dark-950 relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-delhi-maroon-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-delhi-saffron-600/30 to-delhi-maroon-800/40 border border-delhi-gold-500/40 text-delhi-gold-300 text-xs font-semibold uppercase tracking-wider shadow-gold">
            <Heart size={13} className="text-rose-400 fill-rose-400" />
            <span>👑 Curated by Team AIML Dilli Darbar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">
            ❤️ OUR DELHI SPECIAL
          </h2>
          <p className="text-sm sm:text-base text-delhi-cream-200/90 max-w-2xl mx-auto">
            Crafted with passion by <strong className="text-delhi-gold-300 font-semibold">Team AIML Dilli Darbar</strong> — three authentic delicacies prepared with zero fire, zero stoves, and 100% fresh ingredients.
          </p>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-delhi-gold-400 to-transparent mx-auto mt-3" />
        </div>

        {/* 3 Featured Dishes Stack / Grid */}
        <div className="space-y-12">
          {OUR_COMPETITION_MENU.map((dish, index) => (
            <div
              key={dish.id}
              className="glass-card rounded-3xl overflow-hidden border-2 border-delhi-gold-500/30 shadow-royal hover:border-delhi-gold-500/60 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8"
            >
              {/* Dish Visual Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3] group">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-delhi-dark-950 via-transparent to-transparent" />
                  
                  {/* Icon & Index badge */}
                  <div className="absolute top-3 left-3 bg-delhi-dark-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-delhi-gold-500/40 text-xs font-bold text-delhi-gold-300 flex items-center gap-1.5">
                    <span>{dish.icon}</span>
                    <span>DISH 0{index + 1}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs font-hindi text-delhi-saffron-400 font-semibold block">
                      {dish.hindiName}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      {dish.name}
                    </h3>
                  </div>
                </div>

                {/* Cultural Note Box */}
                <div className="p-4 rounded-2xl bg-delhi-maroon-900/40 border border-delhi-gold-500/20 space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-delhi-gold-400 font-semibold flex items-center gap-1">
                    <Sparkles size={12} /> Delhi Cultural Heritage
                  </span>
                  <p className="text-xs text-delhi-cream-200/90 leading-relaxed italic">
                    {dish.culturalNote}
                  </p>
                </div>

                {/* No-Fire Certification Pill */}
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-delhi-green-900/40 border border-emerald-500/30 text-emerald-300 text-xs">
                  <ShieldCheck size={16} className="shrink-0" />
                  <span className="font-medium text-[11px]">{dish.noFireHighlight}</span>
                </div>
              </div>

              {/* Dish Ingredients & Prep Column */}
              <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
                <div>
                  {/* Heading & Tagline */}
                  <div className="border-b border-white/10 pb-3">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {dish.tasteTags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full bg-delhi-saffron-500/15 border border-delhi-saffron-500/30 text-delhi-saffron-300 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-delhi-gold-400 font-medium mt-0.5">
                      {dish.tagline}
                    </p>
                  </div>

                  {/* Core Description */}
                  <p className="text-sm sm:text-base text-delhi-cream-100 leading-relaxed pt-3 font-normal">
                    {dish.description}
                  </p>

                  {/* Complete Ingredients List */}
                  <div className="pt-4 space-y-2">
                    <span className="text-xs uppercase font-mono tracking-wider text-delhi-gold-400 font-bold flex items-center gap-1.5">
                      <Layers size={13} /> Fresh Ingredients Included:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dish.ingredients.map((ing, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2 rounded-xl bg-delhi-dark-900/80 border border-white/5 text-xs text-delhi-cream-200"
                        >
                          <CheckCircle2 size={13} className="text-delhi-gold-400 shrink-0" />
                          <span className="font-medium">{ing}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Assembly Flow */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[11px] uppercase font-mono tracking-wider text-delhi-cream-400 font-semibold block">
                    No-Fire Live Assembly:
                  </span>
                  <div className="space-y-1 text-xs text-delhi-cream-300/90">
                    {dish.prepMethod.map((step, sIdx) => (
                      <p key={sIdx} className="leading-relaxed">
                        {step}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
