import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`${darkMode ? 'bg-[#0f0f1e]' : 'bg-[#1a1a2e]'} text-white py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c5a880] to-[#8b7355] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CH</span>
              </div>
              <span className="text-2xl font-serif font-bold">Century Haven</span>
            </div>
            <p className="text-gray-400 mb-4">
              Redefining luxury living with world-class amenities and architectural excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#c5a880] rounded-full flex items-center justify-center hover:bg-[#8b7355] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#c5a880] rounded-full flex items-center justify-center hover:bg-[#8b7355] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#c5a880] rounded-full flex items-center justify-center hover:bg-[#8b7355] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#c5a880] rounded-full flex items-center justify-center hover:bg-[#8b7355] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-[#c5a880] transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-[#c5a880] transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('amenities')} className="text-gray-400 hover:text-[#c5a880] transition-colors">
                  Amenities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('location')} className="text-gray-400 hover:text-[#c5a880] transition-colors">
                  Location
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-[#c5a880] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-[#c5a880] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <p className="text-gray-400">+91 98765 43211</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-[#c5a880] flex-shrink-0 mt-1" />
                <p className="text-gray-400">info@centuryhaven.com</p>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#c5a880] flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  123 Luxury Avenue, Premium District, Mumbai 400001
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#c5a880] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#c5a880] transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
            <div className="text-sm text-gray-400">
              <p className="mb-2">RERA Reg. No:</p>
              <p className="font-mono">P51234567890</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Century Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
