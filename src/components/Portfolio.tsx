
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Modern E-commerce Store',
    category: 'Website Design',
    image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop`,
    description: 'Clean, conversion-focused online store with seamless checkout experience.',
    metrics: '+40% conversion rate',
    tech: ['React', 'Tailwind', 'Stripe'],
  },
  {
    title: 'Tech Startup Branding',
    category: 'Brand Identity',
    image: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop`,
    description: 'Complete rebrand for a growing SaaS company including logo and guidelines.',
    metrics: '100% brand consistency',
    tech: ['Logo Design', 'Brand Kit', 'Guidelines'],
  },
  {
    title: 'Restaurant Website',
    category: 'Website Design',
    image: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop`,
    description: 'Elegant restaurant website with online reservation system.',
    metrics: '+60% online bookings',
    tech: ['WordPress', 'Booking System', 'Mobile'],
  },
  {
    title: 'Consulting Firm Brand',
    category: 'Brand Identity',
    image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop`,
    description: 'Professional branding for business consulting firm.',
    metrics: '200% client trust increase',
    tech: ['Brand Strategy', 'Visual Identity', 'Collateral'],
  },
  {
    title: 'Creative Agency Site',
    category: 'Website Design',
    image: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop`,
    description: 'Bold, creative website showcasing agency capabilities.',
    metrics: '+90% engagement time',
    tech: ['Custom Design', 'Animation', 'Portfolio'],
  },
  {
    title: 'Fitness Brand Identity',
    category: 'Brand Identity',
    image: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop`,
    description: 'Energetic brand identity for fitness coaching business.',
    metrics: '+150% social following',
    tech: ['Logo', 'Social Media', 'Merchandise'],
  },
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '3-5', label: 'Days Average Delivery' },
  { number: '24/7', label: 'Support Available' },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Recent projects that showcase our design expertise and the results we deliver for our clients
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-navy">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-gold fill-current" />
                      <span className="text-sm font-medium text-navy">{item.metrics}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
