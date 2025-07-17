import Link from 'next/link';

const articles = [
  { href: '/articles/clubs', label: 'Clubs' },
  { href: '/articles/contacts', label: 'Contacts' },
  { href: '/articles/guides', label: 'Guides' },
  { href: '/articles/part-finder', label: 'V15-Part Finder' },
  { href: '/articles/parts', label: 'Parts Reference' },
  { href: '/articles/rules', label: 'Class Rules' }
];

export default function ArticlesIndex() {
  return (
    <div className="prose mx-auto py-8">
      <h1>Vanguard 15 Articles & Documentation</h1>
      <ul>
        {articles.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
