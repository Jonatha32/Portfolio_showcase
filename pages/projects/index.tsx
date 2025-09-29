import { GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import SiteMeta from '@/components/SiteMeta'
import { client, Project } from '@/lib/sanity'
import { allProjectsQuery } from '@/lib/queries'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <SiteMeta 
        title="Projects - ArchLine Studio"
        description="Explore our portfolio of exceptional architectural projects that shape lives"
      />
      
      <div className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold text-primary mb-8 tracking-tight">
              Our Projects
            </h1>
            <div className="w-32 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Each project represents our commitment to creating spaces that inspire, 
              transform, and elevate the human experience through exceptional design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const fallbackProjects: Project[] = [
    {
      _id: '1',
      title: 'Mediterranean House',
      slug: { current: 'modern-villa' },
      year: 2024,
      client: 'Private Client',
      location: 'Barcelona',
      area: 350,
      coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [],
      description: [],
      tags: ['Residential', 'Modern'],
      publishedAt: '2024-12-01'
    },
    {
      _id: '2',
      title: 'Madrid Corporate Tower',
      slug: { current: 'corporate-office' },
      year: 2023,
      client: 'Tech Innovation',
      location: 'Madrid',
      area: 1200,
      coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [],
      description: [],
      tags: ['Commercial', 'Contemporary'],
      publishedAt: '2023-11-01'
    },
    {
      _id: '3',
      title: 'Valencia Cultural Center',
      slug: { current: 'cultural-center' },
      year: 2023,
      client: 'Valencia Council',
      location: 'Valencia',
      area: 800,
      coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [],
      description: [],
      tags: ['Cultural', 'Public'],
      publishedAt: '2023-10-01'
    },
    {
      _id: '4',
      title: 'Luxury Penthouse',
      slug: { current: 'luxury-penthouse' },
      year: 2024,
      client: 'Elite Residences',
      location: 'Bilbao',
      area: 280,
      coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [],
      description: [],
      tags: ['Residential', 'Luxury'],
      publishedAt: '2024-09-01'
    },
    {
      _id: '5',
      title: 'Sustainable Complex',
      slug: { current: 'sustainable-office' },
      year: 2024,
      client: 'Green Corp',
      location: 'Seville',
      area: 950,
      coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [],
      description: [],
      tags: ['Commercial', 'Sustainable'],
      publishedAt: '2024-08-01'
    },
    {
      _id: '6',
      title: 'Minimalist Retreat',
      slug: { current: 'minimalist-retreat' },
      year: 2023,
      client: 'Wellness Group',
      location: 'Mallorca',
      area: 420,
      coverImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [],
      description: [],
      tags: ['Hospitality', 'Minimalist'],
      publishedAt: '2023-07-01'
    }
  ]
  
  return {
    props: {
      projects: fallbackProjects
    }
  }
}