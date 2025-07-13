
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const features = ["Fast 3-5 day delivery", "Mobile-first responsive design", "SEO optimized"];
  
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop&q=80" 
          alt="Professional workspace" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-gray-50/85 backdrop-blur-sm"></div>
        
        {/* Animated Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-gold/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-20 w-12 h-12 bg-navy/20 rounded-full blur-lg"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-20 w-20 h-20 bg-gold/15 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-navy rounded-full text-sm font-medium mb-6 border border-gold/30"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-gold" />
            </motion.div>
            Professional Web Design & Branding
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="text-5xl md:text-7xl font-bold text-navy mb-6 leading-tight"
          >
            We Design Sleek,{' '}
            <motion.span 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.6 }} 
              className="text-gold relative"
            >
              Trustworthy
              <motion.div 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                transition={{ duration: 0.6, delay: 1 }} 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gold/30 rounded-full" 
              />
            </motion.span>{' '}
            Websites & Brands
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }} 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Professional websites and branding for growing businesses and modern entrepreneurs. 
            Transform your digital presence with designs that convert visitors into customers.
          </motion.p>
          
          {/* Enhanced Features List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 1 }} 
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={feature} 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }} 
                className="flex items-center gap-2 text-navy bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  <CheckCircle className="h-5 w-5 text-gold" />
                </motion.div>
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 1.4 }} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-navy hover:bg-navy/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">Get a Website</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
              </Button>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6, delay: 1.6 }} 
              className="text-sm text-gray-500"
            >
              Starting from $497 • Free consultation
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
