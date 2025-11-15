import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ChevronUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <>
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 animate-pulse"
        title="WhatsApp Us"
      >
        <MessageCircle size={28} />
      </button>

      <button
        onClick={handleCall}
        className="fixed bottom-24 right-6 z-40 bg-[#c5a880] text-white p-4 rounded-full shadow-2xl hover:bg-[#8b7355] transition-all hover:scale-110 md:hidden"
        title="Call Now"
      >
        <Phone size={28} />
      </button>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 bg-[#1a1a2e] text-white p-4 rounded-full shadow-2xl hover:bg-[#c5a880] transition-all hover:scale-110"
          title="Scroll to Top"
        >
          <ChevronUp size={28} />
        </button>
      )}
    </>
  );
}
