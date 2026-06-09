'use client'
import { useTranslation } from 'react-i18next'

import Link from '../shared/link'

const EducationAndJob = () => {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col md:flex-row justify-center gap-4 text-center">
			<div className="text-sm text-slate-300 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur px-8 py-4 md:min-w-56">
				<h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
					{t('header-job')}
				</h3>
				<Link href="https://emplifi.io/">Emplifi</Link>
			</div>

			<div className="text-sm text-slate-300 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur px-8 py-4 md:min-w-56">
				<h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
					{t('header-education')}
				</h3>
				{t('title-education')}
				<br />
				<Link href={t('url-education')}>{t('place-education')}</Link>
			</div>
		</div>
	)
}

export default EducationAndJob
