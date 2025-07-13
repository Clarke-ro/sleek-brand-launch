
import { motion } from 'framer-motion';
import { usePricingLogic } from './pricing/usePricingLogic';
import { pricingTiers, addOns } from './pricing/pricingData';
import PricingTier from './pricing/PricingTier';
import CurrencyToggle from './pricing/CurrencyToggle';
import PremiumAddOns from './pricing/PremiumAddOns';

const Pricing = () => {
  const { currency, formatPrice, handleGetStarted, toggleCurrency } = usePricingLogic();

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-marykate">
            Our Pricing Tiers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package for your business needs. All packages include our signature touch and dedication to excellence.
          </p>
          <CurrencyToggle currency={currency} onToggle={toggleCurrency} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={tier.id}
              {...tier}
              index={index}
              currency={currency}
              formatPrice={formatPrice}
              onGetStarted={handleGetStarted}
            />
          ))}
        </div>

        <PremiumAddOns
          addOns={addOns}
          formatPrice={formatPrice}
          onGetStarted={handleGetStarted}
        />
      </div>
    </section>
  );
};

export default Pricing;
