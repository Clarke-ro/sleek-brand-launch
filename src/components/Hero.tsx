import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const features = ["Fast 3-5 day delivery", "Mobile-first responsive design", "SEO optimized"];
  return <section className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop&q=80" alt="Professional workspace" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-gray-50/85 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: "easeOut"
      }}>
          
          
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-5xl md:text-7xl font-bold text-navy mb-6 leading-tight">
            We Design Sleek,{' '}
            <motion.span initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="text-gold relative">
              Trustworthy
              <motion.div initial={{
              scaleX: 0
            }} animate={{
              scaleX: 1
            }} transition={{
              duration: 0.6,
              delay: 1
            }} className="absolute -bottom-2 left-0 right-0 h-1 bg-gold/30 rounded-full" />
            </motion.span>{' '}
            Websites & Brands
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional websites and branding for growing businesses and modern entrepreneurs. 
            Transform your digital presence with designs that convert visitors into customers.
          </motion.p>
          
          {/* Features List */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 1
        }} className="flex flex-wrap justify-center gap-6 mb-8">
            {features.map((feature, index) => <motion.div key={feature} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 1.2 + index * 0.1
          }} className="flex items-center gap-2 text-navy">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span className="font-medium">{feature}</span>
              </motion.div>)}
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.4
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-navy hover:bg-navy/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
              Get a Website
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 1.6
          }} className="text-sm text-gray-500">
              Starting from $497 • Free consultation
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;