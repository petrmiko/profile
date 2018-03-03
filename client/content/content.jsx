import './content.less'
import React from 'react'
import { Tooltip } from 'react-tippy'

import Link from '../components/link'
import Icon from '../components/icon'

const renderSkills = () => {
	return <ul className='pm-profile-tags'>
		<li>
			<Tooltip arrow interactive
				html={
					<span>
					JS runtime outside of browser. Using <Link href='https://expressjs.com/' customClassNames={['pm-link--inverse']}>Express</Link> for server!
					</span>
				}
				position='bottom'>
				<Link href='https://nodejs.org' customClassNames={['pm-link--tag']}>NodeJS</Link>
			</Tooltip>
		</li>
		<li>
			<Tooltip arrow
				title='JS frontend framework by Facebook'
				position='bottom'>
				<Link href='https://reactjs.org' customClassNames={['pm-link--tag']}>React</Link>
			</Tooltip>
		</li>
		<li>
			<Tooltip arrow
				title='Keeping application state outside of React components'
				position='bottom'>
				<Link href='https://redux.js.org' customClassNames={['pm-link--tag']}>Redux</Link>
			</Tooltip>
		</li>
		<li>
			<Tooltip arrow interactive
				html={
					<span>
					Versioning system better others. Because of <Link href='http://effectif.com/git/recovering-lost-git-commits' customClassNames={['pm-link--inverse']}>reflog</Link>!
					</span>
				}
				position='bottom'>
				<Link href='https://git-scm.com' customClassNames={['pm-link--tag']}>Git</Link>
			</Tooltip>
		</li>
	</ul>
}

const renderHeader = () => {
	return <div className='pm-profile-header'>
		<div className='pm-profile-photo'/>
		<div className='pm-profile-header--text'>
			<h1 className='pm-profile-name'>Petr Miko</h1>
			<h2 className='pm-profile-job'>Developer @ Socialbakers</h2>
			<h3 className='pm-profile-location'>Pilsen, Czech Republic</h3>
			{renderSkills()}
		</div>
	</div>
}

const renderSections = () => {
	return <div className='pm-profile-sections'>
		<div className='pm-section'>
			<h3>Work</h3>
			<Link href='https://www.socialbakers.com/'>Socialbakers a.s.</Link>
		</div>

		<div className='pm-section'>
			<h3>Education</h3>
			Software Engineer<br/>
			<Link href='http://www.zcu.cz/en/'>University of West Bohemia</Link>
		</div>
	</div>
}

const renderSocial = () => {
	return <ul className='pm-profile-socialLinks'>
		<li><Link href='https://twitter.com/petrmiko' customClassNames={['pm-link--socialIcon']}><Icon name='twitter'/></Link></li>
		<li><Link href='https://linkedin.com/in/petrmiko' customClassNames={['pm-link--socialIcon']}><Icon name='linkedIn'/></Link></li>
		<li><Link href='https://github.com/petrmiko' customClassNames={['pm-link--socialIcon']}><Icon name='github'/></Link></li>
		<li><Link href='https://open.spotify.com/user/petrmiko' customClassNames={['pm-link--socialIcon']}><Icon name='spotify'/></Link></li>
	</ul>
}

const Content = () => {
	return <div className='pm-profile-content'>
		{renderHeader()}
		{renderSections()}
		{renderSocial()}
	</div>
}

Content.displayName = 'Content'
export default Content
