const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    mainFields: ['main', 'module', 'browser'],
  },
  entry: './src/app.tsx',
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist/renderer'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
    publicPath: '/',
<<<<<<< HEAD
    proxy: { '*': { target: 'http://localhost:4000' } },
=======
    proxy: {'*': {target: 'http://localhost:4000'}}
>>>>>>> 92fa436cb06af4417cd9c32d44c8a04a8f79614c
  },
  output: {
    path: path.resolve(__dirname, '../dist/renderer'),
    filename: 'js/[name].js',
    publicPath: './',
  },
  plugins: [new HtmlWebpackPlugin()],
};
