
import { Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CustomSolutionsCardProps {
  onGetStarted: (tierId: string) => void;
}

const CustomSolutionsCard = ({ onGetStarted }: CustomSolutionsCardProps) => {
  return (
    <div className="relative bg-gradient-to-r from-gray-700 via-gray-700/95 to-gray-700 text-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-600/20 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-br from-gold to-transparent rounded-full -translate-x-16 sm:-translate-x-32 -translate-y-16 sm:-translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-24 sm:w-48 h-24 sm:h-48 bg-gradient-to-tl from-gold/50 to-transparent rounded-full translate-x-12 sm:translate-x-24 translate-y-12 sm:translate-y-24"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 sm:mb-6">
          <div className="p-2 bg-gold/20 rounded-lg">
            <Sparkles className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-center">Custom Solutions Available</h4>
        </div>
        <p className="text-gray-200 mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-center">
          Have a unique vision? Let's collaborate to create something extraordinary that perfectly aligns with your brand and objectives.
        </p>
        <Button
          onClick={() => onGetStarted('custom')}
          variant="outline"
          className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-navy transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl"
        >
          <Crown className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Get Custom Quote
        </Button>
      </div>
    </div>
  );
};

export default CustomSolutionsCard;
