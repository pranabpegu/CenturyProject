import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ContactFormProps {
  darkMode: boolean;
}

export default function ContactForm({ darkMode }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    configuration: '',
    message: '',
    agree: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('Please agree to the privacy policy');
      return;
    }
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        configuration: '',
        message: '',
        agree: false,
      });
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-[#1a1a2e]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
            Request a Callback
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Our team will get in touch with you within 24 hours
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className={`p-8 rounded-2xl ${darkMode ? 'bg-[#0f0f1e]' : 'bg-[#f8f9fa]'} shadow-xl`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-[#c5a880] focus:outline-none transition-colors ${
                    darkMode ? 'bg-[#1a1a2e] border-gray-700 text-white' : 'bg-white border-gray-300 text-[#1a1a2e]'
                  }`}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-[#c5a880] focus:outline-none transition-colors ${
                    darkMode ? 'bg-[#1a1a2e] border-gray-700 text-white' : 'bg-white border-gray-300 text-[#1a1a2e]'
                  }`}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-[#c5a880] focus:outline-none transition-colors ${
                    darkMode ? 'bg-[#1a1a2e] border-gray-700 text-white' : 'bg-white border-gray-300 text-[#1a1a2e]'
                  }`}
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
                  Configuration Interested In
                </label>
                <select
                  value={formData.configuration}
                  onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-[#c5a880] focus:outline-none transition-colors ${
                    darkMode ? 'bg-[#1a1a2e] border-gray-700 text-white' : 'bg-white border-gray-300 text-[#1a1a2e]'
                  }`}
                >
                  <option value="">Select Configuration</option>
                  <option value="2bhk">2 BHK</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="4bhk">4 BHK</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-[#1a1a2e]'}`}>
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border-2 focus:border-[#c5a880] focus:outline-none transition-colors resize-none ${
                  darkMode ? 'bg-[#1a1a2e] border-gray-700 text-white' : 'bg-white border-gray-300 text-[#1a1a2e]'
                }`}
                placeholder="Tell us about your requirements..."
              />
            </div>

            <div className="mb-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="mt-1 w-5 h-5 text-[#c5a880] border-gray-300 rounded focus:ring-[#c5a880]"
                />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I agree to the privacy policy and consent to being contacted regarding this inquiry
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#c5a880] to-[#8b7355] text-white py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Request Callback
            </button>

            {showSuccess && (
              <div className="mt-4 p-4 bg-green-500 text-white rounded-lg text-center animate-fade-in">
                Thank you! We'll get back to you shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
