import type { ReactNode } from 'react'

import style from './link.module.css'

export const VARIANT_CLASS = {
	TAG: style.tag,
	SOCIAL_ICON: style.socialIcon,
}

const DEFAULT_CLASS =
	'underline underline-offset-2 decoration-slate-500 transition-colors hover:text-sky-300 hover:decoration-sky-300'

type LinkProps = {
	href: string
	children?: ReactNode
	className?: string
}

const Link = ({ href, children, className = DEFAULT_CLASS }: LinkProps) => (
	<a href={href} className={className} target="_blank" rel="noopener noreferrer">
		{children}
	</a>
)

export default Link
