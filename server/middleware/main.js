const express = require('express')
const path = require('path')
const config = require('../../config')

module.exports = () => {
	const router = express.Router()

	if (config.isDevMode) {
		const history = require('connect-history-api-fallback')
		const devMiddlewareFactory = require('webpack-dev-middleware')
		const hotMiddlewareFactory = require('webpack-hot-middleware')
		const webpack = require('webpack')
		const webpackConfig = require('../../client/build/webpack.config')

		const compiler = webpack(webpackConfig)

		router.use(history())
		router.use(devMiddlewareFactory(compiler))
		router.use(hotMiddlewareFactory(compiler))
	} else {
		const indexMiddleware = (req, res, next) => {
			res.sendFile(path.resolve(config.http.staticPath, 'index.html'))
		}

		router.use('/static', express.static(config.http.staticPath))
		router.get('/', indexMiddleware)
		router.use((req, res, next) => {
			indexMiddleware(req, res.status(404), next)
		})
	}

	return router
}
