import type { Metadata } from 'next'
import I18nProvider from '../../components/i18n/provider'
import Footer from '../../components/footer'
import config from '../../config'
import czech from '../../components/languages/translations/cz.json'
import english from '../../components/languages/translations/en.json'
import '../../styles/globals.css'

const translations = { 'cs-CZ': czech, 'en-US': english }

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: string }>
}): Promise<Metadata> {
	const { lang } = await params
	const t = translations[lang as keyof typeof translations] ?? czech
	return {
		title: t['site-name'],
		description: t['site-description'],
		authors: [{ name: config.siteAuthor }],
		icons: {
			icon: [
				{ url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
				{ url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			],
			apple: '/assets/apple-touch-icon.png',
			shortcut: '/assets/favicon.ico',
		},
	}
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params
	return (
		<I18nProvider lang={lang}>
			<div className="grid grid-rows-[1fr_auto] min-h-screen">
				{children}
				<Footer />
			</div>
		</I18nProvider>
	)
}
