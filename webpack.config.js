const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", // Adjust entry point as per your project structure
  output: {
    path: path.resolve(__dirname, "src"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Example loader, adjust as per your project needs
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  }
};
