'use client'
import { Trans, useTranslation } from 'react-i18next'

import Link, { VARIANT_CLASS as LINK_VARIANT } from '../shared/link'
import Tooltip from '../shared/tooltip'

const Skills = () => {
	const { t } = useTranslation()

	return (
		<ul className="inline-flex list-none space-x-5">
			<li>
				<Tooltip
					content={
						<Trans i18nKey="tooltip-nodejs">
							JS runtime outside of browser. However this site uses <Link href="https://nextjs.org/">NextJS</Link> :)
						</Trans>
					}
				>
					<Link href="https://nodejs.org" className={LINK_VARIANT.TAG}>
						NodeJS
					</Link>
				</Tooltip>
			</li>
			<li>
				<Tooltip content={t('tooltip-react')}>
					<Link href="https://reactjs.org" className={LINK_VARIANT.TAG}>
						React
					</Link>
				</Tooltip>
			</li>
			<li>
				<Tooltip content={t('tooltip-redux')}>
					<Link href="https://redux-toolkit.js.org/" className={LINK_VARIANT.TAG}>
						Redux Toolkit
					</Link>
				</Tooltip>
			</li>
			<li>
				<Tooltip
					content={
						<Trans i18nKey="tooltip-git">
							The best versioning system. Because of <Link href="http://effectif.com/git/recovering-lost-git-commits">
								reflog
							</Link>
							!
						</Trans>
					}
				>
					<Link href="https://git-scm.com" className={LINK_VARIANT.TAG}>
						Git
					</Link>
				</Tooltip>
			</li>
		</ul>
	)
}

export default Skills
