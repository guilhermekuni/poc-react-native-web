const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, "./public/index.html"),
  filename: "index.html",
  inject: "body",
});

module.exports = {
  entry: path.join(__dirname, "index.web.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/build"),
  },
  resolve: {
    alias: {
      "react-native$": "react-native-web",
      "react-native-maps": "react-native-web-maps",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
    static: "./",
    hot: true,
  },
};
