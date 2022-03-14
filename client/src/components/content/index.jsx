import Tippy from '@tippyjs/react'

import Link from '../shared/link'
import { Twitter, Linkedin, Github } from '@icons-pack/react-simple-icons'

import photo from '../../../assets/photo.jpg'
import { Trans, useTranslation } from 'react-i18next'

const LINK_ICON_SIZE = 44

const renderSkills = (t) => {
	return <ul className='inline-flex list-none space-x-5'>
		<li>
			<Tippy arrow={false} interactive placement='bottom'
				content={
					<Trans i18nKey='tooltip-nodejs'>
						JS runtime outside of browser. Using <Link href='https://expressjs.com/'>Express</Link> for server!
					</Trans>
				}
			>
				<Link href='https://nodejs.org' className='link--tag'>NodeJS</Link>
			</Tippy>
		</li>
		<li>
			<Tippy arrow={false} placement='bottom' content={t('tooltip-react')}>
				<Link href='https://reactjs.org' className='link--tag'>React</Link>
			</Tippy>
		</li>
		<li>
			<Tippy arrow={false} placement='bottom' content={t('tooltip-redux')}>
				<Link href='https://redux.js.org' className='link--tag'>Redux</Link>
			</Tippy>
		</li>
		<li>
			<Tippy arrow={false} interactive placement='bottom'
				content={
					<Trans i18nKey='tooltip-git'>
						The best versioning system. Because of <Link href='http://effectif.com/git/recovering-lost-git-commits'>reflog</Link>!
					</Trans>
				}
			>
				<Link href='https://git-scm.com' className='link--tag'>Git</Link>
			</Tippy>
		</li>
	</ul>
}

const renderHeader = (t) => {
	return <div className='flex flex-col w-full align-middle'>
		<img className='rounded-full self-center scale-75 md:scale-100 transform transition md:mb-6' src={photo} alt='' width={256} height={256} />
		<div className='text-center space-y-4'>
			<h1 className='text-5xl font-medium'>Petr Miko</h1>
			<h2 className='text-4xl font-medium'>{t('title-job')}</h2>
			<h3 className=''>{t('city')}, {t('country')}</h3>
			{renderSkills(t)}
		</div>
	</div>
}

const renderSections = (t) => {
	return <div className='flex flex-col md:flex-row w-96 justify-between space-y-5 md:space-y-0 text-center'>
		<div className='text-sm'>
			<h3 className='text-base font-bold'>{t('header-job')}</h3>
			<Link href='https://emplifi.io/'>Emplifi</Link>
		</div>

		<div className='text-sm'>
			<h3 className='text-base font-bold'>{t('header-education')}</h3>
			{t('title-education')}<br/>
			<Link href={t('url-education')}>{t('place-education')}</Link>
		</div>
	</div>
}

const renderSocial = (t) => {
	return <ul className='flex list-none md:space-x-20'>
		<li>
			<Tippy arrow={false} placement='bottom' content={t('tooltip-twitter')}>
				<Link href='https://twitter.com/petrmiko' className='link--socialIcon'>
					<Twitter title='' size={LINK_ICON_SIZE} color='inherit'/>
				</Link>
			</Tippy>
		</li>
		<li>
			<Tippy arrow={false} placement='bottom' content={t('tooltip-linkedin')}>
				<Link href='https://linkedin.com/in/petrmiko' className='link--socialIcon'>
					<Linkedin title='' size={LINK_ICON_SIZE} color='inherit'/>
				</Link>
			</Tippy>
		</li>
		<li>
			<Tippy arrow={false} placement='bottom' content={t('tooltip-github')}>
				<Link href='https://github.com/petrmiko' className='link--socialIcon'>
					<Github title='' size={LINK_ICON_SIZE} color='inherit'/>
				</Link>
			</Tippy>
		</li>
	</ul>
}

const Content = () => {
	const { t } = useTranslation()

	return <div className='flex flex-col justify-center items-center m-2 space-y-2 md:space-y-5'>
		{renderHeader(t)}
		{renderSections(t)}
		{renderSocial(t)}
	</div>
}

export default Content
