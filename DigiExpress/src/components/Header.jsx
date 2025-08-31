import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/digiexpres_logo.png" 
              alt="Digiexpres Logo" 
              className="h-10 w-auto mr-3"
            />
            <span className="text-xl font-bold text-gray-900">Digiexpres</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium py-2">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium py-2">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium py-2">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header