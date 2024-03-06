/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.shopify.com",
      "via.placeholder.com",
      "res.cloudinary.com",
      "copia-server.s3.eu-north-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
