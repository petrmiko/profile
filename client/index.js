import 'react-tippy/dist/tippy.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

import App from './app'

const history = createBrowserHistory()

ReactDOM.render(
	<Router history={history}>
		<Route exact path='/' component={App} />
	</Router>
	,
	document.getElementById('root')
)
