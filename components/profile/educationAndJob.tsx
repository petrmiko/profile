import { useTranslation } from 'react-i18next'

import Link from '../shared/link'

const EducationAndJob = () => {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col md:flex-row w-96 justify-between space-y-5 md:space-y-0 text-center">
			<div className="text-sm">
				<h3 className="text-base font-bold">{t('header-job')}</h3>
				<Link href="https://emplifi.io/">Emplifi</Link>
			</div>

			<div className="text-sm">
				<h3 className="text-base font-bold">{t('header-education')}</h3>
				{t('title-education')}
				<br />
				<Link href={t('url-education')}>{t('place-education')}</Link>
			</div>
		</div>
	)
}

export default EducationAndJob
