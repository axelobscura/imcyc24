/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['imcyc.net'],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        minimizer: [
          ...config.optimization.minimizer,
        ],
      }
      
      // Find TerserPlugin and modify options
      const terserPlugin = config.optimization.minimizer.find(
        plugin => plugin.constructor.name === 'TerserPlugin'
      )
      
      if (terserPlugin) {
        terserPlugin.options.terserOptions = {
          ...terserPlugin.options.terserOptions,
          mangle: {
            ...terserPlugin.options.terserOptions.mangle,
            keep_fnames: true, // Keep function names
          },
          compress: {
            ...terserPlugin.options.terserOptions.compress,
            keep_fnames: true, // Keep function names in compression
          }
        }
      }
    }
    
    return config
  }
};

export default nextConfig;

