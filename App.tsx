import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SummarizeSection from './components/SummarizeSection';
import MissionVision from './components/MissionVision';
import ScenarioFeatures from './components/ScenarioFeatures';
import Research from './components/Research';
import Footer from './components/Footer';
import DocPage from './components/DocPage';
import ResearchPage from './components/ResearchPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#doc') {
        setCurrentPage('doc');
      } else if (hash === '#research') {
        setCurrentPage('research');
      } else {
        setCurrentPage('home');
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'doc') {
    return <DocPage />;
  }

  if (currentPage === 'research') {
    return <ResearchPage />;
  }

  return (
    <div className="text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <SummarizeSection />
        <MissionVision />
        <ScenarioFeatures />
        <Research />
      </main>
      <Footer />
    </div>
  );
};

export default App;