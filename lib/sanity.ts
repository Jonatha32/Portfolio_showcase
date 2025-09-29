// Sanity client placeholder - using fallback data for now
export const client = null
export const urlFor = (source: any) => source

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