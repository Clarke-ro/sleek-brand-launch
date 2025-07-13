
import { motion } from 'framer-motion';
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
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-4">
          Premium Add-Ons
        </h3>
        <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
          Elevate your digital presence with our exclusive premium services
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
    </motion.div>
  );
};

export default PremiumAddOns;
