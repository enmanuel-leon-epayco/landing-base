const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
const path = require('path');

const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.[contentHash].js'
  },
  devtool: "source-map",

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    host: '127.0.0.1',
    compress: true,
    port: 9000,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
        }
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
    ],
  },

  plugins: [
    new Dotenv({
      systemvars: true,
    }),
    new HtmlWebPackPlugin({
      title: 'Belcorp',
      template: "./src/index.html",
    }),
  ],
};