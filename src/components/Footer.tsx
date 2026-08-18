import React from 'react';
import { ArrowUp, Heart, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-delhi-dark-950 border-t-2 border-delhi-gold-500/30 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Arch Top Mask */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-delhi-gold-400 to-transparent" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Memorable Closing Banner */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-delhi-maroon-900 to-delhi-dark-800 border border-delhi-gold-500/40 text-delhi-gold-300 text-xs font-semibold uppercase tracking-wider shadow-gold">
            <Heart size={14} className="text-rose-500 fill-rose-500" />
            <span>Dilli Dilwalon Ki</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">
            ❤️ DILLI DILWALON KI
          </h2>

          <p className="text-base sm:text-lg text-delhi-cream-100/90 leading-relaxed italic max-w-2xl mx-auto">
            “From the streets of Chandni Chowk to the heart of our college — experience Delhi through its flavours, culture and stories.”
          </p>

          {/* 3 Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
            <span className="px-4 py-2 rounded-full bg-delhi-dark-900 border border-delhi-gold-500/30 text-xs sm:text-sm font-heading font-bold text-delhi-gold-300 flex items-center gap-2">
              <span>🌶️</span>
              <span>Taste Delhi</span>
            </span>
            <span className="px-4 py-2 rounded-full bg-delhi-dark-900 border border-delhi-gold-500/30 text-xs sm:text-sm font-heading font-bold text-delhi-gold-300 flex items-center gap-2">
              <span>🏛️</span>
              <span>Explore Delhi</span>
            </span>
            <span className="px-4 py-2 rounded-full bg-delhi-dark-900 border border-delhi-gold-500/30 text-xs sm:text-sm font-heading font-bold text-delhi-gold-300 flex items-center gap-2">
              <span>❤️</span>
              <span>Feel Delhi</span>
            </span>
          </div>

          {/* Back to Top CTA */}
          <div className="pt-4">
            <button
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-delhi-saffron-600 via-delhi-gold-500 to-delhi-maroon-700 hover:from-delhi-saffron-500 hover:to-delhi-maroon-600 text-white font-heading font-bold text-xs sm:text-sm tracking-wider shadow-gold-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mx-auto border border-delhi-gold-300/40"
            >
              <span>EXPLORE AGAIN</span>
              <ArrowUp size={16} className="animate-bounce" />
            </button>
          </div>
        </div>

        {/* Detailed Branding & Institutional Details */}
        <div className="pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Brand Column */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-xl">🇮🇳</span>
              <span className="text-xl font-heading font-bold text-white tracking-wider">
                DELHI
              </span>
            </div>
            <p className="text-xs text-delhi-gold-400 font-heading font-semibold">
              The Heart of India
            </p>
            <p className="text-[11px] font-hindi text-delhi-saffron-400">
              स्वाद • संस्कृति • मोहब्बत
            </p>
          </div>

          {/* College & Department Column */}
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs text-delhi-cream-200 font-semibold">
              <GraduationCap size={16} className="text-delhi-gold-400" />
              <span>PES Institute of Technology & Management, Shivamogga</span>
            </div>
            <p className="text-xs text-delhi-gold-300 font-mono">
              Department of Artificial Intelligence & Machine Learning
            </p>
            <p className="text-[11px] text-delhi-cream-400">
              Cooking Without Fire Competition 2026
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-xs text-delhi-cream-300">
            <a href="#history" className="hover:text-delhi-gold-300 transition-colors">History</a>
            <span>•</span>
            <a href="#places" className="hover:text-delhi-gold-300 transition-colors">Places</a>
            <span>•</span>
            <a href="#our-menu" className="hover:text-delhi-gold-300 transition-colors">Our Menu</a>
            <span>•</span>
            <a href="#quiz" className="hover:text-delhi-gold-300 transition-colors">Quiz</a>
            <span>•</span>
            <a href="#team" className="hover:text-delhi-gold-300 transition-colors">Team</a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-4 border-t border-white/5 text-center">
          <p className="text-[11px] text-delhi-cream-400/60 font-mono">
            Crafted for presentation by AIML Department • Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
