const path = require("path");
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
