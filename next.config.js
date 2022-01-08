const withFonts = require("next-fonts");

module.exports = withFonts({
  enableSvg: true,
  webpack(config, options) {
    return config;
  },
  env: {
    PUBLIC_URL: "https://kiyeo.github.io/",
    assetPrefix: "./",
  },
});
