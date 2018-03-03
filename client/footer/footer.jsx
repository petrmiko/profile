import './footer.less'

import React from 'react'
import Link from '../components/link'

const Footer = () => {
	return <div className='pm-profile-footer'>
		<div className='copyright'>2019 Petr Miko</div>
		<ul className='links'>
			<li><Link href='https://github.com/petrmiko/profile'>Source Code</Link></li>
			<li><Link href='https://simpleicons.org/'>Icons from Simple Icons</Link></li>
		</ul>
	</div>
}

Footer.displayName = 'Footer'

export default Footer
