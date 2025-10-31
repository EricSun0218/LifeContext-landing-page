import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
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
      } else if (hash === '#products') {
        setCurrentPage('products');
      } else {
        setCurrentPage('home');
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Also listen for popstate (back/forward button)
    window.addEventListener('popstate', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  if (currentPage === 'doc') {
    return <DocPage />;
  }

  if (currentPage === 'research') {
    return <ResearchPage />;
  }

  if (currentPage === 'products') {
    return <ProductPage />;
  }

  return <HomePage />;
};

export default App;