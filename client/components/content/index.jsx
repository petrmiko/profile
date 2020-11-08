import styles from './content.less'
import linkStyles from '../shared/link/link.less'

import React from 'react'
import { Tooltip } from 'react-tippy'

import Link from '../shared/link'
import Icon from '../shared/icon'

const renderSkills = () => {
	return <ul className={styles.tags}>
		<li>
			<Tooltip arrow interactive
				html={
					<span>
						JS runtime outside of browser. Using <Link href='https://expressjs.com/' customClassNames={[linkStyles['link--inverse']]}>Express</Link> for server!
					</span>
				}
				position='bottom'>
				<Link href='https://nodejs.org' customClassNames={[linkStyles['link--tag']]}>NodeJS</Link>
			</Tooltip>
		</li>
		<li>
			<Tooltip arrow
				title='JS frontend framework by Facebook'
				position='bottom'>
				<Link href='https://reactjs.org' customClassNames={[linkStyles['link--tag']]}>React</Link>
			</Tooltip>
		</li>
		<li>
			<Tooltip arrow
				title='Keeping application state outside of React components'
				position='bottom'>
				<Link href='https://redux.js.org' customClassNames={[linkStyles['link--tag']]}>Redux</Link>
			</Tooltip>
		</li>
		<li>
			<Tooltip arrow interactive
				html={
					<span>
						The best versioning system. Because of <Link href='http://effectif.com/git/recovering-lost-git-commits' customClassNames={[linkStyles['link--inverse']]}>reflog</Link>!
					</span>
				}
				position='bottom'>
				<Link href='https://git-scm.com' customClassNames={[linkStyles['link--tag']]}>Git</Link>
			</Tooltip>
		</li>
	</ul>
}

const renderHeader = () => {
	return <div className={styles.header}>
		<div className={styles.photo}/>
		<div className={styles.headerText}>
			<h1 className={styles.name}>Petr Miko</h1>
			<h2 className={styles.job}>JavaScript Developer</h2>
			<h3 className={styles.location}>Pilsen, Czech Republic</h3>
			{renderSkills()}
		</div>
	</div>
}

const renderSections = () => {
	return <div className={styles.sections}>
		<div>
			<h3>Work</h3>
			<Link href='https://www.socialbakers.com/'>Socialbakers a.s.</Link>
		</div>

		<div>
			<h3>Education</h3>
			Software Engineer<br/>
			<Link href='http://www.zcu.cz/en/'>University of West Bohemia</Link>
		</div>
	</div>
}

const renderSocial = () => {
	return <ul className={styles.socialLinks}>
		<li><Link href='https://twitter.com/petrmiko' customClassNames={[linkStyles['link--socialIcon']]}><Icon name='twitter'/></Link></li>
		<li><Link href='https://linkedin.com/in/petrmiko' customClassNames={[linkStyles['link--socialIcon']]}><Icon name='linkedIn'/></Link></li>
		<li><Link href='https://github.com/petrmiko' customClassNames={[linkStyles['link--socialIcon']]}><Icon name='github'/></Link></li>
	</ul>
}

const Content = () => {
	return <div className={styles.content}>
		{renderHeader()}
		{renderSections()}
		{renderSocial()}
	</div>
}

export default Content
