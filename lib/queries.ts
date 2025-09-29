export const allProjectsQuery = `*[_type == "project"] | order(publishedAt desc){
  _id,
  title,
  slug,
  year,
  client,
  "cover": coverImage.asset->url,
  tags
}`

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{
  ...,
  "cover": coverImage.asset->url,
  "gallery": gallery[].asset->url
}`

export const featuredProjectsQuery = `*[_type == "project"] | order(publishedAt desc)[0...4]{
  _id,
  title,
  slug,
  year,
  client,
  "cover": coverImage.asset->url,
  tags
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  title,
  description,
  "logo": logo.asset->url,
  socialLinks
}`

export const authorsQuery = `*[_type == "author"]{
  _id,
  name,
  role,
  "photo": photo.asset->url,
  bio
}`