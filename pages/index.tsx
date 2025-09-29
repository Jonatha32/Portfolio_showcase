import { GetStaticProps } from 'next'
import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import SiteMeta from '@/components/SiteMeta'
import { client, Project } from '@/lib/sanity'
import { featuredProjectsQuery } from '@/lib/queries'

interface HomeProps {
  projects: Project[]
}

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <SiteMeta />
      <Hero />
      <ProjectGrid projects={projects} title="Selected Projects" />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Fallback data for development
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
    }
  ]
  
  return {
    props: {
      projects: fallbackProjects
    }
  }
}