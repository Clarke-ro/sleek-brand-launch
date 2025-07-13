
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Award } from 'lucide-react';

const portfolioItems = [
  {
    title: 'ecommerce',
    image: `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop`,
  },
  {
    title: 'portfolio',
    image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop`,
  },
  {
    title: 'Healthcare',
    image: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop`,
  },
  {
    title: 'restaurant',
    image: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop`,
  },
  {
    title: 'SaaS',
    image: `https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop`,
  },
  {
    title: 'Hotel',
    image: `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop`,
  },
];

const stats = [
  { number: '50+', label: 'Websites Built', icon: Award },
  { number: '99.9%', label: 'Uptime Guarantee', icon: TrendingUp },
  { number: '24/7', label: 'Premium Support', icon: Users },
  { number: '3-Day', label: 'Quick Delivery', icon: Star },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gold/20 text-navy rounded-full text-sm font-medium mb-6"
          >
            ✨ Our Work Portfolio
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Websites We've Built
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Beautiful, functional websites designed to help businesses grow and succeed online
          </p>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-6 hover:bg-gold/5 transition-all duration-300 border border-gray-100">
                  <stat.icon className="h-8 w-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl md:text-3xl font-bold text-navy mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid - Angled Mockup Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Angled mockup container */}
              <div className="relative mb-8">
                <div 
                  className="transform rotate-12 hover:rotate-6 transition-transform duration-500 origin-center"
                  style={{ perspective: '1000px' }}
                >
                  <div className="bg-white p-4 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover rounded"
                    />
                    <div className="h-2 bg-gray-100 rounded mt-2"></div>
                    <div className="h-1 bg-gray-50 rounded mt-1"></div>
                  </div>
                </div>
              </div>
              
              {/* Stylish text label */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-light text-navy tracking-wide lowercase group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Ready to get your own professional website?</p>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
