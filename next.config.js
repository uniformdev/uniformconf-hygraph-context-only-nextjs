/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.graphassets.com'],
  },
  reactStrictMode: true,
  eslint: {
    // don't auto lint during next build (we run it during CI otherwise)
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
