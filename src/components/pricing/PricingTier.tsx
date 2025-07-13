
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PricingTierProps {
  id: string;
  name: string;
  icon: string;
  priceGHS: number;
  downPaymentGHS: number;
  balanceGHS: number;
  description: string;
  features: string[];
  popular?: boolean;
  index: number;
  currency: 'GHS' | 'USD';
  formatPrice: (priceGHS: number) => string;
  onGetStarted: (tierId: string) => void;
}

const PricingTier = ({ 
  id, 
  name, 
  icon, 
  priceGHS, 
  downPaymentGHS, 
  balanceGHS, 
  description, 
  features, 
  popular, 
  index, 
  formatPrice, 
  onGetStarted 
}: PricingTierProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className={`relative h-full bg-white border-gray-200 ${popular ? 'border-gold border-2 shadow-xl' : ''}`}>
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Star size={16} />
              Most Popular
            </div>
          </div>
        )}
        
        <CardHeader className="text-center pb-6">
          <div className="text-4xl mb-2">{icon}</div>
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
            {name}
          </CardTitle>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gold">
              {formatPrice(priceGHS)}
            </div>
            <div className="text-sm text-gray-600">
              <div>Down Payment: {formatPrice(downPaymentGHS)}</div>
              <div>Balance: {formatPrice(balanceGHS)}</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">{description}</p>
        </CardHeader>

        <CardContent className="pt-0">
          <ul className="space-y-3 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="text-gold mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            onClick={() => onGetStarted(id)}
            className={`w-full ${
              popular
                ? 'bg-gold text-navy hover:bg-gold/90'
                : 'bg-navy text-white hover:bg-navy/90'
            }`}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PricingTier;
