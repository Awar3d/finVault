import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/finVault",
  images: { unoptimized: true },
};

export default nextConfig;
