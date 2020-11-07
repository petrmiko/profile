import styles from './icon.less'

import React from 'react'
import PropTypes from 'prop-types'

import TwitterIcon from 'simple-icons/icons/twitter'
import LinkedInIcon from 'simple-icons/icons/linkedin'
import GithubIcon from 'simple-icons/icons/github'
import SpotifyIcon from 'simple-icons/icons/spotify'

const content = {
	twitter: TwitterIcon,
	linkedIn: LinkedInIcon,
	github: GithubIcon,
	spotify: SpotifyIcon,
}

const Icon = ({ name }) => {
	const icon = content[name]
	return icon
		? <svg className={styles.icon} dangerouslySetInnerHTML={{ __html: icon.svg }}/>
		: name
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
}

export default React.memo(Icon)
