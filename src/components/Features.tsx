import { Home, Maximize, Sparkles, MapPin, Building, Shield } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FeaturesProps {
  darkMode: boolean;
}

const features = [
  {
    icon: Home,
    title: '3-4 BHK Options',
    description: 'Spacious configurations designed for modern living',
  },
  {
    icon: Maximize,
    title: '2500-4000 Sq.Ft',
    description: 'Expansive floor plans with optimal space utilization',
  },
  {
    icon: Sparkles,
    title: 'Premium Finishes',
    description: 'Imported fittings and luxury interiors throughout',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Strategic location with excellent connectivity',
  },
  {
    icon: Building,
    title: 'Smart Home Ready',
    description: 'Integrated automation and modern technology',
  },
  {
    icon: Shield,
    title: 'Vastu Compliant',
    description: 'Designed following traditional principles',
  },
];

export default function Features({ darkMode }: FeaturesProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="features"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-[#0f0f1e]' : 'bg-[#f8f9fa]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
            Key Features
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Discover what makes Century Haven the epitome of luxury living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                darkMode ? 'bg-[#1a1a2e] hover:bg-[#252540]' : 'bg-white hover:shadow-[#c5a880]/20'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#c5a880] to-[#8b7355] rounded-xl flex items-center justify-center mb-6">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className={`text-2xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
                {feature.title}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
