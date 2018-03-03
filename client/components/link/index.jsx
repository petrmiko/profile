import './link.less'

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Link = React.memo((props) => {
	const { children, customClassNames, disabled, href, isRelative, ...rest } = props
	const cls = cx('pm-link', { 'pm-link--disabled': disabled }, customClassNames)

	if (disabled) {
		return <div className={cls} {...rest}>{children}</div>
	}

	return isRelative
		? <a href={href} className={cls} {...rest}>{children}</a>
		: <a href={href} className={cls} target='_blank' rel='noopener noreferrer' {...rest}>{children}</a>
})

Link.displayName = 'Link'

Link.propTypes = {
	children: PropTypes.any,
	customClassNames: PropTypes.arrayOf(PropTypes.string),
	disabled: PropTypes.bool,
	href: PropTypes.string.isRequired,
	isRelative: PropTypes.bool,
}

Link.defaultProps = {
	customClassNames: [],
	isRelative: false,
	disabled: false,
}

export default Link
