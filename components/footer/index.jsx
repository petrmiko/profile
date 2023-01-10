import { useTranslation } from 'react-i18next'
import Languages from '../languages'
import Link from '../shared/link'

const Footer = () => {
	const { t } = useTranslation()

	return <div className='flex flex-row justify-between px-2 py-1 text-sm text-center'>
		<div className='self-end'>© 2021 Petr Miko</div>
		<ul className='md:inline-flex list-none justify-between items-center'>
			<li className='pr-5'><Link href='https://github.com/petrmiko/profile'>{t('source-code')}</Link></li>
			<li><Languages /></li>
		</ul>
	</div>
}

export default Footer
