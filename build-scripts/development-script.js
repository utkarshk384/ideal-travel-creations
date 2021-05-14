const fs = require("fs");
const chalk = require("chalk");
const ngrok = require("ngrok");

try {
  fs.unlinkSync(`${__dirname}/../next.config.js`);
} catch (e) {}

//If true, then the development site connects to the hosted DB.
const connServerDB = false;

// prettier-ignore
const DB_URL = connServerDB
  ? "\"https://itc-backend-server.herokuapp.com/graphql"
  : "\"http://localhost:1337/graphql";

const config = `{
  
  env: {
    USER: "utkarshk202@gmail.com",
    PASSWORD: "uk don12345",
    BACKEND_ENDPOINT: ${DB_URL}",
    GOOGLE_MAPS_API: "AIzaSyDr1wtmTRCrtaSI3uFP4iEP6i7a_1J6i_o", //Requires Google Billing account to properly use the API service
    MAPBOX_API:
      "pk.eyJ1IjoidXRrYXJzaGszODQiLCJhIjoiY2ttMWhxcGtyMTMzNTJ1bzZzeDBma3liaiJ9.hEhfkK7bXYTUzlvOHQh8uA",

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
}
`;

const onStatusChange = (data) => {
  if (data === "connected" || data === "reconnected") {
    const apiUrl = ngrok.getUrl();
    return console.log(
      chalk.green(`event - `) +
        `${data}\n${chalk.green("webhook url - ")}${apiUrl}`
    );
  }
  return console.log(chalk.red(`event - `) + data);
};

(async function () {
  return await ngrok
    .connect({
      addr: 1337,
      authtoken: "1g7qKABqqqiG4SdqUxYjN0ZHkra_57MTjjCyGp5rvEg3Cq1i3",
      region: "in",
      onStatusChange: (data) => onStatusChange(data),
    })
    .then((val) => {
      console.log(chalk.green("ready - ") + val);
      const finalConfig = config.replace(
        "http://localhost:1337/graphqls",
        `${val}/graphql`
      );
      fs.writeFileSync(
        `${__dirname}/../next.config.js`,
        `
        const withSourceMaps = require('@zeit/next-source-maps');

        module.exports=withSourceMaps(${finalConfig});`,
        (err) => {
          if (err) {
            return console.log(chalk.red(err));
          }
          console.log(chalk.green("ready - ") + val);
        }
      );
    })
    .catch((err) => console.log(chalk.red(err)));
})();
