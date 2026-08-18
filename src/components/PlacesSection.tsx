import React, { useState } from 'react';
import { FAMOUS_PLACES } from '../data/delhiData';
import { MapPin, Landmark, Train, UtensilsCrossed, ChevronRight } from 'lucide-react';

export const PlacesSection: React.FC = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>(FAMOUS_PLACES[0].id);

  const currentPlace = FAMOUS_PLACES.find((p) => p.id === selectedPlaceId) || FAMOUS_PLACES[0];

  return (
    <section id="places" className="py-20 px-4 sm:px-6 lg:px-8 bg-delhi-dark-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delhi-maroon-900/60 border border-delhi-gold-500/30 text-delhi-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Landmark size={13} />
            <span>Landmarks & Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            📍 Explore Iconic Delhi
          </h2>
          <p className="text-sm sm:text-base text-delhi-cream-200/80 max-w-xl mx-auto">
            From imperial Mughal strongholds to timeless victory minarets and 300-year-old culinary bazaars.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-delhi-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Place Selector Pills (Mobile Friendly) */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {FAMOUS_PLACES.map((place) => {
            const isSelected = place.id === selectedPlaceId;
            return (
              <button
                key={place.id}
                onClick={() => setSelectedPlaceId(place.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 focus:outline-none ${
                  isSelected
                    ? 'bg-gradient-to-r from-delhi-saffron-600 to-delhi-maroon-700 text-white shadow-gold border border-delhi-gold-400/50 scale-105'
                    : 'bg-delhi-dark-800 text-delhi-cream-300 hover:text-delhi-gold-300 border border-white/10 hover:bg-delhi-dark-800/80'
                }`}
              >
                <MapPin size={14} className={isSelected ? 'text-delhi-gold-300' : 'text-delhi-cream-400'} />
                <span>{place.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Place Feature Showcase */}
        <div className="glass-card rounded-3xl p-5 sm:p-8 border border-delhi-gold-500/30 shadow-royal grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden group shadow-card aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[380px]">
            <img
              src={currentPlace.image}
              alt={currentPlace.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-delhi-dark-950 via-delhi-dark-950/20 to-transparent" />
            
            <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
              {currentPlace.tags.map((t, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-full bg-delhi-dark-900/80 backdrop-blur-md border border-delhi-gold-500/30 text-[10px] font-mono text-delhi-gold-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="text-xs font-hindi text-delhi-saffron-400 font-semibold block">
                  {currentPlace.hindiName}
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white drop-shadow-md">
                  {currentPlace.name}
                </h3>
              </div>
              <span className="text-xs text-delhi-cream-200 font-mono bg-delhi-dark-900/90 px-2.5 py-1 rounded-lg border border-white/10">
                {currentPlace.period}
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-delhi-gold-400 uppercase tracking-wider mb-1">
                <span>Commissioned By:</span>
                <span className="text-white font-semibold">{currentPlace.builtBy}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {currentPlace.name}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-delhi-cream-200/90 leading-relaxed">
              {currentPlace.description}
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-delhi-dark-800/80 border border-white/10 flex items-start gap-2.5">
                <Train size={16} className="text-delhi-saffron-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase font-mono text-delhi-cream-400 block">Nearest Metro</span>
                  <span className="text-xs font-semibold text-white">{currentPlace.metroStation}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-delhi-maroon-900/40 border border-delhi-gold-500/20 flex items-start gap-2.5">
                <UtensilsCrossed size={16} className="text-delhi-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase font-mono text-delhi-gold-300 block">Food Heritage</span>
                  <span className="text-xs text-delhi-cream-100 line-clamp-2">{currentPlace.foodConnection}</span>
                </div>
              </div>
            </div>

            {/* Food Link CTA */}
            <div className="pt-2">
              <a
                href="#our-menu"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-delhi-saffron-400 hover:text-delhi-gold-300 transition-colors"
              >
                <span>Taste the food inspired by Old Delhi heritage</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* All 5 Places Quick Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-4">
          {FAMOUS_PLACES.map((place) => {
            const isSelected = place.id === selectedPlaceId;
            return (
              <div
                key={place.id}
                onClick={() => setSelectedPlaceId(place.id)}
                className={`cursor-pointer rounded-2xl p-3 text-left transition-all border ${
                  isSelected
                    ? 'bg-delhi-maroon-900/60 border-delhi-gold-500 shadow-gold'
                    : 'bg-delhi-dark-900/60 border-white/10 hover:border-delhi-gold-500/40'
                }`}
              >
                <div className="w-full h-20 rounded-xl overflow-hidden mb-2">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xs font-heading font-bold text-white truncate">
                  {place.name}
                </h4>
                <p className="text-[11px] text-delhi-saffron-400 font-mono truncate">
                  {place.period}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
