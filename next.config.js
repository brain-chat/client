/** @type {import('next').NextConfig} */

const { BASE_URL } = require("./base_url");

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: BASE_URL
};

module.exports = nextConfig;
