import type { NextConfig } from "next";

const repoName = "Numaeon";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Generate a static export for GitHub Pages
  output: "export",
  // Use path prefix only for GitHub Pages builds
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  // Disable image optimization in export mode
  images: { unoptimized: true },
};

export default nextConfig;
