
import { use as i18nUse } from 'i18next'
import { initReactI18next } from 'react-i18next'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'
import 'tippy.js/dist/tippy.css'

import config from '../config'
import Footer from '../components/footer'
import czech from '../components/languages/translations/cz.json'
import english from '../components/languages/translations/en.json'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
	const { locale, defaultLocale } = useRouter()

	i18nUse(initReactI18next) // passes i18n down to react-i18next
		.init({
			resources: {
				'cs-CZ': { translation: czech },
				'en-US': { translation: english },
			},
			lng: locale,
			fallbackLng: defaultLocale,

			interpolation: {
				escapeValue: false,
			},
		})

	return <div className='flex flex-col h-screen justify-between'>
		<Head>
			<title>{config.siteName}</title>
			<meta name="author" content={config.siteAuthor} />
			<meta name="description" content={config.siteDescription} />
			<meta name="keywords" content={config.siteKeywords} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="shortcut icon" href="/assets/favicon.ico"></link>
			<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"/>
			<link rel="shortcut icon" href="/assets/favicon.png" />
		</Head>
		<Component {...pageProps} />
		<Footer />
	</div>
}
