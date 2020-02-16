import 'react-tippy/dist/tippy.css'

import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

import App from './app'
import config from './config'

const history = createBrowserHistory()

if (config.googleAnalyticsUid) {
	ReactGA.initialize(config.googleAnalyticsUid)
}

ReactDOM.render(
	<Router history={history}>
		<Route exact path='/' component={App} />
	</Router>
	,
	document.getElementById('root'),
)
