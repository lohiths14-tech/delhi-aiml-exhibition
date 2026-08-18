import React from 'react';
import { ArrowDown, Sparkles, MapPin, Award, Heart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-jaali"
    >
      {/* Background Image Overlay with Depth */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_skyline.jpg"
          alt="Delhi Heritage Skyline showing India Gate and Red Fort"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out filter contrast-110 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-delhi-dark-950 via-delhi-dark-900/80 to-delhi-maroon-900/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-delhi-dark-950/70 to-delhi-dark-950" />
      </div>

      {/* Mughal Arch Decorative Framing Elements */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl h-full pointer-events-none opacity-20 border-t-2 border-x-2 border-delhi-gold-500 rounded-t-[140px] md:rounded-t-[220px]" />

      {/* Floating Cultural Motifs */}
      <div className="absolute top-1/4 left-4 md:left-12 opacity-30 animate-float hidden sm:block pointer-events-none">
        <div className="p-3 rounded-2xl bg-delhi-gold-500/10 border border-delhi-gold-500/30 text-delhi-gold-400 text-xs backdrop-blur-sm">
          🕌 Jama Masjid • 1656
        </div>
      </div>
      <div className="absolute bottom-1/4 right-4 md:right-12 opacity-30 animate-float [animation-delay:2s] hidden sm:block pointer-events-none">
        <div className="p-3 rounded-2xl bg-delhi-saffron-500/10 border border-delhi-saffron-500/30 text-delhi-saffron-400 text-xs backdrop-blur-sm">
          🏰 Red Fort • 1638
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Top Department Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-delhi-maroon-900/80 to-delhi-dark-800/80 border border-delhi-gold-500/40 backdrop-blur-md shadow-gold text-delhi-gold-300 text-xs sm:text-sm font-medium">
          <Sparkles size={14} className="text-delhi-saffron-500 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Created with ❤️ by AIML Students</span>
          <span className="w-1 h-1 rounded-full bg-delhi-gold-400" />
          <span className="text-delhi-cream-200 font-semibold">PESITM Shivamogga</span>
        </div>

        {/* Grand Title with Flag & Devanagari touch */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl sm:text-4xl md:text-5xl">🇮🇳</span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-delhi-cream-100 to-delhi-gold-400 drop-shadow-2xl">
              DELHI
            </h1>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-delhi-gold-400 tracking-wide">
            The Heart of India
          </p>
        </div>

        {/* Hindi Tagline */}
        <div className="py-2">
          <p className="text-base sm:text-lg md:text-xl font-hindi tracking-wider text-delhi-saffron-500 font-medium">
            “स्वाद • संस्कृति • मोहब्बत”
          </p>
          <p className="text-xs sm:text-sm text-delhi-gold-500/80 font-mono tracking-widest uppercase mt-0.5">
            Swaad • Sanskriti • Mohabbat
          </p>
        </div>

        {/* Narrative Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-delhi-cream-200/90 leading-relaxed font-light px-2">
          Explore the history, culture, iconic places and unforgettable street food of Delhi.
          Presented by the Department of Artificial Intelligence & Machine Learning for Cooking Without Fire.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-delhi-dark-800/80 border border-white/10 text-xs text-delhi-cream-200">
            <MapPin size={12} className="text-delhi-saffron-500" /> 5 Historic Monuments
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-delhi-dark-800/80 border border-white/10 text-xs text-delhi-cream-200">
            <Award size={12} className="text-delhi-gold-400" /> 3 No-Fire Delicacies
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-delhi-dark-800/80 border border-white/10 text-xs text-delhi-cream-200">
            <Heart size={12} className="text-rose-400" /> 100% Student-Crafted
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#our-menu"
            id="hero-menu-cta-btn"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-delhi-saffron-600 via-delhi-saffron-500 to-delhi-maroon-700 hover:from-delhi-saffron-500 hover:to-delhi-maroon-600 text-white font-bold text-sm md:text-base tracking-wide shadow-gold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border border-delhi-gold-300/40"
          >
            <span>EXPLORE OUR SPECIAL MENU</span>
            <span className="text-lg">🍽️</span>
          </a>

          <a
            href="#history"
            id="hero-explore-btn"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-delhi-dark-800/90 hover:bg-delhi-dark-800 text-delhi-gold-300 hover:text-white font-semibold text-sm md:text-base tracking-wide transition-all duration-300 hover:border-delhi-gold-400/60 flex items-center justify-center gap-2 border border-delhi-gold-500/30"
          >
            <span>EXPLORE DELHI</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>

      {/* Subtle Bottom Fade Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-delhi-dark-950 to-transparent pointer-events-none" />
    </section>
  );
};
