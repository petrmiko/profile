import { Trans, useTranslation } from 'react-i18next'
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi'
import { RiMastodonLine as Mastodon } from 'react-icons/ri'
import Tippy from '@tippyjs/react'

import Link, { VARIANT_CLASS as LINK_VARIANT } from '../shared/link'
const LINK_ICON_SIZE = 44

const Social = () => {
	const { t } = useTranslation()

	return (
		<ul className="flex list-none md:space-x-20">
			<li>
				<Tippy arrow={false} placement="bottom" content={t('tooltip-mastodon')}>
					<Link
						href="https://mastodonczech.cz/@petrmiko"
						className={LINK_VARIANT.SOCIAL_ICON}
					>
						<Mastodon title="" size={LINK_ICON_SIZE} color="inherit" />
					</Link>
				</Tippy>
			</li>
			<li>
				<Tippy arrow={false} placement="bottom" content={t('tooltip-linkedin')}>
					<Link
						href="https://linkedin.com/in/petrmiko"
						className={LINK_VARIANT.SOCIAL_ICON}
					>
						<Linkedin title="" size={LINK_ICON_SIZE} color="inherit" />
					</Link>
				</Tippy>
			</li>
			<li>
				<Tippy arrow={false} placement="bottom" content={t('tooltip-github')}>
					<Link
						href="https://github.com/petrmiko"
						className={LINK_VARIANT.SOCIAL_ICON}
					>
						<Github title="" size={LINK_ICON_SIZE} color="inherit" />
					</Link>
				</Tippy>
			</li>
		</ul>
	)
}

export default Social
