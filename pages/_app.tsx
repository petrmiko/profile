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
import { useState } from 'react'

const Language = {
	CZ: 'cs-CZ',
	EN: 'en-US',
} as const

const translations = {
	[Language.CZ]: { translation: czech },
	[Language.EN]: { translation: english },
}

export default function App({ Component, pageProps }: AppProps) {
	const { locale, defaultLocale = Language.CZ } = useRouter()
	const [globalError, setGlobalError] = useState<unknown>(null)
	let resolvedLocale = (() => {
		if (!(locale && locale in translations)) {
			if (defaultLocale in translations) return defaultLocale
			return Language.CZ
		}
		return locale
	})() as typeof Language[keyof typeof Language]
	if (!translations[resolvedLocale]) resolvedLocale = Language.CZ

	i18nUse(initReactI18next) // passes i18n down to react-i18next
		.init({
			resources: translations,
			lng: locale,
			fallbackLng: defaultLocale,

			interpolation: {
				escapeValue: false,
			},
		}).catch((error: unknown) => {
			setGlobalError(error)
			console.error('Error initializing i18next:', error)
		})

	const t = (resourceKey: string): string => {
		const { translation } = translations[resolvedLocale]
		return translation[resourceKey as keyof typeof translation]
	}

	if (globalError) {
		const errorMessage = globalError instanceof Error ? globalError.message : JSON.stringify(globalError)
		return (
			<div className="flex flex-col h-screen justify-center items-center">
				<h1 className="text-4xl font-bold">Application crashed</h1>
				<p className="text-xl">This should not happen. But it did. Oops?</p>
				<pre>{errorMessage}</pre>
			</div>
		)
	}

	return (
		<div className="flex flex-col h-screen justify-between">
			<Head>
				<title>{t('site-name')}</title>
				<meta name="author" content={config.siteAuthor} />
				<meta name="description" content={t('site-description')} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="shortcut icon" href="/assets/favicon.ico"></link>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/favicon-16x16.png"
				/>
				<link rel="shortcut icon" href="/assets/favicon.png" />
			</Head>
			<Component {...pageProps} />
			<Footer />
		</div>
	)
}
