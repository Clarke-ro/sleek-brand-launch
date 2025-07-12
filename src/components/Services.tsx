
import { motion } from 'framer-motion';
import { Monitor, Palette, Globe } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Design',
    description: 'Modern, responsive websites that convert visitors into customers. Built with the latest technologies and optimized for speed.',
  },
  {
    icon: Palette,
    title: 'Branding & Logos',
    description: 'Complete brand identity packages including logos, color schemes, and brand guidelines that make you stand out.',
  },
  {
    icon: Globe,
    title: 'Digital Presence Setup',
    description: 'Social media setup, business emails, and basic SEO to establish your professional online presence.',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to establish a powerful digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-navy" />
                </div>
                
                <h3 className="text-2xl font-semibold text-navy mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
