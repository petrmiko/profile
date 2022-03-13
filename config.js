const path = require('path')

module.exports = {
	isDevMode: process.env.NODE_ENV === 'development',
	allowGoogleAnalytics: !!process.env.GOOGLE_ANALYTICS_UID,
	http: {
		port: process.env.PORT || 8080,
		staticPath: path.join(__dirname, 'dist'),
	},
}
