'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import config from '../../config'

const Person = () => {
	const { t } = useTranslation()

	return (
		<div className="flex w-full flex-col items-center">
			<div className="mb-3 rounded-full p-1 shadow-xl ring-1 shadow-black/40 ring-slate-700 md:mb-6">
				<Image
					loading="eager"
					className="size-32 rounded-full md:size-48"
					src="/assets/photo.jpg"
					alt={`${config.siteAuthor} (photo)`}
					width={256}
					height={256}
				/>
			</div>
			<div className="space-y-2 text-center md:space-y-3">
				<h1 className="text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">
					{config.siteAuthor}
				</h1>
				<h2 className="text-xl font-medium text-slate-300 md:text-2xl">
					{t('title-job')}
				</h2>
				<h3 className="text-sm text-slate-400 md:text-base">
					{t('city')}, {t('country')}
				</h3>
			</div>
		</div>
	)
}

export default Person
