import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/sanity'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <Link href={`/projects/${project.slug.current}`} className="block focus-visible">
        <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-gray">
          <Image
            src={project.coverImage || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
            alt={project.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
        </div>
        
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300 tracking-tight">
            {project.title}
          </h3>
          
          <div className="flex justify-between text-sm text-neutral-600 font-medium">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>
          
          <p className="text-neutral-700 leading-relaxed">
            {project.location}
          </p>
          
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-gray text-primary font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  )
}