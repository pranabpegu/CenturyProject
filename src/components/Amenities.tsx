import { Waves, Dumbbell, Users, Car, Shield, TreePine, Baby, Heart } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AmenitiesProps {
  darkMode: boolean;
}

const amenities = [
  { icon: Waves, label: 'Swimming Pool' },
  { icon: Dumbbell, label: 'Fitness Center' },
  { icon: Users, label: 'Clubhouse' },
  { icon: Car, label: 'Covered Parking' },
  { icon: Shield, label: '24/7 Security' },
  { icon: TreePine, label: 'Landscaped Gardens' },
  { icon: Baby, label: 'Kids Play Area' },
  { icon: Heart, label: 'Wellness Spa' },
];

export default function Amenities({ darkMode }: AmenitiesProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="amenities"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-[#1a1a2e]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
            World-Class Amenities
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Everything you need for a lifestyle of comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                darkMode ? 'bg-[#0f0f1e] hover:bg-[#252540]' : 'bg-[#f8f9fa] hover:bg-white'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#c5a880] to-[#8b7355] rounded-full flex items-center justify-center mb-4">
                <amenity.icon size={32} className="text-white" />
              </div>
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
                {amenity.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
