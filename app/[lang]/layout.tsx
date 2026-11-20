import { notFound } from 'next/navigation'
import { isPrefixedLocale, prefixedLocales } from 'lib/i18n'

// Only the listed locales are built. English lives at the root, so /en and any
// other unknown first segment 404 instead of rendering a page.
export const dynamicParams = false

export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isPrefixedLocale(lang)) notFound()
  return <>{children}</>
}
