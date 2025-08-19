import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Phone, Mail, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const springAnimation = {
  type: "spring",
  duration: 1,
  delay: 0.2,
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Bentolio() {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  const demoWorks = [
    { title: "Escape VFX", type: "3D Visualization", image: "/src/assets/escape.jpg" },
    { title: "Deadpool Collab", type: "Product Design", image: "/src/assets/deadpool.jpg" },
    { title: "Launch Event", type: "Motion Graphics", image: "/src/assets/launch.jpg" },
    { title: "Space Explorer", type: "3D Animation", image: "/src/assets/space.jpg" },
    { title: "Automotive Render", type: "Car Visualization" },
  ];

  const ContactModal = () => (
    <AnimatePresence>
      {showContact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowContact(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Let's Create Together</h3>
              <p className="text-white/60">Ready to bring your vision to life</p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+918697325504"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <Phone className="text-blue-400 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-white">+91 86973 25504</span>
              </a>
              
              <a
                href="mailto:sayonbiswas75@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <Mail className="text-green-400 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-white">sayonbiswas75@gmail.com</span>
              </a>
              
              <a
                href="https://www.instagram.com/sayonbiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <Instagram className="text-pink-400 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-white">@sayonbiz</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/sayonbiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <Linkedin className="text-blue-500 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-white">sayonbiz</span>
              </a>

              <a
                href="https://www.youtube.com/@SayonBiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <Youtube className="text-red-500 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-white">@SayonBiz</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="relative flex flex-col gap-6 mx-auto px-4 sm:px-6 w-full max-w-[1400px] text-white">
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        {/* Header */}
        <motion.header 
          variants={fadeInUp}
          className="rounded-3xl w-full mb-8"
        >
          <div className="flex sm:flex-row flex-col justify-between items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl w-full">
            <h1 className="mb-4 sm:mb-0 font-light text-white text-2xl sm:text-3xl">
              <span className="font-bold">S∆YØN</span>
            </h1>
            <nav className="flex items-center gap-8">
              {['WORK', 'ABOUT', 'CONTACT'].map((link) => (
                <button 
                  key={link} 
                  onClick={() => {
                    if (link === 'WORK') navigate('/work');
                    if (link === 'CONTACT') setShowContact(true);
                  }}
                  className="font-light text-sm sm:text-base text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>
        </motion.header>

        {/* Main Grid */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Section */}
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 lg:col-span-8">
            {/* Profile Image - Appears FIRST */}
            <motion.div 
              initial={{ scale: 0, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                duration: 1.2,
                delay: 0.3
              }}
              className="sm:col-span-2 lg:col-span-3 rounded-3xl order-1 lg:order-2"
            >
              <div className="w-full h-full min-h-[400px] relative overflow-hidden rounded-3xl group">
                <img
                  src="/public/images/dp.jpg"
                  alt="S∆YØN Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>

            {/* All other elements appear together AFTER profile image */}
            {/* Hero Title */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring",
                duration: 1,
                delay: 1.5 // Appears after profile image
              }}
              className="sm:col-span-2 lg:col-span-5 rounded-3xl h-full order-2 lg:order-1 cursor-pointer"
              onClick={() => navigate('/work')}
            >
              <div className="flex flex-col justify-between p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-3xl h-full min-h-[400px] hover:from-purple-800/30 hover:to-blue-800/30 transition-all duration-500 group">
                <div className="flex justify-end w-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
                </div>
                <div>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-4"
                  >
                    3D VFX Artist &{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent italic font-light">
                      Automotive
                    </span>{' '}
                    Designer
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0 }}
                    className="text-white/60 text-lg mb-4"
                  >
                    Crafting cinematic visuals that drive brands forward
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="text-white/50 text-sm leading-relaxed mb-6"
                  >
                    Specializing in photorealistic 3D renders, automotive visualization, and brand storytelling. 
                    Collaborated with industry leaders to create compelling visual narratives that captivate audiences.
                  </motion.p>
                  <ArrowUpRight className="mt-4 text-white/40 group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" size={24} />
                </div>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                duration: 1,
                delay: 1.5 // Same delay as hero title
              }}
              className="sm:col-span-1 lg:col-span-4 order-3 cursor-pointer"
            >
              <div className="flex flex-col justify-between items-start gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl h-full hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce group-hover:animate-pulse"></div>
                  <h3 className="text-white font-semibold text-lg">Tech Stack</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-4 w-full">
                  {/* Blender */}
                  <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group/tech">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img src="/public/images/Logo_Blender.svg.png" alt="Blender" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-white/60 text-xs font-medium group-hover/tech:text-orange-400 transition-colors">Blender</span>
                  </div>

                  {/* After Effects */}
                  <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group/tech">
                    <div className="w-8 h-8 rounded-lg overflow-hidden">
                      <img src="/public/images/aelogo.png" alt="After Effects" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-white/60 text-xs font-medium group-hover/tech:text-purple-400 transition-colors">After Effects</span>
                  </div>

                  {/* DaVinci Resolve */}
                  <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group/tech">
                    <div className="w-8 h-8 rounded-lg overflow-hidden">
                      <img src="/public/images/DaVincilogo.png" alt="DaVinci Resolve" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-white/60 text-xs font-medium group-hover/tech:text-red-400 transition-colors">DaVinci</span>
                  </div>

                  {/* Photoshop */}
                  <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group/tech">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img src="/public/images/photoshoplogo.png" alt="Photoshop" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-white/60 text-xs font-medium group-hover/tech:text-blue-400 transition-colors">Photoshop</span>
                  </div>

                  {/* Final Cut Pro */}
                  <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group/tech">
                    <div className="w-8 h-8 rounded-lg overflow-hidden">
                      <img src="/public/images/2015_Final_Cut_Pro_Logo.png" alt="Final Cut Pro" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-white/60 text-xs font-medium group-hover/tech:text-gray-300 transition-colors">Final Cut</span>
                  </div>

                  {/* Lightroom */}
                  <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group/tech">
                    <div className="w-8 h-8 rounded-lg overflow-hidden">
                      <img src="/public/images/lightroomlogo.png" alt="Lightroom" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-white/60 text-xs font-medium group-hover/tech:text-blue-300 transition-colors">Lightroom</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Demo Works Scroll */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                duration: 1,
                delay: 1.5 // Same delay as other elements
              }}
              className="sm:col-span-1 lg:col-span-4 order-4 cursor-pointer"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl h-full p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-white font-semibold mb-4">Recent Works</h3>
                <div className="space-y-3 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20">
                  {demoWorks.map((work, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 + (0.1 * index) }}
                      className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                      onClick={() => navigate('/work')}
                    >
                      <p className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">{work.title}</p>
                      <p className="text-white/60 text-xs">{work.type}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Section - All appear together after profile image */}
          <div className="flex flex-col gap-6 lg:col-span-4">
{/* Client Logo Loop - Infinite Scroll */}
<motion.div 
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ 
    type: "spring",
    duration: 1,
    delay: 1.5
  }}
  className="cursor-pointer"
>
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors group overflow-hidden">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse group-hover:animate-bounce"></div>
      <h3 className="text-white font-semibold text-xl">Trusted By</h3>
    </div>
    
    {/* Wrapper with hidden overflow */}
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-12 items-center min-w-max"
        animate={{
          x: ["0%", "-50%"], // move left by half of the content width
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Logos - repeat set twice for seamless loop */}
        <div className="flex gap-12 items-center min-w-max">
          <img src="/images/redbulllogo.png" alt="Red Bull" className="h-10 w-auto object-contain" />
          <img src="/images/Realme_logo.png" alt="Realme" className="h-10 w-auto object-contain" />
          <img src="/images/soulstorelogo.webp" alt="The Souled Store" className="h-10 w-auto object-contain" />
        </div>

        <div className="flex gap-12 items-center min-w-max">
          <img src="/images/redbulllogo.png" alt="Red Bull" className="h-10 w-auto object-contain" />
          <img src="/images/Realme_logo.png" alt="Realme" className="h-10 w-auto object-contain" />
          <img src="/images/soulstorelogo.webp" alt="The Souled Store" className="h-10 w-auto object-contain" />
        </div>
      </motion.div>
    </div>
  </div>
</motion.div>


            {/* Featured Projects */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring",
                duration: 1,
                delay: 1.5 // Same delay as other elements
              }}
              className="cursor-pointer"
              onClick={() => navigate('/work')}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors group">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-semibold text-xl">What I Offer</h3>
                    <ArrowUpRight className="text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                  </div>
                  <div className="w-full h-48 rounded-2xl mb-4 relative overflow-hidden">
  <img 
    src="/images/image2.jpg" 
    alt="3D Animation" 
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
  <div className="absolute bottom-4 left-4">
    <p className="text-white font-medium">3D Animations</p>
    <p className="text-white/60 text-sm">3D Visualization</p>
  </div>
</div>
                </div>
                
                <div className="space-y-4">
                  {['VFX Sequence', 'Brand Identity', 'Product Animation'].map((project, index) => (
                    <div key={project} className="py-4 border-t border-white/10 first:border-t-0">
                      <p className="text-white font-medium group-hover:text-purple-400 transition-colors">{project}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring",
                duration: 1,
                delay: 1.5 // Same delay as other elements
              }}
            >
              <button
                onClick={() => setShowContact(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-3xl p-6 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <p className="text-white/90 text-sm">Ready to collaborate?</p>
                  <ArrowUpRight className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </div>
                <p className="text-white font-bold text-2xl">Hire Me</p>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring",
                duration: 1,
                delay: 1.5 // Same delay as other elements
              }}
            >
              <div className="flex justify-between items-center px-8 py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
                {[
                  { name: 'Instagram', url: 'https://www.instagram.com/sayonbiz/', icon: Instagram },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sayonbiz', icon: Linkedin },
                  { name: 'YouTube', url: 'https://www.youtube.com/@SayonBiz', icon: Youtube }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm group"
                  >
                    <social.icon size={16} className="group-hover:scale-110 transition-transform" />
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <ContactModal />
    </div>
  );
}