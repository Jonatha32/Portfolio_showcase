/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Configuración para GitHub Pages
  ...(isProd && isGitHubPages && {
    output: 'export',
    distDir: 'out',
    basePath: '/Portfolio_showcase',
    assetPrefix: '/Portfolio_showcase/',
  }),
}

module.exports = nextConfig