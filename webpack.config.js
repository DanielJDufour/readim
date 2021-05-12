const path = require("path");

module.exports = (env, argv) => ({
  entry: "./src/readim.js",
  mode: "production",
  devtool: "source-map",
  output: {
    filename: `readim.${argv.target}.js`,
    library: "readim",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
  },
});
