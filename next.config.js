module.exports = {
  env: {
    BACKEND_ENDPOINT: "http://localhost:1337/graphql",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [{ source: "/home", destination: "/", permanent: true }];
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
};
