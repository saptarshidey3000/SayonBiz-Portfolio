import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagicBento from '../components/MagicBento';

const Work = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div className="text-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto">
            Explore my portfolio of 3D visualizations, VFX sequences, and automotive designs
          </p>
        </div>
      </motion.div>

      {/* Magic Bento Grid */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        <MagicBento />
      </motion.div>
    </div>
  );
};

export default Work;