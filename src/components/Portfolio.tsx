
import { motion } from 'framer-motion';
import { ExternalLink, Star, TrendingUp, Users, Award } from 'lucide-react';

const portfolioItems = [
  {
    title: 'SaaS Dashboard Template',
    category: 'Web Application',
    image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop`,
    description: 'Modern analytics dashboard with real-time data visualization and user management.',
    metrics: 'Increased user engagement by 85%',
    tech: ['React', 'TypeScript', 'Chart.js'],
    highlight: 'Premium Template'
  },
  {
    title: 'E-commerce Storefront',
    category: 'Online Store',
    image: `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop`,
    description: 'Conversion-optimized online store with seamless checkout and inventory management.',
    metrics: 'Boosted sales conversion by 120%',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
    highlight: 'Best Seller'
  },
  {
    title: 'Creative Agency Portfolio',
    category: 'Business Website',
    image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop`,
    description: 'Stunning portfolio showcase with smooth animations and interactive galleries.',
    metrics: 'Enhanced brand perception by 200%',
    tech: ['Framer Motion', 'Sanity CMS', 'Vercel'],
    highlight: 'Award Winner'
  },
  {
    title: 'Restaurant Booking System',
    category: 'Hospitality',
    image: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop`,
    description: 'Elegant restaurant website with integrated reservation system and menu management.',
    metrics: 'Increased bookings by 150%',
    tech: ['WordPress', 'OpenTable API', 'Custom Theme'],
    highlight: 'Customer Favorite'
  },
  {
    title: 'Tech Startup Landing',
    category: 'Startup Website',
    image: `https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop`,
    description: 'High-converting landing page optimized for lead generation and investor presentations.',
    metrics: 'Generated 300+ qualified leads',
    tech: ['Vue.js', 'Nuxt', 'Headless CMS'],
    highlight: 'Trending'
  },
  {
    title: 'Healthcare Platform',
    category: 'Medical Website',
    image: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop`,
    description: 'HIPAA-compliant patient portal with appointment scheduling and telehealth features.',
    metrics: 'Improved patient satisfaction by 95%',
    tech: ['HIPAA Compliance', 'Telehealth API', 'Secure Auth'],
    highlight: 'Industry Leader'
  },
];

const stats = [
  { number: '50+', label: 'Templates Created', icon: Award },
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
            ✨ Premium Templates & Custom Solutions
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Template Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Professional website templates and custom solutions designed to help your business stand out and convert visitors into customers
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
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <stat.icon className="h-8 w-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl md:text-3xl font-bold text-navy mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-navy">
                    {item.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-navy">
                    {item.highlight}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-gold" />
                      <span className="text-sm font-semibold text-navy">{item.metrics}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 hover:bg-gold/20 text-gray-700 hover:text-navy text-xs rounded-full font-medium transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Want to see more examples or discuss a custom project?</p>
          <button className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All Templates
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
