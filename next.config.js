const domains = [
	process.env.DOMAIN_CZ && {
		domain: process.env.DOMAIN_CZ,
		defaultLocale: 'cs-CZ',
	},
	process.env.DOMAIN_EN &&{
		domain: process.env.DOMAIN_EN,
		defaultLocale: 'en-US',
	},
].filter(Boolean)

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['cs-CZ', 'en-US'],
		defaultLocale: 'cs-CZ',
		...(domains.length && {
			domains,
			localeDetection: false,
		})
	}
}

module.exports = nextConfig
