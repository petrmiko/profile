import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import config from '../../config'

const Person = () => {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col w-full align-middle">
			<Image
				className="rounded-full self-center scale-75 md:scale-100 transform transition md:mb-6"
				src="/assets/photo.jpg"
				alt={`${config.siteAuthor} (photo)`}
				width={256}
				height={256}
			/>
			<div className="text-center space-y-4">
				<h1 className="text-5xl font-medium">{config.siteAuthor}</h1>
				<h2 className="text-4xl font-medium">{t('title-job')}</h2>
				<h3 className="">
					{t('city')}, {t('country')}
				</h3>
			</div>
		</div>
	)
}

export default Person
