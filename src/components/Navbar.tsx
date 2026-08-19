import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, QrCode, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  onOpenQR: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQR }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'History', href: '#history', icon: '🏛️' },
    { label: 'Culture', href: '#culture', icon: '🎭' },
    { label: 'Places', href: '#places', icon: '📍' },
    { label: 'Street Food', href: '#street-food', icon: '🍽️' },
    { label: 'Our Menu', href: '#our-menu', icon: '❤️' },
    { label: 'AIML Touch', href: '#aiml-touch', icon: '💡' },
    { label: 'Quiz', href: '#quiz', icon: '🎯' },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sequenceTimerRef = useRef<number | null>(null);

  const startClassicalMusic = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.18, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // 1. TANPURA DRONE (Warm Sa - Pa drone in D key)
      const droneFreqs = [146.83, 220.0, 293.66, 440.0]; // D3, A3, D4, A4
      droneFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Slow tanpura shimmering modulation
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.15 + idx * 0.08, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.04, ctx.currentTime);
        lfo.connect(g.gain);
        lfo.start();

        g.gain.setValueAtTime(0.08, ctx.currentTime);
        osc.connect(g);
        g.connect(masterGain);
        osc.start();
      });

      // 2. RAGA YAMAN SCALE NOTES (Hz)
      const NOTES: { [key: string]: number } = {
        'Ni_low': 277.18,
        'Re': 329.63,
        'Ga': 369.99,
        'Ma_tivra': 415.30,
        'Pa': 440.00,
        'Dha': 493.88,
        'Ni': 554.37,
        'Sa_high': 587.33,
        'Re_high': 659.25,
        'Ga_high': 739.99
      };

      // Melodic phrase of Raga Yaman
      const sitarPhrases = [
        { note: 'Ni_low', dur: 0.6 },
        { note: 'Re', dur: 0.6 },
        { note: 'Ga', dur: 1.2 },
        { note: 'Re', dur: 0.6 },
        { note: 'Ga', dur: 0.6 },
        { note: 'Ma_tivra', dur: 0.6 },
        { note: 'Pa', dur: 1.4 },
        { note: 'Ma_tivra', dur: 0.6 },
        { note: 'Dha', dur: 0.6 },
        { note: 'Ni', dur: 0.8 },
        { note: 'Sa_high', dur: 1.6 },
        { note: 'Ni', dur: 0.6 },
        { note: 'Dha', dur: 0.6 },
        { note: 'Pa', dur: 1.0 },
        { note: 'Ma_tivra', dur: 0.6 },
        { note: 'Ga', dur: 0.8 },
        { note: 'Re', dur: 0.8 },
        { note: 'Ni_low', dur: 0.8 },
        { note: 'Re', dur: 1.2 }
      ];

      // Pluck Sitar string synthesizer
      const playSitarPluck = (freq: number, time: number) => {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;
        const c = audioContextRef.current;

        const osc = c.createOscillator();
        const filter = c.createBiquadFilter();
        const gain = c.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, time);

        // Sitar metallic jawari resonance
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(freq * 2.2, time);
        filter.Q.setValueAtTime(4.0, time);

        gain.gain.setValueAtTime(0.001, time);
        gain.gain.exponentialRampToValueAtTime(0.22, time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.9);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        osc.start(time);
        osc.stop(time + 0.95);
      };

      // Soft Bansuri Flute note
      const playFluteTone = (freq: number, time: number, duration: number) => {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;
        const c = audioContextRef.current;

        const osc = c.createOscillator();
        const gain = c.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);

        // Flute gentle vibrato
        const vib = c.createOscillator();
        vib.frequency.setValueAtTime(5.0, time);
        const vibGain = c.createGain();
        vibGain.gain.setValueAtTime(3.5, time);
        vib.connect(osc.frequency);
        vib.start(time);
        vib.stop(time + duration);

        gain.gain.setValueAtTime(0.001, time);
        gain.gain.linearRampToValueAtTime(0.12, time + 0.2);
        gain.gain.setValueAtTime(0.11, time + duration - 0.2);
        gain.gain.linearRampToValueAtTime(0.001, time + duration);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(time);
        osc.stop(time + duration);
      };

      // Soft Tabla Pulse (Bayan & Dayan)
      const playTablaBeat = (time: number, isBass: boolean) => {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;
        const c = audioContextRef.current;

        const osc = c.createOscillator();
        const gain = c.createGain();

        if (isBass) {
          // Bayan (bass slide)
          osc.type = 'sine';
          osc.frequency.setValueAtTime(110, time);
          osc.frequency.exponentialRampToValueAtTime(65, time + 0.25);
          gain.gain.setValueAtTime(0.18, time);
          gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);
        } else {
          // Dayan (metallic ring)
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(293.66, time);
          gain.gain.setValueAtTime(0.08, time);
          gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);
        }

        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(time);
        osc.stop(time + 0.35);
      };

      // Play continuous Raga sequence
      let stepIndex = 0;
      let phraseTime = ctx.currentTime + 0.5;

      const scheduleLoop = () => {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;
        const c = audioContextRef.current;

        const phrase = sitarPhrases[stepIndex % sitarPhrases.length];
        const freq = NOTES[phrase.note];
        
        playSitarPluck(freq, phraseTime);
        playTablaBeat(phraseTime, stepIndex % 2 === 0);

        // Trigger flute harmony every 3 steps
        if (stepIndex % 4 === 0) {
          playFluteTone(freq * 0.5, phraseTime, phrase.dur * 2.2);
        }

        phraseTime += phrase.dur * 0.9;
        stepIndex++;

        // Schedule next step
        const delay = Math.max(50, (phraseTime - c.currentTime) * 1000 - 100);
        sequenceTimerRef.current = window.setTimeout(scheduleLoop, delay);
      };

      scheduleLoop();
      setIsPlaying(true);
      setSoundEnabled(true);
    } catch (e) {
      console.warn("Audio synthesis error:", e);
    }
  };

  const stopClassicalMusic = () => {
    if (sequenceTimerRef.current) {
      clearTimeout(sequenceTimerRef.current);
      sequenceTimerRef.current = null;
    }
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close();
      } catch {
        // Ignore
      }
      audioContextRef.current = null;
    }
    setIsPlaying(false);
    setSoundEnabled(false);
  };

  const toggleSound = () => {
    if (isPlaying || soundEnabled) {
      stopClassicalMusic();
    } else {
      // First check if an MP3 file exists in public/delhi-song.mp3
      const testAudio = new Audio('/delhi-song.mp3');
      testAudio.volume = 0.4;
      testAudio.loop = true;

      testAudio.play()
        .then(() => {
          setIsPlaying(true);
          setSoundEnabled(true);
        })
        .catch(() => {
          // If no MP3 is placed yet, start the melodious live Raga Yaman Sitar & Flute engine!
          startClassicalMusic();
        });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-delhi-dark-900/90 backdrop-blur-md border-b border-delhi-gold-500/20 py-2.5 shadow-royal'
          : 'bg-gradient-to-b from-delhi-dark-950/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-delhi-gold-400 via-delhi-saffron-600 to-delhi-maroon-800 p-0.5 shadow-gold transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-delhi-dark-900 rounded-[10px] flex items-center justify-center">
              <span className="text-xl">🇮🇳</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-lg md:text-xl tracking-wider text-delhi-gold-400 group-hover:text-delhi-gold-300 transition-colors">
                DELHI
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-delhi-saffron-500/20 text-delhi-saffron-400 border border-delhi-saffron-500/30 font-mono font-bold">
                AIML DILLI DARBAR
              </span>
            </div>
            <p className="text-[10px] text-delhi-cream-300/80 -mt-0.5 font-medium tracking-wide">
              Cooking Without Fire • PESITM
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-delhi-dark-800/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-delhi-gold-500/15">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-delhi-cream-200 hover:text-delhi-gold-300 hover:bg-delhi-gold-500/10 rounded-full transition-all"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Sound Mood Chime */}
          <button
            id="sound-toggle-btn"
            onClick={toggleSound}
            title={soundEnabled ? 'Pause Music' : 'Play Delhi Music'}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-delhi-dark-800 border border-delhi-gold-500/30 text-delhi-gold-400 hover:bg-delhi-gold-500/20 transition-all"
            aria-label="Toggle background music"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Table QR Button */}
          <button
            id="table-qr-btn"
            onClick={onOpenQR}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-delhi-saffron-600 to-delhi-maroon-700 hover:from-delhi-saffron-500 hover:to-delhi-maroon-600 text-white text-xs font-semibold shadow-gold transition-all duration-200 hover:scale-105 active:scale-95 border border-delhi-gold-400/40"
          >
            <QrCode size={14} className="animate-pulse" />
            <span>Table QR</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-delhi-dark-800 border border-delhi-gold-500/30 text-delhi-cream-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-delhi-dark-950/95 backdrop-blur-xl border-b border-delhi-gold-500/30 px-5 py-6 space-y-3 animate-fadeIn">
          <div className="pb-2 border-b border-delhi-gold-500/10 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-delhi-gold-400 font-semibold flex items-center gap-1">
              <Sparkles size={12} /> Explore Sections
            </span>
            <span className="text-[11px] text-delhi-cream-300 font-mono">PESITM AIML</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-delhi-dark-800/80 border border-delhi-gold-500/15 text-sm font-medium text-delhi-cream-100 hover:bg-delhi-maroon-900/60 hover:text-delhi-gold-300 transition-colors"
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQR();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-delhi-gold-500/20 text-delhi-gold-300 border border-delhi-gold-500/40 text-xs font-semibold"
            >
              <QrCode size={16} /> Open Table Stand QR
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
