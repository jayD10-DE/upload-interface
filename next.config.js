/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['your-image-domain.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
