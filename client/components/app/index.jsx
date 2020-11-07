import styles from './app.less'

import React, { useEffect } from 'react'

import Content from '../content'
import Footer from '../footer'

const App = () => {
	useEffect(() => {
		document.title = 'Petr Miko.cz - Personal page'
	})

	return <div className={styles.app}>
		<Content />
		<Footer />
	</div>
}

export default App
