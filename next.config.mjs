/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['imcyc.net'],
  },
  webpack: (config, { dev }) => {
    if (!dev && process.env.DISABLE_MANGLING === 'true') {
      // Disable mangling only when environment variable is set
      config.optimization.minimizer.forEach(minimizer => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          minimizer.options.terserOptions.mangle = false
        }
      })
    }
    return config
  }
};

export default nextConfig;

