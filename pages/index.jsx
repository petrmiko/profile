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
			<link rel="shortcut icon" href="/assets/favicon.ico"></link>
			<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"/>
			<link rel="shortcut icon" href="/assets/favicon.png" />
		</Head>

		{config.googleAnalyticsId && !config.isDev && <GoogleAnalytics uid={config.googleAnalyticsId}/>}
		<Content />
		<Footer />
	</div>
}

export default Home
