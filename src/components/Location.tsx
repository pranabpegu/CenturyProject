import { MapPin, GraduationCap, Cross, ShoppingBag, Plane } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LocationProps {
  darkMode: boolean;
}

const landmarks = [
  { icon: GraduationCap, name: 'International School', distance: '2 km' },
  { icon: Cross, name: 'Multi-Specialty Hospital', distance: '1.5 km' },
  { icon: ShoppingBag, name: 'Premium Mall', distance: '3 km' },
  { icon: Plane, name: 'International Airport', distance: '15 km' },
  { icon: MapPin, name: 'Metro Station', distance: '500 m' },
  { icon: MapPin, name: 'Business District', distance: '5 km' },
];

export default function Location({ darkMode }: LocationProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="location"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-[#0f0f1e]' : 'bg-[#f8f9fa]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
            Location & Connectivity
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Strategically located with excellent connectivity to key landmarks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {landmarks.map((landmark, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${
                  darkMode ? 'bg-[#1a1a2e] hover:bg-[#252540]' : 'bg-white hover:shadow-lg'
                } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#c5a880] to-[#8b7355] rounded-lg flex items-center justify-center flex-shrink-0">
                  <landmark.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
                    {landmark.name}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {landmark.distance} away
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4953094906843!2d77.3696617!3d28.6171917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzAxLjkiTiA3N8KwMjInMTAuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
