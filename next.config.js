module.exports = {
  trailingSlash: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.watchOptions= {
      ignored: /node_modules/,
      aggregateTimeout: 200,
      poll: 1000,
  };

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  // exportPathMap: async function (defaultPathMap) {
  //   return { '/': { page: '/index' } };
  // }
};
