const fs = require("fs");
const chalk = require("chalk");

try {
  fs.unlinkSync(`${__dirname}/../next.config.js`);
} catch (e) {}

const config = `{
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
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    
    return config;
  },
};
`;

fs.writeFileSync(
  `${__dirname}/../next.config.js`,
  `
        module.exports=${config};
        `,
  (err) => {
    if (err) {
      return console.log(chalk.red(err));
    }
  }
);
