
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Brand & Web Co.</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional websites and branding for growing businesses and modern entrepreneurs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-gold transition-colors">Website Design</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Branding & Logos</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Digital Presence</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Digital Advertising</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:brandandwebco@gmail.com" className="hover:text-gold transition-colors">brandandwebco@gmail.com</a></li>
              <li><a href="https://wa.me/1234567890" className="hover:text-gold transition-colors">WhatsApp</a></li>
              <li><a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a></li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Brand & Web Co. All rights reserved.
          </p>
          
          <div className="flex items-center text-gray-400 text-sm mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-gold mx-1 fill-current" /> for growing businesses
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
