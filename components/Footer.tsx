'use client'

import Link from './Link'
import { useLocale } from './hooks/useLocale'
import { dictionaries } from 'lib/dictionaries'

const footerLinks = [
  { href: '/kegel-guide', key: 'kegelGuide' },
  { href: '/about', key: 'about' },
  { href: '/blog', key: 'blog' },
  { href: '/editorial-policy', key: 'editorialPolicy' },
  { href: '/contact', key: 'contact' },
  { href: '/privacy', key: 'privacy' },
  { href: '/terms', key: 'terms' },
] as const

export default function Footer() {
  const { currentLang } = useLocale()
  const t = dictionaries[currentLang].footer

  return (
    <footer className="mt-16 border-t border-white/8">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Defy</p>
            <p className="mt-1 max-w-xs text-xs text-gray-500">{t.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-gray-300"
              >
                {t[link.key]}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-gray-600">
          © {new Date().getFullYear()} Defy. {t.disclaimer}
        </p>
      </div>
    </footer>
  )
}
