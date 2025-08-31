import { useState } from 'react';
import Logo from '../assets/digiexpres_logo.png';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
            <img src={Logo} alt="DigiExpress" className="h-10 w-auto" />
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">AI Solutions</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Case Studies</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">News</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3 px-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">AI Solutions</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">Case Studies</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">News</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;