
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface AddOnCardProps {
  name: string;
  priceGHS: number;
  index: number;
  formatPrice: (priceGHS: number) => string;
}

const AddOnCard = ({ name, priceGHS, index, formatPrice }: AddOnCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative bg-gray-700/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-600/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
            <Zap className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg leading-tight text-center">{name}</h4>
          <div className="text-xl sm:text-2xl font-bold text-gold text-center">
            {formatPrice(priceGHS)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AddOnCard;
