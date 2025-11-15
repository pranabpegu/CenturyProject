import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import PropertyHighlights from './components/PropertyHighlights';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-[#0f0f1e]' : 'bg-white'} transition-colors duration-300`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Features darkMode={darkMode} />
      <PropertyHighlights darkMode={darkMode} />
      <Gallery darkMode={darkMode} />
      <Amenities darkMode={darkMode} />
      <Location darkMode={darkMode} />
      <Pricing darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <ContactForm darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <FloatingButtons />
    </div>
  );
}

export default App;
