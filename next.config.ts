import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // tells Next.js to export static HTML
  basePath: '/portfolio', // replace with your repo name
  assetPrefix: '/portfolio/',
   images: { unoptimized: true }
};

export default nextConfig;
