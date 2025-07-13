
export interface PricingTier {
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

export const pricingTiers: PricingTier[] = [
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

export const addOns = [
  { name: 'Logo Design only', priceGHS: 300 },
  { name: 'One-page Landing Site', priceGHS: 600 },
  { name: 'Social Media Ads Campaign Setup', priceGHS: 500 },
  { name: 'Mobile App UI (standalone)', priceGHS: 1500 }
];
