import { NextSeo } from 'next-seo'

interface SiteMetaProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function SiteMeta({ 
  title = 'ArchLine Studio - Designing spaces, shaping lives',
  description = 'Award-winning architecture studio creating exceptional spaces that inspire and transform. We believe in the power of design to shape better lives.',
  image = '/og-image.jpg',
  url = 'https://archline-studio.vercel.app'
}: SiteMetaProps) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        site_name: 'ArchLine Studio',
      }}
      twitter={{
        handle: '@archlinestudio',
        site: '@archlinestudio',
        cardType: 'summary_large_image',
      }}
    />
  )
}