
import { motion } from 'framer-motion';

const LogoBanner = () => {
  // Using popular tech brand logos as SVG icons
  const logos = [
    { name: 'Google', icon: '🔍' },
    { name: 'Microsoft', icon: '🪟' },
    { name: 'Apple', icon: '🍎' },
    { name: 'Amazon', icon: '📦' },
    { name: 'Meta', icon: '👥' },
    { name: 'Netflix', icon: '🎬' },
    { name: 'Spotify', icon: '🎵' },
    { name: 'Adobe', icon: '🎨' },
    { name: 'Shopify', icon: '🛒' },
    { name: 'Slack', icon: '💬' },
    { name: 'Dropbox', icon: '📁' },
    { name: 'Zoom', icon: '📹' },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-gray-50/50 py-12 relative">
      {/* Thin black labels with white strips at top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent via-transparent to-white opacity-50"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent via-transparent to-white opacity-50"></div>
      </div>
      
      {/* Gradient masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50/50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50/50 to-transparent z-10"></div>
      
      <div className="text-center mb-8 relative z-20">
        <p className="text-gray-600 text-sm font-medium">Trusted by teams at</p>
      </div>
      
      <motion.div
        className="flex items-center gap-12"
        animate={{
          x: [0, -50 * logos.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{ width: `${100 * logos.length}px` }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center w-24 h-16 text-3xl brightness-125 hover:brightness-150 transition-all duration-300 opacity-80 hover:opacity-100"
          >
            <span role="img" aria-label={logo.name}>
              {logo.icon}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoBanner;
