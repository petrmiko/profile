import { forwardRef, memo, type ReactNode, type Ref } from 'react'
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
	const { children, href, className = 'underline hover:no-underline', disabled = false, isRelative = false, ...rest } = props

	if (disabled) {
		return <div ref={ref} className={className} {...rest}>{children}</div>
	}

	return isRelative
		? <NextLink href={href} ref={ref} className={className} {...rest}>{children}</NextLink>
		: <a href={href} ref={ref}  className={className} target='_blank' rel='noopener noreferrer' {...rest}>{children}</a>
})

Link.displayName = 'Link'

export default memo(Link)
