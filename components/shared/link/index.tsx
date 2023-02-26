import { forwardRef, memo, type ReactNode, type Ref } from 'react'
import PropTypes from 'prop-types'
import NextLink from "next/link"

import style from './link.module.css'

export const VARIANT_CLASS = {
	TAG: style.tag,
	SOCIAL_ICON: style.socialIcon,
}

type LinkProps = {
	href: string,
	children?: ReactNode,
	className?: string,
	disabled?: boolean,
	isRelative?: boolean,
}

const Link = forwardRef((props: LinkProps, ref: Ref<any>) => {
	const { children, className, disabled, href, isRelative, ...rest } = props

	if (disabled) {
		return <div ref={ref} className={className} {...rest}>{children}</div>
	}

	return isRelative
		? <NextLink href={href} ref={ref} className={className} {...rest}>{children}</NextLink>
		: <a href={href} ref={ref}  className={className} target='_blank' rel='noopener noreferrer' {...rest}>{children}</a>
})

Link.displayName = 'Link'

Link.propTypes = {
	children: PropTypes.any.isRequired,
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
