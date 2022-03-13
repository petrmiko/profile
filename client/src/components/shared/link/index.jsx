import { memo } from 'react'
import PropTypes from 'prop-types'

import './link.less'

const Link = (props) => {
	const { children, className, disabled, href, isRelative, ...rest } = props

	if (disabled) {
		return <div className={className} {...rest}>{children}</div>
	}

	return isRelative
		? <a href={href} className={className} {...rest}>{children}</a>
		: <a href={href} className={className} target='_blank' rel='noopener noreferrer' {...rest}>{children}</a>
}

Link.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	href: PropTypes.string.isRequired,
	isRelative: PropTypes.bool,
}

Link.defaultProps = {
	className: 'underline hover:no-underline',
	isRelative: false,
	disabled: false,
}

export default memo(Link)
