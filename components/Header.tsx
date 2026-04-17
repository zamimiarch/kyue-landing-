'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="animate-fade-in group hover:opacity-80 transition-opacity duration-300"
          aria-label="Kyue home"
        >
          <Image
            src="/logo/echoed_curves_lockup_v2.png"
            alt="Kyue"
            width={400}
            height={144}
            className="h-36 w-auto object-contain mt-4"
            priority
          />
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 animate-fade-in delay-100">
          {['Features', 'Science', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-cream-muted hover:text-cream transition-colors duration-200 font-body"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#beta"
          className="animate-fade-in delay-200 text-sm font-body font-medium px-5 py-2 rounded-full bg-coral text-bg hover:bg-coral-dark hover:scale-105 transition-all duration-200 shadow-lg shadow-coral/20"
        >
          Join Beta
        </a>
      </div>
    </header>
  )
}
