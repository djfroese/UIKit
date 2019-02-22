const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    Button: "./src/atom/Button/Button.tsx"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "lib")
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ["ts-loader"]
      }
    ]
  },
  externals: {
    "react": "React"
  }
}