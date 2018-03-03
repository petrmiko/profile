const path = require('path')

module.exports = {
	http: {
		port: process.env.PORT || 8080,
		staticPath: path.join(__dirname, 'dist'),
	},
}
