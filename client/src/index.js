import './main.css'
import 'react-tippy/dist/tippy.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

import App from './components/app'
import NotFound from './components/not-found'

const history = createBrowserHistory()

ReactDOM.render(
	<Router history={history}>
		<Switch>
			<Route exact path='/' component={App} />
			<Route component={NotFound}/>
		</Switch>
	</Router>
	,
	document.getElementById('root'),
)
