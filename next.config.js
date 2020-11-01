// * NEXT PLUGINS

// this enables importing of assets like images and mp3
const withImages = require("next-images");

// this enables use of MDX pages
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withImages(
  withMDX({
    // this is for withImages
    fileExtensions: ["jpg", "jpeg", "png", "gif", "mp3", "mp4", "svg"],
    // this is for withMDX
    pageExtensions: ["js", "jsx", "mdx"],
  })
);
