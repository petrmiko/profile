const http = require('http')
const config = require('../config')

const ExpressApp = require('./express-app')

module.exports = /** @param {import('@petrmiko/konteiner') konteiner} */ (konteiner) => ({
	getServer() {
		const expressApp = konteiner.get(ExpressApp)
		return http.createServer(expressApp)
	},

	async start(httpServer) {
		return new Promise((resolve) => {
			const server = httpServer.listen(config.http.port, function() {
				process.on('SIGTERM', () => {
					console.log('Server is shutting down gracefully')
					server.close((err) => {
						if (err) {
							console.error(`Graceful shutdown failed with: ${err}"`)
							process.exit(0)
						}
					})
				})
				resolve(this.address())
			})
		})
	},
})
