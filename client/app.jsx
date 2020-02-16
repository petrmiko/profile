import styles from './app.less'

import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'

import Content from './content/content'
import Footer from './footer/footer'

const App = ({ location }) => {
	useEffect(() => {
		document.title = 'Petr Miko.cz - Personal page'
		ReactGA.pageview(location.pathname + location.search)
	})

	return <div className={styles.app}>
		<Content />
		<Footer />
	</div>
}

App.displayName = 'App'
App.propTypes = {
	location: PropTypes.any,
}

export default App
