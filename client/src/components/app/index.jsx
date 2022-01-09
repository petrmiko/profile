import styles from './app.less'

import React from 'react'

import Content from '../content'
import Footer from '../footer'

import config from '../../config'
import GoogleAnalytics from '../google-analytics'

const App = () => {
	return <div className={styles.app}>
		{config.googleAnalyticsId && !config.isDev && <GoogleAnalytics uid={config.googleAnalyticsId}/>}
		<Content />
		<Footer />
	</div>
}

export default App
