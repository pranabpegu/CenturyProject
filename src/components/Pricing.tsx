import { Download } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface PricingProps {
  darkMode: boolean;
}

const floorPlans = [
  { config: '2 BHK', area: '1250 Sq.Ft', price: 'Starting ₹85 Lakhs' },
  { config: '3 BHK', area: '1850 Sq.Ft', price: 'Starting ₹1.2 Crores' },
  { config: '4 BHK', area: '2650 Sq.Ft', price: 'Starting ₹1.8 Crores' },
  { config: 'Penthouse', area: '4000 Sq.Ft', price: 'Price on Request' },
];

export default function Pricing({ darkMode }: PricingProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleDownload = () => {
    alert('Brochure download initiated. In production, this would download a PDF file.');
  };

  return (
    <section
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-[#1a1a2e]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
            Floor Plans & Pricing
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Choose from our range of meticulously designed residences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {floorPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                darkMode ? 'bg-[#0f0f1e] border-2 border-[#c5a880]/20' : 'bg-[#f8f9fa] border-2 border-[#c5a880]/30'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
                {plan.config}
              </h3>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {plan.area}
              </p>
              <p className="text-2xl font-bold text-[#c5a880] mb-6">{plan.price}</p>
              <button
                onClick={handleDownload}
                className={`w-full py-3 rounded-lg transition-all hover:shadow-lg ${
                  darkMode
                    ? 'bg-[#c5a880] text-white hover:bg-[#8b7355]'
                    : 'bg-[#c5a880] text-white hover:bg-[#8b7355]'
                }`}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#c5a880] to-[#8b7355] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <Download size={24} />
            <span>Download Complete Brochure</span>
          </button>
        </div>
      </div>
    </section>
  );
}
