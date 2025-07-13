
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface AddOnCardProps {
  name: string;
  priceGHS: number;
  index: number;
  formatPrice: (priceGHS: number) => string;
}

const AddOnCard = ({ name, priceGHS, index, formatPrice }: AddOnCardProps) => {
  const getCardColor = () => {
    const colors = ['bg-pink-300', 'bg-teal-300', 'bg-yellow-400', 'bg-purple-300'];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={`${getCardColor()} rounded-2xl p-6 h-full flex flex-col text-center hover:scale-105 transition-transform duration-300`}>
        <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center mb-4 mx-auto">
          <Check className="text-white w-5 h-5" />
        </div>
        <h4 className="font-semibold text-gray-900 mb-3 text-lg leading-tight">{name}</h4>
        <div className="text-2xl font-bold text-gray-900 mt-auto">
          {formatPrice(priceGHS)}
        </div>
      </div>
    </motion.div>
  );
};

export default AddOnCard;
