const http = require('http')

module.exports = (config, expressApp) => ({
	getServer() {
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
