const fs = require("fs");
const chalk = require("chalk");
const ngrok = require("ngrok");

try {
  fs.unlinkSync(`${__dirname}/../next.config.js`);
} catch (e) {}

//If true, then the development site connects to the hosted DB.
const connServerDB = true;

// prettier-ignore
const DB_URL = connServerDB
  ? "\"https://itc-backend-server.herokuapp.com"
  : "\"http://localhost:1337";

const config = `{
  
  env: {
    USER: "utkarshk202@gmail.com",
    PASSWORD: "uk don12345",
    NEXT_PUBLIC_BACKEND_ENDPOINT: ${DB_URL}",
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
      {
        source: "/packages",
        destination: "/packages/cultural-tours-in-bhutan?page=1",
        permanent: true,
      },
    ];
  },
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.module.rules.push({
      test: /.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    config.module.rules[2].oneOf.forEach((moduleLoader, i) => {
      Array.isArray(moduleLoader.use) &&
        moduleLoader.use.forEach((l) => {
          if (
            l.loader.includes('\\css-loader') &&
            !l.loader.includes('postcss-loader')
          ) {
            const { getLocalIdent, ...others } = l.options.modules;

            l.options = {
              ...l.options,
              modules: {
                ...others,
                localIdentName: '[local]',
              },
            };
          }
        });
    });
    return config;
  },
}
`;
//[hash:base64:6]
const makeConfig = (config) => {
  fs.writeFileSync(
    `${__dirname}/../next.config.js`,
    `
  const withSourceMaps = require('@zeit/next-source-maps');

  module.exports=withSourceMaps(${config});`,
    (err) => {
      if (err) {
        return console.log(chalk.red(err));
      }
      console.log(chalk.green("ready"));
    }
  );
};

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

if (process.argv.length > 2)
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
        makeConfig(finalConfig);
      })
      .catch((err) => console.log(chalk.red(err)));
  })();
else makeConfig(config);
