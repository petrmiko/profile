import Content from '../content'
import Footer from '../footer'

import config from '../../config'
import GoogleAnalytics from '../google-analytics'
import Languages from '../languages'

const App = () => {
	return <div className='flex flex-col h-screen justify-between'>
		{config.googleAnalyticsId && !config.isDev && <GoogleAnalytics uid={config.googleAnalyticsId}/>}
		<Languages />
		<Content />
		<Footer />
	</div>
}

export default App
