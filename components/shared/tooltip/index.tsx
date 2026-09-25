import type { ReactNode } from 'react'

type TooltipProps = {
	content: ReactNode
	children: ReactNode
}

const Tooltip = ({ content, children }: TooltipProps) => (
	<div className="group relative inline-block">
		{children}
		<div
			className="
				invisible absolute top-full left-1/2 z-50
				mt-1 -translate-x-1/2
				rounded-lg border border-slate-700 bg-slate-800/95 px-3 py-1.5 text-xs whitespace-nowrap text-slate-100
				shadow-xl group-hover:visible
			"
		>
			{content}
		</div>
	</div>
)

export default Tooltip
