import Link from "next/link"
import { Trans, useTranslation } from "react-i18next"

const NotFound = () => {
	const { t } = useTranslation()
	return <div className='text-center'>
		<div className='text-2xl font-bold'>{t('404-main')}</div>
		<div className='text-xl'>
			<Trans i18nKey='404-hint'>
				Try returning to the <Link href='/' className='underline hover:no-underline'>home page</Link>
			</Trans>
		</div>
	</div>
}

export default NotFound
