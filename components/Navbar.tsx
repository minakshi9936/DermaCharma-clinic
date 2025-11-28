'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
];

const secondaryLinks = [
  { href: '/contact', label: 'Contact' },
];

const treatmentOptions = [
  { href: '/treatments/skin', label: 'Skin Treatments' },
  { href: '/treatments/hair', label: 'Hair Treatment' },
  { href: '/treatments/aesthetic', label: 'Aesthetic Treatment' },
  { href: '/treatments/laser', label: 'Laser Treatment' },
  { href: '/treatments/dermatosurgery', label: 'Dermatosurgery' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-[#83C5BE]/40 bg-[#2A3D45] backdrop-blur-xl shadow-md sticky top-0 z-40">
      <div className="w-full px-2 xs:px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-12 xs:h-14 sm:h-16">
            <div className="hidden md:flex flex-1 items-center space-x-2 lg:space-x-6 text-xs sm:text-sm font-medium text-[#fafbfc]">
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="px-1 xs:px-2 py-1 transition-colors hover:text-[#83C5BE]">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-1 md:flex-none justify-center px-2 xs:px-0">
              <Link href="/" className="inline-flex items-center" aria-label="Dermacharm home">
                <Image src="/derma.png" alt="Dermacharm" width={140} height={40} priority className="h-10 xs:h-12 sm:h-14 w-auto" />
              </Link>
            </div>

            <div className="hidden md:flex flex-1 justify-end items-center space-x-2 lg:space-x-6 text-xs sm:text-sm font-medium text-[#fafbfc]">
              <div className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full px-2 lg:px-3 py-1 xs:py-1.5 text-[#fafbfc] transition hover:text-[#83C5BE] text-xs lg:text-sm"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Treatments
                  <svg className="h-3 xs:h-3.5 lg:h-4 w-3 xs:w-3.5 lg:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="pointer-events-none absolute right-0 top-full mt-2 xs:mt-3 w-44 xs:w-52 lg:w-64 rounded-lg lg:rounded-2xl border border-[#83C5BE]/40 bg-white/95 p-2 lg:p-3 text-[#2A3D45] shadow-xl opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100 text-xs lg:text-sm">
                  <div className="flex flex-col gap-1">
                    {treatmentOptions.map((option) => (
                      <Link
                        key={option.href}
                        href={option.href}
                        className="rounded-lg px-2 xs:px-3 py-1 xs:py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition hover:bg-[#E9F5F3]/80 hover:text-[#83C5BE]"
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {secondaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="px-1 xs:px-2 py-1 transition-colors hover:text-[#83C5BE] text-xs lg:text-sm">
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="bg-[#83C5BE] text-white px-2 xs:px-3 lg:px-4 py-1 xs:py-1.5 lg:py-2 rounded-full text-xs lg:text-sm shadow-lg shadow-[#CDBBA7]/60 transition hover:-translate-y-0.5 hover:bg-[#83C5BE]/80 whitespace-nowrap"
              >
                Book Visit
              </Link>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex h-8 xs:h-9 w-8 xs:w-9 items-center justify-center rounded-full border border-[#83C5BE]/50 text-[#fafbfc] shadow-sm hover:text-[#83C5BE] transition"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path
                  d={menuOpen ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden origin-top overflow-hidden bg-white/95 px-3 xs:px-4 pb-3 xs:pb-4 shadow-xl shadow-[#E9F5F3] transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-1.5 xs:space-y-2 pt-2 xs:pt-3 text-[#2A3D45]">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 font-medium hover:bg-[#E9F5F3]/70 text-xs xs:text-sm transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="rounded-lg border border-[#83C5BE]/40 bg-white/90 px-3 py-2 xs:py-2.5 mt-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#83C5BE]">Treatments</p>
            <div className="mt-1.5 xs:mt-2 flex flex-col space-y-0.5">
              {treatmentOptions.map((option) => (
                <Link
                  key={option.href}
                  href={option.href}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-[#E9F5F3]/70 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 font-medium hover:bg-[#E9F5F3]/70 text-xs xs:text-sm transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="rounded-full bg-[#83C5BE] px-4 py-2 text-center text-white shadow text-xs xs:text-sm font-medium transition hover:bg-[#83C5BE]/80 mt-1"
            onClick={() => setMenuOpen(false)}
          >
            Book Visit
          </Link>
        </div>
      </div>
    </nav>
  );
}
