import Social from '../../components/profile/social'
import Skills from '../../components/profile/skills'
import EducationAndJob from '../../components/profile/educationAndJob'
import Person from '../../components/profile/person'

export default function Profile() {
	return (
		<main className="flex flex-col justify-center items-center m-4 space-y-6 md:space-y-8 animate-fade-up">
			<Person />
			<Skills />
			<EducationAndJob />
			<Social />
		</main>
	)
}
