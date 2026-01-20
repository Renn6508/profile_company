import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Static export untuk hosting di Vercel
  images: {
    unoptimized: true, // Required untuk static export
  },
  trailingSlash: true, // SEO friendly URLs
};

export default nextConfig;
