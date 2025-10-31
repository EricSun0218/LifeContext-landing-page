import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gradient">
              Contexis
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-baseline space-x-4">
              <div 
                className="relative"
                onMouseEnter={() => setProductsMenuOpen(true)}
                onMouseLeave={() => setProductsMenuOpen(false)}
              >
                <button 
                  type="button"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Product
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform ${productsMenuOpen ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {productsMenuOpen && (
                  <div 
                    className="absolute left-0 top-full pt-2 w-48 z-[60]"
                    onMouseEnter={() => setProductsMenuOpen(true)}
                    onMouseLeave={() => setProductsMenuOpen(false)}
                  >
                    <div 
                      data-dropdown-menu
                      className="rounded-lg overflow-hidden shadow-lg"
                      style={{ 
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 75%, #1e3c72 100%)',
                        backgroundColor: '#1a1a2e',
                        opacity: 1,
                        boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      <a 
                        href="#products"
                        data-dropdown-item
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (window.location.hash !== '#products') {
                            window.location.hash = '#products';
                          } else {
                            window.dispatchEvent(new Event('hashchange'));
                          }
                          setProductsMenuOpen(false);
                        }}
                        className="block px-4 py-3 text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                        style={{ color: '#ffffff' }}
                      >
                        LifeContext
                      </a>
                      <a 
                        href="#products"
                        data-dropdown-item
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setProductsMenuOpen(false);
                        }}
                        className="block px-4 py-3 text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                        style={{ color: '#ffffff' }}
                      >
                        Agent Memory
                      </a>
                      <a 
                        href="#products"
                        data-dropdown-item
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setProductsMenuOpen(false);
                        }}
                        className="block px-4 py-3 text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                        style={{ color: '#ffffff' }}
                      >
                        Graph RAG
                      </a>
                      <a 
                        href="#products"
                        data-dropdown-item
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setProductsMenuOpen(false);
                        }}
                        className="block px-4 py-3 text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                        style={{ color: '#ffffff' }}
                      >
                        Agent Context
                      </a>
                      <a 
                        href="#products"
                        data-dropdown-item
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setProductsMenuOpen(false);
                        }}
                        className="block px-4 py-3 text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                        style={{ color: '#ffffff' }}
                      >
                        Knowledge Graph MCP
                      </a>
                      <a 
                        href="#open-source"
                        data-dropdown-item
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setProductsMenuOpen(false);
                        }}
                        className="block px-4 py-3 text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                        style={{ color: '#ffffff' }}
                      >
                        Open Source
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#doc" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Documentation</a>
              <a href="#research" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Research</a>
              <a href="#join-us" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Join Us</a>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Sign In</a>
            <a href="#" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Try Now
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2 text-base font-medium text-gray-300">Product</div>
            <a 
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.hash !== '#products') {
                  window.location.hash = '#products';
                } else {
                  window.dispatchEvent(new Event('hashchange'));
                }
                setIsOpen(false);
              }}
              className="text-gray-300 hover:text-white block px-6 py-2 rounded-md text-base font-medium"
            >
              LifeContext
            </a>
            <a href="#doc" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Documentation</a>
            <a href="#research" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Research</a>
            <a href="#join-us" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Join Us</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign In</a>
            <a href="#" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Try Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;