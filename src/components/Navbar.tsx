'use client'

import React, { useEffect, useState } from 'react'
import Button from './Button'

const navItems = [
  { label: 'About Us',       href: '#about' },
  { label: 'Our Solutions',  href: '#solutions' },
  { label: 'Contact',        href: '#contact' },
  { label: 'FAQs',           href: '#faqs' },
  { label: 'News & Events',  href: '#news' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = scrolled ? 'text-primary' : 'text-white'
  const mutedText = scrolled ? 'text-primary/70 hover:text-primary' : 'text-white/80 hover:text-white'
  const bg = scrolled ? 'bg-white/90 backdrop-blur-md border-gray-200' : 'bg-white/10 backdrop-blur-md border-white/20'

  const hamburgerColor = scrolled ? 'bg-primary' : 'bg-white'

  return (
    <nav className={`fixed top-6 left-0 right-0 z-50 px-4 md:px-page transition-all duration-300`}>
      <div className={`rounded-2xl md:rounded-full border transition-all duration-300 ${bg}`}>

        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-2">
          <span className={`font-mono font-bold text-xl tracking-tight transition-colors duration-300 ${textColor}`}>eFiche</span>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={`text-sm font-medium transition-colors duration-300 ${mutedText}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button href="#contact" variant="primary" className="hidden md:inline-flex">Get Started</Button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? '500px' : '0px' }}
        >
          <div className="flex flex-col gap-1 px-6 pb-5">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className={`text-sm font-medium py-2 transition border-b last:border-0 ${scrolled ? 'text-primary/70 border-gray-100 hover:text-primary' : 'text-white/80 border-white/10 hover:text-white'}`}>
                {item.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="inline-flex mt-3 w-full" onClick={() => setOpen(false)}>Get Started</Button>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar