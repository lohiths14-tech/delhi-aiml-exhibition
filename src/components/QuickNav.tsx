import React, { useEffect, useState } from 'react';

export const QuickNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'history', label: 'History', icon: '🏛️' },
    { id: 'culture', label: 'Culture', icon: '🎭' },
    { id: 'places', label: 'Places', icon: '📍' },
    { id: 'street-food', label: 'Street Food', icon: '🍽️' },
    { id: 'our-menu', label: 'Our Menu', icon: '❤️' },
    { id: 'no-fire', label: 'No-Fire', icon: '🔥❌' },
    { id: 'aiml-touch', label: 'AIML', icon: '💡' },
    { id: 'quiz', label: 'Quiz', icon: '🎯' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const elem = document.getElementById(navItems[i].id);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="quick-sticky-nav"
      aria-label="Quick Section Navigation"
      className="sticky top-[60px] z-40 w-full bg-delhi-dark-950/80 backdrop-blur-md border-y border-delhi-gold-500/20 py-2.5 overflow-x-auto no-scrollbar"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-start md:justify-center gap-2 min-w-max">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-delhi-saffron-600 to-delhi-maroon-700 text-white shadow-gold scale-105 border border-delhi-gold-400/50'
                  : 'bg-delhi-dark-800/80 text-delhi-cream-300 hover:text-delhi-gold-300 hover:bg-delhi-dark-800 border border-white/5'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
