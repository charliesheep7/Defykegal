// Single source of truth for the site's locales.
// English is served at the root ("/", "/blog"); every other locale is served
// under a prefix ("/de", "/de/blog") for the routes listed in LOCALIZED_ROUTES.
// Everything else (blog posts, tags, about, kegel-guide, ...) is English-only and
// is never prefixed.

export const locales = ['en', 'de', 'fr', 'es', 'it'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

/** Locales that live under a URL prefix (all except the default). */
export const prefixedLocales = ['de', 'fr', 'es', 'it'] as const
export type PrefixedLocale = (typeof prefixedLocales)[number]

export const localeInfo: Record<Locale, { label: string; flag: string; ogLocale: string }> = {
  en: { label: 'English', flag: '🇺🇸', ogLocale: 'en_US' },
  de: { label: 'Deutsch', flag: '🇩🇪', ogLocale: 'de_DE' },
  fr: { label: 'Français', flag: '🇫🇷', ogLocale: 'fr_FR' },
  es: { label: 'Español', flag: '🇪🇸', ogLocale: 'es_ES' },
  it: { label: 'Italiano', flag: '🇮🇹', ogLocale: 'it_IT' },
}

/** Routes that exist in every locale. Keep in sync with app/[lang]/. */
export const LOCALIZED_ROUTES = ['/', '/blog', '/privacy', '/terms'] as const

/** Localized routes that are indexable and get hreflang alternates + sitemap entries. */
export const INDEXED_LOCALIZED_ROUTES = ['/'] as const

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}

export function isPrefixedLocale(value: string | undefined): value is PrefixedLocale {
  return !!value && (prefixedLocales as readonly string[]).includes(value)
}

/** Locale of a pathname, matched on the whole first segment ("/de", "/de/blog"). */
export function getLocaleFromPath(pathname: string): Locale {
  const first = (pathname || '/').split('/')[1]
  return isPrefixedLocale(first) ? first : defaultLocale
}

/** Pathname without its locale prefix ("/de/blog" -> "/blog", "/de" -> "/"). */
export function stripLocale(pathname: string): string {
  const path = pathname || '/'
  const first = path.split('/')[1]
  if (!isPrefixedLocale(first)) return path
  return path.slice(first.length + 1) || '/'
}

function splitSuffix(path: string): [string, string] {
  const i = path.search(/[?#]/)
  return i === -1 ? [path, ''] : [path.slice(0, i), path.slice(i)]
}

export function isLocalizedRoute(path: string): boolean {
  const [base] = splitSuffix(path)
  const clean = base !== '/' ? base.replace(/\/$/, '') : base
  return (LOCALIZED_ROUTES as readonly string[]).includes(clean)
}

/**
 * Href for `path` in `locale`. Only routes that exist in that locale get a
 * prefix; English-only routes are returned unchanged so they never 404.
 */
export function localizePath(path: string, locale: Locale): string {
  const stripped = stripLocale(path)
  if (locale === defaultLocale || !isLocalizedRoute(stripped)) return stripped
  const [base, suffix] = splitSuffix(stripped)
  return (base === '/' ? `/${locale}` : `/${locale}${base}`) + suffix
}

/**
 * Where the language switcher should send someone on `pathname`: the same page
 * if it exists in `target`, otherwise the closest localized page.
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const base = stripLocale(pathname)
  if (target === defaultLocale || isLocalizedRoute(base)) return localizePath(base, target)
  if (base.startsWith('/blog') || base.startsWith('/tags')) return `/${target}/blog`
  return `/${target}`
}

/** hreflang map for a localized route, e.g. languageAlternates('/') */
export function languageAlternates(route: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const locale of locales) languages[locale] = localizePath(route, locale)
  languages['x-default'] = localizePath(route, defaultLocale)
  return languages
}
