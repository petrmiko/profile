import { useRouter } from 'next/router';

const Languages = () => {
	const router = useRouter()
	const { locale, pathname, asPath, query } = router

	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		router.push({ pathname, query }, asPath, { locale: event.target.value })
	}

	return <select
		id='languages'
		className='
			appearance-none
            bg-white border rounded-md shadow-sm
            p-1
            text-left cursor-default
            focus:outline-hidden focus:ring-0 focus:bg-slate-100 focus:border-slate-600
            text-sm
        '
		onChange={onChange}
		value={locale}
	>
		<option value='cs-CZ'>🇨🇿 Čeština</option>
		<option value='en-US'>🇬🇧 English</option>
	</select>
}

export default Languages
