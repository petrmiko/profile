import styles from './app.less'

import React from 'react'

import Content from '../content'
import Footer from '../footer'
import { Helmet } from 'react-helmet'

import config from '../../config'
import GoogleAnalytics from '../google-analytics'

const App = () => {
	return <div className={styles.app}>
		<Helmet>
			{config.siteName && <title>{config.siteName}</title>}
			{config.siteDescription && <meta name='description' content={config.siteDescription}/>}
			{config.siteAuthor && <meta name='author' content={config.siteAuthor}/>}
			{config.siteKeywords && <meta name='keywords' content={config.siteKeywords}/>}
		</Helmet>
		{config.googleAnalyticsId && !config.isDev && <GoogleAnalytics uid={config.googleAnalyticsId}/>}
		<Content />
		<Footer />
	</div>
}

export default App
