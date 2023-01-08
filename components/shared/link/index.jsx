import { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'

import style from './link.module.scss'

export const VARIANT_CLASS = {
	TAG: style.tag,
	SOCIAL_ICON: style.socialIcon,
}

const Link = forwardRef((props, ref) => {
	const { children, className, disabled, href, isRelative, ...rest } = props

	if (disabled) {
		return <div ref={ref} className={className} {...rest}>{children}</div>
	}

	return isRelative
		? <a ref={ref} href={href} className={className} {...rest}>{children}</a>
		: <a ref={ref} href={href} className={className} target='_blank' rel='noopener noreferrer' {...rest}>{children}</a>
})

Link.displayName = 'Link'

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
