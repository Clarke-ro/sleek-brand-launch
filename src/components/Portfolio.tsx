
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Award } from 'lucide-react';

const portfolioItems = [
  {
    title: 'SaaS Dashboard',
    category: 'Analytics Platform',
    image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop`,
    description: 'Modern analytics dashboard with real-time data visualization'
  },
  {
    title: 'E-commerce Store',
    category: 'Online Shopping',
    image: `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop`,
    description: 'Conversion-optimized online store with seamless checkout'
  },
  {
    title: 'Creative Agency',
    category: 'Portfolio Website',
    image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop`,
    description: 'Stunning portfolio showcase with smooth animations'
  },
  {
    title: 'Restaurant Website',
    category: 'Food & Dining',
    image: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop`,
    description: 'Elegant restaurant site with integrated booking system'
  },
  {
    title: 'Tech Startup',
    category: 'Landing Page',
    image: `https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop`,
    description: 'High-converting landing page for lead generation'
  },
  {
    title: 'Healthcare Platform',
    category: 'Medical Portal',
    image: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop`,
    description: 'Patient portal with appointment scheduling features'
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

        {/* Website Mockups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Mockup Style Image */}
              <div className="relative">
                <div className="bg-gray-800 rounded-t-lg p-2">
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-700 rounded h-2 w-3/4"></div>
                </div>
                <div className="relative overflow-hidden rounded-b-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Dark Stylish Text */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-medium mb-2">
                  {item.category}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
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
          <button className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
