import './main.scss'
import 'tippy.js/dist/tippy.css'

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import App from './components/app'
import NotFound from './components/not-found'

import czech from './components/languages/translations/cz.json'
import english from './components/languages/translations/en.json'

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
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

const history = createBrowserHistory()
const root = createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter history={history}>
		<Routes>
			<Route path='/'>
				<Route index element={<App />} />
				<Route path='no-can-do' element={<NotFound />}/>
				<Route
					path='*'
					element={<Navigate replace to='/no-can-do'/>}
				/>
			</Route>
		</Routes>
	</BrowserRouter>)
