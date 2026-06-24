'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClass = clsx(
    'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-500 ease-out',
    scrolled
      ? 'bg-white/80 dark:bg-gray-950/85 backdrop-blur-xl shadow-[0_18px_48px_rgba(15,23,42,0.12)] border-white/50 dark:border-white/10'
      : 'bg-transparent'
  )

  return (
    <header className={headerClass} role="banner">
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-[--color-accent-600] dark:text-[--color-accent-400]">
              Defy
            </span>
          </div>
        </Link>
        <div className="flex items-center space-x-3 leading-5 sm:space-x-5">
          <div className="no-scrollbar hidden items-center gap-x-1 sm:flex">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="rounded-lg px-4 py-2 font-medium text-[--color-text] transition-all duration-200 hover:bg-[--color-surface] hover:text-[--color-accent-600] dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-[--color-accent-400]"
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
