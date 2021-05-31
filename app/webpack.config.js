const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

// https://webpack.js.org/configuration/configuration-types/#exporting-a-function
module.exports = (env, args) => ({
  mode: args.mode,
  target: env.production ? ['web', 'es5'] : 'web',
  // devtool: env.production ? 'source-map' : 'eval',
  entry: './src/main.ts',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  output: {
    path: outputPath,
    publicPath: 'http://localhost:8080/',
    filename: '[name]-bundle.js',
    assetModuleFilename: 'public/img/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.(ico|svg|jpe?g|png|webp)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    chunkIds: 'named',
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    // Webpackで利用するときの設定(vueはかいちゃいけない！)
    alias: {
      // vue$: 'vue/dist/vue.js',
      '@src': path.resolve(__dirname, 'src'),
    },
    modulesDirectories: ['node_modules'],
  },
  devServer: {
    contentBase: outputPath,
    compress: true,
    open: true,
    port: 8080,
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    // watchOptions: {
    //   aggregateTimeout: 600,
    //   poll: 1000
    // },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
});
