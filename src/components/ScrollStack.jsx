import React from 'react';
import { motion } from 'framer-motion';

const ScrollStack = () => {
  const works = [
    {
      id: 1,
      title: "Escape VFX",
      category: "3D Visualization",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CnjqbJcuL3Y/"
    },
    {
      id: 2,
      title: "Product Launch",
      category: "Motion Graphics",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/Cs8sEL9LydE/"
    },
    {
      id: 3,
      title: "Brand Collaboration",
      category: "VFX Sequence",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CorwTsAJlFr/"
    },
    {
      id: 4,
      title: "Automotive Render",
      category: "3D Design",
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CyBUEuuhwzR/"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative">
        {/* Scrollable container */}
        <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-white/20">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80 group perspective-1000"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:rotate-y-5">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors"
                    >
                      View on Instagram
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-400 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {work.category}
                  </p>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient overlays for scroll indication */}
        <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ScrollStack;