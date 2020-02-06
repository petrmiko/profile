const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	entry: './client/index.js',
	mode: process.env.NODE_ENV,
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			favicon: 'client/assets/favicon.png',
			template: 'client/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: ['@babel/plugin-proposal-class-properties'],
				},
			},
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, 'node_modules/react-tippy/dist/tippy.css')],
				use: [
					{ loader: MiniCssExtractPlugin.loader, options: { esModule: true } },
					{ loader: 'css-loader', options: { modules: true, esModule: true } },
				],
			},
			{
				test: /\.less$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader, options: { esModule: true } },
					{ loader: 'css-loader', options: { modules: true, esModule: true } },
					'less-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	output: {
		filename: 'index.js',
		publicPath: '/static/',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
}
