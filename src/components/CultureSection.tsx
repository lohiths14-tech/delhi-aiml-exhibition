import React from 'react';
import { DELHI_CULTURE } from '../data/delhiData';
import { Sparkles, Quote, HeartHandshake, CheckCircle } from 'lucide-react';

export const CultureSection: React.FC = () => {
  return (
    <section id="culture" className="py-20 px-4 sm:px-6 lg:px-8 bg-jaali relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delhi-maroon-900/60 border border-delhi-gold-500/30 text-delhi-gold-400 text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake size={13} />
            <span>Ganga-Jamuni Tehzeeb</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            🎭 The Culture of Delhi
          </h2>
          <p className="text-sm sm:text-base text-delhi-cream-200/80 max-w-2xl mx-auto">
            A centuries-old synthesis of royal Mughal traditions, Punjabi vibrancy, Sufi mysticism, and bustling street conversations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-delhi-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Quote Banner */}
        <div className="relative max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-delhi-maroon-900/90 via-delhi-dark-900/90 to-delhi-maroon-950/90 border-2 border-delhi-gold-500/40 shadow-royal text-center space-y-3">
          <Quote className="mx-auto text-delhi-gold-400 opacity-60 w-8 h-8 sm:w-10 sm:h-10" />
          <blockquote className="text-lg sm:text-xl md:text-2xl font-heading font-medium italic text-delhi-cream-50 leading-relaxed">
            “Delhi is not just a city — it is a living blend of history, culture and flavours.”
          </blockquote>
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-delhi-saffron-400 tracking-wider">
            <Sparkles size={12} />
            <span>DILLI DILWALON KI • HERITAGE OF BHARAT</span>
            <Sparkles size={12} />
          </div>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELHI_CULTURE.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-delhi-gold-500/20 shadow-card group"
            >
              <div className="space-y-4">
                {/* Header with Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-2.5 rounded-2xl bg-delhi-dark-800 border border-white/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-delhi-gold-400/80 px-2 py-0.5 rounded bg-delhi-gold-500/10">
                    Tradition
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-delhi-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-delhi-saffron-400 font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-sm text-delhi-cream-200/85 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="mt-5 pt-4 border-t border-white/5 space-y-1.5">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-delhi-cream-300/90">
                    <CheckCircle size={12} className="text-delhi-gold-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
