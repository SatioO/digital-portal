/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mdbcdn.b-cdn.net',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
