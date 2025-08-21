/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/fr/:path*',
        destination: '/:path*?locale=fr',
      },
    ];
  },
};

module.exports = nextConfig;
