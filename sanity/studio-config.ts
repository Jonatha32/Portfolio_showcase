import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import project from './schema/project'
import author from './schema/author'
import siteSettings from './schema/siteSettings'

export default defineConfig({
  name: 'default',
  title: 'Arc Showcase',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [project, author, siteSettings],
  },
})