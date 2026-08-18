import React from 'react';
import { DELHI_STREET_FOODS } from '../data/delhiData';
import { Utensils, Flame, MapPin, Sparkles } from 'lucide-react';

export const StreetFoodSection: React.FC = () => {
  return (
    <section id="street-food" className="py-20 px-4 sm:px-6 lg:px-8 bg-jaali relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delhi-maroon-900/60 border border-delhi-gold-500/30 text-delhi-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Utensils size={13} />
            <span>Culinary Capital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            🍽️ Taste the Streets of Delhi
          </h2>
          <p className="text-sm sm:text-base text-delhi-cream-200/80 max-w-xl mx-auto">
            From the sizzling tawas of Chandni Chowk to sweet jalebis and royal summer coolers.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-delhi-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Street Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELHI_STREET_FOODS.map((food) => (
            <div
              key={food.id}
              className={`glass-card glass-card-hover rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group ${
                food.isOurSpecial
                  ? 'border-delhi-gold-500/50 bg-gradient-to-b from-delhi-maroon-900/40 to-delhi-dark-900/80 shadow-gold'
                  : 'border-white/10'
              }`}
            >
              <div>
                {/* Food Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-delhi-dark-950 via-delhi-dark-950/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    {food.isOurSpecial && (
                      <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-delhi-saffron-600 to-delhi-maroon-700 text-white text-[11px] font-semibold flex items-center gap-1 shadow-gold">
                        <Sparkles size={11} /> Competition Special
                      </span>
                    )}
                  </div>

                  {/* Spicy Meter */}
                  <div className="absolute top-3 right-3 bg-delhi-dark-900/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-0.5">
                    <Flame size={12} className={food.spicyLevel > 2 ? 'text-delhi-saffron-500' : 'text-delhi-gold-400'} />
                    <span className="text-[10px] font-mono font-bold text-white">
                      {food.spicyLevel}/5 Spice
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs font-hindi text-delhi-saffron-400 font-semibold block">
                      {food.hindiName}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      {food.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-delhi-gold-400 font-medium italic">
                    “{food.tagline}”
                  </p>

                  <p className="text-xs sm:text-sm text-delhi-cream-200/85 leading-relaxed line-clamp-3">
                    {food.description}
                  </p>

                  {/* Flavor Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {food.flavorProfile.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-delhi-dark-800 border border-white/5 text-[10px] font-medium text-delhi-cream-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Location */}
              <div className="px-5 py-3 bg-delhi-dark-900/80 border-t border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-delhi-cream-400 truncate">
                  <MapPin size={12} className="text-delhi-saffron-500 shrink-0" />
                  <span className="truncate">{food.famousSpot}</span>
                </div>
                {food.isOurSpecial && (
                  <a
                    href="#our-menu"
                    className="text-delhi-gold-400 hover:text-delhi-gold-300 font-semibold shrink-0 ml-2"
                  >
                    View Recipe →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
