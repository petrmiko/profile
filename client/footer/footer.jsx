import styles from './footer.less'

import React from 'react'
import Link from '../components/link'

const Footer = () => {
	return <div className={styles.footer}>
		<div className={styles.copyright}>2019 Petr Miko</div>
		<ul className={styles.links}>
			<li><Link href='https://github.com/petrmiko/profile'>Source Code</Link></li>
			<li><Link href='https://simpleicons.org/'>Icons from Simple Icons</Link></li>
		</ul>
	</div>
}

Footer.displayName = 'Footer'

export default Footer
