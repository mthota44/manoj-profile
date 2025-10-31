
import React, { useState } from 'react';
import { Section } from './types';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CommunityPage from './components/CommunityPage';
import AIPrepPage from './components/AIPrepPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.Home);

  const renderSection = () => {
    switch (activeSection) {
      case Section.Home:
        return <HomePage setActiveSection={setActiveSection} />;
      case Section.Community:
        return <CommunityPage />;
      case Section.AIPrep:
        return <AIPrepPage />;
      case Section.Contact:
        return <ContactPage />;
      default:
        return <HomePage setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 bg-grid-cyan-500/[0.2] relative flex flex-col">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
