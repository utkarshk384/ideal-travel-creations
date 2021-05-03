const fs = require("fs");
const chalk = require("chalk");

try {
  fs.unlinkSync(`${__dirname}/../next.config.js`);
} catch (e) {}

const config = `{
  
  env: {
    USER: "idealtravelcreation@gmail.com",
    PASSWORD: "ideal-travel-creation-2012",
    BACKEND_ENDPOINT: "http://itc-backend-server.herokuapp.com/graphql",
    GOOGLE_MAPS_API: "AIzaSyDr1wtmTRCrtaSI3uFP4iEP6i7a_1J6i_o", //Requires Google Billing account to properly use the API service
    MAPBOX_API:
      "pk.eyJ1IjoidXRrYXJzaGszODQiLCJhIjoiY2ttMWhxcGtyMTMzNTJ1bzZzeDBma3liaiJ9.hEhfkK7bXYTUzlvOHQh8uA",
    EMAILJS_USERID: "user_oENri6liYbwvMORKc1fjX",
    EMAILJS_KEY: "85b5a3b15f5adf025a84a643f1ac95ec",
    EMAILJS_TEMPLATE_ID: "template_g5njezo",
    EMAILJS_SERVICE_ID: "service_xvmoa4c",
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
      
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
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
