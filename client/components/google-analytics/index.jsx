import { string } from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const GoogleAnalytics = ({ uid }) => {
	return <Helmet>
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${uid}`} />
		<script>
			{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){ dataLayer.push(arguments); }
				gtag("js", new Date());
				
				gtag("config", "${uid}");
			`}
		</script>
	</Helmet>
}

GoogleAnalytics.propTypes = {
	uid: string.isRequired,
}

export default GoogleAnalytics
