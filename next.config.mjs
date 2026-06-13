const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const basePath = repoName ? `/${repoName}` : '';
const assetPrefix = basePath || '';

const nextConfig = {
  reactStrictMode: true,
  // Export a fully static site for GitHub Pages
  output: 'export',
  // When deployed on GitHub Pages, set basePath/assetPrefix automatically in CI
  basePath,
  assetPrefix,
  trailingSlash: true,
};

export default nextConfig;
