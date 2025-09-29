import { motion } from 'framer-motion'
import Image from 'next/image'
import SiteMeta from '@/components/SiteMeta'

export default function About() {
  const team = [
    {
      name: 'Elena Vásquez',
      role: 'Founding Principal',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Marco Delacroix',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sofia Chen',
      role: 'Senior Architect',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <>
      <SiteMeta 
        title="Studio - ArchLine"
        description="Meet the visionary team behind ArchLine Studio and discover our design philosophy"
      />
      
      <div className="section-padding">
        {/* Hero */}
        <div className="container-custom mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold text-primary mb-8 tracking-tight">
              Our Studio
            </h1>
            <div className="w-32 h-1 bg-accent mx-auto mb-12" />
            <p className="text-2xl md:text-3xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light">
              We are visionaries, dreamers, and craftspeople united by a singular belief: 
              <span className="text-accent font-medium"> architecture has the power to transform lives.</span>
            </p>
          </motion.div>
        </div>

        {/* Philosophy */}
        <div className="bg-gray/20 section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight">
                  Our Vision
                </h2>
                <div className="space-y-8 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    Every space tells a story. We believe in creating environments that don't just shelter, 
                    but inspire, nurture, and elevate the human experience.
                  </p>
                  <p>
                    Our approach transcends traditional boundaries, weaving together sustainability, 
                    innovation, and timeless beauty to craft spaces that resonate with the soul.
                  </p>
                  <p>
                    We see architecture as a dialogue between dreams and reality, where every line 
                    we draw shapes not just buildings, but the lives within them.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our studio workspace"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                The Visionaries
              </h2>
              <div className="w-32 h-1 bg-accent mx-auto mb-8" />
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Meet the creative minds who bring architectural dreams to life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative aspect-square mb-8 mx-auto max-w-sm overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-3 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium text-lg">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary text-white section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Our Impact
              </h2>
              <div className="w-32 h-1 bg-accent mx-auto" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
            >
              <div>
                <div className="text-5xl font-display font-bold text-accent mb-4">15+</div>
                <div className="text-lg font-medium text-neutral-300">Years of Excellence</div>
              </div>
              <div>
                <div className="text-5xl font-display font-bold text-accent mb-4">120+</div>
                <div className="text-lg font-medium text-neutral-300">Dreams Realized</div>
              </div>
              <div>
                <div className="text-5xl font-display font-bold text-accent mb-4">18</div>
                <div className="text-lg font-medium text-neutral-300">International Awards</div>
              </div>
              <div>
                <div className="text-5xl font-display font-bold text-accent mb-4">12</div>
                <div className="text-lg font-medium text-neutral-300">Countries</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}