/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.dummyjson.com'],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Set caching headers for Next.js static assets
        source: '/_next/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
