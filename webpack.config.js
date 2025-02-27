const { manifest, entry } = require('./extension.config')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const GenerateJsonPlugin = require('generate-json-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin")

const isProd = process.env.NODE_ENV === 'production'

const output = {
  path: path.resolve(__dirname, './dist'),
}

const plugins = [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: './index.html'
  }),
  new CopyPlugin({
    patterns: [
      { from: "src/assets/img/thickerextlogo.png" },
      { from: "src/assets/img/thickerlogo.png" },
      { from: "src/assets/img/cloud1.svg" },
      { from: "src/assets/img/cloud2.svg" },
      { from: "src/assets/img/cloud3.svg" },
      { from: "src/assets/html/loading.html" },
    ],
  }),
  new MiniCssExtractPlugin(),
  new GenerateJsonPlugin('manifest.json', manifest)
]

const rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  },
  {
    test: /\.json$/,
    loader: 'json-loader'
  },
  {
    test: /\.css$/i,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
    ],
  },
]

const config = {
  entry,
  output,
  module: { rules },
  plugins,
  experiments: {
    topLevelAwait: true,
  },
}

if (!isProd) {
  config.devtool = 'source-map'
}

module.exports = config