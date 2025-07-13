
import { motion } from 'framer-motion';
import { Apple, Chrome, Github, Figma, Slack, Twitter, Instagram, Facebook, Linkedin, Youtube, Zap, Building2 } from 'lucide-react';

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
  { icon: Building2, name: 'Enterprise' },
];

const LogoBanner = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 bg-navy/5 text-navy rounded-full text-sm font-semibold mb-6 border border-navy/10"
          >
            Industry Leaders Trust Professional Design
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            Join the Ranks of 
            <span className="text-gold"> Global Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every successful brand started with a vision and the right digital foundation. 
            Your journey to market leadership begins with exceptional design.
          </p>
        </motion.div>

        {/* Enhanced Logo Carousel */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -50 * logos.length] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex space-x-12 shrink-0"
            >
              {/* First set */}
              {logos.map((logo, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex flex-col items-center justify-center min-w-[140px] group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-gold/30">
                    <logo.icon className="h-12 w-12 text-navy/70 group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-navy transition-colors duration-300">
                    {logo.name}
                  </span>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex flex-col items-center justify-center min-w-[140px] group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-gold/30">
                    <logo.icon className="h-12 w-12 text-navy/70 group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-navy transition-colors duration-300">
                    {logo.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Professional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gold/30">
              <div className="text-4xl md:text-5xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">500+</div>
              <div className="text-gray-600 font-semibold">Brands Launched</div>
              <div className="text-sm text-gray-500 mt-1">Successfully deployed</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gold/30">
              <div className="text-4xl md:text-5xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">1000+</div>
              <div className="text-gray-600 font-semibold">Digital Solutions</div>
              <div className="text-sm text-gray-500 mt-1">Delivered globally</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gold/30">
              <div className="text-4xl md:text-5xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">24/7</div>
              <div className="text-gray-600 font-semibold">Premium Support</div>
              <div className="text-sm text-gray-500 mt-1">Always available</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gold/30">
              <div className="text-4xl md:text-5xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">99.9%</div>
              <div className="text-gray-600 font-semibold">Success Rate</div>
              <div className="text-sm text-gray-500 mt-1">Client satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoBanner;
