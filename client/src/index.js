import './main.css'
import 'react-tippy/dist/tippy.css'

import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import App from './components/app'
import NotFound from './components/not-found'

const history = createBrowserHistory()

ReactDOM.render(
	<BrowserRouter history={history}>
		<Routes>
			<Route path='/' element={<App />} />
			<Route element={<NotFound />}/>
		</Routes>
	</BrowserRouter>
	,
	document.getElementById('root'),
)
