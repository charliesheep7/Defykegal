'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { getLocaleFromPath } from 'lib/i18n'

// The site shares one root layout, so the exported HTML says lang="en".
// Keep <html lang> in sync with the URL's locale (all supported locales are LTR).
export default function RTLHandler() {
  const pathname = usePathname() || '/'

  useEffect(() => {
    document.documentElement.setAttribute('lang', getLocaleFromPath(pathname))
    document.documentElement.setAttribute('dir', 'ltr')
  }, [pathname])

  return null
}
