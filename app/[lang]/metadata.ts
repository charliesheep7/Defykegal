import type { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'
import { localeInfo, type PrefixedLocale } from 'lib/i18n'

/**
 * Page metadata for a localized route. `indexed` pages get hreflang alternates;
 * the others (English content behind translated chrome) point their canonical at
 * the English page and stay out of the index.
 */
export function localizedMetadata({
  lang,
  title,
  description,
  path,
  languages,
  canonical,
}: {
  lang: PrefixedLocale
  title: string
  description: string
  path: string
  languages?: Record<string, string>
  canonical?: string
}): Metadata {
  const base = genPageMetadata({ title, description })
  return {
    ...base,
    openGraph: { ...base.openGraph, locale: localeInfo[lang].ogLocale, url: path },
    alternates: { canonical: canonical ?? path, ...(languages ? { languages } : {}) },
    ...(languages ? {} : { robots: { index: false, follow: true } }),
  }
}
