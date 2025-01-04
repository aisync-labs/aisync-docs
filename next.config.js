const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // reactStrictMode: true,
  output: 'standalone',
  // images: {
  //   unoptimized: true // mandatory, otherwise won't export
  // },
}

module.exports = withNextra(nextConfig)
