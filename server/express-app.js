const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const helmet = require('helmet')

const MainMiddleware = require('./middleware/main')
const config = require('../config')

module.exports = /** @param {import('@petrmiko/konteiner') konteiner} */function(konteiner) {
	const mainMiddleware = konteiner.get(MainMiddleware)
	const mainApp = (() => {
		const app = express()
		app.use(helmet({
			contentSecurityPolicy: {
				directives: {
					defaultSrc: ['\'self\''],
					scriptSrc: [
						'\'self\'',
						'\'unsafe-inline\'',
						config.isDevMode && '\'unsafe-eval\'',
						config.allowGoogleAnalytics && 'https://www.googletagmanager.com',
						config.allowGoogleAnalytics && 'https://www.google-analytics.com',
						config.allowGoogleAnalytics && 'https://stats.g.doubleclick.net',
					].filter(Boolean),
					styleSrc: [
						'\'self\'',
						config.isDevMode && '\'unsafe-inline\'',
						'https://fonts.googleapis.com',
					].filter(Boolean),
					connectSrc: ['\'self\'', 'ws://localhost:*', config.allowGoogleAnalytics && 'https://www.google-analytics.com', config.allowGoogleAnalytics && 'https://stats.g.doubleclick.net'].filter(Boolean),
					fontSrc: ['\'self\'', 'https://fonts.gstatic.com'],
					imgSrc: ['\'self\'', 'data:', config.allowGoogleAnalytics && 'https://www.google-analytics.com'].filter(Boolean),
				},
			},
		}))
		app.use(compression())

		app.enable('trust proxy')
		return app
	})()

	const app = express.Router()
	mainApp.use('/', app)

	const bodyLimit = '65536kb'

	app.use((req, res, next) =>
		bodyParser.json({ limit: bodyLimit })(req, res, function(err) {
			if (err) {
				console.log(err)
				next('Invalid json')
			}
			next()
		}),
	)

	app.use(mainMiddleware)

	return mainApp
}
