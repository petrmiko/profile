import styles from './app.less'

import React, { useEffect } from 'react'

import Content from './content/content'
import Footer from './footer/footer'

const App = () => {
	useEffect(() => {
		document.title = 'Petr Miko.cz - Personal page'
	})

	return <div className={styles.app}>
		<Content />
		<Footer />
	</div>
}

App.displayName = 'App'

export default App
