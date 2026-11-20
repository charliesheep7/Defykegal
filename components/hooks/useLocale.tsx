'use client'

import { usePathname } from 'next/navigation'
import { defaultLocale, getLocaleFromPath, localizePath, type Locale } from 'lib/i18n'

/**
 * Hook to get the current locale and create locale-aware URLs
 */
export function useLocale() {
  const pathname = usePathname() || '/'
  const currentLang: Locale = getLocaleFromPath(pathname)

  /**
   * Convert a path to a locale-aware path. Only routes that exist in the
   * current locale (see LOCALIZED_ROUTES) get a prefix; English-only pages
   * such as blog posts keep their unprefixed URL.
   */
  const getLocalePath = (path: string): string => localizePath(path, currentLang)

  return {
    currentLang,
    getLocalePath,
    isEnglish: currentLang === defaultLocale,
  }
}
