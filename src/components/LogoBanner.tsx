
import { motion } from 'framer-motion';
import { Apple, Chrome, Github, Figma, Slack, Twitter, Instagram, Facebook, Linkedin, Youtube, Zap } from 'lucide-react';

const logos = [
  { icon: Apple, name: 'Apple' },
  { icon: Chrome, name: 'Google' },
  { icon: Github, name: 'GitHub' },
  { icon: Figma, name: 'Figma' },
  { icon: Slack, name: 'Slack' },
  { icon: Twitter, name: 'Twitter' },
  { icon: Instagram, name: 'Instagram' },
  { icon: Facebook, name: 'Meta' },
  { icon: Linkedin, name: 'LinkedIn' },
  { icon: Youtube, name: 'YouTube' },
  { icon: Zap, name: 'Tesla' },
  { icon: Chrome, name: 'Samsung' },
];

const LogoBanner = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Top thin black stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-navy">
        <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
      </div>
      
      {/* Bottom thin black stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-navy">
        <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Be Inspired by Global Leaders
          </h2>
          <p className="text-gray-600 text-lg">
            These brands started somewhere. Your journey to greatness begins with the right digital foundation
          </p>
        </motion.div>

        {/* Scrolling Logo Animation */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -50 * logos.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex space-x-16 shrink-0"
            >
              {/* First set */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex flex-col items-center justify-center min-w-[120px] group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-md border border-gray-100">
                    <logo.icon className="h-10 w-10 text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-navy transition-colors duration-300">
                    {logo.name}
                  </span>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex flex-col items-center justify-center min-w-[120px] group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-md border border-gray-100">
                    <logo.icon className="h-10 w-10 text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-navy transition-colors duration-300">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-navy mb-2">500+</div>
            <div className="text-gray-600 font-medium">Brands Launched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-navy mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Digital Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-navy mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Creative Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-navy mb-2">99.9%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoBanner;
