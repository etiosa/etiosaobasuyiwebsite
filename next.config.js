/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  swcMinify: true,
  distDir: "build",
  images:{
    unoptimized:true
  }
}

module.exports = nextConfig
