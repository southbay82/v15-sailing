import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-navy-blue text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">V-15 Sailing</Link>
        <ul className="flex space-x-4">
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
