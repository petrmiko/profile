const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const helmet = require('helmet')

module.exports = function(config, mainMiddleware) {
	const mainApp = (() => {
		const app = express()
		app.use(helmet())
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
