import { GetStaticProps, GetStaticPaths } from 'next'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// import { PortableText } from '@portabletext/react'
import SiteMeta from '@/components/SiteMeta'
import ImageGalleryModal from '@/components/ImageGalleryModal'
import { client, Project } from '@/lib/sanity'
import { projectBySlugQuery, allProjectsQuery } from '@/lib/queries'

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openGallery = (index: number) => {
    setSelectedImageIndex(index)
    setIsGalleryOpen(true)
  }

  const allImages = [project.cover, ...(project.gallery || [])]

  return (
    <>
      <SiteMeta 
        title={`${project.title} - Arc Showcase`}
        description={`${project.title} - ${project.client} - ${project.location}`}
        image={project.cover}
      />
      
      <div className="py-20">
        {/* Hero Section */}
        <div className="relative h-[70vh] mb-16">
          <Image
            src={project.cover || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/20" />
          
          <div className="absolute bottom-8 left-0 right-0">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h1 className="font-serif text-4xl md:text-6xl font-light mb-4">
                  {project.title}
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="block text-neutral-300">Client</span>
                    <span>{project.client}</span>
                  </div>
                  <div>
                    <span className="block text-neutral-300">Location</span>
                    <span>{project.location}</span>
                  </div>
                  <div>
                    <span className="block text-neutral-300">Year</span>
                    <span>{project.year}</span>
                  </div>
                  {project.area && (
                    <div>
                      <span className="block text-neutral-300">Area</span>
                      <span>{project.area} m²</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Content */}
            <div className="lg:col-span-2">
              {project.description && project.description.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="prose prose-lg max-w-none mb-12"
                >
                  <div>
                    {project.description.map((block: any, index: number) => (
                      <p key={index} className="mb-4">
                        {block.children?.[0]?.text || ''}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-[4/3] cursor-pointer group"
                      onClick={() => openGallery(index + 1)}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} gallery ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24"
              >
                {project.tags && project.tags.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-medium mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-neutral-200 text-neutral-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  href="/projects"
                  className="btn-secondary w-full text-center block"
                >
                  ← Back to Projects
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <ImageGalleryModal
        images={allImages}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialIndex={selectedImageIndex}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { slug: 'modern-villa' } },
    { params: { slug: 'corporate-office' } },
    { params: { slug: 'cultural-center' } },
    { params: { slug: 'luxury-penthouse' } },
    { params: { slug: 'sustainable-office' } },
    { params: { slug: 'minimalist-retreat' } }
  ]

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects: { [key: string]: Project } = {
    'modern-villa': {
      _id: '1',
      title: 'Casa Mediterránea',
      slug: { current: 'modern-villa' },
      year: 2024,
      client: 'Private Client',
      location: 'Barcelona, Spain',
      area: 350,
      coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: [{
        _type: 'block',
        children: [{
          _type: 'span',
          text: 'Una villa contemporánea que fusiona perfectamente la arquitectura moderna con las influencias mediterráneas. Cada espacio ha sido diseñado para maximizar la luz natural y crear una conexión fluida entre interior y exterior.'
        }]
      }],
      tags: ['Residential', 'Modern'],
      publishedAt: '2024-12-01'
    },
    'corporate-office': {
      _id: '2',
      title: 'Torre Corporativa Madrid',
      slug: { current: 'corporate-office' },
      year: 2023,
      client: 'Tech Innovation',
      location: 'Madrid, Spain',
      area: 1200,
      coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: [{
        _type: 'block',
        children: [{
          _type: 'span',
          text: 'Un edificio corporativo de vanguardia que redefine el concepto de espacio de trabajo colaborativo. La estructura integra tecnologías sostenibles y espacios flexibles que se adaptan a las necesidades del futuro.'
        }]
      }],
      tags: ['Commercial', 'Contemporary'],
      publishedAt: '2023-11-01'
    },
    'cultural-center': {
      _id: '3',
      title: 'Centro Cultural Valencia',
      slug: { current: 'cultural-center' },
      year: 2023,
      client: 'Valencia Council',
      location: 'Valencia, Spain',
      area: 800,
      coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: [{
        _type: 'block',
        children: [{
          _type: 'span',
          text: 'Un espacio público que celebra el arte y la cultura local a través de una arquitectura innovadora. El diseño crea un diálogo entre la tradición valenciana y la expresión contemporánea.'
        }]
      }],
      tags: ['Cultural', 'Public'],
      publishedAt: '2023-10-01'
    },
    'luxury-penthouse': {
      _id: '4',
      title: 'Ático de Lujo',
      slug: { current: 'luxury-penthouse' },
      year: 2024,
      client: 'Elite Residences',
      location: 'Bilbao, Spain',
      area: 280,
      coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      gallery: [],
      description: [{
        _type: 'block',
        children: [{
          _type: 'span',
          text: 'Un ático de lujo que redefine la vida urbana premium. Cada detalle ha sido cuidadosamente seleccionado para crear una experiencia residencial única en el corazón de Bilbao.'
        }]
      }],
      tags: ['Residential', 'Luxury'],
      publishedAt: '2024-09-01'
    },
    'sustainable-office': {
      _id: '5',
      title: 'Complejo Sostenible',
      slug: { current: 'sustainable-office' },
      year: 2024,
      client: 'Green Corp',
      location: 'Seville, Spain',
      area: 950,
      coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      gallery: [],
      description: [{
        _type: 'block',
        children: [{
          _type: 'span',
          text: 'Un complejo de oficinas que establece nuevos estándares en sostenibilidad arquitectónica. Integra tecnologías verdes y diseño biofílico para crear espacios de trabajo saludables y eficientes.'
        }]
      }],
      tags: ['Commercial', 'Sustainable'],
      publishedAt: '2024-08-01'
    },
    'minimalist-retreat': {
      _id: '6',
      title: 'Retiro Minimalista',
      slug: { current: 'minimalist-retreat' },
      year: 2023,
      client: 'Wellness Group',
      location: 'Mallorca, Spain',
      area: 420,
      coverImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      gallery: [],
      description: [{
        _type: 'block',
        children: [{
          _type: 'span',
          text: 'Un retiro minimalista que abraza la serenidad del paisaje mallorquín. El diseño se centra en la simplicidad y la conexión con la naturaleza, creando un santuario de paz y bienestar.'
        }]
      }],
      tags: ['Hospitality', 'Minimalist'],
      publishedAt: '2023-07-01'
    }
  }

  const project = projects[params?.slug as string]

  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      project
    }
  }
}