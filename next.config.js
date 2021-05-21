
        module.exports={
  
  target: "serverless",
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
      
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    config.module.rules[1].oneOf.forEach((moduleLoader, i) => {
      Array.isArray(moduleLoader.use) &&
        moduleLoader.use.forEach((l) => {
          if (
            l.loader.includes("css-loader") &&
            !l.loader.includes("postcss-loader")
          ) {
            delete l.options.modules.getLocalIdent;
            l.options.modules = {
              ...l.options.modules,
              // Your custom css-modules options below.
              localIdentName:
                config.mode === "development"
                  ? "[local]"
                  : "css__[hash:base64:5]",
            };
          }
        });
    });
    return config;
  },
};
;
        