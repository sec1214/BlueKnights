const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // This injects your script tag automatically!
    }),
  ],
  devServer: {
    static: './dist',
    watchFiles: ['./src/template.html'], // Reloads browser if you change HTML
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
},
    ],}
};