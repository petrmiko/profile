require('dotenv').config()

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ASSETS_DIR = path.resolve(__dirname, '..', 'assets')
const SRC_DIR = path.resolve(__dirname, '..', 'src')
const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist')

const IS_DEV_MODE = process.env.NODE_ENV === 'development'
const MODE = IS_DEV_MODE ? 'development' : 'production'

console.log('Packaging app in mode', MODE)

module.exports = {
	entry: path.resolve(SRC_DIR, 'index.js'),
	devtool: IS_DEV_MODE ? 'inline-source-map' : undefined,
	mode: MODE,
	target: 'web',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/i,
				use: [
					IS_DEV_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
			{
				test: /\.less$/i,
				use: [
					IS_DEV_MODE
						? 'style-loader'
						: {
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: IS_DEV_MODE ? '/' : '/static/',
							},
						},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
					'less-loader',
				],
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
			'process.env.GOOGLE_ANALYTICS_UID': JSON.stringify(process.env.GOOGLE_ANALYTICS_UID),
			'process.env.SITE_NAME': JSON.stringify(process.env.SITE_NAME),
			'process.env.SITE_DESCRIPTION': JSON.stringify(process.env.SITE_DESCRIPTION),
			'process.env.SITE_AUTHOR': JSON.stringify(process.env.SITE_AUTHOR),
			'process.env.SITE_KEYWORDS': JSON.stringify(process.env.SITE_KEYWORDS),
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(SRC_DIR, 'index.ejs'),
			favicon: path.resolve(ASSETS_DIR, 'favicon-32x32.png'),
			publicPath: IS_DEV_MODE ? '/' : 'static/',
		}),
		IS_DEV_MODE && new webpack.HotModuleReplacementPlugin(),
	].filter(Boolean),
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	optimization: {
		minimize: MODE === 'production',
	},
	output: {
		filename: 'main.js',
		path: DIST_DIR,
		publicPath: IS_DEV_MODE ? '/' : 'static/',
	},
}