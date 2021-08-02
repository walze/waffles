const { resolve } = require('path');

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@datacamp/waffles'] = resolve(__dirname, '../dist');

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};
