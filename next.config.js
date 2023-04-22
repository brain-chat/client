/** @type {import('next').NextConfig} */

const SITE_URL = process.env.NODE_ENV === 'production' ? "/Client" : "/";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: SITE_URL
};

module.exports = nextConfig;
