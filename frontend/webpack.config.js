const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

const generateHtmlPlugin = () => {
  return new HtmlBundlerPlugin({
    entry: {
      index: './src/html/index.html',
      about: './src/html/about.html',
      login: './src/html/login.html',
      blog: './src/html/blog.html',
      createBlog: './src/html/createBlog.html',
    },
    js: {
      filename: 'js/[name].[contenthash:8].js', // Output JS filename
    },
    css: {
      filename: 'css/[name].[contenthash:8].css', // Output CSS filename
    },
  });
};

module.exports = {
  mode: 'development',
  plugins: [generateHtmlPlugin()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
  resolve: {
    extensions: ['.html', '.css', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['css-loader'],
      },
      {
        test: /\.(png|jpe?g|webp|svg)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
    ],
  },

  devtool: 'source-map',
};
