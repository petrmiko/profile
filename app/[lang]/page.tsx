import Social from '../../components/profile/social'
import Skills from '../../components/profile/skills'
import EducationAndJob from '../../components/profile/educationAndJob'
import Person from '../../components/profile/person'

export default function Profile() {
	return (
		<main className="flex animate-fade-up flex-col items-center justify-center gap-5 p-4 md:gap-7">
			<Person />
			<Skills />
			<EducationAndJob />
			<Social />
		</main>
	)
}
