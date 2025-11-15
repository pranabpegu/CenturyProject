import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({}: HeroProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', phone: '' });
    }, 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Century Haven
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
          Luxury Residences in Prime Locations
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Experience unparalleled elegance and sophistication in homes designed for the discerning few
        </p>

        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">Request a Callback</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#c5a880] transition-colors"
            />
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#c5a880] transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-[#c5a880] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8b7355] transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              Get a Call Back
            </button>
          </form>
          {showSuccess && (
            <div className="mt-4 p-3 bg-green-500 text-white rounded-lg text-center animate-fade-in">
              Thank you! We'll call you shortly.
            </div>
          )}
        </div>

        <button
          onClick={() => scrollToSection('gallery')}
          className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1a1a2e] transition-all transform hover:scale-105"
        >
          View Gallery
        </button>
      </div>

      <button
        onClick={() => scrollToSection('features')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
