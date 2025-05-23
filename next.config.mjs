/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/spalatorie' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/spalatorie/' : '',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/entry',
        permanent: false,
      }
    ]
  },
}

export default nextConfig
