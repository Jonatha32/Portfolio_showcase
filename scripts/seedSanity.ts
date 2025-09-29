import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  apiVersion: '2023-12-01',
  token: process.env.SANITY_API_TOKEN!,
})

const projects = [
  {
    _id: 'project-1',
    _type: 'project',
    title: 'Modern Villa Barcelona',
    slug: { current: 'modern-villa-barcelona', _type: 'slug' },
    year: 2023,
    client: 'Private Client',
    location: 'Barcelona, Spain',
    area: 350,
    coverImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-cover-1'
      }
    },
    gallery: [
      {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-gallery-1-1'
        }
      },
      {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-gallery-1-2'
        }
      }
    ],
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'A contemporary villa that seamlessly blends modern architecture with Mediterranean influences. The design emphasizes natural light, open spaces, and a strong connection to the surrounding landscape.'
          }
        ]
      }
    ],
    tags: ['Residential', 'Modern', 'Sustainable'],
    publishedAt: '2023-12-01T00:00:00Z'
  },
  {
    _id: 'project-2',
    _type: 'project',
    title: 'Corporate Headquarters Madrid',
    slug: { current: 'corporate-headquarters-madrid', _type: 'slug' },
    year: 2022,
    client: 'Tech Innovation Corp',
    location: 'Madrid, Spain',
    area: 1200,
    coverImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-cover-2'
      }
    },
    gallery: [
      {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-gallery-2-1'
        }
      }
    ],
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'A cutting-edge office building that redefines the concept of collaborative workspace. The design incorporates flexible spaces, sustainable technologies, and biophilic elements to enhance productivity and well-being.'
          }
        ]
      }
    ],
    tags: ['Commercial', 'Contemporary', 'Workplace'],
    publishedAt: '2022-11-15T00:00:00Z'
  },
  {
    _id: 'project-3',
    _type: 'project',
    title: 'Cultural Center Valencia',
    slug: { current: 'cultural-center-valencia', _type: 'slug' },
    year: 2021,
    client: 'Valencia City Council',
    location: 'Valencia, Spain',
    area: 800,
    coverImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-cover-3'
      }
    },
    gallery: [],
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'A public space that celebrates art and local culture through innovative architecture. The building serves as a bridge between the historic city center and the modern districts, creating a dialogue between past and future.'
          }
        ]
      }
    ],
    tags: ['Cultural', 'Public', 'Heritage'],
    publishedAt: '2021-10-01T00:00:00Z'
  },
  {
    _id: 'project-4',
    _type: 'project',
    title: 'Urban Loft Renovation',
    slug: { current: 'urban-loft-renovation', _type: 'slug' },
    year: 2023,
    client: 'Young Professional',
    location: 'Bilbao, Spain',
    area: 120,
    coverImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-cover-4'
      }
    },
    gallery: [],
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Transformation of an industrial space into a contemporary home filled with natural light. The design preserves the original character while introducing modern amenities and sustainable solutions.'
          }
        ]
      }
    ],
    tags: ['Residential', 'Renovation', 'Industrial'],
    publishedAt: '2023-09-01T00:00:00Z'
  }
]

const siteSettings = {
  _id: 'site-settings',
  _type: 'siteSettings',
  title: 'Arc Showcase',
  description: 'Contemporary architecture studio creating exceptional spaces that transcend time.',
  socialLinks: {
    instagram: 'https://instagram.com/arcshowcase',
    linkedin: 'https://linkedin.com/company/arcshowcase',
    behance: 'https://behance.net/arcshowcase'
  }
}

const authors = [
  {
    _id: 'author-1',
    _type: 'author',
    name: 'Maria Rodriguez',
    role: 'Principal Architect',
    bio: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Maria is the founding principal of Arc Showcase with over 15 years of experience in contemporary architecture.'
          }
        ]
      }
    ]
  },
  {
    _id: 'author-2',
    _type: 'author',
    name: 'Carlos Martinez',
    role: 'Design Director',
    bio: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Carlos leads our design team with a focus on sustainable and innovative architectural solutions.'
          }
        ]
      }
    ]
  }
]

async function seedData() {
  try {
    console.log('🌱 Starting to seed Sanity with sample data...')

    // Create site settings
    await client.createOrReplace(siteSettings)
    console.log('✅ Site settings created')

    // Create authors
    for (const author of authors) {
      await client.createOrReplace(author)
    }
    console.log('✅ Authors created')

    // Create projects
    for (const project of projects) {
      await client.createOrReplace(project)
    }
    console.log('✅ Projects created')

    console.log('🎉 Seeding completed successfully!')
    console.log('📊 Created:')
    console.log(`   - ${projects.length} projects`)
    console.log(`   - ${authors.length} authors`)
    console.log('   - 1 site settings document')
    
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  }
}

// Run the seed function
seedData()