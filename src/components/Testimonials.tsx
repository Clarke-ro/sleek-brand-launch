
import { motion } from 'framer-motion';
import { Star, Quote, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import ReviewForm from './ReviewForm';

const staticTestimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, Bloom Wellness',
    content: 'Brand & Web Co. transformed our online presence completely. The website they created is not only beautiful but has increased our conversions by 40%. The team was professional, responsive, and delivered exactly what we needed.',
    rating: 5,
    image: `https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face`,
    company: 'wellness-company.com',
    result: '+40% conversions'
  },
  {
    name: 'Michael Chen',
    role: 'CEO, TechFlow Solutions',
    content: 'Working with Brand & Web Co. was a game-changer for our startup. They understood our vision from day one and created a brand identity that perfectly captures our company values. Our new website has helped us close 3x more deals.',
    rating: 5,
    image: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`,
    company: 'techflow.io',
    result: '3x more deals closed'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Owner, Artisan Coffee Co.',
    content: 'The team understood our vision from day one. They created a website that truly represents our brand and connects with our customers. Our online orders have increased by 150% since the launch. Highly recommended!',
    rating: 5,
    image: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face`,
    company: 'artisancoffee.com',
    result: '+150% online orders'
  },
];

interface Review {
  id: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  rating: number;
  content: string;
  created_at: string;
}

const Testimonials = () => {
  const [dynamicReviews, setDynamicReviews] = useState<Review[]>([]);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDynamicReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReviewSubmitted = () => {
    // Refresh reviews after a new one is submitted
    fetchReviews();
    setIsReviewFormOpen(false);
  };

  // Combine static and dynamic testimonials
  const allTestimonials = [
    ...staticTestimonials,
    ...dynamicReviews.map(review => ({
      name: review.name,
      role: review.role || 'Customer',
      content: review.content,
      rating: review.rating,
      image: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`,
      company: review.company || '',
      result: ''
    }))
  ];

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
            Don't just take our word for it - hear from the businesses we've helped grow and succeed
          </p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => setIsReviewFormOpen(true)}
            className="mt-8 inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            <Plus className="h-5 w-5" />
            Leave a Review
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <Quote className="h-8 w-8 text-gold mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-navy">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-1">
                      {testimonial.role}
                    </p>
                    {(testimonial.company || testimonial.result) && (
                      <div className="flex items-center gap-2">
                        {testimonial.company && (
                          <span className="text-xs text-gray-500">{testimonial.company}</span>
                        )}
                        {testimonial.result && (
                          <span className="text-xs bg-gold/20 text-navy px-2 py-1 rounded-full font-medium">
                            {testimonial.result}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gold fill-current" />
              ))}
            </div>
            <span className="text-navy font-semibold">5.0/5 average rating</span>
            <span className="text-gray-600">• {50 + dynamicReviews.length}+ happy clients</span>
          </div>
        </motion.div>
      </div>

      <ReviewForm 
        isOpen={isReviewFormOpen} 
        onClose={() => setIsReviewFormOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </section>
  );
};

export default Testimonials;
