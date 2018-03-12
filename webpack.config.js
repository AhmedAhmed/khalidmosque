var path = require('path');
var webpack = require('webpack');

const config = require("./config");

module.exports = {
  context: path.resolve(__dirname, "./client/"),
  entry: {
    App: './index.tsx',
    commons: ['jquery']
  },
  output: {
    path: path.resolve(__dirname, "./public/static"),
    filename: "./bundles/[name].js",
    publicPath: "http://" + config.server.host + ":" + config.server.port + "/static/"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            modules: true,
            minimize: true,
            localIdentName: '_[hash:base64:5]'
          }
        }, {
          loader: "sass-loader",
          options: {
            modules: true
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }]
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: ["url?limit=100000"]
      },
      {
        test: /\.jpg/,
        exclude: /node_modules/,
        use: ['file']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: ['file?name=public/fonts/[name].[ext]']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new webpack.optimize.CommonsChunkPlugin("./webpack-commons"),
  ]
}