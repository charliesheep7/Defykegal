import type { Metadata } from 'next'
import { getDictionary } from './dictionaries'
import { DictionaryProvider } from './DictionaryProvider'

export const dynamic = 'force-static'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' }>
}): Promise<Metadata> {
  return {
    openGraph: {
      locale: 'en_US',
    },
  }
}

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: 'en' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return <DictionaryProvider dictionary={dict}>{children}</DictionaryProvider>
}
