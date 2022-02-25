const withSourceMaps = require("@zeit/next-source-maps");

const { NODE_ENV, LOCAL_DB, IGNORE_BUILD_ERRORS } = process.env;

const DB_URL =
  LOCAL_DB === true
    ? "http://localhost:1337"
    : "https://itc-backend-server.herokuapp.com";

const config = {
  env: {
    NEXT_PUBLIC_BACKEND_ENDPOINT: DB_URL,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      {
        source: "/testimonials",
        destination: "/testimonials/1",
        permanent: true,
      },
      {
        source: "/packages",
        destination: "/packages/cultural-tours-in-bhutan?page=1",
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: IGNORE_BUILD_ERRORS === "true" ? true : false,
  },
  compiler: {
    removeConsole: NODE_ENV === "production" ? true : false,
  },
  swcMinify: NODE_ENV === "production" ? true : false,

  webpack: (config, options) => {
    config.module.rules.push({
      test: /.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
};

module.exports = NODE_ENV === "development" ? withSourceMaps(config) : config;
