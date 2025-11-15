import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface GalleryProps {
  darkMode: boolean;
}

const images = [
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

export default function Gallery({ darkMode }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-[#0f0f1e]' : 'bg-[#f8f9fa]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
            Gallery
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            A visual journey through luxury living spaces
          </p>
        </div>

        <div className="relative mb-8">
          <div className="relative h-96 md:h-[600px] overflow-hidden rounded-2xl">
            <img
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative h-40 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-[#c5a880] transition-colors"
          >
            <X size={32} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-[#c5a880] transition-colors"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-[#c5a880] transition-colors"
          >
            <ChevronRight size={40} />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </section>
  );
}
