'use client'
import { useTranslation } from 'react-i18next'

import Link from '../shared/link'

const EducationAndJob = () => {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col justify-center gap-3 text-center md:flex-row md:gap-4">
			<div className="rounded-2xl border border-slate-800 bg-slate-900/50 px-6 py-3 text-sm text-slate-300 backdrop-blur-sm md:min-w-56 md:px-8">
				<h3 className="mb-2 text-xs font-semibold tracking-widest text-slate-500 uppercase">
					{t('header-job')}
				</h3>
				<Link href="https://emplifi.io/">Emplifi</Link>
			</div>

			<div className="rounded-2xl border border-slate-800 bg-slate-900/50 px-6 py-3 text-sm text-slate-300 backdrop-blur-sm md:min-w-56 md:px-8">
				<h3 className="mb-2 text-xs font-semibold tracking-widest text-slate-500 uppercase">
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
