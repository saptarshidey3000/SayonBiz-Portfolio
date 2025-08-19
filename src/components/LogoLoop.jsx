import React from 'react';
import { motion } from 'framer-motion';

const LogoLoop = () => {
  const clients = [
    'Red Bull', 'Vivo', 'Redmi', 'Soulstore', 'BMW', 'Mercedes', 'Audi', 'Tesla'
  ];

  return (
    <div className="py-16 overflow-hidden">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 text-4xl font-bold text-white/20 hover:text-white/60 transition-colors"
          >
            {client}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;