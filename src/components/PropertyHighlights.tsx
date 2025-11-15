import { Check } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface PropertyHighlightsProps {
  darkMode: boolean;
}

const highlights = [
  {
    title: 'Architectural Excellence',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: [
      'Contemporary design by award-winning architects',
      'Floor-to-ceiling windows with panoramic views',
      'Double-height living areas for grandeur',
      'Premium marble and wooden flooring',
    ],
  },
  {
    title: 'Prime Location Advantages',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: [
      'Just 10 minutes from business district',
      'Walking distance to metro station',
      'Surrounded by premium retail and dining',
      'Top-rated schools and hospitals nearby',
    ],
  },
  {
    title: 'World-Class Amenities',
    image: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: [
      'Olympic-size swimming pool with spa',
      'Fully equipped fitness center with trainer',
      'Landscaped gardens and meditation zones',
      '24/7 concierge and security services',
    ],
  },
  {
    title: 'Investment Potential',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: [
      'Rapidly appreciating neighborhood',
      'High rental yield potential',
      'RERA certified project',
      'Trusted developer with proven track record',
    ],
  },
];

export default function PropertyHighlights({ darkMode }: PropertyHighlightsProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-[#1a1a2e]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
            Property Highlights
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Every detail crafted for extraordinary living
          </p>
        </div>

        <div className="space-y-20">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex-1">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <h3 className={`text-3xl font-serif font-bold mb-6 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
                  {highlight.title}
                </h3>
                <ul className="space-y-4">
                  {highlight.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#c5a880] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check size={16} className="text-white" />
                      </div>
                      <span className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
