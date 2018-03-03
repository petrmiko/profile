const express = require('express')
const path = require('path')

module.exports = (config) => {
	const router = express.Router()

	const getClientMiddleware = function() {
		if (process.env.NODE_ENV === 'development') {
			const Bundler = require('parcel-bundler')
			const parcelBundler = new Bundler(path.join(__dirname, '../../client/index.html'), {
				watch: true,
			})

			return parcelBundler.middleware()
		}

		return function(req, res, next) {
			res.sendFile(path.resolve(config.http.staticPath, 'index.html'), null, next)
		}
	}

	router.get(/^\/(?!static)/, getClientMiddleware())

	return router
}
