import React, { useState } from 'react';
import { OUR_COMPETITION_MENU } from '../data/delhiData';
import { Sparkles, SlidersHorizontal, CheckSquare, Square, Info } from 'lucide-react';

export const DishExplorer: React.FC = () => {
  const [selectedDishId, setSelectedDishId] = useState<string>(OUR_COMPETITION_MENU[0].id);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});

  const activeDish = OUR_COMPETITION_MENU.find((d) => d.id === selectedDishId) || OUR_COMPETITION_MENU[0];

  const toggleIngredient = (ing: string) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [ing]: !prev[ing],
    }));
  };

  const flavorMetrics = [
    { key: 'spicy', label: 'Spicy', icon: '🌶️', color: 'from-orange-500 to-red-600', score: activeDish.flavorScores.spicy },
    { key: 'tangy', label: 'Tangy', icon: '🍋', color: 'from-yellow-400 to-amber-500', score: activeDish.flavorScores.tangy },
    { key: 'sweet', label: 'Sweet', icon: '❤️', color: 'from-pink-500 to-rose-600', score: activeDish.flavorScores.sweet },
    { key: 'creamy', label: 'Creamy', icon: '🥛', color: 'from-blue-200 to-indigo-300', score: activeDish.flavorScores.creamy },
    { key: 'fresh', label: 'Fresh', icon: '🍎', color: 'from-emerald-400 to-teal-500', score: activeDish.flavorScores.fresh },
  ];

  return (
    <section id="dish-explorer" className="py-20 px-4 sm:px-6 lg:px-8 bg-jaali relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delhi-maroon-900/60 border border-delhi-gold-500/30 text-delhi-gold-400 text-xs font-semibold uppercase tracking-wider">
            <SlidersHorizontal size={13} />
            <span>Interactive Food Selector</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            ✨ Dish Flavor & Ingredient Explorer
          </h2>
          <p className="text-sm sm:text-base text-delhi-cream-200/80 max-w-xl mx-auto">
            Tap a dish to inspect its taste metrics, live ingredient composition, and authentic Delhi connection.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-delhi-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Interactive Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {OUR_COMPETITION_MENU.map((dish) => {
            const isSelected = dish.id === selectedDishId;
            return (
              <button
                key={dish.id}
                onClick={() => setSelectedDishId(dish.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 shadow-card focus:outline-none ${
                  isSelected
                    ? 'bg-gradient-to-r from-delhi-saffron-600 to-delhi-maroon-700 text-white border-2 border-delhi-gold-400 scale-105 shadow-gold'
                    : 'bg-delhi-dark-800 text-delhi-cream-200 hover:text-white hover:bg-delhi-dark-800/90 border border-white/10'
                }`}
              >
                <span className="text-lg">{dish.icon}</span>
                <span>{dish.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Dish Interactive Console */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-delhi-gold-500/30 shadow-royal grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image & Delhi Connection */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <img
                src={activeDish.image}
                alt={activeDish.name}
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-delhi-dark-950 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs font-hindi text-delhi-saffron-400 font-semibold block">
                  {activeDish.hindiName}
                </span>
                <h3 className="text-2xl font-heading font-bold text-white">
                  {activeDish.name}
                </h3>
              </div>
            </div>

            {/* Delhi Connection Card */}
            <div className="p-4 rounded-2xl bg-delhi-dark-900/90 border border-delhi-gold-500/20 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-mono text-delhi-gold-400 uppercase font-semibold">
                <Info size={14} className="text-delhi-saffron-500" />
                <span>Delhi Culinary Connection</span>
              </div>
              <p className="text-xs text-delhi-cream-200/90 leading-relaxed">
                {activeDish.culturalNote}
              </p>
            </div>
          </div>

          {/* Right Column: Flavor Profile Radar & Ingredient Inspector */}
          <div className="lg:col-span-7 space-y-6">
            {/* Dynamic Flavor Profile Meters */}
            <div className="space-y-3.5 p-5 rounded-2xl bg-delhi-dark-900/70 border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-delhi-gold-400 font-bold flex items-center gap-1.5">
                  <Sparkles size={13} /> Flavor Profile Analysis
                </span>
                <span className="text-[11px] text-delhi-cream-400 font-mono">
                  Scale: 0 - 100%
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                {flavorMetrics.map((f) => (
                  <div key={f.key} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="flex items-center gap-1.5 text-delhi-cream-100">
                        <span>{f.icon}</span>
                        <span>{f.label}</span>
                      </span>
                      <span className="font-mono text-delhi-gold-300 font-semibold">
                        {f.score}%
                      </span>
                    </div>
                    {/* Meter Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-delhi-dark-950 overflow-hidden border border-white/5">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${f.color} transition-all duration-700 ease-out`}
                        style={{ width: `${f.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Ingredient Inspector (Judges can click to verify) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-delhi-gold-400 font-bold">
                  Interactive Ingredient Checklist ({activeDish.ingredients.length})
                </span>
                <span className="text-[11px] text-delhi-cream-400 italic">
                  Tap to verify
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeDish.ingredients.map((ing) => {
                  const isChecked = !!checkedIngredients[ing];
                  return (
                    <button
                      key={ing}
                      onClick={() => toggleIngredient(ing)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl text-left text-xs transition-all border ${
                        isChecked
                          ? 'bg-delhi-green-900/40 border-emerald-500/50 text-emerald-200'
                          : 'bg-delhi-dark-800/80 border-white/10 text-delhi-cream-200 hover:border-delhi-gold-500/30'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare size={14} className="text-emerald-400 shrink-0" />
                      ) : (
                        <Square size={14} className="text-delhi-cream-400 shrink-0" />
                      )}
                      <span className={isChecked ? 'line-through opacity-80' : 'font-medium'}>
                        {ing}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
