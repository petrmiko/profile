import { useTranslation } from 'react-i18next'
import Languages from '../languages'
import Link from '../shared/link'

const Footer = () => {
	const { t } = useTranslation()

	return <footer className='flex flex-row justify-between px-2 py-1 text-sm text-center'>
		<div className='self-end'>© 2023 Petr Miko</div>
		<ul className='sm:inline-flex list-none justify-between items-baseline gap-x-3'>
			<li><Link href='https://github.com/petrmiko/profile'>{t('source-code')}</Link></li>
			<li><Languages /></li>
		</ul>
	</footer>
}

export default Footer
