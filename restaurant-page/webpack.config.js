const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: 'images/[name][ext]', 
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { 
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
    hot: true,
    liveReload: true,
  },
};

