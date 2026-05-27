'use client'

import React, { useState } from 'react'

const navItems = ['About Us', 'Our Solutions', 'News & Events', 'FAQs']

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="absolute top-6 left-0 right-0 z-50 px-4 md:px-page">
      <div className="rounded-2xl md:rounded-full bg-white/10 backdrop-blur-md border border-white/20">

        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-2">
          <span className="font-mono font-bold text-xl text-white tracking-tight">eFiche</span>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-white/80 text-sm font-medium hover:text-white transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-primary border border-white/35 text-white text-sm font-medium tracking-wide transition hover:opacity-90"
            >
              Get Started
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden flex flex-col gap-1 px-6 pb-5">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-white/80 text-sm font-medium py-2 hover:text-white transition border-b border-white/10 last:border-0">
                {item}
              </a>
            ))}
            <a
              href="#"
              className="mt-3 text-center px-6 py-2.5 rounded-full bg-primary border border-white/35 text-white text-sm font-medium tracking-wide transition hover:opacity-90"
            >
              Get Started
            </a>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
