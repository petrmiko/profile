import './main.css'
import 'react-tippy/dist/tippy.css'

import ReactDOM from 'react-dom'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import App from './components/app'
import NotFound from './components/not-found'

const history = createBrowserHistory()

ReactDOM.render(
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
	</BrowserRouter>
	,
	document.getElementById('root'),
)
