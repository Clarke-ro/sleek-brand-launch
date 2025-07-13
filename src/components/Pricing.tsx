
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PricingTier {
  id: string;
  name: string;
  icon: string;
  priceGHS: number;
  downPaymentGHS: number;
  balanceGHS: number;
  description: string;
  features: string[];
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    icon: '🥉',
    priceGHS: 1200,
    downPaymentGHS: 500,
    balanceGHS: 700,
    description: 'Great for solo entrepreneurs or restaurants needing an online presence.',
    features: [
      'Website Design (3 pages)',
      'Branding (logo & colors)',
      'WhatsApp integration',
      'Google Business Profile setup',
      'Mobile-responsive layout',
      'Basic SEO optimization'
    ]
  },
  {
    id: 'growth',
    name: 'Growth Package',
    icon: '🥈',
    priceGHS: 2500,
    downPaymentGHS: 1000,
    balanceGHS: 1500,
    description: 'Ideal for small businesses that need a strong brand and digital presence.',
    features: [
      'Everything in Starter, plus:',
      'Up to 6 website pages',
      'Advanced SEO & content strategy',
      'Social media profile branding',
      'Booking/contact form with email alerts',
      'Starter digital ads setup (Facebook/Instagram)',
      'Brand guidelines PDF',
      'Hosting + domain setup'
    ],
    popular: true
  },
  {
    id: 'pro',
    name: 'Pro Business Suite',
    icon: '🥇',
    priceGHS: 4500,
    downPaymentGHS: 2000,
    balanceGHS: 2500,
    description: 'Best for startups or growing businesses needing the full works.',
    features: [
      'Everything in Growth, plus:',
      'Mobile App UI Design (Figma, up to 10 screens)',
      'E-commerce or product catalog setup (if needed)',
      'Payment integration (Paystack, Momo)',
      'Ads campaign launch (Meta + Google)',
      'Email capture or newsletter form',
      '1-month post-launch support & edits'
    ]
  }
];

const addOns = [
  { name: 'Logo Design only', priceGHS: 300 },
  { name: 'One-page Landing Site', priceGHS: 600 },
  { name: 'Social Media Ads Campaign Setup', priceGHS: 500 },
  { name: 'Mobile App UI (standalone)', priceGHS: 1500 }
];

const Pricing = () => {
  const [currency, setCurrency] = useState<'GHS' | 'USD'>('USD');
  const [exchangeRate, setExchangeRate] = useState(12.5); // Default GHS to USD rate
  const [userLocation, setUserLocation] = useState<string>('');

  useEffect(() => {
    // Detect user location and set currency
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setUserLocation(data.country_code);
        
        // Set currency based on location
        if (data.country_code === 'GH') {
          setCurrency('GHS');
        } else {
          setCurrency('USD');
        }
      } catch (error) {
        console.log('Could not detect location, defaulting to USD');
        setCurrency('USD');
      }
    };

    detectLocation();

    // Fetch current exchange rate
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/GHS');
        const data = await response.json();
        setExchangeRate(1 / data.rates.USD);
      } catch (error) {
        console.log('Could not fetch exchange rate, using default');
      }
    };

    fetchExchangeRate();
  }, []);

  const convertPrice = (priceGHS: number) => {
    if (currency === 'GHS') {
      return priceGHS;
    }
    return Math.round(priceGHS / exchangeRate);
  };

  const formatPrice = (priceGHS: number) => {
    const convertedPrice = convertPrice(priceGHS);
    if (currency === 'GHS') {
      return `GHS ${convertedPrice.toLocaleString()}`;
    }
    return `$${convertedPrice.toLocaleString()}`;
  };

  const handleGetStarted = (tierId: string) => {
    // Scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-marykate">
            Our Pricing Tiers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your business needs. All packages include our signature touch and dedication to excellence.
          </p>
          <div className="mt-6 flex justify-center items-center gap-4">
            <span className={`text-sm ${currency === 'GHS' ? 'text-navy font-semibold' : 'text-gray-500'}`}>
              GHS (Cedis)
            </span>
            <button
              onClick={() => setCurrency(currency === 'GHS' ? 'USD' : 'GHS')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-navy transition-transform ${
                  currency === 'USD' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${currency === 'USD' ? 'text-navy font-semibold' : 'text-gray-500'}`}>
              USD (Dollars)
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full ${tier.popular ? 'border-gold border-2 shadow-xl' : 'border-gray-200'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={16} />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="text-4xl mb-2">{tier.icon}</div>
                  <CardTitle className="text-2xl font-bold text-navy mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-navy">
                      {formatPrice(tier.priceGHS)}
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Down Payment: {formatPrice(tier.downPaymentGHS)}</div>
                      <div>Balance: {formatPrice(tier.balanceGHS)}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">{tier.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="text-gold mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleGetStarted(tier.id)}
                    className={`w-full ${
                      tier.popular
                        ? 'bg-gold text-navy hover:bg-gold/90'
                        : 'bg-navy text-white hover:bg-navy/90'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap className="text-gold" size={24} />
              <h3 className="text-2xl font-bold text-navy">Bonus Add-Ons</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {addOns.map((addon, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-navy mb-2">{addon.name}</h4>
                  <div className="text-xl font-bold text-gold">
                    {formatPrice(addon.priceGHS)}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-navy to-navy/90 text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">📝 Custom Quotes Available</h4>
              <p className="text-gray-200 mb-4">
                Have a unique project in mind? Let's chat. We'll tailor a plan that meets your goals and budget.
              </p>
              <Button
                onClick={() => handleGetStarted('custom')}
                variant="outline"
                className="bg-white text-navy hover:bg-gray-100"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
