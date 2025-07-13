
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/6ace45e1-0a3d-4dce-af2f-b1e993a5fb5e.png" 
                alt="Brand & Web Co Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold font-marykate text-gold">Brand & Web Co.</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional websites and branding for growing businesses and modern entrepreneurs. 
              Transform your digital presence with designs that convert visitors into customers.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/brandandwebco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-gold transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/brandandwebco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-gold transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/brandandwebco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-gold transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/brandandwebco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-gold transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Web Design</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Brand Identity</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">E-commerce</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Maintenance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <span>brandandwebco@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span>Global Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Brand & Web Co. All rights reserved. Designed with ❤️ for growing businesses.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
