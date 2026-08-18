import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, QrCode, Printer, Copy, Check, Wifi } from 'lucide-react';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRModal: React.FC<QRModalProps> = ({ isOpen, onClose }) => {
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [customUrl, setCustomUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [stickerMode, setStickerMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      setCurrentUrl(url);
      setCustomUrl(url);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(customUrl || currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const qrTarget = customUrl || currentUrl || 'http://localhost:5173';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-delhi-dark-950 border-2 border-delhi-gold-500 rounded-3xl p-6 sm:p-8 shadow-royal space-y-6 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-delhi-dark-800 border border-white/10 text-delhi-cream-200 hover:text-white hover:border-delhi-gold-400 focus:outline-none"
          aria-label="Close QR modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-delhi-gold-400 font-bold flex items-center justify-center gap-1.5">
            <QrCode size={14} className="text-delhi-saffron-500" />
            <span>Stall Table Display Stand</span>
          </span>
          <h3 className="text-2xl font-heading font-black text-white">
            📱 SCAN & EXPLORE DELHI 🇮🇳
          </h3>
          <p className="text-xs text-delhi-cream-300">
            PESITM • Department of Artificial Intelligence & Machine Learning
          </p>
        </div>

        {/* Mode Selector Tab */}
        <div className="flex items-center justify-center gap-2 p-1 bg-delhi-dark-900 rounded-xl border border-white/10 max-w-xs mx-auto">
          <button
            onClick={() => setStickerMode(false)}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
              !stickerMode
                ? 'bg-delhi-gold-500 text-delhi-dark-950 shadow-sm'
                : 'text-delhi-cream-400 hover:text-white'
            }`}
          >
            Full Stand Poster
          </button>
          <button
            onClick={() => setStickerMode(true)}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
              stickerMode
                ? 'bg-delhi-gold-500 text-delhi-dark-950 shadow-sm'
                : 'text-delhi-cream-400 hover:text-white'
            }`}
          >
            Table Sticker Only 🏷️
          </button>
        </div>

        {/* Printable Stand Container */}
        <div
          id="printable-table-stand"
          className="bg-white text-delhi-dark-950 border-4 border-delhi-gold-600 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Corner Filigree */}
          <span className="absolute top-2 left-3 text-lg text-delhi-gold-700 select-none">⚜️</span>
          <span className="absolute top-2 right-3 text-lg text-delhi-gold-700 select-none">⚜️</span>
          <span className="absolute bottom-2 left-3 text-lg text-delhi-gold-700 select-none">⚜️</span>
          <span className="absolute bottom-2 right-3 text-lg text-delhi-gold-700 select-none">⚜️</span>

          {!stickerMode && (
            <>
              {/* Official PESITM Header on Stand */}
              <div className="bg-white rounded-xl p-1 max-w-sm mx-auto">
                <img
                  src="/images/pesitm_official_header.png"
                  alt="PESITM Shivamogga"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Header banner */}
              <div className="space-y-0.5 pt-1">
                <h4 className="text-xl sm:text-2xl font-heading font-black text-delhi-maroon-900 tracking-wide">
                  DELHI 🇮🇳
                </h4>
                <p className="text-xs font-hindi text-delhi-saffron-700 font-semibold">
                  “स्वाद • संस्कृति • मोहब्बत”
                </p>
                <p className="text-[10px] font-mono text-delhi-dark-700 font-medium">
                  Cooking Without Fire 2026 • AIML Department
                </p>
              </div>
            </>
          )}

          {/* QR Code Frame */}
          <div className="inline-block p-4 bg-white rounded-2xl shadow-lg border-4 border-delhi-maroon-800">
            <QRCodeSVG
              value={qrTarget}
              size={stickerMode ? 220 : 180}
              level="H"
              includeMargin={false}
              fgColor="#140E10"
              bgColor="#FFFFFF"
            />
          </div>

          {/* THE EXACT SURPRISE TAGLINE */}
          <div className="space-y-1.5 pt-1">
            <h3 className="text-base sm:text-lg font-heading font-black text-delhi-maroon-900 tracking-tight">
              “Scan me — there&apos;s a surprise inside! 👀”
            </h3>
            <p className="text-[11px] font-mono text-delhi-saffron-700 font-bold">
              🎵 Live Classical Music • Interactive Quiz • AIML Menu
            </p>
            <p className="text-[9px] font-mono text-delhi-dark-600 truncate max-w-xs mx-auto">
              {qrTarget}
            </p>
          </div>
        </div>

        {/* Local Network / Wi-Fi Quick Setup Guide */}
        <div className="p-4 rounded-2xl bg-delhi-dark-900 border border-delhi-gold-500/20 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-delhi-gold-400 font-bold uppercase flex items-center gap-1.5">
              <Wifi size={14} className="text-delhi-saffron-500" />
              <span>Stall QR Target URL</span>
            </span>
            <span className="text-delhi-cream-400 text-[10px]">Instant Live QR</span>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCustomUrl('http://192.168.31.205:5173')}
              className="text-[11px] font-mono px-3 py-1 rounded-lg bg-delhi-dark-950 border border-delhi-gold-500/40 text-delhi-gold-300 hover:bg-delhi-gold-500/20 transition-all"
            >
              📡 Local Wi-Fi IP (192.168.31.205:5173)
            </button>
            <button
              onClick={() => setCustomUrl(window.location.href)}
              className="text-[11px] font-mono px-3 py-1 rounded-lg bg-delhi-dark-950 border border-white/10 text-delhi-cream-300 hover:bg-white/10 transition-all"
            >
              🌐 Browser Current URL
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              placeholder="Paste your live Vercel/Netlify URL here (e.g. https://delhi-aiml.vercel.app)"
              className="w-full px-3 py-2 rounded-xl bg-delhi-dark-950 border border-white/10 text-xs text-delhi-cream-100 font-mono focus:border-delhi-gold-400 focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-delhi-dark-800 hover:bg-delhi-dark-700 text-delhi-gold-300 border border-white/10 text-xs font-semibold flex items-center gap-1 shrink-0"
              title="Copy URL"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <button
            onClick={handlePrint}
            className="flex-1 py-3 rounded-xl bg-delhi-dark-800 hover:bg-delhi-dark-700 text-delhi-cream-100 border border-white/10 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <Printer size={15} />
            <span>🖨️ Print Stand Card</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-delhi-saffron-600 to-delhi-maroon-700 hover:from-delhi-saffron-500 hover:to-delhi-maroon-600 text-white text-xs font-bold shadow-gold flex items-center justify-center gap-2"
          >
            <span>Done</span>
          </button>
        </div>
      </div>
    </div>
  );
};
