
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
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
  const getCardColor = () => {
    if (index === 0) return 'bg-pink-300';
    if (index === 1) return 'bg-teal-300';
    return 'bg-yellow-400';
  };

  const getTextColor = () => {
    return 'text-gray-900';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className={`${getCardColor()} rounded-3xl p-8 h-full flex flex-col relative overflow-hidden`}>
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <h3 className={`text-lg font-medium ${getTextColor()} mb-2`}>
            {name}
          </h3>
          <div className="mb-4">
            <div className={`text-5xl font-bold ${getTextColor()} mb-2`}>
              {formatPrice(priceGHS)}
            </div>
            <div className={`text-sm ${getTextColor()} opacity-80`}>
              <div>Down Payment: {formatPrice(downPaymentGHS)}</div>
              <div>Balance: {formatPrice(balanceGHS)}</div>
            </div>
          </div>
          <p className={`${getTextColor()} opacity-80 text-sm`}>{description}</p>
        </div>

        <div className="flex-1 mb-8">
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="text-white" size={12} />
                </div>
                <span className={`${getTextColor()} text-sm leading-relaxed`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          onClick={() => onGetStarted(id)}
          className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-xl py-3 font-semibold"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingTier;
