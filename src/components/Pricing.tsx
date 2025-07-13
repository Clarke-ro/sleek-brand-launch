
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Sparkles, Crown } from 'lucide-react';
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
          <div className="mt-6 flex justify-center items-center gap-4">
            <span className={`text-sm ${currency === 'GHS' ? 'text-white font-semibold' : 'text-gray-400'}`}>
              GHS (Cedis)
            </span>
            <button
              onClick={() => setCurrency(currency === 'GHS' ? 'USD' : 'GHS')}
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
              <Card className={`relative h-full bg-gray-800 border-gray-700 ${tier.popular ? 'border-gold border-2 shadow-xl' : ''}`}>
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
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gold">
                      {formatPrice(tier.priceGHS)}
                    </div>
                    <div className="text-sm text-gray-400">
                      <div>Down Payment: {formatPrice(tier.downPaymentGHS)}</div>
                      <div>Balance: {formatPrice(tier.balanceGHS)}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mt-4">{tier.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="text-gold mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleGetStarted(tier.id)}
                    className={`w-full ${
                      tier.popular
                        ? 'bg-gold text-navy hover:bg-gold/90'
                        : 'bg-white text-navy hover:bg-gray-100'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Premium Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-br from-gray-800 via-gray-800/80 to-gray-800 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-700 backdrop-blur-sm overflow-hidden">
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
                <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">
                  Premium Add-Ons
                </h3>
                <div className="p-3 bg-gradient-to-l from-gold to-gold/80 rounded-full shadow-lg">
                  <Crown className="text-navy w-6 h-6" />
                </div>
              </div>

              <p className="text-gray-300 mb-8 sm:mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Elevate your digital presence with our exclusive premium services
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                {addOns.map((addon, index) => (
                  <motion.div
                    key={index}
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
                        <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg leading-tight text-center">{addon.name}</h4>
                        <div className="text-xl sm:text-2xl font-bold text-gold text-center">
                          {formatPrice(addon.priceGHS)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

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
                    onClick={() => handleGetStarted('custom')}
                    variant="outline"
                    className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-navy transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl"
                  >
                    <Crown className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Get Custom Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
