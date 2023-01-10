import Head from 'next/head'

import Content from '../components/content'
import Footer from '../components/footer'

import config from '../config'
import GoogleAnalytics from '../components/google-analytics'

const Home = () => {
	return <div className='flex flex-col h-screen justify-between'>
		<Head>
			<title>{config.siteName}</title>
			<meta name="author" content={config.siteAuthor} />
			<meta name="description" content={config.siteDescription} />
			<meta name="keywords" content={config.siteKeywords} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="shortcut icon" href="/assets/favicon.png" />
		</Head>

		{config.googleAnalyticsId && !config.isDev && <GoogleAnalytics uid={config.googleAnalyticsId}/>}
		<Content />
		<Footer />
	</div>
}

export default Home
