const express = require('express')
const path = require('path')
const config = require('../../config')

module.exports = () => {
	const router = express.Router()

	if (process.env.NODE_ENV !== 'development') {
		const indexMiddleware = (req, res, next) => {
			res.sendFile(path.resolve(config.http.staticPath, 'index.html'))
		}

		router.use('/static', express.static(config.http.staticPath))
		router.get('/', indexMiddleware)
		router.use((req, res, next) => {
			indexMiddleware(req, res.status(404), next)
		})
	} else {
		const Bundler = require('parcel-bundler')
		const parcelBundler = new Bundler(path.join(__dirname, '../../client/index.html'), {
			watch: true,
			publicUrl: '/static/',
		})
		const parcelMiddleware = parcelBundler.middleware()

		router.get('/', parcelMiddleware)
		// on dev is static handled by parcel bundler
		router.use((req, res, next) => {
			if (!req.originalUrl.startsWith('/static')) {
				parcelMiddleware(req, res.status(404), next)
			} else {
				parcelMiddleware(req, res, next)
			}
		})
	}

	return router
}
