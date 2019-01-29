module.exports = {
  mode: "production",

  entry: "./src/index.tsx",
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
  },

  devtool: "source-map",

  resolve: {
      extensions: [".ts", ".tsx", ".js"]
  },

  module: {
      rules: [
          {
              test: /\.ts(x?)$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: "ts-loader"
                  }
              ]
          },
          {
              enforce: "pre",
              test: /\.js$/,
              loader: "source-map-loader"
          }
      ]
  },
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};