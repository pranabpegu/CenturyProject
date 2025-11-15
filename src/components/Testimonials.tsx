import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface TestimonialsProps {
  darkMode: boolean;
}

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Business Owner',
    text: 'Century Haven exceeded all our expectations. The attention to detail and quality of construction is remarkable. Our family absolutely loves the spacious layout and premium amenities.',
    rating: 5,
  },
  {
    name: 'Priya Malhotra',
    role: 'Architect',
    text: 'As an architect, I appreciate the thoughtful design and use of space. The location is perfect, and the community is wonderful. Best investment decision we made!',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    role: 'IT Executive',
    text: 'The smart home features and modern amenities make life so convenient. The security and maintenance are top-notch. Highly recommend Century Haven to anyone looking for luxury living.',
    rating: 5,
  },
];

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-[#0f0f1e]' : 'bg-[#f8f9fa]'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
            What Our Residents Say
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Trusted by families who call Century Haven home
          </p>
        </div>

        <div className="relative">
          <div className={`p-8 md:p-12 rounded-2xl ${darkMode ? 'bg-[#1a1a2e]' : 'bg-white'} shadow-2xl`}>
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={24} className="text-[#c5a880] fill-current" />
              ))}
            </div>
            <p className={`text-xl md:text-2xl mb-8 text-center leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              "{testimonials[currentIndex].text}"
            </p>
            <div className="text-center">
              <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
                {testimonials[currentIndex].name}
              </h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-[#c5a880] text-white p-3 rounded-full hover:bg-[#8b7355] transition-all shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-[#c5a880] text-white p-3 rounded-full hover:bg-[#8b7355] transition-all shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#c5a880] w-8' : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
