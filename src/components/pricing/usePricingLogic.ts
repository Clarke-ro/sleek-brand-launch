
import { useState, useEffect } from 'react';

export const usePricingLogic = () => {
  const [currency, setCurrency] = useState<'GHS' | 'USD'>('USD');
  const [exchangeRate, setExchangeRate] = useState(12.5);
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

  const toggleCurrency = () => {
    setCurrency(currency === 'GHS' ? 'USD' : 'GHS');
  };

  return {
    currency,
    userLocation,
    formatPrice,
    handleGetStarted,
    toggleCurrency
  };
};
