
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Award } from 'lucide-react';

const portfolioItems = [
  {
    title: 'ecommerce',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    ],
    type: 'single'
  },
  {
    title: 'portfolio',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    ],
    type: 'single'
  },
  {
    title: 'restaurant',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    ],
    type: 'stacked'
  },
  {
    title: 'healthcare',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    ],
    type: 'single'
  },
  {
    title: 'saas',
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    ],
    type: 'stacked'
  },
  {
    title: 'hotel',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    ],
    type: 'single'
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

        {/* Portfolio Grid with Mixed Layouts */}
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
              {/* Different layouts based on type */}
              <div className="relative mb-8 h-64">
                {item.type === 'single' ? (
                  // Single angled mockup
                  <div 
                    className="transform rotate-12 hover:rotate-6 transition-transform duration-500 origin-center h-full"
                    style={{ perspective: '1000px' }}
                  >
                    <div className="bg-white p-3 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 h-full">
                      {/* Browser chrome */}
                      <div className="flex items-center gap-2 mb-2 px-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-gray-100 rounded px-2 py-1 text-xs text-gray-500">
                          {item.title}.com
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded h-40 flex items-center justify-center border">
                        <div className="text-center p-4">
                          <div className="w-16 h-4 bg-gray-300 rounded mb-3 mx-auto"></div>
                          <div className="w-24 h-2 bg-gray-200 rounded mb-2 mx-auto"></div>
                          <div className="w-20 h-2 bg-gray-200 rounded mx-auto"></div>
                          <div className="w-12 h-6 bg-navy rounded mt-4 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Stacked mockups spread at angles
                  <div className="relative h-full">
                    {/* Back mockup */}
                    <div 
                      className="absolute top-4 left-4 transform rotate-6 transition-transform duration-500 w-48 h-56"
                      style={{ perspective: '1000px' }}
                    >
                      <div className="bg-white p-3 rounded-lg shadow-xl h-full">
                        <div className="flex items-center gap-1 mb-2">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded h-full flex items-center justify-center">
                          <div className="text-center p-2">
                            <div className="w-12 h-3 bg-gray-300 rounded mb-2 mx-auto"></div>
                            <div className="w-16 h-1.5 bg-gray-200 rounded mb-1 mx-auto"></div>
                            <div className="w-14 h-1.5 bg-gray-200 rounded mx-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Front mockup */}
                    <div 
                      className="absolute top-0 right-0 transform -rotate-6 hover:rotate-0 transition-transform duration-500 w-48 h-56 z-10"
                      style={{ perspective: '1000px' }}
                    >
                      <div className="bg-white p-3 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 h-full">
                        <div className="flex items-center gap-1 mb-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded h-full flex items-center justify-center border">
                          <div className="text-center p-2">
                            <div className="w-12 h-3 bg-gray-300 rounded mb-2 mx-auto"></div>
                            <div className="w-16 h-1.5 bg-gray-200 rounded mb-1 mx-auto"></div>
                            <div className="w-14 h-1.5 bg-gray-200 rounded mb-2 mx-auto"></div>
                            <div className="w-8 h-4 bg-navy rounded mx-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
