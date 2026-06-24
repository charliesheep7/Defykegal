'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'

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
      ? 'bg-[#0a0a0a]/85 backdrop-blur-xl border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.06)]'
      : 'bg-transparent'
  )

  return (
    <header className={headerClass} role="banner">
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              Defy<span className="text-white/40">.</span>
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-1 leading-5 sm:gap-2">
          <div className="no-scrollbar hidden items-center gap-x-1 sm:flex">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-white/60 transition-all duration-200 hover:bg-white/5 hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <a
            href="https://apps.apple.com/app/defy-kegel-for-men/id0000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 sm:inline-flex"
          >
            Download
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
