import React, { useState } from 'react';
import { DELHI_TIMELINE } from '../data/delhiData';
import { Clock, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const HistoryTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="history" className="py-20 px-4 sm:px-6 lg:px-8 bg-delhi-dark-950 relative overflow-hidden">
      {/* Decorative side watermark */}
      <div className="absolute top-10 right-0 text-[120px] font-heading font-black text-white/[0.02] pointer-events-none select-none">
        HISTORY
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delhi-maroon-900/60 border border-delhi-gold-500/30 text-delhi-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Clock size={13} />
            <span>Through the Ages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            🏛️ A Journey Through Delhi
          </h2>
          <p className="text-sm sm:text-base text-delhi-cream-200/80 max-w-xl mx-auto">
            From the epic legendary city of Indraprastha to modern India&apos;s AI & innovation hub.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-delhi-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-delhi-gold-500/30 ml-4 sm:ml-32 md:ml-36 space-y-8 py-4">
          {DELHI_TIMELINE.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={item.era} className="relative pl-6 sm:pl-8 group">
                {/* Timeline Node Icon Dot */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="absolute -left-[19px] top-1.5 w-9 h-9 rounded-full bg-delhi-dark-900 border-2 border-delhi-gold-400 flex items-center justify-center text-sm shadow-gold transition-all duration-300 group-hover:scale-110 group-hover:border-delhi-saffron-500 focus:outline-none"
                  aria-label={`Toggle details for ${item.era}`}
                >
                  <span>{item.icon}</span>
                </button>

                {/* Left Desktop Year Stamp */}
                <div className="hidden sm:block absolute -left-36 top-2 text-right w-28">
                  <span className="font-mono text-xs font-bold text-delhi-gold-400 block">
                    {item.year}
                  </span>
                  <span className="text-[11px] text-delhi-cream-300/70 font-medium block truncate">
                    {item.era}
                  </span>
                </div>

                {/* Timeline Card */}
                <div
                  onClick={() => toggleExpand(index)}
                  className="cursor-pointer glass-card glass-card-hover p-5 rounded-2xl transition-all duration-300 border border-delhi-gold-500/20 shadow-card"
                >
                  {/* Mobile Year Badge */}
                  <div className="sm:hidden flex items-center justify-between pb-2 mb-2 border-b border-white/5">
                    <span className="px-2.5 py-0.5 rounded-full bg-delhi-saffron-500/20 text-delhi-saffron-400 font-mono text-xs font-semibold">
                      {item.year}
                    </span>
                    <span className="text-xs text-delhi-gold-400 font-medium">
                      {item.era}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-delhi-cream-50 group-hover:text-delhi-gold-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-delhi-saffron-400 font-medium mt-0.5">
                        {item.era}
                      </p>
                    </div>
                    <button
                      className="p-1 rounded-lg text-delhi-gold-400/80 hover:text-delhi-gold-300 focus:outline-none"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-delhi-cream-200/90 leading-relaxed mt-2.5">
                    {item.description}
                  </p>

                  {/* Highlight pill / expandable cultural trivia */}
                  <div className="mt-3 pt-3 border-t border-delhi-gold-500/10 flex items-center gap-2 text-xs text-delhi-gold-400/90 font-medium">
                    <Sparkles size={13} className="text-delhi-saffron-500 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
