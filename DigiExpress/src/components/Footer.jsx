import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from '../assets/digiexpres_logo.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1 flex flex-col">
            <img
              src={Logo}
              alt="DigiExpres Logo"
              className="h-10 mb-4"
            />
            <h2 className="text-2xl font-bold mb-2"><sup></sup></h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through innovative technology solutions and AI-powered services.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/digiexprs/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/company/digiexpres-tech-solution/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/digi_expres/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">AI Solutions</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Case Studies</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">News</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">IT Consultation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Software Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">AI/ML Integration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Digital Marketing 360°</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                info@digiexpres.com
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                +91 7397 990245
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                123 Tech Street, Silicon Valley, CA 94025
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Guru Hargovindji Rd, Chakala, Andheri East, Mumbai, Maharashtra 400093, India
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Digiexpres Tech Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;