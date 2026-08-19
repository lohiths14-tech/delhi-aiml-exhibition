import React, { useState, useEffect } from 'react';
import { Sparkles, Volume2, ArrowRight } from 'lucide-react';

interface RoyalIntroLoaderProps {
  onEnter: (playMusic: boolean) => void;
}

export const RoyalIntroLoader: React.FC<RoyalIntroLoaderProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('Initializing Sensory Matrix...');
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        const next = prev + 2;
        if (next < 30) {
          setStatusText('Initializing Sensory Matrix...');
        } else if (next < 60) {
          setStatusText('Tuning Classical Raga Yaman Synthesizer...');
        } else if (next < 90) {
          setStatusText('Balancing Delhi No-Fire Flavours...');
        } else {
          setStatusText('Royal Gates of Dilli Darbar Ready ✨');
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = (withAudio: boolean) => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter(withAudio);
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0708] text-delhi-cream-100 overflow-hidden transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Royal Jaali Lattice & Glowing Ambient Light */}
      <div className="absolute inset-0 bg-jaali opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-tr from-delhi-maroon-900/60 via-delhi-gold-600/20 to-delhi-saffron-600/30 rounded-full blur-[100px] pointer-events-none animate-pulseGlow" />

      {/* Floating Sparkles & Particles */}
      <div className="absolute top-12 left-12 text-delhi-gold-400/40 text-xl animate-float">✨</div>
      <div className="absolute bottom-16 right-16 text-delhi-saffron-400/40 text-xl animate-float [animation-delay:2s]">🪔</div>
      <div className="absolute top-20 right-20 text-delhi-gold-400/30 text-lg animate-float [animation-delay:1s]">⚜️</div>

      {/* Center Container */}
      <div className="relative z-10 max-w-lg w-full mx-auto px-6 py-8 text-center space-y-6">
        
        {/* Animated Royal Mughal Mandala */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto flex items-center justify-center">
          {/* Outer Rotating Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-delhi-gold-400/60 animate-spin" style={{ animationDuration: '24s' }} />
          
          {/* Inner Counter-Rotating Ring */}
          <div className="absolute inset-2 rounded-full border border-delhi-saffron-500/50 animate-spin" style={{ animationDuration: '16s', animationDirection: 'reverse' }} />
          
          {/* Glowing Center Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-delhi-maroon-900 via-delhi-dark-900 to-delhi-maroon-950 border-2 border-delhi-gold-500 shadow-royal flex flex-col items-center justify-center p-2 group">
            <span className="text-2xl sm:text-3xl filter drop-shadow-md">🇮🇳</span>
            <span className="text-[8px] sm:text-[9px] font-mono font-bold text-delhi-gold-400 uppercase tracking-widest mt-0.5">
              PESITM
            </span>
          </div>
        </div>

        {/* Institution & Department Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-delhi-gold-500/10 border border-delhi-gold-500/30 text-delhi-gold-300 text-[11px] font-mono font-semibold tracking-wider uppercase">
            <Sparkles size={12} className="text-delhi-saffron-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>PES Institute of Technology & Management</span>
          </div>
          <p className="text-xs text-delhi-cream-300/80 font-mono tracking-wide">
            Department of Artificial Intelligence & Machine Learning
          </p>
        </div>

        {/* Grand Royal Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-delhi-cream-100 to-delhi-gold-400 drop-shadow-2xl">
            AIML DILLI DARBAR
          </h1>
          <p className="text-sm sm:text-base font-hindi text-delhi-saffron-400 font-semibold tracking-widest">
            “स्वाद • संस्कृति • मोहब्बत”
          </p>
          <p className="text-[11px] font-mono text-delhi-gold-400/90 tracking-widest uppercase">
            Cooking Without Fire Exhibition 2026
          </p>
        </div>

        {/* Loading Progress Bar & Shifting Status */}
        <div className="space-y-2.5 max-w-xs mx-auto pt-2">
          <div className="w-full bg-delhi-dark-800 rounded-full h-2 overflow-hidden border border-delhi-gold-500/30 p-0.5 shadow-inner">
            <div
              className="bg-gradient-to-r from-delhi-maroon-600 via-delhi-saffron-500 to-delhi-gold-400 h-full rounded-full transition-all duration-150 ease-out shadow-gold"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-delhi-cream-400">
            <span className="truncate pr-2 text-delhi-gold-300">{statusText}</span>
            <span className="font-bold text-delhi-saffron-400">{progress}%</span>
          </div>
        </div>

        {/* Action Button: Enter Experience */}
        <div className="pt-2">
          {isReady ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fadeIn">
              <button
                onClick={() => handleEnter(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-delhi-saffron-600 via-delhi-gold-500 to-delhi-maroon-700 hover:from-delhi-saffron-500 hover:to-delhi-maroon-600 text-white font-heading font-black text-xs sm:text-sm tracking-wider shadow-gold-lg transition-all duration-300 hover:scale-105 active:scale-95 border border-delhi-gold-300 flex items-center justify-center gap-2"
              >
                <Volume2 size={16} className="animate-pulse text-white" />
                <span>ENTER WITH LIVE MUSIC 🎵</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => handleEnter(false)}
                className="w-full sm:w-auto px-4 py-3 rounded-full bg-delhi-dark-900/80 hover:bg-delhi-dark-800 text-delhi-cream-300 hover:text-white border border-white/15 text-xs font-mono transition-all"
              >
                <span>Enter Silently</span>
              </button>
            </div>
          ) : (
            <p className="text-[11px] font-mono text-delhi-cream-400/60 animate-pulse">
              Preparing royal cultural & culinary showcase...
            </p>
          )}
        </div>

      </div>
    </div>
  );
};
