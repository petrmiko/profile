
import { use as i18nUse } from 'i18next'
import { initReactI18next } from 'react-i18next'

import '../styles/globals.scss'
import 'tippy.js/dist/tippy.css'

import czech from '../components/languages/translations/cz.json'
import english from '../components/languages/translations/en.json'

i18nUse(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			cz: { translation: czech },
			en: { translation: english },
		},
		lng: 'cz',
		fallbackLng: 'en',

		interpolation: {
			escapeValue: false,
		},
	})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
