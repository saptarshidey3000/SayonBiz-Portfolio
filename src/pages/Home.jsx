import React from 'react';
import { motion } from 'framer-motion';
import Bentolio from '../components/Bentolio';
import About from '../components/About';
import LogoLoop from '../components/LogoLoop';
import ScrollStack from '../components/ScrollStack';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <Bentolio />
      </section>

      {/* Demo Works Stack */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Works</h2>
          <p className="text-white/60">Scroll through my latest creations</p>
        </motion.div>
        <ScrollStack />
      </section>

      {/* Client Logo Loop */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-light text-white/60 mb-8">Trusted by Industry Leaders</h2>
        </motion.div>
        <LogoLoop />
      </section>

      {/* About Section */}
      <About />

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Ready to Create Something{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Amazing?
              </span>
            </h2>
            <p className="text-white/60 text-xl mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with cutting-edge 3D visualization and VFX
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">
              © 2024 S∆YØN. All rights reserved. | Crafted with passion for visual excellence.
            </p>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Home;