/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["files.scripthome.org"],
  },
};

module.exports = nextConfig;
