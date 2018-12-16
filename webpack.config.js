const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    counter: './apps/counter/index.js',
    'vote-app': './apps/vote-app/index.js'
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'bundle')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
		    loader: "file-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'templates/index.html',
      filename: 'counter/index.html',
      title: 'Counter'
    }),
    new HtmlWebpackPlugin({
      template: 'templates/index.html',
      filename: 'vote-app/index.html',
      title: 'Vote App'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
