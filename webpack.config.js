const path = require("path");
const webpack= require('webpack')
require('dotenv').config()


module.exports = {
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  mode: "production",
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.DefinePlugin({
          'gApi': JSON.stringify(process.env.gApi),
          'fbApi': JSON.stringify(process.env.firebaseConfig),
          'fbauthDomain': JSON.stringify(process.env.fbauthDomain),
          'fbDataURL':  JSON.stringify(process.env.fbDataURL),
          'fbprojectId':  JSON.stringify(process.env.fbprojectId),
          'fbstorageBucket':  JSON.stringify(process.env.fbstorageBucket),
          'fbmessagingSenderId':  JSON.stringify(process.env.fbmessagingSenderId),
          'fbappId': JSON.stringify(process.env.fbappId),
        })
    ] ,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
