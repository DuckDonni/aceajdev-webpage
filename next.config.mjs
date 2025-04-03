const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Remove or set these to empty strings if using a custom domain at the root
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
