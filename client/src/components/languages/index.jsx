import { useTranslation } from 'react-i18next'

const Languages = () => {
	const { i18n } = useTranslation()

	const onChange = (event) => {
		i18n.changeLanguage(event.target.value)
	}

	return <select
		id='languages'
		className='
            absolute w-24 top-4 right-4
            bg-white border border-gray-300 rounded-md shadow-sm
            px-3 py-2
            text-left cursor-default
            focus:outline-none focus:ring-1 focus:bg-gray-100 focus:border-gray-500
            text-sm
        '
		onChange={onChange}
		value={i18n.language}
	>
		<option value='cz'>Čeština</option>
		<option value='en'>English</option>
	</select>
}

export default Languages
