
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-navy/90">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-8 h-8 bg-gold/20 rounded-lg"
      />
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 right-32 w-12 h-12 bg-gold/15 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [-15, 15, -15],
          x: [-10, 10, -10]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 right-20 w-6 h-6 bg-gold/25 transform rotate-45"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border border-white/20"
          >
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-gold fill-current" />
              <span className="text-white font-semibold">5.0 Rating</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" />
              <span className="text-white font-semibold">50+ Happy Clients</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-gold" />
              <span className="text-white font-semibold">Worldwide Service</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build Your Dream
            <span className="block text-gold">Website Today</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We create stunning, high-converting websites that help your business grow. 
          From design to development, we handle everything so you can focus on what matters most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={scrollToBooking}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get a Website
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            onClick={() => {
              const element = document.getElementById('portfolio');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm"
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
