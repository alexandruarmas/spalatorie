/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
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
