import React from 'react';
import Header from './Header';
import Hero from './Hero';
import SummarizeSection from './SummarizeSection';
import ApplicationScenarios from './ApplicationScenarios';
import QuickStart from './QuickStart';
import MissionVision from './MissionVision';
import Footer from './Footer';

const ProductPage: React.FC = () => {
  return (
    <div className="text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <SummarizeSection />
        <MissionVision />
        <QuickStart />
        <ApplicationScenarios />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;

