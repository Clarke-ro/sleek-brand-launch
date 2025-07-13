
interface CurrencyToggleProps {
  currency: 'GHS' | 'USD';
  onToggle: () => void;
}

const CurrencyToggle = ({ currency, onToggle }: CurrencyToggleProps) => {
  return (
    <div className="mt-6 flex justify-center items-center gap-4">
      <span className={`text-sm ${currency === 'GHS' ? 'text-white font-semibold' : 'text-gray-400'}`}>
        GHS (Cedis)
      </span>
      <button
        onClick={onToggle}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700 transition-colors hover:bg-gray-600"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-gold transition-transform ${
            currency === 'USD' ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm ${currency === 'USD' ? 'text-white font-semibold' : 'text-gray-400'}`}>
        USD (Dollars)
      </span>
    </div>
  );
};

export default CurrencyToggle;
