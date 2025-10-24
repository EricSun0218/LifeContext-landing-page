import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
              <a href="#" className="text-2xl font-bold text-gradient">
                LifeContext
              </a>
              <p className="text-gray-400 max-w-xs">Your perfect memory, powered by AI.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800/50 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} LifeContext, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;