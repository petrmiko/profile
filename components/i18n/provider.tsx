'use client'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { useEffect, useRef } from 'react'
import czech from '../languages/translations/cz.json'
import english from '../languages/translations/en.json'

const resources = {
	'cs-CZ': { translation: czech },
	'en-US': { translation: english },
}

export default function I18nProvider({
	lang,
	children,
}: {
	lang: string
	children: React.ReactNode
}) {
	const initialised = useRef<true | null>(null)

	if (initialised.current == null) {
		i18n.use(initReactI18next).init({
			resources,
			lng: lang,
			fallbackLng: 'cs-CZ',
			interpolation: { escapeValue: false },
		})
		initialised.current = true
	}

	useEffect(() => {
		i18n.changeLanguage(lang)
	}, [lang])

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
