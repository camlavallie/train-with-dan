'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  {
    label: 'Find More Training Events',
    href: 'https://powerandlove.org',
    primary: false,
  },
  {
    label: 'Give',
    href: 'https://lifestylechristianity-bloom.kindful.com/?campaign=1352010&utm_medium=email&_hsenc=p2ANqtz-9hmLSLGouVJ-XB9XUhMsv55RgnKGUcbwzA_Dn4fi-vI60uaNQIufUefDd9fpX28deoO7bq2v5jczbfKkuyoxdwOqfiCw&_hsmi=27014432&utm_content=27014432&utm_source=hs_email',
    primary: true,
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="https://powerandlove.org"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:text-amber-300"
          >
            Train With Dan
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="https://powerandlove.org"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              Find More Training Events
            </Link>

            <Link
              href="https://lifestylechristianity-bloom.kindful.com/?campaign=1352010&utm_medium=email&_hsenc=p2ANqtz-9hmLSLGouVJ-XB9XUhMsv55RgnKGUcbwzA_Dn4fi-vI60uaNQIufUefDd9fpX28deoO7bq2v5jczbfKkuyoxdwOqfiCw&_hsmi=27014432&utm_content=27014432&utm_source=hs_email"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-amber-200"
            >
              Give
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-5 bg-white transition ${
                  isOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-[2px] w-5 bg-white transition ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-[2px] w-5 bg-white transition ${
                  isOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? 'max-h-64 pb-5 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-3 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className={`flex w-full items-center justify-center rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition ${
                  link.primary
                    ? 'bg-amber-300 text-black hover:bg-amber-200'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}