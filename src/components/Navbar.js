import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-navy-blue text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">V-15 Sailing</Link>
        <button
          type="button"
          className="sm:hidden focus:outline-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <ul className={`sm:flex space-x-4 ${open ? 'block' : 'hidden'} sm:block mt-4 sm:mt-0`}>
          {[
            { href: '/articles', label: 'Articles' },
            { href: '/parts', label: 'Parts' },
            { href: '/regattas', label: 'Regattas' },
            { href: '/about', label: 'About' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-sky-blue">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
