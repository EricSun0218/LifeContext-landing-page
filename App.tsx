import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SummarizeSection from './components/SummarizeSection';

const App: React.FC = () => {
  return (
    <div className="bg-transparent text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <SummarizeSection />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;