import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gradient">
              LifeContext
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-baseline space-x-4">
              <a href="#open-source" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Open Source</a>
              <a href="#doc" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Doc</a>
              <a href="#research" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Research</a>
              <a href="#join-us" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Join Us</a>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Sign In</a>
            <a href="#doc" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
              Get Started Free
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
            <a href="#open-source" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Open Source</a>
            <a href="#doc" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Doc</a>
            <a href="#research" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Research</a>
            <a href="#join-us" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Join Us</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign In</a>
            <a href="#doc" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white block px-3 py-2 rounded-md text-base font-medium">Get Started Free</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;