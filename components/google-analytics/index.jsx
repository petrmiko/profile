import { string } from 'prop-types'
import Script from 'next/script'

const GoogleAnalytics = ({ uid }) => {
	return <>
		<Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${uid}`}/>
		<Script
			id='google-analytics'
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
				window.dataLayer = window.dataLayer || [];
					function gtag(){ dataLayer.push(arguments); }
					gtag('js', new Date());
					
					gtag("config", "${uid}");
			`,
			}}
		/>
	</>
}

GoogleAnalytics.propTypes = {
	uid: string.isRequired,
}

export default GoogleAnalytics
