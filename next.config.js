/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

const nextConfig = withOptimizedImages({
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
