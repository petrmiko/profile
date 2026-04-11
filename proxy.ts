import { NextRequest, NextResponse } from 'next/server'

const LOCALES = ['cs-CZ', 'en-US'] as const
type Locale = (typeof LOCALES)[number]

const COOKIE = 'NEXT_LOCALE'

function getDomainLocale(host: string): Locale {
	if (process.env.DOMAIN_EN && host.includes(process.env.DOMAIN_EN)) return 'en-US'
	return 'cs-CZ'
}

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl

	// Already rewritten — skip to avoid infinite loop
	if (LOCALES.some((l) => pathname.startsWith(`/${l}`))) return

	const host = request.headers.get('host') ?? ''
	const cookieLocale = request.cookies.get(COOKIE)?.value as Locale | undefined
	const locale: Locale =
		cookieLocale && LOCALES.includes(cookieLocale) ? cookieLocale : getDomainLocale(host)

	return NextResponse.rewrite(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
	matcher: ['/((?!_next|favicon|assets|robots\\.txt).*)'],
}
