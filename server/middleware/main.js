const express = require('express')
const path = require('path')

const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('../../webpack.config')

module.exports = (config) => {
	const router = express.Router()

	if (process.env.NODE_ENV === 'development') {
		const compiler = webpack(webpackConfig)
		router.use(webpackMiddleware(compiler, { publicPath: '/' }))
	} else {
		router.get(/^\/(?!static)/, function(req, res, next) {
			res.sendFile(path.resolve(config.http.staticPath, 'index.html'), null, next)
		})
	}

	return router
}
