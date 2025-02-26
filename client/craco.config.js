// craco.config.js

module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          ...webpackConfig.resolve.fallback,
          crypto: require.resolve('crypto-browserify'),
          stream: require.resolve('stream-browserify'),
          buffer: require.resolve('buffer'),
        };
  
        return webpackConfig;
      },
    },
  };
  // craco.config.js

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer'),
        vm: require.resolve('vm-browserify'), // Add vm-polyfill here
      };

      return webpackConfig;
    },
  },
};

  