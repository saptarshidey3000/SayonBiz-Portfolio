import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const tools = [
    { name: 'Cinema 4D', level: 95 },
    { name: 'Blender', level: 90 },
    { name: 'After Effects', level: 88 },
    { name: 'Octane Render', level: 92 },
    { name: 'Photoshop', level: 85 },
    { name: 'Premiere Pro', level: 80 }
  ];

  const stats = [
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '25+', label: 'Happy Clients' },
    { icon: Zap, number: '3+', label: 'Years Experience' },
    { icon: Target, number: '100%', label: 'Client Satisfaction' }
  ];

  const clients = [
    { name: 'Red Bull', logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Vivo', logo: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Redmi', logo: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Soulstore', logo: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl sm:text-7xl font-bold text-white mb-6">
          About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">S∆YØN</span>
        </h2>
        <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
          A passionate 3D VFX artist and automotive designer, crafting visual stories that captivate and inspire. 
          Specialized in photorealistic renders and cinematic animations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Started as a passionate creator with a vision to blend technology and artistry. 
                My journey in 3D visualization began with automotive design, where precision meets creativity.
              </p>
              <p>
                Over the years, I've collaborated with leading brands like Red Bull, Vivo, and Redmi, 
                creating compelling visual narratives that drive engagement and brand recognition.
              </p>
              <p>
                Today, I specialize in photorealistic 3D renders, automotive visualization, 
                and cinematic VFX that bring brands to life in the digital realm.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-colors"
              >
                <stat.icon className="mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Skills */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Tools & Expertise</h3>
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{tool.name}</span>
                    <span className="text-white/60 text-sm">{tool.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Services</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                '3D Visualization & Rendering',
                'Automotive Design & Animation',
                'VFX & Post Production',
                'Brand Identity & Motion Graphics',
                'Product Visualization',
                'Cinematic Storytelling'
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                  <span className="text-white/80">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Clients */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-3xl font-bold text-white mb-12">Trusted by Leading Brands</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <span className="text-white font-bold text-lg">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;