
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { usePWA } from '@/hooks/usePWA';
import { useState } from 'react';

const InstallPrompt = () => {
  const { isInstallable, promptInstall } = usePWA();
  const [isDismissed, setIsDismissed] = useState(false);

  if (!isInstallable || isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto"
      >
        <div className="bg-navy text-white p-4 rounded-xl shadow-lg">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <Download className="h-6 w-6 text-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold mb-1">Install App</h3>
              <p className="text-xs text-gray-300 mb-3">
                Install Brand & Web Co. for quick access and offline functionality!
              </p>
              <div className="flex gap-2">
                <button
                  onClick={promptInstall}
                  className="bg-gold text-navy px-3 py-1 rounded-lg text-xs font-medium hover:bg-gold/90 transition-colors"
                >
                  Install
                </button>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InstallPrompt;
