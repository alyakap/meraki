const webpack = require("webpack");
const path = require("path");

const config = {
  //what file are we bundling?
  entry: "./src/index.js",
  //where do we want to bundle to?
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  //serve a webserver with HMR at a specific port from a specific folder
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 1234
  },
  module: {
    rules: [
      //when a file is imported with the js extension => convert it to es5 using the babel config file, do not do this for all the node_modules/js-files
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      //when a css file is imported with *.css extension =>
      {
        test: /\.css$/,
        use: [
          //hold on specific files we us in the css and pass them to webpack seperatly
          "style-loader",
          //inject the css in the DOM
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.svg$/,
        use: "file-loader"
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png"
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
