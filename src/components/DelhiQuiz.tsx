import React, { useState } from 'react';
import { DELHI_QUIZ_QUESTIONS } from '../data/delhiData';
import { HelpCircle, CheckCircle2, XCircle, Trophy, RotateCcw, Sparkles, ArrowRight, Award, Download, Printer, Loader2, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { toPng } from 'html-to-image';

export const DelhiQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [recipientName, setRecipientName] = useState<string>('Honourable Judge / Guest');
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const downloadCertificateImage = async () => {
    const node = document.getElementById('printable-certificate');
    if (!node) return;
    setIsDownloading(true);
    try {
      const dataUrl = await toPng(node, {
        quality: 0.98,
        pixelRatio: 2,
        backgroundColor: '#FAF6ED',
        cacheBust: true,
      });
      const link = document.createElement('a');
      const cleanName = (recipientName || 'Guest').trim().replace(/[^a-zA-Z0-9]/g, '_');
      link.download = `PESITM_AIML_Certificate_${cleanName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export certificate image:', err);
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  const shareCertificate = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `Delhi Heritage Award - ${recipientName}`,
          text: `Check out my official PESITM Delhi Heritage Explorer Certificate awarded by Team AIML Dilli Darbar! 🇮🇳🏆`,
          url: 'https://delhi-aiml-exhibition.vercel.app',
        });
      } catch {
        // User cancelled
      }
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('https://delhi-aiml-exhibition.vercel.app');
      alert('Exhibition Link Copied to Clipboard!');
    }
  };

  const currentQ = DELHI_QUIZ_QUESTIONS[currentIdx];

  // Synthesized audio & haptic feedback
  const playAnswerSound = (isCorrect: boolean) => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(isCorrect ? [40, 30, 60] : 80);
    }
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (isCorrect) {
        // High pleasant chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15); // G5
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      } else {
        // Soft low tone
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
        osc.frequency.exponentialRampToValueAtTime(164.81, ctx.currentTime + 0.2); // E3
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      // Audio context restricted
    }
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;

    setSelectedAnswer(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    playAnswerSound(isCorrect);

    if (isCorrect) {
      setScore((prev) => prev + 1);
      // Celebratory burst
      try {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#E67E22', '#165B40']
        });
      } catch {
        // Confetti fallback
      }
    }
  };

  const handleNext = () => {
    if (currentIdx < DELHI_QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
      // Big confetti finish!
      try {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#E67E22', '#7A1324', '#FAF6ED']
        });
      } catch {
        // Ignore fallback
      }
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
    setShowCertificate(false);
  };

  return (
    <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8 bg-delhi-dark-950 relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delhi-saffron-950/60 border border-delhi-saffron-500/30 text-delhi-saffron-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle size={13} />
            <span>Interactive Judge Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            🎯 HOW WELL DO YOU KNOW DELHI?
          </h2>
          <p className="text-sm sm:text-base text-delhi-cream-200/80 max-w-xl mx-auto">
            Test your knowledge of Delhi&apos;s monuments, street foods, and history in this 5-question sprint!
          </p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <button
              onClick={() => setShowCertificate(true)}
              className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-delhi-gold-500/10 border border-delhi-gold-500/30 text-delhi-gold-400 hover:bg-delhi-gold-500/20 transition-all flex items-center gap-1.5"
            >
              <Award size={14} />
              <span>Preview Official Certificate Studio 📜</span>
            </button>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-delhi-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Main Quiz Box */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-delhi-gold-500/30 shadow-royal">
          {!quizCompleted ? (
            <div className="space-y-6">
              {/* Progress and Question Counter */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-delhi-gold-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={13} className="text-delhi-saffron-500" />
                  QUESTION {currentIdx + 1} OF {DELHI_QUIZ_QUESTIONS.length}
                </span>
                <span className="text-xs font-mono text-delhi-cream-300 bg-delhi-dark-900 px-3 py-1 rounded-full border border-white/10">
                  Current Score: {score}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-delhi-dark-900 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-delhi-saffron-500 to-delhi-gold-400 transition-all duration-300 rounded-full"
                  style={{ width: `${((currentIdx + 1) / DELHI_QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Category Tag */}
              <div className="inline-block px-3 py-1 rounded-full bg-delhi-maroon-900/60 border border-delhi-gold-500/20 text-[11px] font-mono text-delhi-gold-400">
                🏛️ Delhi Heritage & Culture Trivia
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white leading-snug">
                {currentQ.question}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                {currentQ.options.map((opt, optIdx) => {
                  let optStyle = 'bg-delhi-dark-900/70 border-white/10 hover:border-delhi-gold-500/40 text-delhi-cream-100';

                  if (isAnswered) {
                    if (optIdx === currentQ.correctIndex) {
                      optStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold shadow-lg shadow-emerald-950/50';
                    } else if (optIdx === selectedAnswer) {
                      optStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                    } else {
                      optStyle = 'bg-delhi-dark-950/40 border-white/5 opacity-40 text-delhi-cream-400';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      disabled={isAnswered}
                      className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between group ${optStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-mono text-delhi-gold-400 group-hover:bg-delhi-gold-500/20 transition-colors">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isAnswered && optIdx === currentQ.correctIndex && (
                        <CheckCircle2 size={18} className="text-emerald-400 shrink-0 ml-2" />
                      )}
                      {isAnswered && optIdx === selectedAnswer && optIdx !== currentQ.correctIndex && (
                        <XCircle size={18} className="text-rose-400 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Answer Feedback Banner */}
              {isAnswered && (
                <div className="p-4 rounded-2xl bg-delhi-dark-900/90 border border-delhi-gold-500/30 space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    {selectedAnswer === currentQ.correctIndex ? (
                      <span className="text-sm font-heading font-bold text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 size={16} /> Correct! 🎉
                      </span>
                    ) : (
                      <span className="text-sm font-heading font-bold text-rose-400 flex items-center gap-1.5">
                        <XCircle size={16} /> Incorrect
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-delhi-cream-200 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                  <p className="text-[11px] text-delhi-gold-400 font-mono italic pt-1 border-t border-white/5">
                    💡 Delhi Fact: {currentQ.delhiFact}
                  </p>
                </div>
              )}

              {/* Next Question Button */}
              {isAnswered && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-delhi-saffron-600 to-delhi-maroon-700 hover:from-delhi-saffron-500 hover:to-delhi-maroon-600 text-white text-xs sm:text-sm font-bold shadow-gold flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <span>
                      {currentIdx < DELHI_QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Final Score'}
                    </span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Completed View */
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-delhi-gold-400 via-delhi-saffron-600 to-delhi-maroon-800 p-1 mx-auto shadow-gold-lg">
                <div className="w-full h-full bg-delhi-dark-900 rounded-[22px] flex items-center justify-center">
                  <Trophy size={36} className="text-delhi-gold-300" />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-delhi-gold-400 font-semibold">
                  Challenge Completed
                </span>
                <h3 className="text-3xl sm:text-4xl font-heading font-black text-white">
                  Delhi Explorer Score: {score} / {DELHI_QUIZ_QUESTIONS.length}
                </h3>
                <p className="text-sm text-delhi-saffron-400 font-medium">
                  {score === 5
                    ? '👑 Dil Se Dilliwala! You are an absolute master of Delhi heritage & flavours.'
                    : score >= 3
                    ? '🎉 Impressive! You know Delhi\'s monuments and street culture intimately.'
                    : '✨ Great effort! Take another spin or explore our detailed sections above.'}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setShowCertificate(true)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-delhi-gold-500 to-delhi-saffron-600 hover:from-delhi-gold-400 hover:to-delhi-saffron-500 text-delhi-dark-950 text-xs sm:text-sm font-bold shadow-gold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Award size={18} />
                  <span>Generate Official Judge Certificate 📜</span>
                </button>
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-delhi-dark-800 hover:bg-delhi-dark-700 text-delhi-cream-100 border border-white/10 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <RotateCcw size={16} />
                  <span>Play Again</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* GRAND ROYAL OFFICIAL CERTIFICATE STUDIO MODAL */}
        {showCertificate && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
            <div className="max-w-3xl w-full my-auto space-y-4">
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between text-white bg-delhi-dark-900/90 p-3 px-5 rounded-2xl border border-white/10 shadow-lg">
                <span className="text-xs font-mono text-delhi-gold-400 font-bold flex items-center gap-2">
                  <Award size={16} />
                  <span>Official PESITM Certificate Customizer</span>
                </span>
                <button
                  onClick={() => setShowCertificate(false)}
                  className="text-xs font-mono bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full transition-all"
                >
                  ✕ Close
                </button>
              </div>

              {/* Recipient Name Customization Input */}
              <div className="p-4 rounded-2xl bg-delhi-dark-900 border border-delhi-gold-500/30 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
                  <label htmlFor="judge-name-input" className="text-xs font-mono text-delhi-cream-300 shrink-0 self-start sm:self-center">
                    Recipient Name:
                  </label>
                  <input
                    id="judge-name-input"
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="Enter Name (e.g. Prof. Rajesh / Judge Sharma)"
                    className="w-full bg-delhi-dark-950 border border-delhi-gold-500/40 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-delhi-gold-400 font-medium"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
                  <button
                    onClick={downloadCertificateImage}
                    disabled={isDownloading}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-delhi-gold-500 to-delhi-saffron-600 hover:from-delhi-gold-400 hover:to-delhi-saffron-500 text-delhi-dark-950 font-bold text-xs shadow-gold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isDownloading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Generating Image...</span>
                      </>
                    ) : (
                      <>
                        <Download size={14} />
                        <span>Download Certificate (PNG Image) 🖼️</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={shareCertificate}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-delhi-dark-800 hover:bg-delhi-dark-700 text-delhi-saffron-300 border border-delhi-saffron-500/30 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Share2 size={14} />
                    <span>Share 📲</span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-delhi-dark-800 hover:bg-delhi-dark-700 text-delhi-cream-200 border border-white/10 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Printer size={14} />
                    <span>Print (1 Page)</span>
                  </button>
                </div>
              </div>

              {/* THE GRAND PRINTABLE CERTIFICATE CARD */}
              <div
                id="printable-certificate"
                className="bg-delhi-cream-100 text-delhi-dark-950 p-5 sm:p-8 rounded-3xl border-8 border-double border-delhi-gold-600 shadow-2xl relative overflow-hidden"
              >
                {/* Mughal Filigree Corner Accents */}
                <span className="absolute top-2 left-3 text-xl text-delhi-gold-700 select-none">⚜️</span>
                <span className="absolute top-2 right-3 text-xl text-delhi-gold-700 select-none">⚜️</span>
                <span className="absolute bottom-2 left-3 text-xl text-delhi-gold-700 select-none">⚜️</span>
                <span className="absolute bottom-2 right-3 text-xl text-delhi-gold-700 select-none">⚜️</span>

                {/* Subtle Delhi Heritage Watermark (India Gate / Red Fort / Qutub Minar Motif) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06] select-none z-0">
                  <svg viewBox="0 0 400 300" className="w-[85%] h-[85%] text-delhi-maroon-900 fill-current">
                    {/* Monument Architecture Silhouette */}
                    <path d="M 80,260 L 80,140 L 110,140 L 110,80 L 130,80 L 130,50 L 150,50 L 150,30 L 160,30 L 160,260 Z" />
                    <path d="M 160,260 L 160,110 L 190,110 L 200,90 L 210,110 L 240,110 L 240,260 Z" />
                    <path d="M 240,260 L 240,30 L 250,30 L 250,50 L 270,50 L 270,80 L 290,80 L 290,140 L 320,140 L 320,260 Z" />
                    <path d="M 170,260 C 170,210 230,210 230,260 Z" fill="#000" />
                  </svg>
                </div>

                {/* Inner Border Container */}
                <div className="border-2 border-delhi-gold-600/50 p-5 sm:p-7 rounded-2xl text-center space-y-3.5 bg-white/80 relative z-10">
                  
                  {/* 1. Official PESITM Institutional Letterhead Banner */}
                  <div className="flex flex-col items-center justify-center space-y-1.5 pb-1 border-b border-delhi-gold-600/30">
                    <img
                      src="/images/pesitm_official_header.png"
                      alt="PES Institute of Technology & Management, Shivamogga"
                      className="w-full max-w-xl h-auto object-contain mx-auto rounded-lg"
                    />
                    <p className="text-xs sm:text-sm font-heading font-black tracking-widest text-delhi-maroon-900 uppercase pt-1">
                      Department of Artificial Intelligence & Machine Learning
                    </p>
                  </div>

                  {/* 2. Subtitle */}
                  <div className="pt-0.5">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-delhi-gold-800 font-bold bg-delhi-gold-100/80 px-3.5 py-0.5 rounded-full border border-delhi-gold-400/40">
                      CERTIFICATE OF CULTURAL & CULINARY APPRECIATION
                    </span>
                  </div>

                  {/* 3. Main Award Title Hierarchy */}
                  <div className="space-y-0.5">
                    <p className="text-base sm:text-lg font-heading font-bold text-delhi-dark-800 tracking-wider uppercase">
                      DELHI HERITAGE EXPLORER
                    </p>
                    <h3 className="text-3xl sm:text-4xl font-heading font-black text-delhi-maroon-800 tracking-widest leading-none">
                      AWARD
                    </h3>
                  </div>

                  {/* 4. Recipient Section */}
                  <div className="space-y-1 py-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-delhi-dark-700 font-semibold">
                      THIS CERTIFICATE IS PROUDLY PRESENTED TO
                    </p>
                    <p className="text-2xl sm:text-3xl font-heading font-extrabold text-delhi-maroon-900 underline decoration-delhi-gold-500 underline-offset-8">
                      {recipientName || 'Honourable Judge / Guest'}
                    </p>
                  </div>

                  {/* 5. Strengthened Achievement Statement */}
                  <p className="text-xs sm:text-[13px] text-delhi-dark-900 max-w-xl mx-auto leading-relaxed font-serif italic px-2">
                    “In recognition of outstanding performance in the Delhi Heritage & Culinary Appreciation Quiz, demonstrating exceptional knowledge of Delhi&apos;s heritage, architecture, culture, and traditional cuisine.”
                  </p>

                  {/* 6. Score Showcase Badge */}
                  <div className="inline-flex flex-col items-center px-4 py-1.5 rounded-xl bg-gradient-to-r from-delhi-gold-100 via-amber-50 to-delhi-gold-100 border border-delhi-gold-500/50 shadow-sm">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-delhi-gold-800 font-bold">
                      QUIZ PERFORMANCE
                    </span>
                    <span className="text-sm font-heading font-black text-delhi-maroon-900">
                      🏆 {score} / 5 — {score === 5 ? 'PERFECT SCORE' : score >= 3 ? 'DISTINCTION SCORE' : 'MERIT SCORE'}
                    </span>
                  </div>

                  {/* 7. Structured Metadata & 3-Column Verification Area */}
                  <div className="pt-3 border-t border-delhi-gold-600/30 grid grid-cols-3 gap-2 items-center text-[10px] font-mono">
                    {/* Left: Event Details */}
                    <div className="text-left space-y-0.5">
                      <p className="text-[9px] text-delhi-dark-600 uppercase font-bold">Event</p>
                      <p className="font-bold text-delhi-maroon-900 text-[10px]">Cooking Without Fire 2026</p>
                      <p className="text-[8.5px] text-delhi-dark-600">Date: 18 August 2026</p>
                    </div>

                    {/* Center: Official Seal */}
                    <div className="text-center">
                      <div className="w-13 h-13 rounded-full border-2 border-double border-delhi-gold-700 bg-delhi-gold-50 p-1 flex flex-col items-center justify-center mx-auto shadow-inner">
                        <span className="text-[7.5px] font-black text-delhi-maroon-900 leading-none">PESITM</span>
                        <span className="text-[6.5px] text-delhi-gold-800 font-bold leading-none mt-0.5">AIML SEAL</span>
                        <span className="text-[6.5px] text-delhi-dark-700 leading-none">2026</span>
                      </div>
                    </div>

                    {/* Right: Verification Authority */}
                    <div className="text-right space-y-0.5">
                      <p className="text-[9px] text-delhi-dark-600 uppercase font-bold">Verified By</p>
                      <p className="font-bold text-delhi-maroon-900 text-[10px]">Team AIML Dilli Darbar</p>
                      <p className="text-[8px] text-delhi-gold-800 font-semibold truncate">
                        No: PESITM-AIML-DHE-2026-001
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
