/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl: 'mongodb://localhost:27017/providers'
  }
}

module.exports = nextConfig
