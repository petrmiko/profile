import type { ReactNode } from 'react'

type TooltipProps = {
	content: ReactNode
	children: ReactNode
}

const Tooltip = ({ content, children }: TooltipProps) => (
	<div className="relative inline-block group">
		{children}
		<div
			className="
				absolute top-full left-1/2 -translate-x-1/2 mt-1
				invisible group-hover:visible
				bg-gray-800 text-white text-xs rounded px-2 py-1
				whitespace-nowrap z-50
			"
		>
			{content}
		</div>
	</div>
)

export default Tooltip
