import { useTranslation } from 'react-i18next'

const Languages = () => {
	const { i18n } = useTranslation()

	const onChange = (event) => {
		i18n.changeLanguage(event.target.value)
	}

	return <select
		id='languages'
		className='
			appearance-none
            bg-white border rounded-md shadow-sm
            p-1
            text-left cursor-default
            focus:outline-none focus:ring-0 focus:bg-slate-100 focus:border-slate-600
            text-sm
        '
		onChange={onChange}
		value={i18n.language}
	>
		<option value='cz'>🇨🇿 Čeština</option>
		<option value='en'>🇬🇧 English</option>
	</select>
}

export default Languages
