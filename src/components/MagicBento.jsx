import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const MagicBento = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Automotive Visualization",
      category: "3D Render",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CnjqbJcuL3Y/",
      size: "large", // spans 2 columns
      description: "Photorealistic car visualization with dynamic lighting"
    },
    {
      id: 2,
      title: "Product Launch",
      category: "Motion Graphics",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/Cs8sEL9LydE/",
      size: "medium",
      description: "Dynamic product reveal animation"
    },
    {
      id: 3,
      title: "VFX Sequence",
      category: "Visual Effects",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CorwTsAJlFr/",
      size: "medium",
      description: "Cinematic visual effects composition"
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "Design",
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CyBUEuuhwzR/",
      size: "small",
      description: "Complete visual identity system"
    },
    {
      id: 5,
      title: "Character Design",
      category: "3D Modeling",
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/Cx0R-EYpkWu/",
      size: "tall",
      description: "3D character modeling and texturing"
    },
    {
      id: 6,
      title: "Motion Graphics",
      category: "Animation",
      image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CwsIw2vp934/",
      size: "medium",
      description: "Dynamic brand animation sequence"
    },
    {
      id: 7,
      title: "Automotive Campaign",
      category: "3D Visualization",
      image: "https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/Cwh5rJkJcop/",
      size: "wide",
      description: "Complete automotive marketing visuals"
    },
    {
      id: 8,
      title: "Product Showcase",
      category: "3D Render",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CwNQ3arpL_i/",
      size: "small",
      description: "Premium product visualization"
    }
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      case 'tall':
        return 'md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1';
    }
  };

  const getImageHeight = (size) => {
    switch (size) {
      case 'large':
        return 'h-80 md:h-96';
      case 'tall':
        return 'h-80 md:h-96';
      case 'wide':
        return 'h-48 md:h-64';
      default:
        return 'h-48 md:h-56';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 ${getSizeClasses(project.size)}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Magic glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-xl"></div>
          </div>

          <div className="relative h-full flex flex-col">
            <div className={`relative overflow-hidden ${getImageHeight(project.size)}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors transform hover:scale-110"
                  >
                    <ExternalLink className="text-white" size={20} />
                  </a>
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors transform hover:scale-110">
                    <Play className="text-white" size={20} />
                  </button>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {project.category}
                </span>
              </div>

              {/* Magic corner accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Interactive elements */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        hoveredIndex === index 
                          ? 'bg-gradient-to-r from-purple-400 to-blue-400' 
                          : 'bg-white/20'
                      }`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
                
                <div className="text-white/40 group-hover:text-white/80 transition-colors">
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>

            {/* Magic border effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-purple-500/50 to-blue-500/50"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MagicBento;