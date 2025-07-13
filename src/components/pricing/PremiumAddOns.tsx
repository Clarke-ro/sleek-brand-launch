
import { motion } from 'framer-motion';
import { Sparkles, Crown } from 'lucide-react';
import AddOnCard from './AddOnCard';
import CustomSolutionsCard from './CustomSolutionsCard';

interface AddOn {
  name: string;
  priceGHS: number;
}

interface PremiumAddOnsProps {
  addOns: AddOn[];
  formatPrice: (priceGHS: number) => string;
  onGetStarted: (tierId: string) => void;
}

const PremiumAddOns = ({ addOns, formatPrice, onGetStarted }: PremiumAddOnsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-200 backdrop-blur-sm overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-gold/5 to-transparent rounded-full translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-gold rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-gold rounded-full animate-pulse delay-1000"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="p-3 bg-gradient-to-r from-gold to-gold/80 rounded-full shadow-lg">
              <Sparkles className="text-navy w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
              Premium Add-Ons
            </h3>
            <div className="p-3 bg-gradient-to-l from-gold to-gold/80 rounded-full shadow-lg">
              <Crown className="text-navy w-6 h-6" />
            </div>
          </div>

          <p className="text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Elevate your digital presence with our exclusive premium services
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {addOns.map((addon, index) => (
              <AddOnCard
                key={index}
                name={addon.name}
                priceGHS={addon.priceGHS}
                index={index}
                formatPrice={formatPrice}
              />
            ))}
          </div>

          <CustomSolutionsCard onGetStarted={onGetStarted} />
        </div>
      </div>
    </motion.div>
  );
};

export default PremiumAddOns;
