import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/finVault",
  images: { unoptimized: true },
};

export default nextConfig;
