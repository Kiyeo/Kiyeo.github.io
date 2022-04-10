const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const { env } = require("process");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
      optimizeImages: true,
    },
  ],
  [
    withFonts,
    {
      enableSvg: true,
      webpack(config, options) {
        return config;
      },
      env: {
        PUBLIC_URL: "https://kiyeo.github.io/",
        assetPrefix: "./",
      },
      images: {
        disableStaticImages: true,
      },
    },
  ],
]);
