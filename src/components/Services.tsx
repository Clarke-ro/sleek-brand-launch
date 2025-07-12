
import { motion } from 'framer-motion';
import { Monitor, Palette, Globe, Clock, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Design & Development',
    description: 'Modern, responsive websites that convert visitors into customers. Built with the latest technologies and optimized for speed and performance.',
    features: ['Mobile-first design', 'Lightning-fast loading', 'SEO optimized', 'Analytics setup'],
    price: 'From $497'
  },
  {
    icon: Palette,
    title: 'Branding & Logo Design',
    description: 'Complete brand identity packages including logos, color schemes, typography, and comprehensive brand guidelines that make you stand out.',
    features: ['Logo variations', 'Brand guidelines', 'Color palette', 'Business cards'],
    price: 'From $297'
  },
  {
    icon: Globe,
    title: 'Digital Presence Setup',
    description: 'Complete digital ecosystem setup including social media profiles, business emails, Google My Business, and basic SEO foundation.',
    features: ['Social media setup', 'Professional email', 'Google My Business', 'Local SEO'],
    price: 'From $197'
  },
];

const benefits = [
  { icon: Clock, title: 'Fast Delivery', description: '3-5 business days turnaround' },
  { icon: Shield, title: 'Quality Guarantee', description: 'Unlimited revisions until perfect' },
  { icon: Zap, title: 'Ready to Launch', description: 'Complete setup, ready to go live' },
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Everything you need to establish a powerful digital presence that drives results
          </p>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-navy" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-navy">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 h-full flex flex-col">
                <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-navy" />
                </div>
                
                <h3 className="text-2xl font-semibold text-navy mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-2xl font-bold text-navy">{service.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
