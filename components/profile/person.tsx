'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import config from '../../config'

const Person = () => {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col w-full items-center">
			<div className="rounded-full p-1 ring-1 ring-slate-700 shadow-xl shadow-black/40 mb-4 md:mb-8">
				<Image
					loading="eager"
					className="rounded-full size-40 md:size-64"
					src="/assets/photo.jpg"
					alt={`${config.siteAuthor} (photo)`}
					width={256}
					height={256}
				/>
			</div>
			<div className="text-center space-y-4">
				<h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-100">
					{config.siteAuthor}
				</h1>
				<h2 className="text-2xl md:text-3xl font-medium text-slate-300">
					{t('title-job')}
				</h2>
				<h3 className="text-slate-400">
					{t('city')}, {t('country')}
				</h3>
			</div>
		</div>
	)
}

export default Person
