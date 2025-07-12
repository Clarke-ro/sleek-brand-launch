
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, Bloom Wellness',
    content: 'Brand & Web Co. transformed our online presence completely. The website they created is not only beautiful but has increased our conversions by 40%.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CEO, TechFlow Solutions',
    content: 'Professional, responsive, and delivered exactly what we needed. Our new brand identity perfectly captures our company values.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Owner, Artisan Coffee Co.',
    content: 'The team understood our vision from day one. They created a website that truly represents our brand and connects with our customers.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="font-semibold text-navy">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
