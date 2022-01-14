import React from 'react'
import Link from '../shared/link'

const Footer = () => {
	return <div className='flex flex-row justify-between px-2 py-1 text-sm text-center'>
		<div>© 2021 Petr Miko</div>
		<ul className='md:inline-flex list-none justify-between'>
			<li className='pr-5'><Link href='https://github.com/petrmiko/profile'>Source Code</Link></li>
			<li><Link href='https://simpleicons.org/'>Icons from Simple Icons</Link></li>
		</ul>
	</div>
}

export default Footer
