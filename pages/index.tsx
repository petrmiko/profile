import Social from '../components/profile/social'
import Skills from '../components/profile/skills'
import EducationAndJob from '../components/profile/educationAndJob'
import Person from '../components/profile/person'

const Profile = () => {
	return (
		<main className="flex flex-col justify-center items-center m-2 space-y-2 md:space-y-5">
			<Person />
			<Skills />
			<EducationAndJob />
			<Social />
		</main>
	)
}

export default Profile
