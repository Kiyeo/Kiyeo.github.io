const withFonts = require("next-fonts");
const { env } = require("process");

module.exports = withFonts({
  enableSvg: true,
  webpack(config, options) {
    return config;
  },
  env: {
    PUBLIC_URL: "https://kiyeo.github.io/",
    assetPrefix: "./",
  },
  images: {
    path: env.PUBLIC_URL,
    loader: "imgix",
  },
});
