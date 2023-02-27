const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },
      optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
              minimizer: {
                implementation: ImageMinimizerPlugin.squooshMinify,
                options: {
                  encodeOptions: {
                    mozjpeg: {
                      quality: 100,
                    },
                    webp: {
                      lossless: 1,
                    },
                    avif: {
                      cqLevel: 0,
                    },
                  },
                },
              },
            }),
          ],
      },
    plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
} 