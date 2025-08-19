import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Automotive Visualization",
      category: "3d",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CnjqbJcuL3Y/",
      description: "Photorealistic car render with dynamic lighting"
    },
    {
      id: 2,
      title: "Product Animation",
      category: "animation",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/Cs8sEL9LydE/",
      description: "Motion graphics for premium brand"
    },
    {
      id: 3,
      title: "VFX Sequence",
      category: "vfx",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CorwTsAJlFr/",
      description: "Cinematic visual effects composition"
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "design",
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CyBUEuuhwzR/",
      description: "Complete visual identity system"
    },
    {
      id: 5,
      title: "Character Design",
      category: "3d",
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/Cwh5rJkJcop/",
      description: "3D character modeling and texturing"
    },
    {
      id: 6,
      title: "Motion Graphics",
      category: "animation",
      image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/CtbxbCnJK0n/",
      description: "Dynamic brand animation sequence"
    },
    {
      id: 7,
      title: "Automotive Campaign",
      category: "3d",
      image: "https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.instagram.com/p/ClTc4s3JgD-/",
      description: "Complete automotive marketing visuals"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: '3d', name: '3D Renders' },
    { id: 'animation', name: 'Animation' },
    { id: 'vfx', name: 'VFX' },
    { id: 'design', name: 'Design' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl sm:text-7xl font-bold text-white mb-6">
          Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Work</span>
        </h2>
        <p className="text-white/60 text-xl max-w-2xl mx-auto">
          Explore my latest projects in 3D visualization, VFX, and automotive design
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="text-white" size={20} />
                  </a>
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Play className="text-white" size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105">
          View All Projects
        </button>
      </motion.div>
    </section>
  );
};

export default Portfolio;