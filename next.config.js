/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Squarespace CDN images during migration
    // Remove this once all images are in /public/images/
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
