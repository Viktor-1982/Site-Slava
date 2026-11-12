import type { NextConfig } from "next";

// basePath is only needed if explicitly building for GitHub Pages subdirectory
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? "/Site-Slava" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
