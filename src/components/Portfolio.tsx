
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Modern E-commerce Store',
    category: 'Website Design',
    image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop`,
    description: 'Clean, conversion-focused online store with seamless checkout experience.',
  },
  {
    title: 'Tech Startup Branding',
    category: 'Brand Identity',
    image: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop`,
    description: 'Complete rebrand for a growing SaaS company including logo and guidelines.',
  },
  {
    title: 'Restaurant Website',
    category: 'Website Design',
    image: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop`,
    description: 'Elegant restaurant website with online reservation system.',
  },
  {
    title: 'Consulting Firm Brand',
    category: 'Brand Identity',
    image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop`,
    description: 'Professional branding for business consulting firm.',
  },
  {
    title: 'Creative Agency Site',
    category: 'Website Design',
    image: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop`,
    description: 'Bold, creative website showcasing agency capabilities.',
  },
  {
    title: 'Fitness Brand Identity',
    category: 'Brand Identity',
    image: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop`,
    description: 'Energetic brand identity for fitness coaching business.',
  },
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recent projects that showcase our design expertise and attention to detail
          </p>
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
                </div>
                
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gold/20 text-navy text-sm font-medium rounded-full mb-3">
                    {item.category}
                  </span>
                  
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {item.description}
                  </p>
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
