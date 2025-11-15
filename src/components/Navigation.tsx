import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ darkMode, toggleDarkMode }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#c5a880] to-[#8b7355] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CH</span>
            </div>
            <span className={`text-2xl font-serif font-bold ${darkMode ? 'text-white' : isScrolled ? 'text-[#1a1a2e]' : 'text-white'}`}>
              Century Haven
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className={`hover:text-[#c5a880] transition-colors ${darkMode ? 'text-white' : isScrolled ? 'text-[#1a1a2e]' : 'text-white'}`}>
              Features
            </button>
            <button onClick={() => scrollToSection('gallery')} className={`hover:text-[#c5a880] transition-colors ${darkMode ? 'text-white' : isScrolled ? 'text-[#1a1a2e]' : 'text-white'}`}>
              Gallery
            </button>
            <button onClick={() => scrollToSection('amenities')} className={`hover:text-[#c5a880] transition-colors ${darkMode ? 'text-white' : isScrolled ? 'text-[#1a1a2e]' : 'text-white'}`}>
              Amenities
            </button>
            <button onClick={() => scrollToSection('location')} className={`hover:text-[#c5a880] transition-colors ${darkMode ? 'text-white' : isScrolled ? 'text-[#1a1a2e]' : 'text-white'}`}>
              Location
            </button>
            <button onClick={() => scrollToSection('contact')} className={`hover:text-[#c5a880] transition-colors ${darkMode ? 'text-white' : isScrolled ? 'text-[#1a1a2e]' : 'text-white'}`}>
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full hover:bg-[#c5a880]/20 transition-colors ${darkMode ? 'text-white' : isScrolled ? 'text-[#1a1a2e]' : 'text-white'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${darkMode ? 'text-white' : isScrolled ? 'text-[#1a1a2e]' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-[#1a1a2e]' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('features')} className={`block w-full text-left ${darkMode ? 'text-white' : 'text-[#1a1a2e]'} hover:text-[#c5a880]`}>
              Features
            </button>
            <button onClick={() => scrollToSection('gallery')} className={`block w-full text-left ${darkMode ? 'text-white' : 'text-[#1a1a2e]'} hover:text-[#c5a880]`}>
              Gallery
            </button>
            <button onClick={() => scrollToSection('amenities')} className={`block w-full text-left ${darkMode ? 'text-white' : 'text-[#1a1a2e]'} hover:text-[#c5a880]`}>
              Amenities
            </button>
            <button onClick={() => scrollToSection('location')} className={`block w-full text-left ${darkMode ? 'text-white' : 'text-[#1a1a2e]'} hover:text-[#c5a880]`}>
              Location
            </button>
            <button onClick={() => scrollToSection('contact')} className={`block w-full text-left ${darkMode ? 'text-white' : 'text-[#1a1a2e]'} hover:text-[#c5a880]`}>
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className={`flex items-center space-x-2 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
