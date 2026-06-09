import { memo, type ReactNode } from 'react'
import NextLink from 'next/link'

import style from './link.module.css'

export const VARIANT_CLASS = {
	TAG: style.tag,
	SOCIAL_ICON: style.socialIcon,
}

type LinkProps = {
	href: string
	children?: ReactNode
	className?: string
	disabled?: boolean
	isRelative?: boolean
}

const Link = (props: LinkProps) => {
	const {
		children,
		href,
		className = 'underline underline-offset-2 decoration-slate-500 transition-colors hover:text-sky-300 hover:decoration-sky-300',
		disabled = false,
		isRelative = false,
		...rest
	} = props

	if (disabled) {
		return (
			<div className={className} {...rest}>
				{children}
			</div>
		)
	}

	return isRelative ? (
		<NextLink href={href} className={className} {...rest}>
			{children}
		</NextLink>
	) : (
		<a
			href={href}
			className={className}
			target="_blank"
			rel="noopener noreferrer"
			{...rest}
		>
			{children}
		</a>
	)
}

Link.displayName = 'Link'

export default memo(Link)
