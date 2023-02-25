const config = {
	isDev: process.env.NODE_ENV === 'development',
	siteName: process.env.NEXT_PUBLIC_SITE_NAME,
	siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Personal presentation page',
	siteAuthor: process.env.NEXT_PUBLIC_SITE_AUTHOR,
	siteKeywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS,
}

export default config
