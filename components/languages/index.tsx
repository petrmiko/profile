'use client'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

const Languages = () => {
	const router = useRouter()
	const { i18n } = useTranslation()
	const locale = i18n.language

	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newLocale = event.target.value
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
		router.refresh()
	}

	return (
		<select
			id="languages"
			className="
			cursor-default
            appearance-none rounded-md border border-slate-700 bg-slate-900
            p-1
            text-left text-sm text-slate-300
            shadow-sm focus:border-sky-400 focus:bg-slate-800 focus:ring-0
            focus:outline-hidden
        "
			onChange={onChange}
			value={locale}
		>
			<option value="cs-CZ">🇨🇿 Čeština</option>
			<option value="en-US">🇬🇧 English</option>
		</select>
	)
}

export default Languages
