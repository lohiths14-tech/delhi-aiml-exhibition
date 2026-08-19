import React, { useState } from 'react';
import { RoyalIntroLoader } from './components/RoyalIntroLoader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickNav } from './components/QuickNav';
import { HistoryTimeline } from './components/HistoryTimeline';
import { CultureSection } from './components/CultureSection';
import { PlacesSection } from './components/PlacesSection';
import { StreetFoodSection } from './components/StreetFoodSection';
import { OurMenuSection } from './components/OurMenuSection';
import { DishExplorer } from './components/DishExplorer';
import { NoFireSection } from './components/NoFireSection';
import { AIMLSection } from './components/AIMLSection';
import { DelhiQuiz } from './components/DelhiQuiz';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { QRModal } from './components/QRModal';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [triggerMusic, setTriggerMusic] = useState<boolean>(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState<boolean>(false);

  const handleEnterExperience = (playMusic: boolean) => {
    setShowIntro(false);
    if (playMusic) {
      setTriggerMusic(true);
    }
  };

  return (
    <div className="min-h-screen bg-delhi-dark-950 text-delhi-cream-100 flex flex-col font-body selection:bg-delhi-saffron-600 selection:text-white">
      {/* 🌟 Royal WOW Intro Loader Screen */}
      {showIntro && <RoyalIntroLoader onEnter={handleEnterExperience} />}

      {/* Top Navbar */}
      <Navbar onOpenQR={() => setIsQRModalOpen(true)} triggerMusic={triggerMusic} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Sticky Quick Navigation Bar */}
        <QuickNav />

        {/* 3. Delhi History Timeline */}
        <HistoryTimeline />

        {/* 4. Delhi Culture Section */}
        <CultureSection />

        {/* 5. Iconic Places Carousel & Showcase */}
        <PlacesSection />

        {/* 6. Delhi Street Food Showcase */}
        <StreetFoodSection />

        {/* 7. Our Competition Menu (Cooking Without Fire) */}
        <OurMenuSection />

        {/* 8. Interactive Dish Explorer & Taste Radar */}
        <DishExplorer />

        {/* 9. 100% No-Fire Concept Section */}
        <NoFireSection />

        {/* 10. AIML Touch & Palate Harmony Matrix */}
        <AIMLSection />

        {/* 11. Interactive Delhi Quiz */}
        <DelhiQuiz />

        {/* 12. The AIML Team */}
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Table QR Stand Modal */}
      <QRModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </div>
  );
};

export default App;
