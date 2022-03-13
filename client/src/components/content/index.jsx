import Tippy from '@tippyjs/react'

import Link from '../shared/link'
import { Twitter, Linkedin, Github } from '@icons-pack/react-simple-icons'

import photo from '../../../assets/photo.jpg'

const LINK_ICON_SIZE = 44

const renderSkills = () => {
	return <ul className='inline-flex list-none space-x-5'>
		<li>
			<Tippy arrow interactive
				content={
					<span>
						JS runtime outside of browser. Using <Link href='https://expressjs.com/'>Express</Link> for server!
					</span>
				}
				placement='bottom'>
				<Link href='https://nodejs.org' className='link--tag'>NodeJS</Link>
			</Tippy>
		</li>
		<li>
			<Tippy arrow
				content='JS frontend framework by Facebook'
				placement='bottom'>
				<Link href='https://reactjs.org' className='link--tag'>React</Link>
			</Tippy>
		</li>
		<li>
			<Tippy arrow
				content='Keeping application state outside of React components'
				placement='bottom'>
				<Link href='https://redux.js.org' className='link--tag'>Redux</Link>
			</Tippy>
		</li>
		<li>
			<Tippy arrow interactive
				content={
					<span>
						The best versioning system. Because of <Link href='http://effectif.com/git/recovering-lost-git-commits'>reflog</Link>!
					</span>
				}
				placement='bottom'>
				<Link href='https://git-scm.com' className='link--tag'>Git</Link>
			</Tippy>
		</li>
	</ul>
}

const renderHeader = () => {
	return <div className='flex flex-col w-full align-middle'>
		<img className='rounded-full mx-auto' src={photo} alt='' width={256} height={256} />
		<div className='text-center space-y-4'>
			<h1 className='text-5xl font-medium'>Petr Miko</h1>
			<h2 className='text-4xl font-medium'>JavaScript Developer</h2>
			<h3 className=''>Pilsen, Czech Republic</h3>
			{renderSkills()}
		</div>
	</div>
}

const renderSections = () => {
	return <div className='flex flex-col md:flex-row w-96 justify-between space-y-5 md:space-y-0 text-center'>
		<div className='text-sm'>
			<h3 className='text-base font-bold'>Work</h3>
			<Link href='https://emplifi.io/'>Emplifi</Link>
		</div>

		<div className='text-sm'>
			<h3 className='text-base font-bold'>Education</h3>
			Software Engineer<br/>
			<Link href='http://www.zcu.cz/en/'>University of West Bohemia</Link>
		</div>
	</div>
}

const renderSocial = () => {
	return <ul className='flex p-10 list-none md:space-x-20'>
		<li>
			<Link title='Twitter Account' href='https://twitter.com/petrmiko' className='link--socialIcon'>
				<Twitter title='' size={LINK_ICON_SIZE} color='inherit'/>
			</Link>
		</li>
		<li>
			<Link title='LinkedIn Account' href='https://linkedin.com/in/petrmiko' className='link--socialIcon'>
				<Linkedin title='' size={LINK_ICON_SIZE} color='inherit'/>
			</Link>
		</li>
		<li>
			<Link title='GitHub Profile' href='https://github.com/petrmiko' className='link--socialIcon'>
				<Github title='' size={LINK_ICON_SIZE} color='inherit'/>
			</Link>
		</li>
	</ul>
}

const Content = () => {
	return <div className='flex flex-col justify-center items-center m-2 space-y-2 md:space-y-5'>
		{renderHeader()}
		{renderSections()}
		{renderSocial()}
	</div>
}

export default Content
