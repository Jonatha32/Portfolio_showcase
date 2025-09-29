import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { Project } from '@/lib/sanity'

interface ProjectGridProps {
  projects: Project[]
  title?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function ProjectGrid({ projects, title = "Selected Works" }: ProjectGridProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
            {title}
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Each project tells a unique story of innovation, craftsmanship, 
            and the pursuit of architectural excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}