'use client'
import { useTranslation } from 'react-i18next'
import Languages from '../languages'
import Link from '../shared/link'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className="flex flex-row justify-between px-3 py-2 text-center text-sm text-slate-500">
			<div className="self-end">© 2023 Petr Miko</div>
			<ul className="list-none items-baseline justify-between gap-x-3 sm:inline-flex">
				<li>
					<Link href="https://github.com/petrmiko/profile">
						{t('source-code')}
					</Link>
				</li>
				<li>
					<Languages />
				</li>
			</ul>
		</footer>
	)
}

export default Footer
