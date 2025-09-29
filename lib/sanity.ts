import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-12-01',
  token: process.env.SANITY_API_TOKEN || 'dummy-token',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

export interface Project {
  _id: string
  title: string
  slug: { current: string }
  year: number
  client: string
  location: string
  area: number
  coverImage: any
  gallery: any[]
  description: any[]
  tags: string[]
  publishedAt: string
}

export interface Author {
  _id: string
  name: string
  role: string
  photo: any
  bio: any[]
}

export interface SiteSettings {
  _id: string
  title: string
  description: string
  logo: any
  socialLinks: {
    instagram?: string
    linkedin?: string
    behance?: string
  }
}