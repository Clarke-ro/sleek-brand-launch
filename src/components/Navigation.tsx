
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookingClick = () => {
    scrollToSection('booking');
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-navy">
            Brand & Web Co.
          </div>

          {/* Centered Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-navy hover:text-gold transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-navy hover:text-gold transition-colors font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-navy hover:text-gold transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-navy hover:text-gold transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={handleBookingClick}
              className="bg-navy text-white px-6 py-2 rounded-full hover:bg-navy/90 transition-colors font-medium"
            >
              Book Us Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-navy"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4 mb-4"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-navy hover:text-gold transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-navy hover:text-gold transition-colors font-medium text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-navy hover:text-gold transition-colors font-medium text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="text-navy hover:text-gold transition-colors font-medium text-left"
              >
                Contact
              </button>
              <button
                onClick={handleBookingClick}
                className="bg-navy text-white px-6 py-2 rounded-full hover:bg-navy/90 transition-colors font-medium text-center"
              >
                Book Us Now
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
