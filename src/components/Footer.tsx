
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="text-2xl font-bold mb-4">Brand & Web Co.</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We create stunning websites and powerful brand identities that help businesses 
              stand out in the digital world. From concept to launch, we're your digital partners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold/80 transition-colors">
                <Facebook className="h-5 w-5 text-navy" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold/80 transition-colors">
                <Instagram className="h-5 w-5 text-navy" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold/80 transition-colors">
                <Twitter className="h-5 w-5 text-navy" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold/80 transition-colors">
                <Linkedin className="h-5 w-5 text-navy" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Book Us Now
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <a href="mailto:brandandwebco@gmail.com" className="text-gray-300 hover:text-gold transition-colors">
                  brandandwebco@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-gold transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="text-gray-300">Worldwide Remote Services</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Brand & Web Co. All rights reserved. Built with passion for digital excellence.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
