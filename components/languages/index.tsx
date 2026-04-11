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
			appearance-none
            bg-white border rounded-md shadow-sm
            p-1
            text-left cursor-default
            focus:outline-hidden focus:ring-0 focus:bg-slate-100 focus:border-slate-600
            text-sm
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
