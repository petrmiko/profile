require('dotenv').config()

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const ASSETS_DIR = path.resolve(__dirname, '..', 'assets')
const SRC_DIR = path.resolve(__dirname, '..', 'src')
const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist')

const IS_DEV_MODE = process.env.NODE_ENV === 'development'
const MODE = IS_DEV_MODE ? 'development' : 'production'

console.log('Packaging app in mode', MODE)

module.exports = {
	entry: {
		index: [
			path.resolve(SRC_DIR, 'index.js'),
			IS_DEV_MODE && 'webpack-hot-middleware/client',
		].filter(Boolean),
	},
	devtool: IS_DEV_MODE ? 'inline-source-map' : undefined,
	mode: MODE,
	target: 'web',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: [IS_DEV_MODE && 'react-refresh/babel'].filter(Boolean),
						},
					},
				],
			},
			{
				test: /\.(c|sc)ss$/,
				use: [
					IS_DEV_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				type: 'asset/resource',
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
		IS_DEV_MODE && new ReactRefreshWebpackPlugin(),
		new webpack.ProgressPlugin(),
	].filter(Boolean),
	resolve: {
		extensions: ['.less', '.js', '.jsx'],
	},
	optimization: {
		minimize: MODE === 'production',
		minimizer: [
			'...', // default Webpack minifications
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						'default',
						{
							discardComments: { removeAll: true },
						},
					],
				},
			}),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.squooshMinify,
					options: {
						encodeOptions: {
							mozjpeg: {
								quality: 80,
							},
						},
					},
				},
			}),
		],
		splitChunks: {
			cacheGroups: {
				react: {
					test: /[\\/]node_modules[\\/](react|react-dom|prop-types)[\\/]/,
					chunks: 'all',
					name: 'react-vendor',
					priority: -10,
				},
				default: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					name: 'other-vendors',
					reuseExistingChunk: true,
					priority: -20,
				},
			},
		},
	},
	output: {
		filename: '[name].js',
		assetModuleFilename: 'assets/[name][ext]',
		path: DIST_DIR,
		publicPath: IS_DEV_MODE ? '/' : 'static/',
	},
}
