export default {
	isDev: process.env.NODE_ENV === 'development',
	siteName: process.env.SITE_NAME,
	siteDescription: process.env.SITE_DESCRIPTION || 'Personal presentation page',
	siteAuthor: process.env.SITE_AUTHOR,
	siteKeywords: process.env.SITE_KEYWORDS,
	googleAnalyticsId: process.env.GOOGLE_ANALYTICS_UID,
}
