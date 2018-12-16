const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		counter: path.join(__dirname, './apps/counter/index.js'),
		blog: path.join(__dirname, './apps/blog/index.js'),
	},
	output: {
		filename: '[name]/index.js',
		path: path.resolve(__dirname, 'bundle')
	},
	devtool: 'source-map',
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
				loader: 'file-loader'
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'apps'),
		compress: true,
		port: 8080
	},
	plugins: [
		new HtmlWebpackPlugin({
			chunks: ['counter'],
			template: 'templates/index.html',
      filename: 'counter/index.html',
      title: 'Counter'
		}),
		new HtmlWebpackPlugin({
			chunks: ['blog'],
			template: 'templates/index.html',
      filename: 'blog/index.html',
      title: 'Blog'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	}
}
