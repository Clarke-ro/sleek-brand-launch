
import { Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CustomSolutionsCardProps {
  onGetStarted: (tierId: string) => void;
}

const CustomSolutionsCard = ({ onGetStarted }: CustomSolutionsCardProps) => {
  return (
    <div className="bg-gradient-to-br from-purple-400 to-pink-400 text-gray-900 p-8 rounded-3xl shadow-2xl max-w-md mx-auto">
      <div className="text-center">
        <h4 className="text-2xl font-bold mb-4">Custom Solutions</h4>
        <p className="text-gray-800 mb-6 text-lg leading-relaxed">
          Have a unique vision? Let's collaborate to create something extraordinary that perfectly aligns with your brand and objectives.
        </p>
        <Button
          onClick={() => onGetStarted('custom')}
          className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold shadow-lg rounded-xl"
        >
          <Crown className="w-5 h-5 mr-2" />
          Get Custom Quote
        </Button>
      </div>
    </div>
  );
};

export default CustomSolutionsCard;
