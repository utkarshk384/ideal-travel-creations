
        module.exports={
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
    ignoreBuildErrors: false,
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    
    return config;
  },
};
;
        