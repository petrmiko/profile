const path = require('path')

module.exports = {
	allowGoogleAnalytics: !!process.env.GOOGLE_ANALYTICS_UID,
	http: {
		port: process.env.PORT || 8080,
		staticPath: path.join(__dirname, 'dist'),
	},
}
