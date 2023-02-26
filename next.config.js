/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['cs-CZ', 'en-US'],
		defaultLocale: 'cs-CZ',
		localeDetection: false,
		domains: [
			{
			  domain: process.env.DOMAIN_CZ,
			  defaultLocale: 'cs-CZ',
			},
			{
			  domain: process.env.DOMAIN_EN,
			  defaultLocale: 'en-US',
			},
		],
	}
}

module.exports = nextConfig
